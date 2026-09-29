import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntecHire must confirm before launch.
const page: PageDef = {
  path: "/about/",
  meta: {
    title: "About Us",
    description:
      "SyntecHire places remote developers who are ready to contribute inside your team. One developer per client, month-to-month terms and code you own.",
  },
  blocks: [
    {
      type: "hero",
      tone: "navy",
      size: "lg",
      align: "center",
      eyebrow: "About SyntecHire",
      title: "Remote Developers Chosen For [Readiness], Not Only For Skills",
      text: "We place developers who can join a working team, read an unfamiliar codebase and contribute without being carried. You interview them first. You decide.",
      ctas: [
        { label: "Hire A Developer", href: "/technologies/" },
        { label: "Post A Requirement", href: "/contact-us/", variant: "outline-light" },
      ],
    },
    {
      type: "cards",
      title: "Who We Are [Best For]",
      intro: "SyntecHire suits teams that already know what they want to build and need capable people to build it.",
      align: "center",
      columns: 4,
      items: [
        { icon: "code", title: "CTOs And Engineering Heads", text: "You have a process that works. You need more engineers inside it, not a second process beside it." },
        { icon: "rocket", title: "Founders", text: "You need a product built by people who will still be on the codebase after launch." },
        { icon: "target", title: "Delivery And Product Leads", text: "You need steady capacity that you can plan a roadmap around." },
        { icon: "wrench", title: "Teams With Legacy Systems", text: "You need engineers who can work on an old platform while it keeps running." },
      ],
    },
    {
      // PLACEHOLDER: founders should replace these four steps with the real SyntecHire story.
      type: "steps",
      draft: true, // hidden until real content replaces the template
      tone: "muted",
      layout: "list",
      title: "Our [Story]",
      intro: "Why a company like SyntecHire needs to exist, told through what we see across the staffing industry.",
      align: "left",
      items: [
        {
          title: "The Pattern We Saw",
          text: "Companies hire remote developers based on a CV and an interview. The developer looks strong on paper. Then the work starts, and progress is slower than anyone expected.",
        },
        {
          title: "The Problem",
          text: "Most screening checks what a developer knows. It rarely checks how they work: how they ask questions, handle unclear requirements or respond to review. Those habits decide whether the work ships.",
        },
        {
          title: "The Paradox",
          text: "A vendor that places people quickly is rewarded for speed, not for fit. The client carries the cost of a poor match, and the vendor still gets paid. The incentive points the wrong way.",
        },
        {
          title: "Our Answer",
          text: "We screen for readiness to contribute. The client interviews every developer before any contract. Terms run month to month with no exit fee, so we keep the work only while we are useful.",
        },
      ],
    },
    {
      // PLACEHOLDER: real names, roles, bios and photos of the SyntecHire founders.
      type: "people",
      draft: true, // hidden until founder details are added
      title: "[Leadership]",
      intro: "The people accountable for every engagement.",
      align: "center",
      items: [
        { name: "Founder Name", role: "Role", bio: "Short biography goes here. Two or three sentences on background and what this person is responsible for at SyntecHire." },
        { name: "Founder Name", role: "Role", bio: "Short biography goes here. Two or three sentences on background and what this person is responsible for at SyntecHire." },
      ],
    },
    {
      type: "split",
      tone: "muted",
      title: "Skills On Paper vs [Readiness To Contribute]",
      intro: "Both matter. Only one of them is usually tested.",
      align: "center",
      panels: [
        {
          title: "Most vendors",
          mood: "bad",
          items: [
            "Match on keywords in a CV",
            "Test knowledge with quiz-style questions",
            "Send profiles from whoever is free",
            "Treat the placement as the finish line",
            "Leave onboarding to the client",
          ],
        },
        {
          title: "SyntecHire",
          mood: "good",
          items: [
            "Match on the kind of system you run",
            "Review real code and how decisions were made",
            "Check written and spoken communication",
            "Treat the first merged change as the starting line",
            "Replace the developer if the fit is wrong",
          ],
        },
      ],
    },
    {
      type: "cards",
      tone: "dark",
      title: "Industries We [Serve]",
      intro: "The sectors our engagements are built around.",
      align: "center",
      columns: 3,
      items: [
        { icon: "cloud", title: "SaaS And Cloud", text: "Multi-tenant products, billing, integrations and the platform work behind them." },
        { icon: "credit", title: "Fintech And Payments", text: "Payment flows, ledgers and reporting, where accuracy and audit trails matter." },
        { icon: "heart", title: "Healthcare Technology", text: "Patient-facing apps and clinical systems that handle sensitive records with care." },
        { icon: "cart", title: "E-commerce", text: "Storefronts, checkout, catalogue and order systems that must hold up under load." },
        { icon: "building", title: "Enterprise", text: "Internal platforms, integrations and older systems that need careful modernisation." },
      ],
    },
    {
      // PLACEHOLDER: verified SyntecHire track record numbers. Keep in step with site.stats.
      type: "stats",
      tone: "dark",
      title: "Track Record",
      align: "center",
      items: [
        { value: "—", label: "Developers placed" },
        { value: "—", label: "Clients served" },
        { value: "—", label: "Countries served" },
        { value: "—", label: "Client retention" },
      ],
    },
    {
      type: "cards",
      title: "Security As An [Engineering Practice]",
      intro: "We treat security as part of how work is done each day, not as a document to sign once.",
      align: "center",
      columns: 4,
      items: [
        { icon: "file", title: "NDA Before Code Access", text: "Every developer signs a confidentiality agreement before seeing your code." },
        { icon: "lock", title: "Least-Privilege Access", text: "Developers get access to what the task needs. You grant it and you can remove it." },
        { icon: "git", title: "Your Repository And Tools", text: "Work happens in your systems, under your policies, where you can see it." },
        { icon: "shield", title: "IP Assigned To You", text: "All code and intellectual property belongs to you by contract." },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "Why [SyntecHire]",
      align: "center",
      columns: 3,
      numbered: true,
      items: [
        { icon: "compass", title: "Founder-Led", text: "The founders stay involved in engagements. You can reach the people who make the decisions." },
        { icon: "layers", title: "Governance", text: "Who is responsible for what is written down before work starts." },
        { icon: "users", title: "Stability", text: "One developer works on one client. The same person builds context on your codebase over time." },
        { icon: "eye", title: "Transparent Pricing", text: "You see the monthly rate in writing before you commit. Month-to-month terms. No exit fee." },
        { icon: "handshake", title: "Clear Responsibility", text: "If the fit is wrong, tell us. Finding a replacement is our job, not yours." },
      ],
    },
    {
      // Logos come from trustedBy.logos in content/home.ts (real clients, with permission).
      type: "logos",
      title: "Teams That Build With [SyntecHire]",
      caption: "References on request.",
    },
    {
      type: "cta",
      variant: "navy",
      title: "Tell Us What You Need To Build",
      text: "Share the stack and the role. We will reply within two working days.",
      ctas: [
        { label: "Post A Requirement", href: "/contact-us/" },
        { label: "See How We Vet", href: "/how-we-vet/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
