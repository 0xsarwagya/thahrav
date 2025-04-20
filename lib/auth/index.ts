import { betterAuth } from "better-auth";
import { prisma } from "../prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
import { waitlistPlugin } from "./plugins/waitlist";
import { productsPlugin } from "./plugins/products";

export const auth = betterAuth({
    appName: "Thahrav",
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true,
        disableSignUp: false,
    },
    user: {
        additionalFields: {
            phoneNumber: {
                type: "string",
                optional: true,
                unique: true,
                plugins: [
                    // Implement a custom plugin here
                ]
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
    ]
})