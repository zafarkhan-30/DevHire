import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntecHire must confirm before launch.
const page: PageDef = {
  path: "/resources/developer-cost-estimate/",
  meta: {
    title: "Developer Cost Estimate",
    description:
      "Compare the monthly cost of in-house hires, freelancers and dedicated developers using your own figures. No email needed. An estimate, not a quote.",
  },
  blocks: [
    {
      type: "hero",
      tone: "muted",
      size: "md",
      eyebrow: "Free Calculator",
      title: "Get Your Developer Cost [Estimate]",
      text: "Enter your own figures and compare three hiring models side by side. No email is needed and nothing you type is sent to us.",
      ctas: [{ label: "Open The Calculator", href: "#calculator" }],
      note: "An estimate for comparison, not a quote.",
    },
    {
      type: "calculator",
      id: "calculator",
      title: "Calculate [Your Costs]",
      align: "center",
      intro: "Use one currency for every field. Leave a field empty if it does not apply.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "What The Calculator [Shows]",
      align: "center",
      columns: 2,
      items: [
        {
          icon: "credit",
          title: "Total monthly cost",
          text: "The full monthly figure for the team size you enter. For in-house hires this includes employer overhead and recruitment cost spread across the engagement.",
        },
        {
          icon: "layers",
          title: "Three hiring models compared",
          text: "In-house hires, freelancers and dedicated developers, in one table, worked out from the same team size and engagement length.",
        },
        {
          icon: "clock",
          title: "Cost per productive hour",
          text: "Monthly cost divided by the productive hours you enter. It lets you compare a salary, an hourly rate and a monthly rate on the same basis.",
        },
        {
          icon: "chart",
          title: "Annual difference",
          text: "The gap between the in-house figure and the dedicated figure over twelve months. It shows the direction of the difference as well as the size.",
        },
      ],
    },
    {
      type: "cards",
      title: "Why Costs [Vary]",
      align: "center",
      intro: "Four things move the figure more than anything else.",
      columns: 4,
      items: [
        { icon: "award", title: "Seniority", text: "Experienced engineers cost more per month and usually need less direction and less rework." },
        { icon: "code", title: "Skill scarcity", text: "Common stacks have more available developers. Rare or specialised skills cost more to find and keep." },
        { icon: "globe", title: "Location", text: "Salaries, employer costs and recruitment fees differ widely between countries and cities." },
        { icon: "calendar", title: "Engagement length", text: "One-off costs such as recruitment weigh more heavily on a short engagement than on a long one." },
      ],
    },
    {
      type: "text",
      tone: "muted",
      title: "Where The [Numbers] Come From",
      align: "left",
      paragraphs: [
        "The calculator uses two sources. The SyntecHire rate comes from our own rate card or from the quote we gave you. Every other figure is one you enter yourself.",
        "We do not supply salary data, market averages or benchmark rates. You know your own costs better than a published survey does, and the result is only as accurate as the figures you put in.",
        "The calculation is simple arithmetic and the method is described on this page. If you want us to check your inputs, send them with the quote request below.",
      ],
      // The SyntecHire rate field starts from the mid-level rate in content/rates.ts, or empty until it is set.
      aside: {
        title: "Inputs",
        items: ["SyntecHire rate: our rate card or your quote", "Salary and overhead: your entry", "Recruitment cost: your entry", "Freelancer rate: your entry", "Productive hours: your entry"],
      },
    },
    {
      type: "cards",
      title: "How To [Reduce] Costs",
      align: "center",
      intro: "Ways to lower the total without lowering the standard of work.",
      columns: 2,
      items: [
        { icon: "target", title: "Define the role before you hire", text: "A clear description of the work avoids paying for seniority or skills the role does not need." },
        { icon: "users", title: "Mix seniority levels", text: "One senior engineer guiding mid-level developers often costs less than a team made up only of seniors." },
        { icon: "file", title: "Prepare the onboarding", text: "Access, setup guides and a first task ready in advance mean less paid time spent waiting." },
        { icon: "check", title: "Keep tasks small", text: "Small tasks are reviewed sooner, so mistakes are caught before they become expensive rework." },
        { icon: "refresh", title: "Keep the same people", text: "Every change of developer costs handover time. Continuity protects the context you have already paid for." },
        { icon: "trending", title: "Adjust team size with the roadmap", text: "Month-to-month terms let you add developers when the workload grows and reduce when it falls." },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "Do I need to give my email to use the calculator?",
          a: "No. The calculator runs in your browser and needs no email. You only share contact details if you ask for a custom quote.",
        },
        {
          q: "Is the result a quote?",
          a: "No. It is arithmetic on the figures you enter, for comparison only. A quote from SyntecHire is given in writing after we understand the role.",
        },
        {
          q: "Which currency should I use?",
          a: "Any currency, as long as every field uses the same one.",
        },
        {
          q: "What counts as employer overhead?",
          a: "Costs you pay on top of salary for an in-house employee. Typical items are employer taxes, benefits, equipment, software licences and office space. Enter it as a percentage of salary.",
        },
        {
          q: "Why is recruitment cost spread across the engagement?",
          a: "Recruitment is paid once, while salary is paid every month. Spreading the one-off cost across the months you enter lets the monthly figures be compared fairly.",
        },
      ],
      button: { label: "Have More Questions?", href: "/faq/" },
    },
    {
      type: "form",
      id: "quote",
      tone: "dark",
      title: "Get Your [Custom Quote]",
      align: "left",
      intro: "Tell us the role and the team size. We reply with a figure in writing.",
      lists: [
        { title: "What we need", items: ["The stack and seniority", "How many developers", "When you want to start"] },
        { title: "What you receive", items: ["A monthly figure per developer", "What the figure includes", "Profiles to review and interview"] },
      ],
      form: {
        title: "Request A Quote",
        submit: "Get My Quote",
        kind: "custom-quote",
        fields: ["name", "email", "company", "teamSize", "timeline", "message"],
        note: "You interview the developer before any contract.",
      },
    },
  ],
};

export default page;
