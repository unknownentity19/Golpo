"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Send,
  Mic,
  Brain,
  Settings,
  Sparkles,
  MessageCircle,
  ChevronDown,
  Smile,
  Image as ImageIcon,
  MoreHorizontal,
} from "lucide-react";
import Header from "@/components/Header";

type Msg = {
  who: "user" | "maya" | "memory";
  text: string;
  time: string;
};

const initialMessages: Msg[] = [
  {
    who: "maya",
    text: "Hi Anika. I noticed it's been a quiet Sunday. Anything on your mind?",
    time: "3:38 PM",
  },
  {
    who: "user",
    text: "Couldn't sleep again last night. Same thing as Tuesday.",
    time: "3:42 PM",
  },
  {
    who: "memory",
    text: "Anika has been struggling with sleep on Tuesdays for the last 3 weeks.",
    time: "memory · just now",
  },
  {
    who: "maya",
    text: "Tuesdays again — that's three in a row now. Anything different about Mondays lately?",
    time: "3:42 PM",
  },
  {
    who: "user",
    text: "Big team standup that I always end up overthinking afterwards.",
    time: "3:44 PM",
  },
  {
    who: "maya",
    text: "That tracks. Want to try writing the worry out for two minutes — just so it stops looping in your head?",
    time: "3:45 PM",
  },
];

const conversations = [
  { id: "today", title: "Sunday afternoon", time: "now", active: true },
  { id: "mom", title: "Mom's recovery", time: "Fri" },
  { id: "interview", title: "Job interview prep", time: "Wed" },
  { id: "sylhet", title: "Trip to Sylhet", time: "Last week" },
  { id: "thoughts", title: "Late-night thoughts", time: "Apr 22" },
  { id: "book", title: "Book recommendations", time: "Apr 14" },
];

