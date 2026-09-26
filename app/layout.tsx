import { Footer } from "@/components/footer/footer"
import { Navbar } from "@/components/navbar/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { DESCRIPTION } from "@/lib/seo"
import { cn } from "cn"
import { Metadata } from "next"
import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ReactNode } from "react"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const metadata: Metadata = {
  title: {
    template: "Runkang10 | %s",
    default: "Runkang10",
  },
  icons: {
    icon: "/logo-square.svg",
  },
  description: DESCRIPTION,
  openGraph: {
    images: {
      url: "/logo-square.svg",
      alt: "LOGO",
    },
    title: {
      template: "Runkang10 | %s",
      default: "Runkang10",
    },
    description: DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
