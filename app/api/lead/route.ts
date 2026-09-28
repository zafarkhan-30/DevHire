import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { leadAlert, logoAttachment, visitorConfirmation, type Lead } from "@/lib/email";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 2000;

function clean(input: unknown): Lead {
  if (!input || typeof input !== "object") return {};
  const out: Lead = {};
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (typeof value === "string") out[key] = value.trim().slice(0, MAX_FIELD);
  }
  return out;
}

let warned = false;

async function sendEmail(key: string, email: { from: string; to: string[]; replyTo?: string; subject: string; html: string; text: string }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: email.from,
      to: email.to,
      reply_to: email.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
      attachments: [logoAttachment],
    }),
  });
  if (!response.ok) console.error("[lead] Resend error", response.status, await response.text());
  return response.ok;
}

// Emails each lead through Resend (resend.com). Settings live in .env.local (see .env.example):
// RESEND_API_KEY, LEAD_TO_EMAIL (one address or several, comma separated) and optionally LEAD_FROM_EMAIL.
// Two emails go out: a confirmation to the visitor (best effort) and the lead alert to SyntaxHires.
// Only the lead alert decides success. Without a key or inbox the lead is only logged.
async function deliver(lead: Lead): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const team = process.env.LEAD_TO_EMAIL?.split(",").map((address) => address.trim()).filter(Boolean) ?? [];
  if (!key || !team.length) {
    if (!warned) console.warn("[lead] RESEND_API_KEY or LEAD_TO_EMAIL not set; leads are logged only.");
    warned = true;
    console.info("[lead]", { type: lead.type ?? "lead", email: lead.email });
    return true;
  }

  const from = process.env.LEAD_FROM_EMAIL || `${site.name} <onboarding@resend.dev>`;
  // Until a domain is verified in Resend, the test sender can only reach the account owner, so this may fail.
  const confirmation = visitorConfirmation(lead);
  const confirmed = await sendEmail(key, { from, to: [lead.email], replyTo: team[0], ...confirmation });

  const alert = leadAlert(lead, { confirmed });
  return sendEmail(key, { from, to: team, replyTo: lead.email, ...alert });
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
