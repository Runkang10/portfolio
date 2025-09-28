import SideBar from "@/components/navbar/SideBar";
import NavBarBrand from "@/components/navbar/NavBarBrand";
import NavBarLinks from "@/components/navbar/NavBarLinks";
import { NavBarSocialLinks } from "@/components/navbar/SocialLinks";
import AlertComponent from "@/components/alert/AlertComponent";

const NavBar = () => (
  <div className="sticky top-0 left-0 z-40">
    <nav className="lg:mt-8 lg:mx-16 flex flex-col">
      <AlertComponent />
      <div className="w-full h-16 grid grid-cols-3 items-center backdrop-blur-lg lg:rounded-2xl border-y-3 lg:border-3">
        <NavBarBrand />
        <NavBarLinks />
        <NavBarSocialLinks />
        <SideBar />
      </div>
    </nav>
  </div>
);

export default NavBar;
