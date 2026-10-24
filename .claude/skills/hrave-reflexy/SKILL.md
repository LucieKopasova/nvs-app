---
name: hrave-reflexy
description: Project knowledge, design principles and the working workflow for "Hravé reflexy na doma" — the Czech Expo app for parents doing short reflex-integration movement exercises with preschoolers. Use this for any feature, screen, UI or styling work in this repo (Dnes, přehrávač cvičení, kalendář, poznámky, knihovna cviků, průvodce reflexy, nastavení, přihlášení…), for questions about how the app should behave or look, for decisions about colors, texts or the program rules, and whenever the user says things like "udělej obrazovku", "naprogramuj", "uprav vzhled", "jak by to mělo fungovat" — even if they don't name the app.
---

# Hravé reflexy na doma

## What we're building (in one breath)

This is a calm Czech mobile app for **parents of children aged 4–6**. Each day, parent and
child do a short program of **4 movement exercises** that support the integration of
primary reflexes. The child watches the exercise video and the parent operates the app.
The program has 12 series, each 7 days long.
It should feel like a **quality tool for parents and a calm shared ritual**, not a clinic.

**We build in phases** (section 2 of the brief):

- **Phase 1 (now)** is the basic app, running locally on the device with **no backend, no
  login and no gamification**.
- **Phase 2 (later)** adds the backend, accounts/login and gamification.

Build phase 1, but don't paint phase 2 into a corner.

The full product brief, with screens, rules, data model and open questions, is in
`docs/PROJECT_BRIEF.md`. The visual tokens are in `docs/DESIGN.md`. Read the relevant part
before building. They are the source of truth, and this skill only explains how to work
with them.

## Principles that decide most questions

When something isn't specified, these decide it:

1. **Calm over exciting.** Use soft colors, generous space, few elements per screen and no
   loud animation. A tired parent at 6 pm with a wiggly kid should understand the screen
   instantly.
2. **No pressure; gamification comes later.** Missed days carry no guilt or penalties, and
   the calendar records only what actually happened.
   Gamification is planned for phase 2, so don't add points, badges or streaks now. Do keep
   progress data rich enough (records per exercise and per day, with dates) that it can be
   built on later.
3. **Not medical.** Don't add diagnoses, screening tests, symptom lists or promised
   outcomes. Exercise and guide texts are placeholders until a specialist supplies them,
   so don't invent clinical content.
4. **The parent operates and the child watches.** Use large touch targets, usable with one
   hand. In the player, the video is the hero and the controls stay visible, including in
   landscape.
5. **Czech, warm, plain language, vykání.** Every visible string is Czech and addresses
   the parent formally („Vyberte si…", „Vítejte"). Mockup texts are often in tykání, so
   convert them.
   Never ask for or store any data about children. The only exception is the child profile
   (phase 2, switched via the avatar): a nickname and an avatar picture, nothing more.
   Phase 1 only prepares for it.
6. **Don't invent features.** Phase 1 has no accounts, child profiles, subscriptions or
   library filters. If something seems missing, ask; don't add it.

## Design: how to apply it

- `docs/DESIGN.md` gives the direction and the tokens: Nunito Sans, very rounded shapes
  (pill buttons, 32–48 px cards), an 8 px rhythm, soft layered surfaces instead of
  shadows, and a calm palette.
- **The palette is not final.** Every visual value lives in `constants/theme.js` (`colors`,
  `fonts`, `typography`, `spacing`, `radius`). Import it (`import { colors, fonts, spacing,
radius } from '../constants/theme'`) and reference values by semantic name
  (`colors.primary`, `colors.card`, `spacing.lg`, `radius.pill`). Don't put raw hex values
  in new code. Older screens still have hardcoded hex values; leave them unless the user
  asks for a cleanup.
- Nunito Sans is loaded in `app/_layout.jsx`, but **only the 400 and 700 weights**. Use
  `fonts.regular` and `fonts.bold`. The `typography` tokens that use medium, semiBold or
  extraBold fall back to the system font until those weights are added to `useFonts`.
