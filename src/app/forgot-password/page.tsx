"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="Golpo" width={120} height={46} />
              </Link>
              <h1 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-white">
                Forgot your password?
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                Enter your email and we&apos;ll send a reset link. Your
                memories stay safe.
              </p>
            </div>

            <form className="flex flex-col gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 block">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full bg-white/[0.04] border border-white/[0.08] pl-10 pr-3 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/40 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
              >
                Send reset link
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-zinc-500 flex justify-between">
              <Link
                href="/sign-in"
                className="text-purple-400 hover:text-purple-300"
              >
                Back to sign in
              </Link>
              <Link
                href="/sign-up"
                className="text-zinc-500 hover:text-zinc-300"
              >
                Create account
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
