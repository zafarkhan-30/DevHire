// HTML email templates for form submissions: the lead alert sent to SyntaxHires and the
// confirmation sent to the visitor. Table layout with inline styles, 600px wide, so they render
// in Gmail, Outlook and phone mail apps. The wordmark is text, so no image has to load.
import { site } from "@/content/site";
import { EMAIL_LOGO_BASE64, EMAIL_LOGO_CID } from "@/lib/email-logo";

// Inline logo attachment; pass with every email that uses layout().
export const logoAttachment = { filename: "syntaxhires-logo.png", content: EMAIL_LOGO_BASE64, content_id: EMAIL_LOGO_CID };

export type Lead = Record<string, string>;

const NAVY = "#153762";
const ORANGE = "#ff4103";
const INK = "#1f2937";
const MUTED = "#6b7280";
const LINE = "#e6e9ee";
const FONT = "'Plus Jakarta Sans',Segoe UI,Helvetica,Arial,sans-serif";

export const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);

// Field names as shown in emails, in this order; unknown fields follow with their own names.
const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  goal: "Goal",
  projectType: "Project type",
  teamSize: "Team size",
  timeline: "Timeline",
  message: "Message",
  type: "Form",
  source: "Source",
  page: "Page",
};
const HIDDEN = new Set(["website"]);
const WORDS: Record<string, string> = { ai: "AI", pdf: "PDF", us: "US", js: "JS", net: ".NET", ios: "iOS", mvp: "MVP" };

// "hire-react-js-developers" -> "Hire React JS Developers"
export function formName(kind = "lead") {
  return kind
    .split(/[-_\s]+/)
    .map((word) => WORDS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function leadFields(lead: Lead) {
  const keys = [...Object.keys(LABELS).filter((k) => lead[k]), ...Object.keys(lead).filter((k) => !(k in LABELS) && !HIDDEN.has(k) && lead[k])];
  return keys.map((k) => ({ label: LABELS[k] ?? k, value: k === "type" ? formName(lead[k]) : lead[k] }));
}

// False while site.url is still the placeholder domain, so emails do not link to it.
const liveSite = () => !site.url.includes(".example");

const whatsappLink = () => {
  const number = site.whatsapp.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(site.whatsappMessage)}` : null;
};

function button(label: string, href: string, color = ORANGE) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0"><tr><td style="border-radius:8px;background:${color}">
<a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 22px;font-family:${FONT};font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:8px">${escapeHtml(label)}</a>
</td></tr></table>`;
}

function fieldTable(lead: Lead) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${LINE};border-radius:10px;border-collapse:separate;overflow:hidden">
${leadFields(lead)
  .map(
    (field, index) => `<tr>
<td style="width:100px;padding:12px 14px;background:#f8f9fa;font-family:${FONT};font-size:13px;font-weight:700;color:${NAVY};vertical-align:top;${index ? `border-top:1px solid ${LINE};` : ""}">${escapeHtml(field.label)}</td>
<td style="padding:12px 14px;font-family:${FONT};font-size:14px;line-height:1.55;color:${INK};white-space:pre-wrap;word-break:break-word;${index ? `border-top:1px solid ${LINE};` : ""}">${escapeHtml(field.value)}</td>
</tr>`,
  )
  .join("")}
</table>`;
}

// Shared frame: navy header with the wordmark, white card, grey footer.
function layout({ preheader, eyebrow, title, body, footer }: { preheader: string; eyebrow: string; title: string; body: string; footer: string }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#eef1f5">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef1f5"><tr><td align="center" style="padding:28px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px">
<tr><td style="background:${NAVY};border-radius:14px 14px 0 0;padding:22px 32px">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="padding-right:12px;vertical-align:middle"><img src="cid:${EMAIL_LOGO_CID}" width="40" height="40" alt="" style="display:block;border:0;border-radius:9px"></td>
<td style="vertical-align:middle;font-family:${FONT};font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.3px">Syntax<span style="color:${ORANGE}">Hires</span></td>
</tr></table>
</td></tr>
<tr><td style="background:#ffffff;padding:32px;border-radius:0 0 14px 14px">
<p style="margin:0 0 8px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${ORANGE}">${escapeHtml(eyebrow)}</p>
<h1 style="margin:0 0 18px;font-family:${FONT};font-size:24px;line-height:1.3;color:${NAVY}">${escapeHtml(title)}</h1>
${body}
</td></tr>
<tr><td style="padding:20px 32px;font-family:${FONT};font-size:12px;line-height:1.6;color:${MUTED};text-align:center">${footer}</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

const p = (html: string) => `<p style="margin:0 0 16px;font-family:${FONT};font-size:15px;line-height:1.65;color:${INK}">${html}</p>`;
const h2 = (text: string) => `<h2 style="margin:28px 0 12px;font-family:${FONT};font-size:16px;color:${NAVY}">${escapeHtml(text)}</h2>`;

// Sent to SyntaxHires for every submission.
export function leadAlert(lead: Lead, { confirmed = false, receivedAt = new Date() } = {}) {
  const form = formName(lead.type);
  const who = lead.name || lead.email;
  const newsletter = lead.type === "newsletter";
  const subject = newsletter ? `Newsletter signup: ${lead.email}` : `New ${form} enquiry from ${who}`;
  const when = receivedAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });
  const phone = lead.phone?.replace(/[^\d+]/g, "");

  const actions = [
    button(`Reply to ${lead.name?.split(" ")[0] || "visitor"}`, `mailto:${lead.email}?subject=${encodeURIComponent(`Re: your enquiry to ${site.name}`)}`),
    phone ? button("Call", `tel:${phone}`, NAVY) : "",
    phone ? button("WhatsApp", `https://wa.me/${phone.replace(/^\+/, "")}`, "#1faa53") : "",
  ].filter(Boolean);

  const html = layout({
    preheader: `${form} · ${who}${lead.company ? ` · ${lead.company}` : ""}`,
    eyebrow: newsletter ? "Newsletter" : "New lead",
    title: newsletter ? "New newsletter subscriber" : `${form} enquiry`,
    body: `${p(`Received ${escapeHtml(when)} IST${lead.page ? ` from <strong>${escapeHtml(lead.page)}</strong>` : ""}. ${confirmed ? "The visitor has been sent a confirmation email." : "No confirmation email reached the visitor, so reply to them directly."}`)}
${fieldTable(lead)}
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px"><tr>${actions.map((a) => `<td style="padding-right:10px">${a}</td>`).join("")}</tr></table>`,
    footer: `Sent by the ${site.name} website contact forms. Reply goes straight to the visitor.`,
  });

  const text = [subject, `Received ${when} IST`, "", ...leadFields(lead).map((f) => `${f.label}: ${f.value}`)].join("\n");
  return { subject, html, text };
}

