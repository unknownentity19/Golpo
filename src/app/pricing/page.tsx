"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description:
      "Everything you need to meet your companion and start a relationship.",
    features: [
      "Unlimited text conversations",
      "30-day rolling memory",
      "1 companion personality",
      "5 languages",
      "Web app",
    ],
    cta: "Start free",
    href: "/sign-up",
    accent: false,
  },
  {
    name: "Companion",
    price: "$12",
    cadence: "per month",
    description:
      "The full Golpo. Persistent memory, voice mode, and a companion that goes everywhere with you.",
    features: [
      "Everything in Free",
      "Persistent long-term memory",
      "Realtime voice mode",
      "3 companion personalities",
      "40+ languages",
      "iOS + Android + Web",
      "WhatsApp, Discord, Slack",
    ],
    cta: "Get Companion",
    href: "/sign-up",
    accent: true,
  },
  {
    name: "Family",
    price: "$24",
    cadence: "per month",
    description:
      "For up to 5 people who want their own private companions, billed together.",
    features: [
      "Everything in Companion",
      "Up to 5 separate accounts",
      "Per-person private memory",
      "Shared family billing",
      "Priority support",
    ],
    cta: "Choose Family",
    href: "/sign-up",
    accent: false,
  },
];

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel from Settings at any time. Your paid features stay active until the end of the billing cycle.",
  },
  {
    q: "What happens to my memory if I downgrade?",
    a: "Nothing is deleted. You'll just see the most recent 30 days in conversation. Upgrade again and your full memory comes back.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes — 50% off Companion with a verified student email. Email us from a .edu address.",
  },
  {
    q: "Is there an annual plan?",
    a: "Yes. Pay yearly and save 20%. The toggle appears at checkout.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Pricing
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] max-w-3xl mx-auto">
                Honest pricing for an{" "}
                <span className="text-purple-400">honest companion.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                One paid plan, one family plan, and a real free tier you can
                stay on forever. No usage caps, no surprise overages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p, i) => (
                <motion.div
                  key={p.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col p-8 ${
                    p.accent
                      ? "border border-purple-500/30 bg-purple-500/[0.04]"
                      : "border border-white/[0.06] bg-white/[0.02]"
                  }`}
                >
                  {p.accent && (
                    <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </div>
                  )}
                  <div className="text-sm font-semibold text-white">
                    {p.name}
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-sm text-zinc-500 font-mono">
                      {p.cadence}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3 text-sm text-zinc-300 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
                      p.accent
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "border border-white/[0.1] text-zinc-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-36">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div {...fadeUp} className="mb-12 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Pricing FAQ
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                The fine print, in plain words.
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="border border-white/[0.06] bg-white/[0.02] divide-y divide-white/[0.06]"
            >
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 hover:bg-white/[0.02] transition-colors">
                    <span className="text-sm md:text-base text-white font-medium">
                      {f.q}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
