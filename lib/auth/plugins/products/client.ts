import type { BetterAuthClientPlugin } from "better-auth"

export const productsPluginClient = () => {
    return {
        id: "products-client",
        getActions($fetch, $store) {
            return {
                getProducts: async () => {
                    const res = await $fetch("/api/products")
                    return res
                },
                getProduct: async (id: string) => {
                    const res = await $fetch(`/api/products/${id}`)
                    return res
                },
            }
        },
    } satisfies BetterAuthClientPlugin
}