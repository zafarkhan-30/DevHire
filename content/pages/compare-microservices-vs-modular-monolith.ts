import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/compare/microservices-vs-modular-monolith/",
  meta: {
    title: "Microservices vs Modular Monolith",
    description:
      "A balanced comparison of microservices and the modular monolith. Deployment, data, team structure, operating cost and how to move from one to the other.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "left",
      eyebrow: "Comparison Guide",
      title: "Microservices vs [Modular Monolith]",
      text: "Both are valid architectures. Microservices buy independent deployment at the price of distributed-system complexity. A modular monolith keeps operations simple but deploys as one unit. The right choice depends on your team and your load, not on fashion.",
      ctas: [{ label: "Get An Estimated Cost", href: "/resources/developer-cost-estimate/" }],
      aside: {
        title: "Complexity Profile Comparison",
        items: [
          "Modular monolith: one deployment, boundaries enforced in code",
          "Microservices: many deployments, boundaries enforced by the network",
          "Both: poor boundaries cause most of the pain",
        ],
      },
    },
    {
      type: "text",
      tone: "muted",
      title: "What Each Term [Means]",
      align: "left",
      paragraphs: [
        "A modular monolith is one application, built and deployed as a single unit. Inside it, the code is divided into modules with clear boundaries. Modules talk to each other through defined interfaces and in-process calls. They usually share one database, often with separate schemas or tables per module.",
        "Microservices split the system into small services that are deployed independently. Each service owns its data and talks to the others over the network, through APIs or messages. A team can release one service without releasing the rest.",
        "The two are closer than they look. Both depend on well-chosen boundaries. A monolith with good module boundaries can be split later. Microservices with poor boundaries behave like a monolith that is harder to run.",
      ],
      aside: {
        title: "In short",
        items: [
          "Monolith: simpler to run, deploys together",
          "Microservices: deploy apart, harder to run",
          "Boundaries matter more than the label",
        ],
      },
    },
    {
      type: "table",
      tone: "dark",
      title: "Decision Matrix",
      align: "center",
      intro: "Find the rows that describe you. If most point one way, start there.",
      columns: ["Situation", "Modular monolith", "Microservices"],
      rows: [
        ["One small team, one product", "Best fit: least overhead", "Overhead likely outweighs the benefit"],
        ["Domain boundaries are still changing", "Best fit: boundaries are cheap to move", "Weak fit: moving a boundary means changing services and data"],
        ["Several teams blocked by a shared release", "Fits if releases can be made frequent", "Best fit: teams release independently"],
        ["One component has very different load", "Fits: scale the whole app, or extract that part", "Best fit: scale that service alone"],
        ["Little platform or operations capacity", "Best fit: one pipeline, one runtime", "Weak fit: needs monitoring, tracing and automation"],
        ["Operations must be strongly consistent", "Best fit: local database transactions", "Harder: needs sagas or similar patterns"],
        ["A part must be isolated for compliance or fault containment", "Possible but limited", "Best fit: isolation by process and data store"],
      ],
    },
    {
      type: "table",
      tone: "muted",
      title: "Side-By-Side [Comparison]",
      align: "center",
      columns: ["", "Modular monolith", "Microservices"],
      rows: [
        ["Cost shape", "Lower infrastructure and tooling cost. Cost grows with build and test time", "Higher infrastructure, tooling and platform cost. Cost grows with the number of services"],
        ["Main risk", "Module boundaries erode until everything depends on everything", "Distributed failures, data inconsistency and hard-to-trace errors"],
        ["Speed", "Fast to start. Can slow down as the codebase and team grow", "Slow to start. Can stay fast for many teams once the platform exists"],
        ["Team impact", "Teams share one codebase and one release process", "Teams own services end to end, including running them"],
        ["Reversibility", "Easier: modules can be extracted into services later", "Harder: merging services back together is significant work"],
      ],
      footnote: "These are tendencies, not guarantees. Discipline and tooling change the result in both directions.",
    },
    {
      type: "cards",
      title: "Hidden Risks On [Both Sides]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "network",
          title: "The distributed monolith",
          text: "Services that must be deployed together, or that share a database, carry the cost of microservices without the independence.",
        },
        {
          icon: "layers",
          title: "Boundary erosion",
          text: "In a monolith, a shortcut across modules is one import away. Without automated checks, the structure decays over time.",
        },
        {
          icon: "database",
          title: "Data consistency",
          text: "Splitting data across services removes cross-service transactions. Business operations that span services need careful design.",
        },
        {
          icon: "search",
          title: "Debugging across services",
          text: "A request that crosses several services is hard to follow without tracing and central logging. These must exist before you need them.",
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
        { tag: "Phase 1", title: "Name the problem", text: "State what hurts today: release conflicts, scaling, reliability or code that is hard to change." },
        { tag: "Phase 2", title: "Map the domain", text: "Identify the business capabilities and where the natural boundaries lie." },
        { tag: "Phase 3", title: "Enforce modules first", text: "Draw the boundaries inside the existing codebase and check them automatically." },
        { tag: "Phase 4", title: "Extract only with cause", text: "Move a module into a service when it has a clear reason, such as separate scaling or release cadence." },
        { tag: "Phase 5", title: "Measure and review", text: "Track release frequency and incidents. Stop extracting when the benefit stops." },
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
          title: "A young product with one team",
          text: "Imagine a company with a single engineering team and a product whose features still change shape often. A modular monolith fits. The team can move boundaries cheaply, run one pipeline and keep its attention on the product.",
          list: ["Boundaries still moving", "One team, one release", "No dedicated platform staff"],
        },
        {
          tag: "Scenario B",
          title: "Several teams and one overloaded component",
          text: "Imagine a company with several teams working in one codebase. Releases collide, and one component receives far more traffic than the rest. Extracting that component as a service fits. The rest can stay in the monolith until there is a reason to move it.",
          list: ["Release conflicts between teams", "Uneven load", "Extraction is selective, not total"],
        },
      ],
    },
    {
      type: "cta",
      variant: "navy",
      title: "Recommended Next Step: Architecture Review",
      text: "Talk through your system with a senior engineer. We will discuss the trade-offs for your case, including the option of changing nothing.",
      ctas: [
        { label: "Talk To An Architect", href: "/contact-us/" },
        { label: "Get An Estimated Cost", href: "/resources/developer-cost-estimate/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Are microservices more scalable than a monolith?",
          a: "They allow each service to scale separately, which helps when load is uneven. A monolith can also scale by running more copies behind a load balancer. Many systems never need more than that.",
        },
        {
          q: "Can we start with a modular monolith and move to microservices later?",
          a: "Yes, and it is a common path. Clean module boundaries make later extraction much easier. The work is still real, especially where data has to be separated.",
        },
        {
          q: "Do microservices make teams faster?",
          a: "They can, when several teams are blocked by a shared release. They can also slow a small team down, because more time goes into infrastructure and coordination between services.",
        },
        {
          q: "What skills does a team need to run microservices?",
          a: "Beyond application development: automated deployment, container or service orchestration, monitoring, distributed tracing and API design. Someone has to own that platform.",
        },
        {
          q: "Can SyntaxHires engineers work on either architecture?",
          a: "Yes. You interview each developer before any contract, so you can test for the experience your architecture needs. They work in your repository and tools.",
        },
      ],
    },
  ],
};

export default page;
