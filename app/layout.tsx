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
  metadataBase: new URL("https://thahrav.shop"),
  title: {
    default: "Thahrav Shop",
    template: "%s | Thahrav Shop",
  },
  description:
    "Thahrav blends Indian heritage with modern design. Shop cultural streetwear, oversized t-shirts, hoodies, and artisanal fashion for men, women & unisex.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/android-icon.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    media: {
      instagram: "https://www.instagram.com/thahrav_",
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  keywords: [
    "Thahrav",
    "Indian streetwear",
    "spiritual fashion",
    "mythology inspired clothing",
    "divine fashion brand",
    "oversized t-shirts for men",
    "unisex hoodies",
    "mens oversized t-shirts",
    "mens spiritual clothing",
    "womens crop hoodie",
    "womens spiritual wear",
    "artisanal fashion India",
    "slow fashion India",
    "mythical streetwear",
    "vedic fashion",
    "spiritual streetwear",
    "heritage inspired fashion",
    "ethnic streetwear",
    "modern Indian clothing",
    "cultural fashion brand",
    "designer t-shirts India",
    "goddess inspired clothing",
    "kalamkari fashion",
    "madhubani apparel",
    "pattachitra prints clothing",
    "symbolic clothing India",
    "mythological symbols t-shirts",
    "divine inspired hoodies",
    "mens spiritual streetwear",
    "womens artisanal clothing",
    "sustainable fashion",
    "streetwear trends",
    "luxury brands",
    "athleisure styles",
    "minimalist wardrobe",
    "size inclusivity",
    "vintage clothing",
    "fashion influencers",
    "gender-neutral fashion",
    "online clothing store",
    "fashion boutique",
    "summer dresses",
    "plus size clothing",
    "fashion accessories",
    "designer clothes",
    "casual wear",
    "winter coats",
    "kids fashion",
    "fashion trends 2024",
    "activewear",
    "handmade clothes",
    "denim jeans",
    "leather jackets",
    "swimwear",
    "spring fashion",
    "formal wear",
    "fashion sales",
    "boho chic",
    "eco-friendly clothing",
    "fast fashion",
    "fashion show",
    "street style",
    "vintage clothing",
    "80s fashion",
    "90s fashion",
    "menswear",
    "mens outfits",
    "clothing brands",
    "summer outfits",
    "winter outfits",
    "revolve clothing",
    "online fashion",
    "sustainable fashion",
    "wedding dress",
    "fashion model",
    "fashion show",
    "haute couture",
    "swimwear",
    "sunglasses",
    "denim",
    "lingerie",
    "athleisure",
    "street fashion",
    "teen fashion",
    "fashion merchandising",
    "fashion marketing"
  ],
  authors: [
    { name: "Thharav", url: "https://thahrav.shop/about" },
    { name: "Esportzvio Private Limited", url: "https://esportzvio.com" },
  ],
  publisher: "Thahrav Shop",
  applicationName: "Thahrav",
  generator: "Next.js",
  openGraph: {
    title: "Thahrav – From Kailash to Kashi, Stitched in Style",
    description:
      "Thahrav blends Indian mythology with modern fashion. Explore divine-inspired streetwear, oversized tees, hoodies & artisan-crafted apparel.",
    url: "https://thahrav.shop",
    siteName: "Thahrav",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://thahrav.shop/og/og.png",
        width: 1200,
        height: 630,
        alt: "Thahrav – Crafted from Culture, Styled for Spirit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thahravshop",
    creator: "@thahrav",
    title: "Thahrav – Crafted from Culture, Styled for Spirit",
    description:
      "Divine-inspired fashion meets modern design. Explore cultural streetwear, oversized tees, hoodies & spiritual silhouettes at Thahrav.",
    images: ["/og/og.png"],
  },
  verification: {
    google: "fEAW6Y9f2lPlKbAdbPFhxw9M8gBWma0bmHZ_s-1d8Hc"
  }
};


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
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </DataProvider>
      </body>
    </html>
  )
}
