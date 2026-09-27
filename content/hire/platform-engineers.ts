import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "platform-engineers",
  name: "Platform Engineering",
  role: "Platform Engineers",
  category: "cloud",
  meta: {
    title: "Hire Platform Engineers",
    description:
      "Hire platform engineers to build internal developer platforms, CI/CD pipelines and self-service infrastructure. Month-to-month terms.",
  },
  hook: "Product teams lose time when every new service needs a ticket to another team and a wait for infrastructure.",
  focus: "Developer Platforms, CI/CD & Self-Service Infrastructure",
  heroText:
    "Platform engineers who treat your developers as their users. They build paved paths for creating, deploying and observing services, so product teams can spend their time on the product.",
  heroBullets: [
    "Production experience with Kubernetes, Terraform and GitOps",
    "Pipelines designed for fast, clear feedback",
    "Templates and documentation treated as part of the platform",
    "Meet the engineer before you sign a contract",
  ],
  build: [
    {
      label: "Internal Developer Platforms",
      icon: "layers",
      text: "A service catalogue and templates that let a team create a new service with sensible defaults already in place.",
      stack: ["Backstage", "Kubernetes", "Terraform", "Helm"],
      outcome: "A new service starts from a template, with pipeline, monitoring and ownership set up.",
    },
    {
      label: "CI/CD Pipelines",
      icon: "git",
      text: "Build, test and deploy pipelines with caching, parallel stages and failure messages a developer can act on.",
      stack: ["GitHub Actions", "GitLab CI", "Argo CD", "Docker"],
      outcome: "Developers learn whether a change is safe while they still remember writing it.",
    },
    {
      label: "Self-Service Infrastructure",
      icon: "server",
      text: "Databases, queues and environments requested through a pull request, with policy checks applied automatically.",
      stack: ["Terraform", "Crossplane", "Open Policy Agent", "Atlantis"],
      outcome: "Teams get what they need without raising a ticket, and the guardrails still apply.",
    },
    {
      label: "Observability Foundations",
      icon: "eye",
      text: "Logs, metrics and traces collected the same way for every service, with dashboards and alerts provided by default.",
      stack: ["OpenTelemetry", "Prometheus", "Grafana", "Loki"],
      outcome: "Anyone on call can investigate any service, because they all report in the same way.",
    },
    {
      label: "Preview Environments",
      icon: "rocket",
      text: "Short-lived environments created for each pull request, so a change is reviewed while running and not only as a diff.",
      stack: ["Kubernetes", "Argo CD", "Helm", "GitHub Actions"],
      outcome: "Reviewers and product owners see the change working before it is merged.",
    },
  ],
  fact: {
    text: "The CNCF Platforms White Paper recommends running an internal platform as a product, designed around the needs of the developers who use it.",
    source: "CNCF Platforms White Paper",
  },
  skills: [
    {
      title: "Kubernetes operations",
      text: "Cluster upgrades, resource limits and workload isolation handled as routine, not as emergencies.",
      chips: ["Kubernetes", "Helm", "Kustomize"],
    },
    {
      title: "Infrastructure as code",
      text: "Reusable modules with clear inputs, so product teams can use them without reading the internals.",
      chips: ["Terraform", "OpenTofu", "Crossplane"],
    },
    {
      title: "Pipeline design",
      text: "Pipelines kept short through caching and parallel work, with shared steps maintained in one place.",
      chips: ["GitHub Actions", "GitLab CI", "Jenkins"],
    },
    {
      title: "GitOps delivery",
      text: "The desired state of each environment held in Git and reconciled automatically.",
      chips: ["Argo CD", "Flux"],
    },
    {
      title: "Developer portals",
      text: "A single place to find services, owners, documentation and templates.",
      chips: ["Backstage", "Software Templates", "TechDocs"],
    },
    {
      title: "Observability",
      text: "Standard instrumentation and alert rules that come with the platform.",
      chips: ["OpenTelemetry", "Prometheus", "Grafana"],
    },
    {
      title: "Security and policy",
      text: "Secrets management and policy as code, enforced in the pipeline and in the cluster.",
      chips: ["HashiCorp Vault", "Open Policy Agent", "Kyverno"],
    },
    {
      title: "Developer experience",
      text: "Talking to developers, measuring where time is lost and ranking platform work by what it gives back.",
      chips: ["DORA Metrics", "Golden Paths", "Documentation"],
    },
  ],
  versions: [
    { version: "Docker", year: "2013", tag: "Containers", text: "Docker was released as open source and made container packaging practical for everyday development." },
    { version: "Kubernetes", year: "2014", tag: "Orchestration", text: "Google open-sourced Kubernetes, which became the common way to run containers at scale." },
    { version: "Terraform", year: "2014", tag: "Infrastructure as code", text: "HashiCorp released Terraform for describing infrastructure across providers in code." },
    { version: "Kubernetes 1.0", year: "2015", tag: "CNCF", text: "Kubernetes reached version 1.0 and the Cloud Native Computing Foundation was formed." },
    { version: "GitOps", year: "2017", tag: "Git as source of truth", text: "The term GitOps was introduced for managing deployments through declarative configuration held in Git." },
    { version: "Backstage", year: "2020", tag: "Developer portals", text: "Spotify open-sourced Backstage, its framework for building developer portals." },
  ],
  chooseWhen: [
    { title: "Several teams ship services", text: "Shared tooling pays off when the same setup work is being repeated by each team." },
    { title: "Developers wait on tickets for infrastructure", text: "Self-service with guardrails removes the queue without removing control." },
    { title: "Every service is deployed differently", text: "A common path makes releases predictable and incidents easier to handle." },
    { title: "New engineers take a long time to become productive", text: "Templates and a service catalogue shorten the distance from joining to shipping." },
  ],
  chooseNot: [
    { title: "You have one team and one application", text: "A managed hosting platform and a simple pipeline will do. A platform would be overhead." },
    { title: "Nobody has asked developers what slows them down", text: "Start with those conversations. A platform built on assumptions goes unused." },
    { title: "You expect a tool to fix a process problem", text: "Unclear ownership and slow approvals will survive any new tooling." },
  ],
  whyUs: [
    { title: "Assessed on real pipelines", text: "Candidates review an existing pipeline and infrastructure repository and explain what they would improve first." },
    { title: "You interview the engineer", text: "You meet the person and hear how they would approach your setup before any contract is signed." },
    { title: "Working for your teams only", text: "The engineer is not shared with other clients, so they get to know your developers and what holds them up." },
    { title: "Built in your tooling", text: "Everything is written in your repositories and runs in your accounts, so nothing depends on us to keep working." },
    { title: "Flexible commitment", text: "Terms run month to month with no exit fee, and we replace the engineer if the fit is wrong." },
  ],
  faqs: [
    {
      q: "How is a platform engineer different from a DevOps engineer?",
      a: "The skills overlap. The difference is in the goal. A platform engineer builds shared, self-service tools that product teams use on their own, and treats those teams as customers.",
    },
    {
      q: "Do we need Kubernetes to have a platform?",
      a: "No. A platform is the set of paved paths your developers use. It can sit on managed container services, serverless or virtual machines. The engineer works with what you run today.",
    },
    {
      q: "Can a single platform engineer make a difference?",
      a: "Yes, if the scope is narrow. A single engineer can fix a slow pipeline or build a service template. A full platform needs a team and a product owner over time.",
    },
    {
      q: "Which tools do your engineers use?",
      a: "Tell us your cloud, CI system and deployment tooling. We shortlist engineers who have run those in production, and you confirm the match in the interview.",
    },
    {
      q: "How is access to our systems handled?",
      a: "An NDA is signed before any access. You create the engineer's accounts and decide their permissions, and you can remove them whenever you wish.",
    },
    {
      q: "Who owns the platform code?",
      a: "You do. The contract assigns all work to you, and the code is stored in your repositories.",
    },
  ],
};

export default data;
