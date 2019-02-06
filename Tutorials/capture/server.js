// Require the express framework
var express = require('express');
// Create an app for express
var app = express();
// Serve in 5208 port
var server = app.listen('5200');
// App will use the files in the public folder
app.use(express.static('public'));
// Display a message when the server is running
console.log('My server is running');

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);
}
