import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/plugins"
import { z } from "zod"

export const ordersPlugin = () => {
    return {
        id: "orders",
        schema: {
            cart: {
                disableMigration: false,
                modelName: "cart",
                fields: {
                    id: {
                        type: "string",
                        required: true,
                        defaultValue: () => {
                            return crypto.randomUUID()
                        },
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        unique: true,
                        fieldName: "id"
                    },
                    items: {
                        type: "string[]",
                        required: true,
                        defaultValue: () => {
                            return []
                        },
                        validator: {
                            input: z.array(z.string().min(1).max(100)),
                            output: z.array(z.string().min(1).max(100)),
                        },
                        unique: false,
                        fieldName: "items"
                    },
                    userId: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        unique: true,
                        references: {
                            model: "user",
                            field: "id",
                            onDelete: "cascade",
                        },
                        fieldName: "userId"
                    },
                    createdAt: {
                        type: "date",
                        required: true,
                        defaultValue: () => {
                            return new Date()
                        },
                        validator: {
                            input: z.date(),
                            output: z.date(),
                        },
                        unique: false,
                        fieldName: "createdAt"
                    },
                    updatedAt: {
                        type: "date",
                        required: true,
                        defaultValue: () => {
                            return new Date()
                        },
                        validator: {
                            input: z.date(),
                            output: z.date(),
                        },
                        unique: false,
                        fieldName: "updatedAt"
                    }
                },
            },
            order: {
                disableMigration: false,
                modelName: "order",
                fields: {
                    id: {
                        type: "string",
                        required: true,
                        defaultValue: () => {
                            return `THRV-ORD-${crypto.randomUUID().slice(0, 41)}`
                        },
                        validator: {
                            input: z.string().min(1).max(50),
                            output: z.string().min(1).max(50),
                        }
                    },
                    cartId: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        references: {
                            model: "cart",
                            field: "id",
                            onDelete: "cascade",
                        }
                    },
                    userId: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        references: {
                            model: "user",
                            field: "id",
                            onDelete: "cascade",
                        }
                    },
                    status: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.enum(["payment_pending", "processing", "preparing", "delivered", "failed"]),
                            output: z.enum(["payment_pending", "processing", "preparing", "delivered", "failed"]),
                        },
                    },
                    createdAt: {
                        type: "date",
                        required: true,
                        defaultValue: () => {
                            return new Date()
                        },
                        validator: {
                            input: z.date(),
                            output: z.date(),
                        },
                    },
                    updatedAt: {
                        type: "date",
                        required: true,
                        defaultValue: () => {
                            return new Date()
                        },
                        validator: {
                            input: z.date(),
                            output: z.date(),
                        },
                    },
                },
            }
        }
    } satisfies BetterAuthPlugin
}