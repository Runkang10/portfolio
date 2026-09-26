import { Brand } from "@/components/brand"
import { DesktopLinks } from "@/components/navbar/desktop-links"
import { MobileLinks } from "@/components/navbar/mobile-links"
import { Separator } from "@/components/navbar/separator"
import { SocialLinksComponent } from "@/components/social-links"
import { ThemeButton } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import Link from "next/link"

const Navbar = () => (
  <nav className="sticky top-0 right-0 left-0 z-40 flex w-screen flex-col md:px-10 md:pt-8">
    <div className="relative flex flex-1 flex-row items-center gap-4 overflow-hidden border bg-background p-4 md:rounded-xl">
      <Link href="/">
        <Brand />
      </Link>
      <Separator />
      <DesktopLinks />
      <div className="hidden sm:block">
        <SocialLinksComponent />
      </div>
      <Separator />
      <div className="hidden sm:block">
        <ThemeButton />
      </div>
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <MobileLinks />
      </div>
      <ScrollProgress className="absolute bottom-0 left-0" />
    </div>
  </nav>
)

export { Navbar }
