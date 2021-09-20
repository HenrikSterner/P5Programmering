let instruments = [];

let drum = {
sounds: [],
name: "Drum",
positions: [],
draw: function() {
    fill(255);
    for(let i = 0; i < this.positions.length; i++){
    ellipse(this.positions[i][0], this.positions[i][1], 150 -25*i);
    }
},
play: function() {
    for (let i = 0; i < this.positions.length; i++) {
        if (roundOverlap(this.positions[i][0], this.positions[i][1], 150 -25*i, mouseX, mouseY, 1) && this.sounds[i] != ""){
            this.sounds[i].play();
        }
    }
}
}

let piano = {
sounds: [],
name: "Piano",
positions: [],
blackNotes: [1, 3, 7, 9, 11],
draw: function(){
    let white = [];
    let black = [];
    let x = windowWidth/4;
    let y = windowHeight/4;
    for (let i = 0; i < this.sounds.length; i++){
        if (this.sounds[i] != ""){
            if (i %2 == 0){
                fill(255);
                white.push(x +windowWidth/28*i);
            } else {
                fill(0);
                black.push(x +windowWidth/28*i +windowWidth/56);
            }
        }
    }
    fill(255);
    for (let i = 0; i < white.length; i++){
        rect(white[i], y, windowWidth/14, y*2)
    }
    fill(0);
    for (let i = 0; i < black.length; i++){
        rect(black[i], y, windowWidth/28, y*1.5)
    }
    this.positions.push(white);
    this.positions.push(black);
},
play: function() {
    for (let i = 0; i < this.positions.length; i++) {
        if (rectClicked(this.positions[1][i], windowHeight/4, windowWidth/28, windowHeight/4*1.5, mouseX, mouseY)) {
            this.sounds[this.blackNotes[i]].play();
            break;
        }
        else if (rectClicked(this.positions[0][i], windowHeight/4, windowWidth/14, windowHeight/4*2, mouseX, mouseY)) {
            this.sounds[i*2].play();
            break;
        }
    }
}
}

let guitar = {
sounds: [],
name: "Guitar",
positions: [],
draw: function() {
    noStroke();
    fill(153, 105, 0);
    ellipse(windowWidth/2 -windowWidth/10, windowHeight/2, windowWidth/7*3);
    ellipse(windowWidth/2 +windowWidth/10, windowHeight/2, windowWidth/7*3);
    rect(windowWidth/4, windowHeight/10*3, windowWidth/4*3, windowHeight/10*4)
    fill(99, 69, 3);
    strokeWeight(2);
    stroke(0);
    ellipse(windowWidth/2 -windowWidth/10, windowHeight/2, windowWidth/5);
    fill(0);
    for (let i = 0; i < this.sounds.length; i++) {
        rect(windowWidth/4, windowHeight/3 + windowHeight/10*i, windowWidth/4*3, windowHeight/30);
        this.positions.push([windowWidth/4, windowHeight/3 + windowHeight/10*i, windowWidth/4*3, windowHeight/30]);
    }
},
play: function () {
    for (let i = 0; i < this.positions.length; i++) {
        if (rectClicked(this.positions[i][0], this.positions[i][1], this.positions[i][2], this.positions[i][3], mouseX, mouseY)) {
            this.sounds[i].play();
            break;
        }
    }
    
},
}

var currentInstrument;
let song
let start = false;
function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(30);
    textAlign(CENTER);
}

let rate = 1;

function draw() {
    resizeCanvas(windowWidth, windowHeight)
    background(125);
    if(start) {
        if (currentInstrument != undefined){
            currentInstrument.draw();
       }
    }else {
        if (mouseIsPressed && !start){
            start = true;
            textAlign(LEFT);
            //kinda setup nu, fordi hjemmesider er dumme, og jeg prøver at få det her til at køre på en hjemmeside

            instruments.push(drum);
            instruments.push(piano);
            instruments.push(guitar);
            
            //loader alle lydene
            soundFormats("mp3");
            //drums
            drum.sounds.push(loadSound("Sounds/BassDrum.mp3"));
            drum.sounds.push(loadSound("Sounds/TomDrum.mp3"));
            drum.sounds.push(loadSound("Sounds/SnareDrum.mp3"));
            drum.sounds.push(loadSound("Sounds/HiHat.mp3"));
    
            //piano
            piano.sounds.push(loadSound("Sounds/C.mp3"));
            piano.sounds.push(loadSound("Sounds/CTag.mp3"));
            piano.sounds.push(loadSound("Sounds/D.mp3"));
            piano.sounds.push(loadSound("Sounds/DTag.mp3"));
            piano.sounds.push(loadSound("Sounds/E.mp3"));
            piano.sounds.push("");
            piano.sounds.push(loadSound("Sounds/F.mp3"));
            piano.sounds.push(loadSound("Sounds/FTag.mp3"));
            piano.sounds.push(loadSound("Sounds/G.mp3"));
            piano.sounds.push(loadSound("Sounds/GTag.mp3"));
            piano.sounds.push(loadSound("Sounds/A.mp3"));
            piano.sounds.push(loadSound("Sounds/ATag.mp3"));
            piano.sounds.push(loadSound("Sounds/B.mp3"));
            piano.sounds.push("");

            //guitar
            guitar.sounds.push(loadSound("Sounds/GuiC.mp3"));
            guitar.sounds.push(loadSound("Sounds/GuiD.mp3"));
            guitar.sounds.push(loadSound("Sounds/GuiE.mp3"));
            guitar.sounds.push(loadSound("Sounds/GuiF.mp3"));

            drum.positions = [[windowWidth/2, windowHeight/2], [windowWidth/2 -150, windowHeight/2], [windowWidth/2 +150, windowHeight/2], [windowWidth/2 +150, windowHeight/2 -100]];
            for (let i = 0; i < instruments.length; i++){
                selectButton(instruments[i],i);
            }
        }
        else {
            fill(156, 113, 6);
            rect(windowWidth/40, windowHeight/40, windowWidth -windowWidth/20, windowHeight -windowHeight/20);
            fill(0);
            text( "Vælg et instrument oppe i venstre hjørne", windowWidth/2, windowHeight/10);
            text( "Tryk på det, for at lave musik", windowWidth/2, windowHeight/10*5);
            text( "Tryk for, for at starte", windowWidth/2, windowHeight/10*9);
        }
    }
    
}

function mouseClicked() {
    if (mouseButton == LEFT){
        if (currentInstrument != undefined){
            currentInstrument.play();
        }
    }
}

function selectButton (obj, pos) {
    let button = createButton(obj.name);
    button.size(100, 30);
    button.position(20+140*pos, 20);
    button.mousePressed(() => {
        currentInstrument = obj; 
    });
    

}

function roundOverlap (x1, y1, size1, x2, y2, size2) {
    if (sq(x1 - x2) + sq(y1 - y2) < sq(size1/2 + size2/2) ) {
        return true;
    }
}

function rectClicked (x1, y1, w1, h1, x2, y2) {
    if (x1 < x2 && x1 + w1 > x2 && y1 < y2 && y1 + h1 > y2) {
        return true;
    }
}