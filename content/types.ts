// Page schema. Every inner page is a list of blocks rendered by components/blocks/Blocks.tsx.
// In any `title`, words wrapped in [brackets] render in the accent color.

export type Tone = "light" | "muted" | "navy" | "dark";
export type Pad = "lg" | "md" | "sm" | "xs"; // 80 / 64 / 48 / 40 px
export type CtaVariant = "primary" | "outline" | "outline-light" | "white";
export type Cta = { label: string; href: string; variant?: CtaVariant };
export type Stat = { value: string; label: string };
export type TitledText = { title: string; text: string };

// Icon names available in components/ui/Icon.tsx
export type IconKey =
  | "brain" | "cart" | "clock" | "cloud" | "mail" | "monitor" | "network" | "rocket" | "server"
  | "shield" | "smartphone" | "trending" | "users" | "wrench" | "zap" | "check" | "code" | "database"
  | "file" | "globe" | "layers" | "lock" | "search" | "target" | "briefcase" | "chart" | "handshake"
  | "building" | "heart" | "graduation" | "plane" | "truck" | "home" | "credit" | "eye" | "refresh"
  | "git" | "message" | "calendar" | "award" | "compass" | "settings" | "alert";

export type FieldKey = "name" | "email" | "phone" | "company" | "goal" | "projectType" | "teamSize" | "timeline" | "message";

export type FormSpec = {
  title: string;
  intro?: string;
  submit: string;
  // Sent to /api/lead as `type`, used to route the lead once a CRM is connected.
  kind: string;
  fields: FieldKey[];
  note?: string;
};

type Section = {
  id?: string;
  tone?: Tone;
  pad?: Pad;
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: "left" | "center";
};

export type HeroBlock = {
  type: "hero";
  tone?: Tone;
  size?: "lg" | "md"; // 48px or 40px heading
  align?: "left" | "center";
  eyebrow?: string;
  title: string;
  text?: string;
  bullets?: string[];
  ctas?: Cta[];
  stats?: Stat[];
  note?: string;
  form?: FormSpec;
  // Small card beside the copy, e.g. key highlights or a labelled diagram list.
  aside?: { title: string; items: string[] };
  breadcrumbs?: { label: string; href?: string }[];
};

export type PainHookBlock = { type: "painHook"; label: string; text: string };

export type LogosBlock = Section & { type: "logos"; caption?: string; badges?: string[] };

export type CardItem = {
  // Screenshot or photo shown across the top of the card.
  image?: string;
  icon?: IconKey;
  tag?: string;
  title: string;
  text?: string;
  list?: string[];
  metric?: string;
  href?: string;
  linkLabel?: string;
};

export type CardsBlock = Section & {
  type: "cards";
  columns?: 2 | 3 | 4;
  numbered?: boolean;
  items: CardItem[];
  footnote?: string;
};

export type SplitPanel = {
  title: string;
  // "bad" and "good" tint the panel and swap the bullet icon to a cross or a check.
  mood?: "bad" | "good" | "neutral";
  items: (string | TitledText)[];
};

export type SplitBlock = Section & { type: "split"; panels: SplitPanel[]; footnote?: string };

export type TableBlock = Section & {
  type: "table";
  columns: string[];
  rows: string[][];
  // Zero-based index of the column to emphasise (usually the SyntecHire column).
  highlight?: number;
  footnote?: string;
};

export type StepsBlock = Section & {
  type: "steps";
  // row: horizontal numbered timeline. list: vertical numbered list. funnel: narrowing bars.
  layout?: "row" | "list" | "funnel";
  items: { tag?: string; title: string; text?: string }[];
  footnote?: string;
};

export type StatsBlock = Section & { type: "stats"; items: (Stat & { note?: string })[] };

export type TabsBlock = Section & {
  type: "tabs";
  items: {
    label: string;
    icon?: IconKey;
    text: string;
    chipsLabel?: string;
    chips?: string[];
    outcomeLabel?: string;
    outcome?: string;
  }[];
};

