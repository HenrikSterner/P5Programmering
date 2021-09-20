function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 10; i++){
        fill(random(0,255), random(0,255), random(0,255));
        ellipse(random(10, width-10), random(10, height-10), 10);
    }
}