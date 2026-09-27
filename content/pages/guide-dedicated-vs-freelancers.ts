import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/",
  meta: {
    title: "Dedicated Developers vs Freelancers",
    description:
      "Freelancers often cost less per hour. For ongoing product work they often cost more in total. A fair guide to both options and where each one fits.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Hiring Guide",
      title: "Dedicated Developers vs Freelancers: The [Real Cost]",
      text: "A freelancer's hourly rate is often lower. The total cost of ongoing product work includes much more than the rate. This guide sets out both sides, including the cases where a freelancer is the better choice.",
      ctas: [
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline-light" },
      ],
    },
    {
      type: "text",
      title: "Why The Hourly Rate [Misleads]",
      align: "left",
      paragraphs: [
        "An hourly rate tells you what one hour of work costs. It does not tell you what a finished, maintained feature costs. The difference is made up of time that nobody invoices: finding the person, checking their work, explaining the codebase and doing it all again when they move on.",
        "For a short task these costs are small. You hire once, the work is delivered and the engagement ends. For a product that will be developed over a long period, the same costs repeat. Each new freelancer has to learn the system from the start.",
        "A dedicated developer costs more per hour on paper in many cases. The fee covers employment, screening and replacement, and the same person stays with your product. Whether that is worth paying for depends on how long the work will run.",
      ],
      aside: {
        title: "In short",
        items: [
          "Short, fixed task: a freelancer often costs less",
          "Ongoing product work: continuity often costs less",
          "Compare total cost, not the rate",
        ],
      },
    },
    {
      type: "table",
      tone: "dark",
      title: "Total Cost Of [Ownership]",
      align: "center",
      intro: "Costs are described by who carries them, not by amount. Your own figures will depend on the role and the engagement.",
      columns: ["Cost item", "Freelancer", "Dedicated developer from DevHire"],
      highlight: 2,
      rows: [
        ["Rate for the work", "Often lower per hour", "Fixed monthly fee"],
        ["Finding and screening", "Your time", "Included"],
        ["Interviewing", "Your time", "Your time: you interview before any contract"],
        ["Onboarding to your codebase", "Your time, repeated with each new hire", "Your time, once per engineer"],
        ["Daily direction and code review", "Your time", "Your time"],
        ["Availability", "Varies with their other clients", "Full time on your product"],
        ["Payroll and employment admin", "Varies by country and contract", "Included"],
        ["Replacement if the fit is wrong", "Your time: a new search", "Included"],
        ["Knowledge kept when someone leaves", "Varies: depends on what was written down", "Varies: depends on what was written down"],
        ["Ending the engagement", "Varies by contract", "Month-to-month terms, no exit fee"],
      ],
      footnote: "Both options need your time for direction and review. No hiring model removes that.",
    },
    {
      type: "split",
      title: "Where Each Option [Fits]",
      align: "center",
      intro: "Neither option is better in general. Each fits a different kind of work.",
      panels: [
        {
          title: "A freelancer is the right choice when",
          mood: "neutral",
          items: [
            { title: "The task is short and well defined", text: "A fixed piece of work with a clear finish and little follow-up." },
            { title: "You need a rare skill briefly", text: "A specialist for a review, an audit or a single integration." },
            { title: "The work is separate from your core product", text: "A prototype, a script or a one-off tool that nobody will extend." },
            { title: "You can vet and manage the person yourself", text: "You have the technical judgement and the time to do both." },
          ],
        },
        {
          title: "A dedicated developer is the right choice when",
          mood: "good",
          items: [
            { title: "The work has no fixed end", text: "A product with a roadmap, not a task with a deadline." },
            { title: "Context builds over time", text: "The longer someone works on the system, the more useful they are." },
            { title: "You need predictable capacity", text: "The same hours are available every month for planning." },
            { title: "Code ownership must be clear", text: "You own all code and IP, and an NDA is signed before code access." },
          ],
        },
      ],
    },
    {
      type: "cards",
      tone: "dark",
      title: "Costs That [Appear Later]",
      align: "center",
      intro: "These apply mainly to long-running work staffed with a series of short engagements.",
      columns: 4,
      items: [
        {
          icon: "refresh",
          title: "Repeated onboarding",
          text: "Each new person needs the same explanations. Your senior engineers give them, and their own work waits.",
        },
        {
          icon: "clock",
          title: "Shared attention",
          text: "A freelancer with several clients has to choose whose deadline comes first. It will not always be yours.",
        },
        {
          icon: "layers",
          title: "Inconsistent code",
          text: "Different people bring different habits. Without firm review, the codebase collects several styles.",
        },
        {
          icon: "search",
          title: "The search itself",
          text: "Posting, screening and interviewing take time on every hire. With long-term work you do it less often.",
        },
      ],
    },
    {
      type: "stats",
      tone: "muted",
      title: "DevHire Terms At A [Glance]",
      align: "center",
      items: [
        { value: "Monthly", label: "Contract term", note: "Engagements run month to month" },
        { value: "None", label: "Exit fee", note: "Notice period is stated in the contract" },
        { value: "Yours", label: "Code and IP", note: "Assigned to you by contract" },
        { value: "First", label: "Your interview", note: "You meet the developer before any contract" },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Validate Your Budget",
      text: "Use the cost estimate to see what a dedicated developer would cost for your role and team size. Then compare it with your total freelance cost, including your own time.",
      ctas: [
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Are freelancers always cheaper per hour?",
          a: "Not always, but often. Rates vary with skill, location and demand. The more useful comparison is total cost over the period you expect the work to run.",
        },
        {
          q: "When should I choose a freelancer over a dedicated developer?",
          a: "When the task is short, clearly defined and separate from your core product, and when you can vet and manage the person yourself.",
        },
        {
          q: "What happens if a dedicated developer is not the right fit?",
          a: "We replace them. You interview the replacement before they start, in the same way as the first developer.",
        },
        {
          q: "Am I locked into a long contract?",
          a: "No. Engagements run month to month with no exit fee. The notice period is stated in the contract.",
        },
      ],
    },
  ],
};

export default page;
