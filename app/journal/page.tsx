import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// @TODO: Replace with actual blog data from CMS or API
// @TODO: Implement pagination functionality when backend is available
// @TODO: Connect search and filter functionality to backend
const blogPosts = [
  {
    id: 1,
    title: "The Art of Block Printing: A Timeless Craft",
    excerpt:
      "Exploring the ancient technique of hand block printing from Rajasthan and how it continues to influence modern textile design.",
    date: "April 12, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Block+Printing",
    category: "Craftsmanship",
    author: "Priya Sharma",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Weaving Traditions of South India",
    excerpt:
      "Discovering the intricate silk weaving practices of Kanchipuram and the stories behind the weavers who preserve this heritage.",
    date: "April 5, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Silk+Weaving",
    category: "Heritage",
    author: "Arjun Menon",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Colors of India: Natural Dyes and Their Stories",
    excerpt:
      "How traditional natural dyeing techniques inspire our color palette and contribute to sustainable fashion practices.",
    date: "March 28, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Natural+Dyes",
    category: "Sustainability",
    author: "Meera Patel",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Modern Kurta: Reimagining a Classic",
    excerpt:
      "How contemporary designers are breathing new life into the traditional kurta while honoring its cultural significance.",
    date: "March 20, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Modern+Kurta",
    category: "Fashion",
    author: "Vikram Singh",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Artisan Spotlight: The Master Weavers of Varanasi",
    excerpt:
      "Meet the families who have been creating Banarasi silk for generations and learn about their techniques and challenges.",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Varanasi+Weavers",
    category: "Artisan Stories",
    author: "Ananya Desai",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Sustainable Fashion: The Indian Perspective",
    excerpt: "How India's textile traditions offer valuable lessons for the global sustainable fashion movement.",
    date: "March 8, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Sustainable+Fashion",
    category: "Sustainability",
    author: "Rohan Kapoor",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "The Evolution of Draping: From Sarees to Contemporary Silhouettes",
    excerpt:
      "Tracing the influence of traditional Indian draping techniques on modern fashion design around the world.",
    date: "February 28, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Draping+Techniques",
    category: "Fashion",
    author: "Leela Nair",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Textile Treasures: Preserving India's Handloom Heritage",
    excerpt: "The importance of documenting and preserving traditional textile techniques for future generations.",
    date: "February 20, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Handloom+Heritage",
    category: "Heritage",
    author: "Sanjay Mehta",
    readTime: "7 min read",
  },
]

// @TODO: Replace with actual categories from CMS or API
const categories = ["All", "Craftsmanship", "Heritage", "Sustainability", "Fashion", "Artisan Stories", "Culture"]

export default function JournalPage() {
  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">The Journal</h1>
        <p className="mt-2 text-muted-foreground font-medium sm:mt-4">
          Stories of fabric, design, and culture from the Thahrav community
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between md:mt-12">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10"
            // @TODO: Implement search functionality when backend is available
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-sm font-semibold">Filter by:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex h-9 items-center gap-1 text-sm font-semibold sm:gap-2">
                Category
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {categories.map((category) => (
                <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex h-9 items-center gap-1 text-sm font-semibold sm:gap-2">
                Sort by
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Oldest</DropdownMenuItem>
              <DropdownMenuItem>Most Popular</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator className="my-6 sm:my-8" />

      {/* Featured Post */}
      <div className="mb-8 sm:mb-12 md:mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="order-2 md:order-1">
              <CardContent className="flex h-full flex-col justify-center p-6 sm:p-8">
                <Badge className="mb-3 w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="font-serif text-xl font-bold sm:text-2xl md:text-3xl">{blogPosts[0].title}</h2>
                <p className="mt-3 text-muted-foreground font-medium">{blogPosts[0].excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground font-medium">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <div className="mt-6">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                    <Link href={`/journal/${blogPosts[0].id}`}>Read Article</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
            <div className="order-1 md:order-2">
              <AspectRatio ratio={16 / 9} className="h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  priority
                />
              </AspectRatio>
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <Link href={`/journal/${post.id}`} className="group block">
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
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground font-medium">{post.excerpt}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 flex items-center text-sm font-bold text-primary">
                  Read More
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

      {/* Pagination */}
      <div className="mt-8 flex justify-center sm:mt-12">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" disabled>
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
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="sr-only">Previous page</span>
          </Button>
          <Button variant="outline" className="h-9 w-9 font-bold" aria-current="page">
            1
          </Button>
          <Button variant="outline" className="h-9 w-9 font-bold">
            2
          </Button>
          <Button variant="outline" className="h-9 w-9 font-bold">
            3
          </Button>
          <Button variant="outline" size="icon">
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
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 rounded-lg bg-muted p-6 sm:mt-16 sm:p-8 md:mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-xl font-bold sm:text-2xl">Subscribe to Our Journal</h2>
          <p className="mt-2 text-muted-foreground font-medium">
            Get the latest stories, craftsmanship insights, and cultural explorations delivered to your inbox.
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
              required
              // @TODO: Connect to newsletter service when available
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
