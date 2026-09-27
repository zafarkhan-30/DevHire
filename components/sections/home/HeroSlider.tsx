"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { hero } from "@/content/home";

// Time each slide stays on screen before the next one fades in.
const SLIDE_MS = 6000;

// Photo layered over the slide's tone gradient, which shows through if the file is missing.
function photo(image: string): CSSProperties | undefined {
  return image ? { backgroundImage: `url(${image}), var(--tone)` } : undefined;
}

export function HeroSlider() {
  const count = hero.slides.length;
  const [active, setActive] = useState(0);
  // Paused by the button stays paused; hover and keyboard focus pause only while they last.
  const [stopped, setStopped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchX = useRef<number | null>(null);

  const paused = stopped || hovered || focused || reducedMotion;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((index: number) => setActive(((index % count) + count) % count), [count]);

  // Restarting the timer on every change keeps each slide on screen for the full interval.
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => goTo(active + 1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [active, paused, goTo]);

  return (
    <section
      className={`hero${paused ? " is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="SyntaxHires services"
      style={{ "--slide-ms": `${SLIDE_MS}ms` } as CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
      onTouchStart={(event) => {
        touchX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchX.current;
        if (Math.abs(delta) > 50) goTo(active + (delta < 0 ? 1 : -1));
        touchX.current = null;
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") goTo(active + 1);
        if (event.key === "ArrowLeft") goTo(active - 1);
      }}
    >
      <div className="hero__stage" aria-live={paused ? "polite" : "off"}>
        {hero.slides.map((slide, index) => {
          const Title = index === 0 ? "h1" : "h2";
          const current = index === active;
          return (
            <div
              key={slide.thumb}
              className={`hero__slide hero__slide--${slide.tone}${"imageAlign" in slide && slide.imageAlign === "right" ? " hero__slide--right" : ""}${current ? " is-active" : ""}`}
              style={photo(slide.image)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}: ${slide.thumb}`}
              aria-hidden={!current}
              inert={!current}
            >
              <div className="hero__content">
                <span className="pill hero__pill">
                  <span className="hero__dot" aria-hidden="true" />
                  {slide.eyebrow}
                </span>
                <Title className="h1">
                  {slide.title} <span className="accent">{slide.titleAccent}</span>
                </Title>
                <p className="hero__text">{slide.text}</p>
                {"tagline" in slide && slide.tagline ? <p className="hero__tagline">{slide.tagline}</p> : null}
                <Link href={slide.cta.href} className="btn btn--primary">
                  {slide.cta.label}
                </Link>
                {"micro" in slide && slide.micro ? <p className="hero__micro">{slide.micro}</p> : null}
                <ul className="hero__chips">
                  {slide.chips.map((chip) => (
                    <li key={chip}>
                      <span className="hero__dot" aria-hidden="true" />
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero__nav">
        <div className="hero__cards" role="tablist" aria-label="Choose slide">
          {hero.slides.map((slide, index) => {
            const current = index === active;
            return (
              <button
                key={slide.thumb}
                type="button"
                role="tab"
                aria-selected={current}
                aria-label={`Slide ${index + 1}: ${slide.thumb}`}
                className={`hero__card hero__slide--${slide.tone}${current ? " is-active" : ""}`}
                style={photo(slide.image)}
                onClick={() => goTo(index)}
              >
                <span className="hero__card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="hero__card-label">{slide.thumb}</span>
                {/* key restarts the fill each time the slide becomes active */}
                <span className="hero__card-progress" aria-hidden="true">
                  {current ? <span key={active} className="hero__card-fill" /> : null}
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="hero__toggle"
          aria-label={stopped ? "Play slideshow" : "Pause slideshow"}
          onClick={() => setStopped(!stopped)}
        >
          {stopped ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      </div>
    </section>
  );
}
