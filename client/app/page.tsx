"use client"

import { Hero } from "@/components/blocks/hero"
import NavbarWrapper from "@/components/blocks/navbarwrapper"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export default function Home() {
  const { t } = useTranslation()
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    setIsClient(true)
  })

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
      <NavbarWrapper />
      <Hero {...heroProps} />
    </>
  )
}
