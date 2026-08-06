import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Christine & Company, including how we handle mobile information, SMS opt-in data, and AI-assisted communications.",
  robots: { index: true, follow: true },
};

export default function PoliciesPage() {
  const lastUpdated = "May 21, 2026";

  return (
    <>
      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Legal</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            This Privacy Policy explains how Christine &amp; Company collects,
            uses, and protects the information you provide, including phone
            numbers used for SMS and AI-assisted calling.
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
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide through forms
              on this website, including your first name, last name, email
              address, phone number, and the contents of any message you send
              us. We also automatically collect limited technical information
              such as your browser type, device type, and pages visited, used
              solely to improve site performance.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiry,
              schedule consultations, share market information and property
              updates you have requested, and follow up regarding our services.
              Communications may be delivered by email, phone (including
              AI-assisted or automated calls), and text message, in each case
              subject to the consent you provided.
            </p>

            <h2>3. SMS &amp; AI Calling Consent</h2>
            <p>
              By providing your phone number and checking the consent box on our
              contact form, you consent to receive calls and text messages,
              including automated calls and AI-assisted communications, from
              Christine &amp; Company. Message frequency varies. Message &amp;
              data rates may apply. You may reply <strong>STOP</strong> at any
              time to opt out, or reply <strong>HELP</strong> for assistance.
              See our{" "}
              <Link href="/terms" className="editorial-link">
                Terms &amp; Conditions
              </Link>{" "}
              for full details.
            </p>

            <h2>4. Mobile Information &amp; Third-Party Sharing</h2>
            <p>
              No mobile information will be shared with third parties/affiliates
              for marketing/promotional purposes. All other categories exclude
              text messaging originator opt-in data and consent; this
              information will not be shared with any third parties.
            </p>

            <h2>5. Service Providers</h2>
            <p>
              We may use trusted third-party service providers (for example,
              hosting providers, email delivery providers, CRM platforms,
              telephony and SMS providers such as Twilio, and AI calling
              platforms such as GoHighLevel) solely to operate our business and
              deliver the communications you have requested. These providers
              are contractually limited to processing your information on our
              behalf and may not use it for their own marketing purposes. As
              stated above, mobile opt-in data and consent are never shared
              with third parties.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your information only as long as needed to provide our
              services, comply with legal obligations, resolve disputes, and
              enforce our agreements. SMS opt-in records are retained as
              required to demonstrate consent.
            </p>

            <h2>7. Your Choices</h2>
            <p>
              You may opt out of text messages at any time by replying{" "}
              <strong>STOP</strong>. You may opt out of email communications by
              using the unsubscribe link in any email or by emailing us. You may
              request access, correction, or deletion of your personal
              information by contacting us at the information below.
            </p>

            <h2>8. Security</h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards to protect the information you provide. However, no
              method of transmission over the internet is completely secure,
              and we cannot guarantee absolute security.
            </p>

            <h2>9. Children&rsquo;s Privacy</h2>
            <p>
              This website is not directed to children under 13, and we do not
              knowingly collect personal information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data,
              contact us:
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
              <Link href="/terms" className="editorial-link">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
