import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export default i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: { loadPath: "/locale/{{lng}}/translation.json" },
    debug: false,
    detection: {
      caches: ["localStorage", "cookie"],
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    supportedLngs: ["en", "ar"],
  });
