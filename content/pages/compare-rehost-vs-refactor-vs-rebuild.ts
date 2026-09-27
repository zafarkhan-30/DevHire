import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/compare/rehost-vs-refactor-vs-rebuild/",
  meta: {
    title: "Rehost vs Refactor vs Rebuild",
    description:
      "Three migration strategies compared: rehost, refactor and rebuild. What each one changes, what it leaves alone, and how to choose per application.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "left",
      eyebrow: "Comparison Guide",
      title: "Rehost vs Refactor vs [Rebuild]",
      text: "Rehosting moves the system. Refactoring improves it in place. Rebuilding replaces it. Each strategy fixes a different problem, and most estates need more than one.",
      ctas: [{ label: "Talk To An Architect", href: "/contact-us/" }],
      aside: {
        title: "Risk Profile Comparison",
        items: [
          "Rehost: lowest change risk, least improvement",
          "Refactor: moderate risk, spread over time",
          "Rebuild: highest risk, most freedom",
          "Mixed: a different strategy per application",
        ],
      },
    },
    {
      type: "cards",
      tone: "muted",
      title: "The Three Strategies [Defined]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "cloud",
          title: "Rehost",
          text: "Move the application to new infrastructure with little or no code change. Often called lift and shift. The code, its structure and its problems arrive unchanged.",
          list: ["Changes: where it runs", "Keeps: code and architecture"],
        },
        {
          icon: "wrench",
          title: "Refactor",
          text: "Restructure the existing code and architecture in steps while the system stays in use. Behaviour is preserved. Tests guard each change.",
          list: ["Changes: internal structure", "Keeps: behaviour and most business logic"],
        },
        {
          icon: "code",
          title: "Rebuild",
          text: "Write a new system that covers the same scope, usually on a new stack. The old system keeps running until the new one can take over.",
          list: ["Changes: nearly everything", "Keeps: the requirements"],
        },
      ],
    },
    {
      type: "table",
      tone: "dark",
      title: "Decision Matrix",
      align: "center",
      intro: "Apply the matrix to one application at a time, not to the whole estate.",
      columns: ["Situation", "Rehost", "Refactor", "Rebuild"],
      rows: [
        ["Hardware or data centre contract is ending", "Best fit: fastest way off", "Too slow alone. Rehost first", "Too slow alone. Rehost first"],
        ["Code is sound but hard to change", "Does not help", "Best fit", "More than needed"],
        ["Language or framework is no longer supported", "Buys time only", "Fits if an upgrade path exists", "Best fit if no upgrade path exists"],
        ["No automated tests exist", "Fits: code is untouched", "Add tests first, then refactor", "Fits, but behaviour must be rediscovered"],
        ["Business rules are poorly documented", "Fits", "Best fit: rules stay in the code", "Risky: rules are easy to miss"],
        ["Requirements have changed a great deal", "Does not help", "Fits for partial change", "Best fit"],
        ["Application is small and low risk", "Fits", "Fits", "Fits: cost of a rebuild is contained"],
      ],
    },
    {
      type: "table",
      tone: "muted",
      title: "Side-By-Side [Comparison]",
      align: "center",
      columns: ["", "Rehost", "Refactor", "Rebuild"],
      rows: [
        ["Cost shape", "Low up front. Running cost may rise or fall", "Steady spend over a longer period", "High up front, plus running two systems"],
        ["Main risk", "Old problems move with the system", "Work stalls part way and leaves two styles of code", "Missed requirements and a late or failed cutover"],
        ["Speed", "Fastest to complete", "Value arrives in steps", "Slowest to first value"],
        ["Team impact", "Mostly infrastructure and operations", "Developers need deep knowledge of the current code", "Team is split between old and new systems"],
        ["Reversibility", "High: the old environment can be kept for a period", "High: each step is small and can be rolled back", "Low after cutover"],
      ],
      footnote: "Whether rehosting reduces running cost depends on the workload and how it is sized. It is not automatic.",
    },
    {
      type: "cards",
      title: "Hidden Risks In [Each Strategy]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "credit",
          title: "Rehost: the bill does not drop",
          text: "An application designed for fixed servers may run inefficiently on rented infrastructure. Size and measure before you assume a saving.",
        },
        {
          icon: "refresh",
          title: "Refactor: no clear finish",
          text: "Without defined goals, refactoring continues without end. Set a target state and a way to tell when you have reached it.",
        },
        {
          icon: "target",
          title: "Rebuild: the moving target",
          text: "The old system keeps changing while the new one is built. The new system must catch up with a target that does not stand still.",
        },
        {
          icon: "database",
          title: "All three: data migration",
          text: "Moving and validating data is often the hardest part. Plan it early and rehearse it, whichever strategy you choose.",
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
        { tag: "Phase 1", title: "Inventory", text: "List each application, its dependencies, its owner and its business value." },
        { tag: "Phase 2", title: "Assess", text: "Rate each application for code health, test coverage, platform support and rate of change." },
        { tag: "Phase 3", title: "Assign a strategy", text: "Choose rehost, refactor, rebuild or leave alone, one application at a time." },
        { tag: "Phase 4", title: "Pilot", text: "Start with one low-risk application. Prove the process and the rollback." },
        { tag: "Phase 5", title: "Roll out", text: "Proceed in order of risk and value. Review the plan after each move." },
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
          title: "A hosting deadline and healthy code",
          text: "Imagine a company whose hosting contract is ending. The application works and the code is in reasonable shape. Rehosting fits as the first move. It meets the deadline. Refactoring can follow once the pressure is off.",
          list: ["Deadline is fixed", "Code is not the problem", "Improvement comes second"],
        },
        {
          tag: "Scenario B",
          title: "An unsupported framework with no upgrade path",
          text: "Imagine a company with an internal tool built on a framework that no longer receives updates. There is no supported upgrade route. A rebuild fits, done in stages. The team documents the current behaviour first, so that rules are not lost.",
          list: ["Platform has no future", "Behaviour documented before work starts", "Cutover is staged"],
        },
      ],
    },
    {
      type: "cta",
      variant: "navy",
      title: "Recommended Next Step: Resilience Audit",
      text: "We review your applications with your team and discuss a strategy for each one. Leaving an application alone is a valid result.",
      ctas: [
        { label: "Talk To An Architect", href: "/contact-us/" },
        { label: "Take The Risk Assessment", href: "/resources/legacy-risk-assessment/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Are these the only three options?",
          a: "No. Replatforming makes limited changes, such as moving to a managed database, without restructuring the code. You can also replace an application with a bought product, retire it or leave it as it is. This guide covers the three that involve the most engineering work.",
        },
        {
          q: "Can we rehost first and refactor later?",
          a: "Yes. This is a common sequence. Rehosting meets an infrastructure deadline. Refactoring then happens in the new environment at a pace the team can sustain.",
        },
        {
          q: "When is a rebuild justified?",
          a: "When the platform has no supported future, when requirements have changed so much that little of the old design applies, or when the application is small enough that the risk is contained.",
        },
        {
          q: "Can refactoring be done without downtime?",
          a: "Often, yes. Changes are made in small steps behind tests and released through the normal process. Some changes, particularly to data structures, need careful sequencing. No approach removes all risk.",
        },
        {
          q: "How do SyntaxHires engineers take part?",
          a: "They join your team and work in your repository and tools. You interview each developer before any contract. You own all code and IP.",
        },
      ],
    },
  ],
};

export default page;
