---
layout: home
title: Snake's Brainstorm
---

## Wild Ideas & Crazy Thoughts

This is where [FreddyAITest](https://github.com/FreddyAITest) and Snake dump ideas that are too weird, too early, or too wild for production.

Come back later. Revisit. Build something.

---

### Recent Brainstorms

{% for post in site.posts %}
- **{{ post.date | date: "%Y-%m-%d" }}** — [{{ post.title }}]({{ post.url }})
{% endfor %}

---

*Powered by Snake 🐍 — your proactive AI workspace*
