import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/industries/",
  meta: {
    title: "Industries We Serve",
    description:
      "Remote developers for fintech, healthcare, e-commerce, real estate, education, travel and logistics. See the typical engineering work in each sector.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      align: "center",
      eyebrow: "Industries",
      title: "Industries We [Serve]",
      text: "Every sector has its own rules, data and failure modes. A developer who knows them needs less explaining and makes fewer costly mistakes.",
      ctas: [
        { label: "Hire A Developer", href: "/technologies/" },
        { label: "Discuss Your Project", href: "/contact-us/", variant: "outline" },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "Typical Engineering Work, [Sector By Sector]",
      align: "center",
      columns: 3,
      items: [
        {
          icon: "credit",
          title: "FinTech",
          text: "Payment flows, ledgers and reconciliation. Work where every transaction must be traceable and every figure must add up.",
          list: ["Payment gateway integration", "Transaction reporting", "Audit trails and access control"],
        },
        {
          icon: "heart",
          title: "Healthcare And Life Sciences",
          text: "Patient apps, clinical systems and data exchange between them. Work where privacy is part of the design.",
          list: ["Appointment and patient portals", "Integration between clinical systems", "Careful handling of sensitive records"],
        },
        {
          icon: "cart",
          title: "E-Commerce",
          text: "Storefronts, checkout and order management. Work where speed and uptime affect revenue directly.",
          list: ["Catalogue and search", "Checkout and payment", "Inventory and order systems"],
        },
        {
          icon: "home",
          title: "Real Estate",
          text: "Listing platforms, search and the tools agents and managers use each day.",
          list: ["Property listing and search", "Map and location features", "Tenant and lease management tools"],
        },
        {
          icon: "graduation",
          title: "Education And eLearning",
          text: "Learning platforms, course delivery and assessment. Work that must hold up when a whole class logs in at once.",
          list: ["Course and content platforms", "Video and live sessions", "Assessment and progress tracking"],
        },
        {
          icon: "plane",
          title: "Travel And Hospitality",
          text: "Booking engines, availability and pricing, often tied to several third-party systems.",
          list: ["Booking and reservation flows", "Supplier and channel integration", "Itinerary and customer accounts"],
        },
        {
          icon: "truck",
          title: "Transport And Logistics",
          text: "Tracking, routing and fleet tools. Work built on location data and events arriving in real time.",
          list: ["Shipment tracking", "Route and dispatch tools", "Driver and fleet apps"],
        },
      ],
      footnote: "Working in a sector not listed here? Tell us about it. The screening method is the same.",
    },
    {
      type: "cta",
      variant: "dark",
      title: "Need Developers For Your Industry?",
      text: "Tell us the sector and the stack. We will shortlist developers who fit both.",
      ctas: [
        { label: "Post A Requirement", href: "/hire-developers/" },
        { label: "Browse Technologies", href: "/technologies/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
