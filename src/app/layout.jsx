import { Provider } from "@/components/ui/provider";
import { Container } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
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
