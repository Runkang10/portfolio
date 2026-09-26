import { ReactNode } from "react"

const Box = ({ children }: { children: ReactNode }) => (
  <main className="flex min-h-svh flex-col px-10.5 py-6.5">{children}</main>
)

export { Box }
