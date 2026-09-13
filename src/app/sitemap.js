import { getAllPosts } from "@/helpers/getAllPosts";
import { absoluteUrl } from "@/helpers/seo";
import { routing } from "@/i18n/routing";

export default function sitemap() {
  // Sem prefixo de locale nas URLs (localePrefix: "never"), então cada slug
  // entra uma única vez, com a data do post mais recente entre os idiomas.
  const bySlug = new Map();
  for (const locale of routing.locales) {
    for (const post of getAllPosts(locale)) {
      const prev = bySlug.get(post.slug);
      if (!prev || new Date(post.date) > new Date(prev)) {
        bySlug.set(post.slug, post.date);
      }
    }
  }

  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.5 },
    ...[...bySlug].map(([slug, date]) => ({
      url: absoluteUrl(`/posts/${slug}`),
      lastModified: new Date(date),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
