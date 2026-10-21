import Link from "next/link";
import type { createCollection } from "@/lib/collection";

type Collection = ReturnType<typeof createCollection>;

// Category filter chips; the current one (or "All") is marked with aria-current.
export function CategoryNav({ collection, current }: { collection: Collection; current?: string }) {
  const items = [
    { name: "All", slug: "", href: `${collection.base}/` },
    ...collection.allCategories().map((c) => ({ ...c, href: collection.categoryPath(c.slug) })),
  ];
  return (
    <ul className="chips chips--center bloglist__categories chips--links" aria-label="Categories">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} aria-current={(current ?? "") === item.slug ? "page" : undefined}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
