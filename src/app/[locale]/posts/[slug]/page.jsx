import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Text, Heading, Box, Separator } from "@chakra-ui/react";
import { formatDate } from "@/helpers/formatDate";
import { getPostBySlug, getPostSlugs } from "@/helpers/getAllPosts";
import { absoluteUrl, canonicalFor } from "@/helpers/seo";
import { getMDXComponents } from "@/components/mdx-components";
import ReadingProgress from "@/components/ReadingProgress";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/config/site";

// Só as rotas vindas de generateStaticParams existem; qualquer outro slug → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPostSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);
  if (!post) return {};

  const t = await getTranslations({ locale, namespace: "postList" });
  const description =
    post.description || t("readDescription", { title: post.title });
  const imageUrl = absoluteUrl(post.cover);
  const postPath = `/posts/${slug}`;

  return {
    title: post.title,
    description,
    alternates: canonicalFor(postPath),
    openGraph: {
      type: "article",
      locale: locale === "pt-br" ? "pt_BR" : "en_US",
      url: absoluteUrl(postPath),
      siteName: SITE_NAME,
      title: post.title,
      description,
      publishedTime: post.date,
      images: [{ url: imageUrl, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PostPage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(locale, slug);
  if (!post) notFound();

  return (
    <Box as="article">
      <ReadingProgress />
      <Text fontSize="sm" color="fg.muted" m={4} textAlign="right">
        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
      </Text>
      <Separator my={4} />
      <Heading as="h1" size="3xl" mt="8" mb="4">
        {post.title}
      </Heading>
      <Box
        position="relative"
        aspectRatio="16 / 9"
        overflow="hidden"
        rounded="md"
        my={8}
      >
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 672px"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <MDXRemote source={post.content} components={getMDXComponents()} />
    </Box>
  );
}
