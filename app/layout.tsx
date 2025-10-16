import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/css/globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Page from "@/components/Page";
import { Analytics } from "@vercel/analytics/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Runkang10",
    template: "%s - Runkang10",
  },
  description: "Hi, I'm Runkang10!\nThe first carbon to learn coding :D",
  icons: "/logo.svg",
  keywords: ["Runkang10"],
  creator: "Runkang10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(roboto.className, "antialiased m-0 p-0 ")}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Page>{children}</Page>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
