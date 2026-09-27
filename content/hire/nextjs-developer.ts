import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "nextjs-developer",
  name: "Next.js",
  role: "Next.js Developers",
  category: "frontend",
  meta: {
    title: "Hire Next.js Developers",
    description:
      "Hire Next.js developers who choose the right rendering mode per route and work in your repository. Shortlist within days, month-to-month terms.",
  },
  hook: "A Next.js application becomes slow and costly to host when rendering and caching decisions are made by trial and error.",
  focus: "Storefronts, Content Platforms & SaaS Front Ends",
  heroText:
    "Next.js engineers who know where each piece of code runs: on the server, at the edge or in the browser. They pick a rendering mode for every route and can explain the choice.",
  heroBullets: [
    "App Router and Pages Router experience",
    "Server Components, Server Actions and route handlers",
    "Deploys to Vercel, containers or your own Node.js hosting",
    "Meet the developer before you commit",
  ],
  build: [
    {
      label: "Headless Commerce",
      icon: "cart",
      text: "Product listing, search and checkout pages fed by a commerce API, with stock and price data refreshed on a schedule you control.",
      stack: ["Next.js", "Shopify Storefront API", "Stripe", "Tailwind CSS"],
      outcome: "Product pages are indexable and stay current without a full rebuild.",
    },
    {
      label: "Content Platforms",
      icon: "globe",
      text: "Marketing sites, documentation and blogs where editors publish from a headless CMS and preview drafts before release.",
      stack: ["Next.js", "Sanity", "MDX", "ISR"],
      outcome: "Editors publish on their own and engineers stop handling copy changes.",
    },
    {
      label: "SaaS Front Ends",
      icon: "monitor",
      text: "Authenticated product interfaces with nested layouts, streaming data and forms that post straight to the server.",
      stack: ["Next.js", "TypeScript", "Auth.js", "Prisma"],
      outcome: "The marketing site and the product share one codebase and one deployment.",
    },
    {
      label: "App Router Migration",
      icon: "refresh",
      text: "Moving a Pages Router project to the App Router one route group at a time, with both routers running together during the change.",
      stack: ["Next.js", "App Router", "React Server Components", "Playwright"],
      outcome: "Shared layouts and server-side data loading replace code that was repeated on every page.",
    },
    {
      label: "Multi-Language Sites",
      icon: "compass",
      text: "Locale-aware routing, translated content and regional redirects handled before the page renders.",
      stack: ["Next.js", "Middleware", "next-intl", "CDN"],
      outcome: "Visitors land on the right language and region without a redirect chain.",
    },
  ],
  fact: {
    text: "The official React documentation lists Next.js among the frameworks it recommends for starting a new React application.",
    source: "React documentation (react.dev)",
  },
  skills: [
    {
      title: "Rendering strategy",
      text: "Static generation, server rendering, streaming and client rendering, selected route by route with the trade-offs written down.",
      chips: ["SSG", "SSR", "Streaming"],
    },
    {
      title: "Server Components and Actions",
      text: "Keeping data access on the server and sending the browser only the interactive parts.",
      chips: ["Server Components", "Server Actions", "Suspense"],
    },
    {
      title: "Caching and revalidation",
      text: "Clear rules for what is cached, for how long and what clears it, so stale pages are not a mystery.",
      chips: ["Revalidation", "Cache Tags", "ISR"],
    },
    {
      title: "Routing and layouts",
      text: "Nested layouts, route groups, loading and error states arranged so shared UI is written once.",
      chips: ["App Router", "Layouts", "Route Groups"],
    },
    {
      title: "Data and APIs",
      text: "Route handlers, database access and third-party APIs with typed inputs and outputs.",
      chips: ["Route Handlers", "Prisma", "tRPC"],
    },
    {
      title: "Authentication",
      text: "Sessions, protected routes and role checks enforced on the server, not only hidden in the interface.",
      chips: ["Auth.js", "Middleware", "Cookies"],
    },
    {
      title: "Web performance",
      text: "Image, font and script loading tuned against Core Web Vitals, with bundle size watched in the pipeline.",
      chips: ["next/image", "next/font", "Bundle Analyzer"],
    },
    {
      title: "Deployment",
      text: "Hosting on Vercel or self-hosting in containers, with preview environments for each pull request.",
      chips: ["Vercel", "Docker", "Node.js"],
    },
  ],
  versions: [
    { version: "Next.js", year: "2016", tag: "First release", text: "Open-sourced with server rendering and routing based on the file system." },
    { version: "Next.js 9", year: "2019", tag: "API routes", text: "API routes and dynamic route segments were built in, along with TypeScript support." },
    { version: "Next.js 12", year: "2021", tag: "Rust compiler", text: "A Rust-based compiler replaced Babel by default, and middleware was introduced." },
    { version: "Next.js 13", year: "2022", tag: "App Router", text: "The App Router was introduced in beta, built on React Server Components and nested layouts." },
    { version: "Next.js 14", year: "2023", tag: "Server Actions", text: "Server Actions were marked stable." },
    { version: "Next.js 15", year: "2024", tag: "React 19", text: "Support for React 19, with fetch requests and GET route handlers no longer cached by default." },
  ],
  chooseWhen: [
    { title: "Search visibility matters", text: "Pages render on the server, so crawlers and link previews receive full HTML." },
    { title: "Your team already writes React", text: "Next.js adds routing, rendering and build tooling on top of skills the team has." },
    { title: "The site mixes static and live pages", text: "A pricing page can be static while an account page renders per request, in the same project." },
    { title: "You want light backend logic beside the UI", text: "Route handlers and Server Actions cover form posts and simple APIs without a separate service." },
  ],
  chooseNot: [
    { title: "The product sits entirely behind a login", text: "With no need for search indexing, a client-side React app built with Vite is simpler to host." },
    { title: "The backend is the hard part", text: "Long-running jobs, queues and persistent socket connections belong in a dedicated service." },
    { title: "Your team does not use React", text: "Next.js is a React framework. Teams on Vue or Svelte have their own equivalents." },
    { title: "The site is a few fixed pages", text: "A static site generator or plain HTML is cheaper to build and run." },
  ],
  whyUs: [
    { title: "Judged on decisions, not syntax", text: "Candidates explain how they would render and cache a real page, since that is where Next.js projects go wrong." },
    { title: "Interview before contract", text: "You talk to the developer and review their work first. Nothing is signed until you are satisfied." },
    { title: "Works in your setup", text: "Your repository, your hosting account and your pull request rules. An NDA comes before code access." },
    { title: "Not shared with other clients", text: "The developer is assigned to your product only, so context is not lost between projects." },
    { title: "Month-to-month terms", text: "No long commitment and no exit fee. If the fit is wrong, we replace the developer." },
  ],
  faqs: [
    {
      q: "Do your developers work with the App Router or the Pages Router?",
      a: "Both. Tell us which router your project uses and whether a migration is planned, and the shortlist will reflect that.",
    },
    {
      q: "We self-host rather than use Vercel. Is that a problem?",
      a: "No. Developers deploy Next.js to containers and Node.js servers as well as to Vercel. Share your hosting setup in the brief so we match on it.",
    },
    {
      q: "Can a Next.js developer also handle backend work?",
      a: "Route handlers, Server Actions and database queries are part of the role. For a large or separate backend, we suggest adding a backend developer.",
    },
    {
      q: "How is Next.js skill assessed?",
      a: "Candidates work through a review task on an existing Next.js project and a technical interview on rendering, caching and data fetching. Communication is assessed too.",
    },
    {
      q: "Who owns the code and the hosting accounts?",
      a: "You do. Code and IP are assigned to you by contract, and the developer works through accounts that you control.",
    },
    {
      q: "How soon can we see candidates?",
      a: "Once the brief is clear, a shortlist usually follows within days. The start date then depends on your interviews and paperwork.",
    },
  ],
};

export default data;
