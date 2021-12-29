import i18n from "i18next";
import translationEN from "./en/translation.json";
import translationZH from "./zh/translation.json";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];
const availableLanguages = ["en", "zh"];
export const resources = {
  en: { translation: translationEN },
  zh: { translation: translationZH },
} as const;

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  detection: {
    checkWhitelist: true
  },
  debug: false,
  supportedLngs: availableLanguages,
  interpolation: {
    escapeValue: false
  }
});
