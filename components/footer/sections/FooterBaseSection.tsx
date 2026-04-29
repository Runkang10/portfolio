import FooterSection from "@/components/footer/FooterSection"
import Image from "next/image"
import NavSocialLinks from "../../nav/NavSocialLinks"

const FooterBaseSection = () => (
  <FooterSection title="">
    <div className="group flex items-center gap-2">
      <Image
        src="/logo-base.svg"
        alt=""
        loading="eager"
        width={32}
        height={32}
      />
      <span className="text-xl font-semibold">Runkang10</span>
    </div>
    <div className="text-xs text-muted-foreground">
      <p>&#34;This is my 4th attempt to finish a portfolio xd&#34;</p>
      <br />
      <NavSocialLinks autoHide={false} loadType="eager" />
    </div>
  </FooterSection>
)
export default FooterBaseSection
