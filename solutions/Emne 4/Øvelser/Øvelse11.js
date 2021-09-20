let timer = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(5);
}

function draw() {
    background(125);
    translate(windowWidth/2, windowHeight/2);
    rotate((timer/50)%360);
    timer++;
    for (let i = 0; i < 5; i++){
        rotate(2*i);
        line(0, 0, 20*i, 200/i);
        rotate(-2*i);
    }

    
}