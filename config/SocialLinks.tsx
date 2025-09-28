import Github from "@/public/github.svg";
import Discord from "@/public/discord.svg";

type SocialLinkType = {
  icon: HTMLImageElement;
  url: string;
  alt: string;
};

const socialLinks: SocialLinkType[] = [
  {
    icon: Github,
    url: "https://github.com/Runkang10",
    alt: "Github",
  },
  {
    icon: Discord,
    url: "https://example.com",
    alt: "Discord",
  },
];

export default socialLinks;
