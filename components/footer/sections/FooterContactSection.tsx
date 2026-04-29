import FooterSection from "@/components/footer/FooterSection"
import Discord from "@/public/discord.svg"
import Github from "@/public/github.svg"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Contacts = [
  {
    label: "chen.runkang10@gmail.com",
    href: "mailto:chen.runkang10@gmail.com",
    icon: <Mail className="max-h-4.5 max-w-4.5 text-foreground" />,
  },
  {
    label: "Runkang10",
    href: "https://github.com/Runkang10",
    icon: <Image src={Github} alt="" width={18} height={18} />,
  },
  {
    label: "@runkang10",
    href: "https://discord.com/users/1226628234041626795",
    icon: <Image src={Discord} alt="" width={18} height={18} />,
  },
]

const FooterContactSection = () => (
  <FooterSection title="Contact Me">
    <ul className="flex flex-col gap-2 text-xs">
      {Contacts.map((contact) => (
        <li key={contact.href}>
          <Link href={contact.href}>
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
