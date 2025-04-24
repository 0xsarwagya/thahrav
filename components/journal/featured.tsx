import type { Journal } from "@/.content-collections/generated"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"
import Image from "next/image"

export const FeaturedPost = ({ post }: { post: Journal }) => {
    return (
        <div className="mb-8 sm:mb-12 md:mb-16">
            <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="order-2 md:order-1">
                        <CardContent className="flex h-full flex-col justify-center p-6 sm:p-8">
                            <Badge className="mb-3 w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                                {post.category}
                            </Badge>
                            <h2 className="font-serif text-xl font-bold sm:text-2xl md:text-3xl">{post.title}</h2>
                            <p className="mt-3 text-muted-foreground font-medium">{post.description}</p>
                            <div className="mt-4 flex items-center text-sm text-muted-foreground font-medium">
                                <span>Sarwgya Singh</span>
                                <span className="mx-2">•</span>
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span>{post.readingTime}</span>
                            </div>
                            <div className="mt-6">
                                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                                    <Link href={`/journal/${post.slug}`}>Read Article</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </div>
                    <div className="order-1 md:order-2">
                        <AspectRatio ratio={16 / 9} className="h-full">
                            <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </AspectRatio>
                    </div>
                </div>
            </Card>
        </div>
    )
}