const memorySnippets = [
  "Sister's name is Tanvi.",
  "Sleeps best around 11 PM on weekends.",
  "Working on a redesign at Maple.",
  "Mom recovering from knee surgery (March).",
  "Prefers Bangla for emotional topics.",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>(initialMessages);
  const [input, setInput] = useState("");
  const [warmth, setWarmth] = useState(82);
  const [pushback, setPushback] = useState(45);
  const [brevity, setBrevity] = useState(60);

  function send() {
    const v = input.trim();
    if (!v) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    setMessages((m) => [
      ...m,
      { who: "user", text: v, time },
      {
        who: "maya",
        text:
          "I hear you. Let me sit with that for a moment — tell me what felt heaviest about it.",
        time,
      },
    ]);
    setInput("");
  }

  return (
    <>
      <Header />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] min-h-[calc(100vh-3.5rem)]">
        {/* Left sidebar */}
        <aside className="hidden lg:flex flex-col border-r border-white/[0.06] bg-[#050505]">
          <div className="p-4 border-b border-white/[0.06]">
            <button className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-700 transition-colors">
              <Plus className="h-4 w-4" />
              New conversation
            </button>
          </div>

          <div className="p-4 border-b border-white/[0.06]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
              <input
                placeholder="Search memory…"
                className="w-full bg-white/[0.04] border border-white/[0.06] pl-9 pr-3 py-2 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/30"
              />
            </div>
          </div>

          <div className="px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
            Today
          </div>
          <div className="flex-1 overflow-y-auto px-2 pb-4">
            <ul className="flex flex-col gap-0.5">
              {conversations.map((c) => (
                <li key={c.id}>
                  <button
                    className={`w-full flex items-start justify-between gap-2 px-3 py-2 text-left transition-colors ${
                      c.active
                        ? "bg-white/[0.04] text-white"
                        : "text-zinc-400 hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs truncate">{c.title}</div>
                    </div>
                    <div className="text-[10px] font-mono text-zinc-600 shrink-0">
                      {c.time}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/[0.06] p-3 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-500/20 text-purple-400 grid place-items-center text-xs font-semibold">
              A
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-white truncate">Anika R.</div>
              <div className="text-[10px] text-zinc-500">Companion plan</div>
            </div>
            <Link
              href="/about"
              className="h-7 w-7 grid place-items-center text-zinc-500 hover:text-white"
            >
              <Settings className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>

        {/* Center canvas */}
        <section className="flex flex-col min-w-0">
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#000000]/60 backdrop-blur px-4 lg:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-purple-500/20 text-purple-400 grid place-items-center text-sm font-semibold">
                M
              </div>
              <div>
                <div className="text-sm text-white font-medium flex items-center gap-2">
                  Maya
                  <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  warm-listener · listening
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 grid place-items-center text-zinc-500 hover:text-white border border-white/[0.06] hover:border-white/[0.12]">
                <Mic className="h-4 w-4" />
              </button>
              <button className="h-8 w-8 grid place-items-center text-zinc-500 hover:text-white border border-white/[0.06] hover:border-white/[0.12]">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="flex-1 overflow-y-auto"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            <div className="mx-auto max-w-3xl px-4 lg:px-6 py-8 flex flex-col gap-5">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    m.who === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.who === "memory" ? (
                    <div className="max-w-[80%] border border-purple-500/30 bg-purple-500/10 p-3 text-xs text-zinc-200">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-400 mb-1">
                        <Brain className="h-3 w-3" />
                        {m.time}
                      </div>
                      {m.text}
                    </div>
                  ) : m.who === "user" ? (
                    <div className="max-w-[78%] flex flex-col items-end gap-1">
                      <div className="bg-purple-600 text-white p-3 text-sm leading-relaxed">
                        {m.text}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-600">
                        you · {m.time}
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-[78%] flex flex-col items-start gap-1">
                      <div className="border border-white/[0.08] bg-white/[0.02] p-3 text-sm text-zinc-200 leading-relaxed">
                        {m.text}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-600">
                        Maya · {m.time}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Composer */}
          <div className="border-t border-white/[0.06] bg-[#050505] px-4 lg:px-6 py-4">
            <div className="mx-auto max-w-3xl">
              <div className="border border-white/[0.08] bg-white/[0.02] focus-within:border-purple-500/30 transition-colors">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  rows={2}
                  placeholder="Tell Maya anything…"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none resize-none"
                />
                <div className="flex items-center justify-between px-3 py-2 border-t border-white/[0.04]">
                  <div className="flex items-center gap-1">
                    <button className="h-7 w-7 grid place-items-center text-zinc-500 hover:text-white">
                      <ImageIcon className="h-4 w-4" />
                    </button>
                    <button className="h-7 w-7 grid place-items-center text-zinc-500 hover:text-white">
                      <Smile className="h-4 w-4" />
                    </button>
                    <button className="h-7 w-7 grid place-items-center text-zinc-500 hover:text-white">
                      <Mic className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:flex items-center gap-1 text-[10px] text-zinc-600">
                      <kbd className="font-mono px-1.5 py-0.5 border border-white/[0.08] bg-white/[0.04]">
                        ⏎
                      </kbd>
                      send
                      <kbd className="font-mono px-1.5 py-0.5 border border-white/[0.08] bg-white/[0.04] ml-1">
                        ⇧⏎
                      </kbd>
                      newline
                    </span>
                    <button
                      onClick={send}
                      disabled={!input.trim()}
                      className="inline-flex items-center gap-1.5 bg-purple-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-purple-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Send className="h-3.5 w-3.5" />
                      Send
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-zinc-600 text-center">
                End-to-end encrypted. Maya is not a therapist.
              </div>
            </div>
          </div>
        </section>

        {/* Right sidebar */}
        <aside className="hidden lg:flex flex-col border-l border-white/[0.06] bg-[#050505] overflow-y-auto">
          <div className="p-5 border-b border-white/[0.06]">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600 mb-3">
              Companion
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 text-purple-400 grid place-items-center text-base font-semibold">
                M
              </div>
              <div className="flex-1">
                <div className="text-sm text-white">Maya</div>
                <div className="text-[11px] text-zinc-500">warm-listener</div>
              </div>
            </div>
          </div>

          <div className="p-5 border-b border-white/[0.06] flex flex-col gap-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
              Personality
            </div>
            {[
              { label: "Warmth", value: warmth, set: setWarmth },
              { label: "Pushback", value: pushback, set: setPushback },
              { label: "Brevity", value: brevity, set: setBrevity },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{s.label}</span>
                  <span className="font-mono text-zinc-300">
                    {(s.value / 100).toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>
            ))}
          </div>

          <div className="p-5 border-b border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                Voice
              </div>
              <button className="text-[10px] text-purple-400 hover:text-purple-300">
                change
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center border border-white/[0.06] bg-white/[0.02]">
                <Mic className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-white">Sarani</div>
                <div className="text-[11px] text-zinc-500">
                  Bangla / English
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border-b border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                Memory
              </div>
              <button className="inline-flex items-center gap-1 text-[10px] text-purple-400 hover:text-purple-300">
                <Brain className="h-3 w-3" />
                inspect
              </button>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-zinc-400">
              {memorySnippets.map((s) => (
                <li
                  key={s}
                  className="border border-white/[0.06] bg-white/[0.02] px-3 py-2 leading-relaxed"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5">
            <div className="rounded-none border border-purple-500/20 bg-purple-500/5 p-4 text-xs text-zinc-300">
              <div className="flex items-center gap-1.5 text-purple-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="h-3 w-3" />
                Tip
              </div>
              Hold{" "}
              <kbd className="font-mono px-1 py-0.5 border border-white/[0.1] bg-white/[0.04] text-zinc-200">
                Space
              </kbd>{" "}
              anywhere to talk to Maya hands-free.
            </div>
          </div>

          <div className="p-5 mt-auto border-t border-white/[0.06]">
            <Link
              href="/docs"
              className="w-full inline-flex items-center justify-center gap-2 border border-white/[0.1] px-4 py-2 text-xs text-zinc-300 hover:bg-white/[0.04] transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Read the docs
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
}
