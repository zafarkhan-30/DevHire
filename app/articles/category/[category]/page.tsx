import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/blog/CategoryView";
import { getArticles } from "@/lib/cms/posts";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getArticles()).allCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).category;
  const collection = await getArticles();
  const category = collection.allCategories().find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} Articles`,
    description: `Articles on ${category.name.toLowerCase()} from the SyntecHire team.`,
    alternates: { canonical: collection.categoryPath(slug) },
  };
}

export default async function CategoryPage({ params }: Props) {
  const slug = (await params).category;
  const collection = await getArticles();
  if (!collection.allCategories().some((c) => c.slug === slug)) notFound();
  return <CategoryView collection={collection} slug={slug} />;
}
