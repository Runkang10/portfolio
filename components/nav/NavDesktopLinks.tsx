import { Links } from "@/components/nav/Links"

const NavDesktopLinks = () => (
  <div
    className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full content-center"
  >
    <ul className="flex flex-row gap-6 items-center">
      {
        Links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-foreground transition-all hover:text-muted-foreground"
            >
              {link.label}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
)

export default NavDesktopLinks;