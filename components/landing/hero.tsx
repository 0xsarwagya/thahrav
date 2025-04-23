import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Hero = () => {
    return (
        <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] md:h-[80vh]">
            <div className="absolute inset-0 bg-primary">
                <Image
                    src="/images/hero.jpg?height=1080&width=1920"
                    alt="Indian textile craftsmanship"
                    fill
                    className="object-cover opacity-30 grayscale-100"
                    priority
                />
            </div>
            <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-4 md:space-y-6">
                    <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                        Crafted from Culture, Styled for Spirit
                    </h1>
                    <p className="text-base font-medium text-primary-foreground sm:text-lg md:text-xl">
                        Designs rooted in culture, made for the modern wanderer — bold, meaningful, timeless.
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg">
                            <Link href="/shop">Explore Collection</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}