import { Stack, Box, Text, Link } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { AUTHOR } from "@/config/site";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-pecci-074a98169/" },
  { label: "GitHub", href: "https://github.com/peccigabriel" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <Stack as="footer" py={4} textAlign="center">
      <Text fontSize="sm" color="fg.muted">
        © {new Date().getFullYear()} {AUTHOR}. {t("rights")}.
      </Text>
      <Box>
        {SOCIAL_LINKS.map(({ label, href }, i) => (
          <span key={href}>
            {i > 0 && " | "}
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              {label}
            </Link>
          </span>
        ))}
      </Box>
    </Stack>
  );
}
