export default function Page() {
  const data = JSON.stringify({
    component: {
      type: 17,
      accent_color: 9225410,
      spoiler: true,
      components: [
        {
          type: 9,
          accessory: {
            type: 11,
            media: {
              url: "https://github.com/orderium.png",
            },
          },
          components: [
            {
              type: 10,
              content: "# Orderium",
            },
            {
              type: 10,
              content: "A Paper plugin that implements a trading system for your server economy.",
            },
            {
              type: 10,
              content: "-# Not associated with or approved by Mojang, Microsoft or PaperMC.",
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
          content: "## Check out the project:",
        },
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "Download on Modrinth",
              emoji: {
                name: "🐸",
              },
              url: "https://modrinth.com/plugin/orderium",
            },
            {
              type: 2,
              style: 5,
              label: "Documentation",
              emoji: {
                name: "🌐",
              },
              url: "https://orderium.github.io/",
            },
            {
              type: 2,
              style: 5,
              label: "GitHub",
              emoji: {
                name: "🔓",
              },
              url: "https://github.com/Orderium",
            },
          ],
        },
      ],
    },
  })

  return (
    <>
      <script id="discord:component-embed" type="application/json">
        {data}
      </script>
    </>
  )
}
