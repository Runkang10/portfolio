import { ReactNode } from "react"

const FooterSection = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <div className="flex flex-col gap-4">
    {title !== "" ? <p className="text-lg font-semibold">{title}</p> : null}
    {children}
  </div>
)

export default FooterSection
