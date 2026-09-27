import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "salesforce-developers",
  name: "Salesforce",
  role: "Salesforce Developers",
  category: "cms",
  meta: {
    title: "Hire Salesforce Developers",
    description:
      "Hire Salesforce developers for Apex, Lightning Web Components, Flow and integrations. They work in your org. Month-to-month terms.",
  },
  hook: "A Salesforce org holds the business back when years of quick fixes have left automation that nobody dares to change.",
  focus: "Apex, Lightning Components & Integrations",
  heroText:
    "Salesforce engineers who write Apex and Lightning Web Components, know when Flow is the better tool, and keep governor limits in mind from the first line of code.",
  heroBullets: [
    "Apex, SOQL and Lightning Web Components",
    "Configuration first, code where it is needed",
    "Source-driven development with the Salesforce CLI",
    "You interview the developer before anything is signed",
  ],
  build: [
    {
      label: "Custom Lightning Apps",
      icon: "monitor",
      text: "Lightning Web Components and record pages shaped around how your sales or service team really works.",
      stack: ["Lightning Web Components", "Apex", "Lightning App Builder", "SOQL"],
      outcome: "Users finish a task on one screen instead of clicking through several.",
    },
    {
      label: "Process Automation",
      icon: "settings",
      text: "Approvals, record-triggered automation and scheduled jobs, including moving Workflow Rules and Process Builder to Flow.",
      stack: ["Flow", "Apex Triggers", "Platform Events", "Scheduled Apex"],
      outcome: "Each object has automation that can be read, tested and changed with confidence.",
    },
    {
      label: "System Integrations",
      icon: "network",
      text: "Connecting Salesforce to ERP, billing, marketing and support systems, with clear ownership of each record.",
      stack: ["REST API", "Bulk API", "Platform Events", "Named Credentials"],
      outcome: "Staff stop copying data between systems by hand.",
    },
    {
      label: "Org Clean-Up and Refactoring",
      icon: "wrench",
      text: "Consolidating triggers, removing unused fields and automation, and raising test coverage in orgs that grew without a plan.",
      stack: ["Apex", "Trigger Framework", "Salesforce CLI", "Apex Tests"],
      outcome: "Deployments stop failing on tests and limits that have nothing to do with the change.",
    },
    {
      label: "Data Migration",
      icon: "database",
      text: "Moving accounts, contacts and history from another CRM or an older org, with duplicates removed and data validated before load.",
      stack: ["Data Loader", "Bulk API", "External IDs", "SOQL"],
      outcome: "Teams start in the new org with records they can trust.",
    },
  ],
  fact: {
    text: "Salesforce requires Apex code to be covered by automated tests before it can be deployed to a production org.",
    source: "Salesforce Apex Developer Guide",
  },
  skills: [
    {
      title: "Apex",
      text: "Triggers that handle records in bulk, asynchronous jobs and service classes written with governor limits in mind.",
      chips: ["Apex", "Triggers", "Queueable Apex", "Batch Apex"],
    },
    {
      title: "Lightning Web Components",
      text: "Components built on web standards that load quickly and reuse platform data services.",
      chips: ["LWC", "JavaScript", "Lightning Data Service"],
    },
    {
      title: "Flow and declarative tools",
      text: "Automation that an administrator can maintain, kept separate from logic that belongs in code.",
      chips: ["Flow Builder", "Validation Rules", "Approval Processes"],
    },
    {
      title: "Data model and SOQL",
      text: "Objects and relationships designed for reporting, with selective queries that stay fast as data grows.",
      chips: ["SOQL", "Custom Objects", "Relationships"],
    },
    {
      title: "Integration",
      text: "Synchronous calls, bulk loads and event-driven messaging, each used where it fits.",
      chips: ["REST API", "Bulk API", "Platform Events"],
    },
    {
      title: "Security and sharing",
      text: "Access granted through permission sets and sharing rules, checked in code as well as in setup.",
      chips: ["Profiles", "Permission Sets", "Sharing Rules"],
    },
    {
      title: "Testing",
      text: "Tests that assert behaviour, not only coverage, with their own test data.",
      chips: ["Apex Tests", "Test Data Factories", "Jest"],
    },
    {
      title: "Release management",
      text: "Metadata in version control, changes built in scratch orgs or sandboxes, and deployments that can be repeated.",
      chips: ["Salesforce CLI", "Scratch Orgs", "Sandboxes"],
    },
  ],
  versions: [
    { version: "Salesforce CRM", year: "1999", tag: "Founded", text: "Salesforce was founded to deliver CRM software over the web." },
    { version: "AppExchange", year: "2005", tag: "Marketplace", text: "A marketplace for applications built by third parties on the platform." },
    { version: "Apex and Force.com", year: "2007", tag: "Custom code", text: "Customers could run their own server-side logic inside Salesforce." },
    { version: "Lightning Experience", year: "2015", tag: "New interface", text: "A redesigned user interface built on a component framework." },
    { version: "Salesforce DX", year: "2017", tag: "Source-driven", text: "Command-line tooling, scratch orgs and development based on version control." },
    { version: "Lightning Web Components", year: "2019", tag: "Web standards", text: "A component model based on standard JavaScript and web components." },
  ],
  chooseWhen: [
    { title: "Sales and service teams already work in Salesforce", text: "Building on the platform keeps users, data and permissions in one place." },
    { title: "Standard features nearly fit", text: "Targeted customisation closes the gap without replacing the CRM." },
    { title: "You need audit trails and fine-grained access", text: "Field history, sharing rules and permission sets come with the platform." },
    { title: "Several systems must share customer data", text: "Salesforce offers APIs and events designed for integration." },
  ],
  chooseNot: [
    { title: "The requirement can be met with configuration", text: "If an administrator can do it with standard settings, you do not need a developer." },
    { title: "You are building a public product with its own design", text: "A custom web application gives more freedom over interface and hosting." },
    { title: "The process is simple and the team is small", text: "A lighter CRM may cover the need with less to administer." },
  ],
  whyUs: [
    { title: "Assessed on an existing org", text: "Candidates review real Apex and automation, then explain what they would change and what they would leave alone." },
    { title: "You interview the developer", text: "You speak to the person who will do the work and test their judgement before any contract." },
    { title: "Focused on your org", text: "The developer serves a single client, so they learn your data model and your release calendar." },
    { title: "Inside your environments", text: "Work is done in your sandboxes and repository, under a user and permissions that you control." },
    { title: "Easy exit", text: "Month-to-month terms with no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Are your Salesforce developers certified?",
      a: "It varies by person. If a particular certification matters to you, say so in your brief and confirm it during the interview. We assess candidates on production experience, which a certificate alone does not show.",
    },
    {
      q: "Does the developer work in production?",
      a: "Development is done in sandboxes or scratch orgs and moves to production through your release process. The developer is given only the permissions the work requires.",
    },
    {
      q: "When should we use Flow and when Apex?",
      a: "Flow suits automation that administrators will maintain. Apex suits complex logic, large data volumes and integrations. A developer can review each case and recommend one, with reasons.",
    },
    {
      q: "Can the developer take over an org with a lot of technical debt?",
      a: "Yes. The usual start is a review of triggers, automation and test coverage, followed by a prioritised list. Clean-up then runs alongside new work.",
    },
    {
      q: "Which Salesforce products do you cover?",
      a: "Tell us which products you use, such as Sales Cloud, Service Cloud or Experience Cloud. We shortlist people with experience of those.",
    },
    {
      q: "Who owns the code and configuration?",
      a: "You do. Everything is built in your org and your repository, and the contract assigns all work to you.",
    },
  ],
};

export default data;
