import { linksConfig } from "@/config/LinksConfig";
import Link from "next/link";
import { buttonVariants } from "@/components/templates/button";
import { cn } from "@/lib/utils";

const PrimaryLinks = () => {
  const firstLink = linksConfig[0];
  const lastLink = linksConfig[linksConfig.length - 1];
  const remainingLinks = linksConfig.slice(1, -1);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <Link
          href={firstLink.url}
          className={cn(
            buttonVariants({ variant: "default" }),
            "rounded-l-2xl rounded-r-none",
          )}
        >
          {firstLink.label}
        </Link>
        {remainingLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-none",
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={lastLink.url}
          className={cn(
            buttonVariants({ variant: "default" }),
            "rounded-l-none rounded-r-2xl",
          )}
        >
          {lastLink.label}
        </Link>
      </div>
      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default PrimaryLinks;
