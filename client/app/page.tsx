"use client"

import { Hero } from "@/components/blocks/hero"
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

  const heroProps = isClient
    ? {
        heading: t("hero.title"),
        description: t("hero.subtitle"),
        button: {
          text: t("hero.get_started"),
          url: "/create",
        },
      }
    : null

  if (!isClient) {
    return <div></div>
  }

  return (
    <>
      <Hero {...heroProps} />
    </>
  )
}
