import { prisma } from "@/lib/prisma"
import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/plugins"
import { z } from "zod"
import { Cashfree, CFEnvironment, type PaymentWebhook } from "cashfree-pg"
import { verifyWebhookSignature } from "@/lib/utils"
import { getSessionFromCtx } from 'better-auth/api';
import { AxiosError } from "axios";

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

                const parsedBody = JSON.parse(rawBody) as PaymentWebhook;

                console.log(parsedBody)

                /**
                 * @TODO
                 * Update Orders
                 */

                return {
                    success: true,
                }
            }),
            createPaymentLink: createAuthEndpoint("/payments/create", {
                method: "POST",
                requireHeaders: true,
                requireRequest: true,
                cloneRequest: true,
                body: z.object({
                    amount: z.number(),
                    orderId: z.string(),
                }),
            }, async (ctx) => {
                try {
                    if (!ctx.request) {
                        throw new Error("Internal Server Error")
                    }

                    const session = await getSessionFromCtx(ctx);

                    console.log(session)

                    if (!session) {
                        throw new Error("Unauthorized")
                    }

                    const { user } = session;

                    const body = await ctx.request.json();
                    const baseUrl = new URL(ctx.request.url).origin;
                    const { amount, orderId } = body;

                    const paymentLink = await cashfree.PGCreateLink({
                        link_id: orderId,
                        link_amount: amount,
                        link_currency: "INR",
                        link_purpose: "Pay for Thahrav",
                        customer_details: {
                            customer_name: user.name,
                            customer_phone: user.phoneNumber.toString().split("").slice(3).join(""),
                            customer_email: user.email,
                        },
                        link_notify: {
                            send_sms: true,
                            send_email: true,
                        },
                        link_meta: {
                            return_url: new URL("/payments/success", baseUrl).toString(),
                            notify_url: new URL("/api/payments/webhook", baseUrl).toString(),
                        }
                    });

                    return {
                        success: true,
                        paymentLink,
                    }
                } catch (error) {
                    if (error instanceof AxiosError) {
                        return {
                            success: false,
                            error: error.response?.data,
                        }
                    }

                    return {
                        success: false,
                        error: error,
                    }
                }
            }),
        }
    } satisfies BetterAuthPlugin
}