"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown } from "@/components/ui/SpriteIcons";
import type { AccordionBlock, LinkGridBlock, PdfGateBlock, QuizBlock, TabsBlock } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

export function TabsView({ items }: { items: TabsBlock["items"] }) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <div className="tech__layout">
      <div className="tech__tabs" role="tablist" aria-orientation="vertical">
        {items.map((entry, index) => (
          <button
            key={entry.label}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={`tech__tab${active === index ? " is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            <Icon name={entry.icon ?? "code"} size={18} />
            {entry.label}
          </button>
        ))}
      </div>

      {/* key restarts the fade animation on each tab change */}
      <div key={active} role="tabpanel" className="tabpanel">
        <h3 className="h3">{item.label}</h3>
        <p>{item.text}</p>
        {item.chips?.length ? (
          <div>
            <p className="tabpanel__label">{item.chipsLabel ?? "Tech Stack"}</p>
            <ul className="chips">
              {item.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {item.outcome ? (
          <div className="tabpanel__outcome">
            <p className="tabpanel__label">{item.outcomeLabel ?? "Outcome"}</p>
            <p>{item.outcome}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function AccordionView({ items, columns = 1 }: { items: AccordionBlock["items"]; columns?: 1 | 2 }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`faq__list accordion accordion--${columns}`}>
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.title} className={`faq__item${expanded ? " is-open" : ""}`}>
            <h3>
              <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
                {item.title}
                <ChevronDown size={16} aria-hidden="true" />
              </button>
            </h3>
            <div className="faq__answer">
              <div>
                <p>{item.text}</p>
                {item.chips?.length ? (
                  <ul className="chips accordion__chips">
                    {item.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function QuizView({ block }: { block: QuizBlock }) {
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => block.questions.map(() => null));
  const answered = answers.filter((answer) => answer !== null).length;
  const yes = answers.filter(Boolean).length;
  const complete = answered === block.questions.length;
  const result = [...block.results].sort((a, b) => b.min - a.min).find((entry) => yes >= entry.min);

  return (
    <div className="quiz">
      <ol className="quiz__list">
        {block.questions.map((question, index) => (
          <li key={question} className="quiz__item">
            <p>
              <span className="quiz__number">{index + 1}</span>
              {question}
            </p>
            <div className="quiz__actions" role="group" aria-label={question}>
              {[true, false].map((value) => (
                <button
                  key={String(value)}
                  type="button"
                  aria-pressed={answers[index] === value}
                  className={`quiz__button${answers[index] === value ? " is-active" : ""}`}
                  onClick={() => setAnswers(answers.map((answer, i) => (i === index ? value : answer)))}
                >
                  {value ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="quiz__result" role="status">
        {complete && result ? (
          <>
            <p className="quiz__result-title">{result.title}</p>
            <p>{result.text}</p>
            <Link href={block.cta.href} className="btn btn--primary">
              {block.cta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </>
        ) : (
          <p>
            {answered} of {block.questions.length} answered. Answer every question to see the result.
          </p>
        )}
      </div>
    </div>
  );
}

export function LinkGridView({ groups }: { groups: LinkGridBlock["groups"] }) {
  const tabbed = groups.length > 1;
  const [active, setActive] = useState("All");
  const visible = !tabbed || active === "All" ? groups : groups.filter((group) => group.label === active);
  const items = visible.flatMap((group) => group.items);

  return (
    <div className="linkgrid">
      {tabbed ? (
        <div className="linkgrid__tabs" role="tablist">
          {["All", ...groups.map((group) => group.label)].map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active === label}
              className={`cases__tab linkgrid__tab${active === label ? " is-active" : ""}`}
              onClick={() => setActive(label)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
      <ul key={active} className="linkgrid__items">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className="tech__card">
              <span className="tech__monogram" aria-hidden="true">
                {item.label.replace(/^(Hire\s+)?\.?/i, "").charAt(0).toUpperCase()}
              </span>
              <span>
                {item.label}
                {item.note ? <small>{item.note}</small> : null}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PdfGateView({ block }: { block: PdfGateBlock }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;
    const data = Object.fromEntries(new FormData(element));
    setStatus("sending");
    try {
      const response = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Reuses the newsletter validation path: only an email is required.
        body: JSON.stringify({ ...data, type: "newsletter", source: block.kind, page: window.location.pathname }),
      });
      if (!response.ok) throw new Error("Request failed");
      element.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="pdfgate__form" onSubmit={onSubmit}>
      <label>
        <span className="sr-only">Email address</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : block.submit}
      </button>
      <p className="pdfgate__status" role="status">
        {status === "done" ? "Thanks. We will email it to you." : null}
        {status === "error" ? "Something went wrong. Please try again." : null}
      </p>
    </form>
  );
}
