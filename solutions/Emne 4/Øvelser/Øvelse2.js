let pos = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    while (pos.length < 10) {
        pos.push([random(50, windowWidth-50), random(50, windowHeight-50)])
    }
    for (let i = 0; i < pos.length; i++) {
        ellipse(pos[i][0], pos[i][1], 50);
    }
}
