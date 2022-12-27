type Icons =
"menu"
| "close"

interface IconProps {
  name: Icons
}

export function Icon(props: IconProps) {
  const icons: Record<Icons, string> = {
    menu: `<svg width="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"/></svg>`,
    close: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/></svg>`,
  }

  const icon = Reflect.get(icons, props.name)

  if (icon === null || typeof icon === "undefined") {
    throw new TypeError(`Icon with name="${ props.name }" not found`)
  }

  return <div class="pointer-events-none" data-icon-name={ props.name } innerHTML={ icon }></div>
}