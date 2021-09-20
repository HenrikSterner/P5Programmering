function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(0);
    rect(0, windowHeight/2, windowWidth, 2);
    for(let i = 0; i <10; i++) {
        rect(windowWidth/40 +  windowWidth/10*i, windowHeight/2 - 50, windowWidth/20, 50);
    }
}

