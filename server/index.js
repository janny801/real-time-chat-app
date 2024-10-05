const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: { origin: "*" }  // Allow cross-origin requests
});

// Keep track of connected users
let userCount = 0;

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/../public'));

// WebSocket connection
io.on('connection', (socket) => {
    // Increment user count and assign a username
    userCount++;
    const username = `User ${userCount}`;

    // Notify all clients when a user connects
    io.emit('message', `${username} has joined the chat`);
    console.log(`${username} connected`);

    // Listen for 'message' event from the client
    socket.on('message', (message) => {
        console.log(`Message received from ${username}:`, message);
        io.emit('message', `${username} said: ${message}`);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`${username} disconnected`);
        io.emit('message', `${username} has left the chat`);
    });
});

// Start server on port 8080
http.listen(8080, () => {
    console.log('Server is listening on http://localhost:8080');
});
