import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getArticles, getBlog } from "@/lib/cms/posts";
import { getEbooks } from "@/lib/cms/ebooks";
import { getHiddenPaths, getLandingPaths } from "@/lib/cms/pages";
import { allPages } from "@/lib/pages";

// Confirmation pages and pages marked noindex stay out of search results.
const hidden = ["/thank-you/"];
const legal = ["/privacy-policy/", "/terms-and-conditions/", "/cookies-policy/", "/gdpr/"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blog, articles, ebooks, landingPaths, hiddenByCms] = await Promise.all([getBlog(), getArticles(), getEbooks(), getLandingPaths(), getHiddenPaths()]);
  const paths = [
    "/",
    "/blog/",
    ...landingPaths,
    ...allPages()
      .filter((page) => !page.meta.noindex)
      .map((page) => page.path)
      .filter((path) => !hidden.includes(path)),
    ...blog.allCategories().map((category) => `/blog/category/${category.slug}/`),
    ...blog.allPosts().filter((post) => !post.seo?.noindex).map((post) => `/blog/${post.slug}/`),
    "/articles/",
    ...articles.allCategories().map((category) => articles.categoryPath(category.slug)),
    ...articles.allPosts().filter((post) => !post.seo?.noindex).map((post) => articles.path(post)),
    "/ebooks/",
    ...ebooks.map((ebook) => `/ebooks/${ebook.slug}/`),
    ...legal,
  ];
  return paths.filter((path) => !hiddenByCms.includes(path)).map((path) => ({ url: new URL(path, site.url).toString() }));
}
