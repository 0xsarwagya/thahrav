import { toast } from "sonner";
import { createAuthClient } from "better-auth/react";
import { waitlistPluginClient } from "./plugins/waitlist/client";
import { productsPluginClient } from "./plugins/products/client";

export const client = createAuthClient({
    fetchOptions: {
        onError(e) {
            if (e.error.status === 429) {
                toast.error("Too many requests. Please try again later.");
            }
        },
    },
    plugins: [
        waitlistPluginClient(),
        productsPluginClient(),
    ]
});

export const {
    signUp,
    signIn,
    signOut,
    useSession,
} = client;