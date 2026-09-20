import { getModrinthProjects } from "@/lib/projects"

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
            url: "https://runkang10.is-a.dev/logo-square.svg",
            proxy_url: "https://runkang10.is-a.dev/logo-square.svg",
          },
          description: null,
          spoiler: false,
        },
        components: [
          {
            type: 10,
            content:
              "# Hi!, I'm Runkang10\nA carbon developer... Don't even know what else to put :/",
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
        content: "## Projects\n",
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

const DiscordEmbed = async () => {
  const generated = structuredClone(template)
  const projects = (await getModrinthProjects())
    .map((project) => `- [${project.title}](${project.href})`)
    .join("\n")
  generated.component.components[2].content +=
    projects.length > 0 ? projects : "_I'm still projectless..._"

  return (
    <script
      id="discord:component-embed"
      type="application/json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generated),
      }}
    />
  )
}

export { DiscordEmbed }
