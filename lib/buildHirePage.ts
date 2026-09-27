import type { Block, PageDef, TechData } from "@/content/types";

// Turns one technology data file into the 19-section hire page.
// Sections that describe DevHire itself are shared; sections about the technology come from the data file.
export function buildHirePage(tech: TechData): PageDef {
  const path = `/hire/${tech.slug}/`;
  const singular = tech.role.replace(/s$/, "");

  const blocks: Block[] = [
    { type: "painHook", label: "Did you know", text: tech.hook },
    {
      type: "hero",
      tone: "light",
      size: "lg",
      eyebrow: `Hire ${tech.role}`,
      title: `Hire ${tech.role} for [${tech.focus}]`,
      text: tech.heroText,
      bullets: tech.heroBullets,
      // Process facts, not market statistics.
      stats: [
        { value: "Days", label: "To a shortlist" },
        { value: "Monthly", label: "Contract terms" },
        { value: "Yours", label: "Code and IP" },
      ],
      form: {
        title: "Request A Call Back",
        submit: "Send Request",
        kind: `hire-${tech.slug}`,
        fields: ["name", "email", "phone", "company", "message"],
      },
    },
    {
      type: "logos",
      tone: "muted",
      title: "Teams That Build With [DevHire]",
      caption: "References available on request.",
    },
    {
      type: "tabs",
      title: `What You Can Build With [${tech.name}]`,
      items: tech.build.map((item) => ({
        label: item.label,
        icon: item.icon,
        text: item.text,
        chips: item.stack,
        outcome: item.outcome,
      })),
    },
    { type: "quote", tone: "muted", text: tech.fact.text, source: tech.fact.source },
    {
      type: "accordion",
      title: `Technical Expertise Our ${tech.role} [Bring]`,
      items: tech.skills,
    },
    {
      type: "versions",
      title: `How ${tech.name} Has [Evolved]`,
      items: tech.versions.map((item, index) => ({
        ...item,
        tagTone: (["primary", "blue", "success", "warning"] as const)[index % 4],
      })),
    },
    {
      type: "split",
      tone: "muted",
      pad: "md",
      title: `When ${tech.name} Is The [Right Choice]`,
      panels: [
        { title: `Choose ${tech.name} when`, mood: "good", items: tech.chooseWhen },
        { title: "Consider something else when", mood: "bad", items: tech.chooseNot },
      ],
    },
    {
      // PLACEHOLDER: client quotes for this technology, approved in writing.
      type: "testimonials",
      title: "What Clients [Say]",
      items: [
        { quote: "Approved client quote goes here.", name: "Client Name", role: "Role, Company" },
        { quote: "Approved client quote goes here.", name: "Client Name", role: "Role, Company" },
      ],
    },
    {
      type: "accordion",
      tone: "muted",
      columns: 2,
      title: "Why CTOs [Choose Us]",
      items: tech.whyUs,
    },
    {
      type: "steps",
      pad: "md",
      title: "How Your Developer [Joins The Team]",
      layout: "row",
      items: [
        { tag: "Step 1", title: "Discovery", text: "A call about your stack, team and the work ahead." },
        { tag: "Step 2", title: "Matching", text: "A shortlist of people who have done similar work." },
        { tag: "Step 3", title: "Onboarding", text: "Access, environment setup and a first small task." },
        { tag: "Step 4", title: "Shipping", text: "Regular pull requests inside your review process." },
      ],
    },
    {
      type: "cards",
      pad: "xs",
      title: "AI In [Delivery]",
      intro: "Where coding assistants help, and where a person decides.",
      columns: 3,
      items: [
        { icon: "zap", title: "Used for speed", text: "Boilerplate, test scaffolding and first drafts of documentation." },
        { icon: "eye", title: "Always reviewed", text: "Every change is read and approved by an engineer before it merges." },
        { icon: "lock", title: "Never given secrets", text: "Credentials and client data stay out of prompts. Your policy on AI tools applies." },
      ],
    },
    {
      type: "cards",
      pad: "xs",
      title: "Security And [IP]",
      intro: "What we enforce on every engagement.",
      columns: 4,
      items: [
        { icon: "file", title: "IP assignment", text: "All work product is assigned to you in the contract." },
        { icon: "handshake", title: "NDA first", text: "Signed before anyone sees your code." },
        { icon: "shield", title: "Least privilege", text: "Access limited to what the task needs." },
        { icon: "refresh", title: "Clean exit", text: "Access revoked and handover documented when work ends." },
      ],
    },
    {
      // PLACEHOLDER: DevHire rate card for this role.
      type: "pricing",
      pad: "xs",
      title: `${singular} [Pricing Tiers]`,
      tiers: [
        {
          name: "Entry",
          level: "Early career",
          price: "On request",
          features: ["Works on defined tasks", "Pairs with a senior reviewer", "Suited to well-scoped backlog items"],
          cta: { label: "Ask For Rates", href: "/contact-us/" },
        },
        {
          name: "Experienced",
          level: "Mid level",
          price: "On request",
          featured: true,
          features: ["Owns features end to end", "Reviews others' code", "Suited to most product teams"],
          cta: { label: "Ask For Rates", href: "/contact-us/" },
        },
        {
          name: "Expert",
          level: "Senior",
          price: "On request",
          features: ["Leads architecture decisions", "Mentors the team", "Suited to complex or legacy systems"],
          cta: { label: "Ask For Rates", href: "/contact-us/" },
        },
      ],
      footnote: "Rates depend on seniority, stack and team size. We quote a fixed monthly figure per developer.",
    },
    {
      type: "table",
      pad: "xs",
      title: "What Is Included In [The Rate]",
      columns: ["", "DevHire dedicated developer", "Typical freelancer"],
      highlight: 1,
      rows: [
        ["Screening and onboarding", "Included", "Your time"],
        ["Replacement if the fit is wrong", "Included", "Start again"],
        ["Continuity and handover notes", "Included", "Varies"],
        ["IP assignment and NDA", "In the contract", "Varies"],
        ["Availability", "Full time on your product", "Shared across clients"],
      ],
    },
    {
      // PLACEHOLDER: a real, client-approved outcome for this technology.
      type: "cards",
      pad: "xs",
      title: "Case [Outcome]",
      columns: 3,
      items: [
        { tag: "Challenge", title: "Where the client started", text: "Two or three sentences on the situation and what was getting in the way." },
        { tag: "Approach", title: "What the team did", text: "The decisions made and why, in plain terms." },
        { tag: "Outcome", title: "What changed", text: "Measured results go here once approved by the client." },
      ],
    },
    {
      type: "quiz",
      pad: "xs",
      title: "Is A Dedicated Developer [The Right Fit?]",
      intro: "Five quick questions.",
      questions: [
        "Is the work expected to run for three months or longer?",
        "Do you have someone who can set priorities each week?",
        "Is there an existing codebase or a clear specification?",
        "Do you want the developer inside your own tools and reviews?",
        "Would losing context between contractors hurt the project?",
      ],
      results: [
        { min: 4, title: "A dedicated developer fits well", text: "Ongoing work, clear direction and a need for continuity are what this model is built for." },
        { min: 2, title: "It could fit, with some preparation", text: "A short call will show whether a dedicated developer or a scoped project suits you better." },
        { min: 0, title: "A different model may suit you better", text: "For short or loosely defined work, a fixed-scope project is often the safer start." },
      ],
      cta: { label: "Talk To An Engineer", href: "/contact-us/" },
    },
    { type: "insights" },
    { type: "faq", title: `${tech.name} Hiring [Questions]`, items: tech.faqs },
  ];

  return {
    path,
    meta: tech.meta,
    blocks,
  };
}
