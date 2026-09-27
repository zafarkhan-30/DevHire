import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/thank-you/",
  meta: {
    title: "Thank You",
    description:
      "Thank you for contacting SyntaxHires. We have received your request and will reply within two working days. Here is what happens next.",
  },
  blocks: [
    {
      type: "hero",
      tone: "navy",
      align: "center",
      eyebrow: "Request Received",
      title: "Thank You For [Getting In Touch]",
      text: "Your request has reached our team. We will reply within two working days.",
      ctas: [
        { label: "Browse Technologies", href: "/technologies/" },
        { label: "Back To Home", href: "/", variant: "outline-light" },
      ],
    },
    {
      type: "steps",
      layout: "row",
      title: "What Happens [From Here]",
      align: "center",
      items: [
        { title: "Request Received", text: "Your details are with our team." },
        { title: "Under Review", text: "We read your request and note any questions about the stack or the role." },
        { title: "Developer Matching", text: "We shortlist developers who fit the work you described." },
        { title: "Interview And Onboarding", text: "You interview the developer. If you agree, they join your repository and tools." },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      align: "center",
      columns: 2,
      items: [
        {
          icon: "compass",
          title: "What Happens Next",
          text: "While we review your request, you can look through the stacks our developers work in.",
          href: "/technologies/",
          linkLabel: "Browse Technologies",
        },
        {
          icon: "message",
          title: "Need Something Sooner?",
          text: "If your request is urgent, send us a second note and say so in the first line.",
          href: "/contact-us/",
          linkLabel: "Contact Us",
        },
      ],
    },
    {
      type: "linkGrid",
      title: "Popular [Technologies]",
      align: "center",
      groups: [
        {
          label: "Popular",
          items: [
            { label: "React Developers", href: "/hire/react-js-developers/" },
            { label: "Node.js Developers", href: "/hire/nodejs-developers/" },
            { label: "Python Developers", href: "/hire/python-developers/" },
            { label: "Java Developers", href: "/hire/java-developers/" },
            { label: ".NET Developers", href: "/hire/net-developers/" },
            { label: "Flutter Developers", href: "/hire/flutter-developers/" },
            { label: "AWS Experts", href: "/hire/aws-experts/" },
            { label: "AI Developers", href: "/hire/ai-developers/" },
          ],
        },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Want To Know How We Screen Developers?",
      text: "Read the method while you wait for our reply.",
      ctas: [{ label: "How We Vet", href: "/how-we-vet/" }],
    },
  ],
};

export default page;
