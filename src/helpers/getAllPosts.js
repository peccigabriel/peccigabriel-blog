import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = (locale) =>
  path.join(process.cwd(), "content", "posts", locale);

// Fallback para posts sem `description` no frontmatter: remove a sintaxe
// markdown mais comum antes de cortar o excerpt.
const stripMarkdown = (md) =>
  md
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/(\*\*|__|\*|_|`)/g, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/\n+/g, " ")
    .trim();

export function getPostSlugs(locale) {
  const dir = postsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

export function getPostBySlug(locale, slug) {
  const fullPath = path.join(postsDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf-8"));
  const excerpt =
    data.description || `${stripMarkdown(content).substring(0, 280).trim()}…`;

  return { slug, ...data, excerpt, content };
}

export function getAllPosts(locale = "pt-br") {
  return getPostSlugs(locale)
    .map((slug) => getPostBySlug(locale, slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
