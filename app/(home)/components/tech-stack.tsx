import { Section } from "@/app/(home)/components/section"
import { Marquee } from "@/components/ui/marquee"
import {
  SiAstro,
  SiAstroHex,
  SiCss,
  SiCssHex,
  SiGit,
  SiGitHex,
  SiGo,
  SiGoHex,
  SiGradle,
  SiGradleHex,
  SiHtml5,
  SiHtml5Hex,
  SiKotlin,
  SiKotlinHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
} from "@icons-pack/react-simple-icons"

const TechStackData = [
  // Programming languages
  { name: "kotlin", icon: SiKotlin, color: SiKotlinHex },
  { name: "typescript", icon: SiTypescript, color: SiTypescriptHex },
  { name: "go", icon: SiGo, color: SiGoHex },

  // Build tools
  { name: "gradle", icon: SiGradle, color: SiGradleHex },

  // Frameworks
  { name: "astro", icon: SiAstro, color: SiAstroHex },
  { name: "next.js", icon: SiNextdotjs, color: SiNextdotjsHex },
  { name: "tailwindcss", icon: SiTailwindcss, color: SiTailwindcssHex },

  // Others
  { name: "html5", icon: SiHtml5, color: SiHtml5Hex },
  { name: "css3", icon: SiCss, color: SiCssHex },
  { name: "git", icon: SiGit, color: SiGitHex },
]

const TechStackComponent = async () => (
  <Section title="Tech Stack">
    <div className="relative flex flex-wrap justify-center">
      <Marquee repeat={2} className="[--duration:10s]">
        {TechStackData.map(({ name, icon: Icon, color }) => (
          <div key={name} className="rounded-xl bg-card p-8">
            <Icon size={128} color={color} />
          </div>
        ))}
      </Marquee>
    </div>
  </Section>
)

export { TechStackComponent }
