let mouse = {
    size: 50,
    posX: 0,
    posY: 0,
    speed: 4,
    moveX: 0,
    moveY: 0,
    controlls: [87, 83, 65, 68],
    color: [161, 160, 157],
    alive: true,
    type: "rodent",
    nrEaten: 0,
};

let rat = {
    size: 50,
    posX: 0,
    posY: 0,
    speed: 4,
    moveX: 0,
    moveY: 0,
    controlls: [38, 40, 37, 39],
    color: [102, 98, 85],
    alive: true,
    type: "rodent",
    nrEaten: 0,
};

let cats = [];

let cheeses = [];

let time=0;

let start = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    randomStartPos(mouse);
    randomStartPos(rat);
    frameRate(60);
    textSize(30);
    textAlign(CENTER);
}

function draw() {
    resizeCanvas(windowWidth, windowHeight);
    background(125);
    if (start) {
        //tjekker, om objekterne rammer relevante objekter
        collision(mouse);
        collision(rat);
        for (let i = 0; i < cheeses.length; i++) {
            collision(cheeses[i]);
        }

        //tager inputs for at bestemme hvor de kontrollerbare 
        control(mouse);
        control(rat);


        //bevæger det der skal bevæges
        move(mouse);
        move(rat);
        for (let i = 0; i < cats.length; i++) {
            move(cats[i]);
        }

        //laver en ny kat hvert minut
        if (time %1200 == 0){
            makeCat();
        }
        //laver en ny ost hver 10 sekunder
        if (time %300 == 0){
            makeCheese();
        }

        //laver tekst til kat timer
        fill(cats[0].color);
        text(20 - round(time/60%20), windowWidth/2-50, 20, windowWidth/2+50, 30);

        //laver tekst til ost timer
        fill(cheeses[0].color);
        text(5 - round(time/60%5), windowWidth/2-50, 50, windowWidth/2+50, 60);


        //spiller 1 oste counter
        fill(mouse.color);
        text(mouse.nrEaten, windowWidth/4-50, 30, windowWidth/4+50, 50);


        //spiller 2 oste counter
        fill(rat.color);
        text(rat.nrEaten, windowWidth/4*3-50, 30, windowWidth/4*3+50, 50);

        time++;
    }else {
        if (keyIsDown(32)){
            start = true;
            textAlign(LEFT);
        }
        else {
            fill(156, 113, 6);
            rect(windowWidth/40, windowHeight/40, windowWidth -windowWidth/20, windowHeight -windowHeight/20);
            fill(0);
            text( "Spiller 1 : WASD", windowWidth/2, windowHeight/10);
            text( "Spiller 2 : Piletasterne", windowWidth/2, windowHeight/10*2);
            text( "Pas på du ikke bliver spist af de blå katte", windowWidth/2, windowHeight/10*4);
            text( "Prøv at spise så mange af de brune oste, som du kan", windowWidth/2, windowHeight/10*5);
            text( "Tryk på space, for at starte", windowWidth/2, windowHeight/10*9);
        }
    }
}

function randomStartPos (obj) {
    obj.posX = random(obj.size/2, windowWidth-obj.size/2);
    obj.posY = random(obj.size/2, windowHeight-obj.size/2);
}

function move(obj) {
    //Tjekker kant på x aksen
    if(obj.posX - obj.size/2 < 0) {
        obj.posX = obj.size/2;
        obj.moveX *= -1;
    }

    else if (obj.posX+obj.size/2 > windowWidth) {
        obj.posX = windowWidth - obj.size/2;
        obj.moveX *= -1;
    }

    else {
        obj.posX += obj.moveX;
    }

    //tjekker kant på y aksen
    if(obj.posY - obj.size/2 < 0) {
        obj.posY = obj.size/2;
        obj.moveY *= -1;
    }

    else if (obj.posY+obj.size/2 > windowHeight) {
        obj.posY = windowHeight - obj.size/2;
        obj.moveY *= -1;
    }

    else {
        obj.posY += obj.moveY;
    }
    
    //tegner objekterne
    fill(obj.color);
    if (obj.alive) {
        ellipse(obj.posX, obj.posY, obj.size);
    }
}

