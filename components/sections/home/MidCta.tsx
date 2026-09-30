import Link from "next/link";
import { Calendar } from "lucide-react";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { midCta } from "@/content/home";

export function MidCta() {
  return (
    <section className="section section--navy midcta">
      <div className="container">
        <div className="midcta__card">
          <h2 className="h2">{midCta.title}</h2>
          <p>{midCta.text}</p>
          <div className="midcta__actions">
            <Link href={midCta.primary.href} className="btn btn--white">
              {midCta.primary.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href={midCta.secondary.href} className="btn btn--outline-light">
              {midCta.secondary.label}
              <Calendar size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
