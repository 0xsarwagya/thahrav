import { betterAuth } from "better-auth";
import { prisma } from "../prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
import { waitlistPlugin } from "./plugins/waitlist";
import { productsPlugin } from "./plugins/products";
import { z } from "zod";
import { render } from '@react-email/components';
import { ThahravVerifyEmail } from "@/lib/auth/mailer/templates/verify";
import { sendEmail } from "./mailer";
import ThahravPasswordResetEmail from "./mailer/templates/reset";
import { paymentsPlugin } from "./plugins/payments";
import { ordersPlugin } from "./plugins/orders";

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
                optional: false,
                unique: true,
                plugins: [
                    // Implement a custom plugin here
                ]
            },
            flatOrHouseNumber: {
                type: "string",
                optional: true,
                validator: {
                    input: z.string().min(1).max(10),
                    output: z.string().min(1).max(10),
                }
            },
            line_one: {
                type: "string",
                optional: true,
                validator: {
                    input: z.string().min(1).max(100),
                    output: z.string().min(1).max(100),
                }
            },
            line_two: {
                type: "string",
                optional: true,
                validator: {
                    input: z.string().min(1).max(100),
                    output: z.string().min(1).max(100),
                }
            },
            stateOrUT: {
                type: "string",
                optional: true,
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
                optional: true,
                validator: {
                    input: z.string().min(1).max(100),
                    output: z.string().min(1).max(100),
                }
            }
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
    ]
})