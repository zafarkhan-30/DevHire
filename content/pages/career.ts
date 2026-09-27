import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/career/",
  meta: {
    title: "Careers",
    description:
      "Work as a SyntaxHires developer: one client at a time, inside a real product team, with code review on every change.",
  },
  blocks: [
    {
      type: "hero",
      tone: "navy",
      align: "center",
      eyebrow: "Careers",
      title: "Do Focused Work On [One Product] At A Time",
      text: "SyntaxHires developers join a client's team and stay with it. You work on one codebase, learn it well and see your work reach production.",
      ctas: [{ label: "See Open Roles", href: "#roles" }],
    },
    {
      type: "cards",
      title: "How We [Work]",
      intro: "What a working day looks like for a SyntaxHires developer.",
      align: "center",
      columns: 4,
      items: [
        { icon: "target", title: "One Client At A Time", text: "You are not split across accounts. Your attention goes to one product." },
        { icon: "users", title: "Inside The Client's Team", text: "You work in the client's repository and tools, and join their rituals." },
        { icon: "git", title: "Review On Every Change", text: "Your code is reviewed, and you review the code of others." },
        { icon: "message", title: "Plain Communication", text: "Ask early, report blockers and say what you think. It is expected." },
      ],
    },
    {
      type: "jobs",
      id: "roles",
      tone: "muted",
      title: "Open [Roles]",
      align: "center",
      // PLACEHOLDER: add real open roles, each with title, location, kind and link.
      items: [],
      emptyText:
        "There are no open roles listed right now. You are still welcome to email your CV. Tell us the stack you work in and the kind of role you are looking for.",
    },
    {
      type: "cta",
      variant: "dark",
      title: "Do Not See Your Role?",
      text: "Send your CV and a short note about the work you do best.",
      ctas: [{ label: "Email Your CV", href: "/contact-us/" }],
    },
  ],
};

export default page;
