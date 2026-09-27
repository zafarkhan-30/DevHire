import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allPosts } from "@/lib/blog";
import { allPages } from "@/lib/pages";

// Confirmation and placeholder pages stay out of search results.
const hidden = ["/thank-you/", "/case-study/case-study-1/", "/case-study/case-study-2/"];
const legal = ["/privacy-policy/", "/terms-and-conditions/", "/cookies-policy/", "/gdpr/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/insights/",
    ...allPages().map((page) => page.path).filter((path) => !hidden.includes(path)),
    ...allPosts().map((post) => `/insights/${post.slug}/`),
    ...legal,
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
