var mega;
var x;
var y;
var root;

function preload() {
  mega = loadImage('data/mega.jpg');  // Load the image
}

function setup() {
  createCanvas(1280, 720);
  x = 0;
  y = width/2;
  rot = 0;
}

function draw() {
  background(255);
  //Translate and rotate
  translate(x,y);
  rotate(rot);
  image(mega, 0, 0);
  // Adjust variables to create animation
  x +=1.0;
  rot +=0.01;
  if (x > width) {
    x = 0;
  } 
}
