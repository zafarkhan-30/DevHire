import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "laravel-developers",
  name: "Laravel",
  role: "Laravel Developers",
  category: "backend",
  meta: {
    title: "Hire Laravel Developers",
    description:
      "Hire Laravel developers who work in your repository and ship APIs, queues and admin tools. You interview first. Month-to-month terms.",
  },
  hook: "Back-end work stalls when the business rules live in one person's head and every release waits on them.",
  focus: "APIs, SaaS Back Ends & Admin Panels",
  heroText:
    "Laravel engineers who have run APIs, background jobs and multi-tenant products in production, and who read your domain logic before they refactor it.",
  heroBullets: [
    "Current PHP and Laravel releases as the default",
    "Eloquent, queues, events and scheduled jobs in daily use",
    "Changes covered by Pest or PHPUnit tests",
    "Interview the developer yourself before you sign",
  ],
  build: [
    {
      label: "SaaS Back Ends",
      icon: "layers",
      text: "Multi-tenant applications with subscriptions, roles and data kept separate for each customer.",
      stack: ["Laravel", "PostgreSQL", "Laravel Cashier", "Redis"],
      outcome: "New customers are onboarded without an engineer touching the database.",
    },
    {
      label: "REST and GraphQL APIs",
      icon: "network",
      text: "Versioned APIs with token authentication, rate limits and a documented contract for web and mobile clients.",
      stack: ["Laravel", "Sanctum", "API Resources", "OpenAPI"],
      outcome: "Front-end and mobile teams build against an interface that does not shift under them.",
    },
    {
      label: "Admin Panels and Internal Tools",
      icon: "settings",
      text: "Back-office screens for operations staff, with permission checks and a record of who changed what.",
      stack: ["Laravel", "Livewire", "Filament", "MySQL"],
      outcome: "Support staff correct records themselves instead of raising tickets for engineers.",
    },
    {
      label: "Queues and Background Jobs",
      icon: "zap",
      text: "Imports, exports, notifications and payment webhooks moved out of the request cycle and retried safely.",
      stack: ["Laravel Queues", "Horizon", "Redis", "Amazon SQS"],
      outcome: "Slow work runs in the background, and failed jobs are visible and can be retried.",
    },
    {
      label: "Legacy PHP Modernisation",
      icon: "refresh",
      text: "Moving plain PHP, CodeIgniter or early Laravel code to a supported release, one module at a time.",
      stack: ["Laravel", "Rector", "PHPStan", "Pest"],
      outcome: "The application stays in service while the old code is retired in stages.",
    },
  ],
  fact: {
    text: "Laravel is open-source software released under the MIT licence, and its documentation covers queues, task scheduling, authentication and an ORM as first-party features.",
    source: "Laravel documentation",
  },
  skills: [
    {
      title: "Eloquent and database design",
      text: "Relationships, eager loading and indexes, with migrations written to run against a live database.",
      chips: ["Eloquent", "Migrations", "MySQL", "PostgreSQL"],
    },
    {
      title: "API design",
      text: "Consistent resources, validation and error formats, with versioning planned before the first client ships.",
      chips: ["Sanctum", "API Resources", "OpenAPI"],
    },
    {
      title: "Queues and events",
      text: "Idempotent jobs, retry rules and failure handling so background work can be trusted with money and email.",
      chips: ["Horizon", "Redis", "Amazon SQS"],
    },
    {
      title: "Testing",
      text: "Feature tests for the paths that matter, unit tests for the rules behind them, and factories for realistic data.",
      chips: ["Pest", "PHPUnit", "Laravel Dusk"],
    },
    {
      title: "Static analysis and code style",
      text: "Type checks and formatting run in the pipeline, so reviews are about design and not about spacing.",
      chips: ["PHPStan", "Larastan", "Laravel Pint"],
    },
    {
      title: "Front-end integration",
      text: "Server-driven interfaces or a JavaScript front end, chosen to suit the skills your team already has.",
      chips: ["Livewire", "Inertia.js", "Blade"],
    },
    {
      title: "Authorisation and security",
      text: "Policies for every sensitive action, validated input and secrets kept out of the repository.",
      chips: ["Policies", "Gates", "Form Requests"],
    },
    {
      title: "Deployment and operations",
      text: "Repeatable releases, cached configuration and logs that make a production fault quick to trace.",
      chips: ["Docker", "GitHub Actions", "Laravel Forge"],
    },
  ],
  versions: [
    { version: "Laravel 1", year: "2011", tag: "First release", text: "Taylor Otwell published the first version of the framework." },
    { version: "Laravel 4", year: "2013", tag: "Composer", text: "Rebuilt as a set of Composer packages, which opened it to the wider PHP ecosystem." },
    { version: "Laravel 5", year: "2015", tag: "Restructure", text: "A new directory structure, a built-in task scheduler and form request validation." },
    { version: "Laravel 8", year: "2020", tag: "Factories", text: "Class-based model factories, job batching and migration squashing." },
    { version: "Laravel 9", year: "2022", tag: "Yearly cycle", text: "Moved to one major release a year and required PHP 8." },
    { version: "Laravel 11", year: "2024", tag: "Slimmer skeleton", text: "A leaner application structure and the introduction of Laravel Reverb for WebSockets." },
  ],
  chooseWhen: [
    { title: "The product is a database-backed web application", text: "Accounts, records, permissions and billing are what the framework was designed around." },
    { title: "You prefer conventions to a blank page", text: "Laravel makes most structural decisions for you, so a new developer knows where things live." },
    { title: "A small team has to cover a lot of ground", text: "Authentication, mail, queues and scheduling come with the framework and do not need to be assembled." },
    { title: "You already run PHP", text: "Existing hosting, skills and libraries carry over, which lowers the cost of the move." },
  ],
  chooseNot: [
    { title: "The workload is heavy computation", text: "Numerical processing and data science are better served by Python or a compiled language." },
    { title: "You need one tiny standalone service", text: "A full framework is more than a single-purpose function requires." },
    { title: "Your team runs another back-end stack well", text: "Adding a second language brings extra hosting, tooling and hiring to manage." },
    { title: "The site is mostly content pages", text: "A content management system gives editors more for less engineering effort." },
  ],
  whyUs: [
    { title: "Assessed on existing code", text: "Candidates review and extend a working Laravel application, because most real work is changing code someone else wrote." },
    { title: "You choose the person", text: "You interview the developer and look at how they work before any contract is signed." },
    { title: "Dedicated to your product", text: "A developer works for a single client, so knowledge of your domain is not split across projects." },
    { title: "Replacement if the fit is wrong", text: "If the match does not work out, we provide another developer and manage the handover." },
    { title: "Simple to leave", text: "Terms run month to month and there is no exit fee." },
  ],
  faqs: [
    {
      q: "How do you screen Laravel developers?",
      a: "Candidates complete a review exercise on an existing Laravel application, followed by a live technical interview and a communication check. We look for people who have kept a production back end running, not only built new ones.",
    },
    {
      q: "Can the developer take over an application on an older Laravel version?",
      a: "Yes. Tell us the Laravel and PHP versions you run. We shortlist people who have carried out upgrades across major versions and can plan yours in stages.",
    },
    {
      q: "Will the developer follow our testing setup?",
      a: "Yes. Developers work with the test tools already in your repository, whether that is Pest or PHPUnit. How a candidate tests a change is part of the assessment.",
    },
    {
      q: "Who owns the code and intellectual property?",
      a: "You do. The contract assigns all work to you, and every commit goes into your own repositories.",
    },
    {
      q: "Does the developer use our tools or yours?",
      a: "Yours. The developer joins your repository, ticketing and chat, and follows your review process.",
    },
    {
      q: "Is an NDA signed before the developer sees our code?",
      a: "Yes. The NDA is signed before any access to your code or systems is given.",
    },
  ],
};

export default data;
