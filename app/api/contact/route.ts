/**
 * Route Handler: POST /api/contact
 *
 * Validates the contact form payload, then forwards it to the
 * configured Discord webhook.
 */

import { NextResponse } from "next/server";
import type { ContactPayload } from "@/types";
import { sendDiscordNotification } from "@/lib/notifications";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(?:\+?\d[\d\s().-]{7,18}\d)$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone and message are required" },
      { status: 400 }
    );
  }

  if (!PHONE_RE.test(phone)) {
    return NextResponse.json(
      { error: "Invalid phone number" },
      { status: 400 }
    );
  }

  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message is too short" },
      { status: 400 }
    );
  }

  await sendDiscordNotification({
    name,
    phone,
    email: email || undefined,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
