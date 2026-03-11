const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'brain.db');

function initDatabase() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) {
        reject(err);
        return;
      }
      console.log('Connected to SQLite database');
      
      // Create brainstorms table
      db.run(`
        CREATE TABLE IF NOT EXISTS brainstorms (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          tags TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) {
          reject(err);
          return;
        }
        console.log('Brainstorms table ready');
        
        // Create tags table
        db.run(`
          CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL
          )
        `, (err) => {
          if (err) {
            reject(err);
            return;
          }
          console.log('Tags table ready');
          resolve(db);
        });
      });
    });
  });
}

module.exports = { initDatabase, DB_PATH };
