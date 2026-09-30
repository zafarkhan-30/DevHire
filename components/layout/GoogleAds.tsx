"use client";

import { useEffect } from "react";
import { readConsent, type Consent } from "@/components/layout/CookieBanner";
import { site } from "@/content/site";

// Loads the Google Ads tag only after the visitor chooses "Accept All" in the cookie banner,
// either on an earlier visit (stored choice) or during this one (consent event).
export function GoogleAds() {
  useEffect(() => {
    const { id } = site.googleAds;
    if (!id) return;

    function load() {
      if (window.gtag) return;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // gtag.js reads the arguments object itself, so it is pushed as is.
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", id);
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(script);
    }

    if (readConsent() === "accepted") load();
    const onConsent = (event: Event) => {
      if ((event as CustomEvent<Consent>).detail === "accepted") load();
    };
    window.addEventListener("syntechire:consent", onConsent);
    return () => window.removeEventListener("syntechire:consent", onConsent);
  }, []);

  return null;
}
