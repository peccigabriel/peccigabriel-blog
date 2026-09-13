import { BASE_URL } from "@/config/site";

// localePrefix é "never": pt-br e en compartilham a mesma URL, então o
// canonical é sempre a URL sem prefixo (o idioma vem do cookie NEXT_LOCALE).
export const absoluteUrl = (pathname = "/") => new URL(pathname, BASE_URL).href;

export const canonicalFor = (pathname = "/") => ({
  canonical: absoluteUrl(pathname),
});
