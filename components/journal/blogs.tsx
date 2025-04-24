import type { Journal } from "@/.content-collections/generated"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"
import Image from "next/image"
import { Badge } from "../ui/badge"

export const BlogsDisplay = ({ posts }: { posts: Journal[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
                <Card key={post.slug} className="overflow-hidden">
                    <Link href={`/journal/${post.slug}`} className="group block">
                        <div className="relative">
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </AspectRatio>
                            <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground hover:bg-primary/90">
                                {post.category}
                            </Badge>
                        </div>
                        <CardContent className="p-4 sm:p-5">
                            <h3 className="font-serif text-lg font-bold sm:text-xl">{post.title}</h3>
                            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground font-medium">{post.description}</p>
                            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground font-medium">
                                <span>{post.date}</span>
                                <span>{post.readingTime}</span>
                            </div>
                            <div className="mt-4 flex items-center text-sm font-bold text-primary">
                                Read More
                                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-1"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </CardContent>
                    </Link>
                </Card>
            ))}
        </div>
    )
}