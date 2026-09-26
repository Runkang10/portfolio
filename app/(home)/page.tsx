import { FeaturedProjectsComponent } from "@/app/(home)/components/featured-projects"
import { Hero } from "@/app/(home)/components/hero"
import { TechStackComponent } from "@/app/(home)/components/tech-stack"
import { Box } from "@/components/box"

export default function Page() {
  return (
    <Box>
      <Hero />
      <div className="space-y-16">
        <FeaturedProjectsComponent />
        <TechStackComponent />
      </div>
    </Box>
  )
}
