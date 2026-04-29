import { SocialLinks } from "@/components/nav/Links"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const NavSocialLinks = ({
  autoHide,
  loadType,
}: {
  autoHide: boolean
  loadType: "eager" | "lazy"
}) => (
  <ul
    className={cn(
      autoHide ? "hidden md:flex" : "flex",
      "flex-row items-center gap-2"
    )}
  >
    {SocialLinks.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={link.icon.src}
            alt={link.alt}
            loading={loadType}
            width={18}
            height={18}
          />
        </a>
      </li>
    ))}
  </ul>
)

export default NavSocialLinks
