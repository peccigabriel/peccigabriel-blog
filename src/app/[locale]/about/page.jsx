import { Text, Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <Box p={4}>
      <Text>
        <Text fontSize="xl" mb={4}>
          {t("intro")}
        </Text>
        <Text fontSize="xl" mb={4}>
          {t("journey")}
        </Text>
        <Text fontSize="xl" mb={4}>
          {t("privilege")}
        </Text>
        <Text fontSize="xl" mb={4}>
          {t("blog")}
        </Text>
        <Text fontSize="xl" mb={4}>
          {t("welcome")}
        </Text>
      </Text>
    </Box>
  );
}
