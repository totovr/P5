function Car(TglobalX, TglobalY, TSize, TColor) {
  //properties
  this.x = TglobalX;
  this.y = TglobalY;
  this.thesize = TSize;
  this.c = TColor;
  this.speed = 2;

  //methods
  this.move = function() {
    // Change the x location by speed
    this.x = this.x + this.speed;
  };

  this.bounce = function() {
    if ((this.x > 400) || (this.x < 0)) {
      this.speed = this.speed * -1;
    }
  };

  this.display = function() {
    this.offset = this.thesize / 4;
    rectMode(CENTER);
    stroke(0);
    fill(this.c);
    rect(this.x, this.y, this.thesize, this.thesize / 2);
    fill(200);
    rect(this.x - this.offset, this.y - this.offset, this.offset, this.offset / 2);
    rect(this.x + this.offset, this.y - this.offset, this.offset, this.offset / 2);
    rect(this.x - this.offset, this.y + this.offset, this.offset, this.offset / 2);
    rect(this.x + this.offset, this.y + this.offset, this.offset, this.offset / 2);
  };

}
