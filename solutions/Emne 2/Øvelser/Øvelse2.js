function setup() {
  createCanvas(600, 600);
  fill(0);
  noStroke();
}

function draw() {
  if (mouseIsPressed){
    if (mouseButton == LEFT){
      ellipse(mouseX, mouseY, 50, 50);
    }
    else if (mouseButton == RIGHT){
      rect(mouseX, mouseY, 60, 50);
    }
  }
}