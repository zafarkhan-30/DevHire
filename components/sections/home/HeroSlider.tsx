"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { hero } from "@/content/home";

// Photo layered over the slide's tone gradient, which shows through if the file is missing.
function photo(image: string) {
  return image ? { backgroundImage: `url(${image}), var(--tone)` } : undefined;
}

export function HeroSlider() {
  // duration 60 approximates the slow 2s slide of the design.
  const [viewportRef, embla] = useEmblaCarousel({ loop: false, duration: 60 });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const goTo = useCallback((index: number) => embla?.scrollTo(index), [embla]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Services">
      <div className="hero__viewport" ref={viewportRef}>
        <div className="hero__track">
          {hero.slides.map((slide, index) => {
            const Title = index === 0 ? "h1" : "h2";
            return (
              <div
                key={slide.thumb}
                className={`hero__slide hero__slide--${slide.tone}`}
                style={photo(slide.image)}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${hero.slides.length}`}
                aria-hidden={selected !== index}
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
                  <Link href={slide.cta.href} className="btn btn--primary" tabIndex={selected === index ? 0 : -1}>
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
      </div>

      <div className="hero__rail" role="tablist" aria-label="Choose slide">
        {hero.slides.map((slide, index) => (
          <button
            key={slide.thumb}
            type="button"
            role="tab"
            aria-selected={selected === index}
            className={`hero__thumb hero__slide--${slide.tone}${selected === index ? " is-active" : ""}`}
            style={photo(slide.image)}
            onClick={() => goTo(index)}
          >
            <span className="hero__thumb-number">{index + 1}</span>
            <span className="hero__thumb-label">{slide.thumb}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
