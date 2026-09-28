// PLACEHOLDER: SyntaxHires must confirm its contracting entity, governing law, insurance and employment structure before launch. Nothing on this page may state them until confirmed.
import type { PageDef } from "@/content/types";

// Nothing on this page is legal advice. Keep all copy general until SyntaxHires' counsel has approved specifics.
const page: PageDef = {
  path: "/hire/us-ready-remote-engineering/",
  meta: {
    title: "US Ready Remote Engineering",
    description:
      "Remote engineering teams set up for review by US legal and procurement. See what to ask any vendor about IP, data handling, liability and classification.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: "For US Legal And Procurement Teams",
      title: "Remote Engineering Teams Set Up For [US Companies]",
      text: "Your engineering lead has found the developers. Now legal and procurement need answers. This page lists the questions that usually decide the review, and how we respond to them.",
      bullets: [
        "NDA signed before any code access",
        "Client owns all code and IP",
        "Month-to-month terms with no exit fee",
        "Developers work in your repository and tools",
      ],
      form: {
        title: "Send Your Review Questions",
        intro: "Tell us who is reviewing and what they need to see.",
        submit: "Send Request",
        kind: "us-ready",
        fields: ["name", "email", "phone", "company", "message"],
        note: "We reply to the address you give. Nothing here is legal advice.",
      },
    },
    {
      type: "cards",
      title: "Why Legal Teams [Block] Offshore Vendors",
      align: "center",
      intro: "The objection is rarely about engineering quality. It is about four risks that the paperwork has to address.",
      columns: 4,
      items: [
        {
          icon: "file",
          title: "IP assignment",
          text: "Counsel needs to see how ownership of the work passes from the individual developer, through the vendor, to your company. A gap anywhere in that chain is a concern.",
        },
        {
          icon: "database",
          title: "Data handling",
          text: "Security teams ask what data developers can reach, from which devices and locations, and what happens to access when someone leaves.",
        },
        {
          icon: "shield",
          title: "Liability",
          text: "Procurement wants to know who stands behind the contract, what is covered if something goes wrong and how a dispute would be handled.",
        },
        {
          icon: "users",
          title: "Employment classification",
          text: "Your company directs the daily work, so counsel will ask who engages the developers and how that relationship is structured.",
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "What [US Ready] Should Mean",
      align: "center",
      intro: "A checklist you can use with any vendor, including us. Ask for each answer in writing.",
      columns: 3,
      numbered: true,
      items: [
        {
          icon: "building",
          title: "Ask which entity signs",
          text: "Request the full legal name of the contracting party and where it is registered. Your counsel should know exactly who the agreement is with.",
        },
        {
          icon: "file",
          title: "Ask to see the IP chain",
          text: "Request the assignment clause in the client agreement and the matching clause in the vendor's agreement with each developer.",
        },
        {
          icon: "lock",
          title: "Ask when the NDA is signed",
          text: "Confidentiality terms should be in place before anyone sees code or data, and should bind the individual developers as well as the vendor.",
        },
        {
          icon: "globe",
          title: "Ask about governing law and disputes",
          text: "Request the governing law and dispute resolution clauses early. These are often the slowest items to negotiate.",
        },
        {
          icon: "shield",
          title: "Ask for insurance details",
          text: "Request evidence of the vendor's cover, the types held and the insured entity. Check that the insured entity is the one signing.",
        },
        {
          icon: "users",
          title: "Ask who engages the developers",
          text: "Request a plain description of how developers are engaged and paid, and who is responsible for their local obligations.",
        },
        {
          icon: "database",
          title: "Ask how data access is controlled",
          text: "Request the vendor's policies on devices, credentials and offboarding, and confirm they will follow yours where yours are stricter.",
        },
        {
          icon: "refresh",
          title: "Ask how you exit",
          text: "Request the notice period, any fees on termination and the handover steps. An exit that is clear on paper is easier to approve.",
        },
        {
          icon: "check",
          title: "Ask what happens if the fit is wrong",
          text: "Request the replacement terms in writing, including who covers the handover.",
        },
      ],
      footnote: "This checklist is a starting point for your own review. It is not legal advice.",
    },
    {
      type: "table",
      title: "Common [Contracting Approaches] Compared",
      align: "center",
      intro: "Four ways US companies usually engage engineers abroad, described in general terms. Details vary by vendor and by country.",
      columns: ["Question", "Direct contract with an overseas vendor", "Contract with a vendor's US entity", "Employer of record service", "Your own overseas entity"],
      rows: [
        ["Who you sign with", "A company registered abroad", "A company registered in the US", "The service provider", "No vendor. You employ directly"],
        ["Who engages the developers", "The vendor", "The vendor or an affiliate", "The service provider, on your behalf", "Your own entity"],
        ["Who recruits and screens", "The vendor", "The vendor", "Usually you", "You"],
        ["Setup effort for you", "Lower", "Lower", "Moderate", "Higher"],
        ["What counsel usually reviews first", "Governing law and enforcement", "The link between the US entity and the delivery team", "IP assignment through the provider", "Local employment and tax obligations"],
        ["Flexibility to change team size", "Set by the agreement", "Set by the agreement", "Set by the agreement and local rules", "Set by local employment rules"],
      ],
      footnote: "General descriptions only. Ask your counsel which approach fits your company.",
    },
    {
      type: "cards",
      tone: "muted",
      title: "Industries Where The [Review] Is Strictest",
      align: "center",
      intro: "Tell us your requirements at the start. We will say plainly what we can and cannot meet.",
      columns: 3,
      items: [
        { icon: "credit", title: "Financial Services", text: "Vendor reviews often cover access to customer and transaction data, audit trails and change control." },
        { icon: "heart", title: "Healthcare", text: "Teams that handle patient data usually need specific agreements and tight limits on who can see what." },
        { icon: "cloud", title: "Software As A Service", text: "Your own customers may ask about your vendors, so your contracts with us need to support your answers." },
        { icon: "cart", title: "E-Commerce", text: "Payment data and customer records call for clear boundaries between systems developers can and cannot reach." },
        { icon: "graduation", title: "Education", text: "Student records carry their own rules. Access is normally limited to test data and non-production systems." },
        { icon: "truck", title: "Logistics", text: "Operational systems run around the clock, so reviews focus on release control and incident response." },
      ],
    },
    {
      type: "cards",
      title: "Who This [Works For]",
      align: "center",
      columns: 3,
      items: [
        { icon: "briefcase", title: "General Counsel", text: "You need the documents early and in full, with a named person who can answer questions about them." },
        { icon: "target", title: "Procurement Leads", text: "You need a vendor file that is complete enough to pass your onboarding process without repeated requests." },
        { icon: "code", title: "Engineering Leaders", text: "You have chosen the developers and need the legal review to finish so the work can start." },
      ],
    },
    {
      // PLACEHOLDER: replace with real client results approved in writing. Do not publish these generic cards.
      type: "cards",
      draft: true, // hidden until real content replaces the template
      tone: "dark",
      title: "Client [Results]",
      align: "center",
      columns: 3,
      items: [
        { tag: "Industry", title: "Client result headline", metric: "—", text: "One or two sentences on what the client needed, what the review covered and what the team went on to deliver." },
        { tag: "Industry", title: "Client result headline", metric: "—", text: "One or two sentences on what the client needed, what the review covered and what the team went on to deliver." },
        { tag: "Industry", title: "Client result headline", metric: "—", text: "One or two sentences on what the client needed, what the review covered and what the team went on to deliver." },
      ],
    },
    {
      // PLACEHOLDER: confirm the price, duration and deliverables of the paid technical assessment before stating any of them here.
      type: "steps",
      layout: "row",
      title: "How To [Start]",
      align: "center",
      items: [
        { tag: "Step 1", title: "Send your questions", text: "Use the form on this page. Include any vendor questionnaire your company uses." },
        { tag: "Step 2", title: "Review the documents", text: "We sign an NDA and share the agreement for your counsel to review and mark up." },
        { tag: "Step 3", title: "Interview the developers", text: "Your engineering lead interviews candidates and chooses. No contract is signed before this." },
        { tag: "Step 4", title: "Run a paid technical assessment", text: "A short, paid piece of real work in your repository. Scope and fee are agreed in writing before it starts." },
        { tag: "Step 5", title: "Continue month to month", text: "If the assessment goes well, the engagement continues on month-to-month terms with no exit fee." },
      ],
    },
    {
      type: "faq",
      title: "Legal And Procurement Questions",
      items: [
        {
          q: "Who owns the code and intellectual property?",
          a: "Our policy is that the client owns all code and IP created for them. The assignment wording is set out in the agreement. Your counsel should review it and tell us if it needs to change.",
        },
        {
          q: "Which entity do we contract with, and under which governing law?",
          a: "The contracting party, governing law and dispute resolution process are set out in the agreement. We share the draft early so your counsel can review these points first.",
        },
        {
          q: "What insurance does SyntaxHires carry?",
          a: "Insurance and liability terms are set out in the agreement. Ask us for the current details as part of your vendor review and we will provide them in writing.",
        },
        {
          q: "How are the developers engaged, and does that create risk for us?",
          a: "How developers are engaged, and who is responsible for their local obligations, is set out in the agreement. Whether that meets your company's requirements is a question for your counsel. We will answer their questions directly.",
        },
        {
          q: "How is our data protected?",
          a: "An NDA is signed before any code access, and developers work in your repository and tools under the access you grant. Confidentiality and data handling obligations are set out in the agreement, and we follow your security policies where you provide them.",
        },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Give Your Legal Team What They Need",
      text: "Send the questions. We answer in writing, and your counsel reviews the agreement before anyone commits.",
      ctas: [
        { label: "Talk To Us", href: "/contact-us/" },
        { label: "See How We Vet", href: "/how-we-vet/", variant: "outline-light" },
        { label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/", variant: "outline-light" },
      ],
      note: "Nothing on this page is legal advice.",
    },
  ],
};

export default page;
