import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "fullstack-designers",
  name: "Fullstack Design",
  role: "Fullstack Designers",
  category: "design",
  meta: {
    title: "Hire Fullstack Designers",
    description:
      "Hire fullstack designers who design in Figma and ship production UI code. You interview first, own all the work and pay no exit fee.",
  },
  hook: "Designs lose detail at handoff when the person who drew the screen is not the person who builds it.",
  focus: "Design Systems, Product Interfaces & Marketing Sites",
  heroText:
    "Designers who work in Figma and in your front-end repository. They design the screen, build the components and open the pull request, so what ships matches what was designed.",
  heroBullets: [
    "Figma plus production HTML, CSS and React",
    "Design tokens shared between design files and code",
    "Accessibility checked in the design and in the browser",
    "You review their work and interview them before any contract",
  ],
  build: [
    {
      label: "Design Systems",
      icon: "layers",
      text: "Tokens, components and usage notes kept in step across Figma and the codebase.",
      stack: ["Figma", "Storybook", "React", "Style Dictionary"],
      outcome: "Designers and developers draw on the same set of parts.",
    },
    {
      label: "Product UI Development",
      icon: "monitor",
      text: "New screens designed and built as working components, including the empty, loading and error states.",
      stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],
      outcome: "Features reach review as working screens, not as static mockups.",
    },
    {
      label: "Marketing Sites and Landing Pages",
      icon: "globe",
      text: "Campaign and product pages designed, built and handed over with editable content.",
      stack: ["Figma", "Next.js", "Tailwind CSS", "MDX"],
      outcome: "Marketing pages go live without queuing behind the product roadmap.",
    },
    {
      label: "Coded Prototypes",
      icon: "rocket",
      text: "Prototypes built in the browser with real data and real interactions, ready for user testing.",
      stack: ["Figma", "React", "Vite", "Vercel"],
      outcome: "An idea is tried with users before the full build is committed.",
    },
    {
      label: "Interface Refresh",
      icon: "refresh",
      text: "An ageing interface restyled screen by screen, without rewriting the application logic underneath.",
      stack: ["CSS Custom Properties", "React", "Storybook", "Chromatic"],
      outcome: "The product looks consistent again while feature work carries on.",
    },
  ],
  fact: {
    text: "The Design Tokens Community Group, hosted by the W3C, publishes a format specification so that design tools and code can exchange tokens in a common file format.",
    source: "W3C Design Tokens Community Group",
  },
  skills: [
    {
      title: "Visual and interaction design",
      text: "Layout, type, colour and the behaviour of each control in every state.",
      chips: ["Layout", "Typography", "Interaction States"],
    },
    {
      title: "Figma practice",
      text: "Files structured like code: components with properties, variables for tokens and auto layout throughout.",
      chips: ["Auto Layout", "Variables", "Component Properties"],
    },
    {
      title: "HTML and CSS",
      text: "Semantic markup and modern layout written by hand, without depending on a framework to hide it.",
      chips: ["Semantic HTML", "CSS Grid", "Flexbox"],
    },
    {
      title: "Component development",
      text: "Typed, documented components with sensible props, reviewed through the same pull requests as other code.",
      chips: ["React", "TypeScript", "Storybook"],
    },
    {
      title: "Design tokens",
      text: "Colour, spacing and type scales defined once and exported to each platform that needs them.",
      chips: ["Design Tokens", "Style Dictionary", "Theming"],
    },
    {
      title: "Responsive behaviour",
      text: "Layouts that adapt to their container and content, tested on real devices and not only on a resized window.",
      chips: ["Container Queries", "Fluid Type", "Breakpoints"],
    },
    {
      title: "Accessibility",
      text: "Contrast, focus order and labels settled in the design, then verified with a keyboard and a screen reader.",
      chips: ["WCAG", "ARIA", "Keyboard Navigation"],
    },
    {
      title: "Motion",
      text: "Transitions that explain a change of state, with a reduced-motion alternative for users who ask for one.",
      chips: ["CSS Animation", "Reduced Motion", "Lottie"],
    },
  ],
  versions: [
    { version: "Bootstrap", year: "2011", tag: "UI toolkit", text: "Twitter open-sourced Bootstrap, and shared libraries of coded components became common practice." },
    { version: "Figma", year: "2016", tag: "Design in the browser", text: "Figma's public release put design files in the browser, where developers could open them as well." },
    { version: "CSS Grid", year: "2017", tag: "Layout", text: "The major browsers shipped CSS Grid, giving the web a native two-dimensional layout system." },
    { version: "Tailwind CSS", year: "2017", tag: "Utility CSS", text: "Tailwind's first release offered utility classes generated from a shared design scale." },
    { version: "Figma Dev Mode", year: "2023", tag: "Handoff", text: "Figma introduced Dev Mode and variables, bringing design files closer to the code they describe." },
  ],
  chooseWhen: [
    { title: "Quality is lost at handoff", text: "If shipped screens drift from the designs, putting both jobs in one person removes the gap." },
    { title: "The team is too small for two roles", text: "An early-stage product often cannot justify a separate designer and front-end developer." },
    { title: "A design system needs an owner", text: "Someone has to keep Figma and code in agreement. That is this role's home ground." },
    { title: "Front-end polish keeps being cut", text: "Spacing, states and motion get finished when the person building the screen cares about them." },
  ],
  chooseNot: [
    { title: "You need deep user research", text: "Discovery interviews and usability studies are better led by a UI/UX designer or a researcher." },
    { title: "The front end is heavy on logic", text: "Complex state, data fetching and performance tuning belong with a front-end engineer." },
    { title: "You need a brand identity", text: "Logos, naming and brand guidelines are a separate discipline." },
  ],
  whyUs: [
    { title: "Design and code judged together", text: "Candidates show their portfolio and the code behind it, then complete a practical task that covers both." },
    { title: "You see the work before you sign", text: "You review past projects and interview the designer before any contract." },
    { title: "Inside your Figma and your repository", text: "Files and components are created in your workspace and belong to you." },
    { title: "Committed to a single client", text: "The designer is not split across accounts, so your design system has a steady owner." },
    { title: "Low-commitment terms", text: "NDA before access, month-to-month engagement, no exit fee and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "What is a fullstack designer?",
      a: "A designer who also writes production interface code. They take a screen from the first sketch in Figma to a merged pull request. They are not backend developers.",
    },
    {
      q: "Which front-end frameworks can they work in?",
      a: "React with TypeScript is the most common request. Tell us your framework and styling approach and we shortlist people who have shipped with it.",
    },
    {
      q: "Will their code go through our review process?",
      a: "Yes. Their work goes through the same pull requests, linting and tests as any other change in your repository.",
    },
    {
      q: "Can they work with our existing design system?",
      a: "Yes. They start by learning your components and tokens, then extend the system using your conventions.",
    },
    {
      q: "Can one person replace a designer and a front-end developer?",
      a: "On a small team, often yes. On a large product, a fullstack designer works best alongside engineers, owning the interface layer while they own data and logic.",
    },
    {
      q: "Who owns the design files and code?",
      a: "You do. The contract assigns the Figma files, the code and all related IP to you.",
    },
  ],
};

export default data;
