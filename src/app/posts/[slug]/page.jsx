import path from "path";
import matter from "gray-matter";
import { promises as fs } from "fs";
import { formatDate } from "@/helpers/formatDate";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Provider } from "@/components/ui/provider";
import { getMDXComponents } from "../../../../mdx-components";
import { Text, Heading, Box } from "@chakra-ui/react";
import Image from "next/image";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const files = await fs
    .readdir(postsDir)
    .then((list) => list.filter((f) => f.endsWith(".mdx")));

  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const file = path.join(process.cwd(), "content", "posts", `${slug}.mdx`);
  const source = await fs.readFile(file, "utf8");
  const { content, data } = matter(source);

  return (
    <Provider>
      <Text fontSize="sm" color="gray.500" m={4} textAlign="right">
        {formatDate(data.date)}
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
