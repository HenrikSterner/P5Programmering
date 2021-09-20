let x; 
let y; 
let xspeed; 
let yspeed; 
let posX
let posY

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50); 
  
  if(x < posX){
    x-=xspeed;
  }
  else if (x > posX) {
    x+=xspeed; 
  }
  if(y < posY){
    y-=yspeed;
  }
  else if (y > posY) {
    y+=yspeed; 
  }
  
  if (x > 375){
   x = 375; 
  }
  else if (x < 25){
   x = 25; 
  }
  
  if (y > 375){
   y = 375; 
  }
  else if (y < 25){
   y = 25; 
  }
  
  if (mouseIsPressed){
    posX = mouseX;
    posY = mouseY;
  }
}