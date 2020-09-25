// p5.js reference:
// https://p5js.org/reference/
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220, 175, 200);
  // if (keyIsPressed === true) {
  //   fill(0);
  //   rotate(1);
  // }
  if (keyIsDown(LEFT_ARROW)) {
    // rotate(20);
    translate(p5.Vector.fromAngle(millis() / 1000, 100));
  } else {
    fill(255);
  }
  for (i = 0; i < 10; i++) {
    rect(25*i, 25*i, 50, 50);
  }
}
