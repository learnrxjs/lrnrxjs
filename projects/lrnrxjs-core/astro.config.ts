import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import solid from "@astrojs/solid-js"
import mdx from "@astrojs/mdx"
import { rehypeHeadings } from "./src/lib"

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    solid(),
    mdx()
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadings
    ]
  }
})
