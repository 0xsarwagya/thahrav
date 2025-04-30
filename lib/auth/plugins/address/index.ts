import { z } from "zod"
import type { BetterAuthPlugin } from "better-auth"
import { State } from 'country-state-city';
import { createAuthEndpoint } from "better-auth/plugins";
import { prisma } from "@/lib/prisma";
import { getSessionFromCtx } from "better-auth/api"
import { NextResponse } from "next/server";
import { handleError } from "@/lib/errors";

const isValidIndianState = (value: string) => {
    const states = State.getStatesOfCountry('IN');
    return states.map(s => s.name).includes(value);
};

export const addressPlugin = () => {
    return {
        id: "address",
        schema: {
            address: {
                modelName: "address",
                fields: {
                    id: {
                        type: "string",
                        required: true,
                        defaultValue: () => {
                            return crypto.randomUUID();
                        },
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        unique: false,
                        fieldName: "id"
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
                        },
                        fieldName: "userId"
                    },
                    houseNumber: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        fieldName: "houseNumber",
                        unique: false,
                    },
                    street: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        fieldName: "street",
                        unique: false,
                    },
                    additionalInfo: {
                        type: "string",
                        required: false,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        fieldName: "additionalInfo",
                        unique: false,
                    },
                    landmark: {
                        type: "string",
                        required: false,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        fieldName: "landmark",
                        unique: false,
                    },
                    city: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().min(1).max(100),
                            output: z.string().min(1).max(100),
                        },
                        fieldName: "city",
                        unique: false,
                    },
                    stateOrUT: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().min(1).max(100).refine(isValidIndianState, {
                                message: "Invalid Indian State or Union Territory"
                            }),
                            output: z.string().min(1).max(100).refine(isValidIndianState, {
                                message: "Invalid Indian State or Union Territory"
                            }),
                        },
                        fieldName: "stateOrUT",
                        unique: false,
                    },
                    pincode: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),
                            output: z.string().regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),
                        },
                        fieldName: "pincode",
                        unique: false,
                    },
                    isDefault: {
                        type: "boolean",
                        required: true,
                        validator: {
                            input: z.boolean(),
                            output: z.boolean(),
                        },
                        fieldName: "isDefault",
                        unique: false,
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
                        fieldName: "createdAt",
                        unique: false,
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
                        fieldName: "updatedAt",
                        unique: false,
                    }
                }
            }
        },
        endpoints: {
            getAddresses: createAuthEndpoint('/address', {
                method: 'GET',
                query: z.object({
                    id: z.string().min(1).max(100).optional(),
                    default: z.boolean().optional(),
                })
            }, async (ctx) => {
                try {
                    const sessionData = await getSessionFromCtx(ctx);

                    if (!sessionData || !sessionData.user || !sessionData.session) {
                        return NextResponse.json({
                            message: 'Unauthorized',
                            status: 401,
                        })
                    }

                    const getDefault = ctx.query.default;
                    if (getDefault) {
                        const address = await prisma.address.findFirst({
                            where: {
                                userId: sessionData.user.id,
                                isDefault: true,
                            }
                        });
                        return {
                            address,
                        }
                    }

                    const id = ctx.query.id;
                    if (id) {
                        const address = await prisma.address.findFirst({
                            where: {
                                userId: sessionData.user.id,
                                id,
                            }
                        });
                        return {
                            address,
                        }
                    }

                    const addresses = await prisma.address.findMany({
                        where: {
                            userId: sessionData.user.id,
                        },
                        orderBy: [{ isDefault: 'desc' }, { updatedAt: 'desc' }],
                    });

                    return {
                        addresses,
                    }
                } catch (error) {
                    const errorData = handleError(error);
                    return NextResponse.json(errorData, { status: errorData.statusCode });
                }
            }),
            createAddress: createAuthEndpoint('/address', {
                method: 'POST',
                body: z.object({
                    houseNumber: z.string().min(1).max(100),
                    street: z.string().min(1).max(100),
                    additionalInfo: z.string().min(1).max(100).optional(),
                    landmark: z.string().min(1).max(100).optional(),
                    city: z.string().min(1).max(100),
                    stateOrUT: z.string().min(1).max(100).refine((value) => {
                        const states = State.getStatesOfCountry('IN');
                        const stateNames = states.map(state => state.name);
                        return stateNames.includes(value);
                    }),
                    pincode: z.string().min(1).max(100).refine((value) => {
                        return value.length === 6;
                    }),
                    isDefault: z.boolean(),
                }),
            }, async (ctx) => {
                try {
                    const sessionData = await getSessionFromCtx(ctx);
                    if (!sessionData || !sessionData.user || !sessionData.session) {
                        return NextResponse.json({
                            message: 'Unauthorized',
                            status: 401,
                        })
                    }

                    const { request } = ctx;

                    if (!request) {
                        return NextResponse.json({
                            message: 'Bad Request',
                            status: 400,
                        })
                    }

                    const body = await request.json();

                    const address = await prisma.address.create({
                        data: {
                            id: crypto.randomUUID(),
                            userId: sessionData.user.id,
                            houseNumber: body.houseNumber,
                            street: body.street,
                            additionalInfo: body.additionalInfo,
                            landmark: body.landmark,
                            city: body.city,
                            stateOrUT: body.stateOrUT,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            pincode: body.pincode,
                            isDefault: body.isDefault,
                        }
                    })

                    return {
                        address,
                    }
                } catch (error) {
                    const errorData = handleError(error);
                    return NextResponse.json(errorData, { status: errorData.statusCode });
                }
            }),
            setAddressAsDefault: createAuthEndpoint('/address/default', {
                method: 'POST',
                body: z.object({
                    id: z.string().min(1).max(100),
                }),
            }, async (ctx) => {
                try {
                    const sessionData = await getSessionFromCtx(ctx);
                    if (!sessionData || !sessionData.user || !sessionData.session) {
                        return NextResponse.json({
                            message: 'Unauthorized',
                            status: 401,
                        })
                    }
                    const { request } = ctx;
                    if (!request) {
                        return NextResponse.json({
                            message: 'Bad Request',
                            status: 400,
                        })
                    }

                    const body = await request.json();
                    const address = await prisma.address.updateMany({
                        where: {
                            userId: sessionData.user.id,
                        },
                        data: {
                            isDefault: false,
                            updatedAt: new Date(),
                        }
                    })
                    const updatedAddress = await prisma.address.update({
                        where: {
                            id: body.id,
                        },
                        data: {
                            isDefault: true,
                        }
                    })

                    return {
                        address,
                        updatedAddress,
                    }
                } catch (error) {
                    const errorData = handleError(error);
                    return NextResponse.json(errorData, { status: errorData.statusCode });
                }
            }),
        },
    } satisfies BetterAuthPlugin
}