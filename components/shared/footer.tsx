import React from "react";
import { AppLogo } from "@/components/ui/app-logo";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="flex py-2 sm:py-1 flex-col sm:flex-row items-center justify-between mx-auto container px-4">
                <div className="flex items-center gap-16">
                    <AppLogo />
                </div>
                {/* <ul className="text-sm flex flex-wrap items-center text-muted-foreground">
                    <li className="px-2 py-3">
                        <a href="/contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                    <li className="px-2 py-3">
                        <a href="/" className="hover:underline">
                            Privacy
                        </a>
                    </li>
                    <li className="px-2 py-3">
                        <a href="/" className="hover:underline">
                            Blog
                        </a>
                    </li>
                    <li className="px-2 py-3">
                        <a href="/" className="hover:underline">
                            Store
                        </a>
                    </li>
                </ul>    */}
            </div>
            <p className="text-center py-4 text-xs text-muted-foreground">
                &copy; 2025 Thahrav. Designed By <Link href={"https://esportzvio.com"} className="hover:underline text-primary">
                    Esportzvio
                </Link>.
            </p>
        </footer>
    );
};

export default Footer;
