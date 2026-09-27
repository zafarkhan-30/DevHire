import { posts, type Post } from "@/content/blog/posts";

const byDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function allPosts(): Post[] {
  return byDate;
}

export function latestPosts(count: number): Post[] {
  return byDate.slice(0, count);
}

export function findPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
