import FooterSection from "@/components/footer/FooterSection"
import SocialLinks from "@/components/SocialLinks"
import LOGO from "@/public/logo-base.svg"
import Image from "next/image"

const FooterBaseSection = () => (
  <FooterSection title="">
    <div className="group flex items-center gap-2">
      <Image src={LOGO} alt="" loading="eager" className="h-auto w-8" />
      <span className="text-xl font-semibold">Runkang10</span>
    </div>
    <div className="text-xs text-muted-foreground">
      <p>&#34;This is my 4th attempt to finish a portfolio xd&#34;</p>
      <br />
      <SocialLinks autoHide={false} loadType="eager" />
    </div>
  </FooterSection>
)
export default FooterBaseSection
