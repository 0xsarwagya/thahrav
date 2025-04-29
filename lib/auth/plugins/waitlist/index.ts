import { z } from "zod";
import type { BetterAuthPlugin } from "better-auth";

export const waitlistPlugin = () => {
    return {
        id: "waitlist-plugin",
    } satisfies BetterAuthPlugin
}