"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, Send, X } from "lucide-react";
import { site } from "@/content/site";
import { whatsappScreen } from "@/content/whatsapp";

const { steps } = whatsappScreen;

function WhatsAppGlyph({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.53 1.74 6.5L3 29l6.68-1.75A12.9 12.9 0 0 0 16.04 29C23.2 29 29.03 23.18 29.03 16S23.2 3 16.04 3Zm0 23.6c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.96 1.04 1.06-3.86-.27-.4A10.56 10.56 0 0 1 5.4 16c0-5.86 4.77-10.63 10.64-10.63 5.86 0 10.63 4.77 10.63 10.63S21.9 26.6 16.04 26.6Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.14 3.09 1.3 3.3c.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

// Floating chat button, bottom-right on every page. It asks the pre-screen questions from content/whatsapp.ts,
// then opens WhatsApp with the answers typed into the message. Hidden until site.whatsapp holds a number.
export function WhatsAppButton() {
  const number = site.whatsapp.replace(/\D/g, "");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0); // steps.length means the summary screen
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState("");
  const panelId = useId();
  const titleId = useId();
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const step = steps[index];
  const onSummary = index >= steps.length;

  // Keep the text box in step with the current question's saved answer.
  useEffect(() => {
    if (step?.kind === "text") setDraft(answers[step.id] ?? "");
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  // Move focus into the panel when it opens or the question changes.
  useEffect(() => {
    if (!open) return;
    const target = panelRef.current?.querySelector<HTMLElement>("input, .wa-panel__option, .wa-panel__send");
    target?.focus();
  }, [open, index]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!number) return null;

  const save = (value: string) => {
    const next = { ...answers, [step.id]: value.trim() };
    setAnswers(next);
    setIndex(index + 1);
  };

  const onText = (event: FormEvent) => {
    event.preventDefault();
    if (!step.optional && !draft.trim()) return;
    save(draft);
  };

  const message = [
    whatsappScreen.greeting,
    "",
    ...steps.filter((s) => answers[s.id]).map((s) => `${s.label}: ${answers[s.id]}`),
    "",
    `(${whatsappScreen.footer})`,
  ].join("\n");

  const send = () => {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
    setIndex(0);
  };

  return (
    <>
      {open ? (
        <div ref={panelRef} id={panelId} className="wa-panel" role="dialog" aria-labelledby={titleId}>
          <div className="wa-panel__head">
            <span className="wa-panel__badge">
              <WhatsAppGlyph size={20} />
            </span>
            <div>
              <p id={titleId} className="wa-panel__title">
                {whatsappScreen.title}
              </p>
              <p className="wa-panel__sub">{onSummary ? "Check your answers" : `Question ${index + 1} of ${steps.length}`}</p>
            </div>
            <button
              type="button"
              className="wa-panel__close"
              aria-label="Close"
              onClick={() => {
                setOpen(false);
                launcherRef.current?.focus();
              }}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="wa-panel__progress" aria-hidden="true">
            <span style={{ width: `${(Math.min(index, steps.length) / steps.length) * 100}%` }} />
          </div>

          <div className="wa-panel__body">
            {index === 0 && !onSummary ? <p className="wa-panel__bubble wa-panel__bubble--muted">{whatsappScreen.intro}</p> : null}

            {!onSummary ? (
              <>
                <p className="wa-panel__bubble">
                  {step.question}
                  {step.optional ? <span className="wa-panel__optional"> (optional)</span> : null}
                </p>

                {step.kind === "choice" ? (
                  <div className="wa-panel__options" role="group" aria-label={step.question}>
                    {step.options?.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`wa-panel__option${answers[step.id] === option ? " is-selected" : ""}`}
                        onClick={() => save(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <form className="wa-panel__form" onSubmit={onText}>
                    <label className="sr-only" htmlFor={`${panelId}-${step.id}`}>
                      {step.question}
                    </label>
                    <input
                      id={`${panelId}-${step.id}`}
                      type="text"
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      placeholder={step.placeholder}
                      autoComplete={step.id === "name" ? "name" : step.id === "company" ? "organization" : "off"}
                      maxLength={120}
                      required={!step.optional}
                    />
                    <button type="submit" className="wa-panel__next" disabled={!step.optional && !draft.trim()}>
                      {step.optional && !draft.trim() ? "Skip" : "Next"}
                    </button>
                  </form>
                )}
              </>
            ) : (
              <>
                <dl className="wa-panel__summary">
                  {steps
                    .filter((s) => answers[s.id])
                    .map((s) => (
                      <div key={s.id}>
                        <dt>{s.label}</dt>
                        <dd>{answers[s.id]}</dd>
                      </div>
                    ))}
                </dl>
                <button type="button" className="wa-panel__send" onClick={send}>
                  <Send size={16} aria-hidden="true" />
                  Send on WhatsApp
                </button>
              </>
            )}
          </div>

          {index > 0 ? (
            <button type="button" className="wa-panel__back" onClick={() => setIndex(index - 1)}>
              <ArrowLeft size={14} aria-hidden="true" />
              Back
            </button>
          ) : null}
        </div>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        className="wa-float"
        aria-label={open ? "Close WhatsApp chat" : `Chat with ${site.name} on WhatsApp`}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} aria-hidden="true" /> : <WhatsAppGlyph size={30} />}
        {open ? null : <span className="wa-float__label">Chat with us</span>}
      </button>
    </>
  );
}
