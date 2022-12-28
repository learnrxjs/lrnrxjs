import type { MenuItem } from "./../models"

export const mainSidebarMenu: readonly MenuItem[] = [
  {
    type: "GROUP",
    title: "Обзор",
    opened: true,
    links: [
      { type: "LINK", title: "Введение", url: "/guide/overview" },
      { type: "LINK", title: "Потоки", url: "/guide/observables" },
      { type: "LINK", title: "Операторы", url: "/guide/operators" },
      { type: "LINK", title: "Наблюдатель", url: "/guide/observer" },
      { type: "LINK", title: "Подписки", url: "/guide/subscription" },
      { type: "LINK", title: "Сабжекты", url: "/guide/subjects" },
      { type: "LINK", title: "Шедулеры", url: "/guide/schedulers" },
      { type: "LINK", title: "Marble тестирование", url: "/guide/testing/marble-testing" },
    ]
  },
  { type: "LINK", title: "Установка", url: "/guide/installation" },
  { type: "LINK", title: "Импортинг", url: "/guide/importing" },
]