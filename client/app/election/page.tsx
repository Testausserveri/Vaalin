"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  IconAddressBook,
  IconCheckbox,
} from "@tabler/icons-react"

import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { toggleLanguage } from "@/i18n"

import data from "./data.json"

export default function Page() {
  const { t } = useTranslation()
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    setIsClient(true)
  })

  if (!isClient) {
    return <div></div>
  }

  const sidebarData = {
    user: {
      name: "Organisation Ry",
      email: "org@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    top: {
      title: t("sidebar.new_election"),
      url: "#",
    },
    navMain: [
      {
        title: t("sidebar.elections"),
        url: "#",
        icon: IconCheckbox,
      },
      {
        title: t("sidebar.membership_list"),
        url: "#",
        icon: IconAddressBook,
      }
    ],
    navSecondary: [
      {
        title: t("next_language"),
        onClick: toggleLanguage,
      }
    ]
  }

  const header = t("elections.header")

  const tableData = {
    cards: {
      no_elections: t("elections.no_elections"),
      no_stv: t("elections.no_stv"),
      no_voters: t("elections.no_voters"),
      no_cast: t("elections.no_cast"),
    },
    tabs: {
      all: t("elections.tabs_all"),
      finished: t("elections.tabs_finished"),
      open: t("elections.tabs_open"),
      created: t("elections.tabs_created"),
      new: t("sidebar.new_election")
    },
    headers: {
      name: t("elections.headers_name"),
      system: t("elections.headers_system"),
      group: t("elections.headers_group"),
      status: t("elections.headers_status"),
      eligible: t("elections.headers_eligible"),
      cast: t("elections.headers_cast"),
      winner: t("elections.headers_winner"),
    },
    admin: {
      selected: t("table.selected"),
      rowspp: t("table.rowspp"),
      pageno: t("table.pageno"),
      nores: t("table.nores"),
      open: t("table.open"),
      edit: t("table.edit"),
      copy: t("table.copy"),
      delete: t("table.delete"),
    }
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar data={sidebarData} variant="inset" />
      <SidebarInset>
        <SiteHeader headerText={header} />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards text={tableData.cards} />
              <DataTable tabTitles={tableData.tabs} columnHeaders={tableData.headers} tableAdmin={tableData.admin} data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
