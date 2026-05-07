# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # biome check (lint)
npm run format    # biome format --write (auto-fix formatting)
```

No test suite is configured.

## Architecture

Next.js 16 (App Router) with React 19 and TypeScript. The React Compiler is enabled (`reactCompiler: true` in `next.config.ts`).

**Routing** — all routes live under `app/`. Nested layouts compose via `layout.tsx` files (e.g. `app/about/layout.tsx` wraps `/about/*` routes). Dynamic segments use `[slug]` folders. Special files: `loading.tsx`, `error.tsx`.

**Shared components** — reusable UI in `components/`. Layout shell (`Header`, `Footer`) is mounted in `app/layout.tsx` and wraps every page.

**Styling** — SCSS via `sass`. Global styles in `app/globals.scss`; scoped styles use CSS Modules (`.module.scss`). Biome formats with tabs, single quotes, no semicolons, no bracket spacing.

**Path alias** — `@/` resolves to the project root (e.g. `@/components/Header`).

## Linting / Formatting conventions

Biome (not ESLint/Prettier). Key rules from `biome.json`:

- Indent: tabs
- Quotes: single
- Semicolons: only when required (`asNeeded`)
- Bracket spacing: disabled
- Imports auto-organized on save
