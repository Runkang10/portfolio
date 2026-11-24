type ProjectLink = {
  content: string
  href: string
  variant: "default" | "outline"
}

type Project = {
  slug: string
  name: string
  description: string
  links: ProjectLink[]
}

type ProjectsMap = {
  minecraft: Project[]
  libraries: Project[]
  others: Project[]
}

const ProjectsData: ProjectsMap = {
  minecraft: [
    {
      slug: "atomiccrash",
      name: "AtomicCrash",
      description: "A Minecraft plugin crash players with a single command.",
      links: [
        {
          content: "Download",
          href: "https://modrinth.com/plugin/atomiccrash",
          variant: "default",
        },
        {
          content: "Source code",
          href: "https://github.com/Runkang10/AtomicCrash",
          variant: "outline",
        },
      ],
    },
    {
      slug: "atomicfreeze",
      name: "AtomicFreeze",
      description: "A Minecraft plugin that ignore players packet or stop sending packets to players entirely.",
      links: [
        {
          content: "Download",
          href: "https://modrinth.com/plugin/atomicfreeze",
          variant: "default",
        },
        {
          content: "Source code",
          href: "https://github.com/Runkang10/AtomicFreeze",
          variant: "outline",
        },
      ],
    },
    {
      slug: "fixedgamemode",
      name: "FixedGameMode",
      description:
        "A Minecraft plugin that makes the game mode switcher permission based instead of traditional OP levels.",
      links: [
        {
          content: "Download",
          href: "https://modrinth.com/plugin/fixedgamemode",
          variant: "default",
        },
        {
          content: "Source code",
          href: "https://github.com/Runkang10/FixedGameMode",
          variant: "outline",
        },
      ],
    },
  ],
  libraries: [
    {
      slug: "compact-lib",
      name: "compact-lib",
      description:
        "A library with collection of Kotlin extensions of Paper API and implementations for my paper plugins.",
      links: [
        {
          content: "Source code",
          href: "https://github.com/Runkang10/compact-lib",
          variant: "default",
        },
      ],
    },
  ],
  others: [
    {
      slug: "portfolio",
      name: "portfolio",
      description: "My current portfolio site.",
      links: [
        {
          content: "Source code",
          href: "https://github.com/Runkang10/portfolio",
          variant: "default",
        },
      ],
    },
  ],
}

const FeaturedProjectsData = ProjectsData.minecraft

export { ProjectsData, FeaturedProjectsData }

export type { Project, ProjectLink }
