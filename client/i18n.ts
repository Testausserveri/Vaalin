import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import enNs from "./public/locales/en.json"
import fiNs from "./public/locales/fi.json"

export const defaultNS = "ns1"
export const cookieName = "i18next"

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  defaultNS,
  resources: {
    en: {
      ns1: enNs,
    },
    fi: {
      ns1: fiNs,
    },
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lng: string) => {
  if (typeof window !== "undefined") {
    document.cookie = `${cookieName}=${lng};path=/;max-age=31536000`
  }
  return i18next.changeLanguage(lng)
};

if (typeof window !== "undefined") {
  const match = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`))
  const storedLang = match ? match[2] : null
  if (storedLang) {
    i18next.changeLanguage(storedLang)
  }
}

export default i18next;
