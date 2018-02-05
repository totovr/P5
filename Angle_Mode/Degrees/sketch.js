function setup() {
  createCanvas(480, 120);
  angleMode(DEGREES);
}

function draw() {
  background(204);
  arc(90, 60, 80, 80, 0, 90);
  arc(190, 60, 80, 80, 0, 270);
  arc(290, 60, 80, 80, 180, 450);
  arc(390, 60, 80, 80, 0, 225);
}

//Alternatively, you can convert your entire sketch to use degrees instead of
//radians using the angleMode() function. This changes all functions that accept
//or return angles to use degrees or radians based on which parameter is passed
//in, instead of you needing to convert them.
