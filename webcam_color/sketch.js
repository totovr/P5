var capture;

function setup() {
  createCanvas(640, 480);
  //capture.size(640, 480);
  var constraints = {
    audio: false,
    video: {
      facingMode: "user"
    }
  };
  capture = createCapture(constraints);
  //capture.hide();
}

function draw() {
  image(capture, 0, 0, 640, 480);
  filter('THRESHOLD');
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);		//resize canvas function
}
