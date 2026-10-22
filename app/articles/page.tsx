import type { Metadata } from "next";
import { IndexView } from "@/components/blog/IndexView";
import { getArticles } from "@/lib/cms/posts";

export const metadata: Metadata = {
  title: "Articles",
  alternates: { canonical: "/articles/", types: { "application/rss+xml": "/articles/feed.xml" } },
  description: "In-depth guides on planning, building and modernising software, written by our engineers and delivery leads.",
};

export default async function ArticlesPage() {
  return <IndexView collection={await getArticles()} />;
}
