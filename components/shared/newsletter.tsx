"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
    return (
        <section className="bg-primary py-12 text-primary-foreground md:py-16 lg:py-24">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                        Be Part of the Thahrav Journey
                    </h2>
                    <p className="mt-3 font-medium md:mt-4 text-base sm:text-lg">
                        Sign up to explore the soul of India through threads — receive early access to our latest drops, 
                        behind-the-scenes with our artists, and reflections on heritage, sustainability, and style.
                    </p>

                    <form className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 border border-primary-foreground/50 bg-primary text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary focus:ring-secondary"
                            required
                        />
                        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-secondary font-bold">
                            Join Us
                        </Button>
                    </form>
                    {/* @TODO: Connect this to your newsletter service (like ConvertKit, Mailchimp, etc.) */}
                </div>
            </div>
        </section>
    );
};
