import LOGO from "@/public/logo-base.svg"
import Image from "next/image"
import Link from "next/link"

const NavBrand = () => (
  <div className="content-center border-r px-4 text-xl">
    <Link href="/" className="group flex items-center gap-2 lg:w-36.25">
      <Image
        src={LOGO}
        alt=""
        loading="eager"
        className="max-w-8 transition-all duration-500 group-hover:rotate-90"
      />
      <span className="hidden hover:font-medium lg:block">Runkang10</span>
    </Link>
  </div>
)

export default NavBrand