export type QuoteBlock = Section & { type: "quote"; text: string; source?: string; stat?: Stat };

export type AccordionBlock = Section & {
  type: "accordion";
  stats?: Stat[];
  columns?: 1 | 2;
  items: { title: string; text: string; chips?: string[] }[];
};

export type VersionsBlock = Section & {
  type: "versions";
  items: { version: string; year: string; tag: string; tagTone?: "primary" | "blue" | "success" | "warning"; text: string }[];
};

// Shows reviews from content/reviews.ts; hidden while that list is empty.
export type TestimonialsBlock = Section & { type: "testimonials" };

export type PricingBlock = Section & {
  type: "pricing";
  tiers: { name: string; level: string; price: string; priceNote?: string; features: string[]; featured?: boolean; cta?: Cta }[];
  footnote?: string;
};

export type QuizBlock = Section & {
  type: "quiz";
  questions: string[];
  // The result with the highest `min` that is <= the number of "yes" answers is shown.
  results: { min: number; title: string; text: string }[];
  cta: Cta;
};

export type FormBlock = Section & {
  type: "form";
  lists?: { title: string; items: string[] }[];
  form: FormSpec;
};

export type CtaBlock = {
  type: "cta";
  id?: string;
  variant?: "dark" | "navy" | "gradient" | "strip";
  title: string;
  text?: string;
  ctas: Cta[];
  note?: string;
};

export type InsightsBlock = { type: "insights"; title?: string };

export type FaqBlock = { type: "faq"; id?: string; title?: string; items: { q: string; a: string }[]; button?: Cta };

export type TextBlock = Section & {
  type: "text";
  paragraphs: string[];
  list?: string[];
  aside?: { title: string; items: string[] };
  ctas?: Cta[];
};

export type LinkGridBlock = Section & {
  type: "linkGrid";
  // More than one group renders a tab per group plus an "All" tab.
  groups: { label: string; items: { label: string; href: string; note?: string }[] }[];
};

export type PeopleBlock = Section & {
  type: "people";
  items: { name: string; role: string; bio?: string; image?: string }[];
};

export type JobsBlock = Section & {
  type: "jobs";
  items: { title: string; location: string; kind: string; href: string }[];
  emptyText: string;
};

export type CaseMetaBlock = { type: "caseMeta"; items: { label: string; value: string }[] };

export type PdfGateBlock = { type: "pdfGate"; tone?: Tone; title: string; submit: string; kind: string };

export type CalculatorBlock = Section & { type: "calculator" };

export type MarqueeBlock = Section & { type: "marquee" };

// Screenshots in a grid, each with a caption. Images are 16:10.
export type GalleryBlock = Section & { type: "gallery"; items: { src: string; alt: string; caption?: string }[] };

// Fee comparison on the pricing page. Percentages are of annual CTC; fees are in rupees per hire.
export type SavingsBlock = Section & {
  type: "savings";
  agencyPercent: number;
  contingency: [number, number];
  flatFee: [number, number];
  defaultCtc: number;
  note: string;
};

// draft: true hides a block until it holds real content (templates, sample results, unverified figures).
export type Block = (
  | HeroBlock | PainHookBlock | LogosBlock | CardsBlock | SplitBlock | TableBlock | StepsBlock | StatsBlock
  | TabsBlock | QuoteBlock | AccordionBlock | VersionsBlock | TestimonialsBlock | PricingBlock | QuizBlock
  | FormBlock | CtaBlock | InsightsBlock | FaqBlock | TextBlock | LinkGridBlock | PeopleBlock | JobsBlock
  | CaseMetaBlock | PdfGateBlock | CalculatorBlock | MarqueeBlock | SavingsBlock | GalleryBlock
) & { draft?: boolean };

