import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { articles } from "@/lib/articles";
import { allCategories, allPosts } from "@/lib/blog";
import { ebooks } from "@/content/ebooks";
import { allPages } from "@/lib/pages";

// Confirmation pages and pages marked noindex stay out of search results.
const hidden = ["/thank-you/"];
const legal = ["/privacy-policy/", "/terms-and-conditions/", "/cookies-policy/", "/gdpr/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/blog/",
    ...allPages()
      .filter((page) => !page.meta.noindex)
      .map((page) => page.path)
      .filter((path) => !hidden.includes(path)),
    ...allCategories().map((category) => `/blog/category/${category.slug}/`),
    ...allPosts().map((post) => `/blog/${post.slug}/`),
    "/articles/",
    ...articles.allCategories().map((category) => articles.categoryPath(category.slug)),
    ...articles.allPosts().map((post) => articles.path(post)),
    "/ebooks/",
    ...ebooks.map((ebook) => `/ebooks/${ebook.slug}/`),
    ...legal,
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
