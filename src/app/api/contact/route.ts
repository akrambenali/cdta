import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { SITE_CONTACT } from "@/data/contact-info";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
  honeypot?: string;
  locale?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 5000;

function sanitize(value: unknown, max = 300): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function persistSubmission(data: Record<string, string>) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    const line = JSON.stringify({ ...data, receivedAt: new Date().toISOString() }) + "\n";
    await appendFile(path.join(dataDir, "contact-submissions.jsonl"), line, "utf8");
  } catch (error) {
    console.error("[contact] impossible d'enregistrer la soumission sur disque:", error);
  }
}

async function sendEmailNotification(data: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const to = process.env.CONTACT_TO_EMAIL || SITE_CONTACT.email;
  const from = process.env.CONTACT_FROM_EMAIL || "CDTA <onboarding@resend.dev>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Nouvelle demande — ${data.product || "site web"} — ${data.name}`,
        text: [
          `Nom: ${data.name}`,
          `Entreprise: ${data.company || "-"}`,
          `Email: ${data.email}`,
          `Téléphone: ${data.phone || "-"}`,
          `Produit/service: ${data.product || "-"}`,
          "",
          "Message:",
          data.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("[contact] échec de l'envoi de l'email:", await response.text());
    }
  } catch (error) {
    console.error("[contact] erreur lors de l'appel à l'API email:", error);
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (sanitize(payload.honeypot, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(payload.name, 150);
  const email = sanitize(payload.email, 200);
  const message = sanitize(payload.message, MAX_LENGTH);
  const company = sanitize(payload.company, 150);
  const phone = sanitize(payload.phone, 50);
  const product = sanitize(payload.product, 50);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const data = { name, company, email, phone, product, message };

  await Promise.all([persistSubmission(data), sendEmailNotification(data)]);

  return NextResponse.json({ ok: true });
}
