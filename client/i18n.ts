"use client"

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend"
import enNs from "./public/locales/en.json";
import fiNs from "./public/locales/fi.json";

export const defaultNS = "ns1";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: any, namespace: any) => import(`./public/locales/${language}.json`)))
  .init({
    debug: true,
    lng: undefined,
    fallbackLng: "en",
    defaultNS,
    resources: {
        en: {
          ns1: enNs
        },
        fi: {
          ns1: fiNs
        },
      },
  });

export default i18next;
