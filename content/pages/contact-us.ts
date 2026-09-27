import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/contact-us/",
  meta: {
    title: "Contact Us",
    description:
      "Tell SyntaxHires what you need: developers for your team, an offshore team or help with a legacy system. We reply within two working days.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      align: "center",
      eyebrow: "Contact",
      title: "Hiring Developers, Building An Offshore Team Or [Modernising] A Legacy System?",
      text: "Tell us what you need. A member of our team will read it and reply.",
    },
    {
      type: "form",
      title: "Contact [Us]",
      intro: "Share as much or as little as you like. A few lines about the stack and the goal is enough to start.",
      align: "left",
      lists: [
        {
          title: "What happens next",
          items: [
            "We read your request and reply within two working days",
            "We arrange a call to understand the stack and the role",
            "You receive a shortlist to interview",
          ],
        },
        {
          title: "Offices",
          // PLACEHOLDER: real office address. Keep in step with site.offices.
          items: ["Office address goes here"],
        },
      ],
      form: {
        title: "Send Us A Message",
        submit: "Send Request",
        kind: "contact",
        fields: ["name", "email", "phone", "company", "message"],
        note: "No obligation. We use your details only to reply to this request.",
      },
    },
    {
      type: "marquee",
      tone: "muted",
      title: "Why People Like Working With Us",
      align: "center",
    },
  ],
};

export default page;
