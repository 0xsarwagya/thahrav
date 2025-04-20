"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { CartDrawer } from "@/components/shared/cart-drawer"

type Product = {
  id: string
  name: string
  slug: string
  description: string
  price: string
  images: string[]
  sizes: string[]
  details: string[]
  care: string[]
  divineInspiration: string
  ritualUsage: string
  fabricOrigin: string
  mantra: string;
}

// @TODO: Replace with actual product data fetching from e-commerce backend
// This would typically be a server component with data fetching
const getProduct = (id: string) => {
  // Mock product data - in a real app, this would come from a database or API
  const products: Record<string, Product> = {
    "1": {
      id: "1",
      name: "Handwoven Silk Kurta",
      slug: "handwoven-silk-kurta",
      description:
        "Inspired by Varanasi's rich textile heritage, this handwoven silk kurta embodies the essence of traditional craftsmanship with a contemporary twist. Each piece is meticulously crafted by skilled artisans using techniques passed down through generations.",
      price: "₹4,999",
      images: [
        "/placeholder.svg?height=800&width=600&text=Product+Main",
        "/placeholder.svg?height=800&width=600&text=Product+Detail+1",
        "/placeholder.svg?height=800&width=600&text=Product+Detail+2",
        "/placeholder.svg?height=800&width=600&text=Product+Styling",
      ],
      sizes: ["S", "M", "L", "XL"],
      details: [
        "100% handwoven Banarasi silk",
        "Natural dyes derived from traditional sources",
        "Hand-finished details with intricate embroidery",
        "Breathable and lightweight fabric",
        "Designed for comfort and elegance",
      ],
      care: [
        "Dry clean only",
        "Store in a cool, dry place",
        "Avoid direct sunlight to prevent color fading",
        "Iron on low heat if necessary",
      ],
      divineInspiration:
        "This kurta draws inspiration from the sacred Ganges river and the ancient temples of Varanasi. The intricate patterns symbolize the flowing waters of the Ganges, believed to purify the soul. The design honors Lord Shiva, the patron deity of Varanasi, and embodies the spiritual essence of this holy city.",
      ritualUsage:
        "Perfect for auspicious occasions, temple visits, and spiritual gatherings. The silk fabric and traditional design make it suitable for festivals like Diwali, Navratri, and other sacred celebrations.",
      fabricOrigin:
        "Handwoven by master weavers in Varanasi using techniques passed down through generations. The silk is sourced ethically and dyed using traditional methods with natural pigments.",
      mantra: "वाराणसी काशी विश्वनाथ (Varanasi Kashi Vishwanath) - Honoring the eternal city of light",
    },
    "2": {
      id: "2",
      name: "Embroidered Cotton Saree",
      slug: "embroidered-cotton-saree",
      description:
        "This exquisite cotton saree features intricate hand embroidery inspired by the rich cultural heritage of India. The delicate patterns and vibrant colors celebrate the artistry of traditional craftsmanship.",
      price: "₹6,499",
      images: [
        "/placeholder.svg?height=800&width=600&text=Saree+Main",
        "/placeholder.svg?height=800&width=600&text=Saree+Detail+1",
        "/placeholder.svg?height=800&width=600&text=Saree+Detail+2",
        "/placeholder.svg?height=800&width=600&text=Saree+Styling",
      ],
      sizes: ["One Size"],
      details: [
        "100% organic cotton",
        "Hand-embroidered details",
        "Natural dyes",
        "Lightweight and breathable",
        "6 yards in length",
      ],
      care: [
        "Gentle hand wash with mild detergent",
        "Dry in shade",
        "Iron on medium heat",
        "Store folded to prevent creases",
      ],
      divineInspiration:
        "This saree draws inspiration from the divine feminine energy of Goddess Lakshmi. The lotus motifs and intricate patterns symbolize prosperity, abundance, and spiritual wealth. Each stitch is a tribute to the goddess who bestows blessings of fortune and well-being.",
      ritualUsage:
        "Ideal for pujas, temple visits, and auspicious ceremonies. The cotton fabric makes it comfortable for extended wear during religious rituals and festivals like Lakshmi Puja during Diwali.",
      fabricOrigin:
        "Handcrafted by skilled artisans in West Bengal using traditional Kantha embroidery techniques. The cotton is organically grown and processed using eco-friendly methods.",
      mantra: "ॐ महालक्ष्म्यै च विद्महे (Om Mahalakshmyai Cha Vidmahe) - In praise of the goddess of prosperity",
    },
  }

  return products[id] || null
}

// Note: Since we're using 'use client', we can't use async generateMetadata
// In a real app, you would handle metadata differently with a hybrid approach
// export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
//   const product = getProduct(params.id)

//   if (!product) {
//     return {
//       title: "Product Not Found | Thahrav",
//       description: "The requested product could not be found.",
//     }
//   }

