import { Provider } from "@/components/ui/provider";
import { Container } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "[peccigabriel] | Blog",
  description: "Blog de um desenvolvedor curioso",
  authors: [{ name: "Gabriel Pecci" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://peccigabriel.com",
    siteName: "[peccigabriel]",
    title: "[peccigabriel]",
    description: "Blog de um desenvolvedor curioso",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://peccigabriel.com" />
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontSize: "1.25rem",
        }}
      >
        <Provider>
          <Navbar />
          <Container maxW="2xl" marginTop="4" flex={1} flexWrap="wrap">
            {children}
          </Container>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
