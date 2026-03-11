#!/bin/bash
cd /root/.openclaw/workspace/brainstorm-app

echo "Starting Backend on port 8080..."
node server.js &
BACKEND_PID=$!

sleep 2

echo "Starting Frontend on port 3000..."
cd frontend
npm run dev &
FRONTEND_PID=$!

echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo "Both servers running!"
echo "Backend: http://87.106.176.66:8080"
echo "Frontend: http://87.106.176.66:3000"

wait
