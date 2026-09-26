import { ReactNode } from "react"

const Section = ({
  title,
  description,
  children,
}: {
  title: string
  description?: ReactNode
  children: ReactNode
}) => (
  <div className="flex flex-col gap-4 text-center">
    <div className="space-y-2">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
    {children}
  </div>
)

export { Section }
