import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "web-application-development",
  name: "Web Application Development",
  group: "build",
  icon: "monitor",
  summary: "Customer portals, dashboards, internal tools and SaaS products, built to be maintained.",
  meta: {
    title: "Web Application Development",
    description:
      "Custom web applications built by SyntaxHires: portals, dashboards, internal tools and SaaS products. Clear scope, working software every sprint and code you own.",
  },
  hero: {
    title: "Web Applications Built To [Run Your Business]",
    text: "We design and build custom web applications, from the first screen to the production release, and hand over code your own team can maintain.",
    bullets: ["Working software shown every sprint", "Code in your repository from day one", "You own the code and the IP"],
  },
  intro: {
    title: "What [Custom Web Development] Covers",
    paragraphs: [
      "A web application is software your customers or staff use in a browser: a portal, a dashboard, a booking system or a full SaaS product. Off-the-shelf tools cover common needs. Custom development is for the parts of your business that are specific to you.",
      "We take the work from requirements to release. That includes the interface, the server side, the database, integrations with the systems you already use, and the setup needed to run it in production.",
    ],
    aside: {
      title: "In short",
      items: ["Frontend, backend and database", "Integrations with your existing systems", "Hosting and release setup", "Documentation and handover"],
    },
  },
  build: {
    title: "What We [Build]",
    items: [
      { icon: "layers", title: "SaaS Products", text: "Multi-tenant products with sign-up, subscriptions, roles and an admin area." },
      { icon: "users", title: "Customer Portals", text: "Secure areas where your customers view orders, documents, invoices or account details." },
      { icon: "chart", title: "Dashboards And Reporting", text: "Screens that bring figures from several systems into one place your team can act on." },
      { icon: "settings", title: "Internal Tools", text: "Back-office screens that replace spreadsheets and manual steps with a guided workflow." },
      { icon: "cart", title: "E-Commerce And Booking", text: "Storefronts, checkout and booking flows connected to payments, stock and notifications." },
      { icon: "network", title: "APIs And Integrations", text: "Services that connect your application to payment providers, CRMs, ERPs and other tools." },
    ],
  },
  audience: [
    { icon: "rocket", title: "Founders", text: "You have a product idea and need a team that can take it from outline to launch." },
    { icon: "briefcase", title: "Business Owners", text: "A manual process or an ageing tool is slowing the business and no packaged product fits." },
    { icon: "code", title: "Engineering Leaders", text: "Your team is committed elsewhere and a defined piece of work needs its own delivery team." },
  ],
  approach: {
    title: "How A Web Project [Runs]",
    items: [
      { title: "Discovery", text: "We agree the goals, the users and the must-have features, and write them down." },
      { title: "Design", text: "Wireframes and screen designs you review before any code is written." },
      { title: "Build In Sprints", text: "Short cycles, each ending with working software you can try." },
      { title: "Test And Release", text: "Testing on real browsers and devices, then a planned release to production." },
      { title: "Support", text: "Fixes and improvements after launch, on terms agreed in advance." },
    ],
  },
  deliverables: [
    { icon: "git", title: "Source Code", text: "In your repository, with the full history of changes." },
    { icon: "file", title: "Documentation", text: "Setup steps, architecture notes and how to release a change." },
    { icon: "lock", title: "Ownership", text: "Code and IP assigned to you by contract." },
    { icon: "refresh", title: "Handover", text: "A walkthrough for your team, or ongoing support from ours." },
  ],
  stack: [
    { label: "React", href: "/hire/react-js-developers/" },
    { label: "Next.js", href: "/hire/nextjs-developer/" },
    { label: "Angular", href: "/hire/angularjs-developers/" },
    { label: "Node.js", href: "/hire/nodejs-developers/" },
    { label: "Python", href: "/hire/python-developers/" },
    { label: ".NET", href: "/hire/net-developers/" },
    { label: "Java", href: "/hire/java-developers/" },
    { label: "Laravel", href: "/hire/laravel-developers/" },
    { label: "All technologies", href: "/technologies/" },
  ],
  faqs: [
    {
      q: "How long does a web application take to build?",
      a: "It depends on the scope. After discovery we give you a written timeline broken into sprints, so you can see what is delivered when. A smaller first version followed by improvements is usually faster and safer than one large release.",
    },
    {
      q: "Who owns the code?",
      a: "You do. The code is kept in your repository and the contract assigns the IP to you.",
    },
    {
      q: "Can you work with a system we already have?",
      a: "Yes. We review the existing code and setup first, then tell you what can be kept, what should be improved and what it would take.",
    },
    {
      q: "What happens if requirements change during the project?",
      a: "On a time and material engagement, priorities are reviewed every sprint. On a fixed-scope engagement, a change is written up with its effect on time and cost, and you approve it before work starts.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. We offer maintenance and support on terms agreed in advance, or we hand over to your team with documentation and a walkthrough.",
    },
  ],
};

export default service;
