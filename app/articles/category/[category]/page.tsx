import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/blog/CategoryView";
import { articles } from "@/lib/articles";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.allCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).category;
  const category = articles.allCategories().find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} Articles`,
    description: `Articles on ${category.name.toLowerCase()} from the SyntecHire team.`,
    alternates: { canonical: articles.categoryPath(slug) },
  };
}

export default async function CategoryPage({ params }: Props) {
  const slug = (await params).category;
  if (!articles.allCategories().some((c) => c.slug === slug)) notFound();
  return <CategoryView collection={articles} slug={slug} />;
}
