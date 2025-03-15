"use client"

import { Hero } from "@/components/blocks/hero"
import { Navbar } from "@/components/blocks/navbar"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export default function Home() {
  const { t, i18n } = useTranslation()
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const match = document.cookie.match(new RegExp(`(^| )i18next=([^;]+)`))
    const storedLang = match ? match[2] : null
    if (storedLang && i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang)
    }
  }, [i18n])

  const navbarProps = isClient
    ? {
        logo: {
          url: "#",
          emoji: "✅",
          alt: "logo",
          title: "Vaalin",
        },
        menu: [
          { title: t("navbar.home"), url: "#" },
          { title: t("navbar.new_election"), url: "#" },
          { title: t("navbar.vote"), url: "#" },
        ],
        auth: {
          language: {
            text: t("next_language"),
            url: "#",
            onClick: () => {
              const newLang = i18n.language === "en" ? "fi" : "en"
              document.cookie = `i18next=${newLang}path=/max-age=31536000`
              i18n.changeLanguage(newLang)
            },
          },
          login: { text: t("navbar.login"), url: "#" },
          signup: { text: t("navbar.signup"), url: "#" },
        },
      }
    : null

  const heroProps = isClient
    ? {
        heading: t("hero.title"),
        description: t("hero.subtitle"),
        button: {
          text: t("hero.get_started"),
          url: "#",
        },
      }
    : null

  if (!isClient) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Navbar {...navbarProps} />
      <Hero {...heroProps} />
    </>
  )
}
