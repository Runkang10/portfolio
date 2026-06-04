export default function Page() {
  return (
    <>
      <div className="my-32 flex items-center justify-center">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-5xl font-bold">Hi, I'm Runkang10</h1>
          <p className="text-xl font-semibold text-muted-foreground">
            Someone who can't finish a project...
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-2xl font-bold">Tech stacks</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Section title="Kotlin" elements={["Paper API", "JDA"]} />
          <Section
            title="TypeScript"
            elements={["HTML/CSS/JS", "Next.js", "Tailwind CSS"]}
          />
          <Section title="Go" elements={["Disgo"]} />
        </div>
      </div>
    </>
  )
}

const Section = ({
  title,
  elements,
}: {
  title: string
  elements: string[]
}) => (
  <div className="flex justify-center">
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
