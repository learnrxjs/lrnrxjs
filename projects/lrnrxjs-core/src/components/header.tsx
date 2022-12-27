import { mergeProps } from "solid-js"
import { For } from "solid-js/web"

import type { MenuLink } from "../models"
import { HEADER_MENU_LINKS } from "../data"
import { Icon } from "./icon"

type Props = {
  links?: readonly MenuLink[]
  currentPagePathname: string
}

const defaultProps: Partial<Props> = {
  links: HEADER_MENU_LINKS
}

export function Header(props: Props) {
  const { links, currentPagePathname } = mergeProps(defaultProps, props) as Required<Props>

  return <header class="border-b py-4 px-8">
    <div class="wrap">
      <div class="flex justify-between items-center">
        <a href="/">
          <span class="text-xl font-bold">Lrnrxjs</span>
        </a>
      
        <nav class="hidden md:block">
          <ul class="flex items-center gap-8">
            <For each={links}>
              {(link) => {
                return <li>
                  <a class="header-link text-gray-500 hover:text-pink-500"
                    class:is-active={link.url.endsWith(currentPagePathname)}
                    href={link.url}
                  >{link.title}</a>
                </li>
              }}
            </For>
          </ul>
        </nav>
    
        <button class="w-[2em] h-[2em] md:hidden">
          <Icon name="menu" />
        </button>
      </div>
    </div>
  </header>
}