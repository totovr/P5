var kuruma;

function setup() {
  createCanvas(400, 200);
  kuruma = new Car(0, 100, 24, color(100));
}

function draw() {
  background(150);
  kuruma.move();
  kuruma.bounce();
  kuruma.display();
}
