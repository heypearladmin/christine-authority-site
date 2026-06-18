"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ScheduleForm() {
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
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("submission failed");
      }

      router.push("/schedule/confirmation");
    } catch {
      setError("Something went wrong. Please try again or call (206) 353-8787.");
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      <div>
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
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="Your first name"
        />
      </div>
      <div>
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
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="Your last name"
        />
      </div>
      <div>
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
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-xs uppercase tracking-editorial text-ink/60"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
          placeholder="(206) 555-0100"
        />
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
          {submitting ? "Sending…" : "Request Consultation"}
        </button>
        <p className="mt-4 text-xs text-ink/55">
          Prefer a direct line?{" "}
          <a
            href="tel:+12063538787"
            className="text-ink underline decoration-gold underline-offset-4"
          >
            (206) 353-8787
          </a>
        </p>
      </div>
    </form>
  );
}
