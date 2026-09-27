import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/service/dedicated-developers/",
  meta: {
    title: "Dedicated Developers",
    description:
      "A dedicated development team that works only on your product, inside your process. Clear governance, month-to-month terms and code you own.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Dedicated Developers",
      title: "Dedicated Developers Who Are Contributing In [Week One]",
      text: "A team that works only on your product, follows your process and is accountable for what it ships.",
      ctas: [
        { label: "Book A Technical Assessment", href: "/contact-us/" },
        { label: "Start A Risk-Free Trial", href: "/hire-2-week-free-trial/", variant: "outline-light" },
      ],
    },
    {
      type: "text",
      title: "What Is The [Dedicated Developer] Model?",
      align: "left",
      paragraphs: [
        "A dedicated developer is a full-time engineer employed by SyntaxHires who works on one client only. You set priorities and review the work. We handle hiring, payroll, equipment and continuity.",
        "It sits between hiring in-house and outsourcing a project. You keep control of the roadmap without carrying the cost and delay of recruitment.",
      ],
      aside: {
        title: "In short",
        items: ["Full-time on your product", "Managed day to day by you", "Employed and supported by SyntaxHires", "Month-to-month terms"],
      },
    },
    {
      type: "cards",
      tone: "muted",
      title: "Who This Model Is [For]",
      align: "center",
      columns: 3,
      items: [
        { icon: "code", title: "CTOs and VPs of Engineering", text: "You have a roadmap and a process. You need more capable hands inside it." },
        { icon: "rocket", title: "Founders and CEOs", text: "You need a product built and a team that will still be there after launch." },
        { icon: "target", title: "Delivery Leads", text: "You need predictable capacity that does not disappear between projects." },
      ],
    },
    {
      type: "split",
      title: "Governance And [Accountability]",
      align: "center",
      intro: "Who is responsible for what, stated before work starts.",
      panels: [
        {
          title: "Your organisation",
          mood: "neutral",
          items: ["Product direction and priorities", "Acceptance of delivered work", "Access to systems and environments", "Architecture decisions"],
        },
        {
          title: "SyntaxHires",
          mood: "good",
          items: ["Hiring, screening and onboarding", "Payroll, equipment and leave cover", "Performance management", "Replacement if the fit is wrong"],
        },
      ],
    },
    {
      type: "table",
      tone: "muted",
      title: "Dedicated vs Staff Augmentation vs [Project Outsourcing]",
      align: "center",
      columns: ["", "Dedicated team", "Staff augmentation", "Project outsourcing"],
      highlight: 1,
      rows: [
        ["Who directs daily work", "You, with a SyntaxHires lead if wanted", "You", "The vendor"],
        ["Best for", "Ongoing product development", "Filling specific skill gaps", "Fixed, well-defined scope"],
        ["Knowledge retention", "High: same people long term", "Medium", "Low once the project ends"],
        ["Flexibility to change scope", "High", "High", "Low without a change request"],
        ["Commercial model", "Monthly per engineer", "Monthly per engineer", "Fixed price or milestones"],
      ],
    },
    {
      type: "cards",
      title: "What This Service [Delivers]",
      align: "center",
      columns: 4,
      items: [
        { icon: "users", title: "A stable team", text: "The same engineers month after month." },
        { icon: "eye", title: "Visibility", text: "Work tracked in your tools, not ours." },
        { icon: "shield", title: "Continuity cover", text: "Documented handover if anyone changes." },
        { icon: "lock", title: "IP protection", text: "Everything assigned to you by contract." },
      ],
    },
    {
      // PLACEHOLDER: replace with measured SyntaxHires delivery data.
      type: "stats",
      tone: "dark",
      title: "Delivery Data",
      align: "center",
      items: [
        { value: "—", label: "Average time to first commit" },
        { value: "—", label: "Sprint commitments met" },
        { value: "—", label: "Average engagement length" },
        { value: "—", label: "Replacement time" },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "Engagement [Models]",
      align: "center",
      columns: 3,
      items: [
        { tag: "Squad", title: "Dedicated Squad", text: "A complete team with a lead, owning delivery against goals you set." },
        { tag: "Extension", title: "Team Extension", text: "Individual engineers who join your existing team and rituals." },
        { tag: "Transfer", title: "Build, Operate, Transfer", text: "We build and run the team, then transfer it to your own entity." },
      ],
    },
    {
      type: "form",
      title: "Request A [Technical Assessment]",
      align: "left",
      lists: [
        { title: "What we look at", items: ["Your stack and architecture", "Current team shape", "Delivery bottlenecks"] },
        { title: "What you receive", items: ["Recommended team composition", "Shortlist timeline", "Monthly cost range"] },
        { title: "What happens next", items: ["A call with a senior engineer", "Candidate profiles to review", "Interviews, then a start date"] },
      ],
      form: {
        title: "Tell Us About Your Project",
        submit: "Request Assessment",
        kind: "assessment-dedicated",
        fields: ["name", "email", "company", "teamSize", "message"],
      },
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        { q: "How is a dedicated developer different from a freelancer?", a: "A dedicated developer works full time on your product, is employed and supported by SyntaxHires, and is covered by a replacement commitment. A freelancer usually splits time between clients and carries no continuity cover." },
        { q: "Can I interview the developers?", a: "Yes. You interview every candidate and make the final decision." },
        { q: "What is the minimum commitment?", a: "Engagements run month to month. The notice period is stated in the contract." },
        { q: "Who manages the team day to day?", a: "You can manage the team directly, or we can provide a lead who runs delivery and reports to you." },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Ready To Meet Your Team?",
      text: "Tell us the stack and the timeline. We will reply with a shortlist plan.",
      ctas: [{ label: "Talk To An Engineer", href: "/contact-us/" }],
    },
  ],
};

export default page;