//   return {
//     title: `${product.name} | Thahrav`,
//     description: product.divineInspiration.substring(0, 160),
//     openGraph: {
//       title: `${product.name} | Thahrav`,
//       description: product.divineInspiration.substring(0, 160),
//       type: "product",
//       url: `https://thahrav.com/shop/product/${product.id}`,
//       images: [
//         {
//           url: product.images[0],
//           width: 800,
//           height: 600,
//           alt: product.name,
//         },
//       ],
//     },
//     canonical: `https://thahrav.com/shop/product/${product.id}`,
//   }
// }

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProduct(id)
  const [quantity, setQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!product) {
    notFound()
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    // @TODO: Implement add to cart functionality
    // This would typically dispatch an action to add the product to the cart
    console.log(`Adding product ${product.id} to cart with quantity ${quantity} and size ${selectedSize}`)
    setIsCartOpen(true)
  }

  return (
    <main id="main-content" className="relative bg-background">
      {/* Skip to content link for accessibility */}
      <a
        href="#product-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
      >
        Skip to product content
      </a>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]" aria-hidden="true">
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat"></div>
      </div>

      <div className="container relative px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
        <Button
          asChild
          variant="ghost"
          className="mb-6 flex items-center gap-2 p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground sm:mb-8"
        >
          <Link href="/shop">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>

        <div id="product-content" className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-3 sm:space-y-4">
            <Card className="overflow-hidden p-0 border">
              <AspectRatio ratio={3 / 4}>
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </AspectRatio>
            </Card>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {product.images.slice(1).map((image, index) => (
                <Card key={index.toString()} className="overflow-hidden p-0 border">
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} detail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="relative">
            {/* Decorative border inspired by Indian patterns */}
            <div
              className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/30"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/30"
              aria-hidden="true"
            />

            <div className="px-4 py-6 md:p-6">
              <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">{product.name}</h1>
              <p className="mt-2 text-muted-foreground font-medium sm:mt-4">{product.description}</p>
              <p className="mt-4 text-xl font-medium sm:mt-6 sm:text-2xl">{product.price}</p>

              <Separator className="my-6" />

              {/* Size Selection */}
              <div className="mt-4 sm:mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Size</h3>
                  <Button variant="link" className="h-auto p-0 text-xs font-medium">
                    Size Guide
                  </Button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className={`rounded-md border px-3 py-2 text-center text-sm font-medium hover:border-foreground sm:px-4 ${selectedSize === size ? "border-primary bg-primary/10" : "border-border bg-background/80"
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-sm font-medium">Quantity</h3>
                <div className="mt-2 flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-r-none sm:h-10 sm:w-10"
                    onClick={decreaseQuantity}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    readOnly
                    className="h-9 w-14 rounded-none border-x-0 text-center sm:h-10 sm:w-16"
                    aria-label="Quantity"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-l-none sm:h-10 sm:w-10"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mt-6 sm:mt-8">
                <Button className="w-full" onClick={addToCart}>
                  Add to Cart
                </Button>
              </div>

              <Separator className="my-6 sm:my-8" />

              {/* Divine Inspiration */}
              <div className="mt-6">
                <h2 className="font-serif text-lg font-medium">Divine Inspiration</h2>
                <p className="mt-2 text-sm text-muted-foreground font-medium">{product.divineInspiration}</p>
              </div>

              {/* Ritual Usage */}
              <div className="mt-4">
                <h2 className="font-serif text-lg font-medium">Sacred Purpose</h2>
                <p className="mt-2 text-sm text-muted-foreground font-medium">{product.ritualUsage}</p>
              </div>

              {/* Fabric Origin */}
              <div className="mt-4">
                <h2 className="font-serif text-lg font-medium">Artisanal Heritage</h2>
                <p className="mt-2 text-sm text-muted-foreground font-medium">{product.fabricOrigin}</p>
              </div>

              {/* Mantra */}
              <div className="mt-4 bg-muted/30 p-4 rounded-md border border-border/50">
                <p className="text-center italic font-serif text-base">{product.mantra}</p>
              </div>

              <Separator className="my-6 sm:my-8" />

              {/* Product Details Tabs */}
              <div className="mt-8 sm:mt-12">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details" className="font-medium">
                      Details
                    </TabsTrigger>
                    <TabsTrigger value="care" className="font-medium">
                      Care
                    </TabsTrigger>
                    <TabsTrigger value="story" className="font-medium">
                      Story
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="mt-4">
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground font-medium">
                      {product.details.map((detail, index) => (
                        <li key={index.toString()}>{detail}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="care" className="mt-4">
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground font-medium">
                      {product.care.map((item, index) => (
                        <li key={index.toString()}>{item}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="story" className="mt-4">
                    <p className="text-sm text-muted-foreground font-medium">{product.divineInspiration}</p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onOpenChangeAction={setIsCartOpen} />
    </main>
  )
}
