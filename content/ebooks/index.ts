import data from "./data.json";

export type Ebook = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tone: "amber" | "violet" | "teal" | "blue";
  description: string;
  audience: string[];
  learn: string[];
  pages: number;
  chapters: { title: string; summary: string }[];
  // PDF uploaded in the CMS. Ebooks kept as files use /downloads/ebooks/<slug>.pdf instead.
  file?: string;
  seo?: { description?: string; noindex?: boolean };
};

// Content lives in data.json and the PDFs are built from it with scripts/build-ebooks.py.
export const ebooks = data as Ebook[];

export const findEbook = (slug: string) => ebooks.find((ebook) => ebook.slug === slug);

export const ebookFile = (ebook: Ebook) => ebook.file ?? `/downloads/ebooks/${ebook.slug}.pdf`;
