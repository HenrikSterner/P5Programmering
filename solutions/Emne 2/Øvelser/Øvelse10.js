let x; 
let y; 
let xspeed; 
let yspeed; 
let xleft = false;
let ydown = false;

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 

function draw() { 
  background(220);
  rect(x, 20, 50, 10);
  rect(20, y, 10, 50);
  
  if (xleft){
    x+=xspeed;
  }
  else{
   x-=xspeed; 
  }
  
  if (ydown){
    y-=yspeed;
  }
  else{
   y+=yspeed; 
  }
  
  if (x > 375){
    xleft = true;
  }
  else if (x < 25){
    xleft = false;
  }
  
  if (y > 375){
    ydown = false;
  }
  else if (y < 25){
    ydown = true;
  }
}