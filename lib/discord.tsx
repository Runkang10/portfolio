import { FeaturedProjectsData } from "@/lib/projects"

const template = {
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
            content: "Hi, I'm Runkang10, a Minecraft plugin developer.",
          },
        ],
      },
      {
        type: 14,
        divider: true,
        spacing: 1,
      },
      {
        type: 10,
        content:
          "# Featured Projects\nFull list of projects available on [projects](https://runkang10.is-a.dev/projects) page.\n{{ projects }}",
      },
      {
        type: 14,
        divider: true,
        spacing: 1,
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

function generateDiscordMetadata() {
  const snapshot = structuredClone(template)
  const projectsTemplateContent = snapshot.component.components[2].content!
  const formattedProjectsContent = FeaturedProjectsData.map((project) => {
    const links = project.links.map((link) => `[${link.content}](${link.href})`).join("\n")
    return `## ${project.name}\n${project.description}\n### Links\n${links}`
  })
  snapshot.component.components[2].content = projectsTemplateContent.replace(
    "{{ projects }}",
    formattedProjectsContent.join("\n"),
  )
  return JSON.stringify(snapshot)
}

export { generateDiscordMetadata }
