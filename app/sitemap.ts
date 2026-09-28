import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allPosts } from "@/lib/blog";
import { allPages } from "@/lib/pages";

// Confirmation pages and pages marked noindex stay out of search results.
const hidden = ["/thank-you/"];
const legal = ["/privacy-policy/", "/terms-and-conditions/", "/cookies-policy/", "/gdpr/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/insights/",
    ...allPages()
      .filter((page) => !page.meta.noindex)
      .map((page) => page.path)
      .filter((path) => !hidden.includes(path)),
    ...allPosts().map((post) => `/insights/${post.slug}/`),
    ...legal,
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
