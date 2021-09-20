cookie = [300,300];
function setup () {
  createCanvas(600, 600);
  fill(150, 120, 0);
}

function draw () {
  background(204); 
  ellipse(cookie[0], cookie[1], 50, 50);
  
  if (mouseIsPressed && mouseButton == LEFT && cookie[0]-50 < mouseX && mouseX < cookie[0]+50 && cookie[1]-50 < mouseY && mouseY < cookie[1]+50) {
    cookie = [random(50, width-50), random(50, height-50)];
  }
}