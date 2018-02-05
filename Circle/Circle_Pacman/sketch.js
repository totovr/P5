function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200)
  arc(400, 300, 100, 100, 0, PI+HALF_PI)
}

//The first and second parameters set the location, while the third and fourth
//set the width and height. The fifth parameter sets the angle to start the arc
//and the sixth sets the angle to stop. The angles are set in radians, rather
//than degrees. Radians are angle measurements based on the value of pi (3.14159)
