var r;
var g;
var b;
var a;
var diam;
var x;
var y;

function setup() {
    createCanvas(600,600);
    background(0);
    smooth();
    frameRate(240);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  diam = random(20);
  x = random(width);
  y = random(height);
  // Use values to draw an ellipse
  noStroke();
  fill(r,g,b,a);
  ellipse(x,y,diam,diam);
}
