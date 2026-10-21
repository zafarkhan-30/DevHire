import type { Metadata } from "next";
import Link from "next/link";
import { EbookCover } from "@/components/ebooks/EbookCover";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { ebooks } from "@/content/ebooks";
import { breadcrumbs } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "E-books",
  alternates: { canonical: "/ebooks/" },
  description: "Free practical guides on scoping software projects, modernising legacy systems and building remote engineering teams. Download as PDF.",
};

export default function EbooksPage() {
  return (
    <div className="page">
      <JsonLd data={breadcrumbs("/ebooks/", "E-books")} />
      <section className="blogtop">
        <div className="container">
          <h1 className="blogtop__title">
            E-books<span className="accent">.</span>
          </h1>
          <p className="blogtop__intro">Short, practical guides for founders and technology leaders. Free to download as PDF, written by the engineers who run these projects.</p>
        </div>
      </section>

      <section className="section section--light blk blk--pad-lg">
        <div className="container">
          <ul className="ebooks__grid">
            {ebooks.map((ebook) => (
              <li key={ebook.slug}>
                <Link href={`/ebooks/${ebook.slug}/`} className="ebooks__card">
                  <EbookCover ebook={ebook} />
                  <span className="ebooks__body">
                    <span className="insights__category">{ebook.category}</span>
                    <span className="ebooks__title">{ebook.title}</span>
                    <span className="ebooks__text">{ebook.subtitle}</span>
                    <span className="ebooks__meta">
                      PDF · {ebook.pages} pages · {ebook.chapters.length} chapters
                    </span>
                    <span className="link-arrow">
                      Get The E-book
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ctab ctab--navy">
        <div className="container">
          <div className="ctab__inner">
            <div className="ctab__copy">
              <h2 className="ctab__title">Get New Guides By Email</h2>
              <p>One practical email a month. Unsubscribe whenever you like.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
