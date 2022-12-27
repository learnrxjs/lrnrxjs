import { MenuLink } from "../models"

export const HEADER_MENU_LINKS: readonly MenuLink[] = [
  {
    type: "LINK",
    title: "Введение",
    url: "/guide/overview"
  },
  {
    type: "LINK",
    title: "API",
    url: "/api"
  },
  /* {
    type: "LINK",
    title: "Блог",
    url: "/blog"
  }, */
  {
    type: "LINK",
    title: "Руководства",
    url: "/tutorials"
  }
]