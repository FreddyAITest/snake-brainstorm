# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod

### Gemini CLI

- API Key: Set `GOOGLE_API_KEY` env var (get from https://aistudio.google.com/apikey)
- Usage: `gemini "prompt"` or `gemini --model <model> "prompt"`
- Default Model: gemini-2.5-flash (working, free tier available)
- Alternative: gemini-2.5-pro (complex reasoning), gemini-2.0-flash-lite (fast)
- Status: ✅ Active (API key configured, gemini-2.5-flash working)
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.
