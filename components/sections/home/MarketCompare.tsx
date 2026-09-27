import { CircleCheck, MessageSquareText } from "lucide-react";
import { compare } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MarketCompare() {
  return (
    <section className="section section--dark compare">
      <div className="container">
        <SectionHeading eyebrow={compare.eyebrow} title={compare.title} intro={compare.intro} />

        <div className="compare__grid">
          <div className="compare__card compare__card--market">
            <div className="compare__head">
              <p className="compare__label">{compare.market.heading}</p>
              <p className="compare__sub">{compare.market.sub}</p>
            </div>
            <ul>
              {compare.market.rows.map((row) => (
                <li key={row.name} className="compare__row">
                  <div>
                    <p className="compare__name">{row.name}</p>
                    <p className="compare__claim">{row.claim}</p>
                  </div>
                  <span className="compare__verdict">{row.verdict}</span>
                </li>
              ))}
            </ul>
          </div>

          <span className="compare__vs" aria-hidden="true">
            VS
          </span>

          <div className="compare__card compare__card--ours">
            <div className="compare__head">
              <p className="compare__label">{compare.ours.heading}</p>
              <p className="compare__sub">{compare.ours.sub}</p>
            </div>
            <ul>
              {compare.ours.rows.map((row) => (
                <li key={row.title} className="compare__row compare__row--ours">
                  <CircleCheck size={20} aria-hidden="true" />
                  <div>
                    <p className="compare__promise">{row.title}</p>
                    <p className="compare__claim">{row.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="compare__callout">
          <MessageSquareText size={20} aria-hidden="true" />
          <p>{compare.callout}</p>
        </div>
      </div>
    </section>
  );
}
