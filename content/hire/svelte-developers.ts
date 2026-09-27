import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "svelte-developers",
  name: "Svelte",
  role: "Svelte Developers",
  category: "frontend",
  meta: {
    title: "Hire Svelte Developers",
    description:
      "Hire Svelte and SvelteKit developers who join your team and work in your codebase. Meet the developer first. Month-to-month terms, no exit fee.",
  },
  hook: "Svelte specialists are harder to find than developers for the larger frameworks, so a Svelte project can stall when one key person leaves.",
  focus: "Fast Interfaces, Embedded Widgets & SvelteKit Apps",
  heroText:
    "Svelte engineers who write small, readable components and know SvelteKit from routing to deployment. They keep pages light because they understand what the compiler produces.",
  heroBullets: [
    "Svelte 5 runes and earlier store-based code",
    "SvelteKit routing, load functions and form actions",
    "TypeScript throughout",
    "You interview and approve the developer yourself",
  ],
  build: [
    {
      label: "SvelteKit Web Apps",
      icon: "globe",
      text: "Full applications with server-rendered pages, typed data loading and forms that still work before JavaScript has loaded.",
      stack: ["SvelteKit", "TypeScript", "Vite", "Tailwind CSS"],
      outcome: "Pages become usable quickly, including on slow connections.",
    },
    {
      label: "Embeddable Widgets",
      icon: "code",
      text: "Booking forms, calculators and chat launchers compiled to small bundles or custom elements and dropped into other sites.",
      stack: ["Svelte", "Custom Elements", "Vite", "Rollup"],
      outcome: "The host page gains a feature without a heavy script slowing it down.",
    },
    {
      label: "Data Visualisation",
      icon: "chart",
      text: "Interactive charts, maps and explanatory graphics with animated transitions between states.",
      stack: ["Svelte", "D3", "Layer Cake", "SVG"],
      outcome: "Readers explore the data themselves instead of looking at a static image.",
    },
    {
      label: "Content and Documentation Sites",
      icon: "file",
      text: "Prerendered sites written in Markdown with interactive components placed where they are useful.",
      stack: ["SvelteKit", "mdsvex", "Prerendering", "adapter-static"],
      outcome: "The site is served as static files from any host, with nothing to keep running.",
    },
    {
      label: "Svelte 5 Migration",
      icon: "refresh",
      text: "Updating older components to runes, replacing stores where runes are clearer and bringing dependencies up to date.",
      stack: ["Svelte 5", "Runes", "SvelteKit", "Vitest"],
      outcome: "The codebase uses one reactivity model and stays on a supported version.",
    },
  ],
  fact: {
    text: "Svelte uses a compiler to turn declarative components into JavaScript at build time, rather than doing that work in the browser.",
    source: "Svelte official documentation",
  },
  skills: [
    {
      title: "Reactivity",
      text: "State, derived values and effects declared with runes, with side effects kept few and easy to trace.",
      chips: ["$state", "$derived", "$effect"],
    },
    {
      title: "SvelteKit routing and data",
      text: "File-based routes, layouts and load functions, with a clear split between server-only and shared code.",
      chips: ["Load Functions", "Layouts", "Hooks"],
    },
    {
      title: "Forms and progressive enhancement",
      text: "Form actions that work as plain HTML posts and improve once the client script is ready.",
      chips: ["Form Actions", "use:enhance", "Validation"],
    },
    {
      title: "TypeScript",
      text: "Typed props, typed load data and generated route types, so a changed API shows up as a compile error.",
      chips: ["TypeScript", "Zod", "svelte-check"],
    },
    {
      title: "Shared state",
      text: "Stores, context and rune-based modules, each used where it fits instead of one global bucket.",
      chips: ["Stores", "Context API", "Runes"],
    },
    {
      title: "Motion",
      text: "Built-in transitions and spring or tween values for interface movement that does not need an animation library.",
      chips: ["Transitions", "Spring", "Tween"],
    },
    {
      title: "Testing",
      text: "Component tests for behaviour and browser tests for full journeys through the application.",
      chips: ["Vitest", "Testing Library", "Playwright"],
    },
    {
      title: "Deployment adapters",
      text: "Choosing and configuring the adapter for your host, whether that is a Node.js server, static files or a serverless platform.",
      chips: ["adapter-node", "adapter-static", "adapter-vercel"],
    },
  ],
  versions: [
    { version: "Svelte 1", year: "2016", tag: "First release", text: "Introduced the idea of a framework that compiles components ahead of time." },
    { version: "Svelte 3", year: "2019", tag: "Reactivity", text: "Reactivity moved into the language, so a plain assignment updates the view." },
    { version: "SvelteKit 1.0", year: "2022", tag: "App framework", text: "The official application framework reached its first stable release." },
    { version: "Svelte 4", year: "2023", tag: "Performance", text: "A release focused on performance and developer experience." },
    { version: "Svelte 5", year: "2024", tag: "Runes", text: "Runes introduced explicit, signal-based reactivity." },
  ],
  chooseWhen: [
    { title: "Load time is a priority", text: "Compiled output tends to be small, which helps on slow devices and networks." },
    { title: "A small team wants less boilerplate", text: "Components are close to plain HTML, CSS and JavaScript, so there is less code to write and read." },
    { title: "The code will run inside other sites", text: "Svelte can compile to custom elements that sit inside any page." },
    { title: "The interface relies on motion and visuals", text: "Transitions and animation helpers are part of the framework." },
  ],
  chooseNot: [
    { title: "You need to hire many developers quickly", text: "The pool of experienced Svelte developers is smaller than for React or Angular." },
    { title: "You depend on ready-made component suites", text: "Fewer large commercial UI libraries target Svelte, so more may need building in-house." },
    { title: "A large React or Angular codebase already exists", text: "A rewrite rarely pays for itself. Improving what you have is usually the better path." },
  ],
  whyUs: [
    { title: "Matched on Svelte, not just JavaScript", text: "Candidates review and extend an existing Svelte project, so the shortlist reflects Svelte skill and not general front-end experience." },
    { title: "You make the call", text: "You interview the developer before any contract exists." },
    { title: "Inside your workflow", text: "The developer commits to your repository and uses your tickets and chat tools. An NDA is signed before code access." },
    { title: "Full attention", text: "A developer serves a single client, so your project is not competing for their time." },
    { title: "Low commitment", text: "Month-to-month terms, no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Do your developers know Svelte 5 and runes?",
      a: "Tell us which version you run. We shortlist developers with experience of that version, and for a migration we look for people who know both the older syntax and runes.",
    },
    {
      q: "Is SvelteKit experience included?",
      a: "For most roles, yes. If your project uses Svelte without SvelteKit, for example as embedded widgets, mention it in the brief.",
    },
    {
      q: "How do you check Svelte experience?",
      a: "Candidates complete a review task on an existing Svelte project and a technical interview on reactivity, data loading and forms. We also check how clearly they communicate.",
    },
    {
      q: "Can one developer cover both front end and server code?",
      a: "Within SvelteKit, yes. Load functions, form actions and API endpoints are part of the role. A larger backend is better handled by a backend developer.",
    },
    {
      q: "Who owns the work?",
      a: "You own all code and IP. It is written in your repository and assigned to you in the contract.",
    },
  ],
};

export default data;
