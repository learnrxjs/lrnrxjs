import { visit } from "unist-util-visit"

export function rehypeHeadings() {
  return (tree: any) => {
    visit(tree, "element", (node: any) => {
      if (![ "h1", "h2", "h3", "h4", "h5", "h6" ].some((name) => name === node.tagName)) {
        return
      }

      const anchorElement = {
        type: "element",
        tagName: "a",
        value: "",
        properties: {
          href: `#${ node.properties.id }`,
          className: "header-anchor"
        },
        children: [
          {
            type: "text",
            value: " §"
          }
        ]
      }

      node.children.push(anchorElement)
    })
  }
}