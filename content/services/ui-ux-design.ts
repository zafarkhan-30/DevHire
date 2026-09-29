import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "ui-ux-design",
  name: "UI/UX Design",
  group: "operate",
  icon: "compass",
  summary: "User journeys, wireframes, prototypes and design systems that developers can build from.",
  meta: {
    title: "UI/UX Design Services",
    description:
      "UI/UX design by SyntaxHires: user journeys, wireframes, clickable prototypes and design systems, prepared so developers can build from them directly.",
  },
  hero: {
    title: "Product Design That Is [Ready To Build]",
    text: "We design web and mobile products that are clear to use, and we prepare the designs so developers can build them without guessing.",
    bullets: ["Clickable prototype before any code", "Designs checked for accessibility", "Design files are yours"],
  },
  intro: {
    title: "What [UI/UX Design] Covers",
    paragraphs: [
      "UX design decides how the product works: what the user is trying to do and the steps they take to do it. UI design decides how it looks: layout, type, colour and the states of every control.",
      "Design is the cheapest stage at which to change your mind. A prototype lets you try the product and correct it before development starts.",
    ],
    aside: {
      title: "In short",
      items: ["User journeys and wireframes", "Screen designs for web and mobile", "Clickable prototypes", "Design systems and handoff"],
    },
  },
  build: {
    title: "What We [Design]",
    items: [
      { icon: "compass", title: "User Journeys", text: "The steps a user takes to complete each task, mapped before any screen is drawn." },
      { icon: "layers", title: "Wireframes", text: "Simple layouts that settle structure and content before visual design." },
      { icon: "monitor", title: "Screen Designs", text: "Finished designs for desktop, tablet and phone, including empty and error states." },
      { icon: "smartphone", title: "Prototypes", text: "Clickable versions you can try on your own device and show to users." },
      { icon: "settings", title: "Design Systems", text: "Reusable components, colours and type, so new screens stay consistent." },
      { icon: "eye", title: "Design Reviews", text: "A review of an existing product, with specific changes listed in order of priority." },
    ],
  },
  audience: [
    { icon: "rocket", title: "Founders", text: "You need to show the product to users or investors before it is built." },
    { icon: "code", title: "Development Teams", text: "You have engineers and need designs they can build from." },
    { icon: "briefcase", title: "Product Owners", text: "Users find the current product hard to use and you need a plan to improve it." },
  ],
  approach: {
    title: "How A Design Project [Runs]",
    items: [
      { title: "Understand", text: "We learn who the users are and what they need to get done." },
      { title: "Structure", text: "Journeys and wireframes, reviewed with you." },
      { title: "Design", text: "Screen designs and a prototype you can click through." },
      { title: "Refine", text: "Changes based on your feedback and on how people use the prototype." },
      { title: "Handoff", text: "Specifications and assets prepared for developers." },
    ],
  },
  deliverables: [
    { icon: "file", title: "Design Files", text: "Editable source files, transferred to your account." },
    { icon: "smartphone", title: "Prototype", text: "A clickable prototype of the main journeys." },
    { icon: "settings", title: "Component Library", text: "Reusable components with their states documented." },
    { icon: "lock", title: "Ownership", text: "All designs assigned to you by contract." },
  ],
  stack: [
    { label: "UI/UX Designers", href: "/hire/ui-ux-designers/" },
    { label: "Fullstack Designers", href: "/hire/fullstack-designers/" },
    { label: "React", href: "/hire/react-js-developers/", note: "Frontend build" },
    { label: "Flutter", href: "/hire/flutter-developers/", note: "Mobile build" },
  ],
  faqs: [
    {
      q: "Can you design only, without building?",
      a: "Yes. We can deliver designs and a handoff package for your own developers, or continue into development with our team.",
    },
    {
      q: "Do we get the source design files?",
      a: "Yes. The editable files are transferred to you and the contract assigns the designs to you.",
    },
    {
      q: "Can you redesign an existing product?",
      a: "Yes. We start with a review of the current product, agree the priorities with you, and redesign in stages so changes can be released gradually.",
    },
    {
      q: "Do you test designs with users?",
      a: "Where you can give us access to users, we run short sessions with the prototype and adjust the design based on what we see.",
    },
  ],
};

export default service;
