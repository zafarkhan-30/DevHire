import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "ai-automation",
  name: "AI And Automation",
  group: "build",
  icon: "brain",
  summary: "AI assistants, document processing and workflow automation, with a person approving the risky steps.",
  meta: {
    title: "AI And Automation Development",
    description:
      "AI assistants, language model integrations and workflow automation built by SyntaxHires. Tested against your own data, with human review where it matters.",
  },
  hero: {
    title: "AI And Automation That [Does Real Work]",
    text: "We add AI to products and automate repetitive work, and we test the result against your own data before anyone relies on it.",
    bullets: ["Tested on your own examples", "Human approval for risky steps", "Your data stays under your control"],
  },
  intro: {
    title: "Where [AI And Automation] Help",
    paragraphs: [
      "AI is useful for work that involves reading, summarising, classifying or drafting. Automation is useful for steps that follow fixed rules. Most real projects combine the two: rules where the answer must be exact, a language model where judgement is needed.",
      "We start from the task, not the technology. If ordinary code solves the problem more reliably, we say so.",
    ],
    aside: {
      title: "In short",
      items: ["AI assistants and chat", "Document and data extraction", "Workflow automation", "Integration with your systems"],
    },
  },
  build: {
    title: "What We [Build]",
    items: [
      { icon: "message", title: "AI Assistants", text: "Assistants that answer questions from your own documents and data.", href: "/solutions/custom-ai-assistant-development/", linkLabel: "Custom AI assistants" },
      { icon: "file", title: "Document Processing", text: "Reading invoices, forms and contracts and putting the details into your systems." },
      { icon: "settings", title: "Workflow Automation", text: "Multi-step back-office tasks carried out automatically, with approval where needed." },
      { icon: "network", title: "Model Integrations", text: "Language model features added to a product you already have." },
      { icon: "search", title: "Search Over Your Data", text: "Search that understands the question, across documents, tickets and records." },
      { icon: "chart", title: "Evaluation And Monitoring", text: "Test sets and checks that show whether answers are correct, before and after launch." },
    ],
  },
  audience: [
    { icon: "briefcase", title: "Operations Leaders", text: "Your team spends hours on repetitive reading, copying and checking." },
    { icon: "rocket", title: "Product Owners", text: "You want to add an AI feature to a product and need it to be dependable." },
    { icon: "code", title: "Engineering Leaders", text: "You have a prototype that works in a demo and need it ready for production." },
  ],
  approach: {
    title: "How An AI Project [Runs]",
    items: [
      { title: "Choose The Task", text: "We pick one task with a clear measure of success." },
      { title: "Collect Examples", text: "Real inputs and the correct outputs, used to test every version." },
      { title: "Build And Test", text: "We build, measure against the examples and improve." },
      { title: "Add Safeguards", text: "Human approval, limits and logging for steps that carry risk." },
      { title: "Release And Monitor", text: "A gradual release, with checks that catch a drop in quality." },
    ],
  },
  deliverables: [
    { icon: "git", title: "Source Code", text: "Code, prompts and configuration in your repository." },
    { icon: "check", title: "Test Set", text: "The examples and results used to measure quality." },
    { icon: "file", title: "Documentation", text: "How it works, what it costs to run and its known limits." },
    { icon: "lock", title: "Ownership", text: "Code and IP assigned to you by contract." },
  ],
  stack: [
    { label: "AI Developers", href: "/hire/ai-developers/" },
    { label: "Agentic AI", href: "/hire/agentic-ai-developers/" },
    { label: "ChatGPT Integration", href: "/hire/chatgpt-integration-developers/" },
    { label: "Python", href: "/hire/python-developers/" },
    { label: "Data Engineering", href: "/hire/data-engineer/" },
    { label: "Custom AI Assistant", href: "/solutions/custom-ai-assistant-development/" },
  ],
  faqs: [
    {
      q: "How do you know the AI gives correct answers?",
      a: "We build a set of real examples with known correct answers and measure every version against it. You see the results before anything is released. No language model is right every time, so we also add human review where a mistake would be costly.",
    },
    {
      q: "Is our data used to train public models?",
      a: "We set up the integration so that your data is not used for training, using the provider's business terms, and we tell you which provider and settings are in use. Where data must not leave your environment, we discuss models that can run inside it.",
    },
    {
      q: "Which AI models do you use?",
      a: "We choose the model to suit the task, the budget and your data requirements, and we design the system so the model can be changed later.",
    },
    {
      q: "What does it cost to run?",
      a: "Running cost depends on usage and the model chosen. We estimate it during the project from real test volumes and document it, so there are no surprises after launch.",
    },
    {
      q: "Can you automate a process that does not need AI?",
      a: "Yes. If fixed rules solve the problem, ordinary automation is more reliable and cheaper to run. We recommend whichever fits.",
    },
  ],
};

export default service;
