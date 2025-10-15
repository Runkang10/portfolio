import Github from "@/public/social/github.svg";
import Discord from "@/public/social/discord.svg";
import { StaticImageData } from "next/image";

type SocialLinkType = {
  icon: StaticImageData;
  url: string;
  label: string;
};

const socialLinks: SocialLinkType[] = [
  {
    icon: Github,
    url: "https://github.com/Runkang10",
    label: "Github",
  },
  {
    icon: Discord,
    url: "https://example.com",
    label: "Discord",
  },
];

export default socialLinks;
