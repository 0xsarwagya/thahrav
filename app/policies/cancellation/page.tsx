import { Separator } from "@/components/ui/separator"

export default function CancellationPolicyPage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Cancellation Policy</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            At Thahrav, we understand that plans can change. To ensure fairness while maintaining efficient operations, we have a strict but transparent cancellation policy.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Cancellation Process</h2>
          <p>To request a cancellation, please follow one of these steps:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email us at cancellations@thahrav.com with your order number in the subject line</li>
            <li>Call our customer support at +91 98765 43210</li>
            <li>Use the cancellation option in your Thahrav account dashboard</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. Eligibility for Cancellation</h2>
          <p>Orders are eligible for cancellation based on the time they were placed:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>If placed between 8:30 AM and 5:30 PM</strong>: Cancellations are allowed only before 5:30 PM on the same day.</li>
            <li><strong>If placed between 5:30 PM and 8:30 AM</strong>: Cancellations are allowed only before 8:30 AM the following day.</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Cancellation Timeframe</h2>
          <p>
            Once the above cutoff times have passed, your order is sent for processing and cannot be cancelled. We advise customers to reach out as early as possible if cancellation is needed.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Non-Cancellable Items</h2>
          <p>The following types of items cannot be cancelled once ordered:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customized or personalized products</li>
            <li>Products marked as final sale</li>
            <li>Orders that have already been processed or shipped</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Contact Us</h2>
          <p>If you have any questions about this Cancellation Policy, please contact us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: contact@thahrav.shop</li>
          </ul>
        </div>
      </div>
    </div>
  )
}