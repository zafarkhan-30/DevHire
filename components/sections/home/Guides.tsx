import Link from "next/link";
import { guides } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Guides() {
  return (
    <section className="section section--muted guides">
      <div className="container">
        <SectionHeading title={guides.title} intro={guides.intro} center />
        <ul className="guides__grid">
          {guides.cards.map((card) => (
            <li key={card.title} className="guides__card">
              <h3 className="guides__title">{card.title}</h3>
              <p>{card.text}</p>
              <Link href={card.link.href} className="guides__link">
                {card.link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
