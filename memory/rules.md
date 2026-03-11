# Rules — Snake's Operating System

## 🚫 NEVER (Mache das niemals)
- Never delete user files without explicit confirmation
- Never send external messages (email, tweets, public posts) without asking
- Never spawn subagents for simple questions (<5min tasks)
- Never exfiltrate private data to external services
- Never auto-spawn in group chats without user context
- Never bypass safety safeguards or stop/pause/audit requests

## ⚡ AUTO-SPAWN RULES

### Coding Agent
**Trigger-Keywords:** "programmiere", "code", "python", "javascript", "script", "funktion", "bug", "debug", "refactor", "implement", "feature", "api", "endpoint", "database", "query", "commit", "push", "git", "repository", "build", "deploy", "test", "unittest", "integration"

**Condition:** Task involves file operations + code logic
**Spawn:** `coding-agent` (runtime=subagent, mode=session, cleanup=keep)
**Follow-up:** Auto-spawn `debugger-agent` after completion

### Debugger Agent
**Trigger:** Coding agent completes (automatisch, pauschal)
**Condition:** After every coding session
**Spawn:** `debugger-agent` (runtime=subagent, mode=run)
**Task:** 
- Verify output matches user intent ("kam raus was ich wollte")
- Check code quality (syntax, best practices, edge cases)
- Report findings to user

### Web Search Agent
**Trigger-Keywords:** "blogpost", "recherche", "quellen", "research", "google", "search", "find", "lookup", "current", "news", "facts", "theme", "topic", "information"

**Condition:** Query requires external data (not in memory/knowledge)
**Spawn:** `web-search-agent` (runtime=subagent, mode=run)
**Example Workflow:** "Erstelle ein Blogpost zu dem Theme X" → first search sources → then write

### Project Management Board (Kanban)
**Trigger:** Coding agent starts OR task involves multiple files/steps
**Condition:** Any task > 1 file OR > 10min estimated
**Spawn:** Create/update Kanban board in `memory/kanban/`
**Files:** `todo.md`, `doing.md`, `done.md`

### Blog Post Writer
**Trigger:** User says "write blog post", "publish", "blogpost erstellen", "veröffentlichen"
**Condition:** Content ready for publication
**Spawn:** `blog-writer-agent` (runtime=subagent, mode=run)
**Target:** snake-brainstorm GitHub repo (`_posts/` folder)

## 📋 WORKFLOW DEFINITIONS

### Workflow: Code-Build
```
1. Detect coding keywords → auto-spawn coding-agent
2. Create Kanban entry (todo.md)
3. Coding agent works (session mode)
4. Move to doing.md during work
5. After complete → auto-spawn debugger-agent
6. Debugger checks: intent match + code quality
7. Move to done.md
8. Ask: "Blog post daraus machen?"
```

### Workflow: Research-to-Blog
```
1. User: "Erstelle Blogpost zu Theme X"
2. Detect research intent → auto-spawn web-search-agent
3. Search sources online
4. Aggregate results → memory update
5. Auto-spawn blog-writer-agent
6. Create _posts/ file → push to GitHub
7. Notify: "Live unter: URL"
```

### Workflow: Quick Question
```
1. Simple question (<5min)
2. NO subagent spawn
3. Answer directly
4. Optional: memory_search for context
```
