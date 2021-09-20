//variabler
var posX
var posY
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var col0 = (0,0,0);
var col1 = (0,0,0);
var col2 = (0,0,0);
var col3 = (0,0,0);


//gør ting klar
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225, 160, 180);
  strokeWeight(10);
  angleMode(DEGREES);
  //frameRate(1);
  
}

function draw() {
  background(225, 160, 180);  //laver ny baggrund, så man ikke kan se ting fra sidste frame
  //hvis vinklen er delbart med 360, så er den kørt en omgang, og så får den ny farve
  if (i % 360 == 0){
    col0 = randomColor();
  }
  stroke(col0);

  translate(width/2, height/2); //setter sentrum til at være i midten
  rotate(i); 
  line(0, 0, 200, 0); 
  i++;
  
  //farve ting
  if (j % 360 == 0){
    col1 = randomColor();
  }
  stroke(col1);

  
  rotate(-i); //fjerner rotationen fra før
  let pos1 = nextLine(200, 0, i, 0 , 0); //finder ud af hvor sidste linjes spids er
  let x1 = pos1[0];
  let y1 = pos1[1];
  translate(x1, y1); //sætter centrum til at være på sidste linjes spids
  rotate(j);
  line(0, 0, 100, 0);
  j+=2;

  //farve ting
  if (k % 360 == 0){
    col2 = randomColor();
  }
  stroke(col2);

  rotate(-j); //fjerner rotationen fra før
  let pos2 = nextLine(100, 0, j, 0 , 0); //finder ud af hvor sidste linjes spids er
  let x2 = pos2[0];
  let y2 = pos2[1];
  translate(x2, y2); //sætter centrum til at være på sidste linjes spids
  rotate(k);
  line(0, 0, 50, 0);
  k+=4;

  //farve ting
  if (l % 360 == 0){
    col3 = randomColor();
  }
  stroke(col3);

  rotate(-k); //fjerner rotationen fra før
  let pos3 = nextLine(50, 0, k, 0 , 0); //finder ud af hvor sidste linjes spids er
  let x3 = pos3[0];
  let y3 = pos3[1];
  translate(x3, y3); //sætter centrum til at være på sidste linjes spids
  rotate(l);
  line(0, 0, 25, 0);
  l+=8;
  
}

//finder positionen af den næste linje
function nextLine(vectorX, vectorY, angle, centerX, centerY) {
  let x;
  let y;
  let length;

  length = sqrt(sq(vectorX-centerX)+ sq(vectorY-centerY)) //finder længden af linjen

  x = length * cos(angle) + centerX; //finder nye x position
  y = length * sin(angle) + centerY; //finder nye y position

  return [x,y];
}
//funktion til at lave en tilfældig farve
function randomColor() {
  let color;
  color = [random(0,255), random(0,255), random(0,255)];
  return color;
}