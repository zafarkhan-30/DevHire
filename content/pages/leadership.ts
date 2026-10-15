import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/leadership/",
  meta: {
    title: "Leadership | Meet The SyntecHire Team",
    description:
      "Meet the people who lead SyntecHire — directors, project managers and technical leads who hold every engagement to the standards our clients expect.",
  },
  blocks: [
    {
      type: "hero",
      tone: "navy",
      size: "lg",
      align: "center",
      eyebrow: "Leadership",
      title: "The People [Accountable] For Your Engagement",
      text: "SyntecHire is led by people who stay close to the work. When something needs a decision, you can reach the person who makes it.",
      ctas: [
        { label: "Talk To Our Team", href: "/contact-us/" },
        { label: "About SyntecHire", href: "/about/", variant: "outline-light" },
      ],
    },
    {
      type: "people",
      title: "Our [Directors]",
      intro: "The founders who set the direction, hold the standards and stay accountable for every engagement.",
      align: "center",
      items: [
        {
          name: "Abhishek Maurya",
          role: "Director — Finance & IT Strategy",
          bio: "Brings deep expertise across financial operations and information technology. Oversees strategic planning, commercial partnerships and the governance framework that keeps every engagement transparent and accountable.",
          image: "/images/team/director-1.jpg",
        },
        {
          name: "Abu Sufiyan Khan",
          role: "Director",
          bio: "Drives business development and operational excellence across the company. Ensures that client expectations are met with precision, from proposal through delivery, and that SyntecHire scales without compromising quality.",
          image: "/images/team/director-2.jpg",
        },
      ],
    },
    {
      type: "people",
      tone: "muted",
      title: "Engineering [Leadership]",
      intro: "The people who run the day-to-day delivery and make sure every sprint ships working software.",
      align: "center",
      items: [
        {
          name: "Jafar Khan",
          role: "Project Manager",
          bio: "Manages end-to-end delivery across projects with a strong IT background. Coordinates timelines, client communication and cross-functional teams to ensure every project is planned, tracked and delivered on schedule.",
          image: "/images/team/project-manager.jpg",
        },
        {
          name: "Saud Shaikh",
          role: "Tech Lead",
          bio: "Leads the engineering team with hands-on technical expertise. Owns architecture decisions, code quality standards and mentors developers to deliver robust, maintainable solutions that our clients can rely on.",
          image: "/images/team/tech-lead.jpg",
        },
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
