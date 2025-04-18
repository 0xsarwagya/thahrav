"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { X, Trash2, Plus, Minus } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

// Mock cart items - in a real app, this would come from a cart context or state
const cartItems = [
  {
    id: 1,
    name: "Handwoven Silk Kurta",
    collection: "Varanasi Heritage",
    price: 4999,
    quantity: 1,
    size: "M",
    image: "/placeholder.svg?height=80&width=80&text=Product+1",
  },
  {
    id: 2,
    name: "Ajrakh Print Scarf",
    collection: "Gujarat Artisan",
    price: 1499,
    quantity: 2,
    size: "One Size",
    image: "/placeholder.svg?height=80&width=80&text=Product+2",
  },
]

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const router = useRouter()
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`
  }

  // Handle checkout button click
  const handleCheckout = () => {
    onOpenChange(false)
    router.push("/checkout")
  }

  // Handle component mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  // @TODO: Implement cart state management
  // @TODO: Connect to backend cart service
  // @TODO: Implement quantity update functionality
  // @TODO: Implement remove item functionality

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side={isMobile ? "bottom" : "right"} className={`p-0 ${isMobile ? "h-[90%]" : "w-[400px]"}`}>
        {/* Mobile drag handle */}
        {isMobile && <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-muted" aria-hidden="true"></div>}

        <div className="flex h-full flex-col">
          {/* Header */}
          <SheetHeader className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <SheetTitle>Your Cart</SheetTitle>
              <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>
            <SheetDescription>
              {cartItems.length === 0
                ? "Your cart is empty"
                : `You have ${cartItems.length} item${cartItems.length !== 1 ? "s" : ""} in your cart`}
            </SheetDescription>
          </SheetHeader>

          {/* Content */}
          <div className="flex-1 overflow-auto px-4 py-2 sm:px-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <p className="mb-6 text-center text-muted-foreground">Your cart is currently empty.</p>
                <Button asChild>
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 py-2">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          {item.collection && <p className="mt-0.5 text-xs text-muted-foreground">{item.collection}</p>}
                        </div>
                        <p className="text-sm">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Size: {item.size}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-md"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="mx-2 w-6 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-md"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex justify-between py-2">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
                <div className="mt-4 space-y-2">
                  <Button className="w-full" onClick={handleCheckout}>
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
