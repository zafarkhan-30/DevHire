import Link from "next/link";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { PostGrid } from "@/components/blog/PostGrid";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { formatDate, postImageStyle } from "@/lib/blog";
import type { createCollection } from "@/lib/collection";

type Collection = ReturnType<typeof createCollection>;

// Index page for a post collection: featured post, three side posts, category chips and the full grid.
export function IndexView({ collection, intro }: { collection: Collection; intro?: string }) {
  const posts = collection.allPosts();
  const [featured, ...rest] = posts;
  const side = rest.slice(0, 3);

  return (
    <div className="page">
      <section className="blogtop">
        <div className="container">
          <h1 className="blogtop__title">
            {collection.label}
            <span className="accent">.</span>
          </h1>
          {intro ? <p className="blogtop__intro">{intro}</p> : null}
          {featured ? (
            <div className="blogtop__grid">
              <Link href={collection.path(featured)} className="blogtop__feature">
                <span className={`blogtop__image hero__slide--${featured.tone}`} style={postImageStyle(featured)} aria-hidden="true" />
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
                    <Link href={collection.path(post)}>
                      <span className={`blogtop__thumb hero__slide--${post.tone}`} style={postImageStyle(post)} aria-hidden="true" />
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
          <CategoryNav collection={collection} />
          <PostGrid posts={posts} base={collection.base} />
        </div>
      </section>
    </div>
  );
}
