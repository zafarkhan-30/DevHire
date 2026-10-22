import { cache } from "react";
import { posts as blogPosts, type Post } from "@/content/blog/posts";
import { posts as articlePosts } from "@/content/articles/posts";
import { PortableBody } from "@/components/blog/PortableBody";
import { createCollection } from "@/lib/collection";
import { cmsFetch } from "./client";
import { cmsImage } from "./image";

type Kind = "blogPost" | "article";

type CmsPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  updated?: string;
  author?: string;
  tone?: Post["tone"];
  image?: unknown;
  body: { _type: string; style?: string; children?: { text?: string }[] }[];
  faqs?: Post["faqs"];
  seo?: { metaTitle?: string; description?: string; noindex?: boolean; canonical?: string; ogImage?: unknown };
};

const QUERY = `*[_type == $kind && defined(slug.current)]{
  title, "slug": slug.current, excerpt, category,
  "date": publishedAt, "updated": updatedAt, author, tone, image, body, faqs, seo
}`;

const WORDS_PER_MINUTE = 220;

const textOf = (block: CmsPost["body"][number]) => (block.children ?? []).map((child) => child.text ?? "").join("");

function toPost(doc: CmsPost): Post {
  const body = doc.body ?? [];
  const words = body.map(textOf).join(" ").split(/\s+/).filter(Boolean).length;
  return {
    slug: doc.slug,
    title: doc.title,
    seoTitle: doc.seo?.metaTitle || undefined,
    excerpt: doc.excerpt,
    category: doc.category,
    date: doc.date.slice(0, 10),
    updated: doc.updated?.slice(0, 10),
    author: doc.author || undefined,
    readMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    tone: doc.tone ?? "blue",
    image: doc.image ? cmsImage(doc.image) : undefined,
    // The contents list is built from the article's own headings, so editors never maintain it by hand.
    sections: body.filter((block) => block.style === "h2").map(textOf),
    faqs: doc.faqs ?? [],
    seo: doc.seo
      ? { description: doc.seo.description, noindex: doc.seo.noindex, canonical: doc.seo.canonical, ogImage: doc.seo.ogImage ? cmsImage(doc.seo.ogImage, 1200, 630) : undefined }
      : undefined,
    load: async () => ({ default: () => PortableBody({ value: body }) }),
  };
}

// Posts from the CMS plus the ones still kept as files. A CMS post replaces a file post with the same slug.
async function load(kind: Kind, local: Post[]): Promise<Post[]> {
  const docs = (await cmsFetch<CmsPost[]>(QUERY, { kind })) ?? [];
  const cms = docs.map(toPost);
  const taken = new Set(cms.map((post) => post.slug));
  return [...cms, ...local.filter((post) => !taken.has(post.slug))];
}

export const getBlog = cache(async () => createCollection(await load("blogPost", blogPosts), "/blog", "Blog"));
export const getArticles = cache(async () => createCollection(await load("article", articlePosts), "/articles", "Articles"));
