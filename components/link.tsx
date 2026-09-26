import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import { ReactNode } from "react"

const DefaultLink = ({
  href,
  children,
  isExternal = false,
  externalIconSize = 18,
}: {
  href: string
  children: string | ReactNode
  isExternal?: boolean
  externalIconSize?: number
}) => (
  <Link
    href={href}
    className="inline-flex items-center gap-1 not-dark:text-blue-700 hover:underline dark:text-blue-400"
    {...(isExternal && {
      target: "_blank",
      rel: "noopener noreferrer",
    })}
  >
    {children}
    {isExternal && <RiArrowRightUpLine size={externalIconSize} />}
  </Link>
)

export { DefaultLink }
