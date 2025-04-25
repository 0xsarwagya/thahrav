import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            Thahrav values your privacy and is committed to protecting your personal information. This Privacy Policy
            outlines how we collect, use, and protect your data.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Information We Collect</h2>
          <p>We may collect the following information when you use our services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and shipping address</li>
            <li>Order details and purchase history</li>
            <li>Account preferences and settings</li>
            <li>Device, browser, and usage data through cookies and analytics tools</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill orders using Cashfree and Razorpay</li>
            <li>Send order updates via WhatsApp, email, and SMS</li>
            <li>Provide customer support and respond to queries</li>
            <li>Track analytics and improve our services using PostHog</li>
            <li>Send promotional emails only if you’ve given explicit consent</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Sharing of Information</h2>
          <p>
            We may share your necessary details (like name, phone number, and address) with our delivery partners to
            ensure successful delivery of your order. Your data will not be sold or shared for marketing purposes
            without your consent.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Cookies and Tracking</h2>
          <p>
            We use cookies to authenticate your session, manage your cart, and track order activity. These help us
            enhance your experience and personalize your journey on Thahrav.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Your Choices</h2>
          <p>
            You can change your communication preferences and privacy settings anytime by accessing your account
            settings. You may also opt-out of promotional communications at any time.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">6. Security</h2>
          <p>
            We take reasonable precautions to protect your personal data and ensure secure payment transactions using
            our trusted gateways, Razorpay and Cashfree.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">7. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, contact us at:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: contact@thahrav.shop</li>
          </ul>
        </div>
      </div>
    </div>
  )
}