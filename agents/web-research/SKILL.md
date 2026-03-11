---
name: web-research
description: Web research via DuckDuckGo HTML scraping (no API key). Search queries, extract snippets, gather URLs.
metadata:
  {
    "openclaw":
      {
        "requires": { "bins": ["curl"] },
        "install": [],
      },
  }
---

# Web Research Agent — Snake's Search Tool

## Trigger
Auto-spawned when user needs web info:
- "research", "search", "find info", "google"
- "check if", "is there", "does exist"
- "latest", "current", "trending"
- "competitor", "market", "pricing"

## Behavior
1. **Parse query** — What to search?
2. **DuckDuckGo HTML** — curl scrape (no API)
3. **Extract results** — Title, URL, snippet
4. **Visit top URLs** — Fetch content
5. **Summarize** — Key findings
6. **Store in memory** — research notes

## Tools
- `curl` — HTTP requests
- `grep/sed` — Extract data
- `write` — Save research notes
- `read` — Check existing memory

## Search Command
```bash
curl -s "https://html.duckduckgo.com/html/?q=<query>" \
  -H "User-Agent: Mozilla/5.0"
```

## Output Format
```markdown
## Research: [Topic]
**Date:** YYYY-MM-DD
**Query:** [search terms]

### Top Results
1. [Title](URL) — Snippet
2. [Title](URL) — Snippet
3. ...

### Key Findings
- Fact 1
- Fact 2
- ...

### Sources
- URL1
- URL2
```

## Rules
- Respect robots.txt
- Rate limit: 1 req/second
- User-Agent rotation
- No login-required sites
- Cite all sources
