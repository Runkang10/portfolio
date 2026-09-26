import LOGO from "@/public/logo-circle.svg"
import Image from "next/image"

const Brand = () => (
  <div className="group flex flex-row items-center gap-2">
    <Image
      src={LOGO}
      alt="LOGO"
      className="h-8 w-8 transition-all duration-500 group-hover:rotate-90"
    />
    <span className="font-medium">Runkang10</span>
  </div>
)

export { Brand }
