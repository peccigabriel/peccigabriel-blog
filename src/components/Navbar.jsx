"use client";

import { useState } from "react";
import { ColorModeButton } from "@/components/ui/color-mode.jsx";
import { domine, poppins } from "@/fonts/fonts";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import {
  Box,
  Container,
  Flex,
  Text,
  IconButton,
  Portal,
  Menu,
  Link,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((o) => !o);
  const t = useTranslations("navbar");

  const Icon = isOpen ? RiCloseLargeLine : RxHamburgerMenu;

  const menuItems = [
    { label: t("home").toUpperCase(), href: "/" },
    { label: t("about").toUpperCase(), href: "/about" },
  ];

  return (
    <Box>
      <Container maxW="2xl">
        <Flex h={24} align="center" justify="space-between">
          <Flex align="center" gap={4}>
            <Menu.Root open={isOpen} onOpenChange={toggleMenu}>
              <Menu.Trigger asChild>
                <IconButton aria-label="Menu" variant="ghost" size="md">
                  <Icon size={24} />
                </IconButton>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    {menuItems.map(({ label, href }) => (
                      <Menu.Item key={label} asChild>
                        <Link
                          href={href}
                          fontFamily={poppins.style.fontFamily}
                          fontSize="sm"
                          fontWeight="500"
                          cursor="pointer"
                          transition="transform 0.2s ease-in-out"
                          _hover={{
                            textDecoration: "none",
                            transform: "scale(1.05)",
                            color: "primary",
                          }}
                        >
                          {label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Link
              href="/"
              _hover={{ textDecoration: "none", color: "primary" }}
            >
              <Text
                fontFamily={domine.style.fontFamily}
                fontSize="xl"
                fontWeight="bold"
                color="text"
              >
                👨🏼‍💻 [peccigabriel]
              </Text>
            </Link>
          </Flex>
          <Box display="flex" alignItems="center" gap={4}>
            <LanguageSwitcher />
            <ColorModeButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
