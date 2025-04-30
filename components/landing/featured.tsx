"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import useSWR from "swr"
import { fetcher } from "@/lib/utils"
import type { Product } from "@/prisma"
import { Suspense } from "react";

/**
 * featured products component
 * 
 * @returns A React component that displays a section of featured products.
 */
export const Featured = () => {
    const { data, error, isLoading } = useSWR<Product[]>("/api/products/featured", fetcher, {
        suspense: true,
    });

    return (
        <section className="py-12 md:py-16 lg:py-24">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center md:mb-12">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Featured Collection</h2>
                    <p className="mt-3 text-muted-foreground font-medium md:mt-4">
                        Discover our latest designs inspired by Indian craftsmanship
                    </p>
                </div>

                <Suspense fallback={<ProductsLoading />}>
                    {!data || isLoading || error ? <ProductsLoading /> : <ProductDisplay featured={data} />}
                </Suspense>

                <div className="mt-8 text-center md:mt-12">
                    <Button
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
                    >
                        <Link href="/shop" className="flex items-center gap-2">
                            View All Collections
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

/**
 * ProductDisplay component
 *
 * @param featured - The `featured` parameter is an array of `Products` objects. It represents the
 * featured products that will be displayed in the component.
 * @returns The `ProductDisplay` component is returning a grid of `Card` components. Each `Card`
 * component represents a featured product and contains an image, title, description, and price.
 */
const ProductDisplay = ({ featured }: { featured: Product[] }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {featured.map((item) => (
                <Link href={`/shop/product/${item.id}`} key={item.id}>
                    <Card className="overflow-hidden">
                        <div className="relative">
                            <AspectRatio ratio={3 / 4}>
                                <Image
                                    src={item.images.shift() ?? '/favicon.png'}
                                    alt={`Featured product ${item}`}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </AspectRatio>
                        </div>
                        <CardContent className="pt-4">
                            <h3 className="font-serif text-xl font-bold">
                                {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium">
                                {item.description}
                            </p>
                            <div className="mt-2 font-bold">
                                {item.price ? <DisplayDiscountPrice originalPrice={item.originalPrice} price={item.price} /> : item.originalPrice}
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

/**
 * The function `ProductsLoading` returns a grid of loading cards with placeholders for product
 * images, titles, descriptions, and prices.
 * @returns The `ProductsLoading` component is returning a grid of loading cards. Each card
 * represents a product and contains placeholders for the product image, title, description, and
 * price.
 */
const ProductsLoading = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i.toString()} className="overflow-hidden">
                    <div className="relative">
                        <AspectRatio ratio={3 / 4}>
                            <div className="absolute inset-0 bg-muted bg-opacity-20" />
                            <div className="absolute inset-0 animate-pulse">
                                <div className="absolute inset-x-4 top-4 h-4 bg-primary bg-opacity-50 rounded-full" />
                                <div className="absolute inset-x-8 top-12 h-4 bg-primary bg-opacity-50 rounded-full" />
                                <div className="absolute inset-x-4 top-20 h-4 bg-primary bg-opacity-50 rounded-full" />
                            </div>
                        </AspectRatio>
                    </div>
                    <CardContent className="pt-4">
                        <h3 className="font-serif text-xl font-bold">
                            <span className="absolute inset-0" />
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                            <span className="absolute inset-0" />
                        </p>
                        <div className="mt-2 font-bold">
                            <span className="absolute inset-0" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

/**
 * The function `DisplayDiscountPrice` returns a price with a strikethrough line and a discount
 * price.
 * @param originalPrice - The originalPrice parameter represents the original price of a product. It
 * is a number value.
 * @param price - The `price` parameter represents the discounted price of a product. It is a number
 * value.
 * @returns The function `DisplayDiscountPrice` returns a JSX element that displays the original price
 * with a strikethrough line and the discounted price.
 */
const DisplayDiscountPrice = ({ originalPrice, price }: { originalPrice: number, price: number }) => {
    return (
        <p className="flex items-center gap-2">
            <span className="text-sm line-through line-primary decoration-primary decoration-2">₹{originalPrice}</span>
            <span className="text-lg font-bold">₹{price}</span>
        </p>
    )
}