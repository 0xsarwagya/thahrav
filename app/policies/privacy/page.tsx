import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        {/* @TODO: Replace with final legal privacy policy text */}
        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Information We Collect</h2>
          <p>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Billing and shipping information</li>
            <li>Transaction information</li>
            <li>Device and usage information</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. How We Use Your Information</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper.
          </p>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process transactions and fulfill orders</li>
            <li>Communicate with you about your orders and products</li>
            <li>Improve our website and customer experience</li>
            <li>Send periodic emails regarding products, services, and promotions</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Information Sharing and Disclosure</h2>
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
          </p>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information
            with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist us in operating our website and business</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Cookies and Tracking Technologies</h2>
          <p>
            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
            ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
            tempus lacus enim ac dui.
          </p>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Data Security</h2>
          <p>
            Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh.
            Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
          </p>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">6. Your Rights</h2>
          <p>
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            Quisque sit amet est et sapien ullamcorper pharetra.
          </p>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request the deletion of your personal data</li>
            <li>Object to the processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">7. Changes to This Privacy Policy</h2>
          <p>
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
            tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
          </p>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: privacy@thahrav.com</li>
            <li>By phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
