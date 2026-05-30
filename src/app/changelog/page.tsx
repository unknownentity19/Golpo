"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const releases = [
  {
    version: "v2.4",
    date: "May 28, 2026",
    tag: "release",
    title: "Memory Inspector",
    notes: [
      "New visual graph for browsing every memory entry your companion holds.",
      "Per-topic memory wipe — remove a specific person, place, or theme in one click.",
      "Memory diff view: see what changed after each conversation.",
    ],
  },
  {
    version: "v2.3",
    date: "May 6, 2026",
    tag: "release",
    title: "Voice Mode 2 + Sarani voice",
    notes: [
      "Realtime voice latency dropped from 480ms to 280ms median.",
      "New default voice — Sarani, designed for warm, low-volume listening.",
      "Graceful interruption: you can cut Golpo off mid-sentence and it adapts.",
    ],
  },
  {
    version: "v2.2",
    date: "April 14, 2026",
    tag: "patch",
    title: "Bangla and Urdu fluency improvements",
    notes: [
      "Native-speaker review pass for Bangla, Urdu, and Hindi conversations.",
      "Code-switching between English and Bangla mid-sentence now feels natural.",
      "Bug fix: dates in Bangla numerals were being mis-parsed in memory entries.",
    ],
  },
  {
    version: "v2.1",
    date: "March 22, 2026",
    tag: "release",
    title: "WhatsApp companion",
    notes: [
      "Talk to your Golpo companion from inside WhatsApp.",
      "Same memory, same personality — just a different surface.",
      "End-to-end encryption preserved across the bridge.",
    ],
  },
  {
    version: "v2.0",
    date: "February 11, 2026",
    tag: "release",
    title: "Companion mode v2",
    notes: [
      "Persistent long-term memory is now generally available.",
      "Three personality presets: Warm Listener, Candid Friend, Focused Coach.",
      "New iOS and Android apps with offline core conversation.",
    ],
  },
  {
    version: "v1.0",
    date: "October 2, 2025",
    tag: "release",
    title: "Hello, world.",
    notes: [
      "Golpo enters public beta. Web app, English-only, 30-day rolling memory.",
      "Built by a tiny team that wanted a better way to talk to themselves at 3 AM.",
    ],
  },
];

const tagStyle: Record<string, string> = {
  release: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  patch: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
};

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Changelog
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                What we&apos;ve been{" "}
                <span className="text-purple-400">building.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                A running log of every Golpo release. We ship weekly, in
                small, careful steps.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Releases */}
        <section className="pb-36">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col">
              {releases.map((r, i) => (
                <motion.article
                  key={r.version}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                  className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10 border-t border-white/[0.06] py-10 first:border-t-0"
                >
                  <div className="flex flex-col gap-3">
                    <div className="font-mono text-xs text-zinc-500">
                      {r.date}
                    </div>
                    <div className="font-mono text-sm text-white">
                      {r.version}
                    </div>
                    <div
                      className={`inline-flex self-start items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                        tagStyle[r.tag] ?? tagStyle.release
                      }`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {r.tag}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {r.title}
                    </h2>
                    <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-400 leading-relaxed">
                      {r.notes.map((n, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-500" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
