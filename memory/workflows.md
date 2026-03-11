# Workflows — Snake's Auto-Agent Patterns

## Workflow: Code-Build

**Trigger:** Coding keywords detected ("programmiere", "code", "python", "javascript", "bug", "debug", "refactor", "implement", "feature", "api", "test")

**Steps:**
1. Detect coding intent from user message
2. Auto-spawn: `coding-agent` (runtime=subagent, mode=session, cleanup=keep)
3. Create Kanban entry in `todo.md`
4. Move to `doing.md` when agent starts
5. After coding complete → auto-spawn `debugger-agent`
6. Debugger checks:
   - User intent match ("kam raus was ich wollte")
   - Code quality (syntax, best practices, edge cases)
7. Move to `done.md` after debugger passes
8. Ask user: "Blog post daraus machen?"

**Files:**
- Workspace files (modified by coding agent)
- `memory/kanban/` (task tracking)
- `memory/YYYY-MM-DD.md` (session log)

---

## Workflow: Research-to-Blog

**Trigger:** User says "Erstelle Blogpost zu Theme X" or "research X for blog"

**Steps:**
1. Detect research + blog intent
2. Auto-spawn: `web-search-agent` (runtime=subagent, mode=run)
3. Search sources online (gather facts, links, references)
4. Aggregate results → update memory
5. Auto-spawn: `blog-writer-agent` (runtime=subagent, mode=run)
6. Create `_posts/YYYY-MM-DD-title.md` in brainstorm repo
7. Push to GitHub → auto-deploy
8. Notify user: "Live unter: https://freddyaitest.github.io/snake-brainstorm/"

**Files:**
- `memory/` (research notes)
- `brainstorm/_posts/` (blog post)

---

## Workflow: Quick Question

**Trigger:** Simple question, no complex keywords, estimated <5min

**Steps:**
1. NO subagent spawn
2. Answer directly in main session
3. Optional: `memory_search` for context
4. Log key info in `memory/YYYY-MM-DD.md`

**Rule:** Don't spawn agents for simple questions — save resources.

---

## Workflow: Multi-Step Project

**Trigger:** Task involves multiple files, steps, or >10min estimated

**Steps:**
1. Detect complexity (multiple files OR long duration)
2. Auto-spawn: `coding-agent` (mode=session)
3. Auto-create: Kanban board entry
4. Track progress in `doing.md`
5. After each milestone → update Kanban
6. Final: debugger-agent → `done.md`

---

## Decision Tree (Auto-Spawn Logic)

```
User Message
  │
  ├─ Simple question (<5min)?
  │   └─→ Answer directly (NO agent)
  │
  ├─ Coding keywords?
  │   ├─→ Spawn coding-agent
  │   └─→ After complete → Spawn debugger-agent
  │
  ├─ Blogpost + Research?
  │   ├─→ Spawn web-search-agent
  │   └─→ Then spawn blog-writer-agent
  │
  └─ Multi-step project?
      ├─→ Spawn coding-agent (session mode)
      └─→ Create Kanban entry
```
