import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks/Blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchemas, shareImage } from "@/lib/jsonld";
import { site } from "@/content/site";
import { getPage } from "@/lib/cms/pages";
import { allPages } from "@/lib/pages";

type Props = { params: Promise<{ slug: string[] }> };

// Pages in the code are built ahead of time. Landing pages created in the CMS are built on first visit, then cached.
export const dynamicParams = true;

export function generateStaticParams() {
  return allPages().map((page) => ({ slug: page.path.split("/").filter(Boolean) }));
}

const pathOf = (slug: string[]) => `/${slug.join("/")}/`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPage(pathOf((await params).slug));
  if (!page) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: page.canonical ?? page.path },
    openGraph: {
      siteName: site.name,
      type: "website",
      title: page.meta.title,
      description: page.meta.description,
      url: page.path,
      images: [page.ogImage ? { url: page.ogImage, width: 1200, height: 630 } : shareImage],
    },
    ...(page.meta.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Page({ params }: Props) {
  const page = await getPage(pathOf((await params).slug));
  if (!page) notFound();
  return (
    <>
      <JsonLd data={pageSchemas(page)} />
      <Blocks blocks={page.blocks} />
    </>
  );
}
