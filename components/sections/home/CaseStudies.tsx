"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ExternalLink, Maximize2 } from "lucide-react";
import { Accent } from "@/components/ui/Accent";
import { caseStudies } from "@/content/home";
import { Icon } from "@/components/ui/Icon";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const item = caseStudies.items[active];

  return (
    <section className="section section--navy cases">
      <div className="container">
        <div className="cases__head">
          <div className="heading">
            <span className="pill">{caseStudies.eyebrow}</span>
            <h2 className="h2">
              <Accent text={caseStudies.title} />
            </h2>
            <span className="heading__rule" aria-hidden="true" />
          </div>
          <p className="cases__intro">{caseStudies.intro}</p>
        </div>

        <div className="cases__tabs" role="tablist" aria-label="Case studies">
          {caseStudies.items.map((entry, index) => (
            <button
              key={entry.tab}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={`cases__tab${active === index ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              {entry.tab}
            </button>
          ))}
        </div>

        {/* key restarts the fade animation on each tab change */}
        <article key={active} className="cases__card" role="tabpanel">
          <div className="cases__body">
            <span className="pill pill--blue">{item.tag}</span>
            <h3 className="cases__title">{item.title}</h3>
            <p className="cases__summary">{item.summary}</p>
            <ul className="cases__metrics">
              {item.metrics.map((metric) => (
                <li key={metric.label}>
                  <Icon name={metric.icon} size={18} />
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
            <div className="cases__quote">
              <p className="cases__note-label">{item.note.label}</p>
              <p>{item.note.text}</p>
            </div>
            <div className="cases__links">
              <Link href={item.link.href} className="link-arrow">
                {item.link.label}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              {item.live ? (
                <a href={item.live.href} className="link-arrow" target="_blank" rel="noopener noreferrer">
                  {item.live.label}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
          <div className="cases__media cases__media--shot">
            <button
              type="button"
              className="cases__shot zoomable"
              data-zoom={item.image}
              data-zoom-alt={item.imageAlt}
              data-zoom-caption={item.title}
              aria-label={`Enlarge image: ${item.imageAlt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" width={1280} height={800} />
              <span className="zoomable__hint" aria-hidden="true">
                <Maximize2 size={16} />
              </span>
            </button>
            <span className="cases__chip">{item.chip}</span>
          </div>
        </article>

        <div className="cases__all">
          <Link href={caseStudies.all.href} className="btn btn--outline-light">
            {caseStudies.all.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
