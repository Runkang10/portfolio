import { BookUser, Info, Pickaxe, Rss } from "lucide-react";
import { ReactElement } from "react";
import { cn } from "@/lib/utils";

type LinkType = {
  label: string;
  url: string;
  icon: ReactElement;
};

const DEFAULT = cn("max-w-4 max-h-4 sm:max-w-5 sm:max-h-5");

const linksConfig: LinkType[] = [
  {
    label: "Projects",
    url: "/projects",
    icon: <Pickaxe className={DEFAULT} />,
  },
  {
    label: "Blog",
    url: "/blogs",
    icon: <Rss className={DEFAULT} />,
  },
  {
    label: "About",
    url: "/about",
    icon: <Info className={DEFAULT} />,
  },
  {
    label: "Contact",
    url: "/contact",
    icon: <BookUser className={DEFAULT} />,
  },
];

export { type LinkType, linksConfig };
