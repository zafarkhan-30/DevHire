import { feedResponse } from "@/lib/feed";
import { blog } from "@/lib/blog";

export const dynamic = "force-static";

export function GET() {
  return feedResponse(blog, "Practical notes on hiring remote developers, running distributed teams and modernising legacy systems.");
}
