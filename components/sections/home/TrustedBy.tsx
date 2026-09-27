import { trustedBy } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrustedBy() {
  const placeholders = Array.from({ length: trustedBy.placeholderCount }, (_, i) => i + 1);

  return (
    <section className="section section--light trusted">
      <div className="container">
        <SectionHeading title={trustedBy.title} center />
        <ul className="trusted__grid">
          {trustedBy.logos.length > 0
            ? trustedBy.logos.map((logo) => (
                <li key={logo.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.name} loading="lazy" />
                </li>
              ))
            : placeholders.map((n) => (
                <li key={n} className="trusted__placeholder" aria-hidden="true">
                  Client logo
                </li>
              ))}
        </ul>
        <p className="trusted__caption">{trustedBy.caption}</p>
      </div>
    </section>
  );
}
