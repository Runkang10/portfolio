import { DesktopLink } from "@/components/navbar/link"
import { NavigationLinks } from "@/lib/links"

const DesktopLinks = () => (
  <ul className="hidden flex-1 flex-row items-center gap-6 text-sm sm:flex">
    {NavigationLinks.map((link) => (
      <li key={link.href}>
        <DesktopLink href={link.href}>{link.label}</DesktopLink>
      </li>
    ))}
  </ul>
)

export { DesktopLinks }
