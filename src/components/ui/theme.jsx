import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { domine, dm } from "@/fonts/fonts";

const customConfig = defineConfig({
  globalCss: {
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      fontSize: "1.25rem",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: domine.style.fontFamily },
        body: { value: dm.style.fontFamily },
      },
    },
  },
});

export const initialThemeConfig = createSystem(defaultConfig, customConfig);
