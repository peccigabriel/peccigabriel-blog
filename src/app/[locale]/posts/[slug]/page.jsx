import path from "path";
import matter from "gray-matter";
import { promises as fs } from "fs";
import { formatDate } from "@/helpers/formatDate";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Provider } from "@/components/ui/provider";
import { getMDXComponents } from "../../../../../mdx-components";
import { Text, Heading, Box } from "@chakra-ui/react";
import Image from "next/image";
import ReadingProgress from "@/components/ReadingProgress";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const BASE_URL = "https://peccigabriel.com";

export async function generateStaticParams() {
  const params = [];

  for (const locale of routing.locales) {
    const postsDir = path.join(process.cwd(), "content", "posts", locale);

    try {
      const files = await fs.readdir(postsDir);
      const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

      for (const filename of mdxFiles) {
        params.push({
          locale,
          slug: filename.replace(/\.mdx$/, ""),
        });
      }
    } catch {
      // Directory doesn't exist yet, skip
    }
  }

  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "postList" });

  const file = path.join(
    process.cwd(),
    "content",
    "posts",
    locale,
    `${slug}.mdx`
  );
  const source = await fs.readFile(file, "utf8");
  const { data } = matter(source);

  const title = data.title;
  const description =
    data.description || t("readDescription", { title: data.title });
  const imageUrl = `${BASE_URL}${data.cover}`;
  const postUrl =
    locale === "pt-br"
      ? `${BASE_URL}/posts/${slug}`
      : `${BASE_URL}/${locale}/posts/${slug}`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      locale: locale === "pt-br" ? "pt_BR" : "en_US",
      url: postUrl,
      siteName: "[peccigabriel]",
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: data.coverAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PostPage({ params }) {
  const { locale, slug } = await params;
  const file = path.join(
    process.cwd(),
    "content",
    "posts",
    locale,
    `${slug}.mdx`
  );
  const source = await fs.readFile(file, "utf8");
  const { content, data } = matter(source);

  return (
    <Provider>
      <ReadingProgress />
      <Text fontSize="sm" color="gray.500" m={4} textAlign="right">
        {formatDate(data.date, locale)}
      </Text>
      <hr style={{ margin: "1rem 0" }} />
      <Heading as="h1" size="3xl" mt="8" mb="4">
        {data.title}
      </Heading>
      <Box mb={8} mt={8}>
        <Image
          src={data.cover}
          alt={data.coverAlt}
          width={1920}
          height={1080}
        />
      </Box>
      <MDXRemote source={content} components={getMDXComponents()} />
    </Provider>
  );
}
