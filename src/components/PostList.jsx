import { Stack, Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import { getLocale, getTranslations } from "next-intl/server";
import { formatDate } from "@/helpers/formatDate";
import { getAllPosts } from "@/helpers/getAllPosts";
import { Link as IntlLink } from "@/i18n/navigation";

export default async function PostList() {
  const locale = await getLocale();
  const t = await getTranslations("postList");
  const posts = getAllPosts(locale);

  if (posts.length === 0) {
    return (
      <Stack mt={8}>
        <Text textAlign="center" color="fg.muted">
          {t("empty")}
        </Text>
      </Stack>
    );
  }

  return (
    <Stack mt={8}>
      {posts.map(({ slug, title, date, excerpt }) => {
        const href = `/posts/${slug}`;
        return (
          <Box as="article" key={slug} w="100%" mb={8}>
            <Flex direction="column" alignItems="center" textAlign="center">
              <Heading as="h2" size="3xl">
                <Link asChild textDecoration="none">
                  <IntlLink href={href}>{title}</IntlLink>
                </Link>
              </Heading>
              <Text fontSize="sm" color="fg.muted" m={4}>
                <time dateTime={date}>{formatDate(date, locale)}</time>
              </Text>
              <Text
                textAlign="justify"
                fontSize="lg"
                maxW="60ch"
                mx="auto"
                mb={4}
              >
                {excerpt}
              </Text>
              <Button asChild size="sm" variant="outline">
                <IntlLink href={href}>{t("readMore")}</IntlLink>
              </Button>
            </Flex>
          </Box>
        );
      })}
    </Stack>
  );
}
