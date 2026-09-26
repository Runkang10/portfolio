import { FooterBaseSection } from "@/components/footer/sections/footer-base-section"
import FooterContactSection from "@/components/footer/sections/footer-contact-section"
import { FooterLinksSection } from "@/components/footer/sections/footer-links-section"
import { DefaultLink } from "@/components/link"

const Footer = () => (
  <footer className="flex flex-col gap-y-8 border-t bg-background px-10 pt-10 pb-6">
    <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <FooterBaseSection />
      <FooterLinksSection />
      <FooterContactSection />
    </div>
    <p className="text-center text-xs text-muted-foreground">
      Made by{" "}
      <DefaultLink href="https://github.com/Runkang10" isExternal={true}>
        Runkang10
      </DefaultLink>
      , source code is available on{" "}
      <DefaultLink href="https://github.com/Runkang10/portfolio" isExternal={true}>
        GitHub
      </DefaultLink>
      .
    </p>
  </footer>
)

export { Footer }
