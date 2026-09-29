import type { Block, PageDef, ServiceData } from "@/content/types";

// Turns one service data file into a service page.
// Sections about the service come from the data file; engagement models, the enquiry form and the closing CTA are shared.
export function buildServicePage(service: ServiceData): PageDef {
  const blocks: Block[] = [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: service.name,
      title: service.hero.title,
      text: service.hero.text,
      bullets: service.hero.bullets,
      ctas: [
        { label: "Discuss Your Project", href: "#enquiry" },
        { label: "See How We Build", href: "/how-we-build/", variant: "outline-light" },
      ],
    },
    { type: "text", align: "left", ...service.intro },
    { type: "cards", tone: "muted", align: "center", columns: service.build.items.length === 4 ? 4 : 3, ...service.build },
    { type: "cards", title: "Who This Is [For]", align: "center", columns: 3, items: service.audience },
    {
      type: "steps",
      tone: "muted",
      layout: "row",
      align: "center",
      title: service.approach.title,
      items: service.approach.items.map((item, index) => ({ tag: `Step ${index + 1}`, ...item })),
      footnote: "The full process, from first call to support after launch, is on the How We Build page.",
    },
    { type: "cards", title: "What You [Receive]", align: "center", columns: 4, items: service.deliverables },
  ];

  if (service.stack?.length) {
    blocks.push({
      type: "linkGrid",
      tone: "muted",
      title: "Technologies We [Work With]",
      intro: "We choose the stack to suit the product and your team. These are the ones we use most.",
      align: "center",
      groups: [{ label: "Technologies", items: service.stack }],
    });
  }

  blocks.push(
    {
      type: "cards",
      title: "Ways To [Work With Us]",
      intro: "Pick the model that suits how clear the scope is. We quote in writing before you commit.",
      align: "center",
      columns: 3,
      items: [
        { tag: "Clear scope", title: "Fixed Scope", text: "Agreed features, timeline and price. Suits a well-defined first version.", href: "/engagement-models/", linkLabel: "Compare the models" },
        { tag: "Evolving scope", title: "Time And Material", text: "Work is planned sprint by sprint, so priorities can change as you learn.", href: "/engagement-models/", linkLabel: "Compare the models" },
        { tag: "Ongoing product", title: "Dedicated Team", text: "A team that works only on your product, month to month.", href: "/service/dedicated-developers/", linkLabel: "See dedicated teams" },
      ],
    },
    {
      type: "form",
      id: "enquiry",
      tone: "muted",
      title: "Tell Us What You Want To [Build]",
      align: "left",
      lists: [
        { title: "Helpful to include", items: ["What the product should do", "Who will use it", "Anything already built", "Your target date"] },
        { title: "What happens next", items: ["We read your brief and reply within two working days", "A scoping call to agree goals and must-haves", "A written proposal: scope, timeline and cost"] },
      ],
      form: {
        title: `${service.name} Enquiry`,
        submit: "Send Enquiry",
        kind: `project-${service.slug}`,
        fields: ["name", "email", "phone", "company", "timeline", "message"],
        note: "No obligation. We sign an NDA before you share anything confidential.",
      },
    },
    { type: "faq", title: `${service.name} [Questions]`, items: service.faqs },
    {
      type: "cta",
      variant: "dark",
      title: "Have Something To Build?",
      text: "Tell us the idea and the timeline. We will reply with questions, then a written proposal.",
      ctas: [
        { label: "Talk To An Engineer", href: "/contact-us/" },
        { label: "All Services", href: "/services/", variant: "outline-light" },
      ],
    },
  );

  return { path: `/service/${service.slug}/`, meta: service.meta, blocks };
}
