let x1 = 200;
let xspeed1 = 3;
let y1 = 300;
let yspeed1 = 3;
let ost1 = 0;
let x2 = 400;
let xspeed2 = 3;
let y2 = 300;
let yspeed2 = 3;
let ost2 = 0;
let timer = 0;

var oste = [[400,400],[200,200]];

function setup() 
{ 
  createCanvas(600, 600);
  strokeWeight(10);
  
} 
function draw() { 
 background(204); 
   
  for (var i = 0; i < oste.length; i++){
    ost(oste[i][0],oste[i][1], i);
  }
  
  //player 1
  if (keyIsPressed){
    if ((key == 'w') || (key == 'W')) { 
      y1 -= yspeed1;
    } 
    if ((key == 's') || (key == 'S')) { 
      y1 += yspeed1;
    } 
    if ((key == 'a') || (key == 'A')) { 
       x1 -= xspeed1;
    } 
    if ((key == 'd') || (key == 'D')) { 
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
  rect(x2, y2, 50, 50);
  
  timer++;
  if (timer == 300) {
    timer = 0; 
    oste.push([random(0,width),random(0,height)]);
  }
  text("Player 1: " + ost1, 10, 10);
  text("Player 2: " + ost2, 530, 10);
} 

function ost(x, y, i) {
  point(x,y);
  if (((x1+50 > x) && (x  > x1-50)) && ((y1+50 > y) && (y  > y1-50))) {
    oste.splice(i,1);
    ost1++;
  }
  if (((x2+50 > x) && (x  > x2-50)) && ((y2+50 > y) && (y  > y2-50))) {
    oste.splice(i,1);
    ost2++;
  }
}