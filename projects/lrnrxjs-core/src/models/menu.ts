export interface MenuGroup {
  type: "GROUP"
  title: string
  opened: boolean
  links: readonly MenuLink[]
}

export interface MenuLink {
  type: "LINK"
  title: string
  url: string
}

export type MenuItem = MenuGroup | MenuLink