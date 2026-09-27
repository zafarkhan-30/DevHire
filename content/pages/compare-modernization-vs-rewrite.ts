import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/compare/legacy-modernization-vs-rewrite/",
  meta: {
    title: "Legacy Modernisation vs Rewrite",
    description:
      "Should you modernise the legacy system in steps or rewrite it from scratch? A balanced comparison of risk, cost shape, speed and reversibility.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "left",
      eyebrow: "Comparison Guide",
      title: "Legacy Modernisation vs [Full Rewrite]",
      text: "Incremental modernisation replaces the system piece by piece while it stays in use. A rewrite builds a new system and switches over. The first spreads risk. The second concentrates it. Both have cases where they are the right call.",
      ctas: [{ label: "Get A Resilience Audit", href: "/service/legacy-system-modernization/" }],
      aside: {
        title: "Risk Profile Comparison",
        items: [
          "Modernisation: many small risks, each reversible",
          "Rewrite: one large risk at cutover",
          "Both: undocumented rules are the main danger",
        ],
      },
    },
    {
      type: "text",
      tone: "muted",
      title: "What Each Approach [Involves]",
      align: "left",
      paragraphs: [
        "Incremental modernisation changes the system in steps. A common method places a routing layer in front of the old system. New components take over one function at a time, and the old code is retired as each function moves. The system stays in production throughout.",
        "A full rewrite starts a new codebase. The team rebuilds the required functions, migrates the data and switches users over, either all at once or in groups. The old system must be kept running, and often kept changing, until the switch.",
        "Neither approach is always right. Incremental work can be slow and leaves old and new code side by side for a long time. A rewrite gives a clean design but delays value and risks missing behaviour that nobody wrote down.",
      ],
      aside: {
        title: "In short",
        items: [
          "Modernise: steady steps, system stays live",
          "Rewrite: clean start, value arrives at the end",
          "The decision can differ per component",
        ],
      },
    },
    {
      type: "table",
      tone: "dark",
      title: "Decision Matrix",
      align: "center",
      intro: "Find the rows that match your system. Mixed results usually mean a mixed approach.",
      columns: ["Situation", "Incremental modernisation", "Full rewrite"],
      rows: [
        ["System is business-critical and must stay available", "Best fit: changes are small and staged", "Risky: cutover is a single large event"],
        ["Business rules exist only in the code", "Best fit: rules are moved one at a time", "Risky: rules are easy to miss"],
        ["Platform has no supported upgrade path", "Fits if parts can be replaced around it", "Best fit"],
        ["Requirements have changed a great deal", "Fits for partial change", "Best fit: old design no longer applies"],
        ["System is small and well understood", "Fits", "Fits: risk is contained"],
        ["Code cannot be tested or safely changed", "Hard: add tests at the edges first", "Fits, after behaviour is documented"],
        ["Funding is approved in stages", "Best fit: each stage delivers something", "Weak fit: value arrives late"],
      ],
    },
    {
      type: "table",
      tone: "muted",
      title: "Side-By-Side [Comparison]",
      align: "center",
      columns: ["", "Incremental modernisation", "Full rewrite"],
      rows: [
        ["Cost shape", "Steady spend over a longer period", "High up front, plus the cost of running two systems"],
        ["Main risk", "Work stops part way and leaves a hybrid system", "Missed requirements and a late or failed cutover"],
        ["Speed", "First results early, full completion later", "No results until a usable version exists"],
        ["Team impact", "Team must work in old and new code", "Team is split between maintaining and rebuilding"],
        ["Reversibility", "High: each step can be rolled back", "Low after cutover"],
      ],
    },
    {
      type: "cards",
      title: "Hidden Risks To [Plan For]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "eye",
          title: "Behaviour nobody documented",
          text: "Old systems handle edge cases that users rely on without knowing. Both approaches need a way to discover them before they are lost.",
        },
        {
          icon: "layers",
          title: "The permanent hybrid",
          text: "Incremental work that loses funding leaves two systems joined together. Plan each step so the system is in a stable state if work pauses.",
        },
        {
          icon: "target",
          title: "Feature parity",
          text: "A rewrite must match what the old system does before users will switch. The old system keeps gaining features during the build.",
        },
        {
          icon: "database",
          title: "Data migration",
          text: "Old data often breaks the rules the new system expects. Profile and clean it early. Rehearse the migration more than once.",
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
        { tag: "Phase 1", title: "Assess", text: "Review code health, test coverage, platform support and how well the rules are documented." },
        { tag: "Phase 2", title: "Capture behaviour", text: "Record what the system does today with tests around its inputs and outputs." },
        { tag: "Phase 3", title: "Choose per component", text: "Decide to modernise, rewrite or leave alone, one component at a time." },
        { tag: "Phase 4", title: "Deliver one slice", text: "Move one function to production. Confirm that the rollback works." },
        { tag: "Phase 5", title: "Continue and retire", text: "Repeat in order of value and risk. Remove old code as each part moves." },
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
          title: "A core system that cannot go offline",
          text: "Imagine a company that runs its daily operations on one large, old application. The rules inside it were added over many years. Incremental modernisation fits. Functions move one at a time, and the business keeps running while they do.",
          list: ["System is critical", "Rules are in the code", "Each step can be reversed"],
        },
        {
          tag: "Scenario B",
          title: "A small tool on an abandoned platform",
          text: "Imagine a company with a small internal tool built on a platform that is no longer maintained. The tool does a few well-understood things. A rewrite fits. The scope is small, the behaviour is known and the old platform offers nothing to build on.",
          list: ["Scope is small", "Behaviour is understood", "Platform has no future"],
        },
      ],
    },
    {
      type: "cta",
      variant: "navy",
      title: "Recommended Next Step: Resilience Audit",
      text: "We review the system with your team, list the risks and discuss which parts to modernise, rewrite or leave alone.",
      ctas: [
        { label: "Get A Resilience Audit", href: "/service/legacy-system-modernization/" },
        { label: "Zero-Downtime Approach", href: "/service/legacy-modernization-zero-downtime/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Is a rewrite always a mistake?",
          a: "No. A rewrite is reasonable when the platform has no supported future, when the system is small, or when requirements have changed so much that the old design no longer applies. It carries more risk, so it needs a stronger reason.",
        },
        {
          q: "Does incremental modernisation take longer?",
          a: "Full completion often takes longer. The difference is that results arrive along the way, and the work can pause without leaving the business without a working system.",
        },
        {
          q: "Can we combine both approaches?",
          a: "Yes. Many projects rewrite a few components and modernise the rest in place. Decide one component at a time.",
        },
        {
          q: "What should we do before choosing?",
          a: "Capture the current behaviour in tests and documentation. Whichever approach you choose, this reduces the chance of losing rules that the business depends on.",
        },
        {
          q: "Who owns the code that DevHire engineers write?",
          a: "You do. You own all code and IP. An NDA is signed before anyone has code access, and the work happens in your repository and tools.",
        },
      ],
    },
  ],
};

export default page;
