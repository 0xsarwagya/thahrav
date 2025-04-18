"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setError(null)
    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // @TODO: Implement actual password reset logic
      setIsSubmitted(true)
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <div className="w-full max-w-md">
        <Card className="border">
          <CardHeader className="space-y-1 text-center">
            <Button
              asChild
              variant="ghost"
              className="absolute left-4 top-4 h-auto p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground"
            >
              <Link href="/auth/login">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Login
              </Link>
            </Button>
            <CardTitle className="mt-4 font-serif text-2xl font-medium">Reset Password</CardTitle>
            <CardDescription>
              {!isSubmitted
                ? "Enter your email address and we'll send you a link to reset your password"
                : "Check your email for a reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={error ? "email-error" : undefined}
                  />
                  {error && (
                    <p id="email-error" className="text-xs text-destructive">
                      {error}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <CheckCircle className="mb-2 h-12 w-12 text-primary" />
                <p className="mb-4">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  If you don't see it in your inbox, please check your spam folder.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => router.push("/auth/login")}>
                  Return to Login
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            {!isSubmitted && (
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link href="/auth/login" className="text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
