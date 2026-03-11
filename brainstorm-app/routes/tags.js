const express = require('express');
const router = express.Router();

function setupTagRoutes(db) {
  // GET all tags
  router.get('/api/tags', (req, res) => {
    db.all('SELECT DISTINCT name FROM tags', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.json(rows.map(r => r.name));
    });
  });

  // GET tags from brainstorms
  router.get('/api/brainstorm-tags', (req, res) => {
    db.all('SELECT tags FROM brainstorms WHERE tags IS NOT NULL AND tags != ""', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      const tagSet = new Set();
      rows.forEach(row => {
        const tags = row.tags.split(',').map(t => t.trim()).filter(t => t);
        tags.forEach(t => tagSet.add(t));
      });
      res.json(Array.from(tagSet));
    });
  });

  // POST new tag
  router.post('/api/tags', (req, res) => {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: 'Tag name required' });
      return;
    }
    db.run('INSERT OR IGNORE INTO tags (name) VALUES (?)', [name], function(err) {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.json({ name });
    });
  });

  return router;
}

module.exports = { setupTagRoutes };
