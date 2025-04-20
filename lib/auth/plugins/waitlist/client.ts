import type { BetterAuthClientPlugin } from "better-auth";
import type { waitlistPlugin } from "@/lib/auth/plugins/waitlist";
import { prisma } from "@/lib/prisma";

export const waitlistPluginClient = () => {
    return {
        id: "waitlist-plugin",
        $InferServerPlugin: {} as ReturnType<typeof waitlistPlugin>,
        getActions() {
            return {
                addToWaitlist: async (email: string) => {
                    try {
                        const emailExists = await prisma.waitlist.findUnique({
                            where: {
                                email,
                            }
                        }) !== null;

                        if (emailExists) {
                            return {
                                success: false,
                                message: "Email already exists",
                            }
                        }

                        await prisma.waitlist.create({
                            data: {
                                email,
                                id: crypto.randomUUID(),
                            }
                        });

                        return {
                            success: true,
                            message: "Email added to waitlist",
                        }
                    } catch (error) {
                        return {
                            success: false,
                            message: "Error adding email to waitlist",
                        }
                    }
                }
            }
        },
    } satisfies BetterAuthClientPlugin
}