import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/hire/dedicated-developers/dedicated-team-vs-staff-augmentation/",
  meta: {
    title: "Dedicated Team vs Staff Augmentation",
    description:
      "A dedicated team adds a unit that owns delivery. Staff augmentation adds engineers to the team you already have. How the two differ and how to choose.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Hiring Guide",
      title: "Dedicated Team vs [Staff Augmentation]",
      text: "Both models add remote engineers to your product. The difference is who organises the work. With a dedicated team, a unit owns delivery against your goals. With staff augmentation, individual engineers join a team you already run.",
      ctas: [
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline-light" },
      ],
    },
    {
      type: "text",
      title: "Two Models, [One Difference]",
      align: "left",
      paragraphs: [
        "A dedicated team is a group of engineers who work only on your product and operate as a unit. You set the goals and priorities. The team plans and delivers against them, with a lead if you want one. It suits work that needs its own rhythm and ownership.",
        "Staff augmentation places individual engineers inside your existing team. They attend your stand-ups, follow your process and take tasks from your lead. It suits teams that already work well and need more hands or a missing skill.",
        "In both models the engineers are employed by DevHire, work in your repository and tools, and are interviewed by you before any contract. The models differ in structure, not in the quality of the people.",
      ],
      aside: {
        title: "In short",
        items: [
          "Dedicated team: adds a unit",
          "Staff augmentation: adds individuals",
          "Both: your repository, your tools, your priorities",
        ],
      },
    },
    {
      type: "table",
      tone: "dark",
      title: "How The Models [Compare]",
      align: "center",
      columns: ["", "Dedicated team", "Staff augmentation"],
      rows: [
        ["What you add", "A team that works as a unit", "Individual engineers"],
        ["Who directs daily work", "You, with a DevHire lead if wanted", "Your own lead or manager"],
        ["Who plans the work", "The team, against goals you set", "Your existing team"],
        ["Best for", "Ongoing product development or a new workstream", "Skill gaps and extra capacity in a working team"],
        ["Management load on you", "Lower day to day, higher at goal-setting", "Higher day to day"],
        ["What you need in place", "Clear goals and a product owner", "A working process and a lead with time to manage"],
        ["Knowledge retention", "High: the team holds shared context", "Depends on how well each person is integrated"],
        ["Commercial model", "Monthly per engineer", "Monthly per engineer"],
        ["Changing team size", "Month-to-month terms, no exit fee", "Month-to-month terms, no exit fee"],
      ],
    },
    {
      type: "split",
      title: "Which Model Fits [Your Situation]",
      align: "center",
      panels: [
        {
          title: "Choose a dedicated team when",
          mood: "good",
          items: [
            { title: "You are starting a new workstream", text: "There is no existing team for the engineers to join." },
            { title: "Your leads have no time to manage more people", text: "A team with its own lead needs less daily direction." },
            { title: "The work runs for a long time", text: "Shared context within the team grows and stays." },
            { title: "You can define outcomes clearly", text: "The team needs goals, not a list of tasks." },
          ],
        },
        {
          title: "Choose staff augmentation when",
          mood: "neutral",
          items: [
            { title: "Your team works well and needs capacity", text: "The process exists. You need more people inside it." },
            { title: "You are missing one skill", text: "A specific stack or specialism that your team lacks." },
            { title: "You want direct control of every task", text: "Your lead assigns and reviews the work." },
            { title: "Demand rises and falls", text: "You expect to add and remove people as the workload changes." },
          ],
        },
      ],
      footnote: "The two can be combined: a dedicated team for one workstream and augmented engineers in another.",
    },
    {
      type: "stats",
      tone: "dark",
      title: "The Same Terms In [Both Models]",
      align: "center",
      items: [
        { value: "Monthly", label: "Contract term", note: "Engagements run month to month" },
        { value: "None", label: "Exit fee", note: "Notice period is stated in the contract" },
        { value: "Yours", label: "Code and IP", note: "Assigned to you by contract" },
        { value: "First", label: "NDA", note: "Signed before any code access" },
      ],
    },
    {
      type: "cards",
      title: "Common Mistakes In [Choosing]",
      align: "center",
      columns: 4,
      items: [
        {
          icon: "target",
          title: "A team without goals",
          text: "A dedicated team given only a task list behaves like augmented staff, but with less direction. Set outcomes first.",
        },
        {
          icon: "users",
          title: "Augmenting a team with no lead",
          text: "Added engineers need someone to assign and review work. Without that person, capacity goes unused.",
        },
        {
          icon: "message",
          title: "Treating remote engineers as outsiders",
          text: "Engineers left out of planning and discussion lack context. Include them in the same rituals as everyone else.",
        },
        {
          icon: "compass",
          title: "Choosing by price alone",
          text: "The commercial model is the same in both cases. Choose by how the work should be organised.",
        },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Validate Your Budget",
      text: "Use the cost estimate to see the monthly cost for the team size you have in mind, in either model.",
      ctas: [
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/" },
        { label: "See Staff Augmentation", href: "/service/it-staff-augmentation-services/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Can I move from staff augmentation to a dedicated team later?",
          a: "Yes. An engagement can start with individual engineers and grow into a team. The engineers already know your codebase, so the change is mainly one of structure.",
        },
        {
          q: "Who manages the engineers in each model?",
          a: "In staff augmentation, your lead manages them directly. In a dedicated team, you set the goals and can either manage the team yourself or have a DevHire lead run delivery and report to you.",
        },
        {
          q: "Do I interview the engineers in both models?",
          a: "Yes. You interview every developer before any contract, and you make the final decision.",
        },
        {
          q: "Is one model cheaper than the other?",
          a: "Both are billed monthly per engineer. The total depends on the number of people and their seniority. A dedicated team with a lead includes the cost of that lead.",
        },
      ],
    },
  ],
};

export default page;
