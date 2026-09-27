import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "javascript-developers",
  name: "JavaScript",
  role: "JavaScript Developers",
  category: "frontend",
  meta: {
    title: "Hire JavaScript Developers",
    description:
      "Hire JavaScript developers for browser, Node.js and legacy script work. You interview the developer, own all the code and can stop month to month.",
  },
  hook: "JavaScript codebases that grew without structure reach a point where each change breaks something nobody expected.",
  focus: "Web Apps, Browser Integrations & Legacy Script Cleanup",
  heroText:
    "JavaScript engineers who understand the language underneath the frameworks. They can work in React, Vue or plain scripts, and they leave code easier to change than they found it.",
  heroBullets: [
    "Modern ECMAScript, modules and async code",
    "Works across the browser and Node.js",
    "Adds types and tests to code that has neither",
    "Interview the developer before any agreement",
  ],
  build: [
    {
      label: "Interactive Web Apps",
      icon: "monitor",
      text: "Browser applications with client-side routing, live validation and state that survives a page reload.",
      stack: ["JavaScript", "React", "Vite", "REST APIs"],
      outcome: "Users complete tasks in the browser without waiting on full page loads.",
    },
    {
      label: "Embeddable Scripts and SDKs",
      icon: "code",
      text: "Snippets that customers paste into their own sites: trackers, widgets and client libraries with a small, stable API.",
      stack: ["Vanilla JavaScript", "Rollup", "Web Components", "npm"],
      outcome: "Your product runs on customer pages without clashing with their code.",
    },
    {
      label: "Node.js Services and Tooling",
      icon: "server",
      text: "APIs, scheduled jobs, command-line tools and build scripts written in the same language as the front end.",
      stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
      outcome: "One team can follow a feature from the button to the database.",
    },
    {
      label: "Browser Extensions",
      icon: "globe",
      text: "Extensions that read or change pages, with content scripts, background workers and an options screen.",
      stack: ["WebExtensions API", "Manifest V3", "JavaScript", "Chrome Web Store"],
      outcome: "Your service is available inside the pages where users already work.",
    },
    {
      label: "Legacy Script Cleanup",
      icon: "refresh",
      text: "Splitting large jQuery files and global scripts into modules, then adding linting, tests and gradual typing.",
      stack: ["JavaScript", "TypeScript", "ESLint", "Vitest"],
      outcome: "Changes stop causing surprise failures in unrelated parts of the site.",
    },
  ],
  fact: {
    text: "JavaScript is standardised as ECMAScript by Ecma International, and a new edition of the specification is published every year.",
    source: "Ecma International, ECMA-262 specification",
  },
  skills: [
    {
      title: "Language fundamentals",
      text: "Closures, prototypes, scope and the event loop, understood well enough to debug code without guessing.",
      chips: ["Closures", "Prototypes", "Event Loop"],
    },
    {
      title: "Asynchronous code",
      text: "Promises and async functions with proper error handling, cancellation and no unhandled rejections.",
      chips: ["Promises", "async/await", "AbortController"],
    },
    {
      title: "Browser APIs",
      text: "Direct use of the DOM, storage, observers and service workers when a framework is not needed.",
      chips: ["DOM", "Fetch API", "Service Workers"],
    },
    {
      title: "Typing",
      text: "TypeScript for new code and JSDoc annotations for older files that cannot be converted yet.",
      chips: ["TypeScript", "JSDoc", "Type Checking"],
    },
    {
      title: "Frameworks",
      text: "Working knowledge of the major front-end frameworks, with depth in the one your project uses.",
      chips: ["React", "Vue", "Angular"],
    },
    {
      title: "Node.js",
      text: "Server-side JavaScript for APIs, scripts and tooling, including streams and package management.",
      chips: ["Node.js", "Express", "npm"],
    },
    {
      title: "Build tooling",
      text: "Bundlers, transpilers and linters configured so builds are quick and output is predictable.",
      chips: ["Vite", "webpack", "esbuild"],
    },
    {
      title: "Testing",
      text: "Unit tests for logic and browser tests for user journeys, run automatically on each pull request.",
      chips: ["Jest", "Vitest", "Playwright"],
    },
  ],
  versions: [
    { version: "JavaScript", year: "1995", tag: "Created", text: "Created by Brendan Eich at Netscape for use in the browser." },
    { version: "ECMAScript 1", year: "1997", tag: "Standard", text: "The first edition of the language standard was published by Ecma." },
    { version: "ECMAScript 5", year: "2009", tag: "Strict mode", text: "Added strict mode, native JSON support and new array methods." },
    { version: "ECMAScript 2015", year: "2015", tag: "ES6", text: "Classes, modules, arrow functions, promises and block-scoped variables." },
    { version: "ECMAScript 2017", year: "2017", tag: "async/await", text: "Async functions made asynchronous code read like synchronous code." },
    { version: "ECMAScript 2020", year: "2020", tag: "Modern syntax", text: "Optional chaining, nullish coalescing, BigInt and dynamic import." },
  ],
  chooseWhen: [
    { title: "The product runs in a browser", text: "JavaScript is the language browsers run natively, so every web interface involves it." },
    { title: "You want one language across the stack", text: "With Node.js, the same developers can work on the interface and the server." },
    { title: "You rely on many third-party services", text: "Most web services publish a JavaScript client, which shortens integration work." },
    { title: "You need a working prototype soon", text: "There is no compile step to set up and the package ecosystem covers most common needs." },
  ],
  chooseNot: [
    { title: "The workload is heavy computation", text: "Number crunching, video processing and similar tasks suit compiled languages better." },
    { title: "Many developers share a large codebase", text: "Untyped code becomes hard to refactor at that scale. TypeScript is the safer choice." },
    { title: "The app needs deep access to device hardware", text: "Native mobile development gives more direct control over sensors and background work." },
  ],
  whyUs: [
    { title: "Language first, framework second", text: "Screening covers how JavaScript itself behaves, so developers are not lost when the framework changes." },
    { title: "You pick who joins", text: "You interview the developer and see how they reason about code before any agreement is made." },
    { title: "Your tools, your rules", text: "Code goes into your repository and follows your linting, review and release process. An NDA precedes code access." },
    { title: "A single client each", text: "Your developer is not shared with other companies." },
    { title: "Flexible terms", text: "Engagements are month to month with no exit fee, and we replace the developer if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Do we need a JavaScript developer or a framework specialist?",
      a: "If your product is built on one framework and will stay there, hire for that framework. If the work spans plain scripts, several frameworks or Node.js, a strong JavaScript generalist is the better match.",
    },
    {
      q: "Do your JavaScript developers write TypeScript?",
      a: "Most do. Say in the brief whether your codebase is typed, partly typed or plain JavaScript and we will match on that.",
    },
    {
      q: "Can the developer work on old jQuery code?",
      a: "Yes. Maintaining and gradually modernising older scripts is common work. The developer will suggest a staged plan instead of a rewrite.",
    },
    {
      q: "How are JavaScript developers evaluated?",
      a: "Candidates review and change an existing codebase, then sit a technical interview on language behaviour, async code and debugging. We also assess communication.",
    },
    {
      q: "Who holds the rights to the code?",
      a: "Your company. All code and IP belong to you under the contract and live in your repositories.",
    },
    {
      q: "Can we add more developers later?",
      a: "Yes. Because terms are month to month, you can add people or reduce the team as the workload changes.",
    },
  ],
};

export default data;
