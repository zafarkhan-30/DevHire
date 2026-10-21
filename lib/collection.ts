import type { Post } from "@/content/blog/posts";
import { slugify } from "@/lib/slug";

// A set of dated posts served under one URL base, such as /blog or /articles.
export type Collection = {
  base: string;
  label: string;
  posts: Post[];
};

export function createCollection(posts: Post[], base: string, label: string) {
  const byDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const categorySlug = (category: string) => slugify(category);

  return {
    base,
    label,
    allPosts: () => byDate,
    latestPosts: (count: number) => byDate.slice(0, count),
    findPost: (slug: string) => byDate.find((post) => post.slug === slug),
    path: (post: Post) => `${base}/${post.slug}/`,
    categoryPath: (slug: string) => `${base}/category/${slug}/`,
    categorySlug,
    allCategories: () => {
      const counts = new Map<string, number>();
      for (const post of byDate) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
      return [...counts].map(([name, count]) => ({ name, slug: categorySlug(name), count }));
    },
    postsInCategory: (slug: string) => byDate.filter((post) => categorySlug(post.category) === slug),
    // Other posts to read next: same category first, then the newest, never the current one.
    related: (post: Post, count = 3) =>
      [...byDate.filter((p) => p.slug !== post.slug && p.category === post.category), ...byDate.filter((p) => p.slug !== post.slug && p.category !== post.category)].slice(0, count),
  };
}
