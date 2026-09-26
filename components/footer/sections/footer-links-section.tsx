import FooterSection from "@/components/footer/footer-section"
import { DesktopLink } from "@/components/navbar/link"
import { NavigationLinks } from "@/lib/links"

const FooterLinksSection = () => (
  <FooterSection title="Links">
    <ul className="flex flex-col gap-2 text-xs">
      {NavigationLinks.map((link) => (
        <li key={link.href}>
          <DesktopLink href={link.href}>{link.label}</DesktopLink>
        </li>
      ))}
    </ul>
  </FooterSection>
)

export { FooterLinksSection }
