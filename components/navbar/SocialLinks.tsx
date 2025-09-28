import SocialLinkComponent from "@/components/navbar/SocialLinkComponent";
import socialLinks from "@/config/SocialLinks";

const SocialLinks = () =>
  socialLinks.map((socialLink) => (
    <SocialLinkComponent
      href={socialLink.url}
      key={socialLink.url}
      src={socialLink.icon}
      alt={socialLink.alt}
    />
  ));

const NavBarSocialLinks = () => (
  <div className="h-full hidden md:flex flex-row justify-end items-center">
    <div className="px-4 h-full flex flex-row items-center gap-1 border-l">
      <SocialLinks />
    </div>
  </div>
);

export { SocialLinks, NavBarSocialLinks };
