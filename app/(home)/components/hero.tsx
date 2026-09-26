import { Highlighter } from "@/components/ui/highlighter"

const Hero = () => (
  <div className="flex flex-col justify-center py-64">
    <div className="space-y-4 text-center">
      <h1 className="text-5xl font-semibold" style={{ textShadow: "0 4px 8px var(--foreground)" }}>
        Hi, I&#39;m Runkang10!
      </h1>
      <p className="text-lg">
        <Highlighter action="underline">A frontend and Minecraft plugin developer.</Highlighter>
      </p>
    </div>
  </div>
)

export { Hero }
