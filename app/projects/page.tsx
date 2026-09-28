import { Section } from "@/app/(home)/components/section"
import { Box } from "@/components/box"
import { ProjectsComponent } from "@/components/projects"
import { generateProjectsDiscordMetadata } from "@/lib/discord"
import { ProjectsData } from "@/lib/projects"
import type { Metadata } from "next"

const ProjectsTypes = [
  {
    title: "Minecraft",
    component: <ProjectsComponent projects={ProjectsData.minecraft} />,
  },
  {
    title: "Libraries",
    component: <ProjectsComponent projects={ProjectsData.libraries} />,
  },
  {
    title: "Others",
    component: <ProjectsComponent projects={ProjectsData.others} />,
  },
]

export const metadata: Metadata = {
  title: "Projects",
  description: "Check out my projects!",
}

export default function Page() {
  return (
    <Box>
      <script type="application/json" id="discord:component-embed">
        {generateProjectsDiscordMetadata()}
      </script>
      <div className="mt-16">
        <Section title="All Projects">
          {ProjectsTypes.map((projectsType) => (
            <div key={projectsType.title} className="mt-4 flex flex-col gap-2">
              <h2 className="text-2xl font-medium">{projectsType.title}</h2>
              {projectsType.component}
            </div>
          ))}
        </Section>
      </div>
    </Box>
  )
}
