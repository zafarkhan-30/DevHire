import { site } from "@/content/site";
import type { createCollection } from "@/lib/collection";

const esc = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// RSS 2.0 feed for a post collection.
export function feedResponse(collection: ReturnType<typeof createCollection>, description: string) {
  const items = collection
    .allPosts()
    .map((post) => {
      const url = new URL(collection.path(post), site.url).toString();
      return `<item><title>${esc(post.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate><category>${esc(post.category)}</category><description>${esc(post.excerpt)}</description></item>`;
    })
    .join("");
  const feed = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)} ${esc(collection.label)}</title><link>${new URL(`${collection.base}/`, site.url)}</link><description>${esc(description)}</description>${items}</channel></rss>`;
  return new Response(feed, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
