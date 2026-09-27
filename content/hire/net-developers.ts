import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "net-developers",
  name: ".NET",
  role: ".NET Developers",
  category: "backend",
  meta: {
    title: "Hire .NET Developers",
    description:
      "Hire .NET developers for ASP.NET Core APIs, business applications and .NET Framework migrations. Interview first, month-to-month terms.",
  },
  hook: "Older .NET Framework applications hold the business together, and few teams have spare people to maintain them and build the replacement.",
  focus: "Business Applications, Web APIs & Azure Workloads",
  heroText:
    "C# engineers who work across ASP.NET Core and older .NET Framework code, know SQL Server well, and can plan a migration without stopping delivery.",
  heroBullets: [
    "C#, ASP.NET Core and Entity Framework Core",
    "At home with SQL Server and Azure services",
    "Uses your repository, pipelines and review rules",
    "Interview first, contract second",
  ],
  build: [
    {
      label: "Line-of-Business Applications",
      icon: "briefcase",
      text: "Internal systems for orders, stock, claims or scheduling, with permissions and reporting.",
      stack: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework Core"],
      outcome: "Staff work in one system instead of several spreadsheets and email threads.",
    },
    {
      label: "Web APIs",
      icon: "server",
      text: "Documented HTTP and gRPC APIs with authentication, versioning and health checks.",
      stack: ["ASP.NET Core", "Minimal APIs", "gRPC", "OpenAPI"],
      outcome: "Partners and client apps integrate against a stable, documented surface.",
    },
    {
      label: "Framework to Modern .NET Migration",
      icon: "refresh",
      text: "Moving Web Forms, WCF or MVC 5 applications to current .NET in stages.",
      stack: [".NET 8", "ASP.NET Core", "YARP", "xUnit"],
      outcome: "The old application keeps serving users while routes move across one at a time.",
    },
    {
      label: "Cloud Services on Azure",
      icon: "cloud",
      text: "Functions, queues and hosted services that process events and scale with demand.",
      stack: ["Azure Functions", "Azure Service Bus", "Azure SQL", "Docker"],
      outcome: "Background processing no longer depends on a single server that someone patches by hand.",
    },
    {
      label: "Internal Portals with Blazor",
      icon: "monitor",
      text: "Interactive web interfaces written in C# for teams that do not want a separate JavaScript stack.",
      stack: ["Blazor", "C#", "SignalR", "MudBlazor"],
      outcome: "One language covers the browser and the server, which suits a small team.",
    },
  ],
  fact: {
    text: ".NET is open source and cross-platform, with its runtime and libraries developed in public repositories and supported by Microsoft.",
    source: "Microsoft .NET documentation",
  },
  skills: [
    {
      title: "C# language",
      text: "Async and await, LINQ, generics, records and nullable reference types.",
      chips: ["C#", "LINQ", "async/await"],
    },
    {
      title: "ASP.NET Core",
      text: "Middleware, dependency injection, configuration and hosting, for both MVC and minimal APIs.",
      chips: ["ASP.NET Core", "Minimal APIs", "MVC"],
    },
    {
      title: "Data access",
      text: "Migrations, query plans and indexing, with a micro-ORM or stored procedures where they already exist.",
      chips: ["Entity Framework Core", "Dapper", "SQL Server"],
    },
    {
      title: "Legacy .NET Framework",
      text: "Web Forms, WCF and Windows services, read with patience and changed with tests in place.",
      chips: ["Web Forms", "WCF", "MVC 5"],
    },
    {
      title: "Azure",
      text: "Hosting, messaging, storage and identity services, deployed through infrastructure as code.",
      chips: ["Azure Functions", "App Service", "Service Bus"],
    },
    {
      title: "Testing",
      text: "Unit tests, integration tests with a test host, and mocks kept to the boundaries.",
      chips: ["xUnit", "NUnit", "Moq"],
    },
    {
      title: "Messaging and real time",
      text: "Message-driven services and live updates pushed to browsers and devices.",
      chips: ["SignalR", "MassTransit", "RabbitMQ"],
    },
    {
      title: "Delivery",
      text: "Build and release pipelines, container images and environment configuration.",
      chips: ["Azure DevOps", "GitHub Actions", "Docker"],
    },
  ],
  versions: [
    { version: ".NET Framework 1.0", year: "2002", tag: "First release", text: "Microsoft released the first version, with C# and the Common Language Runtime." },
    { version: ".NET Core 1.0", year: "2016", tag: "Cross-platform", text: "An open source implementation that runs on Windows, Linux and macOS." },
    { version: ".NET 5", year: "2020", tag: "Unified", text: "Dropped the Core name and began a single product line with yearly releases." },
    { version: ".NET 6", year: "2021", tag: "LTS", text: "Long-term support release that added minimal APIs and hot reload." },
    { version: ".NET 8", year: "2023", tag: "LTS", text: "Long-term support release with wider native AOT support and full-stack Blazor." },
    { version: ".NET 10", year: "2025", tag: "LTS", text: "Long-term support release, shipped alongside C# 14." },
  ],
  chooseWhen: [
    { title: "You run on Microsoft infrastructure", text: "Windows Server, SQL Server, Active Directory and Azure fit together with little glue." },
    { title: "The product is a long-lived business system", text: "Strong typing and first-party tooling make a large codebase easier to maintain." },
    { title: "You want one language across layers", text: "C# covers APIs, background services, desktop and, with Blazor, the browser." },
    { title: "The server must handle heavy traffic", text: "ASP.NET Core copes well with high request volumes and runs in Linux containers." },
  ],
  chooseNot: [
    { title: "Your team lives in another ecosystem", text: "If your engineers and libraries are all JVM or Node.js, adding .NET splits your skills." },
    { title: "The core of the work is data science", text: "Python has the wider set of modelling libraries." },
    { title: "You are writing low-level system code", text: "Rust or C++ give finer control over memory and hardware." },
    { title: "The site is mostly content", text: "A CMS or static site generator is simpler to run." },
  ],
  whyUs: [
    { title: "Old and new .NET", text: "We shortlist for the version you run, whether that is .NET Framework, current .NET or both during a migration." },
    { title: "Screening on real code", text: "Candidates review and change an existing C# solution, which shows how they handle code they did not write." },
    { title: "You interview first", text: "No contract is signed until you have met the developer and are satisfied." },
    { title: "Embedded in your tools", text: "The developer works in your repository, pipelines and boards, for your team alone." },
    { title: "No lock-in", text: "Terms are month to month with no exit fee. If the fit is wrong, we replace the developer." },
  ],
  faqs: [
    {
      q: "How are .NET developers screened?",
      a: "Candidates complete a code review and extension exercise on an existing C# project, followed by a live technical interview and a communication check.",
    },
    {
      q: "Can they work on .NET Framework as well as modern .NET?",
      a: "Yes. Tell us which versions you run. Many roles involve keeping a Framework application stable while new work is built on current .NET.",
    },
    {
      q: "Can the developer help plan a migration from .NET Framework?",
      a: "Yes. They can assess which parts move easily, which need rewriting, and propose an order of work. Larger programmes can run through our legacy modernisation service.",
    },
    {
      q: "Do they have Azure experience?",
      a: "Many do. If you depend on particular services, such as Functions or Service Bus, tell us and we shortlist for them.",
    },
    {
      q: "Does SyntaxHires keep any rights to the code?",
      a: "No. You own all code and IP. An NDA is signed before code access and all work is committed to your repositories.",
    },
    {
      q: "Can we grow or reduce the team later?",
      a: "Yes. Terms are month to month with no exit fee, so the team can change as your roadmap does.",
    },
  ],
};

export default data;
