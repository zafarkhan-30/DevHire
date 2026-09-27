import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/technologies/",
  meta: {
    title: "Technologies We Work With",
    description:
      "Hire remote developers by tech stack: frontend, backend, mobile, cloud, data and AI, CMS and design. Interview the developer before any contract.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      align: "center",
      eyebrow: "Hire By Tech Stack",
      title: "Find Developers For The [Stack] You Already Use",
      text: "Pick a technology to see what our developers build with it and how to hire one. You interview every developer before any contract.",
      ctas: [
        { label: "Post A Requirement", href: "/hire-developers/" },
        { label: "Talk To Our Team", href: "/contact-us/", variant: "outline-light" },
      ],
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Technologies" }],
    },
    {
      type: "linkGrid",
      title: "Technologies We [Work With]",
      intro: "Grouped by the part of the product they serve.",
      align: "center",
      groups: [
        {
          label: "Frontend",
          items: [
            { label: "React Developers", href: "/hire/react-js-developers/" },
            { label: "Angular Developers", href: "/hire/angularjs-developers/" },
            { label: "Next.js Developers", href: "/hire/nextjs-developer/" },
            { label: "Svelte Developers", href: "/hire/svelte-developers/" },
            { label: "JavaScript Developers", href: "/hire/javascript-developers/" },
          ],
        },
        {
          label: "Backend",
          items: [
            { label: "Backend Developers", href: "/hire/backend-developers/" },
            { label: "Node.js Developers", href: "/hire/nodejs-developers/" },
            { label: "Python Developers", href: "/hire/python-developers/" },
            { label: "Java Developers", href: "/hire/java-developers/" },
            { label: ".NET Developers", href: "/hire/net-developers/" },
            { label: "Microsoft Developers", href: "/hire/microsoft-developers/" },
            { label: "Golang Developers", href: "/hire/golang-developers/" },
            { label: "Rust Developers", href: "/hire/rust-developers/" },
            { label: "PHP Developers", href: "/hire/php-developers/" },
            { label: "Laravel Developers", href: "/hire/laravel-developers/" },
            { label: "Yii Developers", href: "/hire/yii-developers/" },
          ],
        },
        {
          label: "Mobile",
          items: [
            { label: "Mobile Developers", href: "/hire/mobile-developers/" },
            { label: "Android Developers", href: "/hire/android-developers/" },
            { label: "iOS Developers", href: "/hire/ios-developers/" },
            { label: "Flutter Developers", href: "/hire/flutter-developers/" },
            { label: "React Native Developers", href: "/hire/react-native-developers/" },
          ],
        },
        {
          label: "Cloud & DevOps",
          items: [
            { label: "AWS Experts", href: "/hire/aws-experts/" },
            { label: "Platform Engineers", href: "/hire/platform-engineers/" },
          ],
        },
        {
          label: "Data & AI",
          items: [
            { label: "AI Developers", href: "/hire/ai-developers/" },
            { label: "Agentic AI Developers", href: "/hire/agentic-ai-developers/" },
            { label: "ChatGPT Integration Developers", href: "/hire/chatgpt-integration-developers/" },
            { label: "Data Engineers", href: "/hire/data-engineer/" },
          ],
        },
        {
          label: "CMS & E-Commerce",
          items: [
            { label: "WordPress Developers", href: "/hire/wordpress-developers/" },
            { label: "Shopify Developers", href: "/hire/shopify-developers/" },
            { label: "Salesforce Developers", href: "/hire/salesforce-developers/" },
          ],
        },
        {
          label: "Design & Marketing",
          items: [
            { label: "UI/UX Designers", href: "/hire/ui-ux-designers/" },
            { label: "Full-Stack Designers", href: "/hire/fullstack-designers/" },
            { label: "SEO Experts", href: "/hire/seo-experts/" },
            { label: "PPC Experts", href: "/hire/ppc-experts/" },
          ],
        },
      ],
    },
    {
      type: "steps",
      tone: "muted",
      layout: "list",
      title: "How We Match Talent To [Your Stack]",
      align: "left",
      items: [
        { title: "We Learn Your System", text: "You tell us the stack, the versions, the architecture and the work ahead. We ask about the parts a job description leaves out." },
        { title: "We Shortlist On Fit", text: "We look for developers who have worked on the same kind of system, not only the same language." },
        { title: "You Interview", text: "You meet the developer, ask your own questions and make the decision. No contract is signed before this." },
        { title: "The Developer Joins Your Team", text: "After the NDA is signed, the developer starts work in your repository and tools. If the fit is wrong, we replace them." },
      ],
    },
    {
      type: "table",
      title: "Managed Pods vs [Freelancers]",
      intro: "Both can write good code. The difference is what stands behind the developer.",
      align: "center",
      columns: ["", "SyntaxHires managed pod", "Freelancer"],
      highlight: 1,
      rows: [
        ["Focus", "One developer works on one client", "Often split between several clients"],
        ["Screening", "Screened by SyntaxHires, then interviewed by you", "Screened by you alone"],
        ["If the developer leaves", "Documented handover and a replacement", "You start the search again"],
        ["Contract terms", "Month to month, no exit fee", "Varies by person"],
        ["Code and IP", "Assigned to you by contract", "Depends on the agreement you write"],
        ["Confidentiality", "NDA signed before code access", "Depends on the agreement you write"],
        ["Best suited to", "Ongoing product work", "Short, well-defined tasks"],
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Cannot See Your Stack?",
      text: "Tell us what you use. If we can help, we will say so. If we cannot, we will say that too.",
      ctas: [
        { label: "Post A Requirement", href: "/hire-developers/" },
        { label: "Contact Us", href: "/contact-us/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
