import Link from "next/link";

export const dynamic = "force-dynamic";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-indigo-400 text-sm hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-slate-400 text-sm">Last updated: July 2025</p>

        <div className="mt-8 space-y-6 text-slate-300 text-sm leading-7">
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name,
              email address, and invoice data. We also collect usage data
              automatically through standard web analytics.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">2. How We Use Your Information</h2>
            <p>
              We use your information to provide and improve the service,
              communicate with you, and ensure security. We do not sell your
              personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">3. Data Storage</h2>
            <p>
              Your invoice data is stored securely and is accessible only to
              you and authorised personnel for support purposes. We use
              industry-standard encryption in transit and at rest.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">4. Third-Party Services</h2>
            <p>
              We use third-party services for authentication (Clerk) and
              payment processing (Stripe). These services have their own
              privacy policies and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">5. Cookies</h2>
            <p>
              We use essential cookies to maintain your session and preferences.
              No advertising or tracking cookies are used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time. Contact us through the platform to
              exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">7. Contact</h2>
            <p>
              For privacy-related inquiries, please contact us through the
              platform&apos;s support channels.
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
