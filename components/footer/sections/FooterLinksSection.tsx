import FooterSection from "@/components/footer/FooterSection"
import { Links } from "@/components/nav/Links"
import Link from "next/link"

const FooterLinksSection = () => (
  <FooterSection title="Links">
    <ul className="flex flex-col gap-2 text-xs">
      {Links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-muted-foreground">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </FooterSection>
)

export default FooterLinksSection
