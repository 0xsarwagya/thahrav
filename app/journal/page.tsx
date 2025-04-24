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
import blogPosts from "@/.content-collections/generated/allJournals"

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
                <p className="mt-3 text-muted-foreground font-medium">{blogPosts[0].description}</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground font-medium">
                  <span>Sarwgya Singh</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readingTime}</span>
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
    </div>
  )
}
