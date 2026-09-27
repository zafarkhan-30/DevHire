import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "backend-developers",
  name: "Backend",
  role: "Backend Developers",
  category: "backend",
  meta: {
    title: "Hire Backend Developers",
    description:
      "Hire backend developers for APIs, microservices and cloud-native systems. Interview the engineer first. Month-to-month terms, no exit fee.",
  },
  hook: "Features stall when the service layer behind them is slow to change, hard to test and understood by too few people.",
  focus: "APIs, Microservices & Cloud-Native Systems",
  heroText:
    "Backend engineers who design data models, write the services around them and keep those services running under real traffic. They study the existing system before proposing changes to it.",
  heroBullets: [
    "API design, data modelling and messaging as core skills",
    "Matched to your language: Node.js, Java, .NET or Python",
    "Commits to your repository and follows your review process",
    "You interview the engineer before any contract",
  ],
  build: [
    {
      label: "API Platforms",
      icon: "code",
      text: "Versioned REST or GraphQL APIs with authentication, rate limits and documentation generated from the code.",
      stack: ["Node.js", "PostgreSQL", "OpenAPI", "Redis"],
      outcome: "Web, mobile and partner teams build against one documented contract.",
    },
    {
      label: "Microservices",
      icon: "network",
      text: "A large application split along domain lines into services, each with its own data and a clear owner.",
      stack: ["Java", "Spring Boot", "Kafka", "Kubernetes"],
      outcome: "A team can release its own service without waiting for a shared deployment.",
    },
    {
      label: "Event-Driven Processing",
      icon: "zap",
      text: "Queues and streams for work that should not block a request, such as billing runs, notifications and imports.",
      stack: ["Python", "RabbitMQ", "Celery", "PostgreSQL"],
      outcome: "Slow jobs run in the background, and failed ones are retried instead of lost.",
    },
    {
      label: "Cloud-Native Workloads",
      icon: "cloud",
      text: "Containerised services and serverless functions, with the infrastructure described in code and kept in version control.",
      stack: ["AWS Lambda", "Docker", "Terraform", "Amazon SQS"],
      outcome: "Environments can be rebuilt from code, and capacity follows demand.",
    },
    {
      label: "Legacy Backend Modernisation",
      icon: "refresh",
      text: "A monolith or a stored-procedure-heavy system moved to maintainable services in stages, behind a routing layer.",
      stack: [".NET", "SQL Server", "Azure Service Bus", "Docker"],
      outcome: "The old system keeps serving users while each part is replaced and verified.",
    },
  ],
  fact: {
    text: "Kubernetes is a graduated project of the Cloud Native Computing Foundation, the highest maturity level the foundation assigns.",
    source: "Cloud Native Computing Foundation",
  },
  skills: [
    {
      title: "API design",
      text: "Resource naming, versioning, pagination and error formats that client teams can rely on without asking.",
      chips: ["REST", "GraphQL", "gRPC"],
    },
    {
      title: "Data modelling and SQL",
      text: "Schemas that reflect the business, indexes chosen from query plans and migrations that run without locking users out.",
      chips: ["PostgreSQL", "MySQL", "Migrations"],
    },
    {
      title: "Caching and document stores",
      text: "Knowing when a cache or a non-relational store helps, and what it costs in consistency.",
      chips: ["Redis", "MongoDB", "DynamoDB"],
    },
    {
      title: "Messaging and background work",
      text: "Idempotent consumers, retry policies and dead-letter queues, so a failed message is a known event and not a mystery.",
      chips: ["Kafka", "RabbitMQ", "Amazon SQS"],
    },
    {
      title: "Authentication and security",
      text: "Token-based sign-in, permission checks at the service boundary and input handling that follows OWASP guidance.",
      chips: ["OAuth 2.0", "OpenID Connect", "OWASP"],
    },
    {
      title: "Containers and delivery",
      text: "Images, pipelines and deployment manifests that the developer can write and debug without handing off.",
      chips: ["Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Observability",
      text: "Structured logs, metrics and traces added while the feature is written, so production questions have answers.",
      chips: ["OpenTelemetry", "Prometheus", "Grafana"],
    },
    {
      title: "Testing",
      text: "Integration tests against a real database, contract tests between services and load tests before a launch.",
      chips: ["Integration Tests", "Contract Tests", "Load Tests"],
    },
  ],
  versions: [
    { version: "REST", year: "2000", tag: "Architecture style", text: "Roy Fielding's doctoral dissertation described REST, the style most web APIs still follow." },
    { version: "Docker", year: "2013", tag: "Containers", text: "Docker's open-source release made it practical to package a service together with its dependencies." },
    { version: "AWS Lambda", year: "2014", tag: "Serverless", text: "Amazon announced Lambda, which runs code in response to events without servers for the team to manage." },
    { version: "Kubernetes 1.0", year: "2015", tag: "Orchestration", text: "Kubernetes reached version 1.0 and the Cloud Native Computing Foundation was formed around it." },
    { version: "GraphQL", year: "2015", tag: "Query language", text: "Facebook published the GraphQL specification, which lets a client ask for exactly the fields it needs." },
  ],
  chooseWhen: [
    { title: "Client teams are waiting on endpoints", text: "When web and mobile work is blocked by missing or unstable APIs, backend capacity is the constraint." },
    { title: "You are breaking up a monolith", text: "Drawing service boundaries and moving data safely is specialist work that needs steady attention." },
    { title: "Load is outgrowing the design", text: "Slow queries, timeouts and queue backlogs call for someone who can measure first and then fix." },
    { title: "Integrations keep multiplying", text: "Payment providers, ERPs and partner APIs each need careful handling of failures and retries." },
  ],
  chooseNot: [
    { title: "A hosted backend covers the need", text: "A simple app with standard sign-in and storage may be well served by a backend-as-a-service product." },
    { title: "The product is still a prototype", text: "A full-stack generalist is often enough until the idea has been proven with users." },
    { title: "Deployment is the real pain", text: "If the code is sound and releases are the problem, a DevOps engineer is the better hire." },
    { title: "Nobody can answer questions about the rules", text: "Backend work encodes business rules. Without someone to explain them, the engineer will be guessing." },
  ],
  whyUs: [
    { title: "Assessed on an existing service", text: "Candidates read a working codebase, point out its weak spots and extend it. That mirrors the job." },
    { title: "Your interview comes first", text: "You speak to the engineer and ask your own technical questions before any contract is signed." },
    { title: "Dedicated to your product", text: "The engineer works for you alone, so knowledge of your system is not spread across other clients." },
    { title: "Replacement if the fit is wrong", text: "If the match does not work out, we provide another engineer." },
    { title: "Plain terms", text: "NDA before access, month-to-month engagement and no exit fee. All code and IP belong to you." },
  ],
  faqs: [
    {
      q: "Which languages and frameworks do your backend developers cover?",
      a: "Tell us your stack and we shortlist for it. Common requests are Node.js, Java with Spring Boot, .NET and Python. We match on the database and cloud platform as well as the language.",
    },
    {
      q: "Can a backend developer work alongside our in-house team?",
      a: "Yes. The developer joins your standups, picks up tickets from your board and submits pull requests for your team to review. They use your tools, not ours.",
    },
    {
      q: "How is access to production systems handled?",
      a: "An NDA is signed before any access is granted. After that, access follows your rules: your VPN, your secrets manager and the permission levels you set.",
    },
    {
      q: "Can the developer take on DevOps tasks too?",
      a: "Many backend engineers are comfortable with containers, pipelines and basic cloud setup. If the role is heavy on infrastructure, say so and we shortlist with that in mind.",
    },
    {
      q: "Who owns the code?",
      a: "You do. The contract assigns all work product and IP to you, and the code is committed to your repositories.",
    },
    {
      q: "What happens if the developer is not the right fit?",
      a: "Tell us and we arrange a replacement. Terms are month to month with no exit fee, so you are not tied to a match that is not working.",
    },
  ],
};

export default data;
