function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(75, 60, 90, 90);
  strokeWeight(8); // Stroke weight to 8 pixels
  ellipse(175, 60, 90, 90);
  ellipse(279, 60, 90, 90);
  strokeWeight(20); // Stroke weight to 20 pixels
  ellipse(389, 60, 90, 90);
}

//Alternatively, you can convert your entire sketch to use degrees instead of
//radians using the angleMode() function. This changes all functions that accept
//or return angles to use degrees or radians based on which parameter is passed
//in, instead of you needing to convert them.
