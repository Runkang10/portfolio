import { RiDiscordFill, RiGithubFill } from "@remixicon/react"
import { ReactElement } from "react"

type NavigationLink = {
  label: string
  href: string
}

type SocialLink = {
  icon: ReactElement
  href: string
}

const NavigationLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
]

const SocialLinksData: SocialLink[] = [
  {
    icon: <RiDiscordFill className="size-4.5" />,
    href: "https://discord.com/users/1226628234041626795",
  },
  {
    icon: <RiGithubFill className="size-4.5" />,
    href: "https://github.com/Runkang10",
  },
]

export { NavigationLinks, SocialLinksData }
