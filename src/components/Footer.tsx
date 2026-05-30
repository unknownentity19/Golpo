import Link from "next/link";
import { Github } from "lucide-react";

const productLinks = [
  { href: "/chat", label: "Companion" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "#", label: "Voice Mode", disabled: true },
  { href: "#", label: "Mobile App", disabled: true },
];

const resourceLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/changelog", label: "Changelog" },
  { href: "#", label: "API Reference", disabled: true },
  { href: "#", label: "Community", disabled: true },
  { href: "#", label: "Status", disabled: true },
];

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "#", label: "Privacy", disabled: true },
  { href: "#", label: "Terms", disabled: true },
  { href: "#", label: "Cookies", disabled: true },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#000000] mt-auto">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Golpo" width={120} height={46} />
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Your AI companion. Listens, remembers, and grows with you —
              one conversation at a time.
            </p>
            <a
              href="https://github.com/unknownentity19/Golpo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Golpo on GitHub"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.15] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4">
              Product
            </div>
            <ul className="flex flex-col gap-3">
              {productLinks.map((l) =>
                l.disabled ? (
                  <li
                    key={l.label}
                    className="text-sm text-zinc-600 cursor-default"
                  >
                    {l.label}
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4">
              Resources
            </div>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((l) =>
                l.disabled ? (
                  <li
                    key={l.label}
                    className="text-sm text-zinc-600 cursor-default"
                  >
                    {l.label}
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4">
              Legal
            </div>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((l) =>
                l.disabled ? (
                  <li
                    key={l.label}
                    className="text-sm text-zinc-600 cursor-default"
                  >
                    {l.label}
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between text-xs text-zinc-600">
          <div>© {new Date().getFullYear()} Golpo. All rights reserved.</div>
          <div>Made with care, for the conversations that matter.</div>
        </div>
      </div>
    </footer>
  );
}
