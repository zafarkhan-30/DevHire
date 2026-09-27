import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/comparison-guides/",
  meta: {
    title: "Comparison Guides",
    description:
      "Side-by-side guides for hiring and architecture decisions: hiring models, staffing approaches, offshore cost, and legacy modernisation strategies.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "center",
      eyebrow: "Comparison Guides",
      title: "Compare Your Options Before You [Hire]",
      text: "Each guide sets the options side by side and states the trade-offs on both sides. Where another option suits you better than ours, the guide says so.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "All [Guides]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "users",
          tag: "Hiring Guide",
          title: "Dedicated Developers vs Freelancers",
          text: "Why a lower hourly rate does not always mean a lower cost, and where freelancers are the right choice.",
          href: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/",
          linkLabel: "Read The Guide",
        },
        {
          icon: "handshake",
          tag: "Hiring Guide",
          title: "Dedicated Team vs Staff Augmentation",
          text: "Two ways to add engineers. One adds a team, the other adds people to your team. How to tell which you need.",
          href: "/hire/dedicated-developers/dedicated-team-vs-staff-augmentation/",
          linkLabel: "Read The Guide",
        },
        {
          icon: "credit",
          tag: "Hiring Guide",
          title: "The True Cost Of Offshore Developers",
          text: "What you pay beyond the rate: management time, tooling, turnover, overlap hours and replacement.",
          href: "/hire/dedicated-developers/offshore-developers-cost/",
          linkLabel: "Read The Guide",
        },
        {
          icon: "globe",
          tag: "Comparison",
          title: "Marketplaces vs Freelance Platforms vs Dedicated Teams",
          text: "Four hiring models compared on cost shape, risk, speed and how easy each is to reverse.",
          href: "/compare/marketplaces-vs-freelance-platforms-vs-dedicated-teams/",
          linkLabel: "Compare The Models",
        },
        {
          icon: "building",
          tag: "Comparison",
          title: "In-House vs Outsourced Legacy Modernisation",
          text: "Your team knows the system. Outside engineers add capacity. How to decide the split.",
          href: "/compare/in-house-vs-outsourced-legacy-modernization/",
          linkLabel: "Compare The Approaches",
        },
        {
          icon: "network",
          tag: "Comparison",
          title: "Microservices vs Modular Monolith",
          text: "Independent deployment against operational simplicity. Which architecture fits your team and load.",
          href: "/compare/microservices-vs-modular-monolith/",
          linkLabel: "Compare The Architectures",
        },
        {
          icon: "cloud",
          tag: "Comparison",
          title: "Rehost vs Refactor vs Rebuild",
          text: "Three migration strategies, what each one changes and how to choose one per application.",
          href: "/compare/rehost-vs-refactor-vs-rebuild/",
          linkLabel: "Compare The Strategies",
        },
        {
          icon: "refresh",
          tag: "Comparison",
          title: "Legacy Modernisation vs Rewrite",
          text: "Replace the system in steps or start again. Where each approach carries its risk.",
          href: "/compare/legacy-modernization-vs-rewrite/",
          linkLabel: "Compare The Approaches",
        },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Still Not Sure Which Option Fits?",
      text: "Describe the work and your constraints. We will talk through the options with you, including the ones we do not sell.",
      ctas: [
        { label: "Talk To An Engineer", href: "/contact-us/" },
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
