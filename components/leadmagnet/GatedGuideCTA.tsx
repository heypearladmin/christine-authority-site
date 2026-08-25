"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { leadMagnets, type LeadMagnetKey } from "@/lib/lead-magnets";

export default function GatedGuideCTA({
  resource,
  description,
}: {
  resource: LeadMagnetKey;
  description?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, resource, page: pathname }),
      });

      const json = await res.json();
      if (!res.ok || !json.downloadUrl) throw new Error("submission failed");

      setDownloadUrl(json.downloadUrl);
    } catch {
      setError("Something went wrong. Please try again or call (206) 353-8787.");
    } finally {
      setSubmitting(false);
    }
  }

  if (downloadUrl) {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 px-6 py-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          Your Guide Is Ready
        </p>
        <p className="mt-2 text-ink/80">
          Your free copy of {leadMagnets[resource].title} is ready to download.
        </p>
        <a
          href={downloadUrl}
          download
          className="mt-4 inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
        >
          Download Your Guide
        </a>
      </div>
    );
  }

  if (!open) {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 px-6 py-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          {leadMagnets[resource].title}
        </p>
        {description && <p className="mt-2 text-ink/80">{description}</p>}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
        >
          {leadMagnets[resource].ctaLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gold/30 bg-gold/5 px-6 py-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold">
        {leadMagnets[resource].ctaLabel}
      </p>
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input type="hidden" name="resource" value={resource} />
        <div>
          <label htmlFor={`fn-${resource}`} className="block text-xs uppercase tracking-editorial text-ink/60">
            First name
          </label>
          <input
            id={`fn-${resource}`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor={`em-${resource}`} className="block text-xs uppercase tracking-editorial text-ink/60">
            Email
          </label>
          <input
            id={`em-${resource}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`ph-${resource}`} className="block text-xs uppercase tracking-editorial text-ink/60">
            Phone (optional)
          </label>
          <input
            id={`ph-${resource}`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
            placeholder="(206) 555-0100"
          />
        </div>
        {error && <p className="sm:col-span-2 text-sm text-red-700">{error}</p>}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold disabled:opacity-50"
          >
            {submitting ? "Sending…" : leadMagnets[resource].ctaLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
