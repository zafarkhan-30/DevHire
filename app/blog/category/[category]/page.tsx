import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/blog/CategoryView";
import { getBlog } from "@/lib/cms/posts";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getBlog()).allCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).category;
  const collection = await getBlog();
  const category = collection.allCategories().find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} Blog`,
    description: `Blog on ${category.name.toLowerCase()} from the SyntecHire team.`,
    alternates: { canonical: collection.categoryPath(slug) },
  };
}

export default async function CategoryPage({ params }: Props) {
  const slug = (await params).category;
  const collection = await getBlog();
  if (!collection.allCategories().some((c) => c.slug === slug)) notFound();
  return <CategoryView collection={collection} slug={slug} />;
}
