import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values DevHire must confirm before launch.
const page: PageDef = {
  path: "/developer-retention/",
  meta: {
    title: "Developer Retention",
    description:
      "Why developer continuity matters to delivery, what churn costs a client and how DevHire keeps the same developer on your codebase.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      eyebrow: "Developer Retention",
      title: "The Developer Who Knows Your Codebase Should [Stay On It]",
      text: "Every time a developer leaves, your team pays to teach the next one. We build engagements so the same person stays and keeps building context.",
      ctas: [
        { label: "Start A Pilot Conversation", href: "/contact-us/" },
        { label: "See Engagement Models", href: "/service/dedicated-developers/", variant: "outline-light" },
      ],
    },
    {
      type: "cards",
      title: "What Developer Churn [Costs You]",
      intro: "The invoice does not show it, but your team feels it.",
      align: "center",
      columns: 4,
      items: [
        { icon: "brain", title: "Lost Context", text: "The reasons behind past decisions leave with the person who made them." },
        { icon: "refresh", title: "Re-Onboarding", text: "Your senior engineers stop their own work to explain the system again." },
        { icon: "calendar", title: "Slipped Releases", text: "A new developer needs time before they can work at full pace. The roadmap waits." },
        { icon: "eye", title: "Review Burden", text: "Code from someone new to the codebase needs closer review for longer." },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "How We Approach [Retention]",
      intro: "Retention is the result of how an engagement is set up from the start.",
      align: "center",
      columns: 3,
      items: [
        { icon: "users", title: "One Developer, One Client", text: "Your developer is not shared across accounts or moved when another client asks." },
        { icon: "target", title: "Matched On Fit", text: "We match on stack, system type and working style, because a good fit is the one that lasts." },
        { icon: "handshake", title: "You Choose The Person", text: "You interview the developer before any contract. People stay longer where they were chosen." },
        { icon: "git", title: "Part Of Your Team", text: "Developers work in your repository and tools, and join your rituals. They are colleagues, not a ticket queue." },
        { icon: "file", title: "Documented Handover", text: "If a change cannot be avoided, the context is written down and passed on." },
      ],
    },
    {
      // PLACEHOLDER: measured DevHire retention data.
      type: "stats",
      tone: "dark",
      title: "Retention Data",
      align: "center",
      items: [
        { value: "—", label: "Developer retention" },
        { value: "—", label: "Average engagement length" },
        { value: "—", label: "Client retention" },
        { value: "—", label: "Engagements with no developer change" },
      ],
    },
    {
      type: "text",
      title: "Retention Is A [Delivery Metric]",
      align: "left",
      paragraphs: [
        "Retention is often treated as an HR number. We treat it as a delivery number.",
        "A developer who has spent a long time on one codebase knows where the risks are. They estimate better, review faster and break less. That knowledge cannot be hired. It can only be kept.",
        "So when we look at the health of an engagement, we ask whether the same people are still on it.",
      ],
      aside: {
        title: "What continuity gives you",
        items: ["Better estimates", "Faster code review", "Fewer repeated mistakes", "Less time spent onboarding"],
      },
    },
    {
      type: "table",
      tone: "muted",
      title: "Bench Model vs [Continuity Model]",
      intro: "Two ways a staffing vendor can run its people.",
      align: "center",
      columns: ["", "Bench model", "Continuity model"],
      highlight: 2,
      rows: [
        ["How developers are assigned", "From whoever is free", "Matched to your stack and system"],
        ["Number of clients per developer", "Often more than one", "One"],
        ["When another account needs people", "Developers may be moved", "Your developer stays"],
        ["Where knowledge lives", "With the vendor", "In your team and your repository"],
        ["If a developer changes", "A new profile is sent", "Documented handover, then replacement"],
        ["What the vendor measures", "Seats filled", "Engagements that continue"],
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Build A Team That Stays",
      text: "Tell us about your product and the role. We will suggest a way to start small.",
      ctas: [
        { label: "Start A Pilot Conversation", href: "/contact-us/" },
        { label: "How We Vet", href: "/how-we-vet/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
  ],
};

export default page;
