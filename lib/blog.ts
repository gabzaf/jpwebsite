import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontMatter(raw: string): { data: Record<string, string>; body: string } {
  if (!raw.startsWith("---")) {
    return { data: {}, body: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, body: raw };
  }

  const matter = raw.slice(4, end).trim();
  const body = raw.slice(end + 4).trim();
  const data: Record<string, string> = {};

  for (const line of matter.split("\n")) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    const value = line.slice(sep + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, body };
}

export function getBlogPosts(): BlogPost[] {
  if (!existsSync(BLOG_DIR)) {
    return [];
  }

  return readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, body } = parseFrontMatter(raw);
      const excerpt =
        data.excerpt ??
        body
          .replace(/^#+\s.*$/gm, "")
          .trim()
          .split("\n")
          .find(Boolean)
          ?.slice(0, 180) ??
        "";

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt,
        body,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}
