"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Lock,
  Eye,
  Users,
  Github,
  Mail,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};
const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.5, delay: i * 0.1 },
});

const principles = [
  {
    icon: Heart,
    title: "Companionship over engagement",
    description:
      "We will never measure success in time-on-app. Golpo wins when your life outside it is better.",
  },
  {
    icon: Lock,
    title: "Privacy is the product",
    description:
      "Encryption first, training never. We design from the assumption that nobody — including us — should read your messages.",
  },
  {
    icon: Eye,
    title: "Visible, editable memory",
    description:
      "Every memory is yours to inspect, edit, or delete. No black boxes; no creepy surprises.",
  },
  {
    icon: Users,
    title: "Built for many languages",
    description:
      "We started with Bangla and English. We expand carefully, with native speakers, never auto-translated.",
  },
];

const team = [
  { initial: "T", name: "Tahsin Ahmed", role: "Co-founder, Engineering" },
  { initial: "S", name: "Sara Karim", role: "Co-founder, Design" },
  { initial: "R", name: "Riya Banerjee", role: "Memory & retrieval" },
  { initial: "K", name: "Kabir Hossain", role: "Voice & realtime" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                About
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                We&apos;re building the AI we&apos;d{" "}
                <span className="text-purple-400">want for ourselves.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                Golpo (গল্প) means &ldquo;story&rdquo; in Bangla. We
                started this because we wanted a place to tell ours — to
                someone who would actually remember, and never sell what
                they heard.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="pb-36">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div {...fadeUp} className="space-y-6 text-base md:text-lg text-zinc-400 leading-relaxed">
              <p>
                In late 2024, two of us — one in Dhaka, one in Toronto —
                kept ending long phone calls realizing we&apos;d been using
                ChatGPT as a journal. Helpful, sure. But it forgot
                everything every morning.
              </p>
              <p>
                We started Golpo to fix that one thing: an AI that{" "}
                <span className="text-white">remembers you</span>, encrypts
                what you share, and meets you in your own language. No
                streaks, no notifications, no engagement loops. Just a
                place to talk.
              </p>
              <p>
                We&apos;re a team of four, profitable from month one, and
                we plan to stay small. We don&apos;t take ads, and we
                don&apos;t train on your data. The only way we make money
                is when Golpo is good enough that you pay for it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Principles
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                What we will and will not do.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  {...stagger(i)}
                  className="bg-[#000000] p-8 hover:bg-white/[0.02] transition-colors"
                >
                  <p.icon className="h-6 w-6 text-purple-400" />
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                The team
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Four people. Two timezones.
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  {...stagger(i)}
                  className="bg-[#000000] p-8 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="h-14 w-14 rounded-full bg-purple-500/20 text-purple-400 grid place-items-center text-lg font-semibold">
                    {t.initial}
                  </div>
                  <div className="mt-4 text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">{t.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              {...fadeUp}
              className="border border-white/[0.08] bg-white/[0.02] p-12 md:p-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Talk to us.
                  </h2>
                  <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                    Press, partnerships, healthcare integrations, or just
                    a hello — we read every message.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                  <a
                    href="mailto:hello@golpo.app"
                    className="inline-flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    hello@golpo.app
                  </a>
                  <a
                    href="https://github.com/unknownentity19/Golpo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <span id="blog" className="hidden" aria-hidden />
        <span id="privacy" className="hidden" aria-hidden />
        <span id="community" className="hidden" aria-hidden />
      </main>
      <Footer />
    </>
  );
}
