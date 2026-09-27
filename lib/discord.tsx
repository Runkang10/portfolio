import { FeaturedProjectsData } from "@/lib/projects"

const defaultTemplate = {
  component: {
    type: 17,
    accent_color: null,
    spoiler: false,
    components: [
      {
        type: 9,
        accessory: {
          type: 11,
          media: {
            url: "https://runkang10.is-a.dev/logo-circle.png",
            proxy_url: "https://runkang10.is-a.dev/logo-circle.png",
          },
          description: null,
          spoiler: false,
        },
        components: [
          {
            type: 10,
            content: "# Runkang10\nHi, I'm Runkang10, a Minecraft plugin developer.",
          },
        ],
      },
    ],
  },
}

const projectsTemplate = {
  component: {
    type: 17,
    accent_color: null,
    spoiler: false,
    components: [
      {
        type: 10,
        content:
          "# Featured Projects\nFull list of projects available on [projects](https://runkang10.is-a.dev/projects) page.{{ projects }}",
      },
      {
        type: 14,
        divider: true,
        spacing: 2,
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 5,
            label: "Portfolio",
            emoji: null,
            disabled: false,
            url: "https://runkang10.is-a.dev",
          },
          {
            type: 2,
            style: 5,
            label: "GitHub",
            emoji: null,
            disabled: false,
            url: "https://github.com/Runkang10",
          },
          {
            type: 2,
            style: 5,
            label: "Modrinth",
            emoji: null,
            disabled: false,
            url: "https://modrinth.com/user/Runkang10",
          },
        ],
      },
    ],
  },
}

function generateDefaultDiscordMetadata() {
  return JSON.stringify(defaultTemplate)
}

function generateProjectsDiscordMetadata() {
  const snapshot = structuredClone(projectsTemplate)
  const projectsTemplateContent = snapshot.component.components[0].content!
  const formattedProjectsContent = FeaturedProjectsData.map((project) => {
    const links = project.links.map((link) => `[${link.content}](${link.href})`).join("\n")
    return `\n## ${project.name}\n${project.description}\n### Links\n${links}`
  })
  snapshot.component.components[2].content = projectsTemplateContent.replace(
    "{{ projects }}",
    formattedProjectsContent.join("\n"),
  )
  return JSON.stringify(snapshot)
}

export { generateDefaultDiscordMetadata, generateProjectsDiscordMetadata }
