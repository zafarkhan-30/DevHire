import type { PageDef } from "@/content/types";

// PLACEHOLDER: confirm the framework document exists in its final form before launch, and how it is delivered after the form is sent.
const page: PageDef = {
  path: "/resources/legacy-risk-assessment/",
  meta: {
    title: "Legacy Risk Assessment",
    description:
      "A framework for scoring legacy system risk across security, operations, delivery and compliance. Includes an evidence checklist and a phased roadmap.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "Legacy Risk Assessment",
      title: "Score Your Legacy Risk Before It [Scores You]",
      text: "A framework for measuring how much risk an ageing system carries, using evidence your team can gather. It gives you a result you can show to people who do not read code.",
      ctas: [
        { label: "Get The Framework", href: "#download" },
        { label: "See The Scoring Model", href: "#scoring", variant: "outline-light" },
      ],
    },
    {
      type: "cards",
      title: "What The Assessment [Delivers]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "chart",
          title: "Risk heat map",
          text: "Each system scored across four areas and placed on one page. It shows where the risk is concentrated and which systems can wait.",
        },
        {
          icon: "check",
          title: "Evidence checklist",
          text: "A list of what to gather for each area, so scores rest on records and measurements and not on opinion.",
        },
        {
          icon: "compass",
          title: "Phased roadmap",
          text: "A sequence of work ordered by risk. It starts with containment, then stabilisation, then modernisation in stages.",
        },
      ],
    },
    {
      type: "text",
      tone: "navy",
      title: "Why This Belongs On The [Board Agenda]",
      align: "left",
      paragraphs: [
        "Legacy risk is usually discussed as a technical matter. Its effects are not technical. An outage stops revenue. A security gap exposes customer data. A system nobody can change delays every product decision that depends on it.",
        "Boards are asked to approve modernisation budgets without a clear view of what happens if they decline. A scored assessment gives them that view. It states the risk in business terms, shows the evidence and sets out options with different costs.",
        "It also protects the engineering team. When risk is written down and presented, the decision to accept it or act on it is shared with the people who control the budget.",
      ],
      aside: {
        title: "Questions a board will ask",
        items: ["What could go wrong, and how likely is it?", "What would it cost us if it did?", "What are our options?", "What happens if we wait a year?"],
      },
    },
    {
      type: "cards",
      id: "scoring",
      tone: "muted",
      title: "The [Scoring] Model",
      align: "center",
      intro: "Each system is scored in four areas. The highest level found in any area sets the overall level.",
      columns: 3,
      items: [
        {
          icon: "check",
          tag: "Level 1",
          title: "Controlled",
          text: "The system is old, but it is understood and maintained.",
          list: [
            "Runs on versions the vendor still supports",
            "Security patches are applied on a schedule",
            "More than one person can change and release it",
            "Backups are tested by restoring them",
            "Documentation matches how the system works",
          ],
        },
        {
          icon: "eye",
          tag: "Level 2",
          title: "Elevated",
          text: "The system works, but the margin for error is shrinking.",
          list: [
            "Some components are near the end of vendor support",
            "Patching is irregular or behind",
            "Knowledge sits with one or two people",
            "Releases are rare and need manual steps",
            "Documentation is partial or out of date",
          ],
        },
        {
          icon: "alert",
          tag: "Level 3",
          title: "Critical",
          text: "A failure would be hard to recover from, and change is avoided.",
          list: [
            "Core components no longer receive vendor support",
            "Known vulnerabilities cannot be patched",
            "Nobody on the team fully understands the system",
            "Recovery has never been tested",
            "The team avoids changes for fear of breaking it",
          ],
        },
      ],
      footnote: "The levels describe typical signs. Your own thresholds should reflect how much the business depends on each system.",
    },
    {
      type: "accordion",
      title: "The Evidence [Checklist]",
      align: "center",
      intro: "What to gather in each area before you score.",
      columns: 2,
      items: [
        {
          title: "Security",
          text: "Gather a list of operating system, runtime, framework and database versions with their vendor support dates. Add the latest vulnerability scan results, the patch history, a list of who has administrative access, and records of how secrets and credentials are stored. Include any past security incidents and what was done after each.",
          chips: ["Version inventory", "Scan results", "Access list", "Incident records"],
        },
        {
          title: "Operations",
          text: "Gather the incident log with duration and cause for each outage, monitoring and alerting coverage, and backup schedules with the date of the last tested restore. Add the recovery procedure, hardware age and warranty status where the system runs on your own equipment, and the names of people able to respond out of hours.",
          chips: ["Incident log", "Backup and restore tests", "Recovery procedure", "On-call cover"],
        },
        {
          title: "Delivery",
          text: "Gather release frequency, the steps in a release and how many are manual, automated test coverage, and the time a typical change takes from request to production. Add the number of people who can make changes, the state of the documentation, and how hard it has been to hire for the technology.",
          chips: ["Release history", "Test coverage", "Lead time for changes", "Key person dependency"],
        },
        {
          title: "Compliance",
          text: "Gather the list of regulations and contractual obligations that apply to the system, the most recent audit findings and their status, and data retention and deletion records. Add audit log coverage and a map of where personal or regulated data is stored and who can reach it. Ask your compliance or legal team to confirm which obligations apply.",
          chips: ["Applicable obligations", "Audit findings", "Data map", "Audit logs"],
        },
      ],
    },
    {
      type: "steps",
      tone: "muted",
      layout: "row",
      title: "From Chaos To [Control]",
      align: "center",
      items: [
        { tag: "Step 1", title: "Inventory", text: "List every system, what it does, who owns it and what depends on it." },
        { tag: "Step 2", title: "Gather evidence", text: "Work through the checklist for each system. Note what could not be found, because a gap is a finding too." },
        { tag: "Step 3", title: "Score", text: "Assign a level in each of the four areas and place each system on the heat map." },
        { tag: "Step 4", title: "Contain", text: "Reduce the most serious risks first with measures that do not need a rebuild, such as tested backups and tighter access." },
        { tag: "Step 5", title: "Plan in phases", text: "Order the modernisation work by risk and dependency, with a decision point at the end of each phase." },
      ],
    },
    {
      type: "form",
      id: "download",
      title: "Get The [Framework]",
      align: "left",
      intro: "Tell us where to send it.",
      lists: [
        { title: "What is included", items: ["The scoring model", "The evidence checklist", "A heat map template", "A roadmap template"] },
        { title: "Who it is for", items: ["CTOs and heads of engineering", "IT directors", "Risk and audit leads"] },
      ],
      form: {
        title: "Send Me The Framework",
        submit: "Get The Framework",
        kind: "risk-framework",
        fields: ["name", "email", "company"],
        note: "Your details are handled as described in our privacy policy.",
      },
    },
    {
      type: "cta",
      variant: "dark",
      title: "Want Help Running The Assessment?",
      text: "Our engineers can gather the evidence with your team and help you present the result.",
      ctas: [
        { label: "Talk To An Engineer", href: "/contact-us/" },
        { label: "Legacy Modernisation Services", href: "/service/legacy-system-modernization/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
  ],
};

export default page;
