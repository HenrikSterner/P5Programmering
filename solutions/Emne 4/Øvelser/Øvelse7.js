function setup() {
    createCanvas(800, 800);
}

function draw() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                fill(255);
            } else {
                fill(0);
            }
            rect(100*i, 100*j, 100, 100);
        }
    }
}