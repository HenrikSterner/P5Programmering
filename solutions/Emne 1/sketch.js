var flagPosX;
var flagPosY;
var flagSizeX;
var flagSizeY;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(100);
  rectMode(CENTER);
  ellipseMode(CENTER);

  //giver variablerne en værdi
  flagPosX = width/2 -200
  flagPosY = height/2
  flagSizeX = 600
  flagSizeY = 450

  //laver et tomt flag
  fill(255);
  rect(flagPosX,flagPosY,flagSizeX,flagSizeY);

  //Laver knapperne
  NyKnap(1,1,Japan,"Japan");
  NyKnap(2,1,Frankrig,"Frankrig");
  NyKnap(3,1,Indonesien,"Indonesien");
  NyKnap(1,2,Benin,"Benin");
  NyKnap(2,2,Kuwait,"Kuwait");
  NyKnap(3,2,Tjekkiet,"Tjekkiet");
  NyKnap(1,3,Maldiverne,"Maldiverne");
  NyKnap(2,3,Israel,"Israel");
  NyKnap(3,3,SydAfrika,"Syd Afrika");
}

function draw(){

}

//functioner til hvordan de forskellige flag skal se ud

function Japan(posX,posY,sizeX,sizeY){
  fill(255,0,0);
  ellipse(posX,posY,sizeY/5*3,sizeY/5*3);
}

function Frankrig(posX,posY,sizeX,sizeY){
  fill(0,0,255);
  rect(posX-sizeX/3,posY,sizeX/3,sizeY);
  fill(255,0,0);
  rect(posX+sizeX/3,posY,sizeX/3,sizeY);
}

function Indonesien(posX,posY,sizeX,sizeY){
  fill(255,0,0);
  rect(posX,posY-sizeY/4,sizeX,sizeY/2);
}

function Benin(posX,posY,sizeX,sizeY){
  fill(255,255,0);
  rect(posX,posY-sizeY/4,sizeX,sizeY/2);
  fill(255,0,0);
  rect(posX,posY+sizeY/4,sizeX,sizeY/2);
  fill(0,150,0);
  rect(posX-sizeX/10*3,posY,sizeX/5*2,sizeY);
}

function Kuwait(posX,posY,sizeX,sizeY){
  fill(0,150,0);
  rect(posX,posY-sizeY/3,sizeX,sizeY/3);
  fill(255,0,0);
  rect(posX,posY+sizeY/3,sizeX,sizeY/3); 
  fill(0);
  triangle(posX-sizeX/2,posY-sizeY/2,posX-sizeX/2,posY+sizeY/2,posX,posY);
  fill(255);
  rect(posX+sizeX/6,posY,sizeX/6*4,sizeY/3);
}

function Tjekkiet(posX,posY,sizeX,sizeY){
  fill(255,0,0);
  rect(posX,posY+sizeY/4,sizeX,sizeY/2); 
  fill(0,0,255);
  triangle(posX-sizeX/2,posY-sizeY/2,posX-sizeX/2,posY+sizeY/2,posX,posY);
}

function Maldiverne(posX,posY,sizeX,sizeY){
  fill(255,0,0);
  rect(posX,posY,sizeX,sizeY);
  fill(0,150,0);
  rect(posX,posY,sizeX/3*2,sizeY/5*2);
  fill(255);
  ellipse(posX+sizeX/50,posY,sizeY/4,sizeY/4);
  fill(0,150,0);
  ellipse(posX+sizeX/20,posY,sizeY/4,sizeY/4);
}

function Israel(posX,posY,sizeX,sizeY){
  fill(255);
  rect(posX,posY-sizeY/10*4,sizeX,sizeY/5);
  rect(posX,posY+sizeY/10*4,sizeX,sizeY/5);
  fill(0,0,255);
  rect(posX,posY-sizeY/10*4,sizeX,sizeY/9);
  rect(posX,posY+sizeY/10*4,sizeX,sizeY/9);
  fill(255,0);
  strokeWeight(sizeX/50);
  stroke(0,0,255);
  triangle(posX-sizeX/7, posY-sizeY/10, posX+sizeX/7, posY-sizeY/10, posX, posY+sizeY/5);
  triangle(posX-sizeX/7, posY+sizeY/10, posX+sizeX/7, posY+sizeY/10, posX, posY-sizeY/5);
  strokeWeight(0);
  stroke(0);
}

function SydAfrika(posX,posY,sizeX,sizeY){
  fill(255,0,0);
  rect(posX,posY-sizeY/3,sizeX,sizeY/3);
  fill(0,0,255);
  rect(posX,posY+sizeY/3,sizeX,sizeY/3); 
  fill(255);
  triangle(posX-sizeX/20*9,posY-sizeY/5*3,posX-sizeX/20*9,posY+sizeY/5*3,posX+sizeX/20,posY);
  fill(0,150,0);
  triangle(posX-sizeX/2,posY-sizeY/5*3,posX-sizeX/2,posY+sizeY/5*3,posX,posY);
  fill(0,150,0);
  rect(posX+sizeX/6,posY,sizeX/6*4,sizeY/5);
  fill(255,255,0);
  triangle(posX-sizeX/2, posY-sizeY/20*7, posX-sizeX/2, posY+sizeY/20*7, posX-sizeX/7, posY);
  fill(0);
  triangle(posX-sizeX/2, posY-sizeY/20*6, posX-sizeX/2, posY+sizeY/20*6, posX-sizeX/7-sizeX/20, posY);
  fill(0,0);
  stroke(100);
  strokeWeight(50);
  rect(posX,posY,sizeX+50,sizeY+50);
  strokeWeight(0);
}

//functioner til at lave knapperne

function NyKnap (nrX, nrY,land,navn){
  let button;
  let posX = width/2+70+130*nrX;
  let posY = height/4+100*nrY;
  button = createButton(navn);
  KnapFlag(posX+50,posY-30,land)
  button.size(100,30);
  button.position(posX,posY);
  button.mousePressed(() => {
    fill(255);
    rect(flagPosX,flagPosY,flagSizeX,flagSizeY);
    land(flagPosX,flagPosY,flagSizeX,flagSizeY)
  });
}

function KnapFlag(posX,posY,land){
  strokeWeight(0);
  fill(255);
  rect(posX,posY,60,40);
  land(posX,posY,60,40);
}