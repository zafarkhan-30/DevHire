import { rateSpan, rateText, rates } from "@/content/rates";
import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntecHire must confirm before launch.
// No market rates are stated on this page. SyntecHire rates come from content/rates.ts; unset rates are left out.
const page: PageDef = {
  path: "/hire/dedicated-developers/offshore-developers-cost/",
  meta: {
    title: "The True Cost Of Offshore Developers",
    description:
      "The rate is one part of what an offshore developer costs. This guide covers the rest: management time, tooling, turnover, overlap hours and replacement.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Hiring Guide",
      title: "The [True Cost] Of Offshore Developers",
      text: "A rate card shows one number. Your budget has to cover several more. This guide lists each cost component, explains what drives it and shows what you can do to control it.",
      ctas: [
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline-light" },
      ],
    },
    {
      type: "text",
      title: "The Rate Is [One Line] In The Budget",
      align: "left",
      paragraphs: [
        "Most comparisons of offshore hiring start and stop at the rate. That is understandable, because the rate is the only figure that appears on a quote. It is also the reason budgets are missed.",
        "An offshore developer needs direction, tools, access and a working relationship with your team. Each of those takes time or money. None is unique to offshore hiring, but distance and time zones can make some of them larger.",
        "This does not make offshore hiring a poor choice. It means the comparison should be made on total cost. When the other components are planned for, the result is predictable. When they are ignored, the saving on the rate can be lost elsewhere.",
      ],
      aside: {
        title: "Beyond the rate",
        items: ["Management time", "Tooling and licences", "Turnover", "Overlap hours", "Replacement"],
      },
    },
    {
      type: "table",
      tone: "dark",
      title: "Cost Components And Their [Drivers]",
      align: "center",
      intro: "The final column shows what each component costs with SyntecHire. Components paid in your own time are marked as such.",
      columns: ["Cost component", "What drives it", "How to control it", "SyntecHire figure"],
      highlight: 3,
      rows: [
        ["Developer rate", "Seniority, stack, location and demand for the skill", "Hire the level the work needs", rateSpan() ? `${rateSpan()} per month` : "Quoted in writing"],
        ["Management time", "Clarity of requirements, team size and experience of your lead", "Written specifications and a named owner for priorities", "Your time"],
        ["Tooling and licences", "Seats for source control, build systems, environments and communication tools", "Review seats and access when the team changes", "Quoted in writing"],
        ["Onboarding", "State of your documentation, setup complexity and access approvals", "Setup scripts and an up-to-date guide to the codebase", "Your time"],
        ["Overlap hours", "Time-zone gap and the number of live meetings you require", "Agree a fixed overlap window and use written updates", "Quoted in writing"],
        ["Turnover", "Engagement length, quality of the work and how the engineer is treated", "Include remote engineers in planning and give feedback early", "Your time to re-onboard"],
        ["Replacement", "Search, interviews, handover and lost context", "Keep decisions and setup documented in your own systems", "Quoted in writing"],
        ["Rework", "Unclear requirements and late review", "Small changes reviewed often", "Your time"],
      ],
      footnote: "SyntecHire replaces a developer if the fit is wrong. You interview the replacement before they start.",
    },
    {
      type: "cards",
      title: "Each Component [In Detail]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "eye",
          title: "Management time",
          text: "Someone on your side sets priorities, answers questions and reviews work. The less that is written down, the more of this time you spend.",
          list: ["Grows with team size", "Shrinks with clear written requirements"],
        },
        {
          icon: "settings",
          title: "Tooling",
          text: "Each engineer needs access to your repository, build pipeline, environments and communication tools. Many of these are priced per seat.",
          list: ["Count seats before you hire", "Remove access when people leave"],
        },
        {
          icon: "refresh",
          title: "Turnover",
          text: "When an engineer leaves, their knowledge of your system leaves too. The cost is the time it takes a new person to reach the same level.",
          list: ["Lower in long engagements", "Reduced by good documentation"],
        },
        {
          icon: "clock",
          title: "Overlap hours",
          text: "Live conversation needs shared working hours. A large time-zone gap leaves fewer of them. Questions asked outside the overlap wait until the next day.",
          list: ["Agree the overlap window up front", "Use written updates for the rest"],
        },
        {
          icon: "users",
          title: "Replacement",
          text: "Replacing an engineer means a new search, new interviews and a handover. The provider may cover the search. The handover still takes your team's time.",
          list: ["Ask what the provider covers", "Ask who pays during the handover"],
        },
        {
          icon: "message",
          title: "Communication",
          text: "Written communication takes more care than a conversation at a desk. Teams that already write things down adapt quickly. Others need to build the habit.",
          list: ["Decisions recorded in writing", "One channel for questions"],
        },
      ],
    },
    {
      type: "stats",
      tone: "dark",
      title: "SyntecHire [Rate Card]",
      align: "center",
      items: [
        // Hidden until rates are set in content/rates.ts
        { value: rateText(rates.junior), label: "Monthly rate, junior engineer" },
        { value: rateText(rates.mid), label: "Monthly rate, mid-level engineer" },
        { value: rateText(rates.senior), label: "Monthly rate, senior engineer" },
        { value: rateText(rates.lead), label: "Monthly rate, delivery lead" },
      ],
    },
    {
      type: "split",
      title: "What Raises And [Lowers] Total Cost",
      align: "center",
      panels: [
        {
          title: "Raises total cost",
          mood: "bad",
          items: [
            "Requirements explained only in calls",
            "No named person to answer questions",
            "Large pieces of work reviewed at the end",
            "A series of short engagements on the same codebase",
            "Setup that depends on one person's memory",
          ],
        },
        {
          title: "Lowers total cost",
          mood: "good",
          items: [
            "Requirements and decisions in writing",
            "One owner for priorities",
            "Small changes reviewed often",
            "The same engineers over a long period",
            "Documented setup in your own repository",
          ],
        },
      ],
      footnote: "Most of these are within your control and apply to local hires as well.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "Questions To Ask [Any Provider]",
      align: "center",
      intro: "Ask us the same questions.",
      columns: 4,
      items: [
        { icon: "file", title: "What does the rate include?", text: "Ask about equipment, leave, software and any fee that sits on top of the rate." },
        { icon: "calendar", title: "What are the contract terms?", text: "Ask about the minimum term, the notice period and any charge for leaving." },
        { icon: "shield", title: "What happens if the fit is wrong?", text: "Ask who finds the replacement, who pays during handover and whether you interview them." },
        { icon: "lock", title: "Who owns the work?", text: "Ask when IP is assigned, whether an NDA comes before code access and where the code is stored." },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Validate Your Budget",
      text: "Use the cost estimate to build a total for your team, then add your own figures for management time and tooling.",
      ctas: [
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "What does an offshore developer cost?",
          a: "It depends on seniority, stack and location. Use the cost estimate for a figure based on your role and team size, and add the components on this page to reach a total.",
        },
        {
          q: "Which hidden cost is usually the largest?",
          a: "It differs between teams. Management time and turnover are the two that are most often left out of a budget. Both depend heavily on how well requirements and decisions are documented.",
        },
        {
          q: "How does SyntecHire handle replacement?",
          a: "If the fit is wrong, we replace the developer. You interview the replacement before they start. Engagements run month to month with no exit fee.",
        },
        {
          q: "Is offshore hiring always cheaper than hiring locally?",
          a: "No. It is often cheaper on the rate. Whether it is cheaper in total depends on the components on this page and how well they are managed. Compare total cost for your own situation.",
        },
      ],
    },
  ],
};

export default page;
