// Responsive audit: run with the site served on BASE_URL (default http://localhost:3100).
//   node tests/visual/responsive-audit.mjs
// Reports page overflow, elements poking outside the viewport and touch targets under 44px.
// Exits 1 when any width fails.
import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const base = process.env.BASE_URL ?? "http://localhost:3100";
const out = "reference/build/responsive";
const widths = [320, 360, 375, 414, 576, 767, 768, 991, 1199, 1440];
const shots = [375, 768];

await mkdir(out, { recursive: true });

for (let i = 0; i < 40; i++) {
  try {
    if ((await fetch(base)).ok) break;
  } catch {}
  await new Promise((resolve) => setTimeout(resolve, 500));
}

const browser = await chromium.launch({ channel: "chrome", headless: true });
let failed = false;

for (const width of widths) {
  const touch = width < 992;
  const context = await browser.newContext({
    viewport: { width, height: 800 },
    deviceScaleFactor: 1,
    isMobile: width < 768,
    hasTouch: touch,
  });
  const page = await context.newPage();
  await page.addInitScript(() => localStorage.setItem("devhire-consent", "rejected"));
  await page.goto(base, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  const report = await page.evaluate((checkTargets) => {
    const vw = document.documentElement.clientWidth;
    const name = (el) => {
      const cls = typeof el.className === "string" ? el.className.split(" ")[0] : "";
      return `${el.tagName.toLowerCase()}${cls ? "." + cls : ""}`;
    };
    // Carousels and the marquee are wider than the viewport by design.
    const skip = ".reviews__viewport, .hero__stage, .sr-only";
    const outside = new Set();
    for (const el of document.querySelectorAll("body *")) {
      if (el.closest(skip) || el.closest("svg")?.parentElement?.closest(skip)) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.right > vw + 1 || r.left < -1) outside.add(`${name(el)} ${Math.round(r.left)}..${Math.round(r.right)}`);
    }
    const small = new Set();
    if (checkTargets) {
      for (const el of document.querySelectorAll("a, button, input, select")) {
        if (el.closest(".sr-only") || el.classList.contains("sr-only")) continue;
        if (el.closest("[aria-hidden='true']")) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        if (r.height < 44) small.add(`${name(el)} ${Math.round(r.height)}px`);
      }
    }
    return {
      pageOverflow: document.documentElement.scrollWidth > vw,
      headerHeight: Math.round(document.querySelector(".site-header").getBoundingClientRect().height),
      outside: [...outside],
      small: [...small],
    };
  }, width < 768);

  const ok = !report.pageOverflow && report.outside.length === 0 && report.small.length === 0;
  if (!ok) failed = true;
  console.log(`${ok ? "PASS" : "FAIL"} ${width}px  header ${report.headerHeight}px`);
  if (report.pageOverflow) console.log("   page scrolls horizontally");
  for (const item of report.outside) console.log("   outside viewport:", item);
  for (const item of report.small) console.log("   small target:", item);

  if (shots.includes(width)) {
    const sections = await page.locator("main > section").all();
    let n = 1;
    for (const section of sections) {
      // Park the section below the pinned header so it is not covered in the capture.
      await section.evaluate((el) => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 200));
      await page.evaluate(() => (document.querySelector(".site-header").style.visibility = "hidden"));
      await section.screenshot({ path: `${out}/w${width}-${String(n).padStart(2, "0")}.png`, animations: "disabled" });
      n++;
    }
    await page.locator(".site-footer").screenshot({ path: `${out}/w${width}-footer.png`, animations: "disabled" });
    await page.evaluate(() => (document.querySelector(".site-header").style.visibility = ""));
  }

  if (width === 375) {
    // Header at top of page, then pinned after scrolling, then drawer open while scrolled.
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `${out}/w375-top.png` });
    await page.evaluate(() => window.scrollTo(0, 1200));
    await page.waitForTimeout(200);
    const pinned = await page.evaluate(() => {
      const bar = document.querySelector(".site-header__bar").getBoundingClientRect();
      return { barTop: Math.round(bar.top), barHeight: Math.round(bar.height) };
    });
    console.log("   pinned bar after scroll:", JSON.stringify(pinned));
    await page.screenshot({ path: `${out}/w375-scrolled.png` });
    await page.locator(".site-header__burger").tap();
    await page.waitForTimeout(250);
    await page.locator(".drawer__toggle").nth(1).tap();
    await page.waitForTimeout(250);
    const drawer = await page.evaluate(() => {
      const r = document.querySelector(".drawer").getBoundingClientRect();
      return { top: Math.round(r.top), bottom: Math.round(r.bottom), viewport: window.innerHeight };
    });
    console.log("   drawer while scrolled:", JSON.stringify(drawer));
    await page.screenshot({ path: `${out}/w375-drawer.png` });
  }

  await context.close();
}

await browser.close();
process.exit(failed ? 1 : 0);
