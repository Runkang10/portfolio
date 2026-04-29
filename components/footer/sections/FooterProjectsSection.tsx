import FooterSection from "@/components/footer/FooterSection"
import { GenericLink } from "@/components/ui/links/GenericLink"

const FooterProjectsSection = () => (
  <FooterSection title="Projects">
    <p className="text-xs">
      I don&#39;t have any projects. <br className="lg:hidden" />
      If you wonder why,{" "}
      <GenericLink
        href="/i-do-not-have-projects"
        text="read this"
        isExternal={false}
      />
      .
    </p>
  </FooterSection>
)

export default FooterProjectsSection
