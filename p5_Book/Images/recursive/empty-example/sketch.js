function setup() {
  createCanvas(640,360);
}

function draw() {
  background(255);
  drawCircle(width/2,height/2,200);
}

function drawCircle(tempx, tempy, tempradius) {
  var x = tempx;
  var y = tempy;
  var radius = tempradius;
  stroke(0);
  noFill();
  ellipse(x, y, radius, radius);
  if(radius > 8) {
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
    drawCircle(x, y + radius/2, radius/2);
    drawCircle(x, y - radius/2, radius/2);
  }
}
