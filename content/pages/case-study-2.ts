// PLACEHOLDER: replace the whole page with a real, client-approved case study.
import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/case-study/case-study-2/",
  meta: {
    // PLACEHOLDER: the real case study headline.
    title: "Case Study 2",
    // PLACEHOLDER: one sentence naming the industry, the problem and the result.
    description:
      "Case study template. It will set out the client's starting point, the work the DevHire team did and the measured result, once the client has approved it.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Case Study",
      // PLACEHOLDER: the real headline, with the client's approved headline figure.
      title: "Case Study Headline: The Result, Stated As A [Number]",
      text: "One sentence that names the kind of client, the problem they had and what changed. Use plain words and a figure the client has approved.",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-study/" },
        { label: "Case Study 2" },
      ],
    },
    { type: "pdfGate", title: "Get this case study as a PDF", submit: "Send", kind: "case-study-pdf" },
    {
      type: "caseMeta",
      items: [
        // PLACEHOLDER: the client's industry.
        { label: "Industry", value: "—" },
        // PLACEHOLDER: the client's country or region, if approved for publication.
        { label: "Location", value: "—" },
        // PLACEHOLDER: number and roles of DevHire engineers.
        { label: "Team size", value: "—" },
        // PLACEHOLDER: length of the engagement.
        { label: "Duration", value: "—" },
        // PLACEHOLDER: main technologies used.
        { label: "Stack", value: "—" },
      ],
    },
    {
      // PLACEHOLDER: the real summary. The sentences below are writing guidance, not copy.
      type: "text",
      title: "The [Summary]",
      align: "left",
      paragraphs: [
        "This section tells the full story in a few sentences. Describe the client in general terms, the goal they set and what the team shipped.",
        "Give the headline result once, with the figure and the way it was measured. Leave the detail for the sections below.",
      ],
      aside: {
        title: "Belongs here",
        items: ["The kind of client", "The goal they set", "What was shipped", "The headline result and how it was measured"],
      },
    },
    {
      // PLACEHOLDER: the real challenge. The sentences below are writing guidance, not copy.
      type: "text",
      tone: "muted",
      title: "The [Challenge]",
      align: "left",
      paragraphs: [
        "This section sets out the starting point. Describe the system or team as it was, what was going wrong and who felt the effect.",
        "List the limits the team had to respect, such as a fixed launch date, a live system or a small budget. Say why the client looked for outside help.",
      ],
      list: ["The starting point", "Who was affected and how", "Limits the team had to respect", "Why the client looked for outside help"],
    },
    {
      // PLACEHOLDER: the real solution. The sentences below are writing guidance, not copy.
      type: "text",
      title: "The [Solution]",
      align: "left",
      paragraphs: [
        "This section explains the approach step by step. Describe the first thing the team did and why, then each stage that followed.",
        "Show how the DevHire engineers fitted into the client's process: planning, code review, releases and reporting. Be open about trade-offs and anything that had to change.",
      ],
      list: ["Team shape and roles", "The approach, stage by stage", "Trade-offs and the reasons for them", "How progress was reported"],
    },
    {
      // PLACEHOLDER: three or four measured results, each approved by the client, with the measurement method.
      type: "stats",
      tone: "muted",
      title: "The [Outcome]",
      align: "center",
      intro: "Each figure should state what was measured, over what period and against what baseline.",
      items: [
        { value: "—", label: "Primary result", note: "How it was measured" },
        { value: "—", label: "Second result", note: "How it was measured" },
        { value: "—", label: "Third result", note: "How it was measured" },
      ],
    },
    {
      type: "testimonials",
      title: "From The [Client]",
      align: "center",
    },
    {
      // PLACEHOLDER: the four main technologies used on this project, each with one line on what it was used for.
      type: "cards",
      title: "Tech Stack [Used]",
      align: "center",
      columns: 4,
      items: [
        { icon: "smartphone", title: "Client application", text: "What it was used for on this project." },
        { icon: "server", title: "Backend technology", text: "What it was used for on this project." },
        { icon: "database", title: "Data technology", text: "What it was used for on this project." },
        { icon: "cloud", title: "Cloud or infrastructure", text: "What it was used for on this project." },
      ],
    },
    { type: "pdfGate", tone: "muted", title: "Get this case study as a PDF", submit: "Send", kind: "case-study-pdf" },
    {
      type: "cta",
      variant: "dark",
      title: "Facing Similar Challenges?",
      text: "Tell us the stack and the problem. You interview the developer before any contract.",
      ctas: [
        { label: "Talk To An Engineer", href: "/contact-us/" },
        { label: "See More Work", href: "/case-study/our-work/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
