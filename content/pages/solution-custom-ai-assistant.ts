import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values DevHire must confirm before launch.
const page: PageDef = {
  path: "/solutions/custom-ai-assistant-development/",
  meta: {
    title: "Custom AI Assistant Development",
    description:
      "An AI assistant built on your own documents, CRM and help content. Answers cite their sources, respect existing permissions and are tested before anyone relies on them.",
  },
  blocks: [
    {
      type: "hero",
      tone: "navy",
      eyebrow: "Custom AI Assistant Development",
      title: "Make Your Company Knowledge [Findable]",
      text: "The answer usually exists somewhere in your business. We build an assistant that finds it in your documents and systems, and shows where it came from.",
      bullets: [
        "Answers link to the source document",
        "Existing access permissions are respected",
        "Built in your environment, and you own the code",
      ],
      ctas: [{ label: "Book A Free Demo", href: "#contact" }],
    },
    {
      type: "cards",
      title: "The [Problem]",
      align: "center",
      intro: "Most companies do not lack information. They lack a quick way to find the right piece of it.",
      columns: 4,
      items: [
        {
          icon: "file",
          title: "Documents nobody can find",
          text: "Policies, contracts and specifications sit in shared drives under names that made sense to one person.",
        },
        {
          icon: "database",
          title: "CRM data behind reports",
          text: "The numbers are in the CRM, but getting them means building a report or asking the one person who knows how.",
        },
        {
          icon: "message",
          title: "Decisions buried in chat",
          text: "Agreements made in chat threads are hard to find later, so the same questions get asked again.",
        },
        {
          icon: "users",
          title: "Experts as the search engine",
          text: "Senior staff spend part of each day answering questions that are already written down somewhere.",
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "The [Solution]",
      align: "center",
      intro: "Four kinds of assistant. Most clients start with one.",
      columns: 2,
      items: [
        {
          icon: "search",
          title: "Document retrieval with citations",
          text: "Staff ask a question in plain English. The assistant searches your documents, writes an answer from what it finds, and links to each source so the answer can be checked.",
          list: ["Works across common document formats", "Says so when it finds no source", "Follows existing folder permissions"],
        },
        {
          icon: "chart",
          title: "Plain-English CRM queries",
          text: "A sales lead asks which accounts have gone quiet. The assistant turns the question into a query, runs it with read-only access, and shows the filters it used.",
          list: ["Read-only by default", "Shows how the result was produced", "Limited to the fields you approve"],
        },
        {
          icon: "globe",
          title: "Governed website chatbot",
          text: "Visitors get answers drawn only from content you have approved. When the assistant has no approved answer, it says so and offers a handover to a person.",
          list: ["Approved content only", "Handover to your team", "Conversations logged for review"],
        },
        {
          icon: "wrench",
          title: "Internal help desk assistant",
          text: "Staff ask about IT, HR or process questions. The assistant answers from your internal guides and raises a ticket when the question needs a person.",
          list: ["Answers from your own guides", "Creates tickets in your existing tool", "Gaps in the guides are reported"],
        },
      ],
      footnote: "An assistant can still be wrong. Citations and logs exist so that people can check.",
    },
    {
      type: "steps",
      layout: "row",
      title: "From Kickoff To [Production]",
      align: "center",
      intro: "Five phases. Each ends with something you can review before the next begins.",
      items: [
        {
          tag: "Phase 1",
          title: "Kickoff",
          text: "We agree one use case, the people who will use it, and the questions it must answer well. An NDA is signed before any data access.",
        },
        {
          tag: "Phase 2",
          title: "Data review",
          text: "We look at the sources, their quality and their permissions. Out-of-date or duplicate content is flagged for you to decide on.",
        },
        {
          tag: "Phase 3",
          title: "Pilot build",
          text: "We build a working assistant for a small group of users, connected to the agreed sources.",
        },
        {
          tag: "Phase 4",
          title: "Evaluation",
          text: "The assistant is tested against a set of real questions with known answers. We fix what fails and test again.",
        },
        {
          tag: "Phase 5",
          title: "Production",
          text: "We add monitoring, access control and logging, then open the assistant to the wider group. Feedback feeds the next round of changes.",
        },
      ],
    },
    {
      // PLACEHOLDER: reference client outline. Replace every "—" with verified details and confirm the client has approved the wording.
      type: "text",
      tone: "navy",
      eyebrow: "Reference outline",
      title: "A Reference [Engagement]",
      align: "left",
      paragraphs: [
        "Client: name and industry withheld until approved for publication.",
        "Starting point: knowledge spread across shared drives, a CRM and chat, with senior staff answering repeated questions.",
        "What was built: to be completed. State the assistant type, the sources connected and the group of users.",
        "Result: to be completed with measured figures.",
      ],
      // PLACEHOLDER: each line below needs a verified figure.
      list: [
        "Sources connected: —",
        "Users in the first rollout: —",
        "Share of test questions answered correctly: —",
        "Change in repeated questions to senior staff: —",
      ],
    },
    {
      // PLACEHOLDER: pricing. Confirm tier scope and replace "On request" with approved prices, or keep as is.
      type: "pricing",
      title: "Scope And [Pricing]",
      align: "center",
      intro: "Three scopes. The price depends on the number of sources, users and integrations.",
      tiers: [
        {
          name: "Pilot",
          level: "One use case, one team",
          price: "On request",
          features: [
            "One assistant type",
            "A limited set of sources",
            "A small group of users",
            "Evaluation against agreed questions",
          ],
          cta: { label: "Discuss A Pilot", href: "#contact", variant: "outline" },
        },
        {
          name: "Department",
          level: "One department, several sources",
          price: "On request",
          featured: true,
          features: [
            "Everything in Pilot",
            "Several connected sources",
            "Permission-aware answers",
            "Usage and quality monitoring",
          ],
          cta: { label: "Discuss Department Scope", href: "#contact" },
        },
        {
          name: "Company-wide",
          level: "Multiple departments and assistants",
          price: "On request",
          features: [
            "Everything in Department",
            "More than one assistant type",
            "Sign-in through your identity provider",
            "Handover and training for your team",
          ],
          cta: { label: "Discuss Company Scope", href: "#contact", variant: "outline" },
        },
      ],
      footnote: "You own all code and IP. Terms run month to month with no exit fee.",
    },
    {
      type: "table",
      tone: "muted",
      title: "Production AI vs [Proof Of Concept]",
      align: "center",
      intro: "A demo that works on a handful of documents is not the same as a tool staff can rely on.",
      columns: ["", "Proof of concept", "Production assistant"],
      highlight: 2,
      rows: [
        ["Data", "A small sample, loaded by hand", "Live sources, kept up to date automatically"],
        ["Permissions", "Everyone sees everything", "Answers limited to what each user may access"],
        ["Testing", "A few questions tried by the builder", "A maintained set of questions with known answers"],
        ["Wrong answers", "Noticed by chance", "Logged, reviewed and used to improve the assistant"],
        ["Citations", "Often missing", "Shown with every answer drawn from documents"],
        ["Monitoring", "None", "Usage, cost and answer quality tracked"],
        ["Ownership", "One enthusiast", "A named owner and a support process"],
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "See It Work On Your Kind Of Data",
      text: "Book a demo. We will walk through one use case and answer your questions about data and access.",
      ctas: [{ label: "Book A Free Demo", href: "#contact" }],
    },
    {
      type: "form",
      id: "contact",
      title: "Book A [Free Demo]",
      align: "left",
      lists: [
        {
          title: "What we will cover",
          items: ["One use case you choose", "How sources and permissions are handled", "How answers are tested"],
        },
        {
          title: "What helps us prepare",
          items: ["Where your knowledge lives today", "Who would use the assistant", "Any data rules we must follow"],
        },
      ],
      form: {
        title: "Tell Us About Your Use Case",
        submit: "Book A Free Demo",
        kind: "ai-assistant-demo",
        fields: ["name", "email", "company", "message"],
        note: "No data is shared before an NDA is signed.",
      },
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Which AI model do you use?",
          a: "We choose the model with you, based on your data rules, hosting requirements and budget. The assistant is built so that the model can be changed later.",
        },
        {
          q: "Is our data used to train a public model?",
          a: "We configure the assistant to use your data for answering questions, not for training. The exact terms depend on the model provider you choose, and we review them with you before any data is connected.",
        },
        {
          q: "Can the assistant give a wrong answer?",
          a: "Yes. Any AI assistant can. That is why answers cite their sources, conversations are logged, and the assistant is tested against questions with known answers before and after release.",
        },
        {
          q: "Will staff see documents they should not have access to?",
          a: "The assistant is designed to follow the permissions already set on your sources. We test this with accounts at different access levels before release.",
        },
        {
          q: "Who owns the assistant once it is built?",
          a: "You do. The code is committed to your repository, and all code and IP are assigned to you by contract.",
        },
      ],
    },
  ],
};

export default page;
