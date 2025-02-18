# Real-Time Chat App

A minimal real-time chat application using [Socket.io](https://socket.io/). This project demonstrates how to set up a basic WebSocket connection to enable real-time communication between clients and a server. It was built on top of a tutorial from [WebSockets & Socket.io](https://youtu.be/1BfCnjr_Vjg) on YouTube.

## Features

- Real-time messaging between multiple clients.
- Uses WebSockets via Socket.io for instant communication.
- Simple front-end interface for sending and receiving messages.

## Requirements

- [Node.js](https://nodejs.org/) installed (recommended: latest LTS version)
- A terminal or command-line interface
- Works on Linux, macOS, and Windows (via WSL or native support)


## Compilation and Execution

1. **Install Dependencies**  
   Run the following command in your terminal to install required dependencies:

   ```sh
   cd server # Navigate to the server directory 
   npm install
   ```

2. **Start the Server**  
   Run the following command to start the server:

   ```sh
   npm start
   ```

   After running `npm start`, **command-click (or control-click) the link provided in the terminal** to open the chat application in your browser.



## Credits

This project is built upon [fireship-io/socketio-minimal-demo](https://github.com/fireship-io/socketio-minimal-demo).
