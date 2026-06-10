import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.GHL_SCHEDULE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GHL_SCHEDULE_WEBHOOK_URL is not set");
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, purpose, format, timeframe, property, notes } = body;

  if (!firstName || !lastName || !email || !purpose) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const payload = {
    first_name: firstName,
    last_name: lastName,
    name: `${firstName} ${lastName}`,
    email,
    phone: phone || "",
    source: "Schedule Page",
    tags: ["schedule-form", "consultation-request"],
    customField: {
      purpose_of_consultation: purpose,
      preferred_format: format || "",
      timing: timeframe || "",
      property_address: property || "",
      notes: notes || "",
    },
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
