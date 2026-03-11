---
name: pm-board-driver
description: Manages Kanban board (todo/doing/done). Auto-updates when agents spawn/complete. Not an agent — a driver skill for task tracking.
metadata:
  {
    "openclaw":
      {
        "requires": { "bins": [] },
        "install": [],
      },
  }
---

# PM Board Driver — Snake's Task Tracker

## Purpose
Manages Kanban board files automatically when agents spawn/complete.
Not a standalone agent — called by other agents to update task status.

## Files
- `memory/kanban/todo.md` — Open tasks
- `memory/kanban/doing.md` — Active tasks
- `memory/kanban/done.md` — Completed tasks

## Operations

### Add Task (todo.md)
```markdown
- [ ] Task-Name
  - Created: YYYY-MM-DD
  - Type: coding|research|blog|other
  - Estimated: X min
  - Agent: agent-name
  - Notes: ...
```

### Move to Doing (todo.md → doing.md)
```markdown
- [~] Task-Name
  - Started: YYYY-MM-DD HH:MM
  - Agent: agent-name
  - Session: session-key
  - Progress: ...
```

### Move to Done (doing.md → done.md)
```markdown
- [x] Task-Name
  - Completed: YYYY-MM-DD HH:MM
  - Agent: agent-name
  - Debugger: passed/failed
  - Result: summary
  - Blog: published/not-published
```

## Usage Pattern
```
1. Agent spawns → Add to todo.md
2. Agent starts → Move to doing.md
3. Agent completes → Move to done.md
4. Debugger passes → Mark as passed
5. Blog published → Update blog status
```

## Tools
- `read` — Read kanban files
- `edit` — Update task status
- `write` — Create new entries

## Rules
- Keep format consistent
- Include timestamps
- Link to agent session if applicable
- Archive old done items monthly (optional)

## Auto-Update Triggers
- coding-agent spawn → Add to todo
- coding-agent start → Move to doing
- coding-agent complete → Move to done
- debugger-agent pass → Update status
- blog-writer publish → Update blog field
