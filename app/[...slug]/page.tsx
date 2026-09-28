import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks/Blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchemas, shareImage } from "@/lib/jsonld";
import { site } from "@/content/site";
import { allPages, findPage } from "@/lib/pages";

type Props = { params: Promise<{ slug: string[] }> };

// Only the paths in the registry exist. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allPages().map((page) => ({ slug: page.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findPage((await params).slug);
  if (!page) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: page.path },
    openGraph: { siteName: site.name, type: "website", title: page.meta.title, description: page.meta.description, url: page.path, images: [shareImage] },
    ...(page.meta.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Page({ params }: Props) {
  const page = findPage((await params).slug);
  if (!page) notFound();
  return (
    <>
      <JsonLd data={pageSchemas(page)} />
      <Blocks blocks={page.blocks} />
    </>
  );
}
