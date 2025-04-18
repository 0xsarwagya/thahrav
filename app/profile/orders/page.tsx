"use client"

import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrdersPage() {
  // Mock orders data - in a real app, this would come from an API
  const orders = [
    {
      id: "12345",
      date: "April 15, 2023",
      status: "Delivered",
      items: [
        { name: "Handwoven Silk Kurta", quantity: 1, price: 4999 },
        { name: "Ajrakh Print Scarf", quantity: 1, price: 1499 },
      ],
      total: 6498,
      deliveryDate: "April 20, 2023",
    },
    {
      id: "12346",
      date: "May 2, 2023",
      status: "Processing",
      items: [{ name: "Embroidered Cotton Saree", quantity: 1, price: 4999 }],
      total: 4999,
      deliveryDate: "May 10, 2023",
    },
    {
      id: "12347",
      date: "June 10, 2023",
      status: "Shipped",
      items: [
        { name: "Block Print Shirt", quantity: 1, price: 2999 },
        { name: "Handcrafted Leather Bag", quantity: 1, price: 5299 },
      ],
      total: 8298,
      deliveryDate: "June 15, 2023",
    },
    {
      id: "12348",
      date: "July 5, 2023",
      status: "Delivered",
      items: [{ name: "Khadi Cotton Kurta", quantity: 1, price: 3299 }],
      total: 3299,
      deliveryDate: "July 10, 2023",
    },
    {
      id: "12349",
      date: "August 20, 2023",
      status: "Cancelled",
      items: [{ name: "Brass Temple Earrings", quantity: 1, price: 1899 }],
      total: 1899,
      deliveryDate: null,
    },
  ]

  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Button
          asChild
          variant="ghost"
          className="mb-6 flex items-center gap-2 p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground sm:mb-8"
        >
          <Link href="/profile">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Profile
          </Link>
        </Button>

        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Your Orders</h1>
        <p className="mt-2 text-muted-foreground font-medium">Track and manage your purchases</p>

        <div className="mt-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>

              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search orders..." className="pl-10" />
              </div>
            </div>

            <TabsContent value="all" className="mt-6 space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="border-b bg-muted/50 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-base font-medium">Order #{order.id}</CardTitle>
                        <p className="text-xs text-muted-foreground">Placed on {order.date}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-primary/10 text-primary"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                              : order.status === "Cancelled"
                                ? "bg-destructive/10 text-destructive"
                                : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>
                            {item.quantity}x {item.name}
                          </span>
                          <span>₹{item.price.toLocaleString("en-IN")}</span>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-3" />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>₹{order.total.toLocaleString("en-IN")}</span>
                    </div>
                    {order.status !== "Delivered" && order.status !== "Cancelled" && order.deliveryDate && (
                      <p className="mt-2 text-xs text-muted-foreground">Estimated delivery: {order.deliveryDate}</p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {order.status === "Delivered" && (
                        <Button variant="outline" size="sm">
                          Buy Again
                        </Button>
                      )}
                      {order.status !== "Cancelled" && (
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        Invoice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="processing">
              <div className="mt-6 text-center text-muted-foreground">
                <p>No processing orders found.</p>
              </div>
            </TabsContent>

            <TabsContent value="shipped">
              <div className="mt-6 text-center text-muted-foreground">
                <p>No shipped orders found.</p>
              </div>
            </TabsContent>

            <TabsContent value="delivered">
              <div className="mt-6 text-center text-muted-foreground">
                <p>No delivered orders found.</p>
              </div>
            </TabsContent>

            <TabsContent value="cancelled">
              <div className="mt-6 text-center text-muted-foreground">
                <p>No cancelled orders found.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
