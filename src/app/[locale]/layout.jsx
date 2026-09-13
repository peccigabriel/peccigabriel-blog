import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { Provider } from "@/components/ui/provider";
import { Container } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { BASE_URL, SITE_NAME, AUTHOR } from "@/config/site";
import { canonicalFor } from "@/helpers/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    authors: [{ name: AUTHOR }],
    alternates: canonicalFor("/"),
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: locale === "pt-br" ? "pt_BR" : "en_US",
      url: BASE_URL,
      siteName: SITE_NAME,
      title,
      description,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Habilita render estático das páginas deste layout (next-intl).
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <Navbar />
            <Container maxW="2xl" marginTop="4" flex={1}>
              {children}
            </Container>
            <Footer />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
