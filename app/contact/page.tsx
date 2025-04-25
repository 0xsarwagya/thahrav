"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // @TODO: Connect to backend form submission service when available
    // @TODO: Implement form validation and error handling
    // @TODO: Send form data to CRM or email service
    setFormSubmitted(true)
  }

  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">Contact Us</h1>
        <p className="mt-2 text-muted-foreground font-medium sm:mt-4">
          We'd love to hear from you. Get in touch with us.
        </p>
      </div>

      <div className="mt-8 grid gap-8 sm:mt-12 md:mt-16 md:grid-cols-2 md:gap-12">
        {/* Contact Information */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-serif text-xl font-bold sm:text-2xl">Get in Touch</h2>
            <p className="mt-2 text-muted-foreground font-medium sm:mt-4">
              Have questions about our products, orders, or anything else? We're here to help.
            </p>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary sm:mr-4" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="mt-1 text-muted-foreground">info@thahrav.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary sm:mr-4" />
                <div>
                  <h3 className="font-bold">Whatsapp</h3>
                  <p className="mt-1 text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary sm:mr-4" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="mt-1 text-muted-foreground">
                    Muzaffarpur
                    <br />
                    Muzaffarpur, 842001
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-6 sm:my-8" />

            <div>
              <h3 className="font-serif text-lg font-bold sm:text-xl">Follow Us</h3>
              <div className="mt-3 flex space-x-4 sm:mt-4">
                <Button asChild variant="link" className="p-0 text-muted-foreground hover:text-foreground font-bold">
                  <Link href="https://www.instagram.com/thahrav_/">Instagram</Link>
                </Button>
                <Button asChild variant="link" className="p-0 text-muted-foreground hover:text-foreground font-bold">
                  <Link href="https://www.facebook.com/profile.php?id=61575116795356">Facebook</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardContent className="pt-6">
            {formSubmitted ? (
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-12 sm:w-12">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-serif text-lg font-bold sm:mt-4 sm:text-xl">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground font-medium">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 sm:mt-6 font-bold"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">
                      Name
                    </Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-semibold">
                    Subject
                  </Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product Inquiry</SelectItem>
                      <SelectItem value="order">Order Status</SelectItem>
                      <SelectItem value="return">Returns & Exchanges</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">
                    Message
                  </Label>
                  <Textarea id="message" placeholder="Your message" rows={5} required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                >
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
