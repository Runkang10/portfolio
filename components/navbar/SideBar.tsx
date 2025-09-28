"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/templates/sheet";
import { Button } from "@/components/templates/button";
import { Menu } from "lucide-react";
import { GrapheneLogo } from "@/components/LogoProvider";
import SideBarLinks from "@/components/navbar/SideBarLinks";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SocialLinks } from "@/components/navbar/SocialLinks";

const SideBar = () => (
  <div className="flex h-full md:hidden justify-end items-center">
    <div className="px-4 h-full flex items-center border-l">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-6 text-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent className="m-0">
          <SheetHeader>
            <DialogTitle className="group flex flex-row justify-start items-center gap-2">
              <GrapheneLogo
                iconSize={28}
                iconClassName={""}
                textClassName={"text-lg sm:text-md font-medium cursor-default"}
              />
            </DialogTitle>
          </SheetHeader>
          <div className="mx-4 mb-4 flex-1 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <span className="text-md font-bold">Pages</span>
              <div className="flex flex-col gap-2">
                <SideBarLinks />
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <span className="text-md font-bold">Links</span>
              <div className="grid grid-cols-8">
                <SocialLinks />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
);

export default SideBar;
