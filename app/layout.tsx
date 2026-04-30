import Footer from "@/components/footer/Footer"
import Nav from "@/components/nav/Nav"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { JetBrains_Mono } from "next/font/google"

import "@/css/globals.css"
import React, { ReactNode } from "react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-mono antialiased", jetbrainsMono.variable)}
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <Nav />
          <main className="flex min-h-160 flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
