import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical notes on hiring remote developers, running distributed teams and modernising legacy systems.",
};

export default function InsightsPage() {
  const posts = allPosts();
  const [featured, ...rest] = posts;
  const side = rest.slice(0, 3);
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className="page">
      <section className="blogtop">
        <div className="container">
          <h1 className="blogtop__title">
            Insights<span className="accent">.</span>
          </h1>
          {featured ? (
            <div className="blogtop__grid">
              <Link href={`/insights/${featured.slug}/`} className="blogtop__feature">
                <span className={`blogtop__image hero__slide--${featured.tone}`} aria-hidden="true" />
                <span className="insights__category">{featured.category}</span>
                <span className="blogtop__headline">{featured.title}</span>
                <span className="blogtop__excerpt">{featured.excerpt}</span>
                <span className="link-arrow">
                  Read More
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
              <ul className="blogtop__side">
                {side.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/insights/${post.slug}/`}>
                      <span className={`blogtop__thumb hero__slide--${post.tone}`} aria-hidden="true" />
                      <span>
                        <span className="insights__category">{post.category}</span>
                        <span className="blogtop__side-title">{post.title}</span>
                        <span className="blogtop__date">{formatDate(post.date)}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section--light blk blk--pad-md">
        <div className="container">
          <ul className="chips chips--center bloglist__categories" aria-label="Categories">
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          <ul className="insights__grid">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/insights/${post.slug}/`} className="insights__card">
                  <span className={`insights__thumb hero__slide--${post.tone}`} aria-hidden="true">
                    <span>{post.title}</span>
                  </span>
                  <span className="insights__body">
                    <span className="insights__category">{post.category}</span>
                    <span className="insights__title">{post.title}</span>
                    <span className="insights__excerpt">{post.excerpt}</span>
                    <span className="insights__arrow">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
