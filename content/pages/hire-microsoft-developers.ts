import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
// SyntaxHires claims no Microsoft partner status or certification on this page. Add one only if SyntaxHires holds it.
const page: PageDef = {
  path: "/hire/microsoft-developers/",
  meta: {
    title: "Hire Microsoft Developers",
    description:
      "Hire developers for .NET, Azure, SQL Server, Power Platform, Dynamics 365 and SharePoint. Interview first, month-to-month terms, and you own the code.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "center",
      eyebrow: "Hire Microsoft Developers",
      title: "Developers For The [Microsoft Stack] You Already Run",
      text: "Engineers for .NET, Azure, SQL Server, Power Platform, Dynamics 365 and SharePoint. They work in your tenant, your repository and your release process.",
      ctas: [
        { label: "Hire Microsoft Developers", href: "#brief" },
        { label: "Talk To A Consultant", href: "/contact-us/", variant: "outline" },
      ],
      note: "You interview the developer before any contract.",
    },
    {
      // PLACEHOLDER: five verified SyntaxHires figures for Microsoft stack work. Replace every value and confirm each label.
      type: "stats",
      tone: "muted",
      pad: "xs",
      items: [
        { value: "—", label: "Microsoft stack engineers placed" },
        { value: "—", label: "Projects delivered" },
        { value: "—", label: "Average engagement length" },
        { value: "—", label: "Industries served" },
        { value: "—", label: "Client rating" },
      ],
    },
    {
      type: "accordion",
      title: "Three Ways To [Work With Us]",
      align: "center",
      intro: "Pick the one that matches where you are. You can move between them as the work changes.",
      items: [
        {
          title: "Build",
          text: "You have a roadmap and need more capacity. Our developers join your team and build new services, integrations and applications on the Microsoft stack. You set priorities and review the work.",
          chips: ["Feature delivery", "Your repository", "Your sprint"],
        },
        {
          title: "Advise",
          text: "You face a decision: which Azure services to use, whether Power Platform or custom code suits a process, or how to structure a Dynamics 365 customisation. A senior engineer reviews the options and writes down a recommendation with the trade-offs.",
          chips: ["Architecture review", "Build or configure", "Written recommendation"],
        },
        {
          title: "Modernise",
          text: "You run applications on .NET Framework, older SQL Server versions or on-premises SharePoint. We assess what can move, plan the migration in stages and keep the current system running while the work is done.",
          chips: [".NET Framework to modern .NET", "On-premises to Azure", "Staged migration"],
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "The [Microsoft Ecosystem] Our Developers Work In",
      align: "center",
      intro: "Six areas, often used together. We match developers to the areas you need.",
      columns: 3,
      items: [
        {
          icon: "code",
          title: ".NET",
          text: "Application development in C# on modern .NET, and maintenance of .NET Framework systems.",
          list: ["ASP.NET Core web apps and APIs", "Entity Framework Core", "Blazor", ".NET MAUI for cross-platform apps"],
        },
        {
          icon: "cloud",
          title: "Azure",
          text: "Hosting, integration and operations on Microsoft's cloud platform.",
          list: ["App Service, Functions and Azure Kubernetes Service", "Service Bus and Event Grid", "Microsoft Entra ID for identity", "Bicep, Azure DevOps and GitHub Actions"],
        },
        {
          icon: "database",
          title: "SQL Server",
          text: "Database design, tuning and migration for SQL Server and Azure SQL.",
          list: ["T-SQL and stored procedures", "Indexing and query tuning", "SQL Server Integration Services", "Migration to Azure SQL"],
        },
        {
          icon: "zap",
          title: "Power Platform",
          text: "Low-code applications, automation and reporting, with professional development practices around them.",
          list: ["Power Apps", "Power Automate", "Power BI", "Dataverse and solution management"],
        },
        {
          icon: "briefcase",
          title: "Dynamics 365",
          text: "Customisation and integration of Dynamics 365 business applications.",
          list: ["Customer engagement apps", "Business Central", "Plug-ins and custom workflows", "Integration with other systems"],
        },
        {
          icon: "layers",
          title: "SharePoint",
          text: "Intranets, document management and migration from on-premises to SharePoint Online.",
          list: ["SharePoint Framework web parts", "Microsoft Graph", "Content migration", "Permissions and information architecture"],
        },
      ],
      footnote: "Product names belong to Microsoft. SyntaxHires is an independent staffing company.",
    },
    {
      type: "split",
      title: "Build Or [Advise]: Which Do You Need?",
      align: "center",
      intro: "Both start with a conversation. They differ in what you receive at the end.",
      panels: [
        {
          title: "Build",
          mood: "good",
          items: [
            { title: "You have", text: "A backlog, an environment and someone who can review the work." },
            { title: "We provide", text: "Developers who join your team and write production code in your repository." },
            { title: "You receive", text: "Working software, tests and documentation, delivered through your release process." },
            { title: "Commercial model", text: "Monthly per engineer, on month-to-month terms." },
          ],
        },
        {
          title: "Advise",
          mood: "neutral",
          items: [
            { title: "You have", text: "A decision to make about architecture, licensing impact or migration order." },
            { title: "We provide", text: "A senior engineer who studies your current setup and the options." },
            { title: "You receive", text: "A written recommendation with options, trade-offs and a suggested first step." },
            { title: "Commercial model", text: "A scoped piece of work agreed in writing before it starts." },
          ],
        },
      ],
      footnote: "We describe technical trade-offs. For licensing terms, confirm with Microsoft or your licensing provider.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "Tell Us [What You Need]",
      align: "center",
      intro: "Common problems we hear, and how we would usually approach each one.",
      columns: 2,
      items: [
        {
          icon: "refresh",
          title: "Our core application still runs on .NET Framework",
          text: "Assess dependencies first. Move shared libraries to a common target, then migrate one application or service at a time to modern .NET while the rest keeps running.",
        },
        {
          icon: "cloud",
          title: "We want to move on-premises workloads to Azure",
          text: "Group workloads by risk and dependency. Decide per workload whether to rehost, refactor or replace. Migrate in stages with a rollback plan for each.",
        },
        {
          icon: "database",
          title: "Reports and screens are slow and getting slower",
          text: "Measure before changing anything. Review query plans, indexes and data volumes in SQL Server, then fix the queries that cost the most.",
        },
        {
          icon: "layers",
          title: "Business teams built dozens of Power Apps with no oversight",
          text: "Take an inventory, identify the apps the business depends on, and put those under solution management with environments, source control and an owner.",
        },
        {
          icon: "network",
          title: "Dynamics 365 does not talk to our other systems",
          text: "Define which system owns each record. Build integrations through supported APIs with retries, logging and alerts, so failures are visible.",
        },
        {
          icon: "file",
          title: "Our SharePoint site is a maze and nobody trusts search",
          text: "Review the information architecture, permissions and metadata. Clean up before migrating, so old problems do not move to the new site.",
        },
        {
          icon: "lock",
          title: "Sign-in is handled differently in every application",
          text: "Standardise on a single identity provider such as Microsoft Entra ID, using standard protocols, and retire custom login code in stages.",
        },
        {
          icon: "git",
          title: "Releases are manual and everyone dreads them",
          text: "Build a pipeline in Azure DevOps or GitHub Actions with automated builds, tests and repeatable deployments. Start with one application and extend.",
        },
      ],
    },
    {
      type: "cards",
      tone: "dark",
      title: "Working [Standards]",
      align: "center",
      intro: "These are habits we expect from every developer we place. They are working practices, not certifications.",
      columns: 3,
      items: [
        { icon: "git", title: "Everything in source control", text: "Application code, database changes, infrastructure definitions and Power Platform solutions are versioned and reviewed." },
        { icon: "check", title: "Tests with the change", text: "New code arrives with automated tests. Legacy code gets tests around it before it is changed." },
        { icon: "lock", title: "Least privilege access", text: "Developers request only the access the task needs and follow your policies for credentials and devices." },
        { icon: "shield", title: "Supported paths first", text: "We use supported APIs and extension points, so platform updates are less likely to break your customisations." },
        { icon: "file", title: "Written decisions", text: "Significant technical decisions are recorded with the reasoning, so the next engineer understands why." },
        { icon: "eye", title: "Work you can see", text: "Tasks, pull requests and deployments are tracked in your tools, not in a separate system of ours." },
      ],
    },
    {
      type: "cards",
      title: "Engagement [Models]",
      align: "center",
      columns: 3,
      items: [
        { tag: "Individual", icon: "code", title: "One Developer", text: "A single engineer who joins your team and takes direction from your lead. Suits a specific skill gap." },
        { tag: "Team", icon: "users", title: "Dedicated Team", text: "A small team covering application, data and platform work, focused on one product or programme you define." },
        { tag: "Scoped", icon: "compass", title: "Advisory Review", text: "A senior engineer reviews an architecture or a migration plan and writes up findings and options." },
      ],
      footnote: "Developer engagements run month to month with no exit fee. If the fit is wrong, we replace the developer.",
    },
    {
      // PLACEHOLDER: replace with real developer profiles once SyntaxHires supplies them and each developer has approved publication.
      type: "cards",
      tone: "muted",
      title: "Developer [Profiles]",
      align: "center",
      intro: "Sample layout. Real profiles are shared after we understand your brief.",
      columns: 3,
      items: [
        {
          icon: "users",
          title: "Developer profile",
          text: "A real profile will show the developer's main areas of the Microsoft stack, years of relevant experience and their working hours overlap with your team.",
        },
        {
          icon: "users",
          title: "Developer profile",
          text: "A real profile will show recent projects described in the developer's own words, their role on each, and the products and versions involved.",
        },
        {
          icon: "users",
          title: "Developer profile",
          text: "A real profile will show code samples or a technical write-up you can review, and the developer's availability to interview.",
        },
      ],
    },
    {
      type: "testimonials",
      title: "What Clients [Say]",
      align: "center",
    },
    {
      type: "form",
      id: "brief",
      tone: "muted",
      title: "Send Us [Your Brief]",
      align: "left",
      intro: "A few lines is enough. Tell us which products you run, what needs to change and who will review the work.",
      lists: [
        { title: "Helpful to include", items: ["Products and versions in use", "Cloud, on-premises or both", "What is blocking you now", "Who will review the work"] },
        { title: "What you receive", items: ["Our view on build, advise or modernise", "A suggested team shape", "Profiles to review and interview"] },
      ],
      form: {
        title: "Describe What You Need",
        submit: "Send Brief",
        kind: "brief-microsoft",
        fields: ["name", "email", "company", "goal", "timeline", "message"],
        note: "We sign an NDA before you share code or data.",
      },
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Is SyntaxHires a Microsoft partner?",
          a: "This page makes no claim of partner status or certification. We are a staffing company that places developers who work with Microsoft technologies. Ask us about an individual developer's credentials when you review their profile.",
        },
        {
          q: "Can I interview the developer first?",
          a: "Yes. You interview every candidate before any contract. You can set a technical task if you wish, and you make the final decision.",
        },
        {
          q: "Do your developers work in our Azure tenant and repositories?",
          a: "Yes. Developers work in your repository, your tenant and your tools, with the access you grant. An NDA is signed before code access.",
        },
        {
          q: "Who owns the code and customisations?",
          a: "You do. All code and intellectual property created for you is assigned to you in the contract.",
        },
        {
          q: "What if the developer is not the right fit?",
          a: "Tell us. We first try to fix the problem. If that does not work, we replace the developer. Terms are month to month and there is no exit fee.",
        },
      ],
      button: { label: "Have More Questions?", href: "/faq/" },
    },
  ],
};

export default page;
