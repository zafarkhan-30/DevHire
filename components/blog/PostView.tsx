import Link from "next/link";
import { AccordionView } from "@/components/blocks/Interactive";
import { LeadFormCard } from "@/components/blocks/LeadFormCard";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { PostGrid } from "@/components/blog/PostGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { Accent } from "@/components/ui/Accent";
import type { Post } from "@/content/blog/posts";
import { site } from "@/content/site";
import { formatDate } from "@/lib/blog";
import type { createCollection } from "@/lib/collection";
import { article, breadcrumbs } from "@/lib/jsonld";
import { slugify } from "@/lib/slug";

type Collection = ReturnType<typeof createCollection>;

// Page for one post: header, banner, contents list with a question form, body, FAQs, newsletter and more to read.
export async function PostView({ post, collection }: { post: Post; collection: Collection }) {
  const { default: Body } = await post.load();
  const more = collection.related(post);

  return (
    <div className="page">
      <JsonLd data={[article(post, collection.base), breadcrumbs(collection.path(post), post.seoTitle ?? post.title, [{ name: collection.label, path: `${collection.base}/` }])]} />
      <header className="posthead">
        <div className="container">
          <Link href={collection.categoryPath(collection.categorySlug(post.category))} className="pill">
            {post.category}
          </Link>
          <h1 className="posthead__title">{post.title}</h1>
          <p className="posthead__meta">
            By {post.author ?? `${site.name} Team`} · <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.updated ? (
              <>
                {" "}
                · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            ) : null}{" "}
            · {post.readMinutes} min read
          </p>
        </div>
      </header>

      {post.image ? (
        <div className="container">
          <div className={`postimage hero__slide--${post.tone}`} style={{ backgroundImage: `url(${post.image}), var(--tone)` }} aria-hidden="true" />
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
          <LeadFormCard spec={{ title: "Have A Question?", submit: "Send", kind: "post-question", fields: ["name", "email", "message"] }} />
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

      {more.length ? (
        <section className="section section--muted insights blk blk--pad-lg">
          <div className="container">
            <div className="insights__head">
              <h2 className="h2">
                <Accent text="Keep [Reading]" />
              </h2>
              <Link href={`${collection.base}/`} className="btn btn--outline">
                View All {collection.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <PostGrid posts={more} base={collection.base} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
