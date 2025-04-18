import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-primary">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Indian textile craftsmanship"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              From Kailash to Kashi, dipped in style
            </h1>
            <p className="text-base font-medium text-primary-foreground sm:text-lg md:text-xl">
              Timeless Indian cultural depth meets modern-day wearables
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/shop">Explore Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Featured Collection</h2>
            <p className="mt-3 text-muted-foreground font-medium md:mt-4">
              Discover our latest designs inspired by Indian craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative">
                  <AspectRatio ratio={3 / 4}>
                    <Image
                      src={`/placeholder.svg?height=600&width=450&text=Product ${item}`}
                      alt={`Featured product ${item}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-serif text-xl font-bold">Handwoven Silk Kurta</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    Inspired by Varanasi's rich textile heritage
                  </p>
                  <p className="mt-2 font-bold">₹4,999</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
            >
              <Link href="/shop" className="flex items-center gap-2">
                View All Collections
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cultural Story Block */}
      <section className="bg-muted py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Our Cultural Roots</h2>
              <div className="mt-4 space-y-4 text-muted-foreground font-medium md:mt-6">
                <p>
                  Thahrav draws inspiration from the rich tapestry of Indian culture, craftsmanship, and heritage. Each
                  piece tells a story of artisanal excellence passed down through generations.
                </p>
                <p>
                  We collaborate with skilled craftspeople across India to create contemporary designs that honor
                  traditional techniques while embracing modern aesthetics.
                </p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
                >
                  <Link href="/about">Discover Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Card className="overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src="/placeholder.svg?height=800&width=800&text=Cultural+Craftsmanship"
                    alt="Indian artisan at work"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Highlights */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">From The Journal</h2>
            <p className="mt-3 text-muted-foreground font-medium md:mt-4">Stories of fabric, design, and culture</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "The Art of Block Printing",
                excerpt: "Exploring the ancient technique of hand block printing from Rajasthan.",
                image: "/placeholder.svg?height=400&width=600&text=Block+Printing",
              },
              {
                title: "Weaving Traditions of South India",
                excerpt: "Discovering the intricate silk weaving practices of Kanchipuram.",
                image: "/placeholder.svg?height=400&width=600&text=Silk+Weaving",
              },
              {
                title: "Colors of India: Natural Dyes",
                excerpt: "How traditional natural dyeing techniques inspire our color palette.",
                image: "/placeholder.svg?height=400&width=600&text=Natural+Dyes",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-serif text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">{post.excerpt}</p>
                  <Link
                    href="/journal"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <Card key={index} className="overflow-hidden flex flex-col">
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
