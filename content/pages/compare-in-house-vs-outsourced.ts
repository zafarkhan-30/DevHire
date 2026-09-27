import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/compare/in-house-vs-outsourced-legacy-modernization/",
  meta: {
    title: "In-House vs Outsourced Legacy Modernisation",
    description:
      "Should your own team modernise the legacy system, or should you bring in outside engineers? A balanced comparison of in-house, outsourced and blended approaches.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      align: "left",
      eyebrow: "Comparison Guide",
      title: "In-House vs Outsourced [Legacy Modernisation]",
      text: "Your team knows the system. Outside engineers bring capacity and migration experience. Most projects need some of both. This guide helps you decide the split.",
      ctas: [{ label: "Get A Resilience Audit", href: "/service/legacy-system-modernization/" }],
      aside: {
        title: "Risk Profile Comparison",
        items: [
          "In-house: deep context, limited spare capacity",
          "Outsourced: added capacity, context must be transferred",
          "Blended: shared ownership, roles must be explicit",
        ],
      },
    },
    {
      type: "cards",
      title: "Three Ways To [Staff] The Work",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "building",
          title: "In-house",
          text: "Your own engineers plan and carry out the modernisation. They already know the business rules and the history. They also carry the day-to-day work of keeping the current system running.",
        },
        {
          icon: "briefcase",
          title: "Outsourced project",
          text: "A vendor takes the modernisation as a defined project and delivers against a scope. Your team supplies knowledge and accepts the result. Control over daily decisions sits mostly with the vendor.",
        },
        {
          icon: "handshake",
          title: "Blended team",
          text: "Outside engineers join your team and work in your repository and tools. Your people hold the domain knowledge and the architecture decisions. The added engineers supply capacity.",
        },
      ],
    },
    {
      type: "table",
      tone: "dark",
      title: "Decision Matrix",
      align: "center",
      intro: "Match your situation to a row. The right answer often changes from one phase to the next.",
      columns: ["Situation", "In-house", "Outsourced project", "Blended team"],
      rows: [
        ["Business rules live only in people's heads", "Best fit: knowledge is here", "Weak fit until rules are documented", "Fits: your people guide the work"],
        ["Team is fully busy with maintenance", "Weak fit: no spare capacity", "Fits", "Best fit: adds capacity inside the team"],
        ["Target stack is new to your team", "Fits with training time", "Fits", "Best fit: skills transfer as work proceeds"],
        ["Scope is fixed and well documented", "Fits", "Best fit: clear deliverable", "Fits"],
        ["Scope will change as you learn", "Fits", "Weak fit: change requests add friction", "Best fit: priorities can move"],
        ["Your team must run the system afterwards", "Best fit", "Plan a long handover", "Fits: your team is involved throughout"],
        ["Strict limits on who can access data", "Best fit", "Check contract and access model", "Fits: work stays in your environment"],
      ],
    },
    {
      type: "table",
      tone: "muted",
      title: "Side-By-Side [Comparison]",
      align: "center",
      columns: ["", "In-house", "Outsourced project", "Blended team"],
      rows: [
        ["Cost shape", "Salaries you already pay, plus delayed roadmap work", "Fixed price or milestones, plus change requests", "Monthly fee per added engineer"],
        ["Main risk", "Modernisation loses to urgent work and stalls", "The result is delivered but your team cannot maintain it", "Roles blur and nobody owns a decision"],
        ["Speed", "Slow to start if hiring is needed", "Fast to start, slower while context is transferred", "Depends on how quickly your team can onboard people"],
        ["Team impact", "High load on people who also run production", "Low daily load, high load at handover", "Moderate load: your team reviews and guides"],
        ["Reversibility", "High: you control every step", "Low mid-project without a contract change", "High: team size can change as phases end"],
      ],
    },
    {
      type: "cards",
      title: "Hidden Risks To [Plan For]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "alert",
          title: "Undocumented behaviour",
          text: "Old systems contain rules nobody remembers adding. Whoever does the work needs time to discover them before changing anything.",
        },
        {
          icon: "users",
          title: "Key-person dependence",
          text: "If one person understands the legacy system, the project depends on their availability. This is true for every staffing model.",
        },
        {
          icon: "refresh",
          title: "Two systems at once",
          text: "During migration you run the old and the new system together. Someone has to support both. Plan that capacity from the start.",
        },
        {
          icon: "file",
          title: "Handover that comes too late",
          text: "Knowledge transfer left to the end is rushed. Build it into each phase so your team learns the new system as it is built.",
        },
      ],
    },
    {
      type: "steps",
      tone: "muted",
      layout: "row",
      title: "A Phased Way To [Decide] And Act",
      align: "center",
      items: [
        { tag: "Phase 1", title: "Map the system", text: "List components, dependencies, data flows and who understands each one." },
        { tag: "Phase 2", title: "Measure capacity", text: "Work out how much time your team can give once production support is covered." },
        { tag: "Phase 3", title: "Choose the split", text: "Decide which work stays in-house and which needs added engineers." },
        { tag: "Phase 4", title: "Run one slice", text: "Modernise one contained part first. Use it to test the process and the team." },
        { tag: "Phase 5", title: "Review and adjust", text: "Compare the result with the plan. Change the staffing split if needed." },
      ],
    },
    {
      type: "cards",
      title: "Two Anonymised [Scenarios]",
      align: "center",
      intro: "Both scenarios are invented illustrations. They are not client stories.",
      columns: 2,
      items: [
        {
          tag: "Scenario A",
          title: "A small team that knows the system well",
          text: "Imagine a company whose engineers wrote the legacy system and still maintain it. They understand every rule but have no spare time. A blended team fits. The added engineers take on the migration work while the original team reviews it and answers questions.",
          list: ["Knowledge is in-house", "Capacity is the constraint", "Your team keeps architecture decisions"],
        },
        {
          tag: "Scenario B",
          title: "A system with a documented, stable scope",
          text: "Imagine a company with a reporting module that is well documented and rarely changes. The work is clearly bounded. An outsourced project can fit here, provided the contract covers handover and your team reviews the code before accepting it.",
          list: ["Scope is documented", "Few unknowns", "Handover is planned in the contract"],
        },
      ],
    },
    {
      type: "cta",
      variant: "navy",
      title: "Recommended Next Step: Resilience Audit",
      text: "We look at the system with your team, list the risks and discuss which work should stay in-house. You decide what happens next.",
      ctas: [
        { label: "Get A Resilience Audit", href: "/service/legacy-system-modernization/" },
        { label: "Take The Risk Assessment", href: "/resources/legacy-risk-assessment/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Will outside engineers understand our legacy system?",
          a: "Not on the first day. They need access to your people, your documentation and the code. Plan time for discovery. Your team's knowledge remains essential in every model.",
        },
        {
          q: "Who makes architecture decisions in a blended team?",
          a: "You do. DevHire engineers work in your repository and tools and follow the direction your team sets.",
        },
        {
          q: "Who owns the modernised code?",
          a: "You own all code and IP. An NDA is signed before anyone has access to your code.",
        },
        {
          q: "Can we reduce the team once the hard part is done?",
          a: "Yes. Engagements run month to month with no exit fee, so you can change team size as phases finish. The notice period is stated in the contract.",
        },
        {
          q: "Is doing everything in-house a mistake?",
          a: "No. If your team has the capacity and the skills for the target stack, in-house work keeps knowledge and control in one place. The common problem is capacity, not ability.",
        },
      ],
    },
  ],
};

export default page;
