import type { PageDef } from "@/content/types";

// Prices and model structure supplied by SyntecHire. The internal "agency cash flow and risk" view is
// intentionally not shown to buyers. Change figures here; final terms are always set out in the agreement.
const page: PageDef = {
  path: "/pricing/",
  meta: {
    title: "Pricing",
    description:
      "Four ways to hire with SyntecHire: contingency, flat fee per hire, a three-hire bundle or a dedicated recruiter on retainer. Clear prices in rupees.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      align: "center",
      eyebrow: "Recruitment Pricing",
      title: "Hiring Models Priced The Way [You Hire]",
      text: "Lower fees than a typical 15% agency charge. Pay a smaller percentage only when someone joins, a fixed fee per hire, a bundle for your first squad, or a monthly retainer for a recruiter who works as part of your team.",
      ctas: [
        { label: "See How Much You Save", href: "#savings" },
        { label: "Talk To Us About Pricing", href: "/contact-us/", variant: "outline-light" },
      ],
      note: "These prices are for recruitment. For a software project, see the engagement models page and ask for a written quote.",
    },
    {
      type: "pricing",
      id: "models",
      title: "Choose A [Pricing Model]",
      intro: "Every model covers sourcing, screening and interview coordination. What changes is how and when you pay.",
      tiers: [
        {
          name: "Standard Contingency",
          level: "Traditional",
          price: "8.33% – 12.5%",
          priceNote: "of annual CTC, paid only when the hire joins",
          features: [
            "Nothing to pay upfront",
            "Fee is due only on a successful joining",
            "Familiar model for enterprise HR teams",
            "Fee rises with the salary offered",
          ],
          cta: { label: "Ask About Contingency", href: "/contact-us/" },
        },
        {
          name: "Flat Fee Per Hire",
          level: "Most predictable",
          price: "₹40,000 – ₹1,00,000",
          priceNote: "fixed fee per hire, tiered by seniority",
          featured: true,
          features: [
            "Full cost known before you start",
            "Same fee whatever salary you agree",
            "Largest saving on senior engineering roles",
            "Suits startups hiring senior engineers",
          ],
          cta: { label: "Get A Flat-Fee Quote", href: "/contact-us/" },
        },
        {
          name: "Bulk Bucket Package",
          level: "Three hires",
          price: "₹1,50,000",
          priceNote: "for 3 hires, with a 30% commitment fee upfront",
          features: [
            "Volume price across three roles",
            "Recruiting capacity reserved for you",
            "Built for a first tech squad",
            "Suits seed and Series A startups",
          ],
          cta: { label: "Reserve A Package", href: "/contact-us/" },
        },
        {
          name: "Recruitment As A Service",
          level: "Retainer",
          price: "₹60,000 – ₹90,000",
          priceNote: "per month for a dedicated recruiter",
          features: [
            "A recruiter who works as part of your team",
            "Predictable monthly cost",
            "Handles a steady pipeline of roles",
            "Suits 3 or more open roles each quarter",
          ],
          cta: { label: "Talk To Us About RaaS", href: "/contact-us/" },
        },
      ],
      footnote: "Final pricing, taxes and payment terms are confirmed in your agreement.",
    },
    {
      type: "savings",
      id: "savings",
      tone: "muted",
      title: "See How Much [You Save]",
      intro: "Many recruitment agencies charge around 15% of annual CTC. Enter the salary you are offering and compare that with our fees.",
      agencyPercent: 15,
      contingency: [8.33, 12.5],
      flatFee: [40000, 100000],
      defaultCtc: 1800000,
      note: "Example salary filled in. Compared with a typical agency fee of 15% of annual CTC. The smallest saving uses the top of our price range. Taxes are extra and final fees are set in your agreement.",
    },
    {
      type: "cta",
      variant: "strip",
      title: "Planning A Software Project?",
      text: "Project work is quoted in writing. See how fixed scope, time and material and dedicated teams compare.",
      ctas: [{ label: "Engagement Models", href: "/engagement-models/" }],
    },
    {
      type: "table",
      id: "compare",
      title: "The Models [Side By Side]",
      columns: ["Pricing model", "Structure and cost", "Why teams choose it", "Best suited for"],
      rows: [
        [
          "Standard Contingency",
          "8.33% – 12.5% of annual CTC",
          "No upfront cost. The fee grows with salary, so senior hires cost the most.",
          "Traditional enterprise HR teams",
        ],
        [
          "Flat Fee Per Hire",
          "₹40,000 – ₹1,00,000 fixed, tiered by role seniority",
          "Total cost is predictable, with an immediate saving on senior roles.",
          "Startups hiring highly paid senior engineers",
        ],
        [
          "Bulk Bucket Package",
          "₹1,50,000 for 3 hires, 30% commitment fee upfront",
          "Volume discount and dedicated recruiting capacity.",
          "Seed and Series A startups building an initial tech squad",
        ],
        [
          "Recruitment As A Service",
          "₹60,000 – ₹90,000 per month for a dedicated recruiter",
          "Works like an embedded internal talent team.",
          "Companies with 3 or more consistent open roles per quarter",
        ],
      ],
    },
    {
      type: "steps",
      id: "which-model",
      tone: "muted",
      title: "Which Model [Fits You?]",
      layout: "row",
      items: [
        { tag: "One senior role", title: "Flat Fee Per Hire", text: "A fixed fee keeps a high salary from pushing up the cost of the search." },
        { tag: "First squad", title: "Bulk Bucket Package", text: "Three hires at a set price, with recruiting time reserved for you." },
        { tag: "Steady hiring", title: "Recruitment As A Service", text: "Three or more roles a quarter is where a dedicated recruiter pays off." },
        { tag: "Pay on joining", title: "Standard Contingency", text: "Choose this when a percentage fee is what your finance team expects." },
      ],
    },
    {
      type: "faq",
      id: "pricing-faq",
      title: "Pricing [Questions]",
      items: [
        {
          q: "What is the difference between contingency and a flat fee?",
          a: "Contingency is a percentage of the hire's annual CTC, so it rises with the salary. A flat fee is fixed by role seniority before the search starts, so the cost does not change with the offer.",
        },
        {
          q: "Which model costs least?",
          a: "It depends on salary and volume. For senior roles, a flat fee is usually lower than a percentage of a high CTC. For several hires, the bucket package or a retainer spreads the cost further.",
        },
        {
          q: "When do I pay under contingency?",
          a: "Only when the candidate joins. There is nothing to pay upfront.",
        },
        {
          q: "What does the 30% commitment fee in the bucket package cover?",
          a: "It confirms the package and reserves recruiting capacity for your three roles. The remaining terms are set out in the agreement.",
        },
        {
          q: "How is Recruitment As A Service different from hiring developers through you?",
          a: "With RaaS you get a recruiter who finds and hires people onto your own payroll. With our dedicated developer and staff augmentation services, you get engineers who work on your product through SyntecHire.",
        },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Not Sure Which Model Fits?",
      text: "Tell us the roles, seniority and timeline. We will recommend a model and send a written quote.",
      ctas: [{ label: "Get A Pricing Recommendation", href: "/contact-us/" }],
    },
  ],
};

export default page;
