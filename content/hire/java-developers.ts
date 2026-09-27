import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "java-developers",
  name: "Java",
  role: "Java Developers",
  category: "backend",
  meta: {
    title: "Hire Java Developers",
    description:
      "Hire Java developers for Spring Boot services, enterprise systems and JDK upgrades. They work in your repository. Month-to-month terms.",
  },
  hook: "Large Java systems carry years of decisions, and new features wait while the team works out what is safe to change.",
  focus: "Enterprise Systems, Microservices & Payment Platforms",
  heroText:
    "Java engineers who have worked on long-lived Spring codebases, can trace a request across services, and plan JDK upgrades with care.",
  heroBullets: [
    "Spring Boot, Hibernate and current JDK releases",
    "Experience with Kafka, relational databases and the JVM",
    "Follows your branching, review and release rules",
    "You interview before any contract is signed",
  ],
  build: [
    {
      label: "Enterprise Back Ends",
      icon: "building",
      text: "Order, billing and account systems with transactions, audit trails and role-based access.",
      stack: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
      outcome: "Core records stay consistent even when several systems write to them.",
    },
    {
      label: "Microservices",
      icon: "network",
      text: "Services with clear contracts, independent deploys and tracing across calls.",
      stack: ["Spring Boot", "Spring Cloud", "Kafka", "Kubernetes"],
      outcome: "A fault in one service is contained and visible instead of spreading.",
    },
    {
      label: "Payment and Transaction Processing",
      icon: "credit",
      text: "Ledger, settlement and reconciliation services where every operation is idempotent and traceable.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ"],
      outcome: "Retries and duplicate messages do not produce double entries.",
    },
    {
      label: "Integration and Batch Jobs",
      icon: "settings",
      text: "File imports, scheduled jobs and message flows between internal and partner systems.",
      stack: ["Spring Batch", "Apache Camel", "Kafka", "Quartz"],
      outcome: "Failed records are reported and retried instead of stopping the whole run.",
    },
    {
      label: "JDK and Framework Upgrades",
      icon: "refresh",
      text: "Moving from Java 8 or an older application server to a current long-term support release.",
      stack: ["Java 21", "Spring Boot 3", "Gradle", "OpenRewrite"],
      outcome: "The platform returns to supported versions and gains newer language features.",
    },
  ],
  fact: {
    text: "Java is developed in the open through the OpenJDK project, where new features are proposed and tracked as JDK Enhancement Proposals.",
    source: "OpenJDK project documentation",
  },
  skills: [
    {
      title: "Core Java and the JVM",
      text: "Collections, concurrency, memory and how the garbage collector behaves under load.",
      chips: ["Java 21", "Concurrency", "JVM Tuning"],
    },
    {
      title: "Spring ecosystem",
      text: "Dependency injection, configuration, security and data access used the way the framework intends.",
      chips: ["Spring Boot", "Spring Security", "Spring Data"],
    },
    {
      title: "Persistence",
      text: "Entity mapping, query tuning and migrations, with plain SQL where the ORM gets in the way.",
      chips: ["Hibernate", "JPA", "Flyway"],
    },
    {
      title: "Messaging and events",
      text: "Producers and consumers designed for ordering, retries and messages that arrive twice.",
      chips: ["Kafka", "RabbitMQ", "JMS"],
    },
    {
      title: "API design",
      text: "Contracts written down first, versioned carefully and checked against the implementation.",
      chips: ["REST", "gRPC", "OpenAPI"],
    },
    {
      title: "Testing",
      text: "Unit tests for logic and integration tests that run against real databases and brokers in containers.",
      chips: ["JUnit 5", "Mockito", "Testcontainers"],
    },
    {
      title: "Build and delivery",
      text: "Repeatable builds, dependency management and pipelines that fail early.",
      chips: ["Maven", "Gradle", "Jenkins"],
    },
    {
      title: "Observability",
      text: "Metrics, traces and structured logs that show where time is spent in a request.",
      chips: ["Micrometer", "OpenTelemetry", "Grafana"],
    },
  ],
  versions: [
    { version: "JDK 1.0", year: "1996", tag: "First release", text: "Sun Microsystems released the first public Java Development Kit." },
    { version: "J2SE 5.0", year: "2004", tag: "Generics", text: "Generics, annotations, enums and the enhanced for loop." },
    { version: "Java 8", year: "2014", tag: "Lambdas", text: "Lambda expressions, the Streams API and a new date and time API." },
    { version: "Java 17", year: "2021", tag: "LTS", text: "Long-term support release that finalised sealed classes." },
    { version: "Java 21", year: "2023", tag: "Virtual threads", text: "Long-term support release with virtual threads and pattern matching for switch." },
    { version: "Java 25", year: "2025", tag: "LTS", text: "Long-term support release that finalised scoped values." },
  ],
  chooseWhen: [
    { title: "The system will live for many years", text: "Java places a high value on backward compatibility, so old code keeps running on new releases." },
    { title: "Transactions and consistency matter", text: "The ecosystem around databases, messaging and transactions is mature." },
    { title: "Many teams share one platform", text: "Static typing and settled conventions keep a large codebase navigable." },
    { title: "You already run on the JVM", text: "New services fit your existing monitoring, libraries and skills." },
  ],
  chooseNot: [
    { title: "You need a quick prototype", text: "Java asks for more setup. Python or Node.js reach a demo sooner." },
    { title: "Memory is tight or start-up must be instant", text: "A standard JVM takes time and memory to warm up. Go or Rust may suit small functions better." },
    { title: "The job is a short script", text: "A scripting language is simpler for glue code and one-off tasks." },
    { title: "Your team works mainly in TypeScript", text: "Staying in one language across the stack may be easier to staff." },
  ],
  whyUs: [
    { title: "Experience with large codebases", text: "Screening uses an existing Java project, because reading code is most of the work on a mature system." },
    { title: "Meet before you sign", text: "You interview the developer and review their code before any contract." },
    { title: "Your process, not ours", text: "The developer follows your branching model, review rules and release calendar, in your repository." },
    { title: "Full attention", text: "A developer is assigned to one client, so knowledge of your system stays with them." },
    { title: "Flexible terms", text: "Month-to-month engagement with no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "How do you assess Java developers?",
      a: "Each candidate reviews and extends an existing Java codebase, then explains the changes in a live technical interview. We also check how clearly they communicate.",
    },
    {
      q: "Do your developers work with Spring Boot?",
      a: "Yes. Spring Boot is the most common framework in the roles we fill. If you use something else, such as Quarkus or Micronaut, tell us and we shortlist for it.",
    },
    {
      q: "Can they maintain an older Java 8 application?",
      a: "Yes. Many production systems still run on older releases. The developer can maintain the application as it is and propose an upgrade path when you are ready.",
    },
    {
      q: "Do they also know Kotlin?",
      a: "Some do. Kotlin runs on the JVM and works alongside Java code. Tell us if it is part of your stack.",
    },
    {
      q: "Who owns the intellectual property?",
      a: "You own all code and IP. An NDA is signed before code access, and commits go to your repositories.",
    },
    {
      q: "What happens if the developer does not work out?",
      a: "We replace them. The engagement is month to month and there is no exit fee if you decide to stop.",
    },
  ],
};

export default data;
