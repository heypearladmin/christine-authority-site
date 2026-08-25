import { NextRequest, NextResponse } from "next/server";
import { getLeadMagnet } from "@/lib/lead-magnets";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/4EYbwDOzwoNL4tXkkbQi/webhook-trigger/M6aKJQtMJkz6GusYIHmP";

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { firstName, email, phone, resource, page } = body;

  if (!firstName || !email || !resource) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const magnet = getLeadMagnet(resource);
  if (!magnet) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 400 });
  }

  const payload = {
    first_name: firstName,
    name: firstName,
    email,
    phone: phone || "",
    source: magnet.sourceLabel,
    notes: `Guide requested: ${magnet.title} | Tag: ${magnet.tagLabel} | heypearl | pdf-lead-magnet | Page: ${page || "unknown"}`,
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

    return NextResponse.json({ success: true, downloadUrl: magnet.filePath, title: magnet.title });
  } catch (err) {
    console.error("GHL webhook fetch failed", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
