const localeMap = {
  "pt-br": "pt-BR",
  en: "en-US",
};

// Datas do frontmatter são "YYYY-MM-DD" (sem hora) e o JS parseia como UTC.
// Sem timeZone: "UTC", fusos negativos (BRT) renderizam o dia anterior.
export const formatDate = (date, locale = "pt-br") =>
  new Date(date).toLocaleDateString(localeMap[locale] || "pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
