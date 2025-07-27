import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { domine, dm, crimson } from "@/fonts/fonts";

const customConfig = defineConfig({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  theme: {
    tokens: {
      fonts: {
        heading: domine.style.fontFamily,
        body: dm.style.fontFamily,
      },
    },
  },
});

export const initialThemeConfig = createSystem(defaultConfig, customConfig);
