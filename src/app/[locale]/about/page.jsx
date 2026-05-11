import { Text, Box, Heading, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

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

        <Text as="p" fontSize="sm" color="gray.500" textAlign="center" pt={2}>
          {t("welcome")}
        </Text>
      </Stack>
    </Box>
  );
}
