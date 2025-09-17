#!/usr/bin/env node
/**
 * AI Prompt Optimizer - External Access Server (Node.js)
 * This script starts a web server that can be accessed from external devices on the same network.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { networkInterfaces } = require('os');

// Get local IP address
function getLocalIP() {
    const interfaces = networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Get MIME type for file
function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return mimeTypes[ext] || 'text/plain';
}

// Start server
function startServer(port = 8000, host = '0.0.0.0') {
    const server = http.createServer((req, res) => {
        let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
        
        // Security: prevent directory traversal
        if (!filePath.startsWith(__dirname)) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Forbidden');
            return;
        }
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('File not found');
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server error');
                }
                return;
            }
            
            const mimeType = getMimeType(filePath);
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(data);
        });
    });
    
    server.listen(port, host, () => {
        const localIP = getLocalIP();
        
        console.log('='.repeat(60));
        console.log('🚀 AI Prompt Optimizer Server Started!');
        console.log('='.repeat(60));
        console.log(`📱 Local access:    http://localhost:${port}`);
        console.log(`🌐 Network access:  http://${localIP}:${port}`);
        console.log('='.repeat(60));
        console.log('📋 To access from other devices:');
        console.log('   1. Make sure they\'re on the same network');
        console.log(`   2. Open browser and go to: http://${localIP}:${port}`);
        console.log('='.repeat(60));
        console.log('Press Ctrl+C to stop the server');
        console.log('='.repeat(60));
    });
    
    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`❌ Port ${port} is already in use. Trying port ${port + 1}...`);
            startServer(port + 1, host);
        } else {
            console.error(`❌ Error starting server: ${err.message}`);
            process.exit(1);
        }
    });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Server stopped by user');
    process.exit(0);
});

// Get port from command line argument
const port = process.argv[2] ? parseInt(process.argv[2]) : 8000;

if (isNaN(port)) {
    console.log('❌ Invalid port number. Using default port 8000.');
    startServer();
} else {
    startServer(port);
}
