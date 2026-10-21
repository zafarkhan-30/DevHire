import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/blog/CategoryView";
import { blog } from "@/lib/blog";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blog.allCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).category;
  const category = blog.allCategories().find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} Blog`,
    description: `Blog on ${category.name.toLowerCase()} from the SyntecHire team.`,
    alternates: { canonical: blog.categoryPath(slug) },
  };
}

export default async function CategoryPage({ params }: Props) {
  const slug = (await params).category;
  if (!blog.allCategories().some((c) => c.slug === slug)) notFound();
  return <CategoryView collection={blog} slug={slug} />;
}
