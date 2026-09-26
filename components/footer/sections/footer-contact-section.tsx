import FooterSection from "@/components/footer/footer-section"
import { RiDiscordFill, RiGithubFill, RiMailFill } from "@remixicon/react"
import Link from "next/link"

const Contacts = [
  {
    label: "chen.runkang10@gmail.com",
    href: "mailto:chen.runkang10@gmail.com",
    icon: <RiMailFill className="h-auto w-4.5" />,
  },
  {
    label: "Runkang10",
    href: "https://github.com/Runkang10",
    icon: <RiGithubFill className="h-auto w-4.5" />,
  },
  {
    label: "@runkang10",
    href: "https://discord.com/users/1226628234041626795",
    icon: <RiDiscordFill className="h-auto w-4.5" />,
  },
]

const FooterContactSection = () => (
  <FooterSection title="Contact Me">
    <ul className="flex flex-col gap-2 text-xs">
      {Contacts.map((contact) => (
        <li key={contact.href}>
          <Link
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max"
          >
            <div className="flex items-center gap-1 hover:text-muted-foreground">
              {contact.icon}
              {contact.label}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </FooterSection>
)

export default FooterContactSection
