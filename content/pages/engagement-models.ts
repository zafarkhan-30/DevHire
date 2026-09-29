import type { PageDef } from "@/content/types";

// No prices are shown on this page at the user's request. Every engagement is quoted in writing.
const page: PageDef = {
  path: "/engagement-models/",
  meta: {
    title: "Engagement Models",
    description:
      "Three ways to work with SyntecHire on a software project: fixed scope, time and material, or a dedicated team. When each fits and how changes are handled.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      align: "center",
      eyebrow: "Engagement Models",
      title: "Three Ways To [Work With Us]",
      text: "The right model depends on how clear the scope is and how much you expect it to change. We quote in writing before you commit to any of them.",
      ctas: [
        { label: "Compare The Models", href: "#compare" },
        { label: "Ask For A Quote", href: "/services/#enquiry", variant: "outline-light" },
      ],
    },
    {
      type: "cards",
      id: "models",
      title: "The [Models]",
      align: "center",
      columns: 3,
      items: [
        {
          tag: "Clear scope",
          title: "Fixed Scope",
          text: "We agree the features, the timeline and the price before work starts.",
          list: ["Price known in advance", "Paid against milestones", "Changes handled by written change request", "Suits a well-defined first version"],
        },
        {
          tag: "Evolving scope",
          title: "Time And Material",
          text: "You pay for the work done. Priorities are set sprint by sprint.",
          list: ["Scope can change as you learn", "Billed for time used, with a report", "You can pause or stop at a sprint boundary", "Suits products still taking shape"],
        },
        {
          tag: "Ongoing product",
          title: "Dedicated Team",
          text: "A team that works only on your product, for a monthly fee per person.",
          list: ["Same people month after month", "You direct the priorities", "Month-to-month terms", "Suits continuous development"],
          href: "/service/dedicated-developers/",
          linkLabel: "See dedicated teams",
        },
      ],
      footnote: "Prices depend on scope, seniority and team size. Every engagement is quoted in writing.",
    },
    {
      type: "table",
      id: "compare",
      tone: "muted",
      title: "The Models [Side By Side]",
      align: "center",
      columns: ["", "Fixed scope", "Time and material", "Dedicated team"],
      rows: [
        ["Best when", "Requirements are clear and stable", "Requirements are still being discovered", "The product needs continuous work"],
        ["What is agreed upfront", "Features, timeline and price", "Team, rate and sprint length", "Team and monthly fee"],
        ["How changes are handled", "Written change request, approved by you", "Planned into the next sprint", "You reprioritise at any time"],
        ["How you are billed", "Against milestones", "For time used, with a report", "Monthly per team member"],
        ["Who directs daily work", "SyntecHire", "SyntecHire, with your priorities", "You, with a lead if wanted"],
        ["Risk of cost overrun", "Low for you, if scope holds", "Managed sprint by sprint", "Fixed monthly cost"],
      ],
    },
    {
      type: "steps",
      title: "Which Model [Fits You?]",
      layout: "row",
      align: "center",
      items: [
        { tag: "You have a written spec", title: "Fixed Scope", text: "A clear specification means the price can be fixed with confidence." },
        { tag: "You have an idea", title: "Discovery, Then Decide", text: "A short discovery stage turns the idea into a scope. Then you choose a model." },
        { tag: "You expect change", title: "Time And Material", text: "When learning from users will change the plan, fixing the scope works against you." },
        { tag: "You have a live product", title: "Dedicated Team", text: "Continuous development needs people who stay with the product." },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "The Same In [Every Model]",
      align: "center",
      columns: 4,
      items: [
        { icon: "file", title: "NDA First", text: "Signed before you share anything confidential." },
        { icon: "lock", title: "You Own The IP", text: "Code and designs assigned to you by contract." },
        { icon: "git", title: "Your Repository", text: "Code kept in your repository from the first day." },
        { icon: "handshake", title: "Written Terms", text: "Scope, cost and notice period stated before work starts." },
      ],
    },
    {
      type: "faq",
      title: "Engagement [Questions]",
      items: [
        { q: "Can we change model part way through?", a: "Yes. A common path is a fixed-scope first version, followed by a dedicated team or time and material for the work after launch." },
        { q: "Why are there no prices on this page?", a: "The cost of a project depends on what is being built. We would rather give you an accurate figure in writing after a short call than a range that may not apply to you." },
        { q: "What is a change request?", a: "A short written note describing a change to the agreed scope and its effect on time and cost. Work on the change starts only after you approve it." },
        { q: "Is there a minimum engagement?", a: "Dedicated teams run month to month. For projects, the minimum is the scope we agree. The notice period is stated in the agreement." },
        { q: "Do you offer recruitment as well?", a: "Yes. If you want to hire engineers onto your own payroll, our recruitment pricing is on the pricing page." },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Not Sure Which Model Fits?",
      text: "Tell us what you want to build and how settled the scope is. We will recommend a model and explain why.",
      ctas: [
        { label: "Ask For A Quote", href: "/services/#enquiry" },
        { label: "Recruitment Pricing", href: "/pricing/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
