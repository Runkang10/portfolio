import Link from "next/link"
import { ReactNode } from "react"

const DesktopLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className="hover:text-muted-foreground">
    {children}
  </Link>
)

const MobileLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className="active:text-muted-foreground">
    {children}
  </Link>
)

export { DesktopLink, MobileLink }
