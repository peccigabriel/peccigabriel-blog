export const formatDate = (date, locale = "pt-br") => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const localeMap = {
    "pt-br": "pt-BR",
    en: "en-US",
  };
  return new Date(date).toLocaleDateString(localeMap[locale] || "pt-BR", options);
};
