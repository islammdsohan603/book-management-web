'use client';

import { useState } from "react";
import { Eye, EyeSlash } from '@gravity-ui/icons';
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function GetStartedPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // OTP ভ্যালিডেশনের জন্য নতুন স্টেটসমূহ
  const [step, setStep] = useState("signup"); // 'signup' অথবা 'otp'
  const [otpCode, setOtpCode] = useState("");
  const [userEmail, setUserEmail] = useState(""); // OTP ভেরিফাই করার জন্য ইমেইলটি মনে রাখা প্রয়োজন

  const router = useRouter();

  // ১. সাইনআপ ফর্ম সাবমিট হ্যান্ডলার
  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const users = Object.fromEntries(formData);
    setUserEmail(users.email);

    try {

      const { data, error } = await authClient.signUp.email({
        name: users.name,
        email: users.email,
        password: users.password,
        image: users.image
      });

      if (error) {
        toast.error(error.message || "Sign up failed!");
        setIsSubmitting(false);
        return;
      }

      if (data) {
        toast.success("A 6-digit OTP has been sent to your email!");
        setStep("otp"); // সফল হলে OTP ফিল্ড দেখাবে
      }
    } catch (err) {
      toast.error("Internal Server Error!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ২. OTP কোড সাবমিট হ্যান্ডলার
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otpCode.length !== 6) {
      toast.error("Please enter a valid 6-digit code.");
      return;
    }
    setIsSubmitting(true);

    try {
      const { data, error } = await authClient.emailOtp.verifyEmail({
        email: userEmail,
        otp: otpCode,
      });

      if (error) {
        toast.error(error.message || "Invalid OTP code. Try again!");
        setIsSubmitting(false);
        return;
      }

      // ভেরিফিকেশন সফল হলে লগইন পেজে নিয়ে যাবে
      toast.success("Email verified successfully! Please sign in.");
      router.push("/signin");
    } catch (err) {
      toast.error("Verification failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12 text-white antialiased">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[128px]" />

      <AnimatePresence mode="wait">
        {step === "signup" ? (
          /* ================= SIGNUP FORM ================= */
          <motion.div
            key="signup-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl"
          >
            <h1 className="text-3xl font-bold text-center mb-1 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Create a New Account
            </h1>
            <p className="text-center text-sm text-slate-400 mb-8">Join us to explore new opportunities</p>

            <form onSubmit={handleSignUp} className="space-y-5">
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-slate-300">Name <span className="text-red-500">*</span></label>
                <input type="text" name="name" placeholder="Enter your name" required className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-blue-500 focus:outline-none placeholder:text-slate-500" />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-slate-300">Email <span className="text-red-500">*</span></label>
                <input type="email" name="email" placeholder="Enter your email" required className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-blue-500 focus:outline-none placeholder:text-slate-500" />
              </div>

              {/* Password */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-slate-300">Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" required className="w-full px-4 py-2.5 pr-11 rounded-xl bg-slate-950 border border-white/10 focus:border-blue-500 focus:outline-none placeholder:text-slate-500" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"><motion.div>{showPassword ? <EyeSlash /> : <Eye />}</motion.div></button>
                </div>
              </div>

              {/* Photo URL */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-slate-300">Photo URL <span className="text-red-500">*</span></label>
                <input type="url" name="image" placeholder="Enter your photo url" required className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-blue-500 focus:outline-none placeholder:text-slate-500" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full mt-2 bg-blue-600 py-2.5 rounded-xl text-base font-semibold hover:bg-blue-500 disabled:bg-blue-800 transition-all flex items-center justify-center gap-2">
                {isSubmitting ? "Sending OTP..." : "SignUp"}
              </button>
            </form>
          </motion.div>
        ) : (
          /* ================= OTP VERIFICATION FORM ================= */
          <motion.div
            key="otp-card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl"
          >
            <h1 className="text-3xl font-bold text-center mb-1 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Verify Your Email
            </h1>
            <p className="text-center text-sm text-slate-400 mb-8">
              We've sent a 6-digit verification code to <span className="text-blue-400 font-medium">{userEmail}</span>
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-slate-300 text-center">Enter 6-Digit OTP Code</label>
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="0 0 0 0 0 0"
                  required
                  className="w-full tracking-[1em] text-center text-xl font-bold px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-purple-500 focus:outline-none placeholder:tracking-normal placeholder:text-slate-600"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-purple-600 py-2.5 rounded-xl text-base font-semibold hover:bg-purple-500 disabled:bg-purple-800 transition-all">
                {isSubmitting ? "Verifying..." : "Verify & Login"}
              </button>

              <button type="button" onClick={() => setStep("signup")} className="w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors">
                ← Back to SignUp
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}