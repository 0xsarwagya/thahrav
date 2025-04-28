import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/plugins"
import { z } from "zod"

export const productsPlugin = () => {
    return {
        id: "products",
        schema: {
            products: {
                disableMigration: false,
                fields: {
                    id: {
                        type: "string",
                        required: true,
                        unique: true,
                        fieldName: "id",
                        validator: {
                            input: z.string().min(6).startsWith("THRV_"),
                            output: z.string().min(6).startsWith("THRV_"),
                        },
                        defaultValue() {
                            return `THRV_${Math.random().toString(36).substring(2, 10)}`
                        },
                    },
                    name: {
                        type: "string",
                        required: true,
                        unique: true,
                        fieldName: "name",
                        validator: {
                            input: z.string().min(10),
                            output: z.string().min(10),
                        }
                    },
                    slug: {
                        type: "string",
                        required: true,
                        unique: true,
                        fieldName: "slug",
                        validator: {
                            input: z.string().min(10).includes("-"),
                            output: z.string().min(10).includes("-"),
                        }
                    },
                    description: {
                        type: "string",
                        required: true,
                        unique: false,
                        fieldName: "description",
                        validator: {
                            input: z.string().min(50),
                            output: z.string().min(50),
                        }
                    },
                    originalPrice: {
                        type: "number",
                        required: true,
                        unique: false,
                        fieldName: "originalPrice",
                        validator: {
                            input: z.number().min(799),
                            output: z.number().min(799),
                        }
                    },
                    price: {
                        type: "number",
                        required: false,
                        unique: false,
                        fieldName: "price",
                        validator: {
                            input: z.number().min(799),
                            output: z.number().min(799),
                        }
                    },
                    sizes: {
                        type: 'string[]',
                        required: true,
                        unique: false,
                        fieldName: "sizes",
                        validator: {
                            input: z.array(z.string().min(1)).min(1).max(6),
                            output: z.array(z.string().min(1)).min(1).max(6),
                        }
                    },
                    images: {
                        type: "string[]",
                        required: true,
                        unique: false,
                        fieldName: "images",
                        validator: {
                            input: z.array(z.string().min(1)).min(1).max(6),
                            output: z.array(z.string().min(1)).min(1).max(6),
                        }
                    },
                    details: {
                        type: "string[]",
                        required: true,
                        unique: false,
                        fieldName: "details",
                        validator: {
                            input: z.array(z.string().min(1)).min(1).max(6),
                            output: z.array(z.string().min(1)).min(1).max(6),
                        }
                    },
                    care: {
                        type: "string[]",
                        required: true,
                        unique: false,
                        fieldName: "care",
                        validator: {
                            input: z.array(z.string().min(1)).min(1).max(6),
                            output: z.array(z.string().min(1)).min(1).max(6),
                        }
                    },
                    story: {
                        type: "string",
                        required: true,
                        unique: false,
                        fieldName: "story",
                        validator: {
                            input: z.string().min(10),
                            output: z.string().min(10),
                        }
                    },
                    culturalBackground: {
                        type: "string",
                        required: true,
                        unique: false,
                        fieldName: "culturalBackground",
                        validator: {
                            input: z.string().min(10),
                            output: z.string().min(10),
                        },
                        defaultValue() {
                            return "No cultural background available";
                        }
                    },
                    category: {
                        type: "string",
                        required: true,
                        unique: false,
                        fieldName: "category",
                        validator: {
                            input: z.enum(["men", "women", "unisex"]),
                            output: z.enum(["men", "women", "unisex"]),
                        }
                    }
                },
                modelName: "products",
            },
        },
        endpoints: {
            allProducts: createAuthEndpoint('/products', {
                method: "GET",
            }, async () => {
                const data = await prisma.products.findMany()

                return data;
            }),
            productData: createAuthEndpoint('/products', {
                method: "GET",
                query: z.object({
                    id: z.string().min(1),
                })
            }, async (req) => {
                const data = await prisma.products.findUnique({
                    where: {
                        id: req.query.id
                    }
                })

                return data;
            }),
            featuredProducts: createAuthEndpoint('/products/featured', {
                method: "GET",
            }, async () => {
                const data = await prisma.products.findMany({
                    take: 3
                })
                return data;
            }),
        }
    } satisfies BetterAuthPlugin
}