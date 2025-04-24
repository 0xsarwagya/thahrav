import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import allJournals from "@/.content-collections/generated/allJournals"
import { notFound } from "next/navigation"
import { MDX } from "@/components/ui/mdx"
import { Card, CardContent } from "@/components/ui/card"

type PageProps = {
  params: Promise<{ slug: string }>
}


export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allJournals.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  const relatedPosts = allJournals.filter((p) => p.category === post.category && post.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 justify-items-start items-start">
      <div className="flex flex-col justify-between">
        <Button
          asChild
          variant="ghost"
          className="mb-6 flex items-center gap-2 p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground sm:mb-8"
        >
          <Link href="/journal">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Journal
          </Link>
        </Button>
      </div>

      <div className="mx-auto max-w-3xl">
        {/* Article Header */}
        <div className="mb-6 sm:mb-8">
          <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90">{post.category}</Badge>
          <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              <span>
                Sarwagya Singh
              </span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 overflow-hidden rounded-lg sm:mb-10">
          <AspectRatio ratio={16 / 9}>
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </AspectRatio>
        </div>

        {/* Article Content */}
        <div
          className="prose prose-indigo max-w-none dark:prose-invert"
        >
          <MDX code={post.content} />
        </div>

        {/* Share Links */}
        <div className="mt-8 sm:mt-10">
          <div className="flex items-center gap-2">
            <span className="font-medium">Share this article:</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Copy link</span>
            </Button>
          </div>
        </div>

        <Separator className="my-8 sm:my-10" />

        {/* Author Bio */}
        <div className="rounded-lg bg-muted p-6 sm:p-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
              <Image src={"/images/sarwagya-stylized.jpg"} alt="Sarwagya" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-center font-serif text-lg font-medium sm:text-left">
                Sarwagya Singh
              </h3>
              <p className="mt-1 text-center text-sm text-muted-foreground sm:text-left">
                I'm a tech-savvy storyteller with roots in Indian culture and a deep love for spiritual expression. Blending tradition with design, I co-create Thahrav with my family—a heartfelt fashion brand that celebrates our heritage through art, fabric, and intention. From coding the website to connecting with local artists, I build bridges between the ancient and the modern, one soulful piece at a time.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 sm:my-10" />

        {/* Related Articles */}
        <div>
          <h2 className="font-serif text-xl font-medium sm:text-2xl">Related Articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug} className="overflow-hidden">
                <Link href={`/journal/${relatedPost.slug}`} className="group block">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="line-clamp-2 font-serif text-base font-medium">{relatedPost.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{relatedPost.description}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{relatedPost.date}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
