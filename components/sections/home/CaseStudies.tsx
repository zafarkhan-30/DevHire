"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
            <h2 className="h2">{caseStudies.title}</h2>
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
            <Link href={item.link.href} className="link-arrow">
              {item.link.label}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div
            className="cases__media"
            style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
          >
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
