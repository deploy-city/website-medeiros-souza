import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import english from "../assets/translations/english";
import spanish from "../assets/translations/spanish";
import portuguese from "../assets/translations/portuguese";

const resources = {
  en: {
    translation: english,
  },
  "en-US": {
    translation: english,
  },

  es: {
    translation: spanish,
  },

  pt: {
    translation: portuguese,
  },
  "pt-BR": {
    translation: portuguese,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en-US",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
