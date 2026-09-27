"use client";

import Link from "next/link";
import { useState } from "react";
import { technologies } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechTabs() {
  const [active, setActive] = useState(technologies.categories[0].id);
  const current = technologies.categories.find((category) => category.id === active) ?? technologies.categories[0];

  return (
    <section className="section section--light tech">
      <div className="container">
        <SectionHeading title={technologies.title} center />

        <div className="tech__layout">
          <div className="tech__tabs" role="tablist" aria-orientation="vertical" aria-label="Technology categories">
            {technologies.categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tech-tab-${category.id}`}
                aria-selected={active === category.id}
                aria-controls="tech-panel"
                className={`tech__tab${active === category.id ? " is-active" : ""}`}
                onClick={() => setActive(category.id)}
              >
                <Icon name={category.icon} size={18} />
                {category.label}
              </button>
            ))}
          </div>

          {/* key restarts the fade animation on each tab change */}
          <ul key={current.id} id="tech-panel" role="tabpanel" aria-labelledby={`tech-tab-${current.id}`} className="tech__panel">
            {current.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="tech__card">
                  <span className="tech__monogram" aria-hidden="true">
                    {item.label.replace(/^\./, "").charAt(0)}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
