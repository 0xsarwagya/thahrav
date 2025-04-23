"use client";

import { fetcher } from "@/lib/utils";
import { SWRConfig } from "swr";

type Props = {
    children: React.ReactNode;
};

export function DataProvider({
    children,
}: Props) {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: fetcher,
                revalidateOnFocus: true,
                revalidateOnReconnect: true,
                revalidateOnMount: true,
                revalidateIfStale: false,
                errorRetryCount: 5,
                errorRetryInterval: 1000,
                dedupingInterval: 100,
                provider: () => new Map(),
            }}
        >
            {children}
        </SWRConfig>
    );
}
