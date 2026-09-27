import { Quote, Star } from "lucide-react";
import { testimonials } from "@/content/home";
import { Accent } from "@/components/ui/Accent";

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Card({ item }: { item: (typeof testimonials.items)[number] }) {
  return (
    <figure className="reviews__card">
      <Quote size={22} className="reviews__icon" aria-hidden="true" />
      <blockquote>{item.quote}</blockquote>
      <figcaption>
        <span className="reviews__avatar" aria-hidden="true">
          {initials(item.name)}
        </span>
        <span>
          <strong>{item.name}</strong>
          <small>{item.role}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="section section--navy reviews">
      <div className="container">
        <div className="heading heading--center">
          <span className="pill">
            <Star size={12} fill="currentColor" aria-hidden="true" />
            {testimonials.eyebrow}
          </span>
          <h2 className="h2">
            <Accent text={testimonials.title} />
          </h2>
          <span className="heading__rule" aria-hidden="true" />
          <p className="heading__intro">{testimonials.intro}</p>
        </div>
      </div>

      <div className="reviews__viewport">
        <div className="reviews__track">
          {testimonials.items.map((item, index) => (
            <Card key={`a-${index}`} item={item} />
          ))}
          {/* Second copy makes the loop seamless. Hidden from assistive tech. */}
          <div className="reviews__clone" aria-hidden="true">
            {testimonials.items.map((item, index) => (
              <Card key={`b-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="reviews__stats">
          {testimonials.stats.map((stat) => (
            <li key={stat.label}>
              {"stars" in stat && stat.stars ? (
                <span className="reviews__stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={10} fill="currentColor" />
                  ))}
                </span>
              ) : null}
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
