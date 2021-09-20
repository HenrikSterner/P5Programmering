function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  if (keyCode === 70) {
    background(255);
    rect(200,200,200,200);
  }
  else if (keyCode === 67) {
    background(255);
    ellipse(300,300,100,100);
  }
  else if (keyCode === 69) {
    background(255);
    ellipse(300,300,150,50);
  }
}