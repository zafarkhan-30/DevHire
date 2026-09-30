import { site } from "@/content/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Reports a sent enquiry to Google Ads. Does nothing unless the visitor accepted cookies (the tag is only
// loaded then) and a conversion label is set in content/site.ts.
export function trackLead() {
  const { id, leadLabel } = site.googleAds;
  if (!id || !leadLabel || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: `${id}/${leadLabel}` });
}