function collision(obj) {
    //tjekker efter en gnaver, som er i live
    if (obj.type == "rodent" && obj.alive) {
        //tjekker kollision med katte, og så dræber gnaveren
        for (let i = 0; i < cats.length; i++) {
             if (sqrt(sq(obj.posX - cats[i].posX) + sq(obj.posY - cats[i].posY)) < obj.size/2 + cats[i].size/2 ) { //afstands udregning
                obj.alive = false;
                cats[i].size += 10;
            }
        }
    }
    //tjekker efter mad, som er i "live"
    else if (obj.type == "food" && obj.alive){
        //tegner maden her, fordi den ikke skal bevæge sig, og jeg er doven :P
        fill(obj.color);
        if (obj.alive) {
            ellipse(obj.posX, obj.posY, obj.size);
        }
        //tjekker om rotten er ved maden, og så bliver den spist
        if (sqrt(sq(obj.posX - rat.posX) + sq(obj.posY - rat.posY)) < obj.size/2 + rat.size/2 && rat.alive) { //afstands udregning
            obj.alive = false;
            rat.size+=5;
            rat.nrEaten++;
       }
       //tjekker om musen er ved maden, og så bliver den spist
       else if (sqrt(sq(obj.posX - mouse.posX) + sq(obj.posY - mouse.posY)) < obj.size/2 + mouse.size/2 && mouse.alive) { //afstands udregning
            obj.alive = false;
            mouse.size+= 5;
            mouse.nrEaten++;
        } else {
            for (let i = 0; i < cats.length; i++) {
                if (sqrt(sq(obj.posX - cats[i].posX) + sq(obj.posY - cats[i].posY)) < obj.size/2 + cats[i].size/2 ){
                    obj.alive = false;
                cats[i].size += obj.size;
                }
            }
        }
    }
    
}

function control(obj){
    //tager inputs til at rykke gnaverne baseret på controlls input listerne
    if (keyIsDown(obj.controlls[0])) {
        obj.moveY = -obj.speed;
    }
    else if (keyIsDown(obj.controlls[1])) {
        obj.moveY = obj.speed;
    }
    else {
        obj.moveY = 0;
    }

    if (keyIsDown(obj.controlls[2])) {
        obj.moveX = -obj.speed;
    }
    else if (keyIsDown(obj.controlls[3])) {
        obj.moveX = obj.speed;
    }
    else {
        obj.moveX = 0;
    }
}

function makeCat () {
    let cat = {
    size: 80,
    posX: 0,
    posY: 0,
    angle: 2,
    moveX: 2,
    moveY: 2,
    color: [110, 149, 153],
    alive: true,
    type: "cat",
    }
    cats.push(cat);
    randomStartPos(cats[cats.length-1])
    cats[cats.length-1].angle = random(0, 2* Math.PI);
    cats[cats.length-1].moveX = cos(cats[cats.length-1].angle)*2;
    cats[cats.length-1].moveY = sin(cats[cats.length-1].angle)*2;
    while (roundOverlap(cats[cats.length-1].posX, cats[cats.length-1].posY, cats[cats.length-1].size*2, mouse.posX, mouse.posY, mouse.size*2) ||roundOverlap(cats[cats.length-1].posX, cats[cats.length-1].posY, cats[cats.length-1].size*2, rat.posX, rat.posY, rat.size*2) ){
        randomStartPos(cats[cats.length-1])
    }
}

function makeCheese () {
    let cheese = {
    size: 20,
    posX: 0,
    posY: 0,
    color: [145, 106, 6],
    alive: true,
    type: "food",
    }
    cheeses.push(cheese);
    randomStartPos(cheeses[cheeses.length-1])
}

function roundOverlap (x1, y1, size1, x2, y2, size2) {
    if (sq(x1 - x2) + sq(y1 - y2) < sq(size1/2 + size2/2) ) {
        return true;
    }
}