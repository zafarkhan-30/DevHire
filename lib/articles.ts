import { posts } from "@/content/articles/posts";
import { createCollection } from "@/lib/collection";

export const articles = createCollection(posts, "/articles", "Articles");
