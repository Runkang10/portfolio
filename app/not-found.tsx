import { GenericLink } from "@/components/ui/links/GenericLink"

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl font-semibold sm:text-6xl">404</h1>
        <p className="text-2xl font-medium sm:text-3xl">Page Not Found</p>
        <div className="text-center text-sm sm:text-base">
          <p>We couldn’t find that link.</p>
          <p>
            Check the address or <GenericLink href="/" text="head back home" />.
          </p>
        </div>
      </div>
    </div>
  )
}
