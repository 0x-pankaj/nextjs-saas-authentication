import nodemailer from "nodemailer";
import { welcomeEmailTemplate, paymentSuccessTemplate } from "./mail-templates";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Welcome to Our Platform!",
      html: welcomeEmailTemplate(name || email),
    });
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
}

export async function sendPaymentSuccessEmail(
  email: string,
  name: string,
  amount: number,
  plan: string
) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Payment Successful!",
      html: paymentSuccessTemplate(name || email, amount, plan),
    });
  } catch (error) {
    console.error("Failed to send payment success email:", error);
    throw error;
  }
}

// Re-export other email functions
export { sendVerificationEmail, sendPasswordResetEmail } from "./mail";