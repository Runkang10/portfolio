import { ArrowUpRightIcon } from "lucide-react"
import { ReactNode } from "react"

const GenericLink = ({
  href,
  text,
  isExternal = false,
}: {
  href: string
  text: string | ReactNode
  isExternal?: boolean
}) => {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-sidebar-primary hover:text-foreground hover:underline"
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {text}
      {isExternal && <ArrowUpRightIcon className="h-4 w-4" />}
    </a>
  )
}

export { GenericLink }
