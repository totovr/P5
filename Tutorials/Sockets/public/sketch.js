//client code
var socket;

function setup() {
  // put setup code here
  createCanvas(600, 400);
  background(51);

  socket = io.connect('http://localhost:3000');
  // Draw in the new client what the other client had wrote
  socket.on('mouse', newDrawing);

}

function newDrawing(data) {
  noStroke();
  fill(45, 8, 139);
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
  console.log('The serving value is: ' + mouseX + ',' + mouseY);
  //function that send data to the client
  var data = {
    x: mouseX,
    y: mouseY,
  }

  // emite the data with a lable named mouse and the values stored in data
  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}

function draw() {

}
