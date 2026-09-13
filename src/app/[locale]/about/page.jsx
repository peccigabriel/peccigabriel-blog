import { Text, Box, Heading, Stack } from "@chakra-ui/react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { canonicalFor } from "@/helpers/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("pageTitle"),
    description: t("intro"),
    alternates: canonicalFor("/about"),
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <Box as="main" py={{ base: 2, md: 4 }} px={{ base: 2, md: 0 }}>
      <Stack gap={{ base: 8, md: 10 }} align="stretch">
        <Heading as="h1" size="3xl" lineHeight="shorter">
          {t("pageTitle")}
        </Heading>

        <Text
          as="p"
          fontSize="xl"
          lineHeight="tall"
          fontWeight="medium"
          color="fg.muted"
        >
          {t("intro")}
        </Text>

        <Stack gap={5}>
          <Text as="p" lineHeight="tall">
            {t("journey")}
          </Text>
          <Text as="p" lineHeight="tall">
            {t("privilege")}
          </Text>
        </Stack>

        <Box borderLeftWidth="4px" borderLeftColor="teal.500" pl={5} py={1}>
          <Text as="p" lineHeight="tall">
            {t("blog")}
          </Text>
        </Box>

        <Text as="p" fontSize="sm" color="fg.muted" textAlign="center" pt={2}>
          {t("welcome")}
        </Text>
      </Stack>
    </Box>
  );
}
