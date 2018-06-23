var fs = require('fs');
var https = require('https');
// Require the express framework
var express = require('express');
// Create an app for express
var app = express();
// Serve in 8080 port
var options = {
  key: fs.readFileSync('./file.pem'),
  cert: fs.readFileSync('./file.crt')
};
var serverPort = 8080;
//var server = app.listen('8080');
// App will use the files in the public folder
app.use(express.static('public'));
// Display a message when the server is running
console.log('My server is running');

// var socket = require('socket.io');
//
// var io = socket(server);
var server = https.createServer(options, app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
  console.log('new connection: ' + socket.id);
  socket.emit('message', 'This is a message from the dark side.');
});

server.listen(serverPort, function() {
  console.log('server up and running at %s port', serverPort);
});

// io.sockets.on('connection', newConnection);
//
// function newConnection(socket) {
//   console.log('new connection: ' + socket.id);
// }
