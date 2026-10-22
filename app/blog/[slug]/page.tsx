import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostView } from "@/components/blog/PostView";
import { site } from "@/content/site";
import { shareImage } from "@/lib/jsonld";
import { getBlog } from "@/lib/cms/posts";

type Props = { params: Promise<{ slug: string }> };

// Posts published in the CMS after the last build are rendered on first request, then cached.
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getBlog()).allPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const collection = await getBlog();
  const post = collection.findPost((await params).slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    alternates: { canonical: post.seo?.canonical ?? collection.path(post) },
    ...(post.seo?.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { type: "article", siteName: site.name, title: post.title, description: post.seo?.description ?? post.excerpt, publishedTime: post.date, images: [post.seo?.ogImage ? { url: post.seo.ogImage, width: 1200, height: 630 } : shareImage] },
  };
}

export default async function PostPage({ params }: Props) {
  const collection = await getBlog();
  const post = collection.findPost((await params).slug);
  if (!post) notFound();
  return <PostView post={post} collection={collection} />;
}
