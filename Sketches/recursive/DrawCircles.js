function DrawCircles(tempx, tempy, tempradius) {
  //defineProperties
  this.x = tempx;
  this.y = tempy;
  this.radius = tempradius;
  //Methods
  this.display = function() {
    stroke(0);
    noFill();
    ellipse(this.x, this.y, this.radius, this.radius);
    if (radius > 8) {
      drawCircle(this.x + this.radius / 2, this.y, this.radius / 2);
      drawCircle(this.x - this.radius / 2, this.y, this.radius / 2);
      drawCircle(this.x, this.y + this.radius / 2, this.radius / 2);
      drawCircle(this.x, this.y - this.radius / 2, this.radius / 2);
    }
  }
}
