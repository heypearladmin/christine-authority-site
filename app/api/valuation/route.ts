import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/4EYbwDOzwoNL4tXkkbQi/webhook-trigger/M6aKJQtMJkz6GusYIHmP";

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, address, cityZip, timeline } = body;

  if (!firstName || !lastName || !email || !phone || !address) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const payload = {
    first_name: firstName,
    last_name: lastName,
    name: `${firstName} ${lastName}`,
    email,
    phone,
    source: "Website Home Valuation",
    notes: `heypearl | home-valuation-lead | Property: ${address}${cityZip ? `, ${cityZip}` : ""} | Timeline: ${timeline || "not specified"}`,
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
