import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            These Terms of Service ("Terms") govern your use of Thahrav’s website and services. By accessing or using our site, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our services.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with all applicable laws. You must not misuse our services by knowingly introducing viruses or other harmful material.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. Intellectual Property</h2>
          <p>
            All content on this site including images, artwork, logos, and text is the intellectual property of Thahrav or its contributors and is protected by copyright laws. You may not use or reproduce any content without explicit permission.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Orders and Payments</h2>
          <p>
            By placing an order with Thahrav, you agree to provide current, complete, and accurate purchase and account information. All payments must be made through our approved payment gateways—Cashfree and Razorpay.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Cancellations & Refunds</h2>
          <p>
            Cancellations and refunds are subject to our Cancellation Policy and Refund Policy. Please review them before placing your order.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Limitation of Liability</h2>
          <p>
            Thahrav shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services or products.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">6. User Conduct</h2>
          <p>
            You agree not to engage in any activity that disrupts or interferes with our services, servers, or networks connected to the site.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">7. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by updating the date at the top of this page. Continued use of our services after changes means you accept the new Terms.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">8. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: contact@thahrav.shop</li>
          </ul>
        </div>
      </div>
    </div>
  )
}