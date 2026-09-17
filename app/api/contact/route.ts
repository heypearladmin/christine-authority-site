import { NextRequest, NextResponse } from "next/server";

// A real visitor cannot read this form, fill 5 fields, and submit faster
// than this. Below the floor is treated as a bot; above the ceiling is
// treated as a stale/replayed payload rather than a live submission.
const MIN_SUBMIT_MS = 2000;
const MAX_SUBMIT_MS = 6 * 60 * 60 * 1000; // 6 hours

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/4EYbwDOzwoNL4tXkkbQi/webhook-trigger/M6aKJQtMJkz6GusYIHmP";

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message, website, formLoadedAt } = body;

  // Honeypot: this field is invisible and unreachable for a real visitor.
  // Anything that fills it is automated. Respond as if it succeeded so the
  // bot gets no signal to adapt on, and never touch GHL.
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Time-trap: don't trust a client-reported pass/fail, only the raw
  // timestamp — the elapsed time is computed here, server-side, against
  // this server's own clock.
  const loadedAt = Number(formLoadedAt);
  if (!formLoadedAt || !Number.isFinite(loadedAt)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const elapsedMs = Date.now() - loadedAt;
  if (elapsedMs < MIN_SUBMIT_MS || elapsedMs > MAX_SUBMIT_MS) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!firstName || !lastName || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const payload = {
    first_name: firstName,
    last_name: lastName,
    name: `${firstName} ${lastName}`,
    email,
    phone,
    source: "Contact Page",
    notes: message,
  };

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!ghlRes.ok) {
      console.error("GHL webhook error", ghlRes.status, await ghlRes.text());
      return NextResponse.json({ error: "Failed to submit" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("GHL webhook fetch failed", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
