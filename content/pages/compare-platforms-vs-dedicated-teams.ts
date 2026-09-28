import type { PageDef } from "@/content/types";

// Compares hiring models only. No company or product is named or described.
const page: PageDef = {
  path: "/compare/marketplaces-vs-freelance-platforms-vs-dedicated-teams/",
  meta: {
    title: "Marketplaces vs Freelancers vs Dedicated Teams",
    description:
      "A plain comparison of four ways to hire remote developers: talent marketplaces, freelance platforms, AI-matching networks and a dedicated team. Cost shape, risk, speed and reversibility.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      align: "left",
      eyebrow: "Comparison Guide",
      title: "Talent Marketplaces vs Freelance Platforms vs [Dedicated Teams]",
      text: "Four hiring models solve four different problems. This guide compares the models, not the companies that sell them, so you can match one to the work you have.",
      ctas: [{ label: "Schedule A Comparison Call", href: "/contact-us/" }],
      aside: {
        title: "Risk Profile Comparison",
        items: [
          "Talent marketplace: screened pool, continuity is yours to manage",
          "Freelance platform: widest choice, you do the vetting",
          "AI-matching network: fast shortlist, fit still needs an interview",
          "Dedicated team: one employer, replacement if the fit is wrong",
        ],
      },
    },
    {
      type: "cards",
      title: "The Four Models In [Plain Terms]",
      align: "center",
      intro: "Each model is a different answer to the same question: who finds, screens, employs and supports the engineer.",
      columns: 4,
      items: [
        {
          icon: "search",
          title: "Talent marketplace",
          text: "A curated pool of contractors. The marketplace screens applicants and proposes a few profiles. You contract through the marketplace and manage the person yourself.",
        },
        {
          icon: "globe",
          title: "Freelance platform",
          text: "An open listing site. You post the work, freelancers bid and you choose. Screening, management and continuity are your responsibility.",
        },
        {
          icon: "brain",
          title: "AI-matching network",
          text: "A pool of engineers matched to your brief by software. The shortlist arrives quickly. How deeply each engineer is assessed differs between providers.",
        },
        {
          icon: "users",
          title: "Dedicated team from SyntaxHires",
          text: "Engineers employed by SyntaxHires who work only on your product. You interview them before any contract. They work in your repository and your tools.",
        },
      ],
    },
    {
      type: "table",
      tone: "dark",
      title: "Decision Matrix",
      align: "center",
      intro: "Find the row closest to your situation. No model wins every row.",
      columns: ["Situation", "Talent marketplace", "Freelance platform", "AI-matching network", "Dedicated team"],
      highlight: 4,
      rows: [
        ["A small, well-defined task", "Fits, may be more than needed", "Best fit: low setup", "Fits", "More than you need"],
        ["A specialist skill for a short period", "Good fit", "Fits if you can vet the skill", "Good fit", "Fits if the need will return"],
        ["Ongoing product development", "Fits, watch continuity", "Weak fit: availability changes", "Fits, watch continuity", "Best fit: same people long term"],
        ["Several engineers working as one unit", "You assemble the team", "You assemble and manage it", "You assemble the team", "Best fit: hired as a team"],
        ["Sensitive code or regulated data", "Check terms per contractor", "Depends on each freelancer", "Check terms per contractor", "NDA before access, IP assigned by contract"],
        ["Budget may stop at short notice", "Fits", "Best fit: pay per task", "Fits", "Fits: month-to-month, no exit fee"],
        ["No one in-house to vet engineers", "Fits: screening is done for you", "Weak fit", "Fits, ask how screening works", "Fits: screening is done for you"],
      ],
    },
    {
      type: "table",
      tone: "muted",
      title: "Side-By-Side [Comparison]",
      align: "center",
      columns: ["", "Talent marketplace", "Freelance platform", "AI-matching network", "Dedicated team"],
      highlight: 4,
      rows: [
        ["Cost shape", "Hourly or monthly rate with the platform fee built in", "Hourly or fixed price per task, plus platform fees", "Hourly or monthly rate with the platform fee built in", "Monthly fee per engineer"],
        ["Main risk", "The contractor moves to another engagement", "Quality and availability vary widely", "A match on paper does not fit in practice", "You depend on one provider"],
        ["Speed to start", "Fast once you accept a profile", "Fast for small tasks", "Fast shortlist, interviews still needed", "Depends on interviews and your onboarding"],
        ["Team impact", "You manage each contractor", "You manage each freelancer and every handover", "You manage each contractor", "Engineers join your rituals and tools"],
        ["Reversibility", "Easy to end. Knowledge leaves with the person", "Easy to end. Knowledge leaves with the person", "Easy to end. Knowledge leaves with the person", "Month-to-month terms, no exit fee"],
      ],
      footnote: "Terms differ between providers within each model. Read the contract, not the category.",
    },
    {
      type: "cta",
      variant: "strip",
      title: "Want This Comparison Applied To Your Project?",
      ctas: [{ label: "Schedule A Comparison Call", href: "/contact-us/" }],
    },
    {
      type: "cards",
      title: "Hidden Risks In [Every Model]",
      align: "center",
      intro: "These costs rarely appear on a rate card. They apply to us as well, so ask us about them.",
      columns: 4,
      items: [
        {
          icon: "clock",
          title: "Divided attention",
          text: "An engineer with several clients splits focus. Context suffers when two priorities collide. Ask how many clients each person serves.",
        },
        {
          icon: "file",
          title: "Knowledge that leaves",
          text: "When an engagement ends, the reasons behind decisions leave with the person unless they are written down in your own systems.",
        },
        {
          icon: "lock",
          title: "Unclear ownership",
          text: "Who owns the code depends on the contract with each individual or provider. Confirm IP assignment before work starts.",
        },
        {
          icon: "eye",
          title: "Your management time",
          text: "Every model needs someone on your side to set priorities and review work. The rate does not show this cost.",
        },
      ],
    },
    {
      type: "steps",
      tone: "muted",
      layout: "row",
      title: "How To [Decide] And Act",
      align: "center",
      items: [
        { tag: "Phase 1", title: "Describe the work", text: "Write down the scope, how long it will run and who will manage it." },
        { tag: "Phase 2", title: "Rank your constraints", text: "Order cost, speed, continuity and control. Only one can come first." },
        { tag: "Phase 3", title: "Shortlist two models", text: "Use the decision matrix to drop the models that do not fit." },
        { tag: "Phase 4", title: "Interview people", text: "Talk to the engineers, not only the sales contact. Check the contract terms." },
        { tag: "Phase 5", title: "Start small and review", text: "Begin with a limited piece of work. Review the result before you add more people." },
      ],
    },
    {
      type: "cards",
      title: "Two Anonymised [Scenarios]",
      align: "center",
      intro: "Both scenarios are invented illustrations of the reasoning above. They are not client stories.",
      columns: 2,
      items: [
        {
          tag: "Scenario A",
          title: "A one-off task with a clear finish",
          text: "Imagine a small company that needs a single data import script. The scope is fixed and nobody will maintain it after delivery. A freelance platform fits. The task is short, the risk is low and a dedicated team would be more than the work needs.",
          list: ["Scope is fixed", "No long-term maintenance", "Low cost of getting it wrong"],
        },
        {
          tag: "Scenario B",
          title: "A product with a long roadmap",
          text: "Imagine a software company with a product in production and a backlog that keeps growing. The same people need to understand the codebase over time. A dedicated team fits. Continuity matters more than the lowest rate.",
          list: ["Work has no fixed end", "Context builds over time", "Replacing people is expensive"],
        },
      ],
    },
    {
      type: "cta",
      variant: "navy",
      title: "Recommended Next Step: A Comparison Call",
      text: "Tell us about the work and your constraints. If another model suits you better than a dedicated team, we will say so.",
      ctas: [
        { label: "Schedule A Comparison Call", href: "/contact-us/" },
        { label: "See How We Vet", href: "/how-we-vet/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Which model is the cheapest?",
          a: "It depends on the work. For a short, fixed task a freelance platform usually costs least. For ongoing product work, the cost of re-hiring, re-onboarding and lost context often outweighs a lower rate. Compare total cost, not the rate alone.",
        },
        {
          q: "Is a dedicated team always the better choice?",
          a: "No. A dedicated team suits ongoing work where continuity matters. For a small task with a clear end, it is more than you need.",
        },
        {
          q: "Can I interview the engineers before I commit?",
          a: "With SyntaxHires, yes. You interview each developer before any contract is signed. With other models, ask the provider whether you can speak to the engineer directly.",
        },
        {
          q: "Who owns the code?",
          a: "With SyntaxHires, you own all code and IP, and an NDA is signed before anyone has code access. With other models, ownership depends on the contract with each individual, so check the terms.",
        },
        {
          q: "What happens if I want to stop?",
          a: "SyntaxHires engagements run month to month with no exit fee. The notice period is stated in the contract. Other models have their own terms, which differ between providers.",
        },
      ],
    },
  ],
};

export default page;
