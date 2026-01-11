import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts(locale = "pt-br") {
  const postsDir = path.join(process.cwd(), "content", "posts", locale);

  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs
    .readdirSync(postsDir)
    .filter((name) => name.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDir, filename);
    const source = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(source);
    const excerpt =
      content.trim().replace(/\n+/g, " ").substring(0, 280).trim() + "…";

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
