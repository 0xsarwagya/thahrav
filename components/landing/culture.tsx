"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const Culture = () => {
    return(
        <section className = "border-t border-border py-12 md:py-16 lg:py-24 bg-muted/30" >
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center md:mb-12">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                        Wisdom Woven in Words
                    </h2>
                    <p className="mt-3 text-muted-foreground font-medium md:mt-4">
                        Timeless insights from visionaries on culture, creativity, and connection
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                        {
                            "quote": "No culture can live if it attempts to be exclusive.",
                            "source": "Mahatma Gandhi",
                            "image": "/images/quote_1.jpg",
                        },
                        {
                            "quote": "Let the beauty we love be what we do. There are hundreds of ways to kneel and kiss the ground.",
                            "source": "Rumi (translated by Coleman Barks)",
                            "image": "/images/quote_2.jpg",
                        },
                        {
                            "quote": "What is Art? It is the response of man's creative soul to the call of the Real.",
                            "source": "Rabindranath Tagore",
                            "image": "/images/quote_3.jpg",
                        }
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
      </section >
    )
}