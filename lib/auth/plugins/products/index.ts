import { handleError } from "@/lib/errors"
import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/plugins"
import { NextResponse } from "next/server"
import { z } from "zod"

export const productsPlugin = () => {
    return {
        id: "products",
        endpoints: {
            allProducts: createAuthEndpoint('/products', {
                method: "GET",
                query: z.object({
                    id: z.string().optional(),
                }),
            }, async (req) => {
                try {
                    if (req.query.id) {
                        console.log("ID is set")
                        const data = await prisma.products.findUnique({
                            where: {
                                id: req.query.id
                            }
                        });

                        if (!data) {
                            return NextResponse.json({
                                error: "Product not found",
                            }, {
                                status: 404
                            })
                        }

                        return data;
                    }

                    const data = await prisma.products.findMany()

                    return data;
                } catch (error) {
                    const errorData = handleError(error)
                    return NextResponse.json({
                        error: errorData.message,
                    }, {
                        status: errorData.statusCode
                    })
                }
            }),
            featuredProducts: createAuthEndpoint('/products/featured', {
                method: "GET",
            }, async () => {
                try {
                    const data = await prisma.products.findMany({
                        take: 3
                    })
                    return data;
                } catch (error) {
                    const errorData = handleError(error)
                    return NextResponse.json({
                        error: errorData.message,
                    }, {
                        status: errorData.statusCode
                    })
                }
            }),
        }
    } satisfies BetterAuthPlugin
}