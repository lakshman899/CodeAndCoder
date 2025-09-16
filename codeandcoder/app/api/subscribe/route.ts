import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, recaptchaToken } = body;

    console.log("Received contact form data:", { name, email, subject, message, recaptchaToken });

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lakshmanchandra899@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD || "kczn yfjq ngmq jimc",
      },
    });

    // Test SMTP connection
    await transporter.verify();
    console.log("SMTP connection verified");

    // Handle newsletter subscription (only email provided)
    if (email && !name && !subject && !message && !recaptchaToken) {
      if (!email) {
        console.log("Email missing for newsletter subscription");
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
      }

      await transporter.sendMail({
        from: "lakshmanchandra899@gmail.com",
        replyTo: email,
        to: "lakshmanchandra899@gmail.com",
        subject: "New Newsletter Subscription",
        text: `A new subscriber has joined: ${email}`,
        html: `<p>A new subscriber has joined:</p><h3>${email}</h3>`,
      });

      console.log("Newsletter subscription email sent successfully");
      return NextResponse.json({ message: "Subscription successful" }, { status: 200 });
    }

    // Handle contact form submission
    if (!name || !email || !subject || !message || !recaptchaToken) {
      console.log("Missing fields for contact form:", { name, email, subject, message, recaptchaToken });
      return NextResponse.json({ error: "All fields are required for contact form" }, { status: 400 });
    }

    // Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || "6LfPLckrAAAAAMF9vIVvMiFlN7FWq5JphIed0Es2";
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const recaptchaResult = await recaptchaResponse.json();
    console.log("reCAPTCHA verification result:", recaptchaResult);

    if (!recaptchaResult.success) {
      console.log("reCAPTCHA verification failed:", recaptchaResult["error-codes"]);
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
    }

    // Send contact form email
    await transporter.sendMail({
      from: "lakshmanchandra899@gmail.com",
      replyTo: email,
      to: "lakshmanchandra899@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        New contact form submission:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Contact form email sent successfully");
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error.message, error);
    return NextResponse.json({ error: `Error sending email: ${error.message}` }, { status: 500 });
  }
}