interface ModrinthProject {
  title: string
  slug: string
  href: string
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
    return data
      .filter((project) => project.project_type === "mod")
      .map((project): ModrinthProject => ({
        title: project.title,
        slug: project.slug,
        href: `https://modrinth.com/project/${project.slug}`,
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
  } catch (_) {
    return []
  }
}

export { getModrinthProjects }
