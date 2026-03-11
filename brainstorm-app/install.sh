#!/bin/bash
cd /root/.openclaw/workspace/brainstorm-app

echo "Installing backend dependencies..."
npm install

echo "Installing frontend dependencies..."
cd frontend
npm install

echo "Setup complete!"
