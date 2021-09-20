function setup() {
  createCanvas(600, 600);
  fill(0);
  strokeWeight(4);
  background(255);
}

function draw() {
  if (mouseIsPressed){
    if (mouseButton == LEFT){
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}