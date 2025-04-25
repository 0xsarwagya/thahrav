import JournalDisplay from "@/components/journal/journal-display"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://thahrav.shop"),
  title: "Journal",
  description: "Woven stories of fabric, heritage, and artistry from the heart of the Thahrav community.",
  openGraph: {
    title: "Thahrav - Journals",
    description: "Woven stories of fabric, heritage, and artistry from the heart of the Thahrav community.",
    images: [
      {
        url: "/og/og.png?height=630&width=1200&text=About+Thahrav",
        alt: "Thahrav - Journals",
        width: 1200,
        height: 630
      }
    ]
  },
}
export default function JournalPage() {
  return <JournalDisplay />
}
