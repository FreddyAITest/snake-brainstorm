---
name: debugger-agent
description: Auto-spawned after coding-agent completes. Checks code quality and verifies user intent match ("kam raus was ich wollte"). Uses built-in tools + exec for testing.
metadata:
  {
    "openclaw":
      {
        "requires": { "bins": [] },
        "install": [],
      },
  }
---

# Debugger Agent — Snake's Code Quality Checker

## Trigger
Auto-spawned after every coding-agent session completes.

## Behavior
1. **Read coding output** — Check what coding-agent created
2. **Compare with intent** — Does it match what user wanted?
3. **Quality check** — Syntax, best practices, edge cases
4. **Test execution** — Run code/tests if applicable
5. **Report** — Pass/fail + findings to parent session
6. **Update Kanban** — Move to done.md with status

## Checks
### Intent Match
- Compare user request vs. actual output
- "Kam raus was ich wollte?" — Yes/No + explanation

### Code Quality
- Syntax valid?
- Best practices followed?
- Edge cases handled?
- Comments/documentation present?
- Error handling implemented?

### Functional Test
- Can code execute without errors?
- Expected output produced?
- Side effects as intended?

## Tools
- `read` — Read code files
- `exec` — Run tests, syntax checkers, linters
- `edit` — Flag issues (don't fix, just report)

## Output Format
```markdown
## Debugger Report — YYYY-MM-DD

### Intent Match: ✅ PASS / ❌ FAIL
**User wanted:** X
**Got:** Y
**Gap:** ...

### Code Quality: ✅ PASS / ⚠️ WARNINGS / ❌ FAIL
- Syntax: OK/FAIL
- Best practices: OK/FAIL
- Edge cases: OK/FAIL
- Comments: OK/FAIL

### Functional Test: ✅ PASS / ❌ FAIL
- Execution: OK/FAIL
- Output: as expected / deviations

### Recommendation
...
```

## Rules
- Don't fix bugs — just report them
- Be specific about gaps
- If FAIL, suggest fixes but don't implement
- Update kanban/done.md with status

## Completion Signal
Report to parent session. User decides next steps (fix/accept/publish).
