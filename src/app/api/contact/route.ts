import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data) {
    return NextResponse.json({ error: "Données de formulaire invalides." }, { status: 400 });
  }

  const { name, email, subject, message } = data as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Le nom, l'email et le message sont requis." }, { status: 400 });
  }

  const smtpHost = process.env.CONTACT_SMTP_HOST;
  const smtpPort = Number(process.env.CONTACT_SMTP_PORT ?? 587);
  const smtpUser = process.env.CONTACT_SMTP_USER;
  const smtpPass = process.env.CONTACT_SMTP_PASS;
  const mailFrom = process.env.CONTACT_EMAIL_FROM;
  const mailTo = process.env.CONTACT_EMAIL_TO;

  if (!smtpHost || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
    return NextResponse.json(
      {
        error:
          "Le serveur de messagerie n'est pas configuré. Ajoutez CONTACT_SMTP_HOST, CONTACT_SMTP_PORT, CONTACT_SMTP_USER, CONTACT_SMTP_PASS, CONTACT_EMAIL_FROM et CONTACT_EMAIL_TO.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: subject?.trim() || `Message du site Isolele - ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject || "(sans sujet)"}\n\n${message}`,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject || "(sans sujet)"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact mail send failed:", error);
    return NextResponse.json({ error: "Impossible d'envoyer le message. Vérifiez la configuration du serveur." }, { status: 500 });
  }
}
