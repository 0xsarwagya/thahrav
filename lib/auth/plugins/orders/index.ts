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
                        type: 'number',
                        required: true,
                        unique: true,
                        fieldName: "id",
                        validator: {
                            input: z.string().min(6).startsWith("THRV_"),
                            output: z.string().min(6).startsWith("THRV_"),
                        },
                        defaultValue() {
                            return Math.floor(Math.random() * 10 ** 10);
                        },
                    },
                    userId: {
                        type: 'string',
                        required: true,
                        references: {
                            model: 'users',
                            field: 'id',
                            onDelete: 'cascade',
                        },
                        fieldName: "userId",
                        validator: {
                            input: z.string().min(1),
                            output: z.string().min(1),
                        },
                    },
                    items: {
                        type: 'string[]',
                        required: true,
                        fieldName: "items",
                        validator: {
                            input: z.array(z.string().min(1)).min(1),
                            output: z.array(z.string().min(1)).min(1),
                        },
                    },
                    totalPrice: {
                        type: 'number',
                        required: true,
                        fieldName: "totalPrice",
                        validator: {
                            input: z.number().min(1),
                            output: z.number().min(1),
                        },
                    },
                    status: {
                        type: 'string',
                        required: true,
                        fieldName: "status",
                        validator: {
                            input: z.string().min(1),
                            output: z.string().min(1),
                        },
                    },
                    paymentStatus: {
                        type: 'string',
                        required: true,
                        fieldName: "paymentStatus",
                        validator: {
                            input: z.string().min(1),
                            output: z.string().min(1),
                        },
                    },
                    createdAt: {
                        type: "date",
                        required: true,
                        fieldName: "createdAt",
                        validator: {
                            input: z.date(),
                            output: z.date(),
                        },
                        defaultValue() {
                            return new Date();
                        },
                    },
                    updatedAt: {
                        type: "date",
                        required: true,
                        fieldName: "updatedAt",
                        validator: {
                            input: z.date(),
                            output: z.date(),
                        },
                        defaultValue() {
                            return new Date();
                        },
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