import Image from "next/image"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">About Thahrav</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">From Kailash to Kashi, dipped in style</p>
      </div>

      {/* Brand Story */}
      <div className="mt-8 grid gap-8 sm:mt-12 md:mt-16 md:grid-cols-2 md:items-center md:gap-12">
        <Card className="overflow-hidden p-0">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/placeholder.svg?height=800&width=800&text=Brand+Story"
              alt="Thahrav founder with artisans"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </Card>
        <div>
          <h2 className="font-serif text-xl font-medium sm:text-2xl md:text-3xl">Our Story</h2>
          <div className="mt-4 space-y-3 text-muted-foreground sm:mt-6 sm:space-y-4">
            <p>
              Thahrav was born from a deep appreciation for India's rich cultural heritage and craftsmanship. Our
              founder, inspired by childhood memories of watching skilled artisans at work, set out to create a brand
              that would honor these traditions while making them relevant to contemporary lifestyles.
            </p>
            <p>
              The name "Thahrav" comes from the Hindi word meaning "pause" or "stillness" – reflecting our philosophy of
              slowing down to appreciate the beauty in traditional craftsmanship and the stories behind each piece.
            </p>
            <p>
              We believe that fashion should be more than just clothing; it should be a medium to celebrate culture,
              support artisans, and create meaningful connections between the wearer and the maker.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-12 sm:my-16 md:my-20" />

      {/* Mission */}
      <div className="bg-sandstone py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-xl font-medium sm:text-2xl md:text-3xl">Our Mission</h2>
            <div className="mt-4 space-y-3 text-muted-foreground sm:mt-6 sm:space-y-4">
              <p>
                At Thahrav, our mission is to create a bridge between India's rich cultural heritage and contemporary
                fashion. We strive to preserve traditional craftsmanship by collaborating with skilled artisans across
                India, ensuring their techniques and knowledge continue to thrive.
              </p>
              <p>
                We are committed to ethical practices, sustainable production methods, and fair compensation for all
                artisans involved in creating our pieces. By choosing Thahrav, you become part of a movement that values
                the hands that create, the stories they tell, and the traditions they preserve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Craftsmanship */}
      <div className="mt-12 sm:mt-16 md:mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-xl font-medium sm:text-2xl md:text-3xl">Our Craftsmanship</h2>
          <p className="mt-2 text-muted-foreground sm:mt-4">
            Each Thahrav piece is a testament to the skill and dedication of India's master craftspeople.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-3 md:mt-12">
          {[
            {
              title: "Hand Block Printing",
              description: "Ancient technique from Rajasthan using hand-carved wooden blocks and natural dyes.",
              image: "/placeholder.svg?height=400&width=400&text=Block+Printing",
            },
            {
              title: "Handloom Weaving",
              description:
                "Traditional weaving methods that create unique textures and patterns impossible to replicate by machine.",
              image: "/placeholder.svg?height=400&width=400&text=Handloom+Weaving",
            },
            {
              title: "Hand Embroidery",
              description:
                "Intricate needlework techniques passed down through generations, adding dimension and character.",
              image: "/placeholder.svg?height=400&width=400&text=Hand+Embroidery",
            },
          ].map((craft, index) => (
            <Card key={index} className="overflow-hidden">
              <AspectRatio ratio={1 / 1}>
                <Image src={craft.image || "/placeholder.svg"} alt={craft.title} fill className="object-cover" />
              </AspectRatio>
              <div className="p-4 text-center">
                <h3 className="font-serif text-lg font-medium sm:text-xl">{craft.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{craft.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Founder's Note */}
      <div className="mt-12 bg-primary py-8 text-primary-foreground sm:mt-16 sm:py-12 md:mt-20 md:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-xl font-medium sm:text-2xl md:text-3xl">Founder's Note</h2>
            <div className="mt-6 flex flex-col items-center gap-6 sm:mt-8 md:flex-row md:gap-8">
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full sm:h-40 sm:w-40">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Founder"
                  alt="Founder of Thahrav"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="italic">
                  "Thahrav was born from my desire to celebrate the incredible craftsmanship I grew up witnessing across
                  India. Each piece we create carries not just the touch of skilled hands, but also the weight of
                  centuries-old traditions and stories. My hope is that when you wear Thahrav, you feel connected to
                  this rich cultural tapestry and become part of our journey to preserve and honor these timeless
                  crafts."
                </p>
                <p className="mt-3 font-serif text-lg sm:mt-4">- Founder's Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* @TODO: Add team section when team information and photos are available */}
      {/* @TODO: Add sustainability practices section when content is finalized */}
    </div>
  )
}
