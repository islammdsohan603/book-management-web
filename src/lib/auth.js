import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { emailOTP } from "better-auth/plugins";
import nodemailer from "nodemailer";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("booksUsers");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: false,
  },

  plugins: [
    emailOTP({
      overrideDefaultEmailVerification: true,
      sendVerificationOnSignUp: true,
      async sendVerificationOTP({ email, otp, type }) {
        if (type !== "email-verification") return;

        try {
          await transporter.sendMail({
            from: `"BookVerse" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Verify your email - BookVerse",
            html: `...`,
          });
          console.log(`Successfully sent OTP code to ${email}`);
        } catch (error) {
          console.error("Nodemailer failed to send email:", error);
          throw new Error("Failed to send verification email.");
        }
      },
    }),
  ],
});
