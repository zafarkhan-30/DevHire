import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "yii-developers",
  name: "Yii",
  role: "Yii Developers",
  category: "backend",
  meta: {
    title: "Hire Yii Developers",
    description:
      "Hire Yii developers to maintain, upgrade and modernise existing Yii applications. They work in your repository. Month-to-month terms.",
  },
  hook: "An application built on Yii years ago still runs the business, but the people who understood it have moved on.",
  focus: "Maintenance, Upgrades & Phased Migration",
  heroText:
    "Yii engineers who are at home in older codebases. They keep Yii 1.1 and Yii 2 applications running, bring PHP and dependencies up to date, and plan migrations that do not stop the business.",
  heroBullets: [
    "Experience with both Yii 1.1 and Yii 2 codebases",
    "PHP version upgrades planned and tested in stages",
    "Tests added around old code before it is changed",
    "Meet the developer before you commit to anything",
  ],
  build: [
    {
      label: "Yii 1.1 to Yii 2 Migration",
      icon: "refresh",
      text: "Controllers, models and widgets rewritten for Yii 2 module by module, with both versions serving requests during the move.",
      stack: ["Yii 1.1", "Yii 2", "Composer", "Codeception"],
      outcome: "Users keep working while the old framework is phased out.",
    },
    {
      label: "PHP Version Upgrades",
      icon: "shield",
      text: "Moving applications off unsupported PHP releases, fixing deprecations and replacing abandoned extensions.",
      stack: ["PHP 8", "Rector", "PHPStan", "Composer"],
      outcome: "The application runs on a PHP release that still receives security fixes.",
    },
    {
      label: "Ongoing Maintenance",
      icon: "wrench",
      text: "Bug fixes, small features and dependency updates for systems that are stable but still need care.",
      stack: ["Yii 2", "MySQL", "Gii", "Git"],
      outcome: "Requests from the business are handled without waiting for a rewrite.",
    },
    {
      label: "APIs for Existing Applications",
      icon: "network",
      text: "REST endpoints added on top of existing models so that mobile apps and new front ends can use the same data.",
      stack: ["Yii 2 REST", "OAuth 2", "JSON", "OpenAPI"],
      outcome: "New products reuse the business logic you already have.",
    },
    {
      label: "Phased Move to Another Framework",
      icon: "compass",
      text: "Where Yii is no longer the right home, routes move to Laravel or Symfony one at a time behind a shared entry point.",
      stack: ["Yii 2", "Laravel", "Symfony", "Nginx"],
      outcome: "Risk is spread across many small releases instead of one large cutover.",
    },
  ],
  fact: {
    text: "Yii 2.0 was a complete rewrite of the framework, so moving an application from version 1.1 is a migration project and not a routine upgrade.",
    source: "The Definitive Guide to Yii 2.0",
  },
  skills: [
    {
      title: "Reading legacy code",
      text: "Tracing behaviour through controllers, behaviours and widgets when there is no documentation to lean on.",
      chips: ["Yii 1.1", "Yii 2", "Xdebug"],
    },
    {
      title: "Active Record and query tuning",
      text: "Finding slow queries, removing repeated lookups and adding indexes without changing results.",
      chips: ["Active Record", "Query Builder", "MySQL"],
    },
    {
      title: "Tests around existing behaviour",
      text: "Tests that record what the system does today, so a refactor can be checked against them.",
      chips: ["Codeception", "PHPUnit", "Fixtures"],
    },
    {
      title: "PHP upgrades",
      text: "Automated refactoring for the mechanical changes and careful review for the ones that alter behaviour.",
      chips: ["PHP 8", "Rector", "PHPStan"],
    },
    {
      title: "Dependency management",
      text: "Moving copied-in libraries under Composer and replacing packages that are no longer maintained.",
      chips: ["Composer", "Packagist", "Version Constraints"],
    },
    {
      title: "Access control and security",
      text: "Reviewing role checks, input validation and session handling in code written to older standards.",
      chips: ["RBAC", "CSRF Protection", "Input Validation"],
    },
    {
      title: "Caching and performance",
      text: "Fragment, data and query caching applied where profiling shows it helps.",
      chips: ["Redis", "Memcached", "Query Caching"],
    },
    {
      title: "Deployment",
      text: "Repeatable, scripted releases in place of manual file uploads and hand-run SQL.",
      chips: ["Docker", "GitHub Actions", "Database Migrations"],
    },
  ],
  versions: [
    { version: "Yii 1.0", year: "2008", tag: "First release", text: "The first stable release, led by Qiang Xue, with MVC, Active Record and caching." },
    { version: "Yii 1.1", year: "2010", tag: "Long-lived line", text: "The release line that many older production applications still run on." },
    { version: "Yii 2.0 preview", year: "2013", tag: "Public preview", text: "The Yii 2 code was opened to the community ahead of the stable release." },
    { version: "Yii 2.0", year: "2014", tag: "Rewrite", text: "A full rewrite built on namespaces, Composer and the PSR standards." },
  ],
  chooseWhen: [
    { title: "The application works and earns its keep", text: "Maintaining a stable system usually costs less than rewriting it." },
    { title: "You run an old Yii or PHP release", text: "A staged upgrade removes the security exposure without changing how users work." },
    { title: "Business rules are buried in the code", text: "A developer who reads Yii fluently can document and test those rules before anything moves." },
    { title: "You want a gradual migration", text: "Moving one module at a time keeps the system in service and lets you stop at any point." },
  ],
  chooseNot: [
    { title: "You are starting a new product", text: "A framework with a larger hiring pool and ecosystem is a safer choice for a first version." },
    { title: "The application is small enough to rebuild", text: "When the scope is a handful of screens, rebuilding on a current stack can be simpler than upgrading." },
    { title: "Nobody can say what the system should do", text: "Without an owner for the requirements, neither maintenance nor migration goes well. Settle that first." },
  ],
  whyUs: [
    { title: "Assessed on an old codebase", text: "Candidates are given existing Yii code to read, explain and change, which is the work they will do for you." },
    { title: "You interview first", text: "You speak to the developer and judge their understanding of legacy systems before any contract." },
    { title: "Knowledge stays in one place", text: "The developer works only on your application, so what they learn about it is not lost to other projects." },
    { title: "Your repository, your process", text: "Work is committed to your repository and goes through your reviews and release steps." },
    { title: "No lock-in", text: "Month-to-month terms, no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Can you supply developers for Yii 1.1 as well as Yii 2?",
      a: "Tell us the Yii and PHP versions you run. We shortlist only people who have maintained that release line in production, and you interview them before deciding.",
    },
    {
      q: "Should we upgrade to Yii 2 or move to another framework?",
      a: "It depends on the size of the codebase, its test coverage and your hiring plans. The developer can assess the application and set out the options with their trade-offs. The decision stays with you.",
    },
    {
      q: "Is Yii 3 an upgrade path?",
      a: "Yii 3 is a separate, package-based framework and not a drop-in upgrade from Yii 2. Moving to it is a migration, and should be weighed against the other options in the same way.",
    },
    {
      q: "Our application has no documentation or tests. Is that a problem?",
      a: "It is common. The work starts with reading the code, writing down how it behaves and adding tests around the riskiest parts. Changes follow once that safety net exists.",
    },
    {
      q: "Who owns the code that is written?",
      a: "You do. The contract assigns all work and intellectual property to you, and the code lives in your repository throughout.",
    },
    {
      q: "What happens if the developer is not the right fit?",
      a: "Tell us and we provide a replacement. Terms are month to month, so you can also end the engagement without an exit fee.",
    },
  ],
};

export default data;
