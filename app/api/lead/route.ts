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

// CRM is not chosen yet. Replace this with the CRM call once it is.
async function deliver(lead: Lead) {
  console.info("[lead]", { type: lead.type ?? "lead", email: lead.email });
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

  await deliver(lead);
  return NextResponse.json({ ok: true });
}
