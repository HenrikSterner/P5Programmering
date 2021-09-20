let players = []
let lvls = [
    //lvl 1
    [
        //lines
        [
            [30, 10, 30, 90],
            [30, 90, 70, 90],
            [30, 10, 70, 10],
            [70, 10, 70, 90],
            [40, 30, 60, 30],
        ],
        //hole
        [50, 20, 3],

        //start
        [50, 80],
    ],
    //lvl 2
    [
        //lines
        [
            [20, 30, 20, 70],
            [20, 70, 80, 70],
            [20, 30, 80, 30],
            [80, 30, 80, 70],
            [30, 30, 30, 50],
            [40, 70, 40, 50],
            [50, 30, 50, 50],
            [60, 70, 60, 50],
            [70, 30, 70, 50],
        ],
        //hole
        [75, 50, 3],

        //start
        [25, 50],
    ],
    //lvl 3
    [
        //lines
        [
            [30, 10, 40, 90],
            [40, 90, 60, 90],
            [30, 10, 70, 10],
            [70, 10, 60, 90],
            [45, 10, 50, 70],
            [55, 10, 50, 70],
        ],
        //hole
        [60, 20, 3],

        //start
        [40, 20],
    ],
    //lvl 4
    [
        //lines
        [
            [50, 40, 50, 60],
            [50, 60, 55, 60],
            [45, 30, 60, 30],
            [55, 30, 55, 50],
            [45, 30, 45, 70],
            [45, 70, 60, 70],
            [55, 60, 55, 70],
            [60, 30, 60, 70],
        ],
        //hole
        [52.5, 65, 3],

        //start
        [57.5, 35],
    ],
    //lvl 5
    [
        //lines
        [
            [30, 10, 30, 90],
            [30, 90, 70, 90],
            [30, 10, 70, 10],
            [70, 10, 70, 90],
            [45, 10, 50, 45],
            [55, 10, 50, 45],
            [45, 90, 50, 55],
            [55, 90, 50, 55],
            [30, 45, 45, 50],
            [30, 55, 45, 50],
            [70, 45, 55, 50],
            [70, 55, 55, 50],
        ],
        //hole
        [65, 20, 3],

        //start
        [35, 20],
    ],

]

