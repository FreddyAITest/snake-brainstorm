#!/bin/bash
# Hourly Cron Job Monitor - Snake Workspace
# Checks if background tasks are actually running

WORKSPACE="/root/.openclaw/workspace"
LOG_FILE="$WORKSPACE/memory/cron-monitor-$(date +%Y-%m-%d).md"

echo "## Cron Job Monitor - $(date -u '+%Y-%m-%d %H:%M UTC')" > "$LOG_FILE"
echo "" >> "$LOG_FILE"

# Check visited-domains crawl
echo "### Visited Domains Crawl" >> "$LOG_FILE"
LAST_ENTRY=$(tail -20 "$WORKSPACE/visited-domains.md" | grep -oE '2026-03-[0-9]{2} [0-9]{2}:[0-9]{2} UTC' | tail -1)
CURRENT_TIME=$(date -u '+%Y-%m-%d %H:%M')

if [ -n "$LAST_ENTRY" ]; then
    echo "✓ Last entry: $LAST_ENTRY" >> "$LOG_FILE"
    
    # Extract hour from last entry
    LAST_HOUR=$(echo "$LAST_ENTRY" | grep -oE '[0-9]{2}:[0-9]{2}' | head -1)
    CURRENT_HOUR=$(date -u '+%H:%M')
    
    # Simple check: if last entry hour is different from current hour, might be stalled
    if [ "$LAST_HOUR" != "$CURRENT_HOUR" ]; then
        echo "⚠️ WARNING: No new entries in current hour - crawl may be stalled" >> "$LOG_FILE"
        echo "ACTION: Restart browser crawl or investigate" >> "$LOG_FILE"
    else
        echo "✓ Crawl appears active" >> "$LOG_FILE"
    fi
else
    echo "✗ ERROR: No entries found in visited-domains.md" >> "$LOG_FILE"
fi

echo "" >> "$LOG_FILE"

# Check browser process
echo "### Browser Process" >> "$LOG_FILE"
BROWSER_PID=$(pgrep -f "chromium-browser.*headless" | head -1)

if [ -n "$BROWSER_PID" ]; then
    echo "✓ Browser running (PID: $BROWSER_PID)" >> "$LOG_FILE"
else
    echo "✗ Browser process NOT running" >> "$LOG_FILE"
    echo "ACTION: Restart crawl task" >> "$LOG_FILE"
fi

echo "" >> "$LOG_FILE"

# Check for any other background processes
echo "### Background Processes" >> "$LOG_FILE"
ps aux | grep -E "(crawl|visit|browser)" | grep -v grep | head -5 >> "$LOG_FILE"

echo "" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"

# Output summary
cat "$LOG_FILE"
