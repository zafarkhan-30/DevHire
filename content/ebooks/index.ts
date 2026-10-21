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
};

// Content lives in data.json and the PDFs are built from it with scripts/build-ebooks.py.
export const ebooks = data as Ebook[];

export const findEbook = (slug: string) => ebooks.find((ebook) => ebook.slug === slug);

export const ebookFile = (ebook: Ebook) => `/downloads/ebooks/${ebook.slug}.pdf`;
