import { Hero } from "@/components/blocks/hero"
import { Navbar } from "@/components/blocks/navbar"
import { useTranslation } from "../i18n/i18n"

export default async function Home({ params }: { params: Promise<{ lng: string }>}) {
  const { lng } = await params
  const { t } = await useTranslation(lng, "")

  let navbarProps = {
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
      language: { text: t("next_language"), url: "#" },
      login: { text: t("navbar.login"), url: "#" },
      signup: { text: t("navbar.signup"), url: "#" },
    },
  }

  let heroProps = {
    heading: t("hero.title"),
    description: t("hero.subtitle"),
    button: {
      text: t("hero.get_started"),
      url: "#",
    },
  }

  return (
    <>
      <Navbar {...navbarProps} />
      <Hero {...heroProps} />
    </>
  );
}
