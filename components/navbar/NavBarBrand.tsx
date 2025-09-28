import { NavBarLogo } from "@/components/LogoProvider";

const NavBarBrand = () => (
  <div className="h-full flex justify-start items-center">
    <div className="px-4 h-full flex items-center border-r">
      <NavBarLogo />
    </div>
  </div>
);

export default NavBarBrand;
