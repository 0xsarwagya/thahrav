import Image from "next/image"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Story = () => {
    return (
        <section className="bg-muted py-12 md:py-16 lg:py-24">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
                    <div className="order-2 md:order-1">
                        <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Our Cultural Roots</h2>
                        <div className="mt-4 space-y-4 text-muted-foreground font-medium md:mt-6">
                            <p>
                                Thahrav is a culture-rooted fashion brand born from a deep reverence for India's spiritual and artistic legacy.
                                Our name — meaning “pause” or “stillness” — reflects our belief that fashion can be a sacred act of slowing down,
                                reconnecting with our roots, and expressing who we truly are.
                            </p>
                            <p>
                                We blend timeless symbolism from sacred geography, like Kailash and Kashi, with modern silhouettes and wearable art.
                                Our collections feature motifs inspired by Indian mythology, temple architecture, and ancient storytelling forms.
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
                                    src="/images/culture.jpg?height=800&width=800&text=Cultural+Craftsmanship"
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
    )
}