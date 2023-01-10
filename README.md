
ReactAppRealTime
This is a real-time chat application built with React and Socket.io.

### Prerequisites

- Node.js
- npm or yarn


### Getting Started
Clone the repository:
git clone https://github.com/AhmetK07/ReactAppRealTime.git

Install the dependencies:
npm install

Start the development server:
npm start

The application will be served at http://localhost:3000.


### Here is a high-level overview of how the code is organized:

The client directory contains the React frontend code.
The server directory contains the Node.js backend code.

The backend is built with Node.js and uses Socket.io to handle real-time communication between clients. When a client connects, a socket is established between the client and the server, allowing them to send and receive messages in real time.

The frontend is built with React and communicates with the backend through Socket.io. It has a simple user interface that allows users to enter their name and send messages to other users in the chat. The app also keeps track of a list of online users.

Overall, this codebase demonstrates how to build a simple real-time chat application with React and Socket.io.

### Features
Real-time chat with multiple users
User list showing who is online
Custom user names
End-to-end encryption for secure communication

### Technologies
React
Socket.io
Node.js
Express
Axios
Mongoose
MongoDb
Cypress
Google Lighthouse
