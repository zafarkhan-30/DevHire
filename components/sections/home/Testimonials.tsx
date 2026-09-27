import { Star } from "lucide-react";
import { testimonials } from "@/content/home";
import { reviews } from "@/content/reviews";
import { Accent } from "@/components/ui/Accent";
import { ReviewList } from "@/components/ui/ReviewCard";

// Hidden until content/reviews.ts holds at least one real, approved review.
export function Testimonials() {
  if (reviews.length === 0) return null;

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
        {reviews.length <= 3 ? <ReviewList items={reviews} /> : null}
      </div>
      {reviews.length > 3 ? <ReviewList items={reviews} /> : null}
    </section>
  );
}
