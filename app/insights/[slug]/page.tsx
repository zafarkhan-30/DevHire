import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks/Blocks";
import { AccordionView } from "@/components/blocks/Interactive";
import { LeadFormCard } from "@/components/blocks/LeadFormCard";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { article, breadcrumbs, shareImage } from "@/lib/jsonld";
import { allPosts, findPost, formatDate } from "@/lib/blog";
import { slugify } from "@/lib/slug";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = findPost((await params).slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}/` },
    openGraph: { type: "article", siteName: site.name, title: post.title, description: post.excerpt, publishedTime: post.date, images: [shareImage] },
  };
}

export default async function PostPage({ params }: Props) {
  const post = findPost((await params).slug);
  if (!post) notFound();
  const { default: Body } = await post.load();

  return (
    <div className="page">
      <JsonLd data={[article(post), breadcrumbs(`/insights/${post.slug}/`, post.seoTitle ?? post.title, [{ name: "Insights", path: "/insights/" }])]} />
      <header className="posthead">
        <div className="container">
          <span className="pill">{post.category}</span>
          <h1 className="posthead__title">{post.title}</h1>
          <p className="posthead__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMinutes} min read
          </p>
        </div>
      </header>

      {post.image ? (
        <div className="container">
          <div
            className={`postimage hero__slide--${post.tone}`}
            style={{ backgroundImage: `url(${post.image}), var(--tone)` }}
            aria-hidden="true"
          />
        </div>
      ) : null}

      <div className="container postlayout">
        <aside className="postlayout__side">
          <nav aria-label="Contents" className="toc">
            <p className="toc__title">Contents</p>
            <ol>
              {post.sections.map((section) => (
                <li key={section}>
                  <a href={`#${slugify(section)}`}>{section}</a>
                </li>
              ))}
            </ol>
          </nav>
          <LeadFormCard
            spec={{
              title: "Have A Question?",
              submit: "Send",
              kind: "post-question",
              fields: ["name", "email", "message"],
            }}
          />
        </aside>

        <article className="prose">
          <p className="prose__lead">{post.excerpt}</p>
          <Body />
        </article>
      </div>

      {post.faqs.length ? (
        <section className="section section--muted blk blk--pad-md">
          <div className="container postfaq">
            <h2 className="h2">Questions About This Topic</h2>
            <AccordionView items={post.faqs.map((faq) => ({ title: faq.q, text: faq.a }))} />
          </div>
        </section>
      ) : null}

      <section className="ctab ctab--navy">
        <div className="container">
          <div className="ctab__inner">
            <div className="ctab__copy">
              <h2 className="ctab__title">Get New Articles By Email</h2>
              <p>Sent occasionally. Unsubscribe whenever you like.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <Blocks blocks={[{ type: "insights" }]} />
    </div>
  );
}
