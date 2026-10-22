# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See `AGENTS.md` for the general Expo rules (always check versioned docs, use `npx expo install`, never hand-edit `ios/`/`android/`). Key facts below are specific to this repo.

## Product & design

- **Read `docs/PROJECT_BRIEF.md` before building features** — what the app is, screens, program rules (12 series × 7 days × 4 exercises), phases (phase 1 = basic app stored locally; backend, login and gamification come in phase 2), and constraints (Czech UI, not a medical tool).
- **Read `docs/DESIGN.md` before styling anything** — palette (not final: keep colors in one theme file, never hardcode), Nunito Sans type scale, spacing, shapes, components.
- Project skill `hrave-reflexy` (`.claude/skills/hrave-reflexy/`) holds the design principles and the workflow for building features and screens.
- Early mockups live in Google Stitch (project ID `1659365077091035402`, `stitch` MCP server). They are inspiration, not a 1:1 spec.

## Stack

- Expo SDK 57 (`expo ~57.0.x`), React Native 0.86, React 19.2 — docs: https://docs.expo.dev/versions/v57.0.0/
- Expo Router (file-based routing), plain JavaScript/JSX — there is no `tsconfig.json`, so `npx tsc --noEmit` does not apply.
- Package manager is **npm** (`package-lock.json`); use `npx`, not `bunx`.
- No test framework and no ESLint config are set up yet. `npx expo lint` will offer to scaffold one on first run.

## Commands

```bash
npm start                # expo start (dev server; Expo Go works — no custom native modules yet)
npm run android | ios | web
npm run emulator         # start Android emulator (lightweight AVD Light_Phone_API_33, cold boot) and move its window on-screen (scripts/emulator.ps1)
npx expo start --tunnel  # tunnel mode (@expo/ngrok is a dependency for this)
npx expo install <pkg>   # add dependencies
npx expo-doctor          # check dependency/config health
```

## Architecture

- **Entry point is `expo-router/entry`** (`package.json` `main`). Routes live in the top-level `app/` directory (not `src/app/` as AGENTS.md describes). `app/index.jsx` is the welcome screen, and its „Pokračovat" button leads to the tabs in `app/(tabs)/` (Domů, Kalendář, Poznámky, Průvodce, Profil; tab bar in `app/(tabs)/_layout.jsx`). Detail screens (`workout`, `done`, `settings`, `library`, `library/starfish`, …) live outside the tabs, in the root Stack.
- The header above the tabs is set on the `(tabs)` screen in the root Stack (`app/_layout.jsx`): a heart icon on the left, an `ellipsis-horizontal-outline` icon on the right that opens `/settings`. Detail screens get only a back arrow and their title.
- `app/_layout.jsx` is the root layout: it loads Nunito Sans (400 and 700 only) with `useFonts` and renders a `Stack` with `headerShown: false`.
- Design tokens (colors, fonts, typography, spacing, radius) are in `constants/theme.js`.
- Screen conventions (page container, back links, detail screens in folders) are in the `hrave-reflexy` skill; naming and Czech text rules are in the `language-and-naming` skill.
- App config is in `app.json`: deep-link scheme `nvsapp`, portrait-only, `userInterfaceStyle: "light"` (set for development; production will use `"automatic"` so the dark palette in `constants/theme.js` turns on), plugins `expo-router` and `expo-status-bar`.
