# 🌐 External Access Guide

This guide explains how to make the AI Prompt Optimizer accessible from external devices on your network.

## 🚀 Quick Start

### Option 1: Automatic Server Selection
```bash
./start-server.sh
```

### Option 2: Using npm scripts
```bash
# Node.js server (recommended)
npm run external

# Python server
npm run external-python

# Auto-detect best server
npm run external-auto
```

### Option 3: Direct execution
```bash
# Python server
python3 server.py

# Node.js server
node server.js
```

## 📱 Access URLs

Once the server starts, you'll see output like this:
```
🚀 AI Prompt Optimizer Server Started!
============================================================
📱 Local access:    http://localhost:8000
🌐 Network access:  http://192.168.1.100:8000
============================================================
```

- **Local access**: Only works on the same computer
- **Network access**: Works from any device on the same network

## 🔧 Custom Port

To use a different port:
```bash
# Python
python3 server.py 3000

# Node.js
node server.js 3000

# Shell script
./start-server.sh 3000
```

## 📋 Requirements

### For Python Server
- Python 3.6 or higher
- No additional packages required

### For Node.js Server
- Node.js 12 or higher
- No additional packages required

## 🌐 Network Access Setup

### 1. Find Your Network IP
The server will automatically detect and display your network IP address.

### 2. Connect Other Devices
- Make sure all devices are on the same Wi-Fi network
- Open a web browser on the external device
- Navigate to the network URL (e.g., `http://192.168.1.100:8000`)

### 3. Firewall Configuration
If you can't access from external devices:

#### macOS
```bash
# Allow incoming connections on port 8000
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add python3
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add node
```

#### Windows
1. Open Windows Defender Firewall
2. Click "Allow an app or feature through Windows Defender Firewall"
3. Add Python and Node.js to the allowed list

#### Linux
```bash
# Ubuntu/Debian
sudo ufw allow 8000

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=8000/tcp
sudo firewall-cmd --reload
```

## 🔒 Security Notes

- The server only serves static files from the current directory
- No authentication is required
- Only accessible from devices on the same network
- No sensitive data is stored or transmitted

## 🛠️ Troubleshooting

### Port Already in Use
If you get "Address already in use" error:
- The server will automatically try the next available port
- Or manually specify a different port: `python3 server.py 3000`

### Can't Access from External Devices
1. Check if devices are on the same network
2. Verify firewall settings
3. Try accessing the local IP directly
4. Check if your router blocks device-to-device communication

### Server Won't Start
1. Make sure Python 3 or Node.js is installed
2. Check if the port is available
3. Try running with administrator/sudo privileges

## 📱 Mobile Access

The application is fully responsive and works great on mobile devices:
- Open your mobile browser
- Navigate to the network URL
- The interface will automatically adapt to mobile screens

## 🔄 Stopping the Server

Press `Ctrl+C` in the terminal where the server is running to stop it.

## 📞 Support

If you encounter issues:
1. Check the console output for error messages
2. Verify network connectivity
3. Try different ports
4. Check firewall settings
