// Sends website leads to Zoho CRM as Leads. Settings live in .env.local (see .env.example):
// ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET and ZOHO_REFRESH_TOKEN from a Zoho API Console "Self Client",
// and ZOHO_DC, the data centre of the CRM account: "in" for crm.zoho.in, "com" for crm.zoho.com, "eu" for crm.zoho.eu.
// Without these settings nothing is sent. A lead that already exists with the same email is updated, not duplicated.
import { formName, type Lead } from "@/lib/email";

const LABELS: Record<string, string> = {
  projectType: "Project type",
  goal: "Goal",
  teamSize: "Team size",
  timeline: "Timeline",
  message: "Message",
  source: "Source",
  page: "Page",
};

let cached: { token: string; expires: number } | null = null;

function settings() {
  const { ZOHO_CLIENT_ID: id, ZOHO_CLIENT_SECRET: secret, ZOHO_REFRESH_TOKEN: refresh } = process.env;
  if (!id || !secret || !refresh) return null;
  const dc = (process.env.ZOHO_DC || "in").toLowerCase();
  return { id, secret, refresh, accounts: `https://accounts.zoho.${dc}`, api: `https://www.zohoapis.${dc}` };
}

export const zohoConfigured = () => settings() !== null;

// Access tokens last an hour; one is kept in memory and renewed a minute early.
async function accessToken(s: NonNullable<ReturnType<typeof settings>>) {
  if (cached && cached.expires > Date.now()) return cached.token;
  const params = new URLSearchParams({ grant_type: "refresh_token", client_id: s.id, client_secret: s.secret, refresh_token: s.refresh });
  const response = await fetch(`${s.accounts}/oauth/v2/token`, { method: "POST", body: params });
  const data = (await response.json()) as { access_token?: string; expires_in?: number; error?: string };
  if (!response.ok || !data.access_token) throw new Error(`Zoho token refresh failed: ${data.error ?? response.status}`);
  cached = { token: data.access_token, expires: Date.now() + ((data.expires_in ?? 3600) - 60) * 1000 };
  return cached.token;
}

// Zoho needs a last name; a single-word name goes there whole.
function splitName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length <= 1) return { first: "", last: parts[0] || "Website visitor" };
  return { first: parts.slice(0, -1).join(" "), last: parts[parts.length - 1] };
}

// Creates or updates the Lead. Returns true when Zoho accepted it; errors are logged, never thrown.
export async function sendToZoho(lead: Lead): Promise<boolean> {
  const s = settings();
  if (!s) return false;
  try {
    const { first, last } = splitName(lead.name);
    const details = Object.keys(LABELS)
      .filter((key) => lead[key])
      .map((key) => `${LABELS[key]}: ${lead[key]}`)
      .join("\n");
    const record: Record<string, string> = {
      Last_Name: last,
      Email: lead.email,
      Lead_Source: "Website",
      Description: `Form: ${formName(lead.type)}\n${details}`.trim(),
    };
    if (first) record.First_Name = first;
    if (lead.phone) record.Phone = lead.phone;
    if (lead.company) record.Company = lead.company;

    const token = await accessToken(s);
    const response = await fetch(`${s.api}/crm/v7/Leads/upsert`, {
      method: "POST",
      headers: { Authorization: `Zoho-oauthtoken ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ data: [record], duplicate_check_fields: ["Email"], trigger: ["workflow"] }),
    });
    const result = (await response.json()) as { data?: { code?: string; message?: string; action?: string }[] };
    const status = result.data?.[0];
    if (!response.ok || status?.code !== "SUCCESS") {
      console.error("[lead] Zoho rejected the lead", response.status, JSON.stringify(result).slice(0, 400));
      return false;
    }
    console.info("[lead] Zoho", status.action, lead.email);
    return true;
  } catch (error) {
    console.error("[lead] Zoho error", error instanceof Error ? error.message : error);
    return false;
  }
}