- Extract shared components (`components/PrimaryButton.jsx`, `Card`, `Chip`,
  `ParentTip` …) the second time a pattern repeats, not before.
- Visual references and mockups, including the Stitch project, are **inspiration, not a
  spec**. Take the mood, hierarchy and good ideas, and design the actual screen for React
  Native and for the rules above. It's fine, and expected, to diverge.

## Screen conventions in this repo

The user set these while building the first screens. Follow them for new screens:

- **Header from the Stack.** `app/_layout.jsx` shows the native header; each screen's
  Czech title is set there in a `<Stack.Screen name=… options={{ title: … }} />`. Add a line
  for every new screen. `index` (welcome) has no header. The tabs share one header, set on
  the `(tabs)` screen: the **avatar** in `headerLeft` (`greySurface` circle with a `text`-colored Ionicons `heart-outline`, not primary, so it doesn't look like the main button). The avatar is for
  switching between child profiles (one parent, several children, each with their own
  progress), not a way to Nastavení; for now it is a placeholder with no action. On the
  right, an `ellipsis-horizontal-outline` icon opens `/settings`.
- **Navigation direction is agreed, mostly built:** the tab bar in `app/(tabs)/`, the tab
  header and the back arrow on detail screens are done. The headerless player is not built
  yet. See „Navigation and headers" in `docs/DESIGN.md`. Don't build it unasked; just
  don't work against it.
- **Page container:** give the root view
  `{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }`. Use a `ScrollView` for
  long text. A screen without a header (`index`, later the player) starts under the status
  bar, so keep its first text clear of the clock and battery.
- **Themed components** in `components/` (the user made them; use them on every screen):
  - `ThemedView` instead of the root `View`; it sets `palette.background`. A long screen
    keeps its `ScrollView`.
  - `ThemedText` instead of `Text`. It sets the text color: `title={true}` gives
    `palette.text` (titles, subtitles, card titles), without it `palette.textAlt` (body
    text). Don't repeat these colors in styles. Text on a primary button keeps
    `color: palette.onPrimary` in its style, which overrides the default.
  - `ThemedLogo` for the logo (light or dark image); give it a size via `style`.
  - `Spacer` (`height`, default 40) for vertical gaps where the user uses it (the welcome
    screen). Don't add a `margin` on top of a `Spacer` for the same gap.
  - `ThemedCard` (`palette.card`, `radius.card`, `spacing.lg` padding) for large cards. The
    small library tiles don't use it: they have their own radius and border and one is a
    `Pressable`.
  - Import them under a `//themed components` comment, as in `app/index.jsx`.
- **Page title** is bold, 26 px, `ThemedText` with `title={true}`, aligned left
  (`alignSelf: 'flex-start'`).
- **Colors:** get the palette with `useColors()` from `constants/theme.js` (light or dark,
  by the phone's setting) and build styles inside the component:
  `const styles = getStyles(useColors())` with `const getStyles = (palette) => StyleSheet.create({…})`.
  When the styles need no palette value (the themed components already set the colors),
  use a plain `const styles = StyleSheet.create({…})` below the component.
- **Going back:** the header back arrow (set up in `app/_layout.jsx`, on every detail screen
  outside the tabs) is the only way back. Don't add „Zpět" links to the page body.
- **Buttons that navigate** are `<Link href=… asChild>` around a `Pressable`, so the button
  keeps its own look.
- **Detail screens go in a folder** together with their list screen: `app/library/index.jsx` is the
  list and `app/library/starfish.jsx` is a detail at `/library/starfish`.
- **Every new screen needs a way in.** After creating one, ask where its link or button
  should go (usually the menu on `home`).
- **Current flow:** `index` (welcome, „Pokračovat") → `home` („Dnes" menu) → `workout`
  („Dále") → `done` („Hotovo", „Dále") → `calendar`.

## Workflow for a feature or screen

1. **Understand:** find the screen or rule in `docs/PROJECT_BRIEF.md`. If it's missing or
   ambiguous, ask the user in Czech before coding. Briefly check what already exists in
   `app/`, `components/` and `constants/theme.js`.
2. **Plan small:** decide the route (top-level `app/`, short English file names such as
   `app/today.jsx`, `app/player.jsx`, `app/library/[id].jsx`), which components to reuse,
   and what data it needs. In phase 1, data lives on the device. Put the program and
   exercise content in `data/`, and read and write user records only through one small
   storage module, so phase 2 can swap it for a backend. Don't build auth or an API yet.
3. **Build:** use plain JSX, React Native and `StyleSheet.create` with theme values.
   - `SafeAreaView` from `react-native-safe-area-context`
   - `ScrollView` or `FlatList` for long content
   - `Pressable` with a subtle pressed state
   - icons from `@expo/vector-icons` (installed; outline icons, e.g. Ionicons
     `person-outline`, MaterialIcons)
   - new packages only via `npx expo install` (see `AGENTS.md`). `react-dom` is pinned to
     the same version as `react`; keep them equal, or npm fails with ERESOLVE.
4. **Check the rules:**
   - nothing from phase 2 has slipped in (login, gamification)
   - upcoming days don't look disabled
   - a day is complete only after all 4 exercises are done or skipped
   - the player keeps its position when paused or when info is opened
   - all text is Czech and uses vykání
   - no child data is collected
5. **Verify:** `npx expo export --platform android --output-dir <scratchpad>/android-export`
   must build. Web export doesn't work, because `react-native-web` isn't installed;
   don't install it without asking. There are no tests or lint yet. If the user wants to see it, use `npm run emulator` plus `npm run android` (or the
   `run` skill) and take a screenshot.
6. **Hand back:** summarize in Czech what was built, what is mocked and what is still
   open. Don't commit unless asked.

## Calendar: in progress

The user is building „Kalendář" (`app/(tabs)/calendar.jsx`) herself, lesson by lesson.
Explain and review; don't write the screen code for her.

**Built:**

- **Library:** `react-native-calendars` (Wix), plain JS, works in Expo Go. Chosen over
  `@marceloterreiro/flash-calendar`, which needs `@shopify/flash-list` and is built for
  infinite scrolling we don't need (one month plus ‹ › arrows).
- **Czech and Monday first:** `LocaleConfig` with hand-written Czech month and day names
  (kept by hand on purpose: easier to read than generating them), and `firstDay={1}`.
- **Colors:** values from `useColors()` in `theme` (selected day `primary` with
  `onPrimary` text); no hex values.
- **Exercised days:** `markingType="custom"` with `customStyles.container`
  `backgroundColor: palette.mutedSurface` (soft green). This replaced the planned
  `dayComponent`; switch to `dayComponent` only when the note pencil icon needs it.
- **Selected-day panel:** a `ThemedCard` with the date via `date-fns`
  (`format(parseISO(selectedDate), 'd. MMMM', { locale: cs })`) and „Odcvičeno" or the
  empty state.
- **Data:** `storage/records.js` (`getExercisedDates`, `addExercisedDate`, AsyncStorage);
  `done.jsx` saves today on open; the calendar loads with `useFocusEffect`.

**Still to do:** the note pencil icon, „+ Přidat poznámku", `app/record.jsx`
„Zaznamenat cvičení" (with records per exercise), export and `mobile-ux-reviewer`.

## Keeping the docs alive

When the user decides something (the final palette, tykání/vykání, a new rule, a dropped
screen), update `docs/PROJECT_BRIEF.md` or `docs/DESIGN.md` in the same change and remove
it from "Open questions". The docs are in English, and the conversation with the user is
in Czech. When writing larger doc changes, show the user a Czech summary first, then
write the English version.

## Stitch (only when asked)

The early mockups and the original design prompts live in Google Stitch (project
`1659365077091035402`). Only open it when the user explicitly asks to look at it or pull
something from it. For how to do that, including reading the original prompts through
Chrome, see `references/stitch.md`.
