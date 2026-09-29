import type { PageDef } from "@/content/types";
import { projectCard, projectColumns, projects } from "@/content/work";

// Projects come from content/work.
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
      type: "cards",
      tone: "muted",
      title: "Recent [Projects]",
      intro: "What we built, the technology behind it and what the finished product looks like.",
      align: "center",
      columns: projectColumns,
      items: projects.map(projectCard),
      footnote: "More projects are added as clients approve them for publication.",
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
