import { handleError } from "@/lib/errors"
import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { getSessionFromCtx } from "better-auth/api"
import { createAuthEndpoint } from "better-auth/plugins"
import { NextResponse } from "next/server"
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
        },
        endpoints: {
            syncCart: createAuthEndpoint('/cart', {
                method: 'POST',
                body: z.object({
                    items: z.array(z.string().min(1).max(100)),
                }),
            }, async (ctx) => {
                try {
                    const { items } = ctx.body
                    const sessionData = await getSessionFromCtx(ctx)

                    if (!sessionData) {
                        return NextResponse.json({
                            error: 'Unauthorized',
                        }, { status: 401 })
                    }

                    const cart = await prisma.cart.create({
                        data: {
                            id: crypto.randomUUID(),
                            items,
                            userId: sessionData.user.id,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        }
                    })

                    return {
                        cart,
                    }
                } catch (error) {
                    const errorData = handleError(error)
                    return NextResponse.json({
                        error: errorData.message,
                    }, {
                        status: errorData.statusCode,
                    })
                }
            }),
            getCart: createAuthEndpoint('/cart', {
                method: 'GET',
            }, async (ctx) => {
                try {
                    const sessionData = await getSessionFromCtx(ctx)
                    if (!sessionData) {
                        return NextResponse.json({
                            error: 'Unauthorized',
                        }, { status: 401 })
                    }
                    const cart = await prisma.cart.findFirst({
                        where: {
                            userId: sessionData.user.id,
                        }
                    })

                    if (!cart) {
                        return NextResponse.json({
                            error: 'Cart not found',
                        }, { status: 404 })
                    }
                    return {
                        cart,
                    }
                } catch (error) {
                    const errorData = handleError(error)
                    return NextResponse.json({
                        error: errorData.message,
                    }, {
                        status: errorData.statusCode,
                    })
                }
            }),
            getOrders: createAuthEndpoint('/orders', {
                method: 'GET',
            }, async (ctx) => {
                try {
                    const sessionData = await getSessionFromCtx(ctx)
                    if (!sessionData) {
                        return NextResponse.json({
                            error: 'Unauthorized',
                        }, { status: 401 })
                    }
                    const orders = await prisma.order.findMany({
                        where: {
                            userId: sessionData.user.id,
                        }
                    })

                    return {
                        orders,
                    }
                } catch (error) {
                    const errorData = handleError(error)
                    return NextResponse.json({
                        error: errorData.message,
                    }, {
                        status: errorData.statusCode,
                    })
                }
            }),
            createOrder: createAuthEndpoint('/orders', {
                method: 'POST',
                body: z.object({
                    cartId: z.string().min(1).max(100),
                }),
            }, async (ctx) => {
                try {
                    const { cartId } = ctx.body
                    const sessionData = await getSessionFromCtx(ctx)

                    if (!sessionData) {
                        return NextResponse.json({
                            error: 'Unauthorized',
                        }, { status: 401 })
                    }
                    const cart = await prisma.cart.findFirst({
                        where: {
                            id: cartId,
                            userId: sessionData.user.id,
                        }
                    })

                    if (!cart) {
                        return NextResponse.json({
                            error: 'Cart not found',
                        }, { status: 404 })
                    }


                    const order = await prisma.order.create({
                        data: {
                            id: `THRV-ORD-${crypto.randomUUID().slice(0, 41)}`,
                            cartId: cart.id,
                            userId: sessionData.user.id,
                            status: 'payment_pending',
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        }
                    })
                    return {
                        order,
                    }
                } catch (error) {
                    const errorData = handleError(error)
                    return NextResponse.json({
                        error: errorData.message,
                    }, {
                        status: errorData.statusCode,
                    })
                }
            }),
        }
    } satisfies BetterAuthPlugin
}