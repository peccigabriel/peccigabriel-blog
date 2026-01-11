"use client";

import { useLocale } from "next-intl";
import { Button, Text } from "@chakra-ui/react";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = () => {
    const newLocale = locale === "pt-br" ? "en" : "pt-br";

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <Button
      onClick={switchLocale}
      variant="outline"
      size="sm"
      aria-label="Switch language"
      disabled={isPending}
    >
      <Text fontSize="sm" fontWeight="500">
        {locale === "pt-br" ? "EN" : "PT"}
      </Text>
    </Button>
  );
}
