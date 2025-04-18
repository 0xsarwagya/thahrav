import { betterAuth } from "better-auth";
import { prisma } from "../prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";

export const auth = betterAuth({
    appName: "Mantrika",
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true,
        disableSignUp: true,
    },
    useSecureCookies: true,
    cookiePrefix: "mantrika_ev-",
    basePath: "/api",
    plugins: [
        openAPI(),
    ]
})