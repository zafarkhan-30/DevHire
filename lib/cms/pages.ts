import { cache } from "react";
import type { Block, Cta, PageDef, Tone } from "@/content/types";
import { allPages } from "@/lib/pages";
import { cmsFetch } from "./client";
import { cmsImage } from "./image";

type Button = { label: string; href: string };
type Seo = { metaTitle?: string; description?: string; noindex?: boolean; canonical?: string; ogImage?: unknown };

type Section =
  | { _type: "heroSection"; eyebrow?: string; title: string; text?: string; bullets?: string[]; buttons?: Button[]; showForm?: boolean }
  | { _type: "textSection"; tone?: Tone; title?: string; paragraphs: string[]; bullets?: string[]; buttons?: Button[] }
  | { _type: "cardsSection"; tone?: Tone; title?: string; intro?: string; columns?: 2 | 3 | 4; cards: { title: string; text?: string; href?: string }[] }
  | { _type: "faqSection"; title?: string; items: { q: string; a: string }[] }
  | { _type: "ctaSection"; title: string; text?: string; buttons: Button[] }
  | { _type: "insightsSection"; title?: string };

type Override = {
  path: string;
  heroTitle?: string;
  heroText?: string;
  faqs?: { q: string; a: string }[];
  extraSections?: Section[];
  seo?: Seo;
};

type Landing = { path: string; title: string; sections: Section[]; seo?: Seo };

const ctas = (buttons?: Button[]): Cta[] | undefined => buttons?.map((button) => ({ label: button.label, href: button.href }));

function toBlock(section: Section, slug: string): Block {
  switch (section._type) {
    case "heroSection":
      return {
        type: "hero",
        tone: "light",
        size: "lg",
        eyebrow: section.eyebrow,
        title: section.title,
        text: section.text,
        bullets: section.bullets,
        ctas: ctas(section.buttons),
        ...(section.showForm ? { form: { title: "Request A Call Back", submit: "Send Request", kind: `landing-${slug}`, fields: ["name", "email", "phone", "company", "message"] as const } } : {}),
      } as Block;
    case "textSection":
      return { type: "text", tone: section.tone, title: section.title, paragraphs: section.paragraphs, list: section.bullets, ctas: ctas(section.buttons) };
    case "cardsSection":
      return { type: "cards", tone: section.tone, title: section.title, intro: section.intro, columns: section.columns, items: section.cards };
    case "faqSection":
      return { type: "faq", title: section.title, items: section.items };
    case "ctaSection":
      return { type: "cta", variant: "navy", title: section.title, text: section.text, ctas: ctas(section.buttons) ?? [] };
    case "insightsSection":
      return { type: "insights", title: section.title };
  }
}

const SEO = "seo{metaTitle, description, noindex, canonical, ogImage}";

const overrides = cache(
  async () => (await cmsFetch<Override[]>(`*[_type == "pageOverride" && defined(path)]{path, heroTitle, heroText, faqs, extraSections, ${SEO}}`)) ?? [],
);

const landings = cache(async () => (await cmsFetch<Landing[]>(`*[_type == "landingPage" && defined(path)]{title, path, sections, ${SEO}}`)) ?? []);

export type CmsPage = PageDef & { canonical?: string; ogImage?: string };

function withSeo(page: PageDef, seo?: Seo): CmsPage {
  if (!seo) return page;
  return {
    ...page,
    meta: {
      title: seo.metaTitle || page.meta.title,
      description: seo.description || page.meta.description,
      noindex: seo.noindex || page.meta.noindex,
    },
    canonical: seo.canonical || undefined,
    ogImage: seo.ogImage ? cmsImage(seo.ogImage, 1200, 630) : undefined,
  };
}

function applyOverride(page: PageDef, override: Override): CmsPage {
  let blocks = [...page.blocks];
  if (override.heroTitle || override.heroText) {
    blocks = blocks.map((block) => (block.type === "hero" ? { ...block, title: override.heroTitle || block.title, text: override.heroText || block.text } : block));
  }
  if (override.faqs?.length) {
    const items = override.faqs;
    blocks = blocks.map((block) => (block.type === "faq" ? { ...block, items } : block));
  }
  if (override.extraSections?.length) {
    const extra = override.extraSections.map((section) => toBlock(section, page.path));
    const lastCta = blocks.map((block) => block.type).lastIndexOf("cta");
    blocks.splice(lastCta === -1 ? blocks.length : lastCta, 0, ...extra);
  }
  return withSeo({ ...page, blocks }, override.seo);
}

// A page from the site's code with any CMS edits applied, or a landing page made entirely in the CMS.
export async function getPage(path: string): Promise<CmsPage | undefined> {
  const base = allPages().find((page) => page.path === path);
  if (base) {
    const override = (await overrides()).find((item) => item.path === path);
    return override ? applyOverride(base, override) : base;
  }
  const landing = (await landings()).find((item) => item.path === path);
  if (!landing) return undefined;
  const slug = path.replace(/\//g, "-").replace(/^-|-$/g, "");
  return withSeo({ path, meta: { title: landing.title, description: "" }, blocks: landing.sections.map((section) => toBlock(section, slug)) }, landing.seo);
}

export const getLandingPaths = async () => (await landings()).map((landing) => landing.path);

// Pages whose search settings were edited in the CMS and marked "hide from search engines".
export const getHiddenPaths = async () => {
  const hidden = (await overrides()).filter((item) => item.seo?.noindex).map((item) => item.path);
  const hiddenLandings = (await landings()).filter((item) => item.seo?.noindex).map((item) => item.path);
  return [...hidden, ...hiddenLandings];
};
