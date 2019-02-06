var x = 0;
var speed = 3;
var w = 200;
var h = 200;
var r = 69;
var g = 0;
var b = 247;

function setup() {
  createCanvas(h, w);
}

function draw() {
  x = x + speed;
  background(9, 124, 55);
  stroke(255, 255, 255);
  fill(r, g, b);
  ellipse(x, w / 2, 20, 20);

  if (x > h || x < 0) {
    speed = speed * -1;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }
}
