# CLAUDE.md - asg-website

Guidance for Claude Code when working in this repo.

## What this is

Institutional website for **ASG** ("Alliance Scientifique pour une santé
Globale"), a One Health NGO/ASBL based in Lubumbashi, Haut-Katanga, DRC.
Single-page site (one route, anchor-link navigation, smooth scroll) with a
working light/dark theme toggle.

**This is a React rebuild of an existing static prototype**:
`../Alliance Scientifique pour une Santé Globale.html` (one level up from
this repo) is the source of truth for structure, copy and behaviour - every
section, in the same order, with the same French text verbatim, the same
light/dark theme mechanics, and the same (backend-less) join-request form
behaviour. If the client sends an updated version of that HTML file, diff it
against `src/constants/asg.js` and the components rather than assuming only
wording changed.

## Stack

- React 19 + Vite
- Tailwind CSS v4 via `@tailwindcss/vite` (config lives in `src/index.css` `@theme`, no `tailwind.config`)
- `lucide-react` for icons
- **No React Router** - this is intentionally a single page; don't add
  routing unless the client asks for additional pages.

## Commands

```bash
npm install
npm run dev      # localhost:5173
npm run build
npm run lint
npm run preview
```

## Branding

- **Blue `#074a8d` + green `#4f9a12`** (light theme) - sampled from the
  client's real logo (`src/assets/logo.png`, extracted from the prototype
  HTML's embedded base64 image). Dark theme uses lighter variants
  (`#6fb0ee` blue, `#8fd14b` green) for contrast on navy - see the token
  table below.
- Fonts: **Outfit** (`.font-display`, headings/nav/buttons) + **Public
  Sans** (body) - same pairing as the prototype.
- **Logo**: `src/assets/logo.png` has a baked-in white background, so
  `Logo.jsx` always wraps it in a white "chip" - don't drop that wrapper
  even on light backgrounds, it's there for when the logo later appears on
  a colored surface (e.g. if the header ever goes non-white).

## Theme (light/dark)

Follows the browser's `prefers-color-scheme` until the visitor explicitly
toggles it - exactly like the prototype's inline `<script>`, reimplemented
as `src/hooks/useTheme.js`:
- No explicit choice -> `@media (prefers-color-scheme: dark)` in
  `index.css` drives the palette.
- Explicit choice -> `[data-theme="light"|"dark"]` on `<html>` overrides it,
  persisted to `localStorage("asg-theme")`.

All color tokens are plain CSS custom properties on `:root`
(`--c-bg`, `--c-surface`, `--c-surface-2`, `--c-fg`, `--c-muted`,
`--c-line`, `--c-blue`, `--c-blue-ink`, `--c-green`, `--c-green-soft`),
re-exposed to Tailwind via `@theme` as `--color-bg`/`--color-surface`/etc.
(plus `--color-primary` = blue, `--color-secondary` = fg, `--color-soft-background`
= surface, for naming parity with sibling projects). Because the mapping is
one level of indirection through the CSS vars, every `bg-*`/`text-*`
Tailwind utility using these tokens is automatically theme-reactive - no
`dark:` variant classes needed anywhere, and `OneHealthDiagram.jsx`'s SVG
fills reference the raw `var(--c-blue)` etc. directly for the same reason.

## Structure & conventions

- `src/App.jsx` just assembles `NavBar` + one section component per `<section>`
  in the prototype + `Footer`, in the same order as the HTML.
- All copy lives in `src/constants/asg.js` (`org`, `navItems`, `hero`,
  `about`, `mission`, `domains`, `members`, `governance`, `resources`,
  `documents`, `joinCategories`) - this is official organisation content
  (team names, founding dates, legal filings, address), not placeholder
  text. Don't invent or alter facts here.
- `Eyebrow.jsx` is the small reusable green uppercase label used at the top
  of every section (matches `.eyebrow` in the prototype's CSS).
- `ContactSection.jsx` reimplements the prototype's join form exactly: it
  validates client-side, builds a plain-text recap, and offers "Copier la
  demande" (clipboard, with a text-selection fallback) - it does **not**
  submit anywhere. The note under the button ("Transmettez ce texte au
  bureau de l'ASG") is accurate, not a placeholder - there is no backend
  for this yet. Wire it to a real endpoint only if asked, and keep the
  recap/copy flow as a fallback.
- `scripts/generate-icons.py` (needs Pillow) derives the whole favicon/PWA
  icon set from `src/assets/logo.png` - small sizes crop to just the
  circular mark (the full wordmark is illegible under ~64px), larger sizes
  use the full logo padded to a square. Re-run it if the logo changes.

## Lint

`npm run lint` is clean - no known false positives in this repo (unlike
the sibling projects' documented `motion`/`Icon` JSX-prop quirks). Keep it
that way; a new lint error here is a real one.

## Deploying

Not wired to Vercel/any host yet - no `vercel.json`. Static Vite build
(`npm run build` → `dist/`), deployable anywhere that serves static files;
no API routes, no special rewrites needed since there's only one route.
