"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Sparkles,
  CreditCard,
  Mic,
  BookOpen,
  GitBranch,
  Code2,
  Users,
  Building2,
  Newspaper,
  Shield,
  Mail,
  ChevronDown,
} from "lucide-react";

type MenuItem = {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const productItems: MenuItem[] = [
  {
    href: "/chat",
    label: "Companion",
    description: "Open the chat surface",
    icon: MessageCircle,
  },
  {
    href: "/features",
    label: "Features",
    description: "Memory, voice, and more",
    icon: Sparkles,
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Simple, fair plans",
    icon: CreditCard,
  },
  {
    href: "/features#voice",
    label: "Voice Mode",
    description: "Talk in real time",
    icon: Mic,
  },
];

const resourceItems: MenuItem[] = [
  {
    href: "/docs",
    label: "Docs",
    description: "Guides and concepts",
    icon: BookOpen,
  },
  {
    href: "/changelog",
    label: "Changelog",
    description: "What is new",
    icon: GitBranch,
  },
  {
    href: "/docs#api",
    label: "API Reference",
    description: "Embed Golpo in any app",
    icon: Code2,
  },
  {
    href: "/about#community",
    label: "Community",
    description: "Join the conversation",
    icon: Users,
  },
];

const companyItems: MenuItem[] = [
  {
    href: "/about",
    label: "About",
    description: "Our story and mission",
    icon: Building2,
  },
  {
    href: "/about#blog",
    label: "Blog",
    description: "Notes from the team",
    icon: Newspaper,
  },
  {
    href: "/about#privacy",
    label: "Privacy",
    description: "How we protect you",
    icon: Shield,
  },
  {
    href: "/about#contact",
    label: "Contact",
    description: "Reach the team",
    icon: Mail,
  },
];

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: MenuItem[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors h-14"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full -translate-x-1/2 w-72 rounded-xl border border-white/[0.08] bg-[#0a0a0a]/98 backdrop-blur-xl p-2 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-3 rounded-lg p-3 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-purple-500/10 border border-purple-500/20">
                    <item.icon className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white">
                      {item.label}
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-white/[0.08] bg-[#000000]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex h-full items-center justify-between">
        {/* Left: logo */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Golpo" width={120} height={46} />
        </Link>

        {/* Center: desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Dropdown label="Product" items={productItems} />
          <Dropdown label="Resources" items={resourceItems} />
          <Dropdown label="Company" items={companyItems} />
        </nav>

        {/* Right: desktop auth */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 border border-white/[0.1] px-4 py-2 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((s) => !s)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center text-zinc-300 hover:text-white"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-14 bg-[#000000] md:hidden z-40 overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col h-full">
              <div className="flex flex-col gap-8">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                    Product
                  </div>
                  <div className="flex flex-col gap-3">
                    {productItems.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-base text-zinc-300 hover:text-white"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                    Resources
                  </div>
                  <div className="flex flex-col gap-3">
                    {resourceItems.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-base text-zinc-300 hover:text-white"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                    Company
                  </div>
                  <div className="flex flex-col gap-3">
                    {companyItems.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-base text-zinc-300 hover:text-white"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-12 flex flex-col gap-3">
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
