import Link from "next/link";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { paths } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Paths() {
  return (
    <section className="section section--dark paths">
      <div className="container">
        <SectionHeading title={paths.title} center />

        <ul className="paths__grid">
          {paths.cards.map((card) => (
            <li key={card.title} className="paths__card">
              <span className={`paths__icon paths__icon--${card.tone}`}>
                <Icon name={card.icon} size={30} />
              </span>
              <span className={`pill${card.tone === "blue" ? " pill--blue" : ""}`}>{card.tag}</span>
              <h3 className="paths__title">{card.title}</h3>
              <p className="paths__sub">{card.sub}</p>
              <p className="paths__text">{card.text}</p>
              <Link href={card.href} className={`link-arrow${card.tone === "blue" ? " paths__link--blue" : ""}`}>
                Learn more<span className="sr-only"> about {card.title}</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="paths__strip">
          <p>{paths.strip.text}</p>
          <Link href={paths.strip.link.href} className="link-arrow">
            {paths.strip.link.label}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="paths__cta">
          <p className="paths__cta-title">{paths.cta.title}</p>
          <Link href={paths.cta.button.href} className="btn btn--primary">
            {paths.cta.button.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p className="small">{paths.cta.note}</p>
        </div>
      </div>
    </section>
  );
}
