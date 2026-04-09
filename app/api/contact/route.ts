/**
 * Route Handler: POST /api/contact
 *
 * Receives the contact form payload, validates shape, and logs it
 * server-side. Replace the `console.log` with your preferred email
 * provider (Resend, Nodemailer, etc.) when ready.
 */

import { NextResponse } from "next/server";
import type { ContactPayload } from "@/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
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

  // TODO: wire up a real email provider (Resend, SendGrid, SMTP, etc.)
  //       For now we just log it so the user can verify end-to-end flow.
  console.log("[contact]", {
    name,
    email,
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
