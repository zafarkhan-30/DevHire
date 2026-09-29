import type { PageDef } from "@/content/types";
import { projectCard, projects } from "@/content/work";

// Projects come from content/work.
const page: PageDef = {
  path: "/case-study/our-work/",
  meta: {
    title: "Our Work",
    description:
      "Work delivered by SyntaxHires engineers, by industry. Each case study sets out where the client started, what the team changed and what the result was.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "center",
      eyebrow: "Our Work",
      title: "Work We Have [Delivered]",
      text: "Each case study sets out where the client started, what the team changed and what happened next. We publish only what the client has approved.",
      ctas: [
        { label: "See Featured Work", href: "#featured" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline" },
      ],
    },
    {
      type: "cards",
      id: "featured",
      tone: "muted",
      title: "Featured [Work]",
      intro: "What we built, the technology behind it and what the finished product looks like.",
      align: "center",
      columns: 2,
      items: projects.map(projectCard),
      footnote: "More projects are added as clients approve them for publication.",
    },
    {
      // Logos come from trustedBy.logos in content/home.ts. Do not add badges unless SyntaxHires holds them.
      type: "logos",
      title: "Teams We Have [Worked With]",
      align: "center",
      caption: "References on request.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "Industries [We Serve]",
      align: "center",
      intro: "The engineering is similar across industries. The constraints are not. These are the ones we plan for.",
      columns: 4,
      items: [
        { icon: "credit", title: "FinTech", text: "Payments, lending and accounting products where accuracy, audit trails and access control come first." },
        { icon: "heart", title: "Healthcare and Life Sciences", text: "Clinical and patient-facing software where privacy and careful change control shape every release." },
        { icon: "cart", title: "E-Commerce", text: "Storefronts, checkout and order systems that must stay fast and available during peak demand." },
        { icon: "home", title: "Real Estate", text: "Listing platforms, property management tools and integrations with third-party data feeds." },
        { icon: "graduation", title: "Education and eLearning", text: "Learning platforms, assessment tools and content delivery for students and teachers." },
        { icon: "plane", title: "Travel and Hospitality", text: "Booking flows, availability and pricing systems that depend on many external suppliers." },
        { icon: "truck", title: "Transport and Logistics", text: "Tracking, routing and warehouse systems that run around the clock and connect to physical operations." },
      ],
      footnote: "See the industries page for more detail on each.",
    },
    {
      type: "testimonials",
      title: "In Their [Own Words]",
      align: "center",
    },
    {
      type: "cta",
      variant: "dark",
      title: "Have A Project Like These?",
      text: "Tell us the stack and the problem. You interview the developer before any contract.",
      ctas: [
        { label: "Talk To An Engineer", href: "/contact-us/" },
        { label: "Browse Industries", href: "/industries/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
  ],
};

export default page;
