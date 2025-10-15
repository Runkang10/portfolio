"use client";

import { Button } from "@/components/templates/button";
import { useState } from "react";
import { linksConfig, LinkType } from "@/config/LinksConfig";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/templates/select";
import { House } from "lucide-react";
import { cn } from "@/lib/utils";

const PrimaryLinks = () => {
  const router = useRouter();
  const linksList: LinkType[] = [
    {
      label: "Home",
      url: "/",
      icon: <House className="max-w-4 max-h-4 sm:max-w-5 sm:max-h-5" />,
    },
    ...linksConfig,
  ];

  const [redirectPage, setRedirectPage] = useState<LinkType>(linksList[0]);

  return (
    <div className="flex items-center justify-center">
      <Button
        className={"rounded-l-4xl rounded-r-none rounded-y-4xl py-6 px-10"}
        onClick={() => {
          router.push(redirectPage.url);
        }}
      >
        <div className="flex items-center justify-center gap-2">
          {redirectPage?.icon}
          {redirectPage.label}
        </div>
      </Button>
      <Select
        onValueChange={(value) => {
          const result = linksConfig.find((link) => link.label === value);
          if (result) setRedirectPage(result);
        }}
      >
        <SelectTrigger
          className={cn(
            "rounded-l-none rounded-r-4xl rounded-y-4xl py-6",
            "!bg-primary hover:!bg-primary/80 hover:!cursor-pointer",
            "!focus:outline-none",
          )}
        />
        <SelectContent>
          {linksList.map((link) => (
            <SelectItem value={link.label} key={link.label}>
              {link?.icon}
              {link.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PrimaryLinks;
