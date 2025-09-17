#!/usr/bin/env python3
"""
AI Prompt Optimizer - External Access Server
This script starts a web server that can be accessed from external devices on the same network.
"""

import http.server
import socketserver
import socket
import webbrowser
import os
import sys
from pathlib import Path

def get_local_ip():
    """Get the local IP address of this machine"""
    try:
        # Connect to a remote server to determine local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
        return local_ip
    except Exception:
        return "127.0.0.1"

def start_server(port=8000, host="0.0.0.0"):
    """Start the HTTP server"""
    try:
        # Change to the script directory
        script_dir = Path(__file__).parent
        os.chdir(script_dir)
        
        # Create server
        handler = http.server.SimpleHTTPRequestHandler
        with socketserver.TCPServer((host, port), handler) as httpd:
            local_ip = get_local_ip()
            
            print("=" * 60)
            print("🚀 AI Prompt Optimizer Server Started!")
            print("=" * 60)
            print(f"📱 Local access:    http://localhost:{port}")
            print(f"🌐 Network access:  http://{local_ip}:{port}")
            print("=" * 60)
            print("📋 To access from other devices:")
            print(f"   1. Make sure they're on the same network")
            print(f"   2. Open browser and go to: http://{local_ip}:{port}")
            print("=" * 60)
            print("Press Ctrl+C to stop the server")
            print("=" * 60)
            
            # Open browser automatically
            try:
                webbrowser.open(f"http://localhost:{port}")
            except:
                pass
            
            # Start serving
            httpd.serve_forever()
            
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {port} is already in use. Trying port {port + 1}...")
            start_server(port + 1, host)
        else:
            print(f"❌ Error starting server: {e}")
            sys.exit(1)
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        sys.exit(0)

if __name__ == "__main__":
    # Allow custom port via command line argument
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Invalid port number. Using default port 8000.")
    
    start_server(port)
