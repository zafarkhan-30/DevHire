import { site } from "@/content/site";
import type { Ebook } from "@/content/ebooks";

// A cover drawn in CSS from the e-book's title and colour tone.
export function EbookCover({ ebook }: { ebook: Ebook }) {
  return (
    <span className={`ebookcover hero__slide--${ebook.tone}`} aria-hidden="true">
      <span className="ebookcover__category">{ebook.category}</span>
      <span className="ebookcover__title">{ebook.title}</span>
      <span className="ebookcover__brand">{site.name}</span>
    </span>
  );
}
