import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/leadership/",
  meta: {
    title: "Leadership",
    description:
      "Meet the people who lead SyntaxHires and the working standards they hold every engagement to.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      align: "center",
      eyebrow: "Leadership",
      title: "The People [Accountable] For Your Engagement",
      text: "SyntaxHires is led by people who stay close to the work. When something needs a decision, you can reach the person who makes it.",
      ctas: [
        { label: "Talk To Our Team", href: "/contact-us/" },
        { label: "About SyntaxHires", href: "/about/", variant: "outline" },
      ],
    },
    {
      // PLACEHOLDER: real names, roles, bios and photos of the SyntaxHires directors.
      type: "people",
      title: "Our [Directors]",
      align: "center",
      items: [
        { name: "Founder Name", role: "Role", bio: "Short biography goes here. Two or three sentences on background and what this person is responsible for at SyntaxHires." },
        { name: "Founder Name", role: "Role", bio: "Short biography goes here. Two or three sentences on background and what this person is responsible for at SyntaxHires." },
      ],
    },
    {
      type: "cards",
      tone: "dark",
      title: "Built On [Trust] And Working Standards",
      intro: "Standards are only useful if they are followed every day. These are the ones we work to.",
      align: "center",
      columns: 3,
      items: [
        { icon: "git", title: "Code Review On Every Change", text: "No change is merged without a second pair of eyes." },
        { icon: "file", title: "Documented Handover", text: "If a developer changes, the context is written down and passed on." },
        { icon: "shield", title: "Security Training", text: "Developers are trained in handling credentials, data and access before they start." },
        { icon: "lock", title: "NDA Before Code Access", text: "Confidentiality is signed before anyone sees your repository." },
        { icon: "users", title: "One Developer, One Client", text: "Attention is not split between accounts." },
        { icon: "eye", title: "Work In Your Tools", text: "Progress is visible in your repository and your tracker." },
      ],
    },
    {
      type: "cards",
      title: "The Principles We [Lead By]",
      align: "center",
      columns: 4,
      items: [
        { icon: "message", title: "Say It Plainly", text: "Bad news is shared early and in clear words. Surprises cost more than honesty." },
        { icon: "target", title: "Fit Before Speed", text: "A quick placement that fails helps nobody. We would rather take longer and get it right." },
        { icon: "handshake", title: "Earn The Next Month", text: "Month-to-month terms mean we keep the work only by being useful." },
        { icon: "check", title: "Own The Outcome", text: "If the fit is wrong, we fix it or replace the developer." },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Want To Speak With Our Leadership?",
      text: "Send us a note about your project. We reply within two working days.",
      ctas: [{ label: "Contact Us", href: "/contact-us/" }],
    },
  ],
};

export default page;
