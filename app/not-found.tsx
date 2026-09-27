import { Blocks } from "@/components/blocks/Blocks";

export default function NotFound() {
  return (
    <Blocks
      blocks={[
        {
          type: "hero",
          tone: "navy",
          align: "center",
          eyebrow: "404",
          title: "This Page Does Not [Exist]",
          text: "The link may be old or mistyped. These pages are a good place to start again.",
          ctas: [
            { label: "Go To Home", href: "/" },
            { label: "Browse Technologies", href: "/technologies/" },
          ],
        },
      ]}
    />
  );
}
