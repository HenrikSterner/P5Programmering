let vanLinje = [];
let lodLinje = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 10; i++) {
        let linje = {
            x1: 0,
            x2: 50,
            y1: random(10, height - 10),
            y2: 0,
        }
        linje.y2 = linje.y1;

        for (let j = 0; j < vanLinje.length; j++) {
            while (linje.y1 >= vanLinje[j].y1 - 10 && linje.y1 <= vanLinje[j].y1 + 10) {
                linje.y1 = random(10, height - 10);
                linje.y2 = linje.y1;
            }
        }
        vanLinje.push(linje);
    }

    for (let i = 0; i < 10; i++) {
        let linje = {
            y1: 0,
            y2: 50,
            x1: random(10, width - 10),
            x2: 0,
        }
        linje.x2 = linje.x1;

        for (let j = 0; j < lodLinje.length; j++) {
            while (linje.x1 >= lodLinje[j].x1 - 10 && linje.x1 <= lodLinje[j].x1 + 10) {
                linje.x1 = random(10, width - 10);
                linje.x2 = linje.x1;
            }
        }
        lodLinje.push(linje);
    }
}

function draw() {
    background(255);
    for (let i = 0; i < vanLinje.length; i++) {
        vanLinje[i].x1++;
        vanLinje[i].x2++;
        line(vanLinje[i].x1, vanLinje[i].y1, vanLinje[i].x2, vanLinje[i].y2);
    }
    for (let i = 0; i < lodLinje.length; i++) {
        lodLinje[i].y1 += 2;
        lodLinje[i].y2 += 2;
        line(lodLinje[i].x1, lodLinje[i].y1, lodLinje[i].x2, lodLinje[i].y2);
    }
}
