import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "agentic-ai-developers",
  name: "Agentic AI",
  role: "Agentic AI Developers",
  category: "data",
  meta: {
    title: "Hire Agentic AI Developers",
    description:
      "Hire agentic AI developers to build agents, multi-agent workflows and guardrails inside your stack. Interview first. Month-to-month terms.",
  },
  hook: "Agent demos are quick to build and hard to trust, and closing that gap is engineering work most teams have not staffed for.",
  focus: "Autonomous Agents, Multi-Agent Workflows & Process Automation",
  heroText:
    "Engineers who build agents that call tools, follow a plan and stop when they should. They treat evaluation, permissions and cost as part of the build, not as cleanup afterwards.",
  heroBullets: [
    "Tool use, planning loops and memory designed with care",
    "Evaluation sets and guardrails written alongside the agent",
    "Works with the model provider and framework you choose",
    "You meet the engineer in an interview before you sign",
  ],
  build: [
    {
      label: "Task Automation Agents",
      icon: "settings",
      text: "Agents that carry out multi-step back-office work such as ticket triage, record matching or report preparation, with a person approving the risky steps.",
      stack: ["Python", "LangGraph", "OpenAI API", "PostgreSQL"],
      outcome: "Routine steps run on their own. People review the exceptions.",
    },
    {
      label: "Multi-Agent Orchestration",
      icon: "network",
      text: "Several specialised agents coordinated by a supervisor, each with a narrow job and limited permissions.",
      stack: ["Python", "LangGraph", "CrewAI", "Redis"],
      outcome: "Each agent can be tested, changed and replaced without disturbing the others.",
    },
    {
      label: "Tool and Data Connectors",
      icon: "wrench",
      text: "Tool servers and API wrappers that give agents controlled access to your internal systems.",
      stack: ["Model Context Protocol", "TypeScript", "FastAPI", "OAuth 2.0"],
      outcome: "An agent can reach the systems it needs and nothing beyond them.",
    },
    {
      label: "Research and Knowledge Agents",
      icon: "search",
      text: "Agents that search documents and internal data over several steps, then answer with references to the source.",
      stack: ["LlamaIndex", "pgvector", "Anthropic API", "Python"],
      outcome: "Staff can check an answer against the document it came from.",
    },
    {
      label: "Evaluation and Guardrails",
      icon: "shield",
      text: "Test sets, tracing and policy checks that show how an agent behaves before and after each change.",
      stack: ["LangSmith", "OpenTelemetry", "Pytest", "Docker"],
      outcome: "A prompt or model change is compared with a known baseline before release.",
    },
  ],
  fact: {
    text: "The Model Context Protocol is an open standard, introduced by Anthropic, for connecting AI applications to external tools and data sources.",
    source: "Model Context Protocol documentation",
  },
  skills: [
    {
      title: "Agent design",
      text: "Choosing between a fixed workflow and an open-ended loop, and keeping the design as simple as the task allows.",
      chips: ["Planning", "ReAct", "State Machines"],
    },
    {
      title: "Tool use",
      text: "Clear tool schemas, validated inputs and error messages the model can act on when a call fails.",
      chips: ["Function Calling", "JSON Schema", "MCP"],
    },
    {
      title: "Multi-agent orchestration",
      text: "Supervisor and handoff patterns, shared state and limits on how long agents may talk to each other.",
      chips: ["LangGraph", "AutoGen", "CrewAI"],
    },
    {
      title: "Memory and retrieval",
      text: "Deciding what an agent should remember, what it should look up and what should be dropped from context.",
      chips: ["Vector Search", "pgvector", "Context Management"],
    },
    {
      title: "Evaluation",
      text: "Test cases drawn from real tasks, automated graders and trace review, run on every change.",
      chips: ["Evals", "Tracing", "Regression Tests"],
    },
    {
      title: "Guardrails and permissions",
      text: "Least-privilege credentials, approval steps for actions that cannot be undone and defences against prompt injection.",
      chips: ["Human Approval", "Sandboxing", "Prompt Injection"],
    },
    {
      title: "Cost and latency control",
      text: "Smaller models for simple steps, cached prompts and hard limits on steps and tokens per run.",
      chips: ["Model Routing", "Prompt Caching", "Token Budgets"],
    },
    {
      title: "Production engineering",
      text: "Queues, retries, idempotent actions and logs, because an agent is still software that has to run every day.",
      chips: ["Python", "TypeScript", "Queues"],
    },
  ],
  versions: [
    { version: "ReAct", year: "2022", tag: "Research", text: "The ReAct paper described a loop in which a language model alternates between reasoning and acting through tools." },
    { version: "AutoGPT", year: "2023", tag: "Open source", text: "AutoGPT drew wide attention to agents that pursue a goal over many steps without a prompt at each one." },
    { version: "Function calling", year: "2023", tag: "Tool use", text: "OpenAI added function calling to its API, giving models a structured way to request a tool call." },
    { version: "Model Context Protocol", year: "2024", tag: "Open standard", text: "Anthropic introduced MCP as an open protocol for connecting models to tools and data." },
  ],
  chooseWhen: [
    { title: "The work has many steps and varies by case", text: "Where a fixed script breaks on every exception, an agent can choose the next step from what it finds." },
    { title: "Your systems already have APIs", text: "Agents act through tools. If the systems can be called from code, an agent can be given access to them." },
    { title: "Mistakes can be caught and reversed", text: "Drafts, approval steps and undoable actions make it safe to let an agent do the first pass." },
    { title: "You can say what good looks like", text: "With examples of correct results, the agent can be measured and improved instead of judged by feel." },
  ],
  chooseNot: [
    { title: "The process is fixed and predictable", text: "A plain workflow or script is cheaper, faster and easier to audit." },
    { title: "A single model call does the job", text: "Classification, extraction and summarising rarely need an agent around them." },
    { title: "A wrong action cannot be undone", text: "Where an error is costly and permanent, keep a person in charge of the action itself." },
    { title: "There is nothing to test against", text: "Without sample tasks and expected results, nobody can tell whether the agent is improving." },
  ],
  whyUs: [
    { title: "Production experience over demos", text: "We look for engineers who have run LLM features for real users and dealt with what goes wrong." },
    { title: "You speak to the engineer first", text: "You interview the person who will build the system, and ask about their past work, before any contract." },
    { title: "Your accounts and your keys", text: "Work happens in your repositories and under your model provider accounts. Prompts, code and evaluation data belong to you." },
    { title: "A single client at a time", text: "The engineer is not shared with other clients, so the context of your agents stays in one head." },
    { title: "Easy to start, easy to stop", text: "NDA before access, month-to-month terms, no exit fee and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Which models and frameworks do your agent developers work with?",
      a: "They work with the APIs of the major model providers and with common frameworks such as LangGraph and LlamaIndex. Where plain code is clearer than a framework, they use plain code. Tell us your current setup and we shortlist for it.",
    },
    {
      q: "Can you guarantee how accurate the agent will be?",
      a: "No, and nobody can honestly promise that. The engineer builds an evaluation set from your real tasks, measures the agent against it and reports the results. You decide when it is ready for use.",
    },
    {
      q: "Do we need an agent, or would a simpler workflow do?",
      a: "Often a simpler workflow is the better answer. A good engineer will say so, and will add agent behaviour only to the steps that need judgement.",
    },
    {
      q: "How is our data protected?",
      a: "An NDA is signed before any access. The engineer works inside your environment, under your model provider agreements, with the permissions you grant.",
    },
    {
      q: "Who owns the prompts, code and evaluation data?",
      a: "You do. The contract assigns all work product and IP to you, and everything is stored in your repositories.",
    },
    {
      q: "Can the engineer work with our existing backend team?",
      a: "Yes. Agents depend on your APIs and data, so the engineer joins your team's tickets, reviews and release process.",
    },
  ],
};

export default data;
