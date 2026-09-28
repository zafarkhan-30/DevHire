import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/service/legacy-application-modernization/",
  meta: {
    title: "Legacy Application Modernization",
    description:
      "Improve the applications your users depend on without stopping them. Refactor, replatform or rebuild, with feature flags, parallel runs and rollback at every stage.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Legacy Application Modernization",
      title: "Modernise The Application While People [Keep Using It]",
      text: "We improve the code, structure and delivery process of individual applications in small steps. Each change is tested against real behaviour and can be reversed.",
      ctas: [
        { label: "Talk To An Architect", href: "#architect" },
        { label: "See The Framework", href: "#method", variant: "outline-light" },
      ],
    },
    {
      type: "text",
      title: "Applications, Not [Platforms]",
      align: "left",
      paragraphs: [
        "This service is about individual applications: a web app, a mobile app, an internal tool or an API. The focus is on code, structure, tests and the way releases are made.",
        "It is a narrower scope than system modernisation. We do not start by replacing the mainframe or the data centre. We start with the application your users open every day and make it safer to change.",
        "If the platform under the application also needs to move, that work is planned separately so the two do not block each other.",
      ],
      aside: {
        title: "Typical starting points",
        items: [
          "Releases are rare because each one is risky",
          "A framework version is no longer supported",
          "Few or no automated tests",
          "New features take longer every quarter",
        ],
      },
      ctas: [{ label: "Need Platform Work Instead?", href: "/service/legacy-system-modernization/", variant: "outline" }],
    },
    {
      type: "split",
      tone: "muted",
      title: "What This Service [Covers]",
      align: "center",
      panels: [
        {
          title: "Covered",
          mood: "good",
          items: [
            "Web, mobile and desktop application code",
            "Framework and language version upgrades",
            "Splitting a large codebase into clearer modules",
            "Adding automated tests and a deployment pipeline",
            "Moving an application to current hosting",
            "API layers in front of older logic",
          ],
        },
        {
          title: "Not covered",
          mood: "neutral",
          items: [
            "Mainframe and core platform replacement",
            "Data centre exits and network redesign",
            "Replacing packaged software such as an ERP",
            "Organisation-wide infrastructure programmes",
          ],
        },
      ],
      footnote: "Platform-level work is handled under legacy system modernisation.",
    },
    {
      type: "cards",
      title: "Four Ways Legacy Applications [Fail Quietly]",
      align: "center",
      intro: "Most legacy applications do not crash. They become slower to change, and the cost shows up elsewhere.",
      columns: 4,
      items: [
        {
          icon: "clock",
          title: "Changes slow down",
          text: "Simple requests take longer because every change needs manual checks across the application.",
        },
        {
          icon: "users",
          title: "Knowledge narrows",
          text: "Only one or two people dare to touch certain modules. When they are away, work on those modules stops.",
        },
        {
          icon: "alert",
          title: "Dependencies age",
          text: "Libraries fall out of support. Security fixes stop arriving, and upgrades get harder the longer they wait.",
        },
        {
          icon: "wrench",
          title: "Workarounds pile up",
          text: "Teams build spreadsheets and manual steps around the application. The real process drifts away from the software.",
        },
      ],
    },
    {
      type: "table",
      tone: "dark",
      title: "Refactor vs Replatform vs [Rebuild]",
      align: "center",
      intro: "Three options with different costs and risks. Many applications need a mix.",
      columns: ["", "Refactor", "Replatform", "Rebuild"],
      rows: [
        [
          "What changes",
          "Internal code structure. Behaviour stays the same",
          "Hosting, runtime or framework version. Most code stays",
          "The application is written again on a new stack",
        ],
        [
          "Risk",
          "Lower, if tests are in place first",
          "Moderate, mostly around environment differences",
          "Higher, as behaviour must be reproduced",
        ],
        [
          "Effort",
          "Incremental, spread over normal sprints",
          "A defined project per application",
          "The largest of the three",
        ],
        [
          "Best when",
          "The design is sound but the code is hard to change",
          "The code works but the runtime is out of support",
          "The design no longer fits how the business works",
        ],
      ],
      footnote: "We recommend an option only after reviewing the code and how the application is used.",
    },
    {
      type: "steps",
      id: "method",
      layout: "row",
      title: "The [Method]",
      align: "center",
      intro: "Five steps, repeated for each part of the application.",
      items: [
        {
          tag: "Step 1",
          title: "Observe",
          text: "We measure how the application is used and where it fails. We write tests that record current behaviour.",
        },
        {
          tag: "Step 2",
          title: "Isolate",
          text: "We draw a boundary around one module so that it can change without side effects elsewhere.",
        },
        {
          tag: "Step 3",
          title: "Improve",
          text: "We refactor, upgrade or rewrite that module behind a feature flag, in small reviewed commits.",
        },
        {
          tag: "Step 4",
          title: "Validate",
          text: "We compare old and new behaviour with automated tests and, where possible, a parallel run on real inputs.",
        },
        {
          tag: "Step 5",
          title: "Transition",
          text: "We move users to the new module in stages. The old path stays available until the new one is stable.",
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "How Safety Is [Built In]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "settings",
          title: "Feature flags",
          text: "New code ships switched off. It is turned on for a small group first, and can be turned off without a new release.",
        },
        {
          icon: "layers",
          title: "Parallel runs",
          text: "Old and new code process the same inputs. Differences are logged and reviewed before users see the new result.",
        },
        {
          icon: "refresh",
          title: "Rollback",
          text: "Each release has a tested way back. Database changes are written so that the previous version still works.",
        },
        {
          icon: "check",
          title: "Automated tests",
          text: "Tests that capture current behaviour are written before the code changes. They run on every commit.",
        },
      ],
    },
    {
      type: "cards",
      title: "Mobile App [Modernisation Safety]",
      align: "center",
      intro: "Mobile apps add a constraint. Users update when they choose, so old versions stay in use.",
      columns: 3,
      items: [
        {
          icon: "smartphone",
          title: "Staged rollouts",
          text: "New versions go to a small share of users first through the app store rollout controls. We watch crash reports before widening the release.",
        },
        {
          icon: "network",
          title: "Backward-compatible APIs",
          text: "The backend keeps serving older app versions while they are still in use. API changes are versioned and additive.",
        },
        {
          icon: "settings",
          title: "Remote configuration",
          text: "New features sit behind server-controlled flags, so they can be switched off without waiting for a store review.",
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "How We Use [AI Assistance]",
      align: "center",
      intro: "AI tools help engineers read and test old code faster. They do not make decisions or ship changes on their own.",
      columns: 3,
      items: [
        {
          icon: "search",
          title: "Reading unfamiliar code",
          text: "Engineers use AI tools to summarise old modules and trace dependencies. An engineer checks each summary against the code itself.",
        },
        {
          icon: "check",
          title: "Drafting tests",
          text: "AI tools propose test cases that describe current behaviour. Engineers review them, correct them and decide what is kept.",
        },
        {
          icon: "shield",
          title: "Where it is not used",
          text: "AI output is never merged without human review. Your code is not sent to any AI tool you have not approved, and architecture decisions are made by people.",
        },
      ],
    },
    {
      type: "steps",
      layout: "list",
      title: "A Transparent [Engagement Structure]",
      align: "left",
      intro: "Four phases. You can stop after any of them and keep everything produced so far.",
      items: [
        {
          tag: "Phase 1",
          title: "Assessment",
          text: "An NDA is signed, then we review the code, the release process and usage data. You receive written findings and a recommended option.",
        },
        {
          tag: "Phase 2",
          title: "Foundation",
          text: "We add tests, monitoring and a deployment pipeline. Nothing visible to users changes in this phase.",
        },
        {
          tag: "Phase 3",
          title: "Incremental modernisation",
          text: "Modules are improved one at a time using the five-step method. Work is tracked in your tools and committed to your repository.",
        },
        {
          tag: "Phase 4",
          title: "Handover",
          text: "We document the new structure and work with your engineers until they are comfortable running it. You own all code and IP throughout.",
        },
      ],
      footnote: "Terms run month to month, with no exit fee.",
    },
    {
      // PLACEHOLDER: anonymised outcomes. Replace every "—" with verified figures from approved engagements, or remove this block.
      type: "text",
      draft: true, // hidden until real content replaces the template
      tone: "dark",
      eyebrow: "Outcomes",
      title: "Measured [Outcomes]",
      align: "left",
      paragraphs: [
        "Outcomes below are anonymised and will be completed with measured figures once clients approve publication.",
        "Each figure should state what was measured, over what period, and against what starting point.",
      ],
      // PLACEHOLDER: each line below needs a verified figure.
      list: [
        "Change in release frequency: —",
        "Change in time from commit to production: —",
        "Change in automated test coverage: —",
        "Change in production incidents: —",
      ],
    },
    {
      type: "form",
      id: "architect",
      tone: "muted",
      title: "Talk To An [Architect]",
      align: "left",
      intro: "A conversation with a senior engineer about one application. No sales script.",
      lists: [
        {
          title: "What we will ask",
          items: ["What the application does", "The stack and its versions", "How releases are made today", "What worries you most"],
        },
        {
          title: "What you receive",
          items: ["An initial view on refactor, replatform or rebuild", "The main risks to check first", "A suggested next step"],
        },
      ],
      form: {
        title: "Talk To An Architect",
        submit: "Request A Call",
        kind: "architect-call",
        fields: ["name", "email", "company", "message"],
        note: "No code is shared before an NDA is signed.",
      },
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Should we refactor or rebuild?",
          a: "It depends on whether the design still fits the business. If it does, refactoring is usually lower risk. If it does not, a staged rebuild may be the better option. We recommend one only after reviewing the code.",
        },
        {
          q: "Will users notice the work?",
          a: "The method is designed so that they should not. New code ships behind feature flags and is released to small groups first, with the old path kept available.",
        },
        {
          q: "Our application has no tests. Can you still work on it?",
          a: "Yes. Writing tests that capture current behaviour is the first piece of work. Code is changed only after those tests are in place.",
        },
        {
          q: "Do you use AI tools on our code?",
          a: "Only tools you have approved. They help engineers read code and draft tests. Every change is reviewed by a person before it is merged.",
        },
        {
          q: "Who owns the modernised code?",
          a: "You do. The work is committed to your repository, and all code and IP are assigned to you by contract.",
        },
      ],
    },
  ],
};

export default page;
