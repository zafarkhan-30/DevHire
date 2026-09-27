import { Blocks } from "@/components/blocks/Blocks";
import { insights } from "@/content/home";

// Shows the three newest blog posts.
export function RelatedInsights() {
  return <Blocks blocks={[{ type: "insights", title: insights.title }]} />;
}
