import "@/styles/index.css"
import type React from "react"
import type { Metadata } from "next"
import { Hind_Madurai, Hind_Vadodara } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { DataProvider } from "@/components/providers/data"

const inter = Hind_Vadodara({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const cormorantGaramond = Hind_Madurai({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Thahrav | Indian Culture-Inspired Fashion",
  description:
    "From Kailash to Kashi, dipped in style. Discover fashion that merges timeless Indian cultural depth with modern-day wearables.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorantGaramond.variable} ${inter.className}`}>
        <DataProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col items-center selection:bg-primary">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </DataProvider>
      </body>
    </html>
  )
}
