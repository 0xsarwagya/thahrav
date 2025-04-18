"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, ChevronDown, ChevronUp, CreditCard, Truck, Wallet, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
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

export default function CheckoutPage() {
  const router = useRouter()
  const isMobile = useMobile()
  const [isCartOpen, setIsCartOpen] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [isLoading, setIsLoading] = useState(false)

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 150 // Fixed shipping cost
  const total = subtotal + shipping

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`
  }

  const handlePlaceOrder = async () => {
    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // @TODO: Implement actual order placement logic
      router.push("/profile/orders")
    } catch (error) {
      console.error("Order placement failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main id="main-content" className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      {/* Skip to content link for accessibility */}
      <a
        href="#checkout-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
      >
        Skip to checkout content
      </a>

      <Button
        asChild
        variant="ghost"
        className="mb-6 flex items-center gap-2 p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground sm:mb-8"
      >
        <Link href="/shop">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Shop
        </Link>
      </Button>

      <div id="checkout-content" className="mx-auto max-w-6xl">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Checkout</h1>
        <p className="mt-2 text-muted-foreground font-medium">Complete your purchase</p>

        <div className="mt-8 grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            {/* Mobile Cart Summary (Collapsible) */}
            {isMobile && (
              <Collapsible open={isCartOpen} onOpenChange={setIsCartOpen} className="mb-6 rounded-md border">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex w-full items-center justify-between p-4 font-medium">
                    <span>Order Summary ({cartItems.length} items)</span>
                    {isCartOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              {item.collection && (
                                <p className="mt-0.5 text-xs text-muted-foreground">{item.collection}</p>
                              )}
                            </div>
                            <p className="text-sm">{formatPrice(item.price * item.quantity)}</p>
                          </div>
                          <div className="mt-auto flex justify-between text-xs text-muted-foreground">
                            <p>Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="pt-2">
                      <div className="flex justify-between py-2 text-sm">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between py-2 text-sm">
                        <span>Shipping</span>
                        <span>{formatPrice(shipping)}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between py-2 text-base font-medium">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}

            {/* Contact Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Street address" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" placeholder="Postal code" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Country" defaultValue="India" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-accent">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex flex-1 items-center gap-2 font-medium cursor-pointer">
                      <Truck className="h-5 w-5 text-primary" />
                      Cash on Delivery
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-accent">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex flex-1 items-center gap-2 font-medium cursor-pointer">
                      <Wallet className="h-5 w-5 text-primary" />
                      UPI Payment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-accent">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex flex-1 items-center gap-2 font-medium cursor-pointer">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Credit/Debit Card
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "upi" && (
                  <div className="mt-4 space-y-2">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@upi" />
                  </div>
                )}

                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary (Desktop) */}
          {!isMobile && (
            <div className="md:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="max-h-80 overflow-auto space-y-4 pr-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              {item.collection && (
                                <p className="mt-0.5 text-xs text-muted-foreground">{item.collection}</p>
                              )}
                            </div>
                            <p className="text-sm">{formatPrice(item.price * item.quantity)}</p>
                          </div>
                          <div className="mt-auto flex justify-between text-xs text-muted-foreground">
                            <p>Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>{formatPrice(shipping)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-base font-medium">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Button className="w-full" onClick={handlePlaceOrder} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Place Order"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Mobile Place Order Button */}
        {isMobile && (
          <div className="mt-8 sticky bottom-4 z-10">
            <Card className="border shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Total</p>
                    <p className="text-lg font-medium">{formatPrice(total)}</p>
                  </div>
                  <Button className="w-32" onClick={handlePlaceOrder} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Place Order"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </main>
  )
}
