"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "@/components/ui/SpriteIcons";
import { lead } from "@/content/home";
import { Accent } from "@/components/ui/Accent";

type Status = "idle" | "sending" | "done" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { form } = lead;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;
    const data = Object.fromEntries(new FormData(element));
    setStatus("sending");
    try {
      const response = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "recommendation" }),
      });
      if (!response.ok) throw new Error("Request failed");
      element.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section section--muted lead" id="get-started">
      <div className="container lead__layout">
        <div className="lead__copy">
          <div className="heading">
            <h2 className="h2">
              <Accent text={lead.title} />
            </h2>
            <span className="heading__rule" aria-hidden="true" />
            <p className="heading__intro">{lead.text}</p>
          </div>
          <p className="lead__list-title">{lead.listTitle}</p>
          <ul className="lead__list">
            {lead.list.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="lead__note">
            {lead.note.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>

        <form className="lead__form" onSubmit={onSubmit} noValidate={false}>
          <h3 className="lead__form-title">{form.title}</h3>
          <p className="lead__form-intro">{form.intro}</p>

          <label className="field">
            <span>
              Full Name<em aria-hidden="true">*</em>
            </span>
            <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
          </label>

          <label className="field">
            <span>
              Work Email<em aria-hidden="true">*</em>
            </span>
            <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
          </label>

          <label className="field">
            <span>Company Name</span>
            <input name="company" type="text" autoComplete="organization" placeholder="Company or product name" />
          </label>

          <label className="field">
            <span>What are you looking to do?</span>
            <select name="goal" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              {form.goals.map((goal) => (
                <option key={goal}>{goal}</option>
              ))}
            </select>
          </label>

          <div className="field-row">
            <label className="field">
              <span>
                Team Size Needed <small>(optional)</small>
              </span>
              <select name="teamSize" defaultValue="">
                <option value="">Select team size</option>
                {form.teamSizes.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Timeline</span>
              <select name="timeline" defaultValue="">
                <option value="">Select timeline</option>
                {form.timelines.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span>
              Anything we should know? <small>(optional)</small>
            </span>
            <input name="notes" type="text" placeholder="Constraints, stack or concerns" />
          </label>

          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

          <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : form.submit}
            <ArrowRight size={16} aria-hidden="true" />
          </button>

          <p className="lead__status" role="status">
            {status === "done" ? "Thanks. We have your details and will reply shortly." : null}
            {status === "error" ? "Something went wrong. Please check the fields and try again." : null}
          </p>

          <ul className="lead__trust">
            {form.trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="lead__alt">
            {form.alt.lead}{" "}
            <Link href={form.alt.href}>
              {form.alt.label} <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
