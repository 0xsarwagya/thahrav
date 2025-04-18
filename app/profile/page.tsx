"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data - in a real app, this would come from an auth context or API
  const user = {
    name: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    phone: "+91 98765 43210",
    address: "123 Cultural Lane, New Delhi, 110001, India",
    joinedDate: "January 2023",
    avatar: "/placeholder.svg?height=128&width=128&text=AS",
  }

  const handleLogout = () => {
    // @TODO: Implement actual logout logic
    router.push("/auth/login")
  }

  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">My Account</h1>
        <p className="mt-2 text-muted-foreground font-medium">Manage your account and view your orders</p>

        <div className="mt-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="account">Account Info</TabsTrigger>
              <TabsTrigger value="logout" onClick={handleLogout}>
                Logout
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">Account Overview</CardTitle>
                    <CardDescription>Your personal information and summary</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <div className="mb-4 h-24 w-24 overflow-hidden rounded-full sm:mb-0">
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">Member since {user.joinedDate}</p>
                        <div className="mt-4 space-y-1 text-sm">
                          <p>
                            <span className="font-medium">Email:</span> {user.email}
                          </p>
                          <p>
                            <span className="font-medium">Phone:</span> {user.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">Recent Orders</CardTitle>
                    <CardDescription>Your most recent purchases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Order #12345</p>
                            <p className="text-xs text-muted-foreground">Placed on April 15, 2023</p>
                          </div>
                          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            Delivered
                          </span>
                        </div>
                        <p className="mt-2 text-sm">2 items • ₹6,498</p>
                        <Button asChild variant="link" className="mt-2 h-auto p-0 text-xs">
                          <Link href="/profile/orders">View Details</Link>
                        </Button>
                      </div>

                      <div className="rounded-md border p-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Order #12346</p>
                            <p className="text-xs text-muted-foreground">Placed on May 2, 2023</p>
                          </div>
                          <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">Processing</span>
                        </div>
                        <p className="mt-2 text-sm">1 item • ₹4,999</p>
                        <Button asChild variant="link" className="mt-2 h-auto p-0 text-xs">
                          <Link href="/profile/orders">View Details</Link>
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/profile/orders">View All Orders</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Recommended for You</CardTitle>
                  <CardDescription>Based on your previous purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {[1, 2, 3, 4].map((item) => (
                      <Link key={item} href={`/shop/product/${item}`} className="group block">
                        <div className="overflow-hidden rounded-md border">
                          <div className="aspect-square relative">
                            <Image
                              src={`/placeholder.svg?height=200&width=200&text=Product+${item}`}
                              alt={`Recommended product ${item}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-2">
                            <h3 className="truncate text-sm font-medium">Handcrafted Item {item}</h3>
                            <p className="text-xs text-muted-foreground">
                              ₹{(1999 + item * 500).toLocaleString("en-IN")}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Your Orders</CardTitle>
                  <CardDescription>Track and manage your purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
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
                    ].map((order) => (
                      <div key={order.id} className="rounded-md border">
                        <div className="border-b bg-muted/50 p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <p className="font-medium">Order #{order.id}</p>
                              <p className="text-xs text-muted-foreground">Placed on {order.date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`rounded-full px-2 py-1 text-xs font-medium ${
                                  order.status === "Delivered"
                                    ? "bg-primary/10 text-primary"
                                    : order.status === "Shipped"
                                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                      : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {order.status}
                              </span>
                              <Button variant="outline" size="sm">
                                Track Order
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
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
                          {order.status !== "Delivered" && (
                            <p className="mt-2 text-xs text-muted-foreground">
                              Estimated delivery: {order.deliveryDate}
                            </p>
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
                            <Button variant="outline" size="sm">
                              Invoice
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Info Tab */}
            <TabsContent value="account" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Account Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue={user.name} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue={user.email} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue={user.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue={user.address} />
                      </div>
                    </div>
                    <Button type="submit">Save Changes</Button>
                  </form>

                  <Separator className="my-6" />

                  <div>
                    <h3 className="text-lg font-medium">Password</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Update your password to keep your account secure
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h3 className="text-lg font-medium">Delete Account</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive" className="mt-4">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
