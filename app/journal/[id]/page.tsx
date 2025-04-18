import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// @TODO: Replace with actual blog data fetching from CMS or API
const getBlogPost = (id: string) => {
  // This is a placeholder function that would normally fetch data from an API
  return {
    id: Number.parseInt(id),
    title: "The Art of Block Printing: A Timeless Craft",
    excerpt:
      "Exploring the ancient technique of hand block printing from Rajasthan and how it continues to influence modern textile design.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
      
      <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
      
      <h2>The Origins of Block Printing</h2>
      
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      
      <p>Block printing is believed to have originated in China around 4,000 years ago. From there, it spread to other parts of Asia, including India, where it found a particularly receptive home in Rajasthan. The craft has been passed down through generations, with each region developing its own distinctive patterns and techniques.</p>
      
      <h2>The Process</h2>
      
      <p>The process of block printing involves several meticulous steps:</p>
      
      <ol>
        <li>Carving the design into wooden blocks</li>
        <li>Preparing the fabric through washing and treating</li>
        <li>Creating natural dyes from plants, minerals, and sometimes insects</li>
        <li>Dipping the block into the dye and carefully stamping it onto the fabric</li>
        <li>Repeating the process to create patterns</li>
        <li>Drying and setting the dye</li>
      </ol>
      
      <p>Each step requires skill and precision, making every piece unique and carrying the subtle marks of its maker.</p>
      
      <h2>Regional Variations</h2>
      
      <p>India has several renowned centers of block printing, each with its own distinctive style:</p>
      
      <ul>
        <li><strong>Bagru:</strong> Known for its natural dyes and geometric patterns</li>
        <li><strong>Sanganer:</strong> Famous for its delicate floral motifs on white backgrounds</li>
        <li><strong>Ajrakh:</strong> Recognized for its complex patterns and resist-dyeing techniques</li>
        <li><strong>Bagh:</strong> Distinguished by its bold geometric and floral designs</li>
      </ul>
      
      <p>These regional variations reflect local cultural influences, available materials, and historical developments.</p>
      
      <h2>Contemporary Relevance</h2>
      
      <p>In today's fast-paced world of mass production, block printing offers a thoughtful alternative. Each piece tells a story of cultural heritage and human craftsmanship. The imperfections and variations inherent in hand-blocked textiles are increasingly valued in a world of machine-made uniformity.</p>
      
      <p>At Thahrav, we work directly with artisan communities to create contemporary designs using traditional block printing techniques. This collaboration helps preserve ancient crafts while creating sustainable livelihoods for skilled artisans.</p>
      
      <p>The next time you wear or use a block-printed textile, take a moment to appreciate the centuries of tradition, skill, and cultural expression woven into its very fibers.</p>
    `,
    date: "April 12, 2025",
    image: "/placeholder.svg?height=1200&width=1600&text=Block+Printing+Header",
    category: "Craftsmanship",
    author: "Priya Sharma",
    authorImage: "/placeholder.svg?height=200&width=200&text=Author",
    authorBio:
      "Priya is a textile historian and designer with a passion for traditional Indian crafts. She has spent over a decade documenting and working with artisan communities across India.",
    readTime: "5 min read",
    relatedPosts: [
      {
        id: 2,
        title: "Weaving Traditions of South India",
        excerpt:
          "Discovering the intricate silk weaving practices of Kanchipuram and the stories behind the weavers who preserve this heritage.",
        date: "April 5, 2025",
        image: "/placeholder.svg?height=600&width=800&text=Silk+Weaving",
        category: "Heritage",
      },
      {
        id: 3,
        title: "Colors of India: Natural Dyes and Their Stories",
        excerpt:
          "How traditional natural dyeing techniques inspire our color palette and contribute to sustainable fashion practices.",
        date: "March 28, 2025",
        image: "/placeholder.svg?height=600&width=800&text=Natural+Dyes",
        category: "Sustainability",
      },
      {
        id: 5,
        title: "Artisan Spotlight: The Master Weavers of Varanasi",
        excerpt:
          "Meet the families who have been creating Banarasi silk for generations and learn about their techniques and challenges.",
        date: "March 15, 2025",
        image: "/placeholder.svg?height=600&width=800&text=Varanasi+Weavers",
        category: "Artisan Stories",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // @TODO: Replace with actual data fetching
  const post = getBlogPost(params.id)

  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
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

      <div className="mx-auto max-w-3xl">
        {/* Article Header */}
        <div className="mb-6 sm:mb-8">
          <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90">{post.category}</Badge>
          <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readTime}</span>
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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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
              <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-center font-serif text-lg font-medium sm:text-left">{post.author}</h3>
              <p className="mt-1 text-center text-sm text-muted-foreground sm:text-left">{post.authorBio}</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 sm:my-10" />

        {/* Related Articles */}
        <div>
          <h2 className="font-serif text-xl font-medium sm:text-2xl">Related Articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {post.relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden">
                <Link href={`/journal/${relatedPost.id}`} className="group block">
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
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{relatedPost.excerpt}</p>
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
