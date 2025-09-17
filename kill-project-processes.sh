#!/bin/bash

# AI Prompt Optimizer - Process Cleanup Script
# This script kills all processes related to the AI Prompt Optimizer project

echo "🧹 AI Prompt Optimizer - Process Cleanup"
echo "========================================"
echo ""

# Function to kill processes by pattern
kill_processes() {
    local pattern="$1"
    local description="$2"
    
    echo "🔍 Looking for $description..."
    local pids=$(pgrep -f "$pattern")
    
    if [ -n "$pids" ]; then
        echo "   Found PIDs: $pids"
        echo "$pids" | xargs kill -9
        echo "   ✅ Killed $description"
    else
        echo "   ✅ No $description found"
    fi
}

# Function to kill processes by port
kill_port() {
    local port="$1"
    echo "🔍 Checking port $port..."
    local pids=$(lsof -ti:$port 2>/dev/null)
    
    if [ -n "$pids" ]; then
        echo "   Found PIDs on port $port: $pids"
        echo "$pids" | xargs kill -9
        echo "   ✅ Killed processes on port $port"
    else
        echo "   ✅ Port $port is free"
    fi
}

# Kill project-specific processes
kill_processes "python.*server.py" "Python servers"
kill_processes "node.*server.js" "Node.js servers"
kill_processes "ai-prompt-optimizer" "AI Prompt Optimizer processes"

# Kill processes on common development ports
kill_port 8002
kill_port 8000
kill_port 3000
kill_port 8080

echo ""
echo "🎉 Process cleanup complete!"
echo ""
echo "📋 To verify no processes are running:"
echo "   ps aux | grep -E '(server\.py|server\.js|ai-prompt-optimizer)' | grep -v grep"
echo ""
echo "📋 To check ports:"
echo "   lsof -i :8002"
echo "   lsof -i :8000"
echo "   lsof -i :3000"


