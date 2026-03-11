# Memory Index — Snake's Brain

## Tags
- **#auto-spawn** — Subagent Regeln
- **#never** — "Mache das niemals" Regeln
- **#workflow** — Workflow-Definitionen
- **#coding** — Coding-relevante Entscheidungen
- **#blog** — Blog/Content Entscheidungen
- **#kanban** — Task Board (todo/doing/done)
- **#debugger** — Debugger-Agent Regeln
- **#research** — Research/Search Workflows
- **#decisions** — Alle Entscheidungen
- **#todo** — Offene Tasks

## Files
- [[rules.md]] — Operating Rules (NEVER + AUTO-SPAWN)
- [[workflows.md]] — Workflow-Definitions
- [[decisions.md]] — Decision Log (strukturierte Entscheidungen)
- [[MEMORY.md]] — Langzeit-Memory (kuratiert)
- [[kanban/todo.md]] — Offene Tasks
- [[kanban/doing.md]] — Aktive Tasks
- [[kanban/done.md]] — Abgeschlossene Tasks
- [[YYYY-MM-DD.md]] — Tägliche Logs

## Quick Reference

### Auto-Spawn Triggers
| Intent | Keywords | Agent |
|--------|----------|-------|
| Coding | programmiere, code, python, javascript, bug, debug | coding-agent → debugger-agent |
| Research | blogpost, recherche, quellen, research, search | web-search-agent |
| Blog | publish, blogpost erstellen, veröffentlichen | blog-writer-agent |
| Complex | multiple files, >10min | coding-agent + kanban |

### Never Rules
- No delete without confirmation
- No external messages without asking
- No agents for simple questions
- No private data exfiltration
- No group chat auto-spawn

---

*Last updated: 2026-03-11*
