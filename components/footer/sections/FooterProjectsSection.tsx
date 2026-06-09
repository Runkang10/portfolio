import FooterSection from "@/components/footer/FooterSection"
import { GenericLink } from "@/components/ui/links/GenericLink"

interface ModrinthProject {
  title: string
  slug: string
}

async function getModrinthProjects(): Promise<ModrinthProject[]> {
  try {
    const res = await fetch(
      "https://api.modrinth.com/v2/user/runkang10/projects",
      {
        headers: {
          "User-Agent": "runkang10-portfolio",
        },
        next: { revalidate: 86400 },
      }
    )

    if (!res.ok) return []

    const data: any[] = await res.json()
    return data.map((project) => ({
      title: project.title,
      slug: project.slug,
    }))
  } catch (_) {
    return []
  }
}

const ModrinthProjects = async () => {
  const projects = await getModrinthProjects()

  if (projects.length === 0) {
    return <li>I'm still projectless...</li>
  }

  return (
    <>
      {projects.map((project) => (
        <li key={project.slug}>
          <GenericLink
            href={`https://modrinth.com/project/${project.slug}`}
            isExternal
            text={project.title}
          />
        </li>
      ))}
    </>
  )
}

const FooterProjectsSection = () => (
  <FooterSection title="Projects">
    <ul className="flex flex-col gap-2 text-xs">
      <ModrinthProjects />
    </ul>
  </FooterSection>
)

export default FooterProjectsSection
