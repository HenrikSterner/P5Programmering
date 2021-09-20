let y;
let yspeed = 3;

function setup() { 
  createCanvas(400, 400);
  y = height / 2;
} 

function draw() { 
  background(220);
  if (y > height - 25 || y < 0 + 25) {
    yspeed *= -1;
  }
  
  //Move
  y += yspeed;
  ellipse(width / 2, y, 50, 50);
}