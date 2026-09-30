"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "@/components/ui/SpriteIcons";
import { faq } from "@/content/home";
import { Accent } from "@/components/ui/Accent";

export function Faq() {
  // One item open at a time. The first starts open.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section--light faq">
      <div className="container faq__layout">
        <div className="faq__aside">
          <div className="heading">
            <h2 className="h2">
              <Accent text={faq.title} />
            </h2>
            <span className="heading__rule" aria-hidden="true" />
          </div>
          <Link href={faq.button.href} className="btn btn--primary">
            {faq.button.label}
          </Link>
        </div>

        <div className="faq__list">
          {faq.items.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className={`faq__item${expanded ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${index}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    {item.q}
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${index}`} role="region" aria-labelledby={`faq-q-${index}`} className="faq__answer">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
