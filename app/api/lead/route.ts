import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 2000;

type Lead = Record<string, string>;

function clean(input: unknown): Lead {
  if (!input || typeof input !== "object") return {};
  const out: Lead = {};
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (typeof value === "string") out[key] = value.trim().slice(0, MAX_FIELD);
  }
  return out;
}

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);

// Field names as they appear in the email, in this order; any other fields follow.
const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  goal: "Goal",
  teamSize: "Team size",
  timeline: "Timeline",
  message: "Message",
  type: "Form",
  page: "Page",
};

let warned = false;

// Emails each lead through Resend (resend.com). Settings live in .env.local (see .env.example):
// RESEND_API_KEY, LEAD_TO_EMAIL (one address or several, comma separated) and optionally LEAD_FROM_EMAIL.
// Without a key or inbox the lead is only logged, so local development works without sending mail.
async function deliver(lead: Lead): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL?.split(",").map((address) => address.trim()).filter(Boolean) ?? [];
  if (!key || !to.length) {
    if (!warned) console.warn("[lead] RESEND_API_KEY or LEAD_TO_EMAIL not set; leads are logged only.");
    warned = true;
    console.info("[lead]", { type: lead.type ?? "lead", email: lead.email });
    return true;
  }

  const keys = [...Object.keys(LABELS).filter((k) => lead[k]), ...Object.keys(lead).filter((k) => !(k in LABELS) && k !== "website")];
  const rows = keys
    .map((k) => `<tr><th align="left" style="padding:6px 12px 6px 0;vertical-align:top">${escapeHtml(LABELS[k] ?? k)}</th><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(lead[k])}</td></tr>`)
    .join("");
  const text = keys.map((k) => `${LABELS[k] ?? k}: ${lead[k]}`).join("\n");
  const form = lead.type ?? "lead";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || "SyntaxHires Website <onboarding@resend.dev>",
      to,
      reply_to: lead.email,
      subject: form === "newsletter" ? `Newsletter signup: ${lead.email}` : `New ${form} enquiry from ${lead.name ?? lead.email}`,
      html: `<table style="font-family:sans-serif;font-size:14px">${rows}</table>`,
      text,
    }),
  });

  if (!response.ok) {
    console.error("[lead] Resend error", response.status, await response.text());
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const lead = clean(body);

  // Honeypot: real users never fill this field.
  if (lead.website) return NextResponse.json({ ok: true });

  if (!lead.email || !EMAIL.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 422 });
  }
  if (lead.type !== "newsletter" && !lead.name) {
    return NextResponse.json({ ok: false, error: "Name is required" }, { status: 422 });
  }

  if (!(await deliver(lead))) {
    return NextResponse.json({ ok: false, error: "Could not send. Please try again or message us on WhatsApp." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
