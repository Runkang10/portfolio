"use client";

import { Button } from "@/components/templates/button";
import { useRouter } from "next/navigation";
import { linksConfig } from "@/config/LinksConfig";

const SideBarLinks = () => {
  const router = useRouter();

  return linksConfig.map((link, idx) => (
    <div key={idx}>
      <Button
        variant="ghost"
        className="min-w-36"
        onClick={() => router.push(link.url)}
        key={link.label}
      >
        <div className="max-h-14 w-full h-full flex items-center justify-center gap-2">
          {link?.icon}
          <span className="text-left text-md whitespace-normal w-full">
            {link.label}
          </span>
        </div>
      </Button>
    </div>
  ));
};

export default SideBarLinks;
