import Link from "next/link";
import { site } from "@/content/site";

// Built from the artwork in public/images/favicon.svg (brackets, person, two-colour wordmark).
// The wordmark is live text in the site font so it renders at the same size and weight on every device.
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <svg className="logo__icon" viewBox="8 26 84 56" aria-hidden="true">
        <path d="M 30 30 L 12 50 L 30 70" fill="none" stroke="#FF4D00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 70 30 L 88 50 L 70 70" fill="none" stroke="#FF4D00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="42" r="12" fill="#FFFFFF" />
        <path d="M 32 75 Q 50 50 68 75 Z" fill="#FFFFFF" />
      </svg>
      <span className="logo__word">
        Syntax<span className="logo__accent">Hires</span>
      </span>
    </Link>
  );
}
