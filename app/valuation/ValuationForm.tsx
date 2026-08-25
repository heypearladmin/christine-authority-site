"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ValuationForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    try {
      const res = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("submission failed");

      router.push("/valuation/confirmation");
    } catch {
      setError("Something went wrong. Please try again or call (206) 353-8787.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <label htmlFor="firstName" className="block text-xs uppercase tracking-editorial text-ink/60">
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

      <div>
        <label htmlFor="lastName" className="block text-xs uppercase tracking-editorial text-ink/60">
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

      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-editorial text-ink/60">
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

      <div>
        <label htmlFor="phone" className="block text-xs uppercase tracking-editorial text-ink/60">
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
        <label htmlFor="address" className="block text-xs uppercase tracking-editorial text-ink/60">
          Property address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="123 Main St"
        />
      </div>

      <div>
        <label htmlFor="cityZip" className="block text-xs uppercase tracking-editorial text-ink/60">
          City / ZIP
        </label>
        <input
          id="cityZip"
          name="cityZip"
          type="text"
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="Seattle, WA 98199"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-xs uppercase tracking-editorial text-ink/60">
          Selling timeline (optional)
        </label>
        <select
          id="timeline"
          name="timeline"
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink focus:border-gold focus:outline-none"
        >
          <option value="">Select one</option>
          <option value="Just curious">Just curious</option>
          <option value="Within 3 months">Within 3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="12+ months">12+ months</option>
        </select>
      </div>

      {error && (
        <div className="md:col-span-2">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Get My Home Value"}
        </button>
      </div>
    </form>
  );
}
