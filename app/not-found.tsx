import { Box } from "@/components/box"
import { DefaultLink } from "@/components/link"

export default function Page() {
  return (
    <Box>
      <div className="flex flex-1 justify-center">
        <div className="mt-64 flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <div>
            <p>We couldn’t find that link.</p>
            <p>
              Check the address or <DefaultLink href="/">head back home</DefaultLink>.
            </p>
          </div>
        </div>
      </div>
    </Box>
  )
}
