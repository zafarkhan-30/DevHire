import { CategoryNav } from "@/components/blog/CategoryNav";
import { PostGrid } from "@/components/blog/PostGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs } from "@/lib/jsonld";
import type { createCollection } from "@/lib/collection";

type Collection = ReturnType<typeof createCollection>;

export function CategoryView({ collection, slug }: { collection: Collection; slug: string }) {
  const category = collection.allCategories().find((c) => c.slug === slug);
  if (!category) return null;

  return (
    <div className="page">
      <JsonLd data={breadcrumbs(collection.categoryPath(slug), category.name, [{ name: collection.label, path: `${collection.base}/` }])} />
      <section className="blogtop">
        <div className="container">
          <h1 className="blogtop__title">
            {category.name}
            <span className="accent">.</span>
          </h1>
        </div>
      </section>
      <section className="section section--light blk blk--pad-md">
        <div className="container">
          <CategoryNav collection={collection} current={slug} />
          <PostGrid posts={collection.postsInCategory(slug)} base={collection.base} />
        </div>
      </section>
    </div>
  );
}
