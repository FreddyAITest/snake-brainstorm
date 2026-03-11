# Decision Log — Snake's Architecture

## 2026-03-11: Auto-Subagent Architecture

**Status:** ✅ Implementiert
**Stakeholder:** FreddyAITest, Snake
**Priority:** High
**Session:** Main Session (Direct Chat)

### Decision
Auto-spawn Subagents based on intent detection from user messages. Use keyword matching for trigger detection.

### Architecture
```json
{
  "decision_id": "auto-subagents-v1",
  "created": "2026-03-11T16:26:00Z",
  "type": "architecture",
  "agents": [
    {
      "name": "coding-agent",
      "trigger": "coding_keywords",
      "runtime": "subagent",
      "mode": "session",
      "cleanup": "keep",
      "followup": ["debugger-agent"]
    },
    {
      "name": "debugger-agent",
      "trigger": "coding_session_end",
      "runtime": "subagent",
      "mode": "run",
      "task": "intent_match + code_quality"
    },
    {
      "name": "web-search-agent",
      "trigger": "research_keywords",
      "runtime": "subagent",
      "mode": "run",
      "followup": ["blog-writer-agent"]
    },
    {
      "name": "blog-writer-agent",
      "trigger": "publish_intent",
      "runtime": "subagent",
      "mode": "run",
      "target": "snake-brainstorm-github-repo"
    }
  ],
  "kanban": {
    "enabled": true,
    "path": "memory/kanban/",
    "files": ["todo.md", "doing.md", "done.md"]
  },
  "rules_file": "memory/rules.md",
  "workflows_file": "memory/workflows.md",
  "index_file": "memory/index.md"
}
```

### Implementation
- `memory/rules.md` — NEVER rules + AUTO-SPAWN rules
- `memory/workflows.md` — Workflow definitions
- `memory/kanban/` — Task board (todo/doing/done)
- `memory/index.md` — Tag index for quick access
- `memory/decisions.md` — This file (decision log)

### Next Steps
- Test auto-spawn with real coding task
- Verify debugger-agent intent matching
- Test research-to-blog workflow
- Refine keyword detection based on usage

---

## 2026-03-11: GitHub Blog Setup

**Status:** ✅ Fertig
**Repo:** FreddyyAITest/snake-brainstorm
**URL:** https://freddyaitest.github.io/snake-brainstorm/
**Theme:** jekyll-theme-cayman
**Access:** Public

---

## 2026-03-11: Telegram Channel

**Status:** ✅ Paired
**User ID:** 8530872637
**Mode:** Private (DMS only, groups blocked)
**Pairing:** Approved

---
