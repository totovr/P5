var bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  // Create object and pass in parameters
  bug = new JitterBug(width / 2, height / 2, 20);
}

function draw() {
  bug.move();
  bug.display();
}
