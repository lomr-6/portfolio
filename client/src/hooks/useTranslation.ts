import type { Lang } from "@/types";
import { useTranslation as useI18nTranslation } from "react-i18next";

export function useTranslation() {
  const { t, i18n } = useI18nTranslation();

  const lang = i18n.language as Lang;

  const toggleLang = () => {
    i18n.changeLanguage(lang === "fr" ? "en" : "fr");
  };

  return { t, i18n, lang, toggleLang };
}
