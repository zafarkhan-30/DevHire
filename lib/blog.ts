import type { CSSProperties } from "react";
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

// Background for a post's card or banner. With an image, a dark shade is laid over the lower part when
// text sits on top of it ("shaded"). Without an image, the card keeps its colour tone from the CSS class.
export function postImageStyle(post: Post, shaded = false): CSSProperties | undefined {
  if (!post.image) return undefined;
  const shade = shaded ? "linear-gradient(180deg, rgba(8, 14, 28, 0.1) 0%, rgba(8, 14, 28, 0.55) 55%, rgba(8, 14, 28, 0.9) 100%), " : "";
  return { backgroundImage: `${shade}url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" };
}
