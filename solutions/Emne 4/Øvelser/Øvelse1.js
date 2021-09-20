function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 30; i++) {
        ellipse(windowWidth/2, windowHeight/2, 600 - 20*i);
    }
}