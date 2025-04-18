import { Separator } from "@/components/ui/separator"

export default function CancellationPolicyPage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Cancellation Policy</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        {/* @TODO: Replace with final legal cancellation policy text */}
        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Cancellation Process</h2>
          <p>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
          <p>
            Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
            cursus:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email us at cancellations@thahrav.com with your order number in the subject line</li>
            <li>Call our customer service at +91 98765 43210</li>
            <li>Use the cancellation option in your account dashboard</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. Eligibility for Cancellation</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper.
          </p>
          <p>
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
            pharetra.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Cancellation Timeframe</h2>
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
          </p>
          <p>
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Non-Cancellable Items</h2>
          <p>
            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
            ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
            tempus lacus enim ac dui.
          </p>
          <p>
            Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
            neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Contact Us</h2>
          <p>If you have any questions about this Cancellation Policy, please contact us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: info@thahrav.com</li>
            <li>By phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
