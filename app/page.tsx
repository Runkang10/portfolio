export default function Page() {
  return (
    <div className="space-y-16">
      <div className="my-48 flex items-center justify-center">
        <div className="flex flex-col gap-4 text-center">
          <h1
            className="text-5xl font-bold"
            style={{ textShadow: "0 4px 8px var(--foreground)" }}
          >
            Hi, I'm Runkang10
          </h1>
          <p className="text-lg font-semibold text-muted-foreground">
            A carbon developer... Don't even know what else to put :/
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-left text-2xl font-bold sm:text-center">
          Tech stacks
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <TechStack title="Kotlin" elements={["Paper API", "JDA"]} />
          <TechStack
            title="TypeScript"
            elements={["HTML/CSS/JS", "Astro.js", "Next.js", "Tailwind CSS"]}
          />
          <TechStack title="Go" elements={["Disgo"]} />
        </div>
      </div>
    </div>
  )
}

const TechStack = ({
  title,
  elements,
}: {
  title: string
  elements: string[]
}) => (
  <div className="flex justify-start md:justify-center">
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium">{title}</h3>
      <ul className="space-y-1 text-sm">
        {elements.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  </div>
)
