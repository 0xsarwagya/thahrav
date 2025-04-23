import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Hero } from "@/components/landing/hero"
import { Featured } from "@/components/landing/featured"
import { Story } from "@/components/landing/story"
import { FeaturedJournal } from "@/components/landing/journal-featured"

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
      <section className="border-t border-border py-12 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Cultural Heritage</h2>
            <p className="mt-3 text-muted-foreground font-medium md:mt-4">Timeless wisdom from Indian traditions</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                quote: "The true essence of art lies in capturing the soul of the subject, not merely its form.",
                source: "Ancient Indian Art Philosophy",
                image: "/placeholder.svg?height=400&width=400&text=Art+Philosophy",
              },
              {
                quote: "In every thread woven lies the story of our ancestors, their dreams, and their legacy.",
                source: "Traditional Weaver's Saying",
                image: "/placeholder.svg?height=400&width=400&text=Weaving+Tradition",
              },
              {
                quote:
                  "Colors are not just pigments; they are emotions, stories, and connections to our natural world.",
                source: "Natural Dye Master's Wisdom",
                image: "/placeholder.svg?height=400&width=400&text=Natural+Colors",
              },
            ].map((item, index) => (
              <Card key={index.toString()} className="overflow-hidden flex flex-col">
                <AspectRatio ratio={1 / 1}>
                  <Image src={item.image || "/placeholder.svg"} alt={item.source} fill className="object-cover" />
                </AspectRatio>
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                  <blockquote className="text-lg font-medium italic">"{item.quote}"</blockquote>
                  <p className="mt-4 text-sm text-muted-foreground font-medium">— {item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-12 text-primary-foreground md:py-16 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Join Our Community</h2>
            <p className="mt-3 font-medium md:mt-4">
              Subscribe to receive updates on new collections, cultural stories, and exclusive offers.
            </p>

            <form className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-primary-foreground/50 bg-primary text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary focus:ring-secondary"
                required
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-secondary font-bold">
                Subscribe
              </Button>
            </form>
            {/* @TODO: Connect newsletter form to email marketing service when available */}
          </div>
        </div>
      </section>
    </div>
  )
}
