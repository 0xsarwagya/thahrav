import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/plugins"
import { z } from "zod"

export const ordersPlugin = () => {
    return {
        id: "orders",
        schema: {
            orders: {
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
                            model: 'user',
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
                modelName: "orders",
            },
        },
    } satisfies BetterAuthPlugin
}