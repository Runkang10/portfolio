import NavBrand from "@/components/nav/NavBrand"
import NavDesktopLinks from "@/components/nav/NavDesktopLinks"
import { SideBar } from "@/components/nav/SideBar"
import NavSocialLinks from "./NavSocialLinks"

const Nav = () => (
  <nav className="sticky top-0 left-0 z-50 m-0 flex h-16 content-center justify-between border-b backdrop-blur-lg">
    <NavBrand />
    <NavDesktopLinks />
    <div className="content-center border-l px-4">
      <NavSocialLinks autoHide={true} loadType="eager" />
      <SideBar />
    </div>
  </nav>
)

export default Nav
