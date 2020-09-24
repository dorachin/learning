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
    rotate(20);
  } else {
    fill(255);
  }
  rect(25, 25, 50, 50);
}
