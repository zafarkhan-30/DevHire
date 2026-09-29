import Link from "next/link";
import { site } from "@/content/site";

// Mark: an opening code bracket closed by a check mark (vetted developers). Light-on-navy version for the dark header;
// the navy-tile version is public/images/logo-mark.svg (favicon, share image, structured data).
// The wordmark is live text in the site font so it renders at the same size and weight on every device.
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <svg className="logo__icon" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="15" fill="#FFFFFF" />
        <path d="M24 19 L13 32 L24 45" fill="none" stroke="#153762" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 33 L37 41 L52 22" fill="none" stroke="#FF4103" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo__word">
        Syntec<span className="logo__accent">Hire</span>
      </span>
    </Link>
  );
}
