import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      projectType,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !phone ||
      !projectType ||
      !message
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Email to Company

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form - ${name}`,

      html: `
      <h2>New Contact Form</h2>

      <table cellpadding="8" cellspacing="0" border="1">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Project Type</strong></td><td>${projectType}</td></tr>
      </table>

      <br/>

      <h3>Message</h3>

      <p>${message}</p>
      `,
    });

    // Auto Reply

    await transporter.sendMail({
      from: `"Radiant Vision" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Radiant Vision",

      html: `
      <h2>Hello ${name},</h2>

      <p>
      Thank you for contacting <strong>Radiant Vision</strong>.
      </p>

      <p>
      We have successfully received your inquiry regarding
      <strong>${projectType}</strong>.
      </p>

      <p>
      Our team will review your requirements and get back to you shortly.
      </p>

      <hr/>

      <p><strong>Your Message</strong></p>

      <p>${message}</p>

      <br/>

      <p>
      Regards,<br/>
      Radiant Vision Team
      </p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        message: "Unable to send message.",
      },
      {
        status: 500,
      }
    );
  }
}