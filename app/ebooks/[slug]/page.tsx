import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EbookCover } from "@/components/ebooks/EbookCover";
import { EbookGate } from "@/components/ebooks/EbookGate";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accent } from "@/components/ui/Accent";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { ebookFile } from "@/content/ebooks";
import { findEbook, getEbooks } from "@/lib/cms/ebooks";
import { site } from "@/content/site";
import { breadcrumbs, shareImage } from "@/lib/jsonld";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getEbooks()).map((ebook) => ({ slug: ebook.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ebook = await findEbook((await params).slug);
  if (!ebook) return {};
  return {
    title: `${ebook.title} (Free E-book)`,
    description: ebook.seo?.description ?? ebook.description,
    alternates: { canonical: `/ebooks/${ebook.slug}/` },
    ...(ebook.seo?.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { type: "website", siteName: site.name, title: ebook.title, description: ebook.subtitle, images: [shareImage] },
  };
}

export default async function EbookPage({ params }: Props) {
  const ebook = await findEbook((await params).slug);
  if (!ebook) notFound();
  const others = (await getEbooks()).filter((item) => item.slug !== ebook.slug);

  return (
    <div className="page">
      <JsonLd data={breadcrumbs(`/ebooks/${ebook.slug}/`, ebook.title, [{ name: "E-books", path: "/ebooks/" }])} />
      <header className="posthead ebookhead">
        <div className="container ebookhead__inner">
          <div className="ebookhead__copy">
            <Link href="/ebooks/" className="pill">
              Free E-book · {ebook.category}
            </Link>
            <h1 className="posthead__title">{ebook.title}</h1>
            <p className="ebookhead__sub">{ebook.subtitle}</p>
            <p className="posthead__meta">
              PDF · {ebook.pages} pages · {ebook.chapters.length} chapters
            </p>
          </div>
          <EbookCover ebook={ebook} />
        </div>
      </header>

      <div className="container postlayout ebooklayout">
        <div className="prose ebooklayout__main">
          <p className="prose__lead">{ebook.description}</p>

          <h2 id="learn">What you will learn</h2>
          <ul className="ebooklist">
            {ebook.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 id="inside">What is inside</h2>
          <ol className="ebookchapters">
            {ebook.chapters.map((chapter) => (
              <li key={chapter.title}>
                <strong>{chapter.title}</strong>
                <span>{chapter.summary}</span>
              </li>
            ))}
          </ol>

          <h2 id="audience">Who it is for</h2>
          <ul className="ebooklist">
            {ebook.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="postlayout__side ebooklayout__side">
          <EbookGate title={ebook.title} file={ebookFile(ebook)} />
        </aside>
      </div>

      {others.length ? (
        <section className="section section--muted blk blk--pad-lg">
          <div className="container">
            <div className="insights__head">
              <h2 className="h2">
                <Accent text="More Free [Guides]" />
              </h2>
              <Link href="/ebooks/" className="btn btn--outline">
                All E-books
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <ul className="ebooks__grid">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/ebooks/${item.slug}/`} className="ebooks__card">
                    <EbookCover ebook={item} />
                    <span className="ebooks__body">
                      <span className="insights__category">{item.category}</span>
                      <span className="ebooks__title">{item.title}</span>
                      <span className="ebooks__text">{item.subtitle}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  );
}
