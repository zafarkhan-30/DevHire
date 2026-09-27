import { trustedBy } from "@/content/home";

// Client logos from content/home.ts. Each sits in an equal box so square and wide files look balanced.
// With no logos listed, dashed placeholders mark the space.
export function LogoRow() {
  if (trustedBy.logos.length === 0) {
    return (
      <ul className="trusted__grid">
        {Array.from({ length: trustedBy.placeholderCount }, (_, index) => (
          <li key={index} className="trusted__placeholder" aria-hidden="true">
            Client logo
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="trusted__grid">
      {trustedBy.logos.map((logo) => (
        <li key={logo.name} className="trusted__logo">
          {/* eslint-disable-next-line @next/next/no-img-element -- small static logos */}
          <img src={logo.src} alt={logo.name} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}
