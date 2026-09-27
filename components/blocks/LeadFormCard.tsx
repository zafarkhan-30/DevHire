"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import type { FieldKey, FormSpec } from "@/content/types";
import { lead } from "@/content/home";

type Status = "idle" | "sending" | "done" | "error";

const options: Partial<Record<FieldKey, readonly string[]>> = {
  goal: lead.form.goals,
  teamSize: lead.form.teamSizes,
  timeline: lead.form.timelines,
};

const fields: Record<FieldKey, { label: string; type: string; required?: boolean; placeholder?: string; autoComplete?: string }> = {
  name: { label: "Full Name", type: "text", required: true, placeholder: "Your name", autoComplete: "name" },
  email: { label: "Work Email", type: "email", required: true, placeholder: "you@company.com", autoComplete: "email" },
  phone: { label: "Phone", type: "tel", placeholder: "Include country code", autoComplete: "tel" },
  company: { label: "Company Name", type: "text", placeholder: "Company or product name", autoComplete: "organization" },
  goal: { label: "What are you looking to do?", type: "select", placeholder: "Select an option" },
  teamSize: { label: "Team Size Needed", type: "select", placeholder: "Select team size" },
  timeline: { label: "Timeline", type: "select", placeholder: "Select timeline" },
  message: { label: "Anything we should know?", type: "textarea", placeholder: "Stack, constraints or concerns" },
};

export function LeadFormCard({ spec }: { spec: FormSpec }) {
  const [status, setStatus] = useState<Status>("idle");
  const uid = useId();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;
    const data = Object.fromEntries(new FormData(element));
    setStatus("sending");
    try {
      const response = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: spec.kind, page: window.location.pathname }),
      });
      if (!response.ok) throw new Error("Request failed");
      element.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="lead__form formcard" onSubmit={onSubmit}>
      <h3 className="lead__form-title">{spec.title}</h3>
      {spec.intro ? <p className="lead__form-intro">{spec.intro}</p> : null}

      {spec.fields.map((key) => {
        const field = fields[key];
        const id = `${uid}-${key}`;
        return (
          <div key={key} className="field">
            <label htmlFor={id}>
              <span>
                {field.label}
                {field.required ? <em aria-hidden="true">*</em> : null}
              </span>
            </label>
            {field.type === "select" ? (
              <select id={id} name={key} defaultValue="">
                <option value="">{field.placeholder}</option>
                {(options[key] ?? []).map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea id={id} name={key} rows={3} placeholder={field.placeholder} />
            ) : (
              <input
                id={id}
                name={key}
                type={field.type}
                required={field.required}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
              />
            )}
          </div>
        );
      })}

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

      <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : spec.submit}
        <ArrowRight size={16} aria-hidden="true" />
      </button>

      <p className="lead__status" role="status">
        {status === "done" ? "Thanks. We have your details and will reply shortly." : null}
        {status === "error" ? "Something went wrong. Please check the fields and try again." : null}
      </p>

      {spec.note ? <p className="formcard__note">{spec.note}</p> : null}
    </form>
  );
}
