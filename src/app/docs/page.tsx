"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  BookOpen,
  Code2,
  KeyRound,
  Mic,
  Brain,
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

const sections = [
  {
    icon: Rocket,
    title: "Quickstart",
    description: "Talk to Golpo in 60 seconds, from web or terminal.",
    href: "#quickstart",
  },
  {
    icon: Brain,
    title: "Memory model",
    description: "How memories are extracted, stored, and retrieved.",
    href: "#memory",
  },
  {
    icon: Mic,
    title: "Voice mode",
    description: "Realtime voice with custom voices and interruptions.",
    href: "#voice",
  },
  {
    icon: Code2,
    title: "API reference",
    description: "Endpoints, schemas, and streaming response formats.",
    href: "#api",
  },
  {
    icon: KeyRound,
    title: "Authentication",
    description: "API keys, OAuth, and per-user access tokens.",
    href: "#auth",
  },
  {
    icon: BookOpen,
    title: "Concepts",
    description: "Personas, channels, sessions, and the memory graph.",
    href: "#concepts",
  },
];

const apiTable = [
  { method: "POST", path: "/v1/talk", desc: "Start or continue a streaming conversation" },
  { method: "GET", path: "/v1/memory", desc: "List memory entries for the current user" },
  { method: "POST", path: "/v1/memory", desc: "Insert a new memory entry manually" },
  { method: "DELETE", path: "/v1/memory/:id", desc: "Permanently remove a memory entry" },
  { method: "POST", path: "/v1/voice/session", desc: "Open a realtime voice session" },
  { method: "GET", path: "/v1/personas", desc: "List available companion personas" },
];

export default function DocsPage() {
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
                Documentation
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                Build with{" "}
                <span className="text-purple-400">Golpo.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                Everything you need to embed a companion in your product —
                from a 60-second quickstart to the full memory model and
                streaming voice protocol.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section grid */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {sections.map((s, i) => (
                <motion.a
                  key={s.title}
                  href={s.href}
                  {...stagger(i)}
                  className="group bg-[#000000] hover:bg-white/[0.02] transition-colors p-8 block"
                >
                  <s.icon className="h-6 w-6 text-purple-400" />
                  <div className="mt-5 text-lg font-semibold text-white flex items-center gap-2">
                    {s.title}
                    <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {s.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section id="quickstart" className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Quickstart
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Talk to Golpo in 60 seconds.
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Install the SDK, pass an API key, send a message. That is
                the whole quickstart.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="border border-white/[0.08] bg-[#0a0a0a]"
            >
              <div className="border-b border-white/[0.06] px-4 py-3 text-xs font-mono text-zinc-500">
                terminal
              </div>
              <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed font-mono text-zinc-300">
                <code>
                  <span className="text-zinc-500">{"# 1. Install"}</span>
                  {"\n"}
                  <span className="text-purple-400">$</span> npm install{" "}
                  <span className="text-emerald-400">@golpo/sdk</span>
                  {"\n\n"}
                  <span className="text-zinc-500">{"# 2. Set your key"}</span>
                  {"\n"}
                  <span className="text-purple-400">$</span> export{" "}
                  <span className="text-sky-300">GOLPO_API_KEY</span>=
                  <span className="text-emerald-400">sk_live_...</span>
                  {"\n\n"}
                  <span className="text-zinc-500">{"# 3. Run"}</span>
                  {"\n"}
                  <span className="text-purple-400">$</span> golpo talk{" "}
                  <span className="text-emerald-400">
                    {'"How was your day?"'}
                  </span>
                </code>
              </pre>
            </motion.div>
          </div>
        </section>

        {/* API reference */}
        <section id="api" className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-12 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                API Reference
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Six endpoints. That is the whole API.
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="border border-white/[0.08] bg-white/[0.02] overflow-hidden"
            >
              <div className="grid grid-cols-[80px_1fr_1.5fr] text-[11px] font-mono uppercase tracking-wider text-zinc-500 border-b border-white/[0.06] px-6 py-3">
                <div>Method</div>
                <div>Path</div>
                <div>Description</div>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {apiTable.map((r) => (
                  <div
                    key={r.path + r.method}
                    className="grid grid-cols-[80px_1fr_1.5fr] items-center px-6 py-4 text-sm hover:bg-white/[0.02]"
                  >
                    <div className="font-mono text-xs text-purple-400">
                      {r.method}
                    </div>
                    <div className="font-mono text-xs text-zinc-200">
                      {r.path}
                    </div>
                    <div className="text-zinc-500">{r.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              {...fadeUp}
              className="border border-white/[0.08] bg-white/[0.02] p-12 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Need something custom?
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
                We work with a small number of partners on bespoke
                companions for healthcare, education, and language
                preservation.
              </p>
              <Link
                href="/about#contact"
                className="mt-8 inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
