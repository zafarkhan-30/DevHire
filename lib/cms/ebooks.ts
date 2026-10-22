import { cache } from "react";
import { ebooks as localEbooks, type Ebook } from "@/content/ebooks";
import { cmsFetch } from "./client";

type CmsEbook = Omit<Ebook, "file"> & { file?: string };

const QUERY = `*[_type == "ebook" && defined(slug.current)]|order(_createdAt desc){
  title, "slug": slug.current, subtitle, category, tone, description,
  audience, learn, pages, chapters, "file": pdf.asset->url, seo{description, noindex}
}`;

// E-books from the CMS plus the ones still kept as files. A CMS e-book replaces a file one with the same slug.
export const getEbooks = cache(async (): Promise<Ebook[]> => {
  const docs = (await cmsFetch<CmsEbook[]>(QUERY)) ?? [];
  const cms = docs.map((doc) => ({ ...doc, audience: doc.audience ?? [], learn: doc.learn ?? [], chapters: doc.chapters ?? [], tone: doc.tone ?? "blue" }));
  const taken = new Set(cms.map((ebook) => ebook.slug));
  return [...cms, ...localEbooks.filter((ebook) => !taken.has(ebook.slug))];
});

export const findEbook = async (slug: string) => (await getEbooks()).find((ebook) => ebook.slug === slug);
