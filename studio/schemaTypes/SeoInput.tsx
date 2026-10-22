import { Card, Flex, Stack, Text } from "@sanity/ui";
import { useFormValue, type ObjectInputProps } from "sanity";

type Block = { style?: string; children?: { text?: string }[] };
type Check = { ok: boolean; label: string };

const textOf = (block: Block) => (block.children ?? []).map((child) => child.text ?? "").join("");

// Live checklist for the focus keyword. It guides the writer; it never blocks publishing.
export function SeoInput(props: ObjectInputProps) {
  const value = (props.value ?? {}) as { focusKeyword?: string; metaTitle?: string; description?: string };
  const title = (useFormValue(["title"]) as string) ?? "";
  const slug = (useFormValue(["slug", "current"]) as string) ?? "";
  const excerpt = (useFormValue(["excerpt"]) as string) ?? "";
  const body = ((useFormValue(["body"]) as Block[]) ?? []).filter((block) => block && block.children);

  const keyword = (value.focusKeyword ?? "").trim().toLowerCase();
  const has = (haystack: string) => haystack.toLowerCase().includes(keyword);
  const words = body.map(textOf).join(" ").split(/\s+/).filter(Boolean).length;
  const searchTitle = value.metaTitle || title;
  const description = value.description || excerpt;
  const firstParagraph = body.find((block) => block.style === "normal" || !block.style);
  const headings = body.filter((block) => block.style === "h2" || block.style === "h3").map(textOf);

  const checks: Check[] = keyword
    ? [
        { ok: has(searchTitle), label: "Keyword is in the search title" },
        { ok: searchTitle.length >= 30 && searchTitle.length <= 60, label: `Search title is 30–60 characters (now ${searchTitle.length})` },
        { ok: has(description), label: "Keyword is in the search description" },
        { ok: description.length >= 120 && description.length <= 160, label: `Search description is 120–160 characters (now ${description.length})` },
        { ok: has(slug.replace(/-/g, " ")), label: "Keyword is in the URL slug" },
        ...(body.length
          ? [
              { ok: Boolean(firstParagraph) && has(textOf(firstParagraph!)), label: "Keyword is in the first paragraph" },
              { ok: headings.some(has), label: "Keyword is in at least one heading" },
              { ok: words >= 600, label: `Article is 600+ words (now ${words})` },
            ]
          : []),
      ]
    : [];

  return (
    <Stack space={4}>
      <Card padding={3} radius={2} tone={keyword ? "default" : "caution"} border>
        <Stack space={3}>
          <Text size={1} weight="semibold">
            Keyword checklist
          </Text>
          {keyword ? (
            checks.map((check) => (
              <Flex key={check.label} gap={2}>
                <Text size={1}>{check.ok ? "✅" : "⚠️"}</Text>
                <Text size={1}>{check.label}</Text>
              </Flex>
            ))
          ) : (
            <Text size={1}>Enter a focus keyword below to see how well this page is optimised for it.</Text>
          )}
        </Stack>
      </Card>
      {props.renderDefault(props)}
    </Stack>
  );
}
