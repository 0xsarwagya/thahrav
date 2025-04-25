import { Separator } from "@/components/ui/separator"

export default function RefundPolicyPage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Refund Policy</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            At Thahrav, each product is made-to-order with love and crafted in collaboration with Indian artists. We follow a strict yet fair refund policy to ensure your satisfaction while protecting our artisan-driven model.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Refund Eligibility</h2>
          <p>Refunds are applicable only under the following conditions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Item received is damaged or defective (must be reported within 5 days of delivery)</li>
            <li>Item significantly different from the description</li>
            <li>Wrong item (design/size/color) delivered</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. Required Proof</h2>
          <p>
            For any refund or replacement, the customer must provide clear photos and a full unboxing video showing the defect or issue. Claims without this documentation will not be eligible for resolution.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Refund Process</h2>
          <p>To initiate a refund, please follow these steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Contact us within 7 days of receiving your order at support@thahrav.shop</li>
            <li>Include your order number, photos, and unboxing video</li>
            <li>Our team will review your request and respond with the next steps</li>
          </ol>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Non-Refundable Situations</h2>
          <p>Refunds will not be provided if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Damage is reported after 5 days of delivery</li>
            <li>Unboxing video and clear proof is not provided</li>
            <li>Damage is due to mishandling after delivery</li>
            <li>Wrong size was ordered – please refer to our size chart</li>
            <li>Customer changed their mind after receiving the order</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Lost Packages</h2>
          <p>
            If your order is lost in transit and confirmed undelivered by the courier partner, we will issue a replacement or full refund.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">6. Refund Timeframe</h2>
          <p>
            Once a refund is approved, it will be processed within 5-7 business days. The time it takes to reflect in your account depends on your payment method and bank.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">7. Contact Us</h2>
          <p>If you have any questions about our refund policy, reach out to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: contact@thahrav.shop</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 
