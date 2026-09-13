import { Stack, Heading, Text, Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Link as IntlLink } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <Stack as="main" align="center" textAlign="center" gap={4} py={16}>
      <Heading as="h1" size="3xl">
        404
      </Heading>
      <Text color="fg.muted">{t("message")}</Text>
      <Button asChild variant="outline" size="sm">
        <IntlLink href="/">{t("backHome")}</IntlLink>
      </Button>
    </Stack>
  );
}
