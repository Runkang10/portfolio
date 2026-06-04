import NavBrand from "@/components/nav/NavBrand"
import SocialLinks from "../SocialLinks"

const Nav = () => (
  <nav className="sticky top-0 left-0 z-50 m-0 flex h-16 content-center justify-between border-b backdrop-blur-lg">
    <NavBrand />
    <div className="content-center border-l px-4">
      <SocialLinks autoHide={false} loadType="eager" />
    </div>
  </nav>
)

export default Nav
