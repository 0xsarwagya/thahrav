'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import type React from 'react';

export const ProgressBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <AppProgressBar
                height="4px"
                color="#fffd00"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};