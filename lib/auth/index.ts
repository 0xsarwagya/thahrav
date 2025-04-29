import { betterAuth } from "better-auth";
import { prisma } from "@/lib/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
import { waitlistPlugin } from "@/lib/auth/plugins/waitlist";
import { productsPlugin } from "@/lib/auth/plugins/products";
import { z } from "zod";
import { render } from '@react-email/components';
import { ThahravVerifyEmail } from "@/lib/auth/mailer/templates/verify";
import { sendEmail } from "@/lib/auth/mailer";
import ThahravPasswordResetEmail from "@/lib/auth/mailer/templates/reset";
import { paymentsPlugin } from "@/lib/auth/plugins/payments";
import { ordersPlugin } from "@/lib/auth/plugins/orders";
import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: z.string().parse(process.env.UPSTASH_REDIS_REST_URL),
    token: z.string().parse(process.env.UPSTASH_REDIS_REST_TOKEN),
});

const indianStates: string[] = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

const indianUnionTerritories: string[] = [
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
];

const stateOrUtList: string[] = indianStates.concat(indianUnionTerritories).map((state) => state.toLowerCase());


export const auth = betterAuth({
    appName: "Thahrav",
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true,
        disableSignUp: false,
        requireEmailVerification: true,
        async sendResetPassword(data, request) {
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
            const subject = "Complete your signup – verify your email";

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
            },
            flatOrHouseNumber: {
                type: "string",
                required: false,
                validator: {
                    input: z.string().min(1).max(10),
                    output: z.string().min(1).max(10),
                }
            },
            line_one: {
                type: "string",
                required: false,
                validator: {
                    input: z.string().min(1).max(100),
                    output: z.string().min(1).max(100),
                }
            },
            line_two: {
                type: "string",
                required: false,
                validator: {
                    input: z.string().min(1).max(100),
                    output: z.string().min(1).max(100),
                }
            },
            stateOrUT: {
                type: "string",
                required: false,
                validator: {
                    input: z.string().refine(val => {
                        return stateOrUtList.includes(val.toLowerCase())
                    }),
                    output: z.string().refine(val => {
                        return stateOrUtList.includes(val.toLowerCase())
                    }),
                }
            },
            city: {
                type: "string",
                required: false,
                validator: {
                    input: z.string().min(1).max(100),
                    output: z.string().min(1).max(100),
                }
            }
        }
    },
    session: {
        cookieCache: {
            enabled: true,
            cacheTime: 5 * 60 // 5 minutes
        }
    },
    useSecureCookies: true,
    cookiePrefix: "thahrav_auth-",
    basePath: "/api",
    plugins: [
        openAPI(),
        waitlistPlugin(),
        productsPlugin(),
        paymentsPlugin(),
        ordersPlugin(),
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