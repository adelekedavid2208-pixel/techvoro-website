export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#080D19] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-[#477BFF] hover:underline">
          ← Back to Home
        </a>

        <h1 className="mt-10 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#A6B0C2]">
          Last updated: November 8, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#A6B0C2]">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">1. Introduction</h2>
            <p>
              Techvoro ("we", "our", or "us") respects your privacy. This
              Privacy Policy explains how we collect, use, store, and protect
              information when you visit our website or contact us about our
              services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">2. Information We Collect</h2>
            <p>
              When you contact us or submit a project enquiry, we may collect
              information such as your name, email address, company or business
              name, project details, budget, and other information you
              voluntarily provide.
            </p>
            <p className="mt-3">
              We may also collect technical information, including your IP
              address, browser type, device information, pages visited, and
              interactions with our website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">3. How We Use Your Information</h2>
            <p>We may use collected information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to enquiries and communicate with you.</li>
              <li>Understand your project requirements.</li>
              <li>Provide and improve our services.</li>
              <li>Monitor website performance and user activity.</li>
              <li>Protect our website against misuse or security threats.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">4. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to
              understand website traffic and improve user experience.
              We also use Meta Pixel, which may collect information about
              your interactions with our website to help measure advertising
              performance and understand visitor activity.
            </p>
            <p className="mt-3">
              You can manage cookies through your browser settings. Blocking
              certain cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">5. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share relevant
              information with service providers that help us operate our
              website, communicate with customers, analyse website activity,
              or deliver our services. These providers are expected to handle
              information appropriately.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">6. Data Security and Retention</h2>
            <p>
              We take reasonable measures to protect information against
              unauthorized access, loss, or misuse. We retain information only
              for as long as reasonably necessary for the purposes described
              in this policy or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">7. Your Privacy Rights</h2>
            <p>
              Depending on your location and applicable law, you may have
              rights to request access to, correction of, or deletion of your
              personal information, or to object to certain processing.
              Contact us to make a request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">8. Third-Party Services</h2>
            <p>
              Our website may rely on third-party services, including hosting,
              analytics, and advertising providers. Their handling of your
              information is governed by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be published on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, contact us at:
            </p>
            <a
              href="mailto:techvoro.contact@gmail.com"
              className="mt-3 inline-block text-[#477BFF] hover:underline"
            >
              techvoro.contact@gmail.com
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}