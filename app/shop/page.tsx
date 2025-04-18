import Link from "next/link"
import Image from "next/image"
import { Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"

// @TODO: Replace with actual product data from e-commerce backend
// @TODO: Implement pagination when backend product service is available
// @TODO: Connect filter functionality to product database when available
const products = [
  {
    id: 1,
    name: "Handwoven Silk Kurta",
    description: "Inspired by Varanasi's rich textile heritage",
    price: "₹4,999",
    image: "/placeholder.svg?height=600&width=450&text=Product+1",
    category: "men",
  },
  {
    id: 2,
    name: "Embroidered Cotton Saree",
    description: "Featuring traditional Kantha embroidery",
    price: "₹6,499",
    image: "/placeholder.svg?height=600&width=450&text=Product+2",
    category: "women",
  },
  {
    id: 3,
    name: "Block Print Shirt",
    description: "Hand block printed using natural dyes",
    price: "₹2,999",
    image: "/placeholder.svg?height=600&width=450&text=Product+3",
    category: "men",
  },
  {
    id: 4,
    name: "Ikat Weave Dress",
    description: "Contemporary silhouette with traditional Ikat patterns",
    price: "₹3,799",
    image: "/placeholder.svg?height=600&width=450&text=Product+4",
    category: "women",
  },
  {
    id: 5,
    name: "Handcrafted Leather Bag",
    description: "Vegetable-tanned leather with brass accents",
    price: "₹5,299",
    image: "/placeholder.svg?height=600&width=450&text=Product+5",
    category: "accessories",
  },
  {
    id: 6,
    name: "Ajrakh Print Scarf",
    description: "Traditional Ajrakh prints on fine cotton",
    price: "₹1,499",
    image: "/placeholder.svg?height=600&width=450&text=Product+6",
    category: "accessories",
  },
  {
    id: 7,
    name: "Khadi Cotton Kurta",
    description: "Handspun and handwoven Khadi cotton",
    price: "₹3,299",
    image: "/placeholder.svg?height=600&width=450&text=Product+7",
    category: "men",
  },
  {
    id: 8,
    name: "Chanderi Silk Dupatta",
    description: "Lightweight Chanderi silk with gold border",
    price: "₹2,799",
    image: "/placeholder.svg?height=600&width=450&text=Product+8",
    category: "women",
  },
  {
    id: 9,
    name: "Brass Temple Earrings",
    description: "Inspired by South Indian temple architecture",
    price: "₹1,899",
    image: "/placeholder.svg?height=600&width=450&text=Product+9",
    category: "accessories",
  },
]

export default function ShopPage() {
  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
      <div className="mb-6 text-center sm:mb-8 md:mb-10">
        <h1 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Shop Collection</h1>
        <p className="mt-2 text-muted-foreground font-medium sm:mt-3 md:mt-4">
          Discover our handcrafted pieces inspired by Indian culture
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8 sm:gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <span className="text-sm font-bold">Filter by:</span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex h-9 items-center gap-1 text-sm font-semibold sm:gap-2 border-2">
                Category
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Men</DropdownMenuItem>
              <DropdownMenuItem>Women</DropdownMenuItem>
              <DropdownMenuItem>Accessories</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex h-9 items-center gap-1 text-sm font-semibold sm:gap-2 border-2">
                Fabric
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Cotton</DropdownMenuItem>
              <DropdownMenuItem>Silk</DropdownMenuItem>
              <DropdownMenuItem>Khadi</DropdownMenuItem>
              <DropdownMenuItem>Linen</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex h-9 items-center gap-1 text-sm font-semibold sm:gap-2 border-2">
                Color
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Indigo</DropdownMenuItem>
              <DropdownMenuItem>Mustard</DropdownMenuItem>
              <DropdownMenuItem>Ivory</DropdownMenuItem>
              <DropdownMenuItem>Madder Red</DropdownMenuItem>
              <DropdownMenuItem>Forest Green</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex h-9 items-center gap-1 text-sm font-semibold sm:gap-2 border-2">
                Sort by
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator className="mb-6 sm:mb-8" />

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Link href={`/shop/product/${product.id}`} className="group block">
              <AspectRatio ratio={3 / 4}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio>
              <CardContent className="pt-4">
                <h3 className="font-serif text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{product.description}</p>
                <p className="mt-1 font-bold sm:mt-2">{product.price}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
