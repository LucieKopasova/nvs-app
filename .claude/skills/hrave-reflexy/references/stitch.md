# Stitch: pulling things out on request

Stitch is the early mockup and inspiration source, not a spec. Use this file only when the
user asks to look at or pull something from Stitch. Project:
**"Hravé Reflexy na Doma"**, ID `1659365077091035402`.

## Design system and screens (Stitch MCP)

- Load the tools with ToolSearch (`stitch`). The server may still be connecting.
- `get_project` with `projects/1659365077091035402` returns `designTheme` (colors, fonts,
  roundness, spacing, design-system markdown) and `screenInstances`. Screens with
  `hidden: true` are discarded variants.
- `list_screens` with `projectId: 1659365077091035402` gives titles and HTML download URLs.
  The output is large and gets saved to a file. To turn the screens into readable text,
  run this with the **PowerShell tool**, because the execution policy blocks it from Bash:
  ```powershell
  & ".claude/skills/hrave-reflexy/scripts/extract_screens.ps1" -ScreensJson <saved list_screens output> -OutDir <scratchpad>\stitch-html
  ```
- Expect noise in the screens: duplicate variants, gibberish placeholder text and leftover
  English labels.

# Reading the original prompts through Claude in Chrome

The Stitch MCP has no endpoint for chat or prompt history. The web app loads the history
through an internal batchexecute RPC, **`dNS8Mc`** ("list sessions"). Use the user's
signed-in Chrome to call it from the Stitch page. This only reads the user's own project.

## Steps

1. Load the Chrome tools in one ToolSearch call. You need `tabs_context_mcp`,
   `tabs_create_mcp`, `navigate`, `javascript_tool`, `browser_batch` and `tabs_close_mcp`.
   Then call `tabs_context_mcp` with `createIfEmpty: true`.
2. Navigate a new tab to `https://stitch.withgoogle.com/projects/1659365077091035402` and
   wait about 5 seconds.
3. Run this in `javascript_tool`. It fetches every session and leaves the prompts in
   `window.__P`:

```js
const W = window.WIZ_global_data, PID = "1659365077091035402";
const body = new URLSearchParams({
  'f.req': JSON.stringify([[["dNS8Mc", JSON.stringify([`projects/${PID}`]), null, "generic"]]]),
  at: W.SNlM0e,
});
const u = `/_/Nemo/data/batchexecute?rpcids=dNS8Mc&source-path=%2Fprojects%2F${PID}&bl=${W.cfb2h}&f.sid=${W.FdrFJe}&hl=cs&rt=c`;
const t = await (await fetch(u, { method: 'POST', body,
  headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' } })).text();
const line = t.split('\n').find(l => l.startsWith('[["wrb.fr"'));
const sessions = JSON.parse(JSON.parse(line)[0][2])[0];
window.__S = sessions.map(s => ({
  ts: new Date(s[5][0] * 1000).toISOString().slice(0, 16),
  prompt: s[3]?.[0] || '',
  replies: (s[4] || []).filter(r => Array.isArray(r) && r[0] === null && typeof r[1] === 'string').map(r => r[1]),
})).sort((a, b) => a.ts < b.ts ? -1 : 1);
window.__P = window.__S.map((s, i) => `### #${i + 1} ${s.ts}\n${s.prompt}`).join('\n\n');
({ sessions: window.__S.length, chars: window.__P.length })
```

   Each session is a tuple: `[0]` is the name, `[3][0]` the user prompt, `[4]` the agent
   steps (items shaped `[null, "text"]` are Stitch's replies) and `[5]` the timestamp.
   If parsing fails, the schema probably changed. Print the shape of `sessions[0]` and
   adapt.
4. **Results come back truncated to about 1000 characters.** Read `window.__P` in
   950-character slices, about 12 `javascript_tool` calls per `browser_batch`
   (for example `window.__P.slice(0,950)`, `window.__P.slice(950,1900)` and so on). Repeat
   until you reach `chars`. Read `window.__S[i].replies` the same way, but only if you
   need Stitch's answers.
5. Close the tab with `tabs_close_mcp`.

## Dead ends already ruled out (don't retry)

- `get_page_text`, `read_page` and `find` return nothing. The UI lives in a cross-origin
  iframe (`app-companion-430619.appspot.com`), and opening that URL directly also shows
  no text.
- The "Agent log" panel only shows truncated titles that scroll like a marquee on hover.
- Patching `XMLHttpRequest` or `fetch` and then navigating inside the app captures only
  the project RPC (`f6CJY` / `eW2RYb`), not the sessions.
- POSTing data to a localhost listener fails because of Stitch's CSP.
- `read_network_requests` lists RPC IDs but cannot return response bodies.

## Other RPC IDs seen (same call pattern, argument `["projects/<id>"]`)

| RPC | Returns |
|---|---|
| `eW2RYb` | project with theme |
| `ErneX` | screens with file URLs (large) |
| `UiiVCf` (argument is the bare ID) | design systems |
