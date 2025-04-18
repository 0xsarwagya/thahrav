"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useLocalStorage from "@/hooks/use-local-storage";

interface BannerProps {
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    defaultVisible?: boolean;
}

const Banner = ({
    title = "Version 2.0 is now available!",
    description = "Check out all the",
    linkText = "new features",
    linkUrl = "#",
    defaultVisible = true,
}: BannerProps) => {
    const [isVisible, setIsVisible] = useLocalStorage("banner-visible", defaultVisible);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <section className="w-full border-b bg-card px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
                <div className="flex-1 text-center">
                    <span className="text-sm">
                        <span className="font-medium">{title}</span>{" "}
                        <span className="text-muted-foreground">
                            {description}{" "}
                            <Link
                                href={linkUrl}
                                className="underline underline-offset-4 hover:text-foreground"
                                target="_blank"
                            >
                                {linkText}
                            </Link>
                            .
                        </span>
                    </span>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="-mr-2 h-8 w-8 flex-none"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </section>
    );
};

export { Banner };
