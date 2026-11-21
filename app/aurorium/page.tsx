import { Box } from "@/components/box"
import { buttonVariants } from "@/components/ui/button"
import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"

const data = JSON.stringify({
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
            url: "https://cdn.modrinth.com/data/Wbt6FT7Y/54c5cf996721932f3f1db48e42d9cf0e11a6a751.png",
          },
          description: null,
          spoiler: false,
        },
        components: [
          {
            type: 10,
            content:
              "# Aurorium SMP\n(launching on <t:1795708800:F>)\n\nA semi-hardcore survival SMP with custom overworld terrain, selectable respawns, daily rewards, and other features.\n\nFeatures include:\n- **Semi-hardcore**: when you die you will be locked in a prison for an hour \n- **Respawn selector**: once you're free you can choose where to respawn between world spawn, your home, or your bed\n- **15 minutes of full immunity for new players**\n- **Custom overworld terrain**\n- **Daily rewards**\n- **Villager pick up**: pick villagers by shift-clicking them",
          },
        ],
      },
      {
        type: 14,
        divider: true,
        spacing: 2,
      },
      {
        type: 10,
        content:
          "## How to join\n### Requirements\n- Minecraft Java Edition\n- Minecraft version between 1.21.11 and 26.3 (26.3 is recommended)\n### IP\nIP 1: `134.255.232.108:25000`\nIP 2: `n4.ecli.app:25000`\nLocation: Europe",
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
            label: "Discord",
            emoji: null,
            disabled: false,
            url: "https://discord.gg/gesaS7aKKy",
          },
          {
            type: 2,
            style: 5,
            label: "Modrinth",
            emoji: null,
            disabled: false,
            url: "https://modrinth.com/server/aurorium",
          },
        ],
      },
    ],
  },
})

export default function Page() {
  return (
    <>
      <script type="application/json" id="discord:component-embed">
        {data}
      </script>
      <Box>
        <div className="flex flex-1 justify-center">
          <div className="mt-64 flex flex-col gap-4 text-center">
            <h1 className="text-5xl font-bold">Aurorium SMP</h1>
            <div className="flex flex-row items-center justify-center gap-4">
              <Link
                href="https://discord.gg/gesaS7aKKy"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Discord <RiArrowRightUpLine />
              </Link>
              <Link
                href="https://modrinth.com/server/aurorium"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Modrinth <RiArrowRightUpLine />
              </Link>
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}
