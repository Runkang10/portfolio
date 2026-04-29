import Discord from "@/public/discord.svg"
import Github from "@/public/github.svg"
import NameMc from "@/public/namemc.png"

const Links = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
]

const SocialLinks = [
  {
    icon: NameMc,
    href: "https://namemc.com/profile/Runkang10.1?q=72bcd535-9d39-407e-8cc2-bc7cf5b49714",
    alt: "NameMc",
  },
  {
    icon: Discord,
    href: "https://discord.com/users/1226628234041626795",
    alt: "Discord",
  },
  {
    icon: Github,
    href: "https://github.com/Runkang10",
    alt: "Github",
  },
]

export { Links, SocialLinks }
