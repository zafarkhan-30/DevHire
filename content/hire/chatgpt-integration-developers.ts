import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "chatgpt-integration-developers",
  name: "ChatGPT Integration",
  role: "ChatGPT Integration Developers",
  category: "data",
  meta: {
    title: "Hire ChatGPT Integration Developers",
    description:
      "Hire developers to add ChatGPT and LLM features to your product: retrieval, function calling, cost control. Interview first, month-to-month.",
  },
  hook: "Adding an AI feature to a live product is less about the model and more about the retrieval, limits and safety checks around it.",
  focus: "Assistants, Document Search & In-App Automation",
  heroText:
    "Developers who add LLM features to products that already have users. They connect vendor APIs to your data, keep responses quick and affordable, and put checks in place before anything reaches a customer.",
  heroBullets: [
    "Retrieval, function calling and structured output",
    "Token cost and response time tracked per feature",
    "Built into your existing codebase and release process",
    "No contract until you have interviewed the developer",
  ],
  build: [
    {
      label: "In-App Assistants",
      icon: "message",
      text: "A chat or side-panel assistant that answers from your product data and can carry out actions for the signed-in user.",
      stack: ["OpenAI API", "Next.js", "Server-Sent Events", "PostgreSQL"],
      outcome: "Users can ask a question inside the product instead of leaving it to search for help.",
    },
    {
      label: "Document Search and Q&A",
      icon: "search",
      text: "Retrieval over manuals, policies and knowledge bases, with answers that link to the source passage.",
      stack: ["OpenAI Embeddings", "pgvector", "Python", "FastAPI"],
      outcome: "Readers see where an answer came from and can open the original.",
    },
    {
      label: "Support Automation",
      icon: "mail",
      text: "Draft replies, ticket summaries and routing suggestions inside your help desk, with a member of staff approving what is sent.",
      stack: ["OpenAI API", "Zendesk API", "Node.js", "Redis"],
      outcome: "Support staff start from a draft and a summary, not from a blank reply.",
    },
    {
      label: "Data Extraction",
      icon: "file",
      text: "Invoices, contracts and emails turned into structured records that match a schema you define.",
      stack: ["Structured Outputs", "JSON Schema", "Python", "Amazon S3"],
      outcome: "Documents arrive in your system as validated fields, with unclear cases flagged for review.",
    },
    {
      label: "Writing and Summarising Features",
      icon: "zap",
      text: "Summaries, rewriting, translation and tagging added to screens your users already know.",
      stack: ["Azure OpenAI", ".NET", "Azure Functions", "SQL Server"],
      outcome: "Small time-savers appear in the places where people already work.",
    },
  ],
  fact: {
    text: "OpenAI's published policy states that data sent through its API is not used to train its models unless the customer opts in.",
    source: "OpenAI platform documentation",
  },
  skills: [
    {
      title: "Prompt and context design",
      text: "Instructions, examples and context arranged so the model has what it needs and little else.",
      chips: ["System Prompts", "Few-Shot Examples", "Context Windows"],
    },
    {
      title: "Retrieval",
      text: "Chunking, embeddings, keyword and vector search combined, and reranking when the first pass is noisy.",
      chips: ["Embeddings", "pgvector", "Hybrid Search"],
    },
    {
      title: "Function calling",
      text: "Well-described functions with validated arguments, so the model can act through your API without free-form parsing.",
      chips: ["Function Calling", "Structured Outputs", "JSON Schema"],
    },
    {
      title: "Cost control",
      text: "The smallest model that passes the tests, cached prompts, batch jobs for offline work and spend limits per user.",
      chips: ["Model Selection", "Prompt Caching", "Batch API"],
    },
    {
      title: "Latency",
      text: "Streaming responses, parallel calls and cached results for repeated questions.",
      chips: ["Streaming", "Caching", "Parallel Calls"],
    },
    {
      title: "Safety and privacy",
      text: "Moderation checks, removal of personal data before a request is sent and handling of prompt injection in retrieved content.",
      chips: ["Moderation API", "PII Redaction", "Prompt Injection"],
    },
    {
      title: "Evaluation and monitoring",
      text: "A test set of real questions, logged requests and a feedback control so problems are found from data.",
      chips: ["Evals", "Tracing", "User Feedback"],
    },
    {
      title: "Vendor flexibility",
      text: "A thin layer between your code and the provider, so a model can be swapped without a rewrite.",
      chips: ["OpenAI", "Azure OpenAI", "Anthropic", "Gemini"],
    },
  ],
  versions: [
    { version: "ChatGPT", year: "2022", tag: "Launch", text: "OpenAI released ChatGPT to the public as a research preview." },
    { version: "ChatGPT API", year: "2023", tag: "API access", text: "The model family behind ChatGPT became available to developers through the chat completions API." },
    { version: "Function calling", year: "2023", tag: "Tools", text: "Models could return structured arguments for functions defined by the developer." },
    { version: "GPT-4o", year: "2024", tag: "Multimodal", text: "One model handling text, images and audio, with faster responses than earlier GPT-4 models." },
    { version: "Structured Outputs", year: "2024", tag: "Reliability", text: "Responses could be constrained to match a JSON Schema supplied by the developer." },
    { version: "Responses API", year: "2025", tag: "Built-in tools", text: "OpenAI introduced the Responses API, which combines text generation with built-in tools." },
  ],
  chooseWhen: [
    { title: "You have a product and want AI inside it", text: "The work is integration: your data, your permissions and your interface, joined to a vendor model." },
    { title: "Your own content is the value", text: "When answers must come from your documents or records, retrieval has to be built and tuned." },
    { title: "A vendor model is good enough", text: "Most product features do not need a model trained from scratch. They need careful use of an existing one." },
    { title: "Cost and speed matter at your volume", text: "At scale, model choice, caching and prompt size decide whether a feature is affordable." },
  ],
  chooseNot: [
    { title: "You need a custom-trained model", text: "Training and tuning models on your own data is work for a machine learning engineer." },
    { title: "An off-the-shelf tool already does it", text: "If a chatbot widget or a help desk add-on covers the need, buying is simpler than building." },
    { title: "Data may not leave your network", text: "That can rule out vendor APIs. Self-hosted open models call for a different skill set." },
    { title: "The answer must be exact every time", text: "Calculations and rule-based decisions belong in ordinary code, not in a language model." },
  ],
  whyUs: [
    { title: "Tested on integration work", text: "Candidates are assessed on adding an LLM feature to an existing application, including the failure cases." },
    { title: "Meet the developer before you decide", text: "You interview the person and look at how they reason about cost, speed and safety." },
    { title: "Built under your vendor account", text: "API keys, usage and data settings stay under your control. The code and prompts are yours." },
    { title: "Not shared between clients", text: "The developer works on your product only, which matters when the work touches customer data." },
    { title: "Month-to-month, no exit fee", text: "An NDA is signed before access. If the fit is wrong, we provide a replacement." },
  ],
  faqs: [
    {
      q: "Do you only work with OpenAI models?",
      a: "No. The same integration skills apply to Azure OpenAI, Anthropic, Google Gemini and open models. Tell us which provider you use or are considering.",
    },
    {
      q: "Will our data be used to train the model?",
      a: "That depends on the vendor and on your agreement with them. The major API providers publish their data-use terms. The developer sets up the integration under your account, in line with those terms and your own policy.",
    },
    {
      q: "How do you keep API costs under control?",
      a: "By measuring first. The developer tracks tokens per feature, picks the smallest model that passes your tests, caches repeated work and sets usage limits. You see the figures in your own vendor dashboard.",
    },
    {
      q: "How do you deal with wrong or made-up answers?",
      a: "They cannot be removed entirely. They can be reduced by grounding answers in retrieved sources, showing citations, constraining the output format and testing against real questions. We do not promise a level of accuracy.",
    },
    {
      q: "Can the feature be added to our existing application?",
      a: "Yes, that is the usual case. The developer works in your repository, uses your existing sign-in and permissions, and ships through your release process.",
    },
    {
      q: "Who owns the prompts and code?",
      a: "You do. Prompts, code and test data are assigned to you in the contract and kept in your repositories.",
    },
  ],
};

export default data;
