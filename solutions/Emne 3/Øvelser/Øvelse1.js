function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseX > width/2) {
    rect(150, 175, 100, 50);
  }
  else {
   ellipse(200, 200, 50, 50); 
  }
}
