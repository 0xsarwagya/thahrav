"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import type { Product } from "@/prisma"

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [orderDetails, setOrderDetails] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setOrderDetails(null)

    if (!orderNumber || !email) {
      setError("Please enter both order number and email")
      return
    }

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock data - in a real app, this would come from an API
      setOrderDetails({} as Product)
    } catch (err) {
      setError("Failed to fetch order details. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 max-w-3xl">
      <div className="flex flex-col justify-between items-start">
        <Button
          asChild
          variant="ghost"
          className="mb-6 flex items-center gap-2 p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground sm:mb-8"
        >
          <Link href="/">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Track Your Order</h1>
          <p className="mt-2 text-muted-foreground font-medium">Enter your order details to track your shipment</p>
        </div>

        <Card className="mt-8">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orderNumber">Order Number</Label>
                <Input
                  id="orderNumber"
                  placeholder="e.g. TH-12345"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email used for the order"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Search className="mr-2 h-4 w-4 animate-spin" />
                    Tracking...
                  </>
                ) : (
                  "Track Order"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 
        {orderDetails && (
          // <Card className="mt-8">
          //   <CardHeader>
          //     <div className="flex items-center justify-between">
          //       <div>
          //         <CardTitle>Order #{orderDetails.orderNumber}</CardTitle>
          //         <CardDescription>Placed on {orderDetails.date}</CardDescription>
          //       </div>
          //       <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
          //         {orderDetails.status}
          //       </span>
          //     </div>
          //   </CardHeader>
          //   <CardContent>
          //     <div className="space-y-6">
          //       <div>
          //         <h3 className="font-medium">Tracking Information</h3>
          //         <div className="mt-2 space-y-2 text-sm">
          //           <p>
          //             <span className="font-medium">Tracking Number:</span> {orderDetails.trackingNumber}
          //           </p>
          //           <p>
          //             <span className="font-medium">Carrier:</span> {orderDetails.carrier}
          //           </p>
          //           <p>
          //             <span className="font-medium">Estimated Delivery:</span> {orderDetails.estimatedDelivery}
          //           </p>
          //         </div>
          //       </div>

          //       <Separator />

          //       <div>
          //         <h3 className="font-medium">Tracking History</h3>
          //         <div className="mt-4 space-y-4">
          //           {orderDetails.events.map((event: any, index: number) => (
          //             <div key={index} className="relative pl-6">
          //               <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary"></div>
          //               {index !== orderDetails.events.length - 1 && (
          //                 <div className="absolute left-1.5 top-4 h-full w-0.5 bg-border"></div>
          //               )}
          //               <div>
          //                 <p className="font-medium">{event.status}</p>
          //                 <p className="text-xs text-muted-foreground">
          //                   {event.date} - {event.location}
          //                 </p>
          //                 <p className="mt-1 text-sm">{event.description}</p>
          //               </div>
          //             </div>
          //           ))}
          //         </div>
          //       </div>

          //       <Separator />

          //       <div>
          //         <h3 className="font-medium">Order Summary</h3>
          //         <div className="mt-2 space-y-2">
          //           {orderDetails.items.map((item: any, index: number) => (
          //             <div key={index} className="flex justify-between text-sm">
          //               <span>
          //                 {item.quantity}x {item.name}
          //               </span>
          //               <span>₹{item.price.toLocaleString("en-IN")}</span>
          //             </div>
          //           ))}
          //           <Separator className="my-2" />
          //           <div className="flex justify-between font-medium">
          //             <span>Total</span>
          //             <span>₹{orderDetails.total.toLocaleString("en-IN")}</span>
          //           </div>
          //         </div>
          //       </div>

          //       <div className="flex justify-center">
          //         <Button asChild variant="outline">
          //           <Link href="/profile/orders">View All Orders</Link>
          //         </Button>
          //       </div>
          //     </div>
          //   </CardContent>
          // </Card>
        // )}
        */}
      </div>
    </div>
  )
}
