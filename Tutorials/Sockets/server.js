// call the library expres
var express = require('express');

// save it in one variable
var app = express();
// create a server in port 3000
var server = app.listen(3000);
// see just what it is in the public directory
app.use(express.static('public'));
// send a message to the console
console.log("My socket server is running");
// require socket
var socket = require('socket.io');
var io = socket(server);
// check when a new client is connected
io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  //if there is a message called mouse trigger the function
  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
      // Broadcast
      socket.broadcast.emit('mouse', data);
      // this way include the data to the client
      //io.sockets.emit('mouse', data);
      console.log(data);
  }
}
