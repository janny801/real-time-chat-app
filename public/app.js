console.log('app.js is loaded');  // Just to verify the file is running

const socket = io('http://localhost:8080');
console.log('Connecting to Socket.IO...');

socket.on('connect', () => {
    console.log('Connected to Socket.IO server!');
});

const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

// Send message when button is clicked
button.addEventListener('click', () => {
    const message = input.value;
    console.log('Sending message:', message);
    socket.emit('message', message);
    input.value = '';
});

// Listen for messages from the server
socket.on('message', (message) => {
    console.log('Received message:', message);
    const li = document.createElement('li');
    li.textContent = message;
    ul.appendChild(li);
});
