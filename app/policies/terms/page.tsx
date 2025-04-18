import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
      <div className="mx-auto">
        <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-muted-foreground sm:mt-4">Last updated: {new Date().toLocaleDateString()}</p>

        <Separator className="my-6 sm:my-8" />

        {/* @TODO: Replace with final legal terms of service text */}
        <div className="prose prose-indigo max-w-none dark:prose-invert">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">1. Acceptance of Terms</h2>
          <p>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
          <p>
            By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws
            and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
            this site.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">2. Use License</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper.
          </p>
          <p>
            Permission is granted to temporarily download one copy of the materials on Thahrav's website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on Thahrav's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">3. Disclaimer</h2>
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
          </p>
          <p>
            The materials on Thahrav's website are provided on an 'as is' basis. Thahrav makes no warranties, expressed
            or implied, and hereby disclaims and negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">4. Limitations</h2>
          <p>
            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
            ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
            tempus lacus enim ac dui.
          </p>
          <p>
            In no event shall Thahrav or its suppliers be liable for any damages (including, without limitation, damages
            for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
            materials on Thahrav's website, even if Thahrav or a Thahrav authorized representative has been notified
            orally or in writing of the possibility of such damage.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">5. Accuracy of Materials</h2>
          <p>
            Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh.
            Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
          </p>
          <p>
            The materials appearing on Thahrav's website could include technical, typographical, or photographic errors.
            Thahrav does not warrant that any of the materials on its website are accurate, complete or current. Thahrav
            may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">6. Links</h2>
          <p>
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            Quisque sit amet est et sapien ullamcorper pharetra.
          </p>
          <p>
            Thahrav has not reviewed all of the sites linked to its website and is not responsible for the contents of
            any such linked site. The inclusion of any link does not imply endorsement by Thahrav of the site. Use of
            any such linked website is at the user's own risk.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">7. Modifications</h2>
          <p>
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
            tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
          </p>
          <p>
            Thahrav may revise these terms of service for its website at any time without notice. By using this website
            you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">8. Governing Law</h2>
          <p>
            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
            dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
          </p>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India and you
            irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="font-serif text-xl font-medium sm:text-2xl mt-8">9. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: legal@thahrav.com</li>
            <li>By phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
