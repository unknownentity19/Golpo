# Golpo — Your AI Companion

Static HTML marketing site for **Golpo**, an AI companion that listens, remembers, and grows with you.

Pure HTML, CSS, and a single vanilla JS file. No build step, no package manager, no framework dependencies on your machine. Tailwind CSS, Lucide icons, and Geist fonts are all loaded from public CDNs at runtime.

## Run it

The site uses absolute paths (`/assets/...`, `/logo.svg`, etc.) and includes folder-style routes (`/features/`, `/pricing/`, ...), so you need to serve it from a directory root. Any of these work:

```bash
# Python (built-in, no install)
python3 -m http.server 8000

# Node (if you have it)
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`.

> Opening `index.html` directly with `file://` will load the home page, but cross-page links and the dynamic header/footer may not work because of browser CORS rules on `file://`. Use a local server.

## Project layout

```
.
├── index.html              # Home — all 10 sections
├── features/index.html     # Grouped feature breakdown
├── pricing/index.html      # 3 plans, middle accented purple
├── docs/index.html         # Section grid, quickstart, API table
├── changelog/index.html    # 6 release entries
├── about/index.html        # Story, principles, team, contact
├── chat/index.html         # Full-bleed companion product surface
├── sign-in/index.html
├── sign-up/index.html
├── forgot-password/index.html
├── assets/
│   ├── header.html         # Header partial — fetched by site.js
│   ├── footer.html         # Footer partial — fetched by site.js
│   ├── site.css            # Globals: selection, scrollbar, fade reveal, sliders
│   └── site.js             # Mobile menu, dropdowns, FAQ, code tabs, chat composer
├── logo.svg
└── logos/                  # Integration + AI model logos
    ├── openai.svg
    ├── anthropic.svg
    ├── gemini.svg
    ├── llama.svg
    ├── whatsapp.svg
    ├── discord.svg
    ├── telegram.svg
    ├── slack.svg
    ├── notion.svg
    └── apple.svg
```

## Stack

| | |
|---|---|
| **Markup** | Plain HTML5, no templating |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) via the browser CDN — `https://unpkg.com/@tailwindcss/browser@4` |
| **Icons** | [Lucide](https://lucide.dev) via UMD CDN — `<i data-lucide="brain">` |
| **Fonts** | Geist Sans + Geist Mono via Google Fonts |
| **Animations** | Custom IntersectionObserver-based fade-up — replaces framer-motion |
| **JS** | One ~140-line vanilla script — handles header/footer injection, mobile menu, dropdowns, code tabs, FAQ chevrons, personality sliders, and the chat composer |

## Design tokens

Identical to the original spec.

- Background: pure black `#000000`
- Body text: `zinc-400`, headings: white, muted: `zinc-500`/`zinc-600`
- Accent: `purple-400` (text), `purple-500` (border/dot), `purple-600` (CTA), `purple-700` (CTA hover)
- Success: `emerald-400`
- Borders: `white/[0.06]`, `white/[0.08]`, `white/[0.1]` on hover
- Card surface: `bg-white/[0.02]`, hover `bg-white/[0.04]`
- Selection: `rgba(168, 85, 247, 0.3)` on `#fff`
- **Square edges everywhere** except small chips/pills (`rounded-full`) and avatars

## Browser support

Modern evergreen browsers. Uses `IntersectionObserver`, `fetch`, native `<details>`, and `backdrop-filter`.
