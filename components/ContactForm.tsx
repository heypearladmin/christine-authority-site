"use client";

import Link from "next/link";
import { useState } from "react";

const COMPANY = "Christine & Company";
const CONTACT_EMAIL = "christine@candco.me";

export default function ContactForm() {
  const [consented, setConsented] = useState(false);

  return (
    <form
      action={`mailto:${CONTACT_EMAIL}`}
      method="post"
      encType="text/plain"
      className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
      noValidate={false}
    >
      <div className="md:col-span-1">
        <label
          htmlFor="firstName"
          className="block text-xs uppercase tracking-editorial text-ink/60"
        >
          First name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="Your first name"
        />
      </div>

      <div className="md:col-span-1">
        <label
          htmlFor="lastName"
          className="block text-xs uppercase tracking-editorial text-ink/60"
        >
          Last name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="Your last name"
        />
      </div>

      <div className="md:col-span-1">
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-editorial text-ink/60"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div className="md:col-span-1">
        <label
          htmlFor="phone"
          className="block text-xs uppercase tracking-editorial text-ink/60"
        >
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          inputMode="tel"
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="(206) 555-0100"
        />
      </div>

      <div className="md:col-span-2">
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-editorial text-ink/60"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="Tell Christine a little about your timing and goals."
        />
      </div>

      {/* AI consent disclosure (above checkbox, per A2P 10DLC / GHL requirement) */}
      <div className="md:col-span-2">
        <p className="text-xs leading-relaxed text-ink/60">
          By providing your phone number, you consent to receive calls and text
          messages, including automated calls and AI-assisted communications,
          from {COMPANY}.
        </p>
      </div>

      {/* Required consent checkbox */}
      <div className="md:col-span-2">
        <label
          htmlFor="consent"
          className="flex cursor-pointer items-start gap-3"
        >
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={consented}
            onChange={(e) => setConsented(e.target.checked)}
            aria-describedby="consent-text"
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer border-ink/40 text-ink accent-ink focus:outline-none focus:ring-1 focus:ring-gold"
          />
          <span
            id="consent-text"
            className="text-xs leading-relaxed text-ink/70"
          >
            I agree to receive text messages and phone calls from {COMPANY} at
            the phone number provided. Message frequency varies. Message &amp;
            data rates may apply. Reply STOP to unsubscribe. Reply HELP for
            help. By submitting this form, you agree to our{" "}
            <Link
              href="/terms"
              className="underline decoration-gold underline-offset-4 hover:text-ink"
            >
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/policies"
              className="underline decoration-gold underline-offset-4 hover:text-ink"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={!consented}
          aria-disabled={!consented}
          className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold disabled:cursor-not-allowed disabled:bg-ink/40 disabled:hover:bg-ink/40"
        >
          Send Message
        </button>
        <p className="mt-4 text-xs text-ink/50">
          Or email directly:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-ink underline decoration-gold underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </form>
  );
}
