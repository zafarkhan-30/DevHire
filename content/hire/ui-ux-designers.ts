import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "ui-ux-designers",
  name: "UI/UX Design",
  role: "UI/UX Designers",
  category: "design",
  meta: {
    title: "Hire UI/UX Designers",
    description:
      "Hire UI/UX designers for research, flows, prototypes and interface design. Meet the designer before you commit. You own every file.",
  },
  hook: "Products get harder to use with every release when nobody owns how the whole experience fits together.",
  focus: "Web Apps, Mobile Apps & SaaS Dashboards",
  heroText:
    "Designers who start from what users are trying to do, map the flow, test it and then design the screens. They work in your Figma workspace and take part in your sprint alongside engineering.",
  heroBullets: [
    "Research, flows, wireframes and finished interface design",
    "Prototypes tested with users before the build starts",
    "Developer-ready files with states and specifications",
    "You review the portfolio and interview before any contract",
  ],
  build: [
    {
      label: "Web Application Design",
      icon: "monitor",
      text: "Flows and screens for data-heavy products: tables, forms, settings and permissions that stay clear as features are added.",
      stack: ["Figma", "FigJam", "Maze", "Storybook"],
      outcome: "Users find the next step without reading a manual.",
    },
    {
      label: "Mobile App Design",
      icon: "smartphone",
      text: "iOS and Android interfaces that respect the conventions of each platform and work with one hand.",
      stack: ["Figma", "Human Interface Guidelines", "Material Design", "ProtoPie"],
      outcome: "The app feels at home on each platform while keeping a single identity.",
    },
    {
      label: "UX Audits",
      icon: "search",
      text: "A structured review of an existing product using heuristics, analytics and session recordings.",
      stack: ["Hotjar", "Google Analytics", "Figma", "FigJam"],
      outcome: "You receive a ranked list of problems, each backed by evidence.",
    },
    {
      label: "User Research and Testing",
      icon: "users",
      text: "Interviews, surveys and moderated tests, planned and run by the designer and summarised for the team.",
      stack: ["Maze", "Dovetail", "Zoom", "FigJam"],
      outcome: "Design decisions rest on what users did and said.",
    },
    {
      label: "UI Kits and Component Libraries",
      icon: "layers",
      text: "A documented set of styles and components in Figma that maps to what engineering has built.",
      stack: ["Figma", "Figma Variables", "zeroheight", "Storybook"],
      outcome: "New screens are consistent because they start from shared parts.",
    },
  ],
  fact: {
    text: "The Web Content Accessibility Guidelines are published by the W3C and are referenced by accessibility laws and policies in many countries.",
    source: "W3C Web Accessibility Initiative",
  },
  skills: [
    {
      title: "User research",
      text: "Interview guides, surveys and synthesis that turn raw notes into findings the team can act on.",
      chips: ["Interviews", "Surveys", "Synthesis"],
    },
    {
      title: "Information architecture",
      text: "Navigation, naming and grouping worked out before any screen is drawn.",
      chips: ["Site Maps", "Card Sorting", "Navigation"],
    },
    {
      title: "Flows and wireframes",
      text: "Low-detail layouts that settle structure and sequence while changes are still cheap.",
      chips: ["User Flows", "Wireframes", "FigJam"],
    },
    {
      title: "Visual design",
      text: "Hierarchy, spacing, type and colour used to direct attention, not to decorate.",
      chips: ["Typography", "Colour", "Layout Grids"],
    },
    {
      title: "Prototyping",
      text: "Clickable prototypes detailed enough to test the idea and no more detailed than that.",
      chips: ["Figma Prototyping", "ProtoPie", "Micro-Interactions"],
    },
    {
      title: "Usability testing",
      text: "Task-based sessions with real users, followed by a short report of what failed and why.",
      chips: ["Moderated Tests", "Unmoderated Tests", "Maze"],
    },
    {
      title: "Accessibility",
      text: "Contrast, target size, focus order and plain language considered while designing, not after.",
      chips: ["WCAG", "Contrast", "Screen Readers"],
    },
    {
      title: "Developer handoff",
      text: "Every state drawn, spacing and tokens named, and questions answered while the build is under way.",
      chips: ["Dev Mode", "Specifications", "Design QA"],
    },
  ],
  versions: [
    { version: "Responsive Web Design", year: "2010", tag: "Method", text: "Ethan Marcotte's article named and described responsive web design, an approach to layouts that adapt to the screen." },
    { version: "Material Design", year: "2014", tag: "Design language", text: "Google published Material Design, a documented system of components and behaviour." },
    { version: "Figma", year: "2016", tag: "Collaboration", text: "Figma's public release let several people work in the same design file at once, in the browser." },
    { version: "WCAG 2.1", year: "2018", tag: "Accessibility", text: "The W3C added success criteria covering mobile use, low vision and cognitive accessibility." },
    { version: "WCAG 2.2", year: "2023", tag: "Accessibility", text: "The W3C added further criteria, including ones on target size, keyboard focus and dragging movements." },
  ],
  chooseWhen: [
    { title: "Users drop out of key flows", text: "When sign-up, checkout or onboarding loses people, the cause is usually in the design of the flow." },
    { title: "You are about to build something new", text: "Testing a prototype costs far less than rebuilding a shipped feature." },
    { title: "Features were added without a plan", text: "Products that grew screen by screen need someone to restore a consistent structure." },
    { title: "Engineers are making the design decisions", text: "Developers can do it, but it takes time from engineering and the results vary by person." },
  ],
  chooseNot: [
    { title: "You need a logo or campaign artwork", text: "Brand and marketing design is a different specialism from product design." },
    { title: "Nobody is available to build the designs", text: "Design files deliver nothing until engineering has the capacity to ship them." },
    { title: "You want the designer to write the front end", text: "A fullstack designer, who designs and codes, is the closer match." },
    { title: "It is a short-lived internal tool", text: "A standard component library with its default styles is usually enough." },
  ],
  whyUs: [
    { title: "Portfolios read for reasoning", text: "We ask candidates to explain the problem, the options they rejected and what happened after launch." },
    { title: "You choose the designer", text: "You review the portfolio and hold your own interview before any contract is signed." },
    { title: "Working in your Figma workspace", text: "Files are created in your account, in your structure, and belong to you." },
    { title: "Part of your sprint", text: "The designer joins planning and reviews, and works for your team only." },
    { title: "Flexible engagement", text: "NDA before access, month-to-month terms and no exit fee. If the fit is wrong, we provide a replacement." },
  ],
  faqs: [
    {
      q: "Do your designers do research, or only visual design?",
      a: "Both. The role covers research, flows, wireframes, interface design and testing. If you need more weight on one of these, tell us and we shortlist for it.",
    },
    {
      q: "Which tools do they use?",
      a: "Figma is the default for design and prototyping. For research and testing they use whatever your team already has. They work in your accounts.",
    },
    {
      q: "How does the designer work with our developers?",
      a: "They join your sprint, share work early, hand over files with every state covered and review the built screens against the design before release.",
    },
    {
      q: "Can we see a portfolio before deciding?",
      a: "Yes. You receive the portfolio with the shortlist and can ask the designer to talk through any project during your interview.",
    },
    {
      q: "Who owns the design files?",
      a: "You do. All work product and IP are assigned to you in the contract, and the files are stored in your workspace.",
    },
    {
      q: "What if the designer is not the right fit?",
      a: "We provide a replacement. Because the engagement runs month to month and carries no exit fee, you can also simply end it.",
    },
  ],
};

export default data;
