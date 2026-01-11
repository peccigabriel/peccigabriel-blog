import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Provider } from "@/components/ui/provider";
import { Container } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    authors: [{ name: "Gabriel Pecci" }],
    openGraph: {
      type: "website",
      locale: locale === "pt-br" ? "pt_BR" : "en_US",
      url: "https://peccigabriel.com",
      siteName: "[peccigabriel]",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Provider>
        <Navbar />
        <Container maxW="2xl" marginTop="4" flex={1} flexWrap="wrap">
          {children}
        </Container>
        <Footer />
      </Provider>
    </NextIntlClientProvider>
  );
}