export type PageDef = {
  // URL path with leading and trailing slash, e.g. "/service/dedicated-developers/"
  path: string;
  // noindex keeps a page out of search results and the sitemap (e.g. while it waits for real content).
  meta: { title: string; description: string; noindex?: boolean };
  blocks: Block[];
};

// One file per technology in content/hire/. lib/buildHirePage.ts turns it into a PageDef.
export type TechData = {
  slug: string; // URL segment under /hire/, e.g. "react-js-developers"
  name: string; // "React"
  role: string; // plural role, e.g. "React Developers"
  category: "frontend" | "backend" | "mobile" | "cloud" | "data" | "cms" | "design" | "marketing";
  meta: { title: string; description: string };
  hook: string; // one sentence on the pain this hire solves. Qualitative, no invented statistics.
  focus: string; // completes "Hire {role} for ...", e.g. "Dashboards, Storefronts & Real-Time Apps"
  heroText: string;
  heroBullets: string[]; // 3 or 4
  build: { label: string; icon?: IconKey; text: string; stack: string[]; outcome: string }[]; // 4 or 5
  fact: { text: string; source: string }; // a publicly verifiable fact about the technology
  skills: { title: string; text: string; chips: string[] }[]; // 6 to 8
  versions: { version: string; year: string; tag: string; text: string }[]; // 4 to 6, factual history
  chooseWhen: TitledText[]; // 4
  chooseNot: TitledText[]; // 3 or 4
  whyUs: TitledText[]; // 4 or 5, about how SyntecHire works, no numbers
  faqs: { q: string; a: string }[]; // 5 or 6
};

// One file per development service in content/services/. lib/buildServicePage.ts turns it into a PageDef.
// Copy describes how SyntecHire works. No client names, figures or results unless they are verified.
export type ServiceData = {
  slug: string; // URL segment under /service/, e.g. "web-application-development"
  name: string; // "Web Application Development"
  group: "build" | "operate"; // where it is listed in menus and on /services/
  icon: IconKey;
  summary: string; // one sentence, used on cards that link to this page
  meta: { title: string; description: string };
  hero: { title: string; text: string; bullets: string[] }; // 3 bullets
  intro: { title: string; paragraphs: string[]; aside: { title: string; items: string[] } };
  build: { title: string; intro?: string; items: CardItem[] }; // 4 to 6
  audience: CardItem[]; // 3
  approach: { title: string; items: { title: string; text: string }[] }; // 4 or 5 steps
  deliverables: CardItem[]; // 4
  // Links to existing /hire/ or /technologies/ pages. Left out when the service has no matching pages.
  stack?: { label: string; href: string; note?: string }[];
  faqs: { q: string; a: string }[]; // 4 to 6
};

// One file per delivered project in content/work/. lib/buildProjectPage.ts turns it into a case study page,
// and the home page and Our Work page list them. Facts only: what was built and how. No results, figures
// or client quotes unless the client has approved them.
export type ProjectData = {
  slug: string; // URL segment under /case-study/
  name: string; // "FinVest CRM"
  tab: string; // short label for the home page tabs
  kind: string; // "Web application", "Company website"
  industry: string;
  title: string; // headline used on cards and the page hero; [brackets] mark the accent words
  summary: string;
  meta: { title: string; description: string };
  cover: string; // screenshot shown on the home page and on cards
  facts: { label: string; value: string }[]; // up to 5, shown under the hero
  metrics: { icon: IconKey; value: string; label: string }[]; // 3, shown on the home page
  note: { label: string; text: string };
  overview: { paragraphs: string[]; aside: { title: string; items: string[] } };
  built: CardItem[]; // what was built, 4 to 8
  stack: CardItem[]; // technology and what it was used for
  screens: { src: string; alt: string; caption: string }[];
  services: { label: string; href: string }[]; // SyntecHire services this project used
  // Public address of the finished product. Leave out until it is live on its final domain.
  live?: { label: string; href: string };
};
