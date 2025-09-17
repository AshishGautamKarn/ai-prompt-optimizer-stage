#!/bin/bash
# AI Prompt Optimizer - Server Startup Script

echo "🚀 Starting AI Prompt Optimizer Server..."

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "📱 Using Python 3 server..."
    python3 server.py "$@"
elif command -v node &> /dev/null; then
    echo "📱 Using Node.js server..."
    node server.js "$@"
else
    echo "❌ Neither Python 3 nor Node.js found!"
    echo "Please install Python 3 or Node.js to run the server."
    exit 1
fi
