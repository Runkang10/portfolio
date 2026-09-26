import { buttonVariants } from "@/components/ui/button"
import { SocialLinksData } from "@/lib/links"
import Link from "next/link"

const SocialLinksComponent = () => (
  <ul className="flex flex-row items-center gap-1">
    {SocialLinksData.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </Link>
      </li>
    ))}
  </ul>
)

export { SocialLinksComponent }
