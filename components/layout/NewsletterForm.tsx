"use client";

import { useState, type FormEvent } from "react";
import { footer } from "@/content/site";

type Status = "idle" | "sending" | "done" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "newsletter" }),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="newsletter" onSubmit={onSubmit} id="newsletter">
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={footer.newsletter.placeholder}
      />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : footer.newsletter.button}
      </button>
      <p className="newsletter__status" role="status">
        {status === "done" ? "Thanks. You are on the list." : null}
        {status === "error" ? "Something went wrong. Please try again." : null}
      </p>
    </form>
  );
}
