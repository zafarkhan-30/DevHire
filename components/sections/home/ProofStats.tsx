import { Star } from "lucide-react";
import { site } from "@/content/site";

// Numbers row from site.stats. Values left as "—" are skipped, and the row is hidden when none are filled in.
export function ProofStats() {
  const stats = site.stats.filter((stat) => stat.value.trim() !== "" && stat.value !== "—");
  if (stats.length === 0) return null;

  return (
    <section className="section section--navy proofstats" aria-label="DevHire in numbers">
      <div className="container">
        <ul className="reviews__stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              {stat.stars ? (
                <span className="reviews__stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
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
