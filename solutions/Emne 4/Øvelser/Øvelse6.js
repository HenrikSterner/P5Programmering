let cirkler = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(125);
    if (frameCount % 120 == 0 && cirkler.length < 10) {
        createCirkel();
    }
    for (let i = 0; i < cirkler.length; i++) {
        if (cirkler[i].y % 50 == 25) {
            if (cirkler[i].left) {
                cirkler[i].x++;
                if (cirkler[i].x > windowWidth-25){
                    cirkler[i].y++;
                    cirkler[i].left = false;
                }
            } else {
                cirkler[i].x--;
                if (cirkler[i].x < 25){
                    cirkler[i].y++;
                    cirkler[i].left = true;
                }
            }
        } else {
            cirkler[i].y++;
        }
        ellipse(cirkler[i].x, cirkler[i].y, cirkler[i].size);
    }
}

function createCirkel() {
    let cirkel = {
        x: 25,
        y: 0,
        size: 50,
        left: true
    }
    cirkler.push(cirkel);
}