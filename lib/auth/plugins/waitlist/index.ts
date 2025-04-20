import { z } from "zod";
import type { BetterAuthPlugin } from "better-auth";

export const waitlistPlugin = () => {
    return {
        id: "waitlist-plugin",
        schema: {
            waitlist: {
                fields: {
                    email: {
                        type: "string",
                        required: true,
                        validator: {
                            input: z.string().email(),
                            output: z.string().email()
                        },
                        unique: true,
                        sortable: true,
                        fieldName: "email"
                    },
                    createdAt: {
                        type: "number",
                        required: false,
                        validator: {
                            input: z.number(),
                            output: z.number()
                        },
                        defaultValue: () => Date.now()
                    },
                    updatedAt: {
                        type: "number",
                        required: false,
                        validator: {
                            input: z.number(),
                            output: z.number()
                        },
                        defaultValue: () => Date.now()
                    }
                },
                modelName: "waitlist"
            }
        }
    } satisfies BetterAuthPlugin
}