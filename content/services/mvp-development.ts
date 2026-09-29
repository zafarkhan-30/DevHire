import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "mvp-development",
  name: "MVP Development",
  group: "build",
  icon: "rocket",
  summary: "A first version of your product, scoped to test the idea with real users.",
  meta: {
    title: "MVP Development",
    description:
      "MVP development for founders. SyntecHire helps you cut the scope to what matters, builds a first version and leaves you with code you can grow.",
  },
  hero: {
    title: "Launch A First Version That [Tests Your Idea]",
    text: "We help you decide what the first version must do, build it, and release it to real users. The code is written so it can grow with the product.",
    bullets: ["Scope cut to what proves the idea", "One team from design to launch", "Code you can build on, not throw away"],
  },
  intro: {
    title: "What An [MVP] Is For",
    paragraphs: [
      "An MVP is the smallest version of a product that lets you learn whether people want it. It is not a prototype and it is not the full product. It does a few things well and leaves the rest for later.",
      "The hardest part is deciding what to leave out. We work through the feature list with you, separate the must-haves from the rest, and build the must-haves first.",
    ],
    aside: {
      title: "In short",
      items: ["Scope agreed in writing", "Design, build and launch", "Web, mobile or both", "A plan for what comes after"],
    },
  },
  build: {
    title: "What Is [Included]",
    items: [
      { icon: "target", title: "Scope Workshop", text: "We turn the idea into a short list of features that the first version needs." },
      { icon: "compass", title: "Product Design", text: "User journeys, wireframes and screen designs for the core flows." },
      { icon: "code", title: "Build", text: "Frontend, backend and database for the agreed features." },
      { icon: "check", title: "Testing", text: "Testing of the core journeys before anything reaches users." },
      { icon: "rocket", title: "Launch", text: "Production setup, release and the basics of monitoring." },
      { icon: "trending", title: "Next Steps", text: "A written list of what to build next, based on what you learn." },
    ],
  },
  audience: [
    { icon: "rocket", title: "First-Time Founders", text: "You have the idea and the market knowledge and need a technical team to build it." },
    { icon: "briefcase", title: "Founders Raising Funds", text: "You need a working product to show, not slides." },
    { icon: "building", title: "Companies Testing A New Line", text: "You want to try a new product without pulling your main team away." },
  ],
  approach: {
    title: "How An MVP Project [Runs]",
    items: [
      { title: "Scope", text: "A workshop to agree the must-have features and write them down." },
      { title: "Design", text: "Designs for the core flows, reviewed by you before build starts." },
      { title: "Build In Sprints", text: "Working software at the end of each sprint, so you can change course early." },
      { title: "Launch", text: "Release to real users, with the setup needed to run it." },
      { title: "Learn And Plan", text: "We review what users do and agree what to build next." },
    ],
  },
  deliverables: [
    { icon: "monitor", title: "A Working Product", text: "Live and usable by real users." },
    { icon: "git", title: "Source Code", text: "In your repository, written to be extended." },
    { icon: "file", title: "Documentation", text: "How it is built and how to run it." },
    { icon: "lock", title: "Ownership", text: "Code and IP assigned to you by contract." },
  ],
  stack: [
    { label: "React", href: "/hire/react-js-developers/" },
    { label: "Next.js", href: "/hire/nextjs-developer/" },
    { label: "Node.js", href: "/hire/nodejs-developers/" },
    { label: "Python", href: "/hire/python-developers/" },
    { label: "Flutter", href: "/hire/flutter-developers/" },
    { label: "React Native", href: "/hire/react-native-developers/" },
    { label: "All technologies", href: "/technologies/" },
  ],
  faqs: [
    {
      q: "How do we decide what goes into the MVP?",
      a: "We list every feature you have in mind, then ask of each one whether the product can be tested without it. What remains is the first version. Everything else goes on a list for later.",
    },
    {
      q: "Will the MVP have to be rebuilt later?",
      a: "It should not. We keep the scope small, not the quality low. The code is written so that features can be added without starting again.",
    },
    {
      q: "I am not technical. Can I still work with you?",
      a: "Yes. We explain decisions in plain language, show working software every sprint and write down what was agreed.",
    },
    {
      q: "Who owns the product?",
      a: "You do. The code is in your repository and the contract assigns the IP to you. We sign an NDA before you share the idea in detail.",
    },
    {
      q: "What happens after launch?",
      a: "You can continue with the same team on a monthly basis, move to a support arrangement, or take the product in-house with a documented handover.",
    },
  ],
};

export default service;
