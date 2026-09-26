"use client"

import { MobileLink } from "@/components/navbar/link"
import { SocialLinksComponent } from "@/components/social-links"
import { ThemeButton } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationLinks } from "@/lib/links"
import { RiMenuFill } from "@remixicon/react"

const MobileLinks = () => (
  <Sheet>
    <SheetTrigger
      render={
        <Button variant="ghost" size="icon">
          <RiMenuFill className="size-5" />
        </Button>
      }
    />
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Links</SheetTitle>
      </SheetHeader>
      <ul className="flex flex-col px-6">
        {NavigationLinks.map((link) => (
          <li key={link.href}>
            <MobileLink href={link.href}>{link.label}</MobileLink>
          </li>
        ))}
      </ul>
      <SheetFooter>
        <div className="flex flex-row items-center justify-between">
          <SocialLinksComponent />
          <ThemeButton />
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export { MobileLinks }
