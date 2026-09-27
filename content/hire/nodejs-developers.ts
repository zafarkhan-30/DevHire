import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "nodejs-developers",
  name: "Node.js",
  role: "Node.js Developers",
  category: "backend",
  meta: {
    title: "Hire Node.js Developers",
    description:
      "Hire Node.js developers who build typed APIs, queues and real-time services inside your repository. Interview first, month-to-month terms.",
  },
  hook: "API work stalls when the same few engineers are asked to build new endpoints and keep production running.",
  focus: "APIs, Real-Time Services & Event Pipelines",
  heroText:
    "Node.js engineers who build typed APIs, queue workers and real-time services, and who know how the event loop behaves under load.",
  heroBullets: [
    "TypeScript on the server by default",
    "Experience with Express, Fastify and NestJS",
    "Works through your pull requests, tickets and stand-ups",
    "Meet the developer before you commit",
  ],
  build: [
    {
      label: "REST and GraphQL APIs",
      icon: "server",
      text: "Versioned, documented endpoints with validation, authentication and rate limits.",
      stack: ["Node.js", "TypeScript", "Fastify", "PostgreSQL"],
      outcome: "Web and mobile teams build against a contract that does not shift under them.",
    },
    {
      label: "Real-Time Services",
      icon: "zap",
      text: "Chat, live tracking and notifications over WebSockets, with reconnection and back-pressure handled.",
      stack: ["Node.js", "Socket.IO", "Redis", "NestJS"],
      outcome: "Updates reach connected clients without polling.",
    },
    {
      label: "Background Jobs and Queues",
      icon: "clock",
      text: "Email, billing runs, imports and webhooks moved off the request path into retried, observable jobs.",
      stack: ["BullMQ", "Redis", "Node.js", "PostgreSQL"],
      outcome: "Slow tasks stop blocking user requests, and failed jobs are retried instead of lost.",
    },
    {
      label: "Backend for Front End",
      icon: "layers",
      text: "A thin service that shapes data from several systems for one web or mobile client.",
      stack: ["Node.js", "GraphQL", "Apollo Server", "TypeScript"],
      outcome: "A screen loads from one call instead of stitching several together in the browser.",
    },
    {
      label: "Monolith to Services",
      icon: "refresh",
      text: "Splitting a large Express application into modules or services along clear boundaries.",
      stack: ["NestJS", "Kafka", "Docker", "OpenTelemetry"],
      outcome: "Teams deploy their own part without waiting for a shared release.",
    },
  ],
  fact: {
    text: "Node.js is an OpenJS Foundation project with a published release schedule, in which even-numbered versions become long-term support lines.",
    source: "Node.js release documentation",
  },
  skills: [
    {
      title: "Runtime fundamentals",
      text: "The event loop, streams and worker threads, and what blocks each of them.",
      chips: ["Event Loop", "Streams", "Worker Threads"],
    },
    {
      title: "TypeScript on the server",
      text: "Types carried from the request to the database, with runtime validation at the edges.",
      chips: ["TypeScript", "Zod", "OpenAPI"],
    },
    {
      title: "Frameworks",
      text: "Express for what already exists, Fastify or NestJS where structure and speed matter.",
      chips: ["Express", "Fastify", "NestJS"],
    },
    {
      title: "Databases",
      text: "Relational modelling, indexing and migrations, plus document stores where they fit.",
      chips: ["PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      title: "Messaging and caching",
      text: "Queues, topics and caches used with clear rules for retries, ordering and expiry.",
      chips: ["Redis", "Kafka", "RabbitMQ"],
    },
    {
      title: "Testing",
      text: "Unit tests for logic and integration tests against a real database, run in CI.",
      chips: ["Jest", "Vitest", "Supertest"],
    },
    {
      title: "Security",
      text: "Input validation, dependency audits, secrets handling and token-based authentication.",
      chips: ["OAuth 2.0", "JWT", "Helmet"],
    },
    {
      title: "Deployment and observability",
      text: "Containers or serverless functions, with logs, metrics and traces that explain an incident.",
      chips: ["Docker", "AWS Lambda", "OpenTelemetry"],
    },
  ],
  versions: [
    { version: "First release", year: "2009", tag: "Launch", text: "Ryan Dahl presented Node.js, pairing the V8 engine with non-blocking I/O." },
    { version: "Node.js 4", year: "2015", tag: "Merged", text: "The io.js fork merged back and the project moved under a foundation." },
    { version: "Node.js 8", year: "2017", tag: "Async/await", text: "Async functions became available in a long-term support line." },
    { version: "Node.js 18", year: "2022", tag: "Fetch", text: "Added a global fetch API and the node:test module." },
    { version: "Node.js 20", year: "2023", tag: "Test runner", text: "The built-in test runner became stable and an experimental permission model was added." },
    { version: "Node.js 22", year: "2024", tag: "WebSocket", text: "A built-in WebSocket client and a stable watch mode." },
  ],
  chooseWhen: [
    { title: "The work is mostly I/O", text: "Calling databases, APIs and queues is where non-blocking I/O performs well." },
    { title: "Your front end is already TypeScript", text: "One language on client and server means shared types and easier moves between teams." },
    { title: "You need live connections", text: "Long-lived WebSocket connections are inexpensive to hold open." },
    { title: "You want small services shipped quickly", text: "The package ecosystem covers most integrations, so less is written from scratch." },
  ],
  chooseNot: [
    { title: "The workload is CPU heavy", text: "Video encoding or large numerical jobs block the event loop. Go, Rust or Java handle these better." },
    { title: "You need mature data science libraries", text: "Python has the deeper ecosystem for modelling and analysis." },
    { title: "You rely on strict compile-time guarantees", text: "TypeScript helps, but its types are erased at runtime. A compiled language may suit better." },
    { title: "Dependencies must be kept to a minimum", text: "Node.js projects tend to pull in many packages, which adds audit work in regulated settings." },
  ],
  whyUs: [
    { title: "Tested on a running service", text: "Screening includes reviewing and extending an existing Node.js API, not a whiteboard exercise." },
    { title: "You choose the person", text: "You interview the developer and read their code before any contract." },
    { title: "Inside your workflow", text: "Work happens in your repository, your CI and your ticket board." },
    { title: "No shared attention", text: "Each developer works for one client at a time." },
    { title: "Low commitment", text: "Month-to-month terms, no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "How do you screen Node.js developers?",
      a: "Candidates review an existing Node.js service, extend it and explain their choices in a live interview. We also check written and spoken communication.",
    },
    {
      q: "Do your developers write TypeScript or plain JavaScript?",
      a: "Both. Most current work is in TypeScript, and they can maintain older JavaScript services or help migrate them file by file.",
    },
    {
      q: "Which frameworks do they know?",
      a: "Express, Fastify and NestJS are the most common. Tell us what you run and we shortlist for it.",
    },
    {
      q: "Can a Node.js developer also handle the front end?",
      a: "Many have React or Vue experience. If you need a full-stack profile, say so at the start and we shortlist for both sides.",
    },
    {
      q: "Is our code protected?",
      a: "An NDA is signed before anyone sees your code. All code and IP belong to you, and work is committed to your repositories.",
    },
    {
      q: "Can we end the engagement if priorities change?",
      a: "Yes. Terms are month to month and there is no exit fee.",
    },
  ],
};

export default data;
