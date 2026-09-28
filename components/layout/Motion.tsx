"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Scroll-in motion for page sections. Each block inside a section fades up as it enters the viewport,
// and items in card grids follow one after another. Works on every page without per-component markup.
// Content is never hidden without JavaScript (the html.motion class is added here), anything already on
// screen at load shows at once, and visitors who ask for reduced motion get no animation (see base.css).
const SECTIONS = "main section:not(.hero):not(.phero)";
const STEP_MS = 70;
const MAX_STEPS = 6;

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("motion");

    const targets: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>(SECTIONS).forEach((section) => {
      const container = section.querySelector<HTMLElement>(":scope > .container") ?? section;
      for (const child of Array.from(container.children)) {
        if (!(child instanceof HTMLElement)) continue;
        targets.push(child);
        // Items in grid or flex lists (cards, steps, stats) arrive in sequence.
        child.querySelectorAll<HTMLElement>("ul, ol").forEach((list) => {
          const display = getComputedStyle(list).display;
          if (!/grid|flex/.test(display) || list.children.length < 2 || list.closest("nav, [role=tablist], form")) return;
          Array.from(list.children).forEach((item, index) => {
            (item as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index, MAX_STEPS) * STEP_MS + 120}ms`);
            targets.push(item as HTMLElement);
          });
        });
      }
    });

    const fold = window.innerHeight;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const target of targets) {
      if (target.classList.contains("reveal")) continue;
      // Already visible at load: show without animating, so nothing flashes.
      if (target.getBoundingClientRect().top < fold * 0.92) {
        target.classList.add("reveal", "is-in", "is-instant");
        continue;
      }
      // Hide at once (no fade-out), then enable the transition two frames later.
      target.classList.add("reveal", "is-instant");
      observer.observe(target);
    }
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => targets.forEach((target) => !target.classList.contains("is-in") && target.classList.remove("is-instant")));
    });

    // Safety net: never leave content hidden (e.g. printing, or a tab restored far down the page).
    const reveal = () => targets.forEach((target) => target.classList.add("is-in"));
    window.addEventListener("beforeprint", reveal);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("beforeprint", reveal);
    };
  }, [pathname]);

  return null;
}
