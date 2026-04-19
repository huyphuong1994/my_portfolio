/**
 * Best-effort notification dispatcher for the contact form.
 * Failures are logged so a downed webhook doesn't break submission.
 */

import type { ContactPayload } from "@/types";

type Notification = ContactPayload & { receivedAt: string };

export async function sendDiscordNotification(payload: Notification) {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return;

  const body = {
    username: "Portfolio Contact",
    embeds: [
      {
        title: `Tin nhắn mới từ ${payload.name}`,
        color: 0x4ade80,
        fields: [
          { name: "Họ tên", value: codeBlock(payload.name), inline: true },
          { name: "Số điện thoại", value: codeBlock(payload.phone), inline: true },
          {
            name: "Email",
            value: payload.email ? codeBlock(payload.email) : "_(không cung cấp)_",
            inline: false,
          },
          {
            name: "Nội dung",
            value: codeBlock(truncate(payload.message, 1000)),
            inline: false,
          },
        ],
        timestamp: payload.receivedAt,
      },
    ],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error("[discord] webhook failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("[discord] webhook error", err);
  }
}

function truncate(s: string, max: number) {
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

// Wrap in a Discord code block. Replace any triple backticks in the
// content so they can't break out of the block.
function codeBlock(s: string) {
  return "```\n" + s.replace(/```/g, "ʼʼʼ") + "\n```";
}
