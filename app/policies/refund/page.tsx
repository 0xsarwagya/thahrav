import { Separator } from "@/components/ui/separator"

export default function RefundPolicyPage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Refund Policy</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        {/* @TODO: Replace with final legal refund policy text */}
        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Refund Eligibility</h2>
          <p>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
          <p>We issue refunds for the following reasons:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Item received damaged or defective</li>
            <li>Item significantly different from description</li>
            <li>Wrong item shipped</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. Refund Process</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper.
          </p>
          <p>To initiate a refund, please follow these steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Contact our customer service within 7 days of receiving your order</li>
            <li>Provide your order number and reason for refund</li>
            <li>Our team will review your request and provide further instructions</li>
          </ol>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Refund Timeframe</h2>
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
          </p>
          <p>
            Once we receive and inspect the returned item, we will process your refund. The time it takes for the refund
            to appear in your account depends on your payment method and financial institution.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Non-Refundable Items</h2>
          <p>
            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
            ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
            tempus lacus enim ac dui.
          </p>
          <p>The following items are non-refundable:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customized or personalized products</li>
            <li>Items marked as final sale</li>
            <li>Items damaged due to customer misuse</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Contact Us</h2>
          <p>If you have any questions about this Refund Policy, please contact us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: returns@thahrav.com</li>
            <li>By phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
