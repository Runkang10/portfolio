import { socialLinks } from "@/components/Links"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const SocialLinks = ({
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
    {socialLinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={link.icon}
            alt={link.alt}
            loading={loadType}
            className="h-auto w-4.5 contain-content"
          />
        </Link>
      </li>
    ))}
  </ul>
)

export default SocialLinks
