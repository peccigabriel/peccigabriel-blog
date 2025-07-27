"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { initialThemeConfig } from "./theme";

export function Provider({ children }) {
  return (
    <ChakraProvider value={initialThemeConfig}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
