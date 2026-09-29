import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntecHire must confirm before launch.
const page: PageDef = {
  path: "/service/legacy-system-modernization/",
  meta: {
    title: "Legacy System Modernization",
    description:
      "Modernise legacy platforms in small, reversible steps. We observe the system first, isolate one part at a time, and retire old components only after the new ones are proven.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Legacy System Modernization",
      title: "Modernise The System Your Business [Depends On]",
      text: "Old platforms keep running until the day they cannot be patched, staffed or audited. We replace them piece by piece, with the old system still in service while the new one is proven.",
      ctas: [
        { label: "Request A Resilience Audit", href: "#audit" },
        { label: "See The Framework", href: "#framework", variant: "outline-light" },
      ],
    },
    {
      type: "text",
      title: "Legacy Systems Are A [Governance Risk]",
      align: "left",
      paragraphs: [
        "A legacy system is often treated as a technical problem for the engineering team. In practice it is a risk the whole business carries. If the system fails, the questions come from customers, auditors and the board, not only from developers.",
        "The risk grows quietly. The people who understand the system move on. Documentation falls behind the code. Each change takes longer because nobody is sure what else it will affect.",
        "Treating modernisation as a governance matter means naming an owner, recording the known risks, and agreeing a plan that reduces them in order of importance.",
      ],
      aside: {
        title: "Questions a board may ask",
        items: [
          "Who can still maintain this system?",
          "Is every component still supported by its vendor?",
          "How would we recover if it failed?",
          "What would an auditor find?",
        ],
      },
    },
    {
      type: "cards",
      tone: "dark",
      title: "Three Drivers That Make It [Urgent]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "calendar",
          title: "Support end dates",
          text: "Vendors stop issuing fixes for old versions of languages, frameworks, databases and operating systems. After that point, every new defect is yours to work around.",
        },
        {
          icon: "alert",
          title: "Security exposure",
          text: "Unsupported components do not receive security patches. Known weaknesses stay open, and older systems often lack the logging needed to notice misuse.",
        },
        {
          icon: "users",
          title: "Hiring difficulty",
          text: "Fewer engineers want to work on older stacks, and those who can are harder to find. Knowledge ends up with a small number of people.",
        },
      ],
    },
    {
      type: "cards",
      title: "Legacy Stacks We [Modernise]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "server",
          title: "Mainframe and COBOL",
          text: "Batch jobs and transaction programs that hold core business rules. We document the rules before any code is moved.",
        },
        {
          icon: "monitor",
          title: "Classic ASP and .NET Framework",
          text: "Web applications tied to older Windows servers. Typical targets are current .NET versions and container or cloud hosting.",
        },
        {
          icon: "layers",
          title: "Java EE",
          text: "Applications on older application servers with heavy XML configuration. We move them to current Java versions and lighter runtimes.",
        },
        {
          icon: "code",
          title: "PHP 5 era applications",
          text: "Code written for PHP versions that are no longer supported, often without a framework or tests. We add tests first, then upgrade.",
        },
        {
          icon: "network",
          title: "Desktop client-server applications",
          text: "Thick clients that talk directly to a database. We move business logic behind an API so that new clients can be built safely.",
        },
        {
          icon: "database",
          title: "Stored-procedure-heavy databases",
          text: "Systems where most of the logic lives in the database. We map the procedures, test them, and move logic out in stages.",
        },
      ],
      footnote: "If your stack is not listed, tell us what you run. The method is the same.",
    },
    {
      type: "steps",
      id: "framework",
      tone: "muted",
      layout: "row",
      title: "The Five-Step [Framework]",
      align: "center",
      intro: "Each step ends with something you can inspect before the next one starts.",
      items: [
        {
          tag: "Step 1",
          title: "Observe",
          text: "We add logging and monitoring to the current system and record how it behaves in real use, including the parts nobody documented.",
        },
        {
          tag: "Step 2",
          title: "Isolate",
          text: "We pick one bounded part of the system and place an interface around it, so it can change without touching the rest.",
        },
        {
          tag: "Step 3",
          title: "Extract",
          text: "We build the replacement for that part behind the interface. The old code stays in place and in service.",
        },
        {
          tag: "Step 4",
          title: "Validate",
          text: "We run old and new side by side and compare results. Traffic moves to the new part gradually, with a way back at each stage.",
        },
        {
          tag: "Step 5",
          title: "Retire",
          text: "Once the new part has carried real load without differences, the old code is removed. Then the cycle repeats for the next part.",
        },
      ],
    },
    {
      type: "cta",
      variant: "strip",
      title: "Not Sure Where The Risk Sits?",
      text: "Take the short legacy risk assessment and see which areas need attention first.",
      ctas: [{ label: "Start The Assessment", href: "/resources/legacy-risk-assessment/" }],
    },
    {
      // PLACEHOLDER: anonymised case outline. Replace every "—" with verified figures and confirm the client has approved the wording.
      type: "text",
      draft: true, // hidden until real content replaces the template
      tone: "dark",
      eyebrow: "Case outline",
      title: "A Financial Services [Platform]",
      align: "left",
      paragraphs: [
        "Client: a financial services company. Name withheld.",
        "Starting point: a core platform running on an unsupported stack, maintained by a small group of long-serving engineers, with limited automated tests.",
        "Approach: the five-step framework, applied to one business function at a time. The old platform stayed in service throughout.",
        "Result: to be completed with measured figures once approved for publication.",
      ],
      // PLACEHOLDER: each line below needs a verified figure.
      list: [
        "Components moved to a supported stack: —",
        "Change in release frequency: —",
        "Change in incident count: —",
        "Unplanned downtime during the programme: —",
        "Programme duration: —",
      ],
    },
    {
      type: "form",
      id: "audit",
      tone: "muted",
      title: "The [Resilience Audit]",
      align: "left",
      intro: "A structured review of one legacy system. It tells you where the risk is and what to do first.",
      lists: [
        {
          title: "What we analyse",
          items: [
            "Support status of each component",
            "Architecture and dependencies",
            "Test coverage and deployment process",
            "Who holds the knowledge today",
          ],
        },
        {
          title: "What you receive",
          items: [
            "A written list of risks in order of importance",
            "A proposed sequence for modernisation",
            "The team shape needed to carry it out",
          ],
        },
        {
          title: "What happens next",
          items: [
            "An NDA is signed before any code access",
            "A call with a senior engineer to agree scope",
            "We review the system and present the findings to you",
          ],
        },
      ],
      form: {
        title: "Request A Resilience Audit",
        intro: "Tell us what the system does and what worries you about it.",
        submit: "Request Audit",
        kind: "resilience-audit",
        fields: ["name", "email", "company", "message"],
        note: "No code is shared before an NDA is signed.",
      },
    },
    {
      type: "cards",
      title: "Why CTOs Choose [This Approach]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "refresh",
          title: "Every step can be undone",
          text: "The old component stays available until its replacement is proven. If something looks wrong, traffic goes back.",
        },
        {
          icon: "eye",
          title: "Evidence before change",
          text: "Decisions are based on how the system behaves in production, not on what the documentation says it should do.",
        },
        {
          icon: "target",
          title: "Small scope per step",
          text: "One bounded part changes at a time. A problem affects that part only, and is easier to find.",
        },
        {
          icon: "lock",
          title: "You keep ownership",
          text: "The work happens in your repository. You own all code and IP, and terms run month to month.",
        },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Do we have to replace the whole system at once?",
          a: "No. We advise against it. The framework replaces one bounded part at a time while the rest of the system keeps running.",
        },
        {
          q: "How long does modernisation take?",
          a: "It depends on the size of the system, the quality of existing tests and how many parts need to move. The audit gives you a proposed sequence, and the first step is scoped before work starts.",
        },
        {
          q: "What if there is no documentation?",
          a: "That is common. The Observe step records how the system behaves in real use, and we write tests that capture that behaviour before changing anything.",
        },
        {
          q: "Will our own engineers be involved?",
          a: "Yes. Your engineers know the business rules. We work alongside them in your repository and tools, and knowledge is shared as the work proceeds.",
        },
        {
          q: "How is this different from your application modernisation service?",
          a: "This service covers platforms and core systems, including infrastructure, databases and runtime. Application modernisation focuses on the code and structure of individual applications.",
        },
      ],
      button: { label: "Compare With Application Modernization", href: "/service/legacy-application-modernization/" },
    },
    {
      type: "cta",
      variant: "dark",
      title: "Start With One System",
      text: "Request a resilience audit. You will get a written view of the risks and a proposed order of work.",
      ctas: [
        { label: "Request A Resilience Audit", href: "#audit" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
