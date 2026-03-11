---
name: etsy-image-generator
description: Generate AI artwork for Etsy products via Midjourney Discord bot. Creates product mockups, logos, patterns, and marketing visuals.
metadata:
  {
    "openclaw":
      {
        "requires": { "bins": ["discord"] },
        "install": [],
      },
  }
---

# Etsy Image Generator — Snake's Midjourney Agent

## Trigger
Auto-spawned when user wants product images:
- "etsy produktbild", "product mockup", "logo erstellen"
- "pattern design", "wall art", "digital download"
- "marketing visual", "social media post", "banner"
- "AI image", "midjourney", "generate image"

## Prerequisites
**User MUST have:**
- ✅ Discord account
- ✅ Midjourney subscription (https://midjourney.com)
- ✅ Joined Midjourney Discord: https://discord.gg/midjourney
- ✅ Bot access (use /imagine in #newbies or own server)

## Behavior
1. **Parse request** — What image to generate? (product, logo, pattern, etc.)
2. **Build prompt** — Craft Midjourney prompt with parameters
3. **Submit to Discord** — Use /imagine command
4. **Wait ~60s** — Midjourney generates 4 variations
5. **Upscale best** — User selects U1-4
6. **Download** — Save to workspace/etsy-images/
7. **Notify** — Share image path + Discord link

## Tools
- `exec` — Discord CLI commands (if available)
- `write` — Save metadata, prompts
- `read` — Load style references

## Prompt Library

### Product Mockups
```
/imagine prompt: product photography, <item> on marble surface, soft studio lighting, commercial, e-commerce --ar 4:5 --q 2 --v 6
```

### Logo Design
```
/imagine prompt: minimalist logo for <business>, geometric, <colors>, vector style --ar 1:1 --v 6
```

### Patterns (Digital Downloads)
```
/imagine prompt: seamless pattern, <theme>, repeating elements, pastel colors, scandinavian style --ar 1:1 --tile --v 6
```

### Wall Art
```
/imagine prompt: <subject> art print, minimalist, scandinavian interior, warm lighting, framed --ar 3:4 --stylize 250 --v 6
```

### Marketing/Social Media
```
/imagine prompt: instagram post, <topic>, bold typography, gradient background, modern, eye-catching --ar 1:1 --v 6
```

## Parameters Reference

| Param | Values | Use Case |
|-------|--------|----------|
| --ar | 1:1, 16:9, 9:16, 2:3, 4:5 | Aspect ratio |
| --v | 6, 5.2, 5.1 | Version |
| --niji | 6 | Anime/manga |
| --s | 100-1000 | Stylization |
| --q | 0.5, 1, 2 | Quality |
| --chaos | 0-100 | Variation |
| --no | text, blur, people | Exclude |
| --tile | (flag) | Seamless patterns |

## Workflow

### 1. Etsy Product Image
```
User: "Produktbild für Handmade Seife"
→ Prompt: "product photography, handmade soap on wooden surface, natural lighting, rustic, e-commerce --ar 4:5 --q 2"
→ Generate → Upscale → Download → workspace/etsy-images/soap-mockup.png
```

### 2. Logo for Etsy Shop
```
User: "Logo für meinen Shop 'CraftCorner'"
→ Prompt: "minimalist logo for craft shop, geometric, earth tones, vector style --ar 1:1"
→ Generate → Variations → Upscale → Download
```

### 3. Seamless Pattern (Digital Download)
```
User: "Muster für Digital Download, Blumen"
→ Prompt: "seamless pattern, watercolor flowers, repeating, pastel colors --ar 1:1 --tile"
→ Generate → Tile check → Download
```

## Output Format
```markdown
## Image Generated — YYYY-MM-DD

**Prompt:** [Full prompt used]
**Discord Job ID:** [ID]
**Parameters:** --ar X:X --v 6 --s 250

**Variations:** 4 generated
**Upscaled:** U2 (selected by user)

**Saved:** workspace/etsy-images/<name>.png
**Discord Link:** https://discord.com/channels/...

**Etsy Use:** ✅ Commercial OK (check MJ plan)
```

## Rules
- Always ask for commercial rights (Etsy = commercial use)
- Save prompts for reproducibility
- Download high-res upscaled versions
- Organize by product/date
- Respect content policy (no restricted topics)

## Completion Signal
Notify parent session:
```
✅ Image complete!

**Prompt:** [summary]
**Saved:** path/to/image.png
**Discord:** [link]
**Commercial:** OK for Etsy
```

## Notes
- Free trial: ~25 images (one-time)
- Basic: $10/mo, ~200 images
- Standard+: Unlimited relaxed mode
- All generations saved in Discord DMs
