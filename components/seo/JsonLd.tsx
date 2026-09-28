// Renders schema.org data as a JSON-LD script tag. "<" is escaped so content can never close the tag.
export function JsonLd({ data }: { data: unknown }) {
  if (!data || (Array.isArray(data) && !data.length)) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
