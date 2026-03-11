const express = require('express');
const cors = require('cors');
const { initDatabase } = require('./db');
const { setupBrainstormRoutes } = require('./routes/brainstorms');
const { setupTagRoutes } = require('./routes/tags');

const PORT = 8080;
const HOST = '0.0.0.0';

async function startServer() {
  try {
    // Initialize database
    const db = await initDatabase();
    
    // Create Express app
    const app = express();
    
    // Middleware
    app.use(cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));
    app.use(express.json());
    
    // Setup routes
    const brainstormRouter = setupBrainstormRoutes(db);
    const tagRouter = setupTagRoutes(db);
    
    // Apply routes to app
    app.use(brainstormRouter);
    app.use(tagRouter);
    
    // Health check
    app.get('/health', (req, res) => {
      res.json({ status: 'ok', port: PORT });
    });
    
    // Start server
    app.listen(PORT, HOST, () => {
      console.log(`Backend server running at http://${HOST}:${PORT}`);
      console.log(`API endpoints available:`);
      console.log(`  GET  /api/brainstorms - List all`);
      console.log(`  POST /api/brainstorms - Create new`);
      console.log(`  PUT  /api/brainstorms/:id - Update`);
      console.log(`  DELETE /api/brainstorms/:id - Delete`);
      console.log(`  GET  /api/search?q= - Search`);
      console.log(`  GET  /api/tags - List tags`);
    });
    
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
