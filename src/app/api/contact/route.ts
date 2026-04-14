import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, company, message } = body as {
    name: string;
    email: string;
    company: string;
    message: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Scalera Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      company ? `Unternehmen: ${company}` : null,
      "",
      "Nachricht:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #0ea5e9;">Neue Kontaktanfrage</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">E-Mail</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding: 8px 0; color: #666;">Unternehmen</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
        </table>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
