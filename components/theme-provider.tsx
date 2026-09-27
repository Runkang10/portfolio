"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"

const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    {...props}
  >
    {children}
  </NextThemesProvider>
)

export { ThemeProvider }
