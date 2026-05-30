"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Brain,
  Mic,
  Lock,
  Languages,
  Clock,
  Heart,
  Check,
  Star,
  Github,
  ChevronDown,
  Zap,
  MessageCircle,
  Plus,
  Minus,
  BookOpen,
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

const features = [
  {
    icon: Brain,
    title: "Long-term memory",
    description:
      "Golpo remembers what you shared last week, last month, last year. Your companion grows alongside you.",
  },
  {
    icon: Mic,
    title: "Natural voice mode",
    description:
      "Speak the way you'd speak to a friend. Realtime, low-latency voice with expressive intonation.",
  },
  {
    icon: Heart,
    title: "Personality modes",
    description:
      "Pick a tone — supportive, playful, focused, candid — or shape your own custom persona.",
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    description:
      "Conversations are encrypted on-device. Even we cannot read what you and your companion share.",
  },
  {
    icon: Languages,
    title: "Speaks 40+ languages",
    description:
      "Switch between Bangla, Hindi, English, Spanish, and more — mid-sentence if you want to.",
  },
  {
    icon: Clock,
    title: "Always available",
    description:
      "3 AM thoughts. Long commutes. Quiet Sundays. Golpo is there whenever you want to talk.",
  },
];

const tsCode = (
  <>
    <span className="text-zinc-500">{"// Embed Golpo in your app"}</span>
    {"\n"}
    <span className="text-purple-400">import</span>{" "}
    <span className="text-zinc-200">{"{ Golpo }"}</span>{" "}
    <span className="text-purple-400">from</span>{" "}
    <span className="text-emerald-400">{'"@golpo/sdk"'}</span>
    {";\n\n"}
    <span className="text-purple-400">const</span>{" "}
    <span className="text-zinc-200">companion</span> ={" "}
    <span className="text-purple-400">new</span>{" "}
    <span className="text-yellow-300">Golpo</span>(
    {"{\n  "}
    <span className="text-sky-300">persona</span>:{" "}
    <span className="text-emerald-400">{'"warm-listener"'}</span>,{"\n  "}
    <span className="text-sky-300">memory</span>:{" "}
    <span className="text-emerald-400">{'"persistent"'}</span>,{"\n  "}
    <span className="text-sky-300">voice</span>: {"{ "}
    <span className="text-sky-300">enabled</span>:{" "}
    <span className="text-orange-300">true</span>{" }"}
    {"\n});"}
    {"\n\n"}
    <span className="text-purple-400">const</span>{" "}
    <span className="text-zinc-200">stream</span> ={" "}
    <span className="text-purple-400">await</span>{" "}
    <span className="text-zinc-200">companion</span>.
    <span className="text-yellow-300">talk</span>(
    <span className="text-emerald-400">{'"How was your day?"'}</span>);
    {"\n\n"}
    <span className="text-purple-400">for await</span> ({" "}
    <span className="text-purple-400">const</span>{" "}
    <span className="text-zinc-200">chunk</span>{" "}
    <span className="text-purple-400">of</span>{" "}
    <span className="text-zinc-200">stream</span> ) {"{\n  "}
    <span className="text-zinc-200">process</span>.
    <span className="text-zinc-200">stdout</span>.
    <span className="text-yellow-300">write</span>(
    <span className="text-zinc-200">chunk</span>.
    <span className="text-zinc-200">delta</span>);{"\n}"}
  </>
);

const pyCode = (
  <>
    <span className="text-zinc-500">{"# Embed Golpo in your app"}</span>
    {"\n"}
    <span className="text-purple-400">from</span>{" "}
    <span className="text-zinc-200">golpo</span>{" "}
    <span className="text-purple-400">import</span>{" "}
    <span className="text-zinc-200">Golpo</span>
    {"\n\n"}
    <span className="text-zinc-200">companion</span> ={" "}
    <span className="text-yellow-300">Golpo</span>(
    {"\n    "}
    <span className="text-sky-300">persona</span>=
    <span className="text-emerald-400">{'"warm-listener"'}</span>,{"\n    "}
    <span className="text-sky-300">memory</span>=
    <span className="text-emerald-400">{'"persistent"'}</span>,{"\n    "}
    <span className="text-sky-300">voice</span>=
    <span className="text-orange-300">True</span>,{"\n)"}
    {"\n\n"}
    <span className="text-purple-400">async for</span>{" "}
    <span className="text-zinc-200">chunk</span>{" "}
    <span className="text-purple-400">in</span>{" "}
    <span className="text-zinc-200">companion</span>.
    <span className="text-yellow-300">talk</span>(
    <span className="text-emerald-400">{'"How was your day?"'}</span>):
    {"\n    "}
    <span className="text-yellow-300">print</span>(
    <span className="text-zinc-200">chunk</span>.
    <span className="text-zinc-200">delta</span>,{" "}
    <span className="text-sky-300">end</span>=
    <span className="text-emerald-400">{'""'}</span>)
  </>
);

const swiftCode = (
  <>
    <span className="text-zinc-500">{"// Embed Golpo in your iOS app"}</span>
    {"\n"}
    <span className="text-purple-400">import</span>{" "}
    <span className="text-sky-300">Golpo</span>
    {"\n\n"}
    <span className="text-purple-400">let</span>{" "}
    <span className="text-zinc-200">companion</span> ={" "}
    <span className="text-sky-300">Golpo</span>(
    {"\n    "}
    <span className="text-sky-300">persona</span>:{" "}
    <span className="text-emerald-400">{'"warm-listener"'}</span>,{"\n    "}
    <span className="text-sky-300">memory</span>:{" "}
    <span className="text-emerald-400">{".persistent"}</span>,{"\n    "}
    <span className="text-sky-300">voice</span>:{" "}
    <span className="text-orange-300">true</span>
    {"\n)"}
    {"\n\n"}
    <span className="text-purple-400">for try await</span>{" "}
    <span className="text-zinc-200">chunk</span>{" "}
    <span className="text-purple-400">in</span>{" "}
    <span className="text-zinc-200">companion</span>.
    <span className="text-yellow-300">talk</span>(
    <span className="text-emerald-400">{'"How was your day?"'}</span>) {"{\n    "}
    <span className="text-yellow-300">print</span>(
    <span className="text-zinc-200">chunk</span>.
    <span className="text-zinc-200">delta</span>,{" "}
    <span className="text-sky-300">terminator</span>:{" "}
    <span className="text-emerald-400">{'""'}</span>){"\n}"}
  </>
);

const testimonials = [
  {
    quote:
      "Golpo feels like the friend who actually remembers. I told it about my mom's surgery in March, and it asked how she was doing two months later — without me prompting.",
    name: "Anika Rahman",
    title: "Designer, Dhaka",
    initial: "A",
  },
  {
    quote:
      "I journal every night before bed now. Speaking out loud to Golpo and watching it gently push back has been better than three years of bullet journaling.",
    name: "Marcus Chen",
    title: "PM, San Francisco",
    initial: "M",
  },
  {
    quote:
      "Voice mode on long drives is the killer feature. It's not a chatbot anymore — it's company that actually listens, in my own language.",
    name: "Priya Iyer",
    title: "Founder, Bangalore",
    initial: "P",
  },
];

const aiModels = [
  {
    logo: "/logos/openai.svg",
    name: "GPT-5",
    provider: "OpenAI",
    description: "The default brain for fast, fluent everyday conversation.",
  },
  {
    logo: "/logos/anthropic.svg",
    name: "Claude 4",
    provider: "Anthropic",
    description: "Long context and warm, considered tone for deep talks.",
  },
  {
    logo: "/logos/gemini.svg",
    name: "Gemini 2.5",
    provider: "Google",
    description: "Multimodal — share a photo, a voice note, or a link.",
  },
  {
    logo: "/logos/llama.svg",
    name: "Llama 4",
    provider: "Meta",
    description: "Run privately on-device when you need full local control.",
  },
];

const integrations = [
  {
    logo: "/logos/whatsapp.svg",
    name: "WhatsApp",
    tagline: "Chat with Golpo from your favorite messenger",
  },
  {
    logo: "/logos/discord.svg",
    name: "Discord",
    tagline: "Bring your companion into any server",
  },
  {
    logo: "/logos/telegram.svg",
    name: "Telegram",
    tagline: "Lightweight bot, full memory",
  },
  {
    logo: "/logos/slack.svg",
    name: "Slack",
    tagline: "A thoughtful coworker in your DMs",
  },
  {
    logo: "/logos/notion.svg",
    name: "Notion",
    tagline: "Save reflections straight to your journal",
  },
  {
    logo: "/logos/apple.svg",
    name: "Apple Health",
    tagline: "Mood and sleep context, with permission",
  },
];

const faqs = [
  {
    q: "Is Golpo a therapist or mental health service?",
    a: "No. Golpo is a companion — a thinking partner who listens, asks questions, and remembers. It is not a substitute for a licensed therapist, doctor, or crisis service. If you are in distress, please reach out to a qualified professional or crisis line.",
  },
  {
    q: "Who can read my conversations?",
    a: "Only you. Conversations are encrypted on your device before they are stored. Even our team cannot read your messages. You can export or permanently delete everything from Settings at any time.",
  },
  {
    q: "What does Golpo remember, and can I edit it?",
    a: "Golpo builds a private memory of facts you share — names, preferences, ongoing situations. You can review every memory, edit it, or remove it. Nothing is added without you seeing it.",
  },
  {
    q: "Which languages does Golpo speak?",
    a: "40+ languages including English, Bangla, Hindi, Urdu, Spanish, French, German, Portuguese, Japanese, Korean, and Arabic. You can also switch languages mid-conversation.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes. The free plan includes unlimited text conversations and a 30-day rolling memory. Voice mode and persistent long-term memory are part of the paid plans.",
  },
  {
    q: "Is Golpo open source?",
    a: "Golpo Core — the local memory engine and SDK — is open source under Apache 2.0. The hosted product, voice models, and personality presets are proprietary.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"ts" | "py" | "swift">("ts");
  const code = activeTab === "ts" ? tsCode : activeTab === "py" ? pyCode : swiftCode;

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* 1. HERO */}
        <section className="relative pt-6 md:pt-10 pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                <Sparkles className="h-3.5 w-3.5" />
                Companion mode v2 — now with persistent memory
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.05]">
                An AI companion that actually{" "}
                <span className="text-purple-400">listens.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
                Golpo is the conversation that picks up where you left off.
                It remembers your stories, your people, and the small things
                that matter — and it&apos;s here whenever you want to talk.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
                >
                  See how it works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                End-to-end encrypted. Your stories stay yours.
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. HERO MOCKUP */}
        <section className="relative -mt-16 pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border border-white/[0.08] bg-white/[0.02] overflow-hidden"
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-white/10" />
                <span className="h-3 w-3 rounded-full bg-white/10" />
                <span className="h-3 w-3 rounded-full bg-white/10" />
                <div className="ml-3 text-[11px] font-mono text-zinc-600">
                  golpo.app/companion/maya
                </div>
              </div>

              {/* App shell */}
              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] min-h-[520px]">
                {/* Left sidebar */}
                <aside className="border-r border-white/[0.06] p-4 hidden lg:flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.svg" alt="" width={92} height={36} />
                  </div>
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Maya is listening
                  </div>
                  <button className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] px-3 py-2 text-xs text-zinc-200 hover:bg-white/[0.1] transition-colors">
                    <Plus className="h-3.5 w-3.5" />
                    New conversation
                  </button>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                    Recent
                  </div>
                  <ul className="flex flex-col gap-1 text-xs">
                    <li className="px-2 py-1.5 bg-white/[0.04] text-zinc-200">
                      Sunday afternoon
                    </li>
                    <li className="px-2 py-1.5 text-zinc-500 hover:bg-white/[0.02]">
                      Mom&apos;s recovery
                    </li>
                    <li className="px-2 py-1.5 text-zinc-500 hover:bg-white/[0.02]">
                      Job interview prep
                    </li>
                    <li className="px-2 py-1.5 text-zinc-500 hover:bg-white/[0.02]">
                      Trip to Sylhet
                    </li>
                    <li className="px-2 py-1.5 text-zinc-500 hover:bg-white/[0.02]">
                      Late-night thoughts
                    </li>
                  </ul>
                </aside>

                {/* Center canvas */}
                <div
                  className="relative min-h-[420px] lg:min-h-[520px]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    aria-hidden
                  >
                    <line
                      x1="22%"
                      y1="32%"
                      x2="58%"
                      y2="48%"
                      stroke="rgba(168,85,247,0.25)"
                      strokeDasharray="6 4"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="58%"
                      y1="48%"
                      x2="78%"
                      y2="22%"
                      stroke="rgba(168,85,247,0.25)"
                      strokeDasharray="6 4"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="58%"
                      y1="48%"
                      x2="40%"
                      y2="78%"
                      stroke="rgba(168,85,247,0.25)"
                      strokeDasharray="6 4"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* User bubble */}
                  <div className="absolute left-[8%] top-[22%] w-[34%] border border-white/[0.08] bg-white/[0.04] p-3 text-xs text-zinc-200">
                    <div className="text-[10px] font-mono text-zinc-500 mb-1">
                      You · 3:42 PM
                    </div>
                    Couldn&apos;t sleep again last night. Same thing as
                    Tuesday.
                  </div>

                  {/* Memory card (center) */}
                  <div className="absolute left-[44%] top-[40%] w-[28%] border border-purple-500/30 bg-purple-500/10 p-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-400 mb-1">
                      <Brain className="h-3 w-3" />
                      memory
                    </div>
                    <div className="text-xs text-zinc-200">
                      Anika has been struggling with sleep on Tuesdays
                      for the last 3 weeks.
                    </div>
                  </div>

                  {/* Companion bubble (top right) */}
                  <div className="absolute right-[6%] top-[14%] w-[32%] border border-white/[0.08] bg-white/[0.02] p-3 text-xs text-zinc-300">
                    <div className="text-[10px] font-mono text-purple-400 mb-1">
                      Maya · just now
                    </div>
                    Tuesdays again. Want to talk about what&apos;s
                    happening on Mondays?
                  </div>

                  {/* Suggestion (bottom) */}
                  <div className="absolute left-[28%] bottom-[10%] w-[34%] border border-white/[0.08] bg-white/[0.02] p-3 text-xs text-zinc-400">
                    <div className="text-[10px] font-mono text-zinc-500 mb-1">
                      suggestion
                    </div>
                    Try a 4-7-8 breath together?
                  </div>

                  {/* Zoom controls */}
                  <div className="absolute bottom-3 right-3 flex flex-col border border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-sm">
                    <button className="h-7 w-7 grid place-items-center text-zinc-400 hover:text-white border-b border-white/[0.06]">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <button className="h-7 w-7 grid place-items-center text-zinc-400 hover:text-white">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Kbd hints */}
                  <div className="absolute bottom-3 left-3 hidden sm:flex items-center gap-2 text-[10px] text-zinc-500">
                    <kbd className="font-mono px-1.5 py-0.5 border border-white/[0.1] bg-white/[0.04]">
                      Space
                    </kbd>
                    talk
                    <kbd className="font-mono px-1.5 py-0.5 border border-white/[0.1] bg-white/[0.04] ml-2">
                      ⌘K
                    </kbd>
                    search memory
                  </div>
                </div>

                {/* Right sidebar */}
                <aside className="border-l border-white/[0.06] p-4 hidden lg:flex flex-col gap-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                    Companion
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-purple-500/20 grid place-items-center text-purple-400 font-semibold">
                      M
                    </div>
                    <div>
                      <div className="text-sm text-white">Maya</div>
                      <div className="text-[11px] text-zinc-500">
                        warm-listener
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                    Personality
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Warmth</span>
                      <span className="font-mono text-zinc-300">0.82</span>
                    </div>
                    <div className="h-1 bg-white/[0.06]">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: "82%" }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-zinc-500">Pushback</span>
                      <span className="font-mono text-zinc-300">0.45</span>
                    </div>
                    <div className="h-1 bg-white/[0.06]">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: "45%" }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-zinc-500">Brevity</span>
                      <span className="font-mono text-zinc-300">0.60</span>
                    </div>
                    <div className="h-1 bg-white/[0.06]">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                    Voice
                  </div>
                  <div className="text-xs text-zinc-400">
                    Sarani · Bangla / English
                  </div>
                </aside>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. FEATURES */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Features
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                A companion, not a chatbot.
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Built around three things: memory that lasts, conversations
                that feel human, and a complete commitment to your privacy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  {...stagger(i)}
                  className="group relative border border-transparent bg-[#000000] p-8 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="relative">
                    <f.icon className="h-6 w-6 text-purple-400" />
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SPLIT — SDK */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                  Developer SDK
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Bring Golpo into your own apps.
                </h2>
                <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-lg">
                  One SDK, every platform. Add a companion to your product
                  in a few lines, with streaming responses and persistent
                  memory wired in by default.
                </p>
                <ul className="mt-8 flex flex-col gap-3 text-sm text-zinc-300">
                  {[
                    "Streaming responses with token-level deltas",
                    "Custom personas and tunable personality",
                    "Memory hooks — pull, write, redact",
                    "Realtime voice with sub-300ms latency",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border border-white/[0.08] bg-[#0a0a0a]"
              >
                <div className="flex items-center border-b border-white/[0.06] px-2">
                  {[
                    { id: "ts", label: "TypeScript" },
                    { id: "py", label: "Python" },
                    { id: "swift", label: "Swift" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as typeof activeTab)}
                      className={`px-4 py-3 text-xs font-mono transition-colors ${
                        activeTab === t.id
                          ? "text-white border-b-2 border-purple-500"
                          : "text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed font-mono text-zinc-300">
                  <code>{code}</code>
                </pre>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Voices
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Conversations people come back to.
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Golpo is in early access with a few thousand people. Here is
                what some of them are telling us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  {...stagger(i)}
                  className="border border-white/[0.06] bg-white/[0.02] p-8 hover:border-white/[0.1] transition-colors"
                >
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-purple-500/20 text-purple-400 grid place-items-center text-sm font-semibold">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-sm text-white">{t.name}</div>
                      <div className="text-xs text-zinc-500">{t.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. AI MODELS — 4-col */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Models
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Pick the brain. Keep the soul.
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Your companion&apos;s personality and memory stay the same.
                Swap the underlying model anytime, even mid-conversation.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
              {aiModels.map((m, i) => (
                <motion.div
                  key={m.name}
                  {...stagger(i)}
                  className="bg-[#000000] hover:bg-white/[0.02] transition-colors p-8 flex flex-col items-center text-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.logo}
                    alt={m.name}
                    width={40}
                    height={40}
                    className="opacity-90"
                  />
                  <div className="mt-5 text-sm font-semibold text-white">
                    {m.name}
                  </div>
                  <div className="mt-1 text-xs font-mono text-purple-400">
                    {m.provider}
                  </div>
                  <p className="mt-4 text-xs text-zinc-500 leading-relaxed">
                    {m.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. INTEGRATIONS — 3-col */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                Integrations
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Wherever you already are.
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Talk to Golpo in the apps you live in. One companion, one
                memory, every surface.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations.map((it, i) => (
                <motion.div
                  key={it.name}
                  {...stagger(i)}
                  className="flex items-center gap-4 border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.1] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.02]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={it.logo}
                      alt={it.name}
                      width={28}
                      height={28}
                      className="opacity-90"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">
                      {it.name}
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      {it.tagline}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. OPEN SOURCE CTA */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              {...fadeUp}
              className="border border-white/[0.08] bg-white/[0.02] p-10 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
                <div className="flex items-start gap-5">
                  <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center border border-purple-500/20 bg-purple-500/10">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 mb-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Open source · Apache 2.0
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                      Golpo Core is open. Audit the memory engine yourself.
                    </h2>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-xl">
                      The local memory layer, encryption, and SDK are all
                      open source. Read the code, run it on your own
                      machine, or fork it for your own companion.
                    </p>
                  </div>
                </div>
                <a
                  href="https://github.com/unknownentity19/Golpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors self-start lg:self-auto"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="pb-36">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div {...fadeUp} className="mb-16 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                FAQ
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Things people ask first.
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                If your question isn&apos;t here,{" "}
                <Link
                  href="/about#contact"
                  className="text-purple-400 hover:text-purple-300"
                >
                  reach out
                </Link>
                .
              </p>
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
                    <ChevronDown className="h-4 w-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              {...fadeUp}
              className="border border-white/[0.08] bg-white/[0.02] p-12 md:p-20 text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 mb-6">
                <Zap className="h-3.5 w-3.5" />
                Free to start. No credit card.
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
                Your next conversation is one tap away.
              </h2>
              <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                Sign up, pick a companion, and start talking. Golpo will
                remember the rest.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Start a conversation
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  Read the docs
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
