var finite;

function setup() {
  createCanvas(640,360);
  finite = new DrawCircles(width/2,height/2,200);
}

function draw() {
  background(255);
  finite.display();
}
