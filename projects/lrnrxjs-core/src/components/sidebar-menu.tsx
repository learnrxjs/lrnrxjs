import { For, mergeProps } from "solid-js"
import { mainSidebarMenu } from "../data"
import type { MenuItem } from "../models"

type Props = {
  links?: readonly MenuItem[]
  currentPageUrl: URL
}

const defaultProps: Partial<Props> = {
  links: mainSidebarMenu
}

export function SidebarMenu(props: Props) {
  const { links, currentPageUrl } = mergeProps(defaultProps, props)
  const pathName: string = currentPageUrl.pathname

  return <ul class="flex flex-col gap-2">
    <For each={ links }>{(groupOrLink) => {
      if (groupOrLink.type === "GROUP") {
        return <details open={ groupOrLink.opened }>
          <summary class="font-bold uppercase select-none cursor-pointer">{ groupOrLink.title }</summary>
          <ul class="pl-4">
            <For each={ groupOrLink.links }>{(link) => {
              return <li>
                <a class="sidebar-link" classList={{ "is-active": link.url.endsWith(pathName) }} href={ link.url }>{ link.title }</a>
              </li>
            }}</For>
          </ul>
        </details>
      }

      return <li>
        <a class="sidebar-link" classList={{ "is-active": groupOrLink.url.endsWith(pathName) }} href={ groupOrLink.url }>{ groupOrLink.title }</a>
      </li>
    }}</For>
  </ul>
}