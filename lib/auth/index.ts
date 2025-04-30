import { betterAuth } from "better-auth";
import { prisma } from "@/lib/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
import { productsPlugin } from "@/lib/auth/plugins/products";
import { z } from "zod";
import { render } from '@react-email/components';
import { ThahravVerifyEmail } from "@/lib/auth/mailer/templates/verify";
import { sendEmail } from "@/lib/auth/mailer";
import ThahravPasswordResetEmail from "@/lib/auth/mailer/templates/reset";
import { ordersPlugin } from "@/lib/auth/plugins/orders";
import { Redis } from '@upstash/redis'
import { addressPlugin } from "@/lib/auth/plugins/address";

const redis = new Redis({
    url: z.string().parse(process.env.UPSTASH_REDIS_REST_URL),
    token: z.string().parse(process.env.UPSTASH_REDIS_REST_TOKEN),
});

export const auth = betterAuth({
    appName: "Thahrav",
    database: prismaAdapter(prisma, {
        provider: 'cockroachdb',
        debugLogs: true,
    }),
    emailAndPassword: {
        enabled: true,
        disableSignUp: false,
        requireEmailVerification: true,
        async sendResetPassword(data) {
            const token = data.token;

            const email = data.user.email;
            const subject = "Forgot your password? Let’s fix that.";

            const html = await render(ThahravPasswordResetEmail({
                token,
            }), {
                pretty: true,
            });

            const text = await render(ThahravPasswordResetEmail({
                token,
            }), {
                plainText: true,
            });

            await sendEmail(email, subject, html, text);
        },
        autoSignIn: true,
    },
    emailVerification: {
        async sendVerificationEmail(data) {
            const token = data.token;

            const email = data.user.email;
            const subject = "Complete your signup - verify your email";

            const html = await render(ThahravVerifyEmail({
                token,
            }), {
                pretty: true,
            });

            const text = await render(ThahravVerifyEmail({
                token,
            }), {
                plainText: true,
            });

            await sendEmail(email, subject, html, text);
        },
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
    },
    user: {
        additionalFields: {
            phoneNumber: {
                type: "string",
                required: true,
                unique: true,
                validator: {
                    input: z.string().min(10).max(10),
                    output: z.string().min(10).max(10),
                },
                input: true,
                sortable: true,
            },
        }
    },
    useSecureCookies: true,
    cookiePrefix: "thahrav_auth-",
    basePath: "/api",
    plugins: [
        openAPI(),
        productsPlugin(),
        ordersPlugin(),
        addressPlugin(),
    ],
    secondaryStorage: {
        get: async (key) => {
            return await redis.get(key);
        },
        set: async (key, value, ttl) => {
            await redis.set(key, value, { ex: ttl ? ttl : 60 * 60 * 24 * 30 });
        },
        delete: async (key) => {
            await redis.del(key);
        },
    }
})