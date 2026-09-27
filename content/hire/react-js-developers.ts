import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "react-js-developers",
  name: "React",
  role: "React Developers",
  category: "frontend",
  meta: {
    title: "Hire React Developers",
    description:
      "Hire React developers who join your team, work in your repository and ship production interfaces. Shortlist in days, month-to-month terms.",
  },
  hook: "Front-end work slips when the people building it have to learn your product and your component library at the same time.",
  focus: "Dashboards, Storefronts & Real-Time Interfaces",
  heroText:
    "React engineers who have shipped component libraries, data-heavy dashboards and server-rendered storefronts, and who can read your codebase before they change it.",
  heroBullets: [
    "TypeScript and modern React patterns as standard",
    "Comfortable with Next.js, state libraries and testing",
    "Works in your repo, your tickets and your reviews",
    "You interview the developer before any contract",
  ],
  build: [
    {
      label: "Enterprise Dashboards",
      icon: "chart",
      text: "Role-aware dashboards with large tables, filters and charts that stay responsive as data grows.",
      stack: ["React", "TypeScript", "TanStack Query", "Recharts"],
      outcome: "Teams get one reliable view of their numbers instead of exported spreadsheets.",
    },
    {
      label: "E-Commerce Storefronts",
      icon: "cart",
      text: "Server-rendered catalogue, cart and checkout flows tuned for search visibility and fast first paint.",
      stack: ["Next.js", "React Server Components", "Stripe", "Tailwind CSS"],
      outcome: "Pages load quickly on mid-range phones, which is where most shoppers are.",
    },
    {
      label: "Real-Time Collaboration",
      icon: "users",
      text: "Shared editing, presence and live notifications with sensible conflict handling.",
      stack: ["React", "WebSockets", "Zustand", "Node.js"],
      outcome: "Users see each other's changes as they happen without refreshing.",
    },
    {
      label: "Design Systems",
      icon: "layers",
      text: "Accessible, documented component libraries that several product teams can share.",
      stack: ["React", "Storybook", "Radix UI", "Vitest"],
      outcome: "New screens are assembled from tested parts rather than rebuilt each time.",
    },
    {
      label: "Legacy Front-End Migration",
      icon: "refresh",
      text: "Moving jQuery, AngularJS or class-component code to modern React one route at a time.",
      stack: ["React", "TypeScript", "Module Federation", "Playwright"],
      outcome: "The old and new front ends run side by side until the last screen is moved.",
    },
  ],
  fact: {
    text: "React has been among the most widely used web frameworks in the Stack Overflow Developer Survey for several years running.",
    source: "Stack Overflow Developer Survey",
  },
  skills: [
    {
      title: "Component architecture",
      text: "Composition, custom hooks and clear boundaries between server and client components.",
      chips: ["Hooks", "Composition", "Server Components"],
    },
    {
      title: "TypeScript",
      text: "Typed props, generics and discriminated unions so mistakes surface in the editor rather than in production.",
      chips: ["TypeScript", "Zod", "ESLint"],
    },
    {
      title: "State and data fetching",
      text: "Choosing the lightest tool that fits: server state libraries first, global stores only where they earn their place.",
      chips: ["TanStack Query", "Redux Toolkit", "Zustand"],
    },
    {
      title: "Next.js and rendering strategy",
      text: "Static, server and client rendering chosen per route, with caching that is understood rather than guessed.",
      chips: ["Next.js", "App Router", "ISR"],
    },
    {
      title: "Testing",
      text: "Unit tests for logic, component tests for behaviour and a small set of end-to-end tests for critical paths.",
      chips: ["Vitest", "Testing Library", "Playwright"],
    },
    {
      title: "Performance",
      text: "Bundle analysis, code splitting and render profiling, measured against Core Web Vitals.",
      chips: ["Lighthouse", "Profiler", "Code Splitting"],
    },
    {
      title: "Accessibility",
      text: "Semantic markup, keyboard support and screen reader checks built into the definition of done.",
      chips: ["WCAG", "ARIA", "axe"],
    },
    {
      title: "Styling systems",
      text: "Utility CSS, CSS Modules or a component library, matched to what your team already maintains.",
      chips: ["Tailwind CSS", "CSS Modules", "MUI"],
    },
  ],
  versions: [
    { version: "React 0.3", year: "2013", tag: "Open-sourced", text: "First public release, introducing components and the virtual DOM." },
    { version: "React 16.8", year: "2019", tag: "Hooks", text: "Hooks let function components hold state and side effects." },
    { version: "React 18", year: "2022", tag: "Concurrent", text: "Concurrent rendering, automatic batching and streaming server rendering." },
    { version: "React 19", year: "2024", tag: "Actions", text: "Actions, the use API and stable Server Components support." },
  ],
  chooseWhen: [
    { title: "The interface is highly interactive", text: "Many states, live updates and complex forms are where a component model pays off." },
    { title: "You want a large hiring pool", text: "React skills are common, which makes growing or replacing a team easier." },
    { title: "Web and mobile share logic", text: "React Native lets teams reuse patterns and some code across platforms." },
    { title: "You need search-friendly pages", text: "Paired with Next.js, React renders on the server for fast, indexable pages." },
  ],
  chooseNot: [
    { title: "The site is mostly static content", text: "A static site generator or a CMS theme is simpler and cheaper to run." },
    { title: "The team wants strong conventions out of the box", text: "React leaves many choices open. A more opinionated framework may suit better." },
    { title: "The page must work without JavaScript", text: "Server-rendered templates with light enhancement are a better fit." },
  ],
  whyUs: [
    { title: "Screened on real code", text: "Candidates review and extend an existing React codebase, because that is the job." },
    { title: "You meet the developer first", text: "You interview the person who will do the work and see their code before signing." },
    { title: "One developer, one product", text: "No rotation between clients. Context stays with the person who built it." },
    { title: "Replacement cover", text: "If the fit is wrong, we replace the developer and absorb the handover time." },
    { title: "Short notice period", text: "Month-to-month terms with no exit fee." },
  ],
  faqs: [
    {
      q: "How are React developers screened?",
      a: "Screening covers a code review exercise on an existing React project, a live technical interview and a communication check. We look for people who have maintained production front ends.",
    },
    {
      q: "Can the developer work with our existing component library?",
      a: "Yes. Developers work inside your repository and follow your conventions, whether that is an in-house design system or a library such as MUI.",
    },
    {
      q: "Do your developers know Next.js?",
      a: "Most do. Tell us which router and rendering approach you use and we shortlist people with that experience.",
    },
    {
      q: "Who owns the code?",
      a: "You do. All work is assigned to you in the contract and is committed to your repositories from day one.",
    },
    {
      q: "Can we start with one developer and add more later?",
      a: "Yes. Engagements run month to month, so the team can grow or shrink with your roadmap.",
    },
  ],
};

export default data;
