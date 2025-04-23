import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import allJournals from "@/.content-collections/generated/allJournals"


export const FeaturedJournal = () => {
    const featured = allJournals.splice(0, 3)

    return (
        <section className="py-12 md:py-16 lg:py-24">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center md:mb-12">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">From The Journal</h2>
                    <p className="mt-3 text-muted-foreground font-medium md:mt-4">Stories of fabric, design, and culture</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                    {featured.map((post, index) => (
                        <Card key={index.toString()} className="overflow-hidden">
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
                                <p className="mt-2 text-sm text-muted-foreground font-medium">{post.description}</p>
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
    )
}