// Sent to the visitor after they submit a form.
export function visitorConfirmation(lead: Lead) {
  const first = lead.name?.trim().split(/\s+/)[0];
  const hello = first ? `Hi ${escapeHtml(first)},` : "Hello,";
  const wa = whatsappLink();
  const newsletter = lead.type === "newsletter";

  if (newsletter) {
    const subject = `You're subscribed to ${site.name} engineering notes`;
    const html = layout({
      preheader: "Thanks for subscribing. One practical email a month.",
      eyebrow: "Subscription confirmed",
      title: "Thanks for subscribing",
      body: `${p(hello)}
${p(`You're on the list for ${escapeHtml(site.name)} engineering leadership notes: one email a month on hiring remote developers, running distributed teams and modernising legacy systems.`)}
${p("No spam, and you can unsubscribe from any email with one click.")}
${liveSite() ? button("Read the latest insights", `${site.url}/insights/`) : ""}`,
      footer: `You're receiving this because ${escapeHtml(lead.email)} was entered in the newsletter form on the ${escapeHtml(site.name)} website. If that wasn't you, ignore this email.`,
    });
    return { subject, html, text: `${first ? `Hi ${first},` : "Hello,"}\n\nThanks for subscribing to ${site.name} engineering notes. One email a month.\n\n${site.name}` };
  }

  const subject = `We've received your details – ${site.name}`;
  // Document requests (PDF forms) get the short version without the hiring steps.
  const download = /pdf|framework/i.test(lead.type ?? "");
  // Project enquiries (form kinds starting with "project") are scoped and quoted; hiring requests get a shortlist.
  const project = /^project/i.test(lead.type ?? "");
  const steps = project
    ? [
        ["We read your brief", "We review what you want to build and note the questions we need answered."],
        ["We arrange a scoping call", "A short call to agree the goals, the must-have features and your timeline."],
        ["You receive a written proposal", "Scope, approach, timeline and cost in writing. Nothing is signed before you decide."],
      ]
    : [
        ["We read your request", "We review what you sent and who would suit the work."],
        ["We arrange a call", "A short call to understand your stack, the role and your timeline."],
        ["You interview a shortlist", "You meet the developers and choose. Nothing is signed before you decide."],
      ];

  const html = layout({
    preheader: "Thanks for getting in touch. We'll reply within two working days.",
    eyebrow: "Request received",
    title: "Thanks, we've got your details",
    body: `${p(hello)}
${p(`Thank you for contacting ${escapeHtml(site.name)}. We've received your request and a member of our team will get back to you within <strong>two working days</strong>.`)}
${download ? "" : h2("What happens next")}
${download ? "" : `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${steps
  .map(
    ([title, text], index) => `<tr>
<td style="width:40px;padding:0 0 16px;vertical-align:top"><div style="width:28px;height:28px;border-radius:50%;background:${ORANGE};color:#ffffff;font-family:${FONT};font-size:13px;font-weight:700;line-height:28px;text-align:center">${index + 1}</div></td>
<td style="padding:2px 0 16px;font-family:${FONT};font-size:14px;line-height:1.55;color:${INK}"><strong style="color:${NAVY}">${escapeHtml(title)}</strong><br>${escapeHtml(text)}</td>
</tr>`,
  )
  .join("")}
</table>`}
${h2("What you sent us")}
${fieldTable(Object.fromEntries(Object.entries(lead).filter(([k]) => !["type", "page", "source"].includes(k))))}
${
  wa
    ? `<div style="margin-top:28px;padding:18px 20px;background:#f8f9fa;border-radius:10px">
${p("Need to talk sooner? Message us on WhatsApp and we'll pick it up from there.")}
${button("Chat on WhatsApp", wa, "#1faa53")}
</div>`
    : ""
}
${p(`<br>Best regards,<br><strong>The ${escapeHtml(site.name)} team</strong>`)}`,
    footer: `You're receiving this because you submitted a form on the ${escapeHtml(site.name)} website. If that wasn't you, you can ignore this email.<br>${escapeHtml(site.name)} · Remote and global`,
  });

  const text = [
    first ? `Hi ${first},` : "Hello,",
    "",
    `Thank you for contacting ${site.name}. We've received your request and will get back to you within two working days.`,
    "",
    ...(download ? [] : ["What happens next:", ...steps.map(([title, text], index) => `${index + 1}. ${title}: ${text}`), ""]),
    ...(wa ? [`Need to talk sooner? WhatsApp us: ${wa}`, ""] : []),
    `Best regards,`,
    `The ${site.name} team`,
  ].join("\n");
  return { subject, html, text };
}
