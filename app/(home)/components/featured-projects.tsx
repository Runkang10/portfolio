import { Section } from "@/app/(home)/components/section"
import { DefaultLink } from "@/components/link"
import { ProjectsComponent } from "@/components/projects"
import { FeaturedProjectsData } from "@/lib/projects"

const FeaturedProjectsComponent = () => (
  <Section
    title="Featured Projects"
    description={
      <span>
        Full list of projects available on <DefaultLink href="/projects">projects</DefaultLink>.
      </span>
    }
  >
    <ProjectsComponent projects={FeaturedProjectsData} />
  </Section>
)

export { FeaturedProjectsComponent }
