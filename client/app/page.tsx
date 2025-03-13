"use client"

import { Hero } from "@/components/blocks/hero"
import { Navbar } from "@/components/blocks/navbar"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()

  let navbarProps = {
    logo: {
      url: "#",
      emoji: "✅",
      alt: "logo",
      title: "Vaalin",
    },
    menu: [
      { title: "Home", url: "#" },
      { title: "New election", url: "#" },
      { title: "Vote", url: "#" },
    ],
    auth: {
      language: { text: t("next_language"), url: "#" },
      login: { text: t("buttons.login"), url: "#" },
      signup: { text: t("buttons.signup"), url: "#" },
    },
  }
  return (
    <>
      <Navbar {...navbarProps} />
      <Hero />
    </>
  );
}
