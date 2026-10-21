import type { Metadata } from "next";
import { IndexView } from "@/components/blog/IndexView";
import { blog } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog/", types: { "application/rss+xml": "/blog/feed.xml" } },
  description: "Practical notes on hiring remote developers, running distributed teams and modernising legacy systems.",
};

export default function BlogPage() {
  return <IndexView collection={blog} />;
}
