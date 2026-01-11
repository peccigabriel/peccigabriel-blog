import { Stack, Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import { formatDate } from "@/helpers/formatDate";
import { getAllPosts } from "@/helpers/getAllPosts";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";

export default async function PostList() {
  const locale = await getLocale();
  const t = await getTranslations("postList");
  const posts = getAllPosts(locale);

  if (posts.length === 0) {
    return (
      <Stack mt={8}>
        <Text textAlign="center" color="gray.500">
          {t("empty")}
        </Text>
      </Stack>
    );
  }

  return (
    <Stack mt={8}>
      {posts.map(({ slug, title, date, excerpt }) => {
        const postPath = getPathname({ locale, href: `/posts/${slug}` });
        return (
          <Box key={slug} w="100%" mb={8}>
            <Flex direction="column" alignItems="center" textAlign="center">
              <Heading as="h1" size="3xl">
                <Link href={postPath} textDecoration="none">
                  {title}
                </Link>
              </Heading>
              <Text fontSize="sm" color="gray.500" m={4}>
                {formatDate(date, locale)}
              </Text>
              <Box w="100%" textAlign="center">
                <Text
                  textAlign="justify"
                  fontSize="lg"
                  maxW="60ch"
                  mx="auto"
                  mb={4}
                >
                  {excerpt}
                </Text>
              </Box>
              <Button as="a" href={postPath} size="sm" variant="outline">
                {t("readMore")}
              </Button>
            </Flex>
          </Box>
        );
      })}
    </Stack>
  );
}
