import { Stack, Box, Text, Link } from "@chakra-ui/react";

const URL_LINKEDIN = "https://www.linkedin.com/in/gabriel-pecci-074a98169/";
const URL_GITHUB = "https://github.com/peccigabriel";

export default function Footer() {
  const CustomLink = ({ children, href }) => (
    <Link
      href={href}
      color="blue.500"
      _hover={{ textDecoration: "underline" }}
      isExternal
      target="_blank"
      cursor="pointer"
      fontSize="sm"
    >
      {children}
    </Link>
  );

  return (
    <Stack as="footer" py={4} textAlign="center">
      <Text fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} Gabriel Pecci. All rights reserved.
      </Text>
      <Box>
        <CustomLink href={URL_LINKEDIN}>LinkedIn</CustomLink>
        {" | "}
        <CustomLink href={URL_GITHUB}>GitHub</CustomLink>
      </Box>
    </Stack>
  );
}
