let bubble1;
let bubble2;

function setup() {
  // put setup code here
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  // put drawing code here
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
