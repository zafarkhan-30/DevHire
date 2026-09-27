import Link from "next/link";
import { site } from "@/content/site";

// "light" has white "Dev" letters for the navy header and footer; "dark" is the original artwork for light backgrounds.
export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const src = variant === "light" ? "/images/devhire-logo-light.svg" : "/images/devhire-logo-main.svg";
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG, no resizing needed */}
      <img src={src} alt={site.name} width={389} height={120} className="logo__img" />
    </Link>
  );
}
