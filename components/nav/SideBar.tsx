"use client"

import { Links } from "@/components/nav/Links"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavSocialLinks from "./NavSocialLinks"

const SideBar = () => (
  <Sheet>
    <SheetTrigger
      render={
        <Button variant="ghost" className="min-h-10 cursor-pointer md:hidden">
          <Menu className="size-6" />
        </Button>
      }
    />
    <SheetContent>
      <SheetHeader />
      <div className="m-4 flex flex-col gap-6">
        <p className="text-xl font-semibold">Links</p>
        <ul className="flex flex-col gap-1">
          {Links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 m-4 flex flex-1 flex-col gap-6">
        <NavSocialLinks autoHide={false} loadType="lazy" />
      </div>
    </SheetContent>
  </Sheet>
)

export { SideBar }
