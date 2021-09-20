function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  if (keyCode === 70) {
    background(255);
    rect(mouseX,mouseY,200,200);
    keyCode = 1;
  }
  else if (keyCode === 67) {
    background(255);
    ellipse(mouseX,mouseY,100,100);
    keyCode = 1;
  }
  else if (keyCode === 69) {
    background(255);
    ellipse(mouseX,mouseY,150,50);
    keyCode = 1;
  }
}