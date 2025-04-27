import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/plugins"
import { z } from "zod"
import { Cashfree, CFEnvironment } from "cashfree-pg"
import { verifyWebhookSignature } from "@/lib/utils"
import type { WebhookData } from "@/types"

const env = process.env.NODE_ENV;

const clientId = z.string().parse(process.env.CASHFREE_CLIENT_ID);
const clientSecret = z.string().parse(process.env.CASHFREE_CLIENT_SECRET);
const cashfreeEnv = env === "production" ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;

const cashfree = new Cashfree(cashfreeEnv, clientId, clientSecret);

export const paymentsPlugin = () => {
    return {
        id: "payments",
        endpoints: {
            webhook: createAuthEndpoint("/payments/webhook", {
                method: "POST",
                requireHeaders: true,
                cloneRequest: true,
            }, async ({ context, request }) => {

                if (!request) {
                    throw new Error("Internal Server Error")
                }

                const rawBody = await request.text()

                const signature = request.headers.get("x-webhook-signature");
                if (!signature) {
                    throw new Error("Signature not found")
                }
                const timestamp = request.headers.get("x-webhook-timestamp");
                if (!timestamp) {
                    throw new Error("Timestamp not found")
                }
                const isValidSignature = verifyWebhookSignature(timestamp, clientSecret, rawBody, signature)

                if (!isValidSignature) {
                    throw new Error("Invalid Signature")
                }

                const parsedBody = JSON.parse(rawBody) as WebhookData;

                /**
                 * @TODO
                 * 1. Check if the order_id exists in the database
                 * 2. If it does, update the order status to paid
                 * 3. If it doesn't, create a new order
                 */

                return {
                    success: true,
                }
            }),
        }
    } satisfies BetterAuthPlugin
}