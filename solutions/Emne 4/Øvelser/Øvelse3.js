let pos = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    while (pos.length < 10) {
        pos.push([random(100, windowWidth - 100), random(50, windowHeight - 50), randomColor()])
    }
    for (let i = 0; i < pos.length; i++) {
        fill(pos[i][2]);
        rect(pos[i][0], pos[i][1], 100, 50);
    }
}

function randomColor() {
    let color;
    color = [random(0, 255), random(0, 255), random(0, 255)];
    return color;
}