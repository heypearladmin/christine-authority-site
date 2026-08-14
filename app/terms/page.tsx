import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for Christine & Company, including SMS communication, AI-assisted calling, and website usage terms.",
  alternates: { canonical: "https://www.christineandreasen.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const lastUpdated = "May 21, 2026";

  return (
    <>
      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Legal</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            These Terms govern your use of this website and your communications
            with Christine &amp; Company, including text messages and phone
            calls (including AI-assisted calls).
          </p>
          <p className="mt-4 text-xs uppercase tracking-editorial text-ink/50">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="border-t border-ink/10 bg-cream-light">
        <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-24">
          <div className="editorial-prose">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, submitting a contact form, or otherwise
              communicating with Christine &amp; Company (&ldquo;Company,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you
              agree to be bound by these Terms &amp; Conditions and our{" "}
              <Link href="/policies" className="editorial-link">
                Privacy Policy
              </Link>
              . If you do not agree, please do not use this website or submit
              your information.
            </p>

            <h2>2. SMS &amp; Text Message Communications</h2>
            <p>
              When you provide your mobile phone number through any form on this
              website and check the consent box, you expressly consent to
              receive text messages from Christine &amp; Company. These messages
              may include appointment confirmations, property updates, market
              information, follow-ups, and other communications related to your
              inquiry.
            </p>
            <p>
              <strong>Message frequency varies.</strong> Message &amp; data
              rates may apply, depending on your mobile carrier and plan.
              Consent to receive text messages is not a condition of any
              purchase or service.
            </p>

            <h2>3. AI-Assisted Calling Disclosure</h2>
            <p>
              By providing your phone number and granting consent, you
              acknowledge and agree that you may receive phone calls from
              Christine &amp; Company, including <strong>automated calls and
              calls placed or assisted by artificial intelligence (AI)
              technology</strong>. These calls may be used to respond to your
              inquiry, schedule consultations, follow up on prior conversations,
              or share information you have requested.
            </p>
            <p>
              You may opt out of receiving AI-assisted or automated calls at any
              time by replying STOP to a text message from us, by informing the
              caller verbally, or by contacting us using the information below.
            </p>

            <h2>4. STOP and HELP Instructions</h2>
            <p>
              You can cancel SMS communications at any time by replying{" "}
              <strong>STOP</strong> to any text message you receive from us.
              After you send the word STOP, we will send you a confirmation
              message and you will not receive additional text messages unless
              you opt in again.
            </p>
            <p>
              If at any time you need assistance, reply <strong>HELP</strong> to
              any of our text messages, or email us at{" "}
              <a
                href="mailto:christine@candco.me"
                className="editorial-link"
              >
                christine@candco.me
              </a>
              .
            </p>

            <h2>5. Message &amp; Data Rates</h2>
            <p>
              Carriers are not liable for delayed or undelivered messages.
              Standard message and data rates from your mobile carrier may apply
              to each message sent or received. Please contact your mobile
              carrier for details about your plan.
            </p>

            <h2>6. Website Use</h2>
            <p>
              The content on this website is provided for informational purposes
              only and does not constitute legal, financial, tax, or real estate
              advice. All real estate information is believed to be accurate but
              is not guaranteed. You should consult with a qualified
              professional before making any real estate decision.
            </p>
            <p>
              You agree not to use this website for any unlawful purpose, to
              attempt unauthorized access to any portion of it, or to interfere
              with its normal operation.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content, branding, photography, and copy on this website are
              the property of Christine &amp; Company or used with permission.
              You may not reproduce or redistribute any portion of this website
              without written permission.
            </p>

            <h2>8. Equal Housing Opportunity</h2>
            <p>
              Christine &amp; Company is committed to the principles of the
              Equal Housing Opportunity Act. We do not discriminate on the basis
              of race, color, religion, sex, national origin, familial status,
              or disability.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              We may update these Terms &amp; Conditions from time to time. Any
              changes will be posted on this page with an updated revision date.
              Continued use of the website after changes are posted constitutes
              acceptance of the revised Terms.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <p>
              <strong>Christine &amp; Company</strong>
              <br />
              2284 West Commodore Way Suite 200
              <br />
              Seattle, WA 98199
              <br />
              Phone:{" "}
              <a href="tel:+12063538787" className="editorial-link">
                (206) 353-8787
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:christine@candco.me"
                className="editorial-link"
              >
                christine@candco.me
              </a>
            </p>

            <p className="mt-10 text-xs uppercase tracking-editorial text-ink/50">
              See also our{" "}
              <Link href="/policies" className="editorial-link">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
