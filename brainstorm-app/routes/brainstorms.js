const express = require('express');
const router = express.Router();

function setupBrainstormRoutes(db) {
  // GET all brainstorms
  router.get('/api/brainstorms', (req, res) => {
    db.all('SELECT * FROM brainstorms ORDER BY created_at DESC', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.json(rows);
    });
  });

  // GET single brainstorm
  router.get('/api/brainstorms/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM brainstorms WHERE id = ?', [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      if (!row) {
        res.status(404).json({ error: 'Not found' });
        return;
      }
      res.json(row);
    });
  });

  // POST new brainstorm
  router.post('/api/brainstorms', (req, res) => {
    const { title, content, tags } = req.body;
    
    // Input validation
    if (!title || !content) {
      res.status(400).json({ error: 'Title and content are required' });
      return;
    }

    const sql = 'INSERT INTO brainstorms (title, content, tags) VALUES (?, ?, ?)';
    db.run(sql, [title, content, tags || ''], function(err) {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.status(201).json({ id: this.lastID, title, content, tags: tags || '' });
    });
  });

  // PUT update brainstorm
  router.put('/api/brainstorms/:id', (req, res) => {
    const id = req.params.id;
    const { title, content, tags } = req.body;

    if (!title || !content) {
      res.status(400).json({ error: 'Title and content are required' });
      return;
    }

    db.run(
      'UPDATE brainstorms SET title = ?, content = ?, tags = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, content, tags || '', id],
      function(err) {
        if (err) {
          res.status(500).json({ error: 'Database error' });
          return;
        }
        if (this.changes === 0) {
          res.status(404).json({ error: 'Not found' });
          return;
        }
        res.json({ id: parseInt(id), title, content, tags: tags || '' });
      }
    );
  });

  // DELETE brainstorm
  router.delete('/api/brainstorms/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM brainstorms WHERE id = ?', [id], function(err) {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: 'Not found' });
        return;
      }
      res.json({ message: 'Deleted successfully' });
    });
  });

  // GET search
  router.get('/api/search', (req, res) => {
    const q = req.query.q || '';
    const sql = `
      SELECT * FROM brainstorms 
      WHERE title LIKE ? OR content LIKE ? OR tags LIKE ?
      ORDER BY created_at DESC
    `;
    const searchTerm = `%${q}%`;
    db.all(sql, [searchTerm, searchTerm, searchTerm], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.json(rows);
    });
  });

  return router;
}

module.exports = { setupBrainstormRoutes };
