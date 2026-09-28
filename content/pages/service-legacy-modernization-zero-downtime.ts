import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/service/legacy-modernization-zero-downtime/",
  meta: {
    title: "Zero-Downtime Legacy Modernization",
    description:
      "Modernise a system that cannot be switched off. Old and new run side by side, traffic moves in stages, and every step has a tested way back.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Zero-Downtime Modernization",
      title: "Modernise A System That [Cannot Stop]",
      text: "Some systems have no maintenance window. We plan modernisation so that the old system stays in service until the new one has carried real traffic and matched its results.",
      ctas: [{ label: "Request An Assessment", href: "#assessment" }],
      aside: {
        title: "What Zero Downtime Means",
        items: [
          "The old system stays in service until the new one is proven",
          "Traffic moves in stages, never all at once",
          "Every cutover step has a tested way back",
          "Changes are checked against real traffic before users depend on them",
        ],
      },
      note: "Zero downtime is a design goal and a method. We describe how we work towards it, not a guarantee.",
    },
    {
      type: "cards",
      title: "Why Modernisation Efforts [Fail]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "zap",
          title: "The single big cutover",
          text: "Everything moves on one night. If anything is wrong, the only options are to push on or to reverse the whole change under pressure.",
        },
        {
          icon: "file",
          title: "Undocumented behaviour",
          text: "The old system does things nobody wrote down. The new one leaves them out, and the gap appears only in production.",
        },
        {
          icon: "database",
          title: "Data treated as an afterthought",
          text: "The code is ready but the data move is planned late. Long locks, lost writes and mismatched formats follow.",
        },
        {
          icon: "refresh",
          title: "No tested rollback",
          text: "A way back exists on paper but was never rehearsed. When it is needed, it does not work as expected.",
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "Four [Principles]",
      align: "center",
      columns: 4,
      numbered: true,
      items: [
        {
          icon: "layers",
          title: "Parallel Execution",
          text: "Old and new systems run at the same time on the same inputs. The old system remains the source of truth until results match.",
        },
        {
          icon: "chart",
          title: "Traffic Validation",
          text: "The new system is judged on real traffic. We start with copies of requests, then a small share of live requests, then more.",
        },
        {
          icon: "refresh",
          title: "Reversibility",
          text: "Each step is designed so that it can be undone. Rollback is rehearsed before the step is taken.",
        },
        {
          icon: "target",
          title: "Blast-Radius Control",
          text: "Each change touches one bounded part and a limited group of users. A fault stays small and is easier to trace.",
        },
      ],
    },
    {
      type: "steps",
      layout: "row",
      title: "The Method In [Five Steps]",
      align: "center",
      items: [
        {
          tag: "Step 1",
          title: "Map",
          text: "We record traffic, dependencies, scheduled jobs and integrations. The result is an inventory of everything that must keep working.",
        },
        {
          tag: "Step 2",
          title: "Route",
          text: "We place a routing layer in front of the old system. At first it passes everything through unchanged.",
        },
        {
          tag: "Step 3",
          title: "Shadow",
          text: "The new component receives copies of real requests. Its responses are compared with the old ones and are not shown to users.",
        },
        {
          tag: "Step 4",
          title: "Shift",
          text: "A small share of live traffic moves to the new component. The share grows only while error rates and results stay within agreed limits.",
        },
        {
          tag: "Step 5",
          title: "Retire",
          text: "When the new component carries all traffic and has been stable, the old one is switched off and then removed.",
        },
      ],
      footnote: "The limits that allow or stop each traffic increase are agreed with you before the first shift.",
    },
    {
      type: "table",
      tone: "dark",
      title: "Where Downtime [Hides]",
      align: "center",
      intro: "Outages during modernisation rarely come from the new code itself. They come from the parts around it.",
      columns: ["Where downtime hides", "Failure pattern", "Prevention"],
      rows: [
        [
          "Data migration",
          "A schema change locks a busy table, or writes made during the copy are lost",
          "Additive schema changes, backfill in small batches, and row counts and checksums compared before the switch",
        ],
        [
          "DNS and certificates",
          "Cached DNS records keep sending users to the old address, or the new endpoint has no valid certificate",
          "Shorten record lifetimes ahead of the move, test certificates on the new endpoint first, and keep the old endpoint serving until traffic drains",
        ],
        [
          "Background jobs",
          "A scheduled job runs in both systems, or in neither",
          "One named owner per job at any time, jobs written to be safe to run twice, and an explicit handover for each",
        ],
        [
          "Third-party integrations",
          "A partner allows only the old IP addresses, or webhooks still point at the old URL",
          "An inventory of every integration, partner changes arranged ahead of the move, and old callback URLs kept forwarding",
        ],
        [
          "Session state",
          "Sessions held in memory on old servers are lost, and users are signed out mid-task",
          "Sessions moved to a shared store first, in a format both versions can read",
        ],
      ],
    },
    {
      // PLACEHOLDER: anonymised case outline. Replace every "—" with verified figures and confirm the client has approved the wording.
      type: "text",
      draft: true, // hidden until real content replaces the template
      eyebrow: "Case outline",
      title: "A Platform With [No Maintenance Window]",
      align: "left",
      paragraphs: [
        "Client: name and industry withheld until approved for publication.",
        "Starting point: a system in continuous use, on a stack nearing the end of vendor support, with no agreed window for planned outages.",
        "Approach: the five-step method above, applied to one component at a time, with the old system kept as the source of truth during each parallel run.",
        "Result: to be completed with measured figures.",
      ],
      // PLACEHOLDER: each line below needs a verified figure.
      list: [
        "Components migrated: —",
        "Unplanned downtime during migration: —",
        "Rollbacks used: —",
        "Programme duration: —",
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "How AI Supports [Safety]",
      align: "center",
      intro: "AI tools assist engineers. They do not approve cutovers or change production on their own.",
      columns: 3,
      items: [
        {
          icon: "search",
          title: "Finding hidden dependencies",
          text: "AI tools help engineers search old code for calls, jobs and integrations that are easy to miss. Each finding is confirmed by a person.",
        },
        {
          icon: "check",
          title: "Drafting comparison tests",
          text: "AI tools propose test cases for checking old results against new ones. Engineers review and correct them before use.",
        },
        {
          icon: "eye",
          title: "Sorting differences",
          text: "During parallel runs, AI tools help group similar mismatches so engineers can review them faster. People decide what each one means.",
        },
      ],
      footnote: "Your code and data are used only with AI tools you have approved.",
    },
    {
      type: "cards",
      title: "Where Downtime Is [Not An Option]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "credit",
          title: "Payments",
          text: "A failed or duplicated transaction affects real money. Parallel runs compare results before the new path handles a payment.",
        },
        {
          icon: "heart",
          title: "Healthcare",
          text: "Clinical and scheduling systems are used around the clock. Changes must not interrupt access to patient records.",
        },
        {
          icon: "truck",
          title: "Logistics",
          text: "Warehouses and fleets keep moving. A stopped system means goods that cannot be scanned, routed or dispatched.",
        },
        {
          icon: "cloud",
          title: "SaaS with SLAs",
          text: "Availability is written into customer contracts. Planned outages count against the same commitment.",
        },
      ],
      footnote: "See how we work across sectors on the industries page.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "Why CTOs Trust [This Approach]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "eye",
          title: "Decisions rest on evidence",
          text: "Traffic moves forward because measured results match, not because a date has arrived.",
        },
        {
          icon: "refresh",
          title: "Rollback is rehearsed",
          text: "The way back is tested before each step, so using it is a routine action.",
        },
        {
          icon: "message",
          title: "Progress is visible",
          text: "Work is tracked in your tools and committed to your repository. You can see the state of each component at any time.",
        },
        {
          icon: "handshake",
          title: "Terms stay flexible",
          text: "Engagements run month to month with no exit fee. You own all code and IP.",
        },
      ],
    },
    {
      type: "split",
      title: "Why Most Firms [Struggle]",
      align: "center",
      panels: [
        {
          title: "Why most firms struggle",
          mood: "bad",
          items: [
            { title: "Cutover by calendar", text: "The go-live date is fixed early and the plan is bent to meet it." },
            { title: "Testing on synthetic data", text: "The new system passes tests that do not look like production traffic." },
            { title: "Rollback as a document", text: "The way back is written but never run." },
            { title: "Data moved last", text: "Migration is planned after the code, when options are limited." },
          ],
        },
        {
          title: "What we do differently",
          mood: "good",
          items: [
            { title: "Cutover by evidence", text: "Traffic increases only when agreed measures are met." },
            { title: "Testing on real traffic", text: "Shadow requests show how the new system behaves under actual use." },
            { title: "Rollback as a drill", text: "Each rollback is rehearsed before the step it protects." },
            { title: "Data planned first", text: "The data move shapes the plan from the start." },
          ],
        },
      ],
    },
    {
      // PLACEHOLDER: operational track record. Replace each "—" with a verified SyntaxHires figure, or remove the block.
      type: "stats",
      tone: "dark",
      title: "Operational Track Record",
      align: "center",
      items: [
        { value: "—", label: "Migrations completed" },
        { value: "—", label: "Unplanned downtime during cutovers" },
        { value: "—", label: "Rollbacks rehearsed" },
        { value: "—", label: "Components retired" },
      ],
    },
    {
      type: "form",
      id: "assessment",
      title: "The [Zero-Downtime Assessment]",
      align: "left",
      intro: "A review of one system, focused on what could interrupt service during a migration.",
      lists: [
        {
          title: "What we analyse",
          items: [
            "Traffic patterns and peak periods",
            "Data stores and how they are written to",
            "Scheduled jobs and integrations",
            "Current deployment and rollback process",
          ],
        },
        {
          title: "What you receive",
          items: [
            "A list of downtime risks in order of importance",
            "A proposed migration sequence",
            "The measures we would use to allow each traffic shift",
          ],
        },
        {
          title: "What happens next",
          items: [
            "An NDA is signed before any code access",
            "A call with a senior engineer to agree scope",
            "We present the findings and you decide whether to proceed",
          ],
        },
      ],
      form: {
        title: "Request An Assessment",
        intro: "Tell us what the system does and why it cannot go offline.",
        submit: "Request Assessment",
        kind: "zero-downtime-assessment",
        fields: ["name", "email", "company", "message"],
        note: "No code is shared before an NDA is signed.",
      },
    },
    {
      type: "cards",
      tone: "muted",
      title: "Related [Services]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "server",
          title: "Legacy System Modernization",
          text: "Platform-level work: runtimes, databases and core systems, moved in stages.",
          href: "/service/legacy-system-modernization/",
          linkLabel: "View service",
        },
        {
          icon: "code",
          title: "Legacy Application Modernization",
          text: "Refactor, replatform or rebuild individual applications with safety built in.",
          href: "/service/legacy-application-modernization/",
          linkLabel: "View service",
        },
        {
          icon: "users",
          title: "Dedicated Developers",
          text: "A team that works only on your product and stays with it after the migration.",
          href: "/service/dedicated-developers/",
          linkLabel: "View service",
        },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Can you guarantee zero downtime?",
          a: "No responsible engineer can guarantee that. What we offer is a method designed to avoid downtime: parallel runs, staged traffic shifts and a rehearsed rollback at every step.",
        },
        {
          q: "Does running two systems in parallel cost more?",
          a: "Yes, for the period of overlap. You pay for extra infrastructure while both systems run. We plan the overlap per component so that it is as short as the evidence allows.",
        },
        {
          q: "How is data kept consistent while both systems run?",
          a: "The old system stays the source of truth during the parallel run. Data is copied to the new store in batches and kept in step, and counts and checksums are compared before any switch.",
        },
        {
          q: "What happens if the new component misbehaves after a traffic shift?",
          a: "Traffic is routed back to the old component, which is still running. The cause is investigated before another shift is attempted.",
        },
        {
          q: "Do we need a routing layer already in place?",
          a: "No. Adding one is part of the method. Many systems already have a load balancer or gateway that can be used for this.",
        },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Plan A Migration Without An Outage Window",
      text: "Request the assessment. You will get a written list of downtime risks and a proposed sequence.",
      ctas: [{ label: "Request An Assessment", href: "#assessment" }],
    },
  ],
};

export default page;
