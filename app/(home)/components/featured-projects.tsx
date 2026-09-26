import { Section } from "@/app/(home)/components/section"
import { DefaultLink } from "@/components/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedProjectsData } from "@/lib/projects"
import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"

const FeaturedProjectsComponent = () => (
  <Section
    title="Featured Projects"
    description={
      <span>
        Full list of projects available on <DefaultLink href="/projects">projects</DefaultLink>.
      </span>
    }
  >
    <ul className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {FeaturedProjectsData.map((project) => (
        <li key={project.slug}>
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription className="text-left">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <ul className="flex flex-1 flex-row flex-wrap items-center gap-4">
                <li>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={buttonVariants({ size: "lg" })}
                  >
                    View project
                  </Link>
                </li>
                {project.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={buttonVariants({ variant: "outline", size: "lg" })}
                    >
                      {link.content}
                      <RiArrowRightUpLine />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  </Section>
)

export { FeaturedProjectsComponent }
