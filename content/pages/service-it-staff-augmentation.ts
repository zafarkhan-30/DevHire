import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values DevHire must confirm before launch.
const page: PageDef = {
  path: "/service/it-staff-augmentation-services/",
  meta: {
    title: "IT Staff Augmentation Services",
    description:
      "Add remote engineers to your existing team. You interview first, they work in your repository and tools, and terms run month to month with no exit fee.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "IT Staff Augmentation",
      title: "Add Engineers To Your Team Without [Rebuilding It]",
      text: "Staff augmentation places remote developers inside the team you already have. They follow your process, commit to your repository and report to your lead.",
      ctas: [
        { label: "Get Developer Profiles", href: "/contact-us/" },
        { label: "Estimate Cost", href: "/resources/developer-cost-estimate/", variant: "outline-light" },
      ],
      // PLACEHOLDER: replace each "—" with a verified DevHire figure, or remove the tile.
      stats: [
        { value: "—", label: "Developers placed" },
        { value: "—", label: "Time to first shortlist" },
        { value: "—", label: "Average engagement length" },
        { value: "—", label: "Developer retention" },
      ],
      aside: {
        title: "Key Highlights",
        items: [
          "You interview the developer before any contract",
          "Month-to-month terms with no exit fee",
          "Work happens in your repository and tools",
          "You own all code and IP",
          "Replacement if the fit is wrong",
        ],
      },
    },
    {
      type: "quote",
      tone: "muted",
      eyebrow: "A plain view",
      title: "What Does [Top Talent] Actually Mean?",
      align: "center",
      text: "Most staffing pages promise top talent and stop there. The phrase tells you nothing about how a person was assessed or whether they will fit your codebase. We would rather show you what we check: how a developer reads unfamiliar code, how they explain a trade-off, how they handle review comments, and whether they have worked in a domain and stack like yours. Then you interview them yourself and decide.",
    },
    {
      type: "steps",
      layout: "list",
      title: "How Staff Augmentation [Works]",
      align: "left",
      intro: "Five steps, from the first conversation to a developer working in your sprint.",
      items: [
        {
          tag: "Brief",
          title: "Tell us the gap",
          text: "We ask about the stack, the domain, the seniority you need and how your team works day to day. A short call is usually enough.",
        },
        {
          tag: "Shortlist",
          title: "Review matched profiles",
          text: "We send profiles of developers who fit the brief. Each profile states relevant project experience, not only a list of technologies.",
        },
        {
          tag: "Interview",
          title: "Interview the developer yourself",
          text: "You run the interview the way you would for your own hire. Nothing is signed until you have met the person and said yes.",
        },
        {
          tag: "Onboard",
          title: "Sign the NDA and grant access",
          text: "An NDA is signed before any code access. The developer then joins your repository, tracker and chat, using the accounts you provide.",
        },
        {
          tag: "Deliver",
          title: "Work inside your sprint",
          text: "The developer takes tickets from your backlog and follows your review rules. If the fit is wrong, tell us and we arrange a replacement.",
        },
      ],
    },
    {
      type: "split",
      tone: "muted",
      title: "When Staff Augmentation [Makes Sense]",
      align: "center",
      intro: "The model suits some situations well and others poorly. It helps to know which one you are in.",
      panels: [
        {
          title: "A good fit when",
          mood: "good",
          items: [
            "You have a working team and a process that new people can join",
            "You need a specific skill your team does not have",
            "Your roadmap needs more capacity than local hiring can supply in time",
            "You want to direct the work yourself",
            "You expect the need to grow or shrink over the year",
          ],
        },
        {
          title: "Not a good fit when",
          mood: "bad",
          items: [
            "Nobody on your side can review code or set priorities",
            "The scope is fixed and you want a vendor to own delivery end to end",
            "There is no backlog, only an idea that still needs shaping",
            "Your security rules do not allow remote access to the systems involved",
          ],
        },
      ],
      footnote: "If you need a full team that owns delivery, the dedicated developers model may suit you better.",
    },
    {
      type: "cards",
      title: "Benefits Of [Staff Augmentation]",
      align: "center",
      columns: 2,
      items: [
        { icon: "users", title: "You choose the person", text: "You interview each developer and make the final decision. Nobody is assigned to you unseen." },
        { icon: "compass", title: "You keep direction", text: "Priorities, architecture and acceptance stay with your team. The developer works to your standards." },
        { icon: "git", title: "Work stays in your systems", text: "Code is committed to your repository and tracked in your tools, so nothing needs to be handed over later." },
        { icon: "calendar", title: "Flexible terms", text: "Engagements run month to month. There is no exit fee if you end the engagement." },
        { icon: "refresh", title: "Replacement cover", text: "If the fit is wrong, we find a replacement and manage the handover." },
        { icon: "briefcase", title: "Less hiring overhead", text: "We handle sourcing, screening, payroll and equipment. Your team spends its time on interviews that matter." },
        { icon: "layers", title: "Capacity that can change", text: "Add developers when the roadmap grows and reduce when it does not. The contract allows both." },
        { icon: "lock", title: "Clear ownership", text: "All code and IP belong to you by contract. An NDA is in place before anyone sees your code." },
      ],
    },
    {
      type: "table",
      tone: "muted",
      title: "Time Zone [Overlap]",
      align: "center",
      intro: "Our developers are based in India. This is how the working day usually lines up with each client region.",
      columns: ["Client region", "Shared working window", "How teams usually use it", "What runs asynchronously"],
      rows: [
        [
          "US East",
          "Morning overlap for the client, evening for the developer",
          "Stand-up and review at the start of the client day",
          "Most build work, with written handover notes each day",
        ],
        [
          "US West",
          "Limited natural overlap, early morning for the client",
          "An agreed shifted schedule for a shared window",
          "Nearly all build work, so clear tickets matter more",
        ],
        [
          "UK and Europe",
          "Broad overlap, morning for the client and afternoon for the developer",
          "Stand-up, pairing and review inside shared hours",
          "Little, as most of the day is shared",
        ],
      ],
      footnote: "The exact shared window is agreed per engagement and written into the working arrangement.",
    },
    {
      type: "table",
      title: "Staff Augmentation vs [Outsourcing]",
      align: "center",
      columns: ["", "Staff augmentation", "Project outsourcing"],
      highlight: 1,
      rows: [
        ["Who directs daily work", "Your team lead", "The vendor's project manager"],
        ["Where the work happens", "Your repository and tools", "Usually the vendor's environment until handover"],
        ["Scope", "Open, follows your backlog", "Defined up front in a statement of work"],
        ["Changing direction", "Reprioritise the backlog", "Usually needs a change request"],
        ["Knowledge", "Stays in your team and systems", "Often sits with the vendor"],
        ["Commercial model", "Monthly per developer", "Fixed price or milestones"],
        ["Best for", "Ongoing product work with a lead in place", "A well-defined project with a clear end"],
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "Matched To Your [Project Context]",
      align: "center",
      intro: "A list of technologies is a weak way to match a developer. We look at the context the work happens in.",
      columns: 3,
      items: [
        {
          icon: "building",
          title: "Domain",
          text: "A developer who has worked in your kind of business learns the rules faster. We look for prior work in similar domains.",
          list: ["Regulated or unregulated", "Transaction-heavy or content-heavy", "Internal tool or customer-facing product"],
        },
        {
          icon: "code",
          title: "Stack",
          text: "We match on the versions and tools you run, not only the language name.",
          list: ["Framework and version", "Database and hosting", "Testing and deployment setup"],
        },
        {
          icon: "message",
          title: "Team habits",
          text: "How your team works matters as much as what it builds.",
          list: ["Review and branching rules", "Written or spoken communication", "Sprint rhythm and meeting load"],
        },
      ],
      footnote: "You confirm the match yourself in the interview.",
    },
    {
      type: "table",
      title: "Staff Augmentation vs [Dedicated Teams]",
      align: "center",
      columns: ["", "Staff augmentation", "Dedicated team"],
      highlight: 1,
      rows: [
        ["Shape", "Individual developers added to your team", "A complete team working only on your product"],
        ["Who leads delivery", "Your lead", "Your lead, or a DevHire lead who reports to you"],
        ["Best for", "Filling skill or capacity gaps", "Ongoing product development"],
        ["Management effort on your side", "Higher, as you run the work directly", "Lower if a DevHire lead is included"],
        ["Commercial model", "Monthly per developer", "Monthly per developer"],
        ["Terms", "Month to month", "Month to month"],
      ],
      footnote: "You can start with augmented developers and move to a dedicated team later.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "Security And [IP Protection]",
      align: "center",
      columns: 4,
      items: [
        { icon: "file", title: "NDA first", text: "An NDA is signed before the developer sees any code or documentation." },
        { icon: "lock", title: "You own the work", text: "All code and IP are assigned to you by contract." },
        { icon: "git", title: "Your repository", text: "Code lives in your repository under your access rules. You can revoke access at any time." },
        { icon: "shield", title: "Your controls apply", text: "Developers follow your security policy, including the devices, VPN and sign-in rules you require." },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "What is IT staff augmentation?",
          a: "It is a way to add developers to your existing team for as long as you need them. The developers are employed by DevHire and work under your direction, in your repository and tools.",
        },
        {
          q: "Can I interview developers before I commit?",
          a: "Yes. You interview every developer before any contract is signed, and the decision is yours.",
        },
        {
          q: "What is the minimum commitment?",
          a: "Engagements run month to month and there is no exit fee. The notice period is stated in the contract.",
        },
        {
          q: "What happens if a developer is not the right fit?",
          a: "Tell us what is not working. We arrange a replacement and manage the handover so that knowledge is passed on.",
        },
        {
          q: "Who owns the code?",
          a: "You do. All code and IP are assigned to you by contract, and the work is committed directly to your repository.",
        },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Ready To Review Profiles?",
      text: "Tell us the stack and the gap. We will reply with developers who match, and you decide who to interview.",
      ctas: [
        { label: "Get Developer Profiles", href: "/contact-us/" },
        { label: "Estimate Cost", href: "/resources/developer-cost-estimate/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
