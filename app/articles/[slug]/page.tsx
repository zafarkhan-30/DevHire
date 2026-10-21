import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostView } from "@/components/blog/PostView";
import { site } from "@/content/site";
import { shareImage } from "@/lib/jsonld";
import { articles } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.allPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = articles.findPost((await params).slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: articles.path(post) },
    openGraph: { type: "article", siteName: site.name, title: post.title, description: post.excerpt, publishedTime: post.date, images: [shareImage] },
  };
}

export default async function PostPage({ params }: Props) {
  const post = articles.findPost((await params).slug);
  if (!post) notFound();
  return <PostView post={post} collection={articles} />;
}
