let vinkel = 0;
let pos;
let x;
let y;
let b;
let kastet = false;
let kurve = []; 
let målX = 0;
let målY = -20;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(10);
    frameRate(200);
    angleMode(DEGREES);
}

function draw() {
    background(125);
    translate(0, windowHeight);
    line(70, -120, 70, -40);
    ellipse(70, -120, 30);
    line(70, -40, 80, 0);
    line(70, -40, 60, 0);
    line(70, -90, 40, -50);

    translate(70, -90);
    rotate(vinkel);
    line(0, 0, 30, 40);
    rotate(-vinkel);
    translate(-70, 90);
    ellipse(målX, målY, 100);
    if (kastet){
        if(vinkel > -90){
            pos = nextLine(30, 40, vinkel, 70, -90);

            ellipse(pos[0], pos[1], 50);
            vinkel--;
        } else {
        
            if (x == undefined){
                x = pos[0];
                y = pos[1];
                b = 0.005*sq(x)-3.5*x - y;
            }
            
            if (y < -30){
                y = 0.005*sq(x)-3.5*x -b;
                x+=3;
            } else {
                textSize(30);
                if (roundOverlap(x, y, 50, målX, målY, 100)) {
                    text("YAAAAAAY", windowWidth/2, 0-windowHeight/2-100);
                } else {
                    text("Awwwwwww", windowWidth/2, 0-windowHeight/2-100);
                }
            }
            
            kurve.push([x,y]);
            for (let i = 0; i < kurve.length; i++) {
                ellipse(kurve[i][0], kurve[i][1], 10);
            }
            ellipse(x,y,50);
            
        }
    } else {
        ellipse(100, -50, 50);
        målX = mouseX;
    }
    
    
    
}

function keyPressed() {
    if (keyCode == "75") {
        kastet = true;
    }
}

function nextLine(vectorX, vectorY, angle, centerX, centerY) {
    let x;
    let y;
    let length;
  
    length = sqrt(sq(vectorX-Math.abs(centerX))+ sq(vectorY-Math.abs(centerY))) //finder længden af linjen
  
    x = length * cos(angle+vectorX) + centerX; //finder nye x position
    y = length * sin(angle+vectorY) + centerY; //finder nye y position
  
    return [x,y];
  }

  function roundOverlap (x1, y1, size1, x2, y2, size2) {
    if (sq(x1 - x2) + sq(y1 - y2) < sq(size1/2 + size2/2) ) {
        return true;
    }
}