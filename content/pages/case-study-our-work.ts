import type { PageDef } from "@/content/types";

// PLACEHOLDER: SyntaxHires has not supplied case studies yet. Every card, logo and quote on this page is a template.
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
        { label: "Case Studies", href: "#featured" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline" },
      ],
    },
    {
      type: "text",
      id: "featured",
      tone: "muted",
      title: "Case Studies [Coming Soon]",
      align: "center",
      paragraphs: [
        "We publish a case study only once the client has approved every word and figure in it. They will appear here as they are approved.",
        "In the meantime, we are happy to talk you through similar work on a call.",
      ],
      ctas: [{ label: "Ask About Similar Work", href: "/contact-us/" }],
    },
    {
      // PLACEHOLDER: two real, client-approved case studies with headline, summary and one measured result each.
      type: "cards",
      draft: true, // hidden until real content replaces the template
      tone: "muted",
      title: "Featured [Work]",
      align: "center",
      columns: 2,
      items: [
        {
          tag: "Industry",
          title: "Case study headline",
          // PLACEHOLDER: the headline metric for case study 1.
          metric: "—",
          text: "Two or three sentences on where the client started, what was getting in the way and what the SyntaxHires team changed.",
          href: "/case-study/case-study-1/",
          linkLabel: "Read The Case Study",
        },
        {
          tag: "Industry",
          title: "Case study headline",
          // PLACEHOLDER: the headline metric for case study 2.
          metric: "—",
          text: "Two or three sentences on where the client started, what was getting in the way and what the SyntaxHires team changed.",
          href: "/case-study/case-study-2/",
          linkLabel: "Read The Case Study",
        },
      ],
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
