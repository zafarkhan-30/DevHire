// Phase 0: layout measurements from the reference site. Records geometry and computed
// style values only (no page text) so inner templates can match spacing and rhythm.
//   node tests/visual/measure-reference.mjs
import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const origin = "https://hiredeveloper.dev";
const paths = [
  "/hire/react-js-developers/",
  "/hire/microsoft-developers/",
  "/hire/dedicated-developers/",
  "/service/dedicated-developers/",
  "/case-study/our-work/",
  "/compare/microservices-vs-modular-monolith/",
  "/about-hire-developers/",
  "/how-we-vet/",
  "/contact-us/",
  "/resources/developer-cost-estimate/",
  "/technologies/",
  "/insights/",
];

await mkdir("reference/measurements", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const summary = [];

for (const path of paths) {
  const page = await context.newPage();
  try {
    const response = await page.goto(origin + path, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(2500);
    const data = await page.evaluate(() => {
      const px = (v) => Math.round(parseFloat(v) || 0);
      const style = (el) => {
        const s = getComputedStyle(el);
        return {
          font: `${s.fontSize}/${s.fontWeight}`,
          lineHeight: s.lineHeight,
          color: s.color,
          radius: s.borderRadius,
          shadow: s.boxShadow === "none" ? "" : s.boxShadow.slice(0, 80),
          padding: `${px(s.paddingTop)} ${px(s.paddingRight)} ${px(s.paddingBottom)} ${px(s.paddingLeft)}`,
          border: s.borderTopWidth !== "0px" ? `${s.borderTopWidth} ${s.borderTopColor}` : "",
          background: s.backgroundColor,
        };
      };
      const main = document.querySelector("main") ?? document.body;
      const sections = [...main.querySelectorAll("section, main > div")].filter((el) => {
        const r = el.getBoundingClientRect();
        return r.height > 120 && r.width > 1000 && !el.closest("header, footer") && !el.parentElement.closest("section");
      });
      return sections.map((section) => {
        const s = getComputedStyle(section);
        const r = section.getBoundingClientRect();
        const container = section.querySelector("[class*='container']");
        const cr = container?.getBoundingClientRect();
        // Largest repeated sibling group = the card grid of this section.
        let grid = null;
        for (const parent of section.querySelectorAll("*")) {
          const kids = [...parent.children].filter((k) => k.getBoundingClientRect().height > 40);
          if (kids.length < 2 || kids.length > 12) continue;
          const sameTag = kids.every((k) => k.tagName === kids[0].tagName);
          const tops = new Set(kids.map((k) => Math.round(k.getBoundingClientRect().top)));
          if (!sameTag || tops.size === kids.length) continue;
          const first = kids[0].getBoundingClientRect();
          const second = kids[1].getBoundingClientRect();
          const perRow = kids.filter((k) => Math.round(k.getBoundingClientRect().top) === Math.round(first.top)).length;
          if (!grid || kids.length > grid.count) {
            const card = kids[0].firstElementChild && kids[0].children.length === 1 ? kids[0].firstElementChild : kids[0];
            grid = {
              count: kids.length,
              perRow,
              itemWidth: Math.round(first.width),
              gap: Math.round(second.left - first.right),
              card: style(card),
            };
          }
        }
        const h = section.querySelector("h1, h2");
        const p = section.querySelector("p");
        const btn = section.querySelector("a[class*='btn'], button[class*='btn']");
        return {
          cls: (typeof section.className === "string" ? section.className : "").slice(0, 80),
          height: Math.round(r.height),
          padTop: px(s.paddingTop),
          padBottom: px(s.paddingBottom),
          bg: s.backgroundColor,
          bgImage: s.backgroundImage === "none" ? "" : s.backgroundImage.slice(0, 90),
          containerWidth: cr ? Math.round(cr.width) : null,
          containerLeft: cr ? Math.round(cr.left) : null,
          headingTag: h?.tagName ?? null,
          heading: h ? style(h) : null,
          headingAlign: h ? getComputedStyle(h).textAlign : null,
          para: p ? style(p) : null,
          button: btn ? style(btn) : null,
          grid,
          tables: section.querySelectorAll("table").length,
          forms: section.querySelectorAll("form").length,
        };
      });
    });
    const name = path.replace(/\//g, "_").replace(/^_|_$/g, "");
    await writeFile(`reference/measurements/${name}.json`, JSON.stringify(data, null, 1));
    summary.push(`${response?.status()} ${path} sections=${data.length}`);
  } catch (error) {
    summary.push(`ERR ${path} ${String(error.message).split("\n")[0]}`);
  }
  await page.close();
}

await browser.close();
console.log(summary.join("\n"));
