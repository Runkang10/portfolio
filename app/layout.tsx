import Footer from "@/components/footer/Footer"
import Nav from "@/components/nav/Nav"
import { ThemeProvider } from "@/components/ThemeProvider"
import { DiscordEmbed } from "@/lib/discord"
import { cn } from "@/lib/utils"

import "@/css/globals.css"
import { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import React, { ReactNode } from "react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: "Runkang10",
    template: "Runkang10 | %s",
  },
  icons: {
    icon: "/logo-square.svg",
  },
  openGraph: {
    title: {
      default: "Runkang10",
      template: "Runkang10 | %s",
    },
    description: "Hi, I'm Runkang10!",
    images: "logo-square.svg",
  },
}

export default async function RootLayout({
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
      <head>
        <DiscordEmbed />
      </head>
      <body className="relative flex min-h-screen flex-col">
        <ThemeProvider>
          <Nav />
          <div className="flex min-h-160 flex-1 flex-col px-8 py-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
