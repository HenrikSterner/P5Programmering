let x; 
let y; 
let xspeed; 
let yspeed; 
let xleft = false;
let ydown = false;
let x2; 
let y2; 
let xspeed2; 
let yspeed2; 
let xleft2 = false;
let ydown2 = false;


function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
  x2 = width/4
  y2 = height/4
  xspeed2 = -2; 
  yspeed2 = 0.5*xspeed2; 
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50); 
  ellipse(x2, y2, 50, 50); 
  
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
  
  if (xleft2){
    x2+=xspeed2;
  }
  else{
   x2-=xspeed2; 
  }
  
  if (ydown2){
    y2-=yspeed2;
  }
  else{
   y2+=yspeed2; 
  }
  
  if (x2 > 375){
    xleft2 = true;
  }
  else if (x2 < 25){
    xleft2 = false;
  }
  
  if (y2 > 375){
    ydown2 = false;
  }
  else if (y2 < 25){
    ydown2 = true;
  }
}
/*
de kolliderer ikke med hindanden :)
*/