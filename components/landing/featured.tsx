"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import useSWR from "swr"
import { fetcher } from "@/lib/utils"
import { Products } from "@/prisma"
import useLocalStorage from "@/hooks/use-local-storage";
import { useEffect } from "react";

export const Featured = () => {
    const { data, error, isLoading } = useSWR<Products[]>("/api/products/featured", fetcher, {
        suspense: true,
    });
    const [featured, setFeatured] = useLocalStorage<Products[]>('thrv:products:featured', data ?? []);

    useEffect(() => {
        if (data) {
            setFeatured(data);
        }
    }, [data, setFeatured]);

    return (
        <section className="py-12 md:py-16 lg:py-24">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center md:mb-12">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Featured Collection</h2>
                    <p className="mt-3 text-muted-foreground font-medium md:mt-4">
                        Discover our latest designs inspired by Indian craftsmanship
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {data && featured.map((item) => (
                        <Link href={`/shop/product/${item.id}`} key={item.slug}>
                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <AspectRatio ratio={3 / 4}>
                                        <Image
                                            src={item.images.pop() ?? '/favicon.png'}
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

export const DisplayDiscountPrice = ({ originalPrice, price }: { originalPrice: number, price: number }) => {
    return (
        <p className="flex items-center gap-2">
            <span className="text-sm line-through line-primary decoration-primary decoration-2">₹{originalPrice}</span>
            <span className="text-lg font-bold">₹{price}</span>
        </p>
    )
}