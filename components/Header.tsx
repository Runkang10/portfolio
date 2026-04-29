import { ReactNode } from "react"

const Header = ({ children }: { children: ReactNode }) => (
  <header className="relative top-0 left-0 w-full">
    <div className="m-16">
      <div>
        <h1 className="text-5xl font-semibold">Contact</h1>
        <p>Use </p>
      </div>
    </div>
  </header>
)

export default Header
