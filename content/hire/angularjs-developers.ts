import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "angularjs-developers",
  name: "Angular",
  role: "Angular Developers",
  category: "frontend",
  meta: {
    title: "Hire Angular Developers",
    description:
      "Hire Angular developers for enterprise front ends and AngularJS migrations. Interview them first, month-to-month terms, you own the code.",
  },
  hook: "Large Angular applications stall when nobody on the team feels safe upgrading the framework or untangling the modules.",
  focus: "Enterprise Portals, Admin Consoles & AngularJS Migrations",
  heroText:
    "Angular engineers who are at home in large, typed codebases. They handle reactive forms, RxJS streams, lazy-loaded routes and the version upgrades that keep an application supported.",
  heroBullets: [
    "TypeScript, RxJS and the Angular CLI as daily tools",
    "Familiar with standalone components and signals",
    "Has moved AngularJS screens to current Angular",
    "You speak to the developer before you sign anything",
  ],
  build: [
    {
      label: "Enterprise Portals",
      icon: "building",
      text: "Multi-module internal portals with role-based access, shared layouts and feature areas that load on demand.",
      stack: ["Angular", "TypeScript", "RxJS", "Angular Material"],
      outcome: "Departments work from one application instead of a patchwork of separate tools.",
    },
    {
      label: "Form-Heavy Workflows",
      icon: "file",
      text: "Long, multi-step forms with conditional fields, validation rules and saved drafts, built on typed reactive forms.",
      stack: ["Angular", "Reactive Forms", "NgRx", "Jest"],
      outcome: "Users complete long applications without losing their place or their data.",
    },
    {
      label: "Admin Consoles",
      icon: "settings",
      text: "Data grids, bulk actions and audit views for the operations staff who run the business day to day.",
      stack: ["Angular", "AG Grid", "Angular CDK", "REST APIs"],
      outcome: "Support and operations teams fix issues themselves rather than raising tickets with engineering.",
    },
    {
      label: "AngularJS Migration",
      icon: "refresh",
      text: "Moving AngularJS screens to current Angular in stages, running a hybrid application where that lowers the risk.",
      stack: ["AngularJS", "Angular", "ngUpgrade", "Cypress"],
      outcome: "The product moves off an unsupported framework while feature releases continue.",
    },
    {
      label: "Multi-Team Front Ends",
      icon: "network",
      text: "A shared shell that hosts separately owned Angular applications, with common libraries kept in a monorepo.",
      stack: ["Angular", "Nx", "Module Federation", "Playwright"],
      outcome: "Teams release on their own schedule without stepping on each other's code.",
    },
  ],
  fact: {
    text: "Angular is an open-source framework written in TypeScript and maintained by a dedicated team at Google.",
    source: "Angular official documentation",
  },
  skills: [
    {
      title: "Angular core",
      text: "Components, directives, pipes and dependency injection, written as standalone components or in NgModules to match your codebase.",
      chips: ["Standalone Components", "Dependency Injection", "Angular CLI"],
    },
    {
      title: "RxJS",
      text: "Streams that are composed and cleaned up properly, so subscriptions do not leak and requests do not race.",
      chips: ["Observables", "Operators", "Async Pipe"],
    },
    {
      title: "Signals and change detection",
      text: "Knowing when the view updates and why, and using signals or OnPush to keep large screens quick.",
      chips: ["Signals", "OnPush", "Change Detection"],
    },
    {
      title: "State management",
      text: "A store where shared state justifies it, plain services where it does not.",
      chips: ["NgRx", "Signal Store", "Services"],
    },
    {
      title: "Forms",
      text: "Typed reactive forms with custom validators and reusable form controls.",
      chips: ["Reactive Forms", "Typed Forms", "Validators"],
    },
    {
      title: "Testing",
      text: "Component and service tests that run in the pipeline, plus end-to-end checks on the flows that matter most.",
      chips: ["Jasmine", "Jest", "Cypress"],
    },
    {
      title: "Upgrades",
      text: "Version-by-version upgrades using the official update tooling, with deprecated APIs cleared along the way.",
      chips: ["ng update", "Schematics", "ngUpgrade"],
    },
    {
      title: "Load performance",
      text: "Lazy routes, deferred views and bundle budgets so the first screen does not pay for the whole application.",
      chips: ["Lazy Loading", "Deferrable Views", "Bundle Budgets"],
    },
  ],
  versions: [
    { version: "AngularJS 1.0", year: "2012", tag: "Original", text: "The first stable AngularJS release, built around two-way data binding and dependency injection." },
    { version: "Angular 2", year: "2016", tag: "Rewrite", text: "A full rewrite in TypeScript with a component-based architecture. The framework became known simply as Angular." },
    { version: "Angular 9", year: "2020", tag: "Ivy", text: "The Ivy compiler and renderer became the default for all applications." },
    { version: "Angular 14", year: "2022", tag: "Standalone", text: "Standalone components arrived in preview, alongside strictly typed reactive forms." },
    { version: "Angular 16", year: "2023", tag: "Signals", text: "Signals were introduced in developer preview as a new reactivity model." },
    { version: "Angular 17", year: "2023", tag: "Control flow", text: "Built-in template control flow and deferrable views were added." },
  ],
  chooseWhen: [
    { title: "Many developers share one codebase", text: "Angular prescribes structure, so code written by different teams looks and behaves alike." },
    { title: "The application will live for years", text: "A published release schedule and update tooling make long-term maintenance easier to plan." },
    { title: "Forms and business rules dominate", text: "Typed forms, validators and dependency injection suit applications with a lot of process logic." },
    { title: "You want most tools from one source", text: "Routing, forms, HTTP and testing support ship with the framework instead of being picked one by one." },
  ],
  chooseNot: [
    { title: "The project is a small marketing site", text: "A full application framework adds weight that a content site does not need." },
    { title: "The team is small and new to the framework", text: "Angular takes time to learn. A lighter library may get a first version out sooner." },
    { title: "You need a tiny widget on someone else's page", text: "An embeddable script is better served by a smaller, compiler-based or plain JavaScript approach." },
  ],
  whyUs: [
    { title: "Assessed on an existing project", text: "Candidates read and change a real Angular codebase, because inherited code is what most roles involve." },
    { title: "You choose the person", text: "You interview the developer and make the decision. No contract comes before that conversation." },
    { title: "Dedicated to your product", text: "A developer works for a single client, so knowledge of your modules is not split across projects." },
    { title: "Your repository and process", text: "Work happens in your repo, your board and your review flow. An NDA is signed before any code access." },
    { title: "Easy to leave", text: "Terms run month to month and there is no exit fee." },
  ],
  faqs: [
    {
      q: "Do you cover AngularJS as well as modern Angular?",
      a: "Yes. Some developers maintain AngularJS applications and others focus on current Angular. For a migration we look for people who have worked with both.",
    },
    {
      q: "Can a developer upgrade our application from an older Angular version?",
      a: "Yes. Upgrades are done one major version at a time using the official update tooling, with tests run at each step. The developer will review your dependencies first and tell you where the hard parts are.",
    },
    {
      q: "How do you assess Angular developers?",
      a: "Assessment includes a review exercise on an existing Angular project, a technical interview covering RxJS and change detection, and a check on written and spoken communication.",
    },
    {
      q: "Will the developer follow our NgRx and monorepo conventions?",
      a: "Yes. The developer works inside your repository and follows the patterns already in place. If they see a problem with a pattern, they raise it with your team rather than working around it.",
    },
    {
      q: "Who owns the code that is written?",
      a: "You do. Code and IP are assigned to you in the contract, and every commit goes to your repositories.",
    },
    {
      q: "What happens if the developer is not the right fit?",
      a: "Tell us and we arrange a replacement. Because terms are month to month with no exit fee, you can also end the engagement.",
    },
  ],
};

export default data;
