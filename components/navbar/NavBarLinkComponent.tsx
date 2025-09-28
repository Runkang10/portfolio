"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavBarLinkComponent = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) => {
  const pathName = usePathname();
  const samePath = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        className,
        "flex flex-row items-center justify-start gap-2",
        "hover:text-muted-foreground transition-all",
        samePath ? "text-muted-foreground" : "text-foreground",
      )}
      id="link"
    >
      {children}
    </Link>
  );
};

export { NavBarLinkComponent };
