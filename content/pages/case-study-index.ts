import type { PageDef } from "@/content/types";

// PLACEHOLDER: SyntaxHires has not supplied case studies yet. Both cards below are templates.
const page: PageDef = {
  path: "/case-study/",
  meta: {
    title: "Case Studies",
    description:
      "Case studies from SyntaxHires engagements. Each one sets out the client's starting point, the work the team did and the result, as approved by the client.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "center",
      eyebrow: "Proof",
      title: "Case [Studies]",
      text: "How the work went, told in plain terms. We publish only what the client has approved.",
    },
    {
      // PLACEHOLDER: replace both cards with real, client-approved case studies.
      type: "cards",
      tone: "muted",
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
      type: "cta",
      variant: "dark",
      title: "Want To See Work Closer To Yours?",
      text: "Tell us your industry and stack. We will talk through how we would approach it.",
      ctas: [
        { label: "Talk To An Engineer", href: "/contact-us/" },
        { label: "See Our Work", href: "/case-study/our-work/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
