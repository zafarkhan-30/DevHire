import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { cmsImage } from "@/lib/cms/image";
import { slugify } from "@/lib/slug";

type Child = { text?: string };
type Node = { children?: Child[] };

const plain = (node: Node) => (node.children ?? []).map((child) => child.text ?? "").join("");

const components: PortableTextComponents = {
  block: {
    // Ids let the contents list link to each section.
    h2: ({ children, value }) => <h2 id={slugify(plain(value as Node))}>{children}</h2>,
    h3: ({ children, value }) => <h3 id={slugify(plain(value as Node))}>{children}</h3>,
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      return href.startsWith("/") ? <Link href={href}>{children}</Link> : <a href={href} rel="noopener" target="_blank">{children}</a>;
    },
  },
  types: {
    image: ({ value }) => (
      <figure>
        <Image src={cmsImage(value, 1200, 675)} alt={value.alt ?? ""} width={1200} height={675} sizes="(min-width: 992px) 720px, 100vw" />
        {value.caption ? <figcaption>{value.caption}</figcaption> : null}
      </figure>
    ),
    callout: ({ value }) => (
      <aside className="prose__callout">
        {value.title ? <strong>{value.title}</strong> : null}
        <p>{value.text}</p>
      </aside>
    ),
    ctaButton: ({ value }) => (
      <p>
        <Link href={value.href} className="btn btn--primary">
          {value.label}
        </Link>
      </p>
    ),
  },
};

export function PortableBody({ value }: { value: unknown[] }) {
  return <PortableText value={value as never} components={components} />;
}
