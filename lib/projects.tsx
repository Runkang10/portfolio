import { ReactNode } from "react"

type ProjectLink = {
  content: ReactNode
  href: string
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
      description: "Crash players Minecraft instance with a single command.",
      links: [
        {
          content: "Download",
          href: "https://modrinth.com/plugin/atomiccrash",
        },
        {
          content: "Source code",
          href: "https://github.com/Runkang10/AtomicCrash",
        },
      ],
    },
    {
      slug: "atomicfreeze",
      name: "AtomicFreeze",
      description: "Ignore players packet or stop sending packets to players entirely.",
      links: [
        {
          content: "Download",
          href: "https://modrinth.com/plugin/atomicfreeze",
        },
        {
          content: "Source code",
          href: "https://github.com/Runkang10/AtomicFreeze",
        },
      ],
    },
    {
      slug: "fixedgamemode",
      name: "FixedGameMode",
      description:
        "Makes the game mode switcher permission based instead of traditional OP levels.",
      links: [
        {
          content: "Download",
          href: "https://modrinth.com/plugin/fixedgamemode",
        },
        {
          content: "Source code",
          href: "https://github.com/Runkang10/FixedGameMode",
        },
      ],
    },
  ],
  libraries: [
    {
      slug: "compact-mono",
      name: "compact-mono",
      description:
        "A library with collection of Kotlin extensions of Paper API and implementations for my paper plugins.",
      links: [
        {
          content: "Source code",
          href: "https://github.com/Runkang10/compact-mono",
        },
      ],
    },
  ],
  others: [
    {
      slug: "portfolio",
      name: "portfolio",
      description: "The current portfolio.",
      links: [
        {
          content: "Source code",
          href: "https://github.com/Runkang10/portfolio",
        },
      ],
    },
  ],
}

const AllProjectsData = [
  ...ProjectsData.minecraft,
  ...ProjectsData.libraries,
  ...ProjectsData.others,
]

const FeaturedProjectsData = ProjectsData.minecraft

export { ProjectsData, AllProjectsData, FeaturedProjectsData }

export type { Project, ProjectLink }
