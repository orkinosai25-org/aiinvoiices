import Link from "next/link";

export const dynamic = "force-dynamic";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-indigo-400 text-sm hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-4xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-slate-400 text-sm">Last updated: July 2025</p>

        <div className="mt-8 space-y-6 text-slate-300 text-sm leading-7">
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PromptToInvoice, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please
              do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">2. Description of Service</h2>
            <p>
              PromptToInvoice is an AI-powered invoicing platform that enables
              users to generate professional invoices from plain-text descriptions.
              The service is provided &ldquo;as is&rdquo; and may be updated or changed at
              any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activity that occurs under your
              account. You must notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">4. Acceptable Use</h2>
            <p>
              You agree not to use the service for any unlawful purpose or in any
              way that could damage, disable, or impair the service. Generating
              fraudulent invoices or misrepresenting your identity is strictly
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">5. Intellectual Property</h2>
            <p>
              All content and technology comprising the service is owned by
              PromptToInvoice. You retain ownership of the invoice data you create.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">6. Limitation of Liability</h2>
            <p>
              PromptToInvoice is not liable for any indirect, incidental, or
              consequential damages arising from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">7. Contact</h2>
            <p>
              For questions about these terms, please reach out through the
              contact information provided on the platform.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
