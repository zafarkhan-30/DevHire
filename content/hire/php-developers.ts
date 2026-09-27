import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "php-developers",
  name: "PHP",
  role: "PHP Developers",
  category: "backend",
  meta: {
    title: "Hire PHP Developers",
    description:
      "Hire PHP developers for Laravel, Symfony, WordPress and legacy upgrades. They work in your repository. Interview first, month-to-month terms.",
  },
  hook: "A PHP application that earns revenue still needs upgrades, and the work is put off because nobody wants to touch the old code.",
  focus: "Web Platforms, Online Stores & Content Sites",
  heroText:
    "PHP engineers who write modern, typed PHP with Laravel or Symfony, and who can also work through older code without breaking what already runs.",
  heroBullets: [
    "Current PHP 8 features and Composer workflows",
    "Laravel, Symfony and WordPress experience",
    "Commits to your repository under your review rules",
    "Meet and interview the developer first",
  ],
  build: [
    {
      label: "SaaS and Web Platforms",
      icon: "globe",
      text: "Multi-tenant products with subscriptions, roles, queues and an API for integrations.",
      stack: ["Laravel", "PHP 8", "MySQL", "Redis"],
      outcome: "Common features come from the framework, so effort goes into what is specific to your product.",
    },
    {
      label: "Online Stores",
      icon: "cart",
      text: "Catalogue, checkout and order management on an established commerce platform or a custom build.",
      stack: ["WooCommerce", "Magento Open Source", "MySQL", "Elasticsearch"],
      outcome: "Your staff manage promotions, stock and orders without asking a developer.",
    },
    {
      label: "Content Sites and CMS Work",
      icon: "file",
      text: "Custom themes, plugins and editorial workflows on WordPress or Drupal.",
      stack: ["WordPress", "Drupal", "PHP", "MySQL"],
      outcome: "Editors publish on their own, and custom features survive core updates.",
    },
    {
      label: "APIs for Web and Mobile",
      icon: "server",
      text: "JSON APIs with authentication, validation and documentation generated from the code.",
      stack: ["Symfony", "API Platform", "PostgreSQL", "PHPUnit"],
      outcome: "Web and mobile clients share one back end with the same rules.",
    },
    {
      label: "Legacy PHP Upgrades",
      icon: "refresh",
      text: "Moving PHP 5 or early PHP 7 code to a supported release, with static analysis and tests added along the way.",
      stack: ["PHP 8", "Rector", "PHPStan", "PHPUnit"],
      outcome: "The application runs on a version that still receives security fixes.",
    },
  ],
  fact: {
    text: "PHP is free software, and changes to the language are proposed, discussed and voted on through a public RFC process.",
    source: "PHP documentation and the PHP RFC wiki",
  },
  skills: [
    {
      title: "Modern PHP",
      text: "Strict types, enums, readonly properties and attributes, with dependencies managed through Composer.",
      chips: ["PHP 8", "Composer", "PSR Standards"],
    },
    {
      title: "Laravel",
      text: "Routing, queues, events and the ORM, used without hiding business logic in controllers.",
      chips: ["Laravel", "Eloquent", "Livewire"],
    },
    {
      title: "Symfony",
      text: "Components, the service container and bundles for larger, long-lived applications.",
      chips: ["Symfony", "Doctrine", "Twig"],
    },
    {
      title: "CMS and commerce platforms",
      text: "Themes, plugins and modules written to each platform's standards so updates stay possible.",
      chips: ["WordPress", "Drupal", "Magento"],
    },
    {
      title: "Databases",
      text: "Schema design, indexing and slow query analysis, plus caching where it helps.",
      chips: ["MySQL", "PostgreSQL", "Redis"],
    },
    {
      title: "Testing and static analysis",
      text: "Automated tests and analysis tools that find type errors in code that has no tests yet.",
      chips: ["PHPUnit", "Pest", "PHPStan"],
    },
    {
      title: "Security",
      text: "Prepared statements, output escaping, CSRF protection and prompt dependency updates.",
      chips: ["OWASP", "CSRF Protection", "Prepared Statements"],
    },
    {
      title: "Deployment",
      text: "Container images, web server configuration and zero-downtime release scripts.",
      chips: ["Docker", "Nginx", "PHP-FPM"],
    },
  ],
  versions: [
    { version: "PHP Tools", year: "1995", tag: "First release", text: "Rasmus Lerdorf released the first version to the public." },
    { version: "PHP 5", year: "2004", tag: "Objects", text: "A new object model arrived with Zend Engine II." },
    { version: "PHP 7.0", year: "2015", tag: "Speed", text: "A large performance improvement, plus scalar type declarations and return types." },
    { version: "PHP 8.0", year: "2020", tag: "JIT", text: "A JIT compiler, named arguments, attributes, union types and match expressions." },
    { version: "PHP 8.1", year: "2021", tag: "Enums", text: "Enums, readonly properties and fibers." },
    { version: "PHP 8.4", year: "2024", tag: "Property hooks", text: "Property hooks and asymmetric visibility." },
  ],
  chooseWhen: [
    { title: "The product is a web application", text: "PHP was made for the request and response cycle and handles it well." },
    { title: "You want a wide choice of hosting", text: "PHP runs on almost any host, from shared plans to containers." },
    { title: "A CMS or store platform fits the need", text: "WordPress, Drupal and Magento are written in PHP and are extended with it." },
    { title: "You want a full-stack framework", text: "Laravel and Symfony include routing, queues, mail and authentication." },
  ],
  chooseNot: [
    { title: "You need long-lived connections", text: "Standard PHP handles one request per process and then exits. Node.js or Go suit persistent sockets better." },
    { title: "The workload is heavy computation", text: "Number crunching and media processing are better placed in Go, Rust or Java." },
    { title: "Machine learning is central", text: "Python has the libraries and the community for that work." },
  ],
  whyUs: [
    { title: "Modern and legacy PHP", text: "We shortlist for your situation, whether that is a new Laravel build or an older application that needs care." },
    { title: "Assessed on existing code", text: "Candidates review and extend a PHP project they did not write, which is what most PHP work involves." },
    { title: "Interview before you decide", text: "You meet the developer and look at their code before any contract." },
    { title: "Works as part of your team", text: "The developer uses your repository and tools, and works for one client only." },
    { title: "Month to month", text: "No exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "How are PHP developers assessed?",
      a: "They review and extend an existing PHP codebase, take part in a live technical interview, and complete a communication check.",
    },
    {
      q: "Laravel or Symfony: which do your developers use?",
      a: "Both. Laravel is common for products that need to move quickly. Symfony is common in larger, long-lived systems. Tell us which you run.",
    },
    {
      q: "Can they work on WordPress and WooCommerce?",
      a: "Yes. That includes custom themes, plugins, performance work and integrations, written so that core updates remain possible.",
    },
    {
      q: "Can they upgrade an old PHP application?",
      a: "Yes. The developer adds static analysis and tests first, then upgrades in small steps so each change can be checked.",
    },
    {
      q: "Who owns what is built?",
      a: "You do. All code and IP belong to you. An NDA is signed before code access.",
    },
    {
      q: "What if we need to stop?",
      a: "Terms are month to month and there is no exit fee.",
    },
  ],
};

export default data;
