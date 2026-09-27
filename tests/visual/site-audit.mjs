// Site audit: every route in sitemap.xml, at phone, tablet and desktop widths.
//   npm run build && npx next start -p 3100     (one terminal)
//   npm run test:site                           (another)
// Checks: horizontal overflow, elements outside the viewport, touch targets under 44px (phone),
// exactly one H1, a title, a meta description, console errors, and that every internal link resolves.
// Exits 1 on any failure.
import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const base = process.env.BASE_URL ?? "http://localhost:3100";
const out = "reference/build/pages";
const widths = [375, 768, 1440];
const extra = ["/thank-you/", "/case-study/case-study-1/", "/case-study/case-study-2/"];
const shots = (process.env.SHOTS ?? "").split(",").filter(Boolean);

await mkdir(out, { recursive: true });

for (let i = 0; i < 40; i++) {
  try {
    if ((await fetch(base)).ok) break;
  } catch {}
  await new Promise((resolve) => setTimeout(resolve, 500));
}

const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const routes = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname).concat(extra))];

const browser = await chromium.launch({ channel: "chrome", headless: true });
const failures = [];
const links = new Set();

async function audit(route, width) {
  const context = await browser.newContext({
    viewport: { width, height: 800 },
    deviceScaleFactor: 1,
    isMobile: width < 768,
    hasTouch: width < 992,
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    // Missing placeholder images are expected until real assets are supplied.
    if (message.type() === "error" && !/Failed to load resource/.test(message.text())) errors.push(message.text());
  });
  await page.addInitScript(() => localStorage.setItem("devhire-consent", "rejected"));
  const response = await page.goto(base + route, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);

  const report = await page.evaluate((phone) => {
    const vw = document.documentElement.clientWidth;
    const name = (el) => {
      const cls = typeof el.className === "string" ? el.className.split(" ")[0] : "";
      return `${el.tagName.toLowerCase()}${cls ? "." + cls : ""}`;
    };
    const skip = ".reviews__viewport, .hero__stage, .sr-only";
    const outside = new Set();
    for (const el of document.querySelectorAll("body *")) {
      if (el.closest(skip)) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.right > vw + 1 || r.left < -1) outside.add(`${name(el)} ${Math.round(r.left)}..${Math.round(r.right)}`);
    }
    const small = new Set();
    if (phone) {
      for (const el of document.querySelectorAll("a, button, input, select, textarea")) {
        if (el.closest(".sr-only") || el.classList.contains("sr-only") || el.closest("[aria-hidden='true']")) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        // Links inside running text are exempt, as WCAG 2.5.8 allows.
        if (el.tagName === "A" && el.closest(".prose p, .prose li, .prose td")) continue;
        if (r.height < 43.5) small.add(`${name(el)} ${Math.round(r.height)}px "${(el.textContent || "").trim().slice(0, 24)}"`);
      }
    }
    return {
      overflow: document.documentElement.scrollWidth > vw,
      outside: [...outside].slice(0, 6),
      small: [...small].slice(0, 6),
      h1: document.querySelectorAll("h1").length,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content ?? "",
      links: [...document.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href")),
      unresolved: /\[[A-Za-z][^\]]*\]/.test(document.querySelector("h1")?.textContent ?? ""),
    };
  }, width < 768);

  const problems = [];
  if (response?.status() !== 200) problems.push(`status ${response?.status()}`);
  if (report.overflow) problems.push("page scrolls horizontally");
  for (const item of report.outside) problems.push(`outside viewport: ${item}`);
  for (const item of report.small) problems.push(`small target: ${item}`);
  if (width === 1440) {
    if (report.h1 !== 1) problems.push(`h1 count ${report.h1}`);
    if (!report.title) problems.push("no title");
    if (report.description.length < 30) problems.push("meta description missing or too short");
    if (report.unresolved) problems.push("h1 shows raw [brackets]");
    for (const link of report.links) links.add(link.split("#")[0]);
  }
  for (const error of errors.slice(0, 3)) problems.push(`console: ${error.slice(0, 140)}`);
  if (problems.length) failures.push({ route, width, problems });

  if (shots.includes(route)) {
    const file = route.replace(/\//g, "_").replace(/^_|_$/g, "") || "home";
    await page.screenshot({ path: `${out}/${file}-${width}.png`, fullPage: true, animations: "disabled" });
  }
  await context.close();
}

// Four pages at a time keeps the run short without starving the server.
const jobs = routes.flatMap((route) => widths.map((width) => [route, width]));
let cursor = 0;
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (cursor < jobs.length) {
      const [route, width] = jobs[cursor++];
      await audit(route, width);
    }
  }),
);
await browser.close();

const broken = [];
for (const link of links) {
  if (!link || link.startsWith("/api/")) continue;
  const response = await fetch(base + link, { redirect: "manual" });
  if (response.status >= 400) broken.push(`${response.status} ${link}`);
}

console.log(`routes ${routes.length}, checks ${jobs.length}, internal links ${links.size}`);
for (const failure of failures.sort((a, b) => a.route.localeCompare(b.route) || a.width - b.width)) {
  console.log(`FAIL ${failure.route} @${failure.width}`);
  for (const problem of failure.problems) console.log(`   ${problem}`);
}
for (const link of broken) console.log(`BROKEN LINK ${link}`);
console.log(failures.length || broken.length ? `\n${failures.length} failing checks, ${broken.length} broken links` : "\nALL PASS");
process.exit(failures.length || broken.length ? 1 : 0);
