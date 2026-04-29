import FooterBaseSection from "@/components/footer/sections/FooterBaseSection"
import FooterContactSection from "@/components/footer/sections/FooterContactSection"
import FooterLinksSection from "@/components/footer/sections/FooterLinksSection"
import FooterProjectsSection from "@/components/footer/sections/FooterProjectsSection"
import { GenericLink } from "@/components/ui/links/GenericLink"

const Footer = () => (
  <footer className="flex flex-col gap-y-8 border-t px-8 pt-8 pb-4">
    <div className="grid gap-10 gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <FooterBaseSection />
      <FooterLinksSection />
      <FooterProjectsSection />
      <FooterContactSection />
    </div>
    <p className="text-center text-xs text-muted-foreground">
      Made by{" "}
      <GenericLink
        href="https://github.com/Runkang10"
        isExternal={true}
        text="Runkang10"
      />
      , source available on{" "}
      <GenericLink
        href="https://github.com/Runkang10/portfolio"
        isExternal={true}
        text="GitHub"
      />
      .
    </p>
  </footer>
)

export default Footer
