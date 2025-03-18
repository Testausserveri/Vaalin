"use client"

import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export default function Home() {
  const { t } = useTranslation()
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    setIsClient(true)
  })


  if (!isClient) {
    return <div></div>
  }

  return (
    <>
    </>
  )
}
