import { linksConfig } from "@/config/LinksConfig";
import Link from "next/link";
import { buttonVariants } from "@/components/templates/button";
import { cn } from "@/lib/utils";
import socialLinks from "@/config/SocialLinks";
import { ButtonGroup } from "@/components/templates/button-group";
import React from "react";
import Image from "next/image";

const HomePageLinks = () => {
  const firstLink = socialLinks[0];
  const secondLink = linksConfig[0];
  const lastLink = socialLinks[socialLinks.length - 1];
  const links = [firstLink, secondLink, lastLink];

  return (
    <div className="flex lg:flex-col justify-center lg:justify-start">
      <ButtonGroup>
        {links.map((link) => (
          <Link
            href={link.url}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "p-2 justify-center items-center",
            )}
            key={link.label}
          >
            {React.isValidElement(link.icon) ? (
              link.icon
            ) : (
              <Image src={link.icon} alt={link.label} width={16} height={16} />
            )}
            {link.label}
          </Link>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default HomePageLinks;
