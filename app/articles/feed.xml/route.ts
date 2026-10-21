import { feedResponse } from "@/lib/feed";
import { articles } from "@/lib/articles";

export const dynamic = "force-static";

export function GET() {
  return feedResponse(articles, "In-depth guides on planning, building and modernising software, written by our engineers and delivery leads.");
}
