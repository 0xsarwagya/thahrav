import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/plugins"
import { z } from "zod"

export const ordersPlugin = () => {
    return {
        id: "orders",
    } satisfies BetterAuthPlugin
}