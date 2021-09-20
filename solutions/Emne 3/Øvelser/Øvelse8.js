let x1 = 200;
let xspeed1 = 3;
let y1 = 300;
let yspeed1 = 3;
let x2 = 400;
let xspeed2 = 3;
let y2 = 300;
let yspeed2 = 3;

function setup() 
{ 
 createCanvas(600, 600);
  
} 
function draw() { 
 background(204); 
   
  //player 1
  if (keyIsPressed){
    if ((key == 'a') || (key == 'A')) { 
      y1 -= yspeed1;
    } 
    if ((key == 's') || (key == 'S')) { 
      y1 += yspeed1;
    } 
    if ((key == 'd') || (key == 'D')) { 
       x1 -= xspeed1;
    } 
    if ((key == 'f') || (key == 'F')) { 
      x1 += xspeed1;
    } 
  }
  ellipse(x1, y1, 50, 50);
  
 
   
  //player 2
  if (keyIsPressed){
    if (keyCode == UP_ARROW) { 
      y2 -= yspeed2;
    } 
    if (keyCode == DOWN_ARROW) { 
      y2 += yspeed2;
    } 
    if (keyCode == LEFT_ARROW) { 
      x2 -= xspeed2;
    } 
    if (keyCode == RIGHT_ARROW) { 
      x2 += xspeed2;
    } 
  }
  rect(x2, y2, 70, 50);
} 