var bug;
var mug;

function setup() {
  createCanvas(640, 480);
  background(204);
  // Create object and pass in parameters
  bug = new JitterBug(width / 2, height / 2, 20);
  mug = new JitterBug(width / 3, height / 3, 50);
}

function draw() {
  bug.move();
  bug.display();
  mug.move();
  mug.display();
}
// Constructor
function JitterBug(tempX, tempY, tempDiameter) {
  // properties
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;
  // methods
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
