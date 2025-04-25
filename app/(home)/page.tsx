import { Hero } from "@/components/landing/hero"
import { Featured } from "@/components/landing/featured"
import { Story } from "@/components/landing/story"
import { FeaturedJournal } from "@/components/landing/journal-featured"
import { Culture } from "@/components/landing/culture"
import { Newsletter } from "@/components/shared/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      {/* Featured Collection */}
      <Featured />
      {/* Cultural Story Block */}
      <Story />
      {/* Journal Highlights */}
      <FeaturedJournal />
      {/* Cultural Carousel - Replacing Instagram Feed */}
      <Culture />
      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
