const penge = 50000;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(125);
    textSize(25);
    textAlign(CENTER);

    //Titler til grafer
    fill(194, 10, 10);
    text("Danmarks Banken ■", width/3, windowHeight -20);

    fill(17, 214, 30);
    text("Investering ■", width/3*2, windowHeight -20);

    //Ændrer skaleringen af koordinatsystemet, så det vender samme vej, som i mat
    scale(1, -1);
    translate(0, -height);


    
    strokeWeight(5);
    //laver scale baseret på skærmstørelsen, så man rent faktisk kan se grafen
    let xscale = windowWidth/30;
    let yscale = (windowHeight/penge)/10;

    //DanmarksBanken
    let start = penge;
    let DanGraf = [];
    for (let i = 0; i < 30; i++) {
        let slut = rente(start, 0.5);
        DanGraf.push(slut);
        start = slut;
        print("DB " + slut);
    }
    stroke(194, 10, 10);
    
    graf(DanGraf, xscale, yscale);
    

    //Invest
    start = penge;
    let invGraf = [];
    for (let i = 0; i < 30; i++) {
        let slut = rente(start, 7);
        invGraf.push(slut);
        start = slut;
        print("Inv "+slut)
    }
    stroke(17, 214, 30);
    graf(invGraf, xscale, yscale);
    
}

function rente(K0, p) {
    let Kn = K0 * (1 + p / 100);
    return Kn;
}

function graf(punkter, xscale, yscale) {
    beginShape(LINES);
    for (let i = 0; i < punkter.length; i++) {
        vertex(i * xscale, punkter[i] * yscale);
    }
    endShape(CLOSE);
}