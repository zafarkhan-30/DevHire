// PLACEHOLDER: replace the whole page with a real, client-approved case study.
import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/case-study/case-study-1/",
  meta: {
    // PLACEHOLDER: the real case study headline.
    title: "Case Study 1",
    // PLACEHOLDER: one sentence naming the industry, the problem and the result.
    description:
      "Case study template. It will describe where the client started, what the DevHire team changed and the measured result, once the client has approved it.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Case Study",
      // PLACEHOLDER: the real headline, with the client's approved headline figure.
      title: "Case Study Headline: The Result, Stated As A [Number]",
      text: "One sentence that names the kind of client, the problem they had and what changed. Keep it specific and keep it true.",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-study/" },
        { label: "Case Study 1" },
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
        "This section gives the whole story in a short paragraph. Say who the client is in general terms, what they needed and what the team delivered.",
        "State the main result once, with the figure and how it was measured. A reader who stops here should still know what happened.",
      ],
      aside: {
        title: "Belongs here",
        items: ["Who the client is", "What they needed", "What was delivered", "The main result and how it was measured"],
      },
    },
    {
      // PLACEHOLDER: the real challenge. The sentences below are writing guidance, not copy.
      type: "text",
      tone: "muted",
      title: "The [Challenge]",
      align: "left",
      paragraphs: [
        "This section describes the situation before the work began. Explain what was not working and what it was costing the client in time, money or risk.",
        "Include the constraints: deadlines, systems that could not be taken offline, skills the client's team did not have. Say what had been tried before.",
      ],
      list: ["The problem in the client's words", "What it was costing them", "Constraints the team had to work within", "What had already been tried"],
    },
    {
      // PLACEHOLDER: the real solution. The sentences below are writing guidance, not copy.
      type: "text",
      title: "The [Solution]",
      align: "left",
      paragraphs: [
        "This section describes what the team did, in the order they did it. Name the key technical decisions and give the reason for each.",
        "Explain how the DevHire engineers worked with the client's team: who set priorities, how work was reviewed and how progress was reported. Mention anything that did not go to plan and how it was handled.",
      ],
      list: ["Team shape and roles", "Key technical decisions and why", "How the work was sequenced", "What changed along the way"],
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
        { value: "—", label: "Fourth result", note: "How it was measured" },
      ],
    },
    {
      // PLACEHOLDER: one client quote approved in writing, with name, role and company.
      type: "testimonials",
      title: "From The [Client]",
      align: "center",
      items: [{ quote: "Approved client quote goes here.", name: "Client Name", role: "Role, Company" }],
    },
    {
      // PLACEHOLDER: the four main technologies used on this project, each with one line on what it was used for.
      type: "cards",
      title: "Tech Stack [Used]",
      align: "center",
      columns: 4,
      items: [
        { icon: "monitor", title: "Frontend technology", text: "What it was used for on this project." },
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
