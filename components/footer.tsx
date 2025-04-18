import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-serif text-lg font-bold sm:text-xl">Thahrav</h3>
            <p className="text-sm text-muted-foreground font-medium">From Kailash to Kashi, dipped in style.</p>
            <div className="flex space-x-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full p-0 border border-foreground/20"
              >
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full p-0 border border-foreground/20"
              >
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full p-0 border border-foreground/20"
              >
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-serif text-base font-bold sm:mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/shop">All Products</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/shop?category=men">Men</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/shop?category=women">Women</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/shop?category=accessories">Accessories</Link>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-serif text-base font-bold sm:mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/about">About Us</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/journal">The Journal</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-serif text-base font-bold sm:mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/policies/terms">Terms of Service</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/policies/privacy">Privacy Policy</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/policies/refund">Refund Policy</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground font-medium"
                >
                  <Link href="/policies/cancellation">Cancellation Policy</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 sm:my-8" />

        <div className="text-center text-sm text-muted-foreground font-medium">
          <p>&copy; {new Date().getFullYear()} Thahrav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
