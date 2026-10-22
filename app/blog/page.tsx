import type { Metadata } from "next";
import { IndexView } from "@/components/blog/IndexView";
import { getBlog } from "@/lib/cms/posts";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog/", types: { "application/rss+xml": "/blog/feed.xml" } },
  description: "Practical notes on hiring remote developers, running distributed teams and modernising legacy systems.",
};

export default async function BlogPage() {
  return <IndexView collection={await getBlog()} />;
}
