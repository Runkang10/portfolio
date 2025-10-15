import { linksConfig } from "@/config/LinksConfig";
import { ReactElement } from "react";

type FooterType = {
  label: string;
  show: boolean;
  items: FooterItem[];
};

type FooterItem = {
  label: string;
  url: string;
  icon?: ReactElement;
};

const footerCategories: FooterType[] = [
  {
    label: "Links",
    show: true,
    items: linksConfig as FooterItem[],
  },
  {
    label: "Projects",
    show: true,
    items: [],
  },
  {
    label: "Others",
    show: true,
    items: [],
  },
];

export default footerCategories;
