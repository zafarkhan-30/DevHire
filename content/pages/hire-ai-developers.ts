import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values DevHire must confirm before launch.
const page: PageDef = {
  path: "/hire/ai-developers/",
  meta: {
    title: "Hire AI Developers",
    description:
      "Hire AI developers who build, review and maintain production AI features inside your repository. Interview first, month-to-month terms, and you own the code.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      align: "center",
      eyebrow: "Hire AI Developers",
      title: "AI Developers Who Ship Features You Can [Measure]",
      text: "Engineers who treat a model as one component in a system. They build the retrieval, the tests and the monitoring around it, in your repository and your tools.",
      ctas: [
        { label: "Hire AI Developers", href: "#brief" },
        { label: "Talk To A Consultant", href: "/contact-us/", variant: "outline" },
      ],
      note: "You interview the developer before any contract.",
    },
    {
      // PLACEHOLDER: five verified DevHire figures for AI work. Replace every value and confirm each label.
      type: "stats",
      tone: "muted",
      pad: "xs",
      items: [
        { value: "—", label: "AI engineers placed" },
        { value: "—", label: "AI features in production" },
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
          text: "You have a use case and want it in production. Our developers join your team and build the feature end to end: data preparation, retrieval, prompts, model calls, evaluation and deployment. You set priorities and review the work.",
          chips: ["Feature delivery", "Your repository", "Your sprint"],
        },
        {
          title: "Advise",
          text: "You are not sure what to build, or whether AI is the right tool. A senior engineer reviews your data, your constraints and your options, then writes down a recommendation with the trade-offs. Sometimes the recommendation is a simpler approach with no model in it.",
          chips: ["Feasibility review", "Architecture options", "Written recommendation"],
        },
        {
          title: "Modernise",
          text: "You have an AI prototype or an older machine learning system that is hard to change. We add tests, evaluation and monitoring, replace fragile parts, and document how it works so your team can maintain it.",
          chips: ["Prototype hardening", "Evaluation added", "Documentation"],
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "The [AI Stack] Our Developers Work In",
      align: "center",
      intro: "Tools change quickly. The layers stay the same. We match developers to the layers you need and the tools you already use.",
      columns: 3,
      items: [
        {
          icon: "brain",
          title: "Model APIs",
          text: "Hosted models called over an API, and open-weight models you run yourself.",
          list: ["Hosted APIs from the major model providers", "Open-weight models such as Llama and Mistral", "Hugging Face Transformers", "Ollama and vLLM for self-hosted inference"],
        },
        {
          icon: "search",
          title: "Retrieval",
          text: "Finding the right source material before the model answers.",
          list: ["Vector search: pgvector, Qdrant, Weaviate, Milvus", "Keyword and hybrid search: Elasticsearch, OpenSearch", "Document parsing and chunking", "Embedding models and rerankers"],
        },
        {
          icon: "network",
          title: "Orchestration",
          text: "Connecting model calls, tools and business logic into a workflow.",
          list: ["LangChain and LangGraph", "LlamaIndex", "Haystack", "Plain application code where a framework adds nothing"],
        },
        {
          icon: "chart",
          title: "Evaluation",
          text: "Checking output quality with repeatable tests, not impressions.",
          list: ["Test sets built from real examples", "Open tools such as Ragas, promptfoo and DeepEval", "Experiment tracking with MLflow", "Human review for cases a metric cannot judge"],
        },
        {
          icon: "cloud",
          title: "Deployment",
          text: "Running the feature in production with the same discipline as any other service.",
          list: ["Docker and Kubernetes", "Python services with FastAPI", "Tracing with OpenTelemetry", "Cost, latency and error monitoring"],
        },
        {
          icon: "database",
          title: "Data Foundations",
          text: "Most AI work is data work. Clean, permissioned, current data comes first.",
          list: ["Ingestion and transformation pipelines", "PostgreSQL and data warehouses", "Access control carried through to retrieval", "Refresh schedules and versioning"],
        },
      ],
      footnote: "Tool names are examples of what our developers work with. They are not endorsements or partnerships.",
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
            { title: "You have", text: "A defined use case, data you can access and someone who can review the work." },
            { title: "We provide", text: "Developers who join your team and write production code in your repository." },
            { title: "You receive", text: "Working software, tests, an evaluation set and documentation." },
            { title: "Commercial model", text: "Monthly per engineer, on month-to-month terms." },
          ],
        },
        {
          title: "Advise",
          mood: "neutral",
          items: [
            { title: "You have", text: "A problem, a hunch that AI may help and open questions about cost or risk." },
            { title: "We provide", text: "A senior engineer who studies the problem and tests the riskiest assumption." },
            { title: "You receive", text: "A written recommendation with options, trade-offs and a suggested first step." },
            { title: "Commercial model", text: "A scoped piece of work agreed in writing before it starts." },
          ],
        },
      ],
      footnote: "Not sure which applies? Send the brief and we will tell you which we would choose and why.",
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
          icon: "message",
          title: "Support staff answer the same questions every day",
          text: "An assistant that retrieves answers from your own help content and cites the source. It hands over to a person when it is not confident.",
        },
        {
          icon: "file",
          title: "Staff spend hours reading documents to find a few fields",
          text: "Document extraction with a fixed output schema, validation rules and a review queue for uncertain results.",
        },
        {
          icon: "search",
          title: "Nobody can find anything in the internal knowledge base",
          text: "Hybrid search across your documents that respects existing access permissions, with answers linked to the original page.",
        },
        {
          icon: "alert",
          title: "Our prototype works in the demo and fails with real users",
          text: "An evaluation set built from real inputs, then targeted fixes to retrieval, prompts and error handling until the failure cases pass.",
        },
        {
          icon: "credit",
          title: "Model costs are growing faster than usage",
          text: "Measure cost per request first. Then apply caching, smaller models for simple tasks, shorter prompts and batch processing where the use case allows.",
        },
        {
          icon: "lock",
          title: "We cannot send customer data to a third party",
          text: "Options include self-hosted open-weight models, redaction before any external call, or a provider agreement your security team has approved. We work within your policy.",
        },
        {
          icon: "settings",
          title: "We want an agent to complete multi-step tasks",
          text: "Start with a narrow workflow, a small set of tools and clear permission limits. Add human approval for any action that is hard to undo.",
        },
        {
          icon: "wrench",
          title: "We have an old machine learning model nobody understands",
          text: "Document what it does, reproduce its results, add monitoring for drift, then decide whether to retrain, replace or retire it.",
        },
      ],
    },
    {
      type: "cards",
      tone: "dark",
      title: "Working [Standards]",
      align: "center",
      intro: "These are habits we expect from every AI developer we place. They are working practices, not certifications.",
      columns: 3,
      items: [
        { icon: "check", title: "Evaluation before launch", text: "Every feature has a test set and a pass threshold agreed with you before it reaches users." },
        { icon: "eye", title: "Traceable answers", text: "Where the feature uses your content, responses point back to the source so a person can check them." },
        { icon: "shield", title: "Data handled by your rules", text: "Developers follow your policies on what data may be sent to which service. An NDA is signed before code access." },
        { icon: "users", title: "A person in the loop", text: "Actions that are costly or hard to reverse need human approval until you decide otherwise." },
        { icon: "git", title: "Prompts are code", text: "Prompts and configuration live in version control and go through review like any other change." },
        { icon: "alert", title: "Honest limits", text: "Language models can produce wrong answers that sound right. We design for that and say so plainly." },
      ],
    },
    {
      type: "cards",
      title: "Engagement [Models]",
      align: "center",
      columns: 3,
      items: [
        { tag: "Individual", icon: "code", title: "One AI Developer", text: "A single engineer who joins your team and takes direction from your lead. Suits a team that already has a plan." },
        { tag: "Team", icon: "users", title: "Dedicated AI Team", text: "A small team covering data, application and evaluation work, focused on one product area you define." },
        { tag: "Scoped", icon: "compass", title: "Advisory Review", text: "A senior engineer reviews a use case or an existing system and writes up findings and options." },
      ],
      footnote: "Developer engagements run month to month with no exit fee. If the fit is wrong, we replace the developer.",
    },
    {
      // PLACEHOLDER: replace with real developer profiles once DevHire supplies them and each developer has approved publication.
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
          text: "A real profile will show the developer's main stack, years of relevant experience, the kinds of AI systems they have built and their working hours overlap with your team.",
        },
        {
          icon: "users",
          title: "Developer profile",
          text: "A real profile will show recent projects described in the developer's own words, their role on each, and which parts of the AI stack they worked on.",
        },
        {
          icon: "users",
          title: "Developer profile",
          text: "A real profile will show code samples or a technical write-up you can review, and the developer's availability to interview.",
        },
      ],
    },
    {
      // PLACEHOLDER: three client quotes approved in writing, with name, role and company.
      type: "testimonials",
      title: "What Clients [Say]",
      align: "center",
      items: [
        { quote: "Approved client quote goes here.", name: "Client Name", role: "Role, Company" },
        { quote: "Approved client quote goes here.", name: "Client Name", role: "Role, Company" },
        { quote: "Approved client quote goes here.", name: "Client Name", role: "Role, Company" },
      ],
    },
    {
      type: "form",
      id: "brief",
      tone: "muted",
      title: "Send Us [Your Brief]",
      align: "left",
      intro: "A few lines is enough. Tell us the problem, the data you have and what a good result looks like.",
      lists: [
        { title: "Helpful to include", items: ["The problem in plain words", "Where the data lives", "Any limits on data sharing", "Who will review the work"] },
        { title: "What you receive", items: ["Our view on build or advise", "A suggested team shape", "Profiles to review and interview"] },
      ],
      form: {
        title: "Describe What You Need",
        submit: "Send Brief",
        kind: "brief-ai",
        fields: ["name", "email", "company", "goal", "timeline", "message"],
        note: "We sign an NDA before you share code or data.",
      },
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "What does an AI developer do that a backend developer does not?",
          a: "Much of the work overlaps. An AI developer also knows how to prepare data for retrieval, write and test prompts, measure output quality, and handle the ways a model can fail. Most production AI features need both skill sets.",
        },
        {
          q: "Can I interview the developer first?",
          a: "Yes. You interview every candidate before any contract. You can set a technical task if you wish, and you make the final decision.",
        },
        {
          q: "Who owns the code, prompts and evaluation data?",
          a: "You do. All code and intellectual property created for you is assigned to you in the contract. Work happens in your repository and your tools.",
        },
        {
          q: "Do we need to train our own model?",
          a: "Usually not. Many use cases are served well by an existing model combined with retrieval over your own content. Fine-tuning or training is worth considering when you have enough quality data and a task that existing models handle poorly. We will tell you which applies.",
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
