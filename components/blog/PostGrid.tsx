import Link from "next/link";
import { ArrowRight } from "@/components/ui/SpriteIcons";
import { postImageStyle } from "@/lib/blog";
import type { Post } from "@/content/blog/posts";

export function PostGrid({ posts, base }: { posts: Post[]; base: string }) {
  return (
    <ul className="insights__grid">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`${base}/${post.slug}/`} className="insights__card">
            <span className={`insights__thumb hero__slide--${post.tone}`} style={postImageStyle(post, true)} aria-hidden="true">
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
  );
}
