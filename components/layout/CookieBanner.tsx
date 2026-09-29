"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "syntechire-consent";

export type Consent = "accepted" | "rejected";

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

// Analytics and chat scripts must only load after consent === "accepted".
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  function choose(value: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage unavailable: the choice applies to this page view only.
    }
    window.dispatchEvent(new CustomEvent("syntechire:consent", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie preferences">
      <p>
        We use cookies for analytics and chat only if you agree. See our{" "}
        <Link href="/cookies-policy/">cookie policy</Link>.
      </p>
      <div className="cookie__actions">
        <button type="button" className="btn btn--outline" onClick={() => choose("rejected")}>
          Reject
        </button>
        <button type="button" className="btn btn--primary" onClick={() => choose("accepted")}>
          Accept All
        </button>
      </div>
    </div>
  );
}
