
'use client';

import { useState } from "react";
import { Eye, EyeSlash } from '@gravity-ui/icons';
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";


export default function SignInPage() {

  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const onSubmit = async (e) => {

    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const users = Object.fromEntries(formData);

    try {

      const { data, error } = await authClient.signIn.email({

        email: users.email,
        password: users.password,

      });


      await new Promise((resolve) => setTimeout(resolve, 1000));


      if (error) {
        console.error('Server Error:', error);
        toast.error(error.message || "Something went wrong! Server Error.");
        setIsSubmitting(false);
        return;
      }

      if (data) {
        console.log('SignUp Successful:', data);
        toast.success("Account LogIn successfully!");

        router.refresh();
        router.push("/");
      }

    } catch (err) {

      console.error("Network or Runtime Exception:", err);
      toast.error("Internal Server Error or Network Timeout!");
    }

  }

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12 text-white antialiased overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[128px]" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl"
      >
        <h1 className="text-3xl font-bold text-center mb-1 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Create a New Account
        </h1>
        <p className="text-center text-sm text-slate-400 mb-8">Join us to explore new opportunities</p>

        <form onSubmit={onSubmit} className="space-y-5">



          {/* Email Field */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors placeholder:text-slate-500"
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2.5 pr-11 rounded-xl bg-slate-950 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none"
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </button>
            </div>
          </div>



          {/* SignUp Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full mt-2 relative overflow-hidden bg-blue-600 py-2.5 rounded-xl text-base font-semibold cursor-pointer hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed duration-200 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Creating Account...</span>
              </>
            ) : (
              "LogIn"
            )}
          </motion.button>

          {/* Divider */}
          <div className="py-2 flex items-center">
            <div className="h-px flex-1 bg-white/10" />
            <span className="px-3 text-xs font-medium uppercase tracking-wider text-slate-500">
              OR
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-slate-400">
            Already have an account?
            <Link href={'/get-started'}>
              <span className="ml-2 cursor-pointer font-medium text-blue-400 hover:text-blue-300 transition-colors underline-offset-4 hover:underline">
                SignUP
              </span>
            </Link>
          </div>

        </form>
      </motion.div>
    </section>
  );
}
