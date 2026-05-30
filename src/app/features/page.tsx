"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Mic,
  Heart,
  Lock,
  Languages,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  GitBranch,
  Image as ImageIcon,
  Bell,
  Layers,
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

const groups = [
  {
    eyebrow: "Memory",
    heading: "A memory you can actually trust.",
    description:
      "Every fact your companion learns is visible, editable, and yours to remove. Memory is the difference between a chatbot and a companion.",
    items: [
      {
        icon: Brain,
        title: "Persistent long-term memory",
        description:
          "Names, places, ongoing situations — all retained across sessions, devices, and years.",
      },
      {
        icon: Layers,
        title: "Episodic + semantic recall",
        description:
          "Golpo remembers both the moment and the meaning. Ask about Tuesday or about your sleep pattern.",
      },
      {
        icon: GitBranch,
        title: "Editable memory graph",
        description:
          "Open the memory inspector, audit every entry, edit phrasing, or wipe a topic in one click.",
      },
    ],
  },
  {
    eyebrow: "Conversation",
    heading: "Talk like you would to a friend.",
    description:
      "Voice, text, photos — Golpo meets you where you are and adjusts its tone to your mood and the moment.",
    items: [
      {
        icon: Mic,
        title: "Realtime voice",
        description:
          "Sub-300ms latency with natural intonation and graceful interruptions.",
      },
      {
        icon: Heart,
        title: "Adjustable personality",
        description:
          "Tune warmth, brevity, pushback, and humor. Save presets per situation.",
      },
      {
        icon: ImageIcon,
        title: "Multimodal context",
        description:
          "Drop a photo, share a voice note, paste a link — Golpo understands all three.",
      },
    ],
  },
  {
    eyebrow: "Trust",
    heading: "Privacy is the product.",
    description:
      "We designed Golpo so even we can't read your messages. Every choice in the stack starts here.",
    items: [
      {
        icon: Lock,
        title: "End-to-end encryption",
        description:
          "Conversations and memories are encrypted on-device with keys only you hold.",
      },
      {
        icon: ShieldCheck,
        title: "Zero training on your data",
        description:
          "Your messages never leave to train a model. Period. No opt-out needed.",
      },
      {
        icon: Bell,
        title: "Quiet by default",
        description:
          "Golpo doesn't ping you. It waits for you. Set check-ins only if you want them.",
      },
    ],
  },
  {
    eyebrow: "Everywhere",
    heading: "One companion, every surface.",
    description:
      "Web, iOS, Android, WhatsApp, Discord, Slack — same memory, same personality, same Golpo.",
    items: [
      {
        icon: Languages,
        title: "40+ languages",
        description:
          "Switch languages mid-sentence; Golpo follows along without losing the thread.",
      },
      {
        icon: Clock,
        title: "Offline mode",
        description:
          "On-device models keep core conversation working when you have no signal.",
      },
      {
        icon: Sparkles,
        title: "Beautiful, quiet UI",
        description:
          "No streaks, no badges, no engagement traps. Just a place to talk.",
      },
    ],
  },
];

export default function FeaturesPage() {
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
                Features
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                Everything you&apos;d expect from a friend who&apos;s{" "}
                <span className="text-purple-400">always around.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                Golpo is built around four ideas: real memory, real
                conversation, real privacy, and real availability. Here is
                how each one shows up in the product.
              </p>
            </motion.div>
          </div>
        </section>

        {groups.map((g) => (
          <section key={g.eyebrow} id={g.eyebrow.toLowerCase()} className="pb-36">
            <div className="mx-auto max-w-7xl px-6">
              <motion.div {...fadeUp} className="mb-16 max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                  {g.eyebrow}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {g.heading}
                </h2>
                <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                  {g.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
                {g.items.map((it, i) => (
                  <motion.div
                    key={it.title}
                    {...stagger(i)}
                    className="group relative bg-[#000000] hover:bg-white/[0.02] transition-colors p-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="relative">
                      <it.icon className="h-6 w-6 text-purple-400" />
                      <h3 className="mt-5 text-lg font-semibold text-white">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                        {it.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              {...fadeUp}
              className="border border-white/[0.08] bg-white/[0.02] p-12 md:p-20 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
                Ready to meet your companion?
              </h2>
              <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                Sign up free. Pick a personality. Start talking.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
                >
                  See pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
