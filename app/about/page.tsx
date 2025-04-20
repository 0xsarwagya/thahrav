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
              src="/images/culture.jpg?height=800&width=800&text=Brand+Story"
              alt="Thahrav founder with artists"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </Card>
        <div>
          <h2 className="font-serif text-xl font-medium sm:text-2xl md:text-3xl">Our Story</h2>
          <div className="mt-4 space-y-3 text-muted-foreground sm:mt-6 sm:space-y-4">
            <p>
              Thahrav is a culture-rooted fashion brand born from a deep reverence for India's spiritual and artistic legacy.
              Our name — meaning “pause” or “stillness” — reflects our belief that fashion can be a sacred act of slowing down,
              reconnecting with our roots, and expressing who we truly are.
            </p>
            <p>
              We blend timeless symbolism from sacred geography, like Kailash and Kashi, with modern silhouettes and wearable art.
              Our collections feature motifs inspired by Indian mythology, temple architecture, and ancient storytelling forms.
            </p>
            <p>
              Currently working with skilled local artists in Bihar, we aim to gradually collaborate with artisans across India,
              celebrating regional crafts and giving them a bold, modern voice. Every Thahrav piece is not just clothing — it's a prayer,
              a poem, a piece of history.
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
                At Thahrav, our mission is to weave culture, spirituality, and style into meaningful fashion. We’re building a bridge
                between ancient Indian traditions and bold modern expression — starting with Bihar, and expanding to every sacred corner of India.
              </p>
              <p>
                Through ethical collaborations, sustainable production, and deep storytelling, we hope to honor India’s artistic soul
                while empowering artists and connecting wearers to something greater than trends — something timeless.
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
            Each Thahrav piece is a tribute to India’s artistic legacy — crafted with soul, story, and sacred intention.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-3 md:mt-12">
          {[
            {
              title: "Madhubani Art",
              description: "A sacred folk art of Bihar, Madhubani paints mythology and nature with bold lines, vibrant colors, and cosmic tales.",
              image: "/arts/madhubani.jpg",
            },
            {
              title: "Kalamkari",
              description: "Hand-painted stories of gods, goddesses, and flora in earthy tones — a textile art rooted in devotion and precision.",
              image: "/arts/kalamkari.jpg",
            },
            {
              title: "Mandala Art",
              description: "Sacred geometry in motion — Mandalas bring inner stillness to outer wear, reminding us of the divine symmetry in all things.",
              image: "/arts/mandala.jpg",
            }
          ].map((craft, index) => (
            <Card key={craft.title} className="overflow-hidden">
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
                  src="/images/founders-stylised.jpg?height=200&width=200&text=Founder"
                  alt="Founder of Thahrav"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="italic">
                  "Thahrav is our offering to the spirit of India — a blend of stillness and strength, woven into every thread. We
                  believe that clothing is not just what you wear, but what you carry: stories, symbols, and sacred roots. Through
                  Thahrav, we hope to spark a return to meaning, beauty, and cultural memory — one piece at a time."
                </p>
                <p className="mt-3 font-serif text-lg sm:mt-4">- Shweta and Amitesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
