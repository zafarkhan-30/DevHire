"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Item = { src: string; alt: string; caption: string };

// Click-to-zoom viewer for screenshots. Any button with a data-zoom attribute (the image address) opens it;
// data-zoom-alt and data-zoom-caption describe the image. All zoomable images on the page form one set,
// so the arrows and the left and right keys move between them. Escape or a click outside the image closes it.
export function Lightbox() {
  const pathname = usePathname();
  const [items, setItems] = useState<Item[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIndex(null);
    opener.current?.focus();
  }, []);

  const step = useCallback((by: number) => setIndex((current) => (current === null ? current : (current + by + items.length) % items.length)), [items.length]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>("[data-zoom]");
      if (!trigger) return;
      event.preventDefault();
      const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-zoom]"));
      // The same image can appear twice on a page; keep the first of each.
      const unique = triggers.filter((el, i) => triggers.findIndex((other) => other.dataset.zoom === el.dataset.zoom) === i);
      setItems(unique.map((el) => ({ src: el.dataset.zoom ?? "", alt: el.dataset.zoomAlt ?? "", caption: el.dataset.zoomCaption ?? "" })));
      setIndex(Math.max(0, unique.findIndex((el) => el.dataset.zoom === trigger.dataset.zoom)));
      opener.current = trigger;
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Close when the visitor moves to another page.
  useEffect(() => setIndex(null), [pathname]);

  const open = index !== null;
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      // Keep keyboard focus inside the viewer.
      if (event.key === "Tab") {
        const focusable = Array.from(document.querySelectorAll<HTMLElement>(".lightbox button"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  if (index === null || !items[index]) return null;
  const item = items[index];
  const many = items.length > 1;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
      <button ref={closeButton} type="button" className="lightbox__close" aria-label="Close image viewer" onClick={close}>
        <X size={22} aria-hidden="true" />
      </button>

      {many ? (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          aria-label="Previous image"
          onClick={(event) => {
            event.stopPropagation();
            step(-1);
          }}
        >
          <ChevronLeft size={26} aria-hidden="true" />
        </button>
      ) : null}

      {/* key restarts the zoom animation when the image changes */}
      <figure key={item.src} className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.src} alt={item.alt} />
        <figcaption>
          {item.caption ? <span>{item.caption}</span> : <span />}
          {many ? (
            <span className="lightbox__count" aria-live="polite">
              {index + 1} / {items.length}
            </span>
          ) : null}
        </figcaption>
      </figure>

      {many ? (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          aria-label="Next image"
          onClick={(event) => {
            event.stopPropagation();
            step(1);
          }}
        >
          <ChevronRight size={26} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
