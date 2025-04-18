"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { CartDrawer } from "@/components/shared/cart-drawer"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About Us", href: "/about" },
  { name: "The Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background flex flex-col items-center">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
      >
        Skip to main content
      </a>

      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus:bg-transparent md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-medium tracking-wide">Thahrav</span>
          </Link>
        </div>

        <nav
          className={cn(
            "absolute left-0 top-16 z-50 w-full origin-top-right bg-background pb-6 pt-2 md:static md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pt-0",
            isMenuOpen ? "flex flex-col border-b" : "hidden",
          )}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-8 md:space-y-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-6 py-1 font-medium text-foreground transition-colors hover:text-primary md:px-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open shopping cart"
            onClick={() => setIsCartOpen(true)}
            aria-expanded={isCartOpen}
          >
            <ShoppingBag className="h-5 w-5" />
            {/* @TODO: Connect this to backend cart service when available */}
          </Button>
        </div>
      </div>
      <CartDrawer open={isCartOpen} onOpenChangeAction={setIsCartOpen} />
    </header>
  )
}
