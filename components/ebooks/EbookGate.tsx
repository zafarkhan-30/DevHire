"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { trackLead } from "@/lib/ads";

type Status = "idle" | "sending" | "done" | "error";

// Asks for a name and work email, sends them with the lead pipeline, then shows the download link.
export function EbookGate({ title, file }: { title: string; file: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const uid = useId();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setStatus("sending");
    try {
      const response = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "ebook-pdf", ebook: title, page: window.location.pathname }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("done");
      trackLead();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="lead__form formcard ebookgate" role="status">
        <h3 className="lead__form-title">Your E-book Is Ready</h3>
        <p className="lead__form-intro">Thanks. Download it below. We have also noted your details so we can follow up if you would like to talk.</p>
        <a href={file} download className="btn btn--primary btn--block">
          Download The PDF
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <form className="lead__form formcard ebookgate" onSubmit={onSubmit}>
      <h3 className="lead__form-title">Get The Free E-book</h3>
      <p className="lead__form-intro">Enter your details and the download link appears straight away. No sales call unless you ask for one.</p>

      <div className="field">
        <label htmlFor={`${uid}-name`}>
          <span>
            Full Name<em aria-hidden="true">*</em>
          </span>
        </label>
        <input id={`${uid}-name`} name="name" type="text" required autoComplete="name" placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-email`}>
          <span>
            Work Email<em aria-hidden="true">*</em>
          </span>
        </label>
        <input id={`${uid}-email`} name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-company`}>
          <span>Company Name</span>
        </label>
        <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" placeholder="Company or product name" />
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

      <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Download The E-book"}
        <ArrowRight size={16} aria-hidden="true" />
      </button>

      <p className="lead__status" role="status">
        {status === "error" ? "Something went wrong. Please check the fields and try again." : null}
      </p>
      <p className="formcard__note">We use your details to send the e-book and, if you reply, to follow up. See our privacy policy.</p>
    </form>
  );
}
