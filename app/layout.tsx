import "@/styles/index.css";
import { PostHogProvider } from "@/components/providers/posthog";
import { ThemeProvider } from "@/components/providers/theme";
import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/header";
import type { Metadata } from "next";
import { Hind_Madurai, Hind_Siliguri } from "next/font/google";
import { Toaster } from "sonner";
import Head from "next/head";
import { Banner } from "@/components/shared/banner";
import Script from "next/script";
import { OrganizationJsonLd } from "next-seo"

export const metadata: Metadata = {
	metadataBase: new URL("https://thahrav.shop"),
	title: {
		default: "Thahrav Shop",
		template: "%s | Thahrav Shop",
	},
	description:
		"Thahrav blends Indian heritage with modern design. Shop spiritual streetwear, oversized t-shirts, hoodies, and artisanal fashion for men, women & unisex.",
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
				url: "https://thahrav.shop/og-image.png",
				width: 1200,
				height: 630,
				alt: "Thahrav – From Kailash to Kashi, Stitched in Style",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@thahravshop",
		creator: "@thahrav",
		title: "Thahrav – From Kailash to Kashi, Stitched in Style",
		description:
			"Divine-inspired fashion meets modern design. Explore mythic streetwear, oversized tees, hoodies & spiritual silhouettes at Thahrav.",
		images: ["https://thahrav.shop/og-image.png"],
	},
	verification: {
		google: "fEAW6Y9f2lPlKbAdbPFhxw9M8gBWma0bmHZ_s-1d8Hc"
	}
};

const geistSans = Hind_Madurai({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
});

const geistMono = Hind_Siliguri({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<OrganizationJsonLd
					name="Thahrav"
					url="https://thahrav.shop"
					useAppDir={true}
					logo="https://thahrav.shop/favicon.png"
					sameAs={["https://www.instagram.com/thahrav_"]}
				/>
			</Head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<PostHogProvider>
					<ThemeProvider>
						<Toaster />
						<Banner
							title="Free Shipping PAN India!!!!"
							description="All Orders Have Free Shipping, Pan India!"
							linkText="Join The Waitlist"
							linkUrl="/"
						/>
						<main className="selection:bg-foreground selection:text-background bg-backdrop">
							<section className="px-4 md:px-8">
								<Navbar />
							</section>
							{children}
							<Footer />
						</main>
					</ThemeProvider>
				</PostHogProvider>
			</body>
		</html>
	);
}
