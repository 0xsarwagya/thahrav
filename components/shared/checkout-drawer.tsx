"use client"

import { useState } from "react"
import { X, CreditCard, Wallet, Truck, Check } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// Mock cart items - in a real app, this would come from a cart context or state
const cartItems = [
  {
    id: 1,
    name: "Handwoven Silk Kurta",
    price: 4999,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80&text=Product+1",
  },
  {
    id: 2,
    name: "Ajrakh Print Scarf",
    price: 1499,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80&text=Product+2",
  },
]

interface CheckoutDrawerProps {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
}

export function CheckoutDrawer({ open, onOpenChangeAction }: CheckoutDrawerProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [checkoutStep, setCheckoutStep] = useState<"summary" | "payment" | "confirmation">("summary")

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 150 // Fixed shipping cost
  const total = subtotal + shipping

  const handleProceedToPayment = () => {
    setCheckoutStep("payment")
  }

  const handlePlaceOrder = () => {
    // @TODO: Implement order submission to backend
    // @TODO: Process payment through payment gateway integration
    // @TODO: Handle order confirmation and redirect
    setCheckoutStep("confirmation")
  }

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChangeAction}>
      <DrawerContent className="h-full overflow-auto">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader className="px-0">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-2xl font-bold">
                {checkoutStep === "summary" && "Your Cart"}
                {checkoutStep === "payment" && "Payment"}
                {checkoutStep === "confirmation" && "Order Confirmed"}
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
            </div>
            <DrawerDescription>
              {checkoutStep === "summary" && "Review your items before checkout"}
              {checkoutStep === "payment" && "Complete your purchase"}
              {checkoutStep === "confirmation" && "Your order has been placed successfully"}
            </DrawerDescription>
          </DrawerHeader>

          {checkoutStep === "summary" && (
            <>
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <h3 className="text-base font-bold text-foreground">{item.name}</h3>
                            <p className="text-base font-bold">{formatPrice(item.price * item.quantity)}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          <p className="mt-1 text-sm text-muted-foreground">Price: {formatPrice(item.price)} each</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">{formatPrice(shipping)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full font-bold" onClick={handleProceedToPayment}>
                      Proceed to Payment
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </>
          )}

          {checkoutStep === "payment" && (
            <div className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="font-semibold">
                        First Name
                      </Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="font-semibold">
                        Last Name
                      </Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="font-semibold">
                      Address
                    </Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="font-semibold">
                        City
                      </Label>
                      <Input id="city" placeholder="New Delhi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code" className="font-semibold">
                        Postal Code
                      </Label>
                      <Input id="postal-code" placeholder="110001" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-semibold">
                      Phone Number
                    </Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center space-x-2 rounded-md border border-border p-3 hover:bg-accent">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex flex-1 items-center gap-2 font-medium cursor-pointer">
                        <CreditCard className="h-5 w-5 text-primary" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border border-border p-3 hover:bg-accent">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex flex-1 items-center gap-2 font-medium cursor-pointer">
                        <Wallet className="h-5 w-5 text-primary" />
                        UPI Payment
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border border-border p-3 hover:bg-accent">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex flex-1 items-center gap-2 font-medium cursor-pointer">
                        <Truck className="h-5 w-5 text-primary" />
                        Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number" className="font-semibold">
                          Card Number
                        </Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="font-semibold">
                            Expiry Date
                          </Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="font-semibold">
                            CVV
                          </Label>
                          <Input id="cvv" placeholder="123" type="password" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upi-id" className="font-semibold">
                          UPI ID
                        </Label>
                        <Input id="upi-id" placeholder="yourname@upi" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{formatPrice(shipping)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-bold" onClick={handlePlaceOrder}>
                    Place Order
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {checkoutStep === "confirmation" && (
            <div className="mt-6 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-3">
                <Check className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Thank You for Your Order!</h3>
              <p className="text-muted-foreground">
                Your order #{Math.floor(100000 + Math.random() * 900000)} has been placed successfully.
              </p>
              <p className="text-muted-foreground">We've sent a confirmation email to your registered email address.</p>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Order Total</span>
                    <span className="font-medium">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Payment Method</span>
                    <span className="font-medium">
                      {paymentMethod === "card" && "Credit/Debit Card"}
                      {paymentMethod === "upi" && "UPI Payment"}
                      {paymentMethod === "cod" && "Cash on Delivery"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Delivery</span>
                    <span className="font-medium">
                      {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Button
                className="w-full font-bold"
                onClick={() => {
                  onOpenChangeAction(false)
                  // Reset checkout flow after closing
                  setTimeout(() => setCheckoutStep("summary"), 300)
                }}
              >
                Continue Shopping
              </Button>
            </div>
          )}

          <DrawerFooter className="px-0 mt-6">
            {checkoutStep === "payment" && (
              <Button variant="outline" onClick={() => setCheckoutStep("summary")}>
                Back to Cart
              </Button>
            )}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
