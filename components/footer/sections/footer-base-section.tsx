import { Brand } from "@/components/brand"
import FooterSection from "@/components/footer/footer-section"
import { SocialLinksComponent } from "@/components/social-links"

const FooterBaseSection = () => (
  <FooterSection title="">
    <Brand />
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground max-w-sm">
        What am I supposed to say? Oh well, this is my 5th attempt to finish a portfolio.
      </p>
      <SocialLinksComponent />
    </div>
  </FooterSection>
)

export { FooterBaseSection }
