import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Hero } from "@/components/landing/hero"
import { Featured } from "@/components/landing/featured"
import { Story } from "@/components/landing/story"
import { FeaturedJournal } from "@/components/landing/journal-featured"
import { Culture } from "@/components/landing/culture"

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
    </div>
  )
}
