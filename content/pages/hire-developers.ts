import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values DevHire must confirm before launch.
const page: PageDef = {
  path: "/hire-developers/",
  meta: {
    title: "Hire Developers",
    description:
      "Tell DevHire the stack, the role and the timeline. We reply within two working days with a shortlist plan. You interview before any contract.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      align: "left",
      eyebrow: "Hire Developers",
      title: "Tell Us What You Need. We Will Find The [Right Developer]",
      text: "A few details about the role are enough. We read every request and reply with a clear next step.",
      bullets: [
        "You interview the developer before any contract",
        "Month-to-month terms with no exit fee",
        "You own all code and IP",
      ],
      form: {
        title: "Post Your Requirement",
        intro: "Share the stack, the team size and when you want to start.",
        submit: "Send Request",
        kind: "hire-request",
        fields: ["name", "email", "phone", "company", "goal", "teamSize", "timeline", "message"],
        note: "No obligation. We reply within two working days.",
      },
    },
    {
      type: "steps",
      layout: "row",
      title: "After You [Submit]",
      align: "center",
      items: [
        { title: "We Review Your Request", text: "We read what you sent and reply within two working days, often with a few questions." },
        { title: "You Receive A Shortlist", text: "We share profiles of developers who fit your stack and the kind of system you run." },
        { title: "You Interview And Decide", text: "You meet the developers and choose. Nothing is signed before this." },
      ],
    },
    {
      // PLACEHOLDER: client logos, shown only with each client's permission.
      type: "logos",
      tone: "muted",
      title: "Teams That Build With [DevHire]",
      caption: "References on request.",
    },
    {
      type: "faq",
      items: [
        { q: "How soon will I hear back?", a: "We reply within two working days. The reply includes any questions we have and a proposed next step." },
        { q: "Can I interview the developers?", a: "Yes. You interview every candidate and make the final decision before any contract is signed." },
        { q: "Is there a minimum commitment?", a: "Engagements run month to month and there is no exit fee. The notice period is stated in the contract." },
        { q: "What if the developer is not the right fit?", a: "Tell us. If the fit is wrong, we replace the developer and hand over the context." },
      ],
      button: { label: "See All Questions", href: "/faq/" },
    },
  ],
};

export default page;
