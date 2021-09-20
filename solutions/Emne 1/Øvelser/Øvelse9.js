function setup() {
    createCanvas(600, 600);
    background(255);
    
    fill(225,160,180);
    beginShape();
      vertex(300,300);
      vertex(200,200);
      vertex(250,370);
      vertex(350,450);
      vertex(420,240);
    endShape(CLOSE);
    text("Company",280,500);
  }