let nrPlayers = 1;
let curLvl = 0;
let curPlayer = 0;
let scaleX;
let scaleY;
let playersMove = false;
let playerShot = false;
let gameStarted = false;
let gameDone = false;
let firstTime = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    scaleX = width / 100;
    scaleY = height / 100;
    background(125);
    fill(156, 113, 6);
    rect(1 * scaleX, 1 * scaleY, 98 * scaleX, 98 * scaleY);
    let makeButton = createButton("Tilføj spiller");
    makeButton.position(65 * scaleX, 30 * scaleY);
    makeButton.size(10 * scaleX);
    makeButton.mousePressed(() => {
        nrPlayers++
    });
    let removeButton = createButton("Fjern spiller");
    removeButton.position(25 * scaleX, 30 * scaleY);
    removeButton.size(10 * scaleX);
    removeButton.mousePressed(() => {
        if (nrPlayers > 1) nrPlayers--
    });
    let startButton = createButton("Start spillet");
    startButton.position(45 * scaleX, 80 * scaleY);
    startButton.size(10 * scaleX);
    startButton.mousePressed(() => {
        for (let i = 0; i < nrPlayers; i++) {
            createPlayer();
            gameStarted = true;
            makeButton.remove();
            removeButton.remove();
            startButton.remove();
        }
    });

    textAlign(CENTER)
    textSize(4 * scaleX);
    fill(0)
    angleMode(DEGREES);
    for (i in lvls) {
        for (j in lvls[i][0]) {
            lvls[i][0][j][0] *= scaleX;
            lvls[i][0][j][1] *= scaleY;
            lvls[i][0][j][2] *= scaleX;
            lvls[i][0][j][3] *= scaleY;
        }
        lvls[i][1][0] *= scaleX;
        lvls[i][1][1] *= scaleY;
        lvls[i][1][2] *= scaleX;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    for (i in players) {
        players[i].x /= scaleX;
        players[i].size /= scaleX;
        players[i].y /= scaleY;
    }
    for (i in lvls) {
        for (j in lvls[i][0]) {
            lvls[i][0][j][0] /= scaleX;
            lvls[i][0][j][1] /= scaleY;
            lvls[i][0][j][2] /= scaleX;
            lvls[i][0][j][3] /= scaleY;
        }
        lvls[i][1][0] /= scaleX;
        lvls[i][1][1] /= scaleY;
        lvls[i][1][2] /= scaleX;
    }
    scaleX = width / 100;
    scaleY = height / 100;
    for (i in players) {
        players[i].x *= scaleX;
        players[i].size *= scaleX;
        players[i].y *= scaleY;
    }
    for (i in lvls) {
        for (j in lvls[i][0]) {
            lvls[i][0][j][0] *= scaleX;
            lvls[i][0][j][1] *= scaleY;
            lvls[i][0][j][2] *= scaleX;
            lvls[i][0][j][3] *= scaleY;
        }
        lvls[i][1][0] *= scaleX;
        lvls[i][1][1] *= scaleY;
        lvls[i][1][2] *= scaleX;
    }
}
function draw() {
    if (gameStarted) {
        background(125);


        //colliderer med vægene
        for (j in lvls[curLvl][0]) {
            if (circleLineColision(players[curPlayer], lvls[curLvl][0][j])) {
                let vects = retVectorLinje(lvls[curLvl][0][j]);
                let normV;
                if (dist(players[curPlayer].x, players[curPlayer].y, vects[0].x, vects[0].y) > dist(players[curPlayer].x, players[curPlayer].y, vects[1].x, vects[1].y)) {
                    normV = vects[1];
                } else normV = vects[0];
                normV.normalize();
                players[curPlayer].movement.reflect(normV)
            }
        }

        //falder i hull
        if (circleCircleCollision(players[curPlayer].x, players[curPlayer].y, players[curPlayer].size / 2, lvls[curLvl][1][0], lvls[curLvl][1][1], lvls[curLvl][1][2])) {
            players[curPlayer].inHole = true;
            let x = 0;
            for (i in players) {
                if (!players[i].inHole) x++;
            }
            if (x == 0) {
                curLvl++
                if (curLvl > lvls.length - 1) {
                    gameStarted = false;
                    gameDone = true;
                }
                else {
                    for (i in players) {
                        players[i].inHole = false;
                        players[i].x = lvls[curLvl][2][0] * scaleX;
                        players[i].y = lvls[curLvl][2][1] * scaleY;
                        players[i].movement.x = 0;
                        players[i].movement.y = 0;
                    }
                }
            }
            print(x)
        }
        if (!gameDone) {
            //bevæger spillere
            let speedsum = 0;
            for (i in players) {
                players[i].move();
                speedsum += players[i].speed;
            }
            if (playerShot) {
                if (speedsum > 0) playersMove = true;
                else {
                    playersMove = false;
                    playerShot = false;
                    curPlayer++;
                    if (curPlayer == players.length) curPlayer = 0;
                    while(players[curPlayer].inHole){
                        curPlayer++;
                        if (curPlayer == players.length) curPlayer = 0;
                    }
                }
            }

            //tegner hullet
            fill(0);
            stroke(0);
            ellipse(lvls[curLvl][1][0], lvls[curLvl][1][1], lvls[curLvl][1][2]);

            //tegner spillere
            for (i in players) players[i].draw();

            //tegner linjer
            for (i in lvls[curLvl][0]) line(lvls[curLvl][0][i][0], lvls[curLvl][0][i][1], lvls[curLvl][0][i][2], lvls[curLvl][0][i][3])

            //tegn bevægelsesstreg
            if (!playersMove) {
                stroke(0, 255, 0);
                line(players[curPlayer].x, players[curPlayer].y, mouseX, mouseY);
            }
        }
    }
    else if (gameDone) {
        fill(0)
        text("Tilykke. Du er nu færdig", 50 * scaleX, 30 * scaleY);
    } else {
        fill(156, 113, 6);
        rect(1 * scaleX, 1 * scaleY, 98 * scaleX, 98 * scaleY);
        fill(0)
        text(nrPlayers, 50 * scaleX, 30 * scaleY);

    }
}

function mouseReleased() {
    if (gameStarted) {
        if (firstTime) {
            firstTime = false;
        } else {
            if (!playersMove) {
                playerShot = true
                let dir = createVector(mouseX - players[curPlayer].x, mouseY - players[curPlayer].y)
                players[curPlayer].speed = dir.mag() / 70;
                players[curPlayer].movement = dir.normalize();
            }
        }
    }
}

function createPlayer() {
    let player = {
        x: lvls[curLvl][2][0] * scaleX,
        y: lvls[curLvl][2][1] * scaleY,
        movement: createVector(0, 0),
        speed: 0,
        size: 2 * scaleX,
        nr: players.length,
        color: randomColor(),
        inHole: false,
        draw: function () {
            if (!this.inHole) {
                stroke(0);
                fill(this.color);
                ellipse(this.x, this.y, this.size);
            }
        },
        move: function () {
            this.x += this.movement.x * this.speed;
            this.y += this.movement.y * this.speed;
            if (this.speed > 1) this.speed -= this.speed / 50;
            else if (this.speed < -1) this.speed += this.speed / 50;
            else this.speed = 0;
        },
    }
    players.push(player);
}

function randomColor() {
    let color = [random(0, 255), random(0, 255), random(0, 255)];
    return color;
}

function retVectorLinje(linje) {
    let v1 = createVector(linje[2] - linje[0], linje[3] - linje[1])
    let v2 = v1.copy();
    v1.rotate(90);
    v2.rotate(-90);
    return [v1, v2];
}

function circleLineColision(obj, linje) {
    let length = dist(linje[0], linje[1], linje[2], linje[3]);
    let d1 = dist(obj.x, obj.y, linje[0], linje[1]);
    let d2 = dist(obj.x, obj.y, linje[2], linje[3]);
    length = sqrt(length * length + obj.size * obj.size)
    if (d1 + d2 >= length - 0.2 && d1 + d2 <= length + 0.2) return true;
    else return false;
}

function circleCircleCollision(x1, y1, size1, x2, y2, size2) {
    if (sq(x1 - x2) + sq(y1 - y2) < sq(size1 / 2 + size2 / 2)) {
        return true;
    }
}