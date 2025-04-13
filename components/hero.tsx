"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Bell } from "lucide-react";
import Link from "next/link";
import React, { useActionState, useEffect } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { addToWaitlist } from "@/app/(home)/action";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Hero = () => {
  const [res, addToWaitlistAction, isSubmitting] = useActionState(
    addToWaitlist,
    undefined
  );

  useEffect(() => {
    if (res) {
      if (res.success) {
        toast(res.message, {
          duration: 5000,
          richColors: true,
          invert: true,
          style: {
            backgroundColor: 'oklch(0.723 0.219 149.579)',
            color: '#fff',
          },
          icon: '🚀',
        });
      } else {
        toast(res.error, {
          duration: 5000,
          richColors: true,
          invert: true,
          style: {
            backgroundColor: 'oklch(0.637 0.237 25.331)',
            color: '#fff',
          },
          icon: '🤯',
        });
      }
    }
  }, [res]);

  return (
    <div className="min-h-svh relative flex items-center justify-center px-6 overflow-hidden">
      <img
        src="/decor/dark-bg-mandala.png"
        alt="Mandala Decoration"
        className="absolute bottom-0 right-0 w-1/2 max-w-sm opacity-20 pointer-events-none select-none animate-fade-in-slow dark:block hidden"
      />
      <img
        src="/decor/light-bg-mandala.png"
        alt="Mandala Decoration"
        className="absolute bottom-0 right-0 w-1/2 max-w-sm opacity-20 pointer-events-none select-none animate-fade-in-slow dark:hidden block"
      />
      <div className="text-center w-full max-w-2xl px-4">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          A Spiritual Twist in Style
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Thahrav - <TextAnimate animation="blurIn" as="span">
            Launching soon
          </TextAnimate>
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Rooted in spiritual calm and cultural soul, Thahrav creates timeless apparel —
          designed by us and local Indian artists.{" "}
          Launching soon to bring divinity to your wardrobe.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link className={cn(buttonVariants({
            size: "lg",
          }), "rounded-full text-base")} href={"https://instagram.com/thahrav_"} target="_blank">
            Follow Us On Instagram <ArrowUpRight className="!h-5 !w-5" />
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'outline'} size={'lg'} className={"rounded-full text-base shadow-none"}>
                <Bell className="!h-5 !w-5" /> Know When We Launch!
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  Get a 10% discount on your first order.
                </DialogTitle>
                <DialogDescription>
                  We won&apos;t spam you! pinky promise.
                </DialogDescription>
              </DialogHeader>
              <form className="flex items-center space-x-2" action={addToWaitlistAction}>
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    placeholder="Your Email Address"
                    type="email"
                    className="glass h-12"
                    disabled={isSubmitting}
                    name="email"
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export { Hero }
