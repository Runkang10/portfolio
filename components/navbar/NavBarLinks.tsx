import { NavBarLinkComponent } from "@/components/navbar/NavBarLinkComponent";
import { links } from "@/config/Links";

const NavBarLinks = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <ul className="text-sm hidden md:flex flex-row items-center gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <NavBarLinkComponent href={link.url}>
              {link?.icon}
              {link.label}
            </NavBarLinkComponent>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarLinks;
