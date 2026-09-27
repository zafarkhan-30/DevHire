import { ArrowDown } from "lucide-react";
import { reasons } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reasons() {
  return (
    <section className="section section--muted reasons">
      <div className="container">
        <SectionHeading title={reasons.title} intro={reasons.intro} center />
        <ul className="reasons__grid">
          {reasons.cards.map((card, index) => (
            <li key={card.title} className="reasons__card">
              <span className="reasons__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="reasons__icon">
                <Icon name={card.icon} size={22} />
              </span>
              <h3 className="h3">{card.title}</h3>
              <p>{card.text}</p>
              <span className="reasons__rule" aria-hidden="true" />
            </li>
          ))}
        </ul>
        <p className="reasons__footer">{reasons.footer}</p>
        <ArrowDown className="reasons__arrow" size={28} aria-hidden="true" />
      </div>
    </section>
  );
}
