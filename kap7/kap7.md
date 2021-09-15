# 7. Objekter

Et vigtigt begreb i programmering og softwareudvikling er objekter, som vi vil introducerer i nærværende afsnit. De spiller en central rolle i det objekt-orienteret programmeringsparadigme, hvor man groft sagt inddeler verden i objekter. Objekter bruges med andre ord til at sikre, at man kan implementerer og håndterer den enorme og stadigt voksende kompleksitet i verdenen. Objekter bruges i den sammenhæng til at indkapsle data samt inddrage relationer og abstraktioner mellem data, så vi herved opnår en form for modulær kode.

I det følgende handler det dog i første omgang blot om at få en fornemmelse for hvordan et objekt konstrueres og hvad de kan bruges til.


## Oprette objekter 

I Javascript konstrueres et objekt vha af nøgleordet “class”. Vi vil tillade at bruge klasse i stedet for class, når vi omtaler dem. Når man opretter en klasse konstrueres en datastruktur, der rummer både data eller egenskaber om objektet men også metoder (eller funktioner), der ændrer på objektets tilstand. Et eksempel på et objekt kunne være en cirkel. Herunder et eksempel på hvordan. En skabelon eller en klasse for en cirkel kunne se således ud: 	


```javascript
class Cirkel{
 constructor() {
   this.color = color(255);
   this.xpos = width/2;
   this.ypos = height/2;
   this.radius = 1;
  }
}
```


Her angiver farve, position og radius nogle egenskaber ved en cirkel. Der kan blive behov for at ændre på cirklens tilstand såsom at bevæge cirklen et andet sted end på skærmen og tegne cirklen. Det kan vi gøre ved at implementere en funktioner, der typisk kaldes metoder, når de flyttes ind i en klasse. Herunder kode igen nu med to metoder, move og draw:


```javascript
class Cirkel{
 constructor(x,y,r) {
   this.color = color(255);
   this.xpos = x;
   this.ypos = y;
   this.radius = r;
  }
  move(x,y){  //start på metoden move
    this.xpos = x;
    this.ypos = y;
  }
  draw() //start på metoden draw
  {
    ellipse(this.xpos,this.ypos,this.radius);
  }
}
```


Bemærk flere vigtige ting her: 1)Vi skriver ikke længere function foran, når vi implementere en metode til en klasse. 2) Metode move tager to parametre mens draw ikke tager nogle. I metoden move bliver x og y brugt til at sætte centrums koordinaterne for x og y, der betegnes med xpos og ypos. 3) I metoden draw udnytter vi, at klassen har indlejret en række egenskaber, såsom centrum for cirklen, der betegnes med xpos og ypos.

Herunder viser vi nu hvordan man kan bruge klassen til at oprette og bevæge en cirkel rundt på skærmen. Dvs. vi antager at koden ovenfor er tilføjet over funktionen setup:


```javascript
let c;
function setup() {
  createCanvas(400, 400);
  c = new Cirkel(200,200,50); //vi opretter et nyt cirkel-objekt vha new
  c.draw();
  c.move(300,300);
  c.draw();
}
```


Bemærk her særligt konstruktionen af et nyt cirkel objekt. Vi bruger nøgleordet new. Vi giver den argumenterne 200, 200 og 50, som xpos, ypos og radius bliver sat til jf. Klasse-definitionen.

Vi tegner herefter cirklen og flytter den til position (300,300). Afslutningsvis tegner vi den igen.

Vi kunne let konstruere lige så mange cirkler som vi nu havde lyst til bare ved at bruge og vi skal i næste afsnit se hvordan vi kan opbevare mange af de samme objekter uden at skulle konstruere tilsvarende ligeså mange variabler. Men herunder følger et eksempel hvor vi har konstrueret to cirkler:


```javascript
let c1;
let c2;
function setup() {
  createCanvas(400, 400);
  c1 = new Cirkel(200,200,50);
  c1.draw();
  c1.move(300,300);
  c1.draw();
  c2 = new Cirkel(100,100,20);
  c2.draw();
}
```

## Øvelser
1. Hvilke egenskaber og metoder kunne være relevante for en bil, et dyr og et selvvalgt objekt som den tredje. Giv mindst 3 metoder og 3 egenskaber for hver af de tre objekter. Overvej egenskabernes datatyper og hvordan metoderne bør kodes. Metoderne må ikke være draw.
2. Implementer en konstruktør med egenskaber og metoder for hver af de nævnte i 1.
3. Implementer en draw metode, der kan tegne de tre objekter. Metoden skal gerne inddrage nogle af de 3 egenskaber for hver af de 3 objekter. Dvs. udfaldet af draw skal gerne påvirkes af ændringer i egenskaberne. Eksempelvis kan højden på en bil ændre tegningen af bilen.
4. Vi laver i det følgende et simpelt spil kaldet “Afraid of raindrops”, hvor man i bunden har en vandret linje, som ens helt kan bevæge sig til venstre og højre på. Fra oven regner det med forskellige cirkler, der oprettes i toppen af skærmen og bevæger sig lodret ned. Cirklerne har forskellige størrelser og bevæger sig i forskellige hastigheder. Hvis ens cirkel kolliderer med ens helt, så er det gameover. Implementer en klasse for en cirkel, der håndterer forskellige størrelser, placeringer, hastigheder og kollision med ens helt. Implementer desuden, at man kan starte forfra og hold styr på antallet af cirkler, som man undgår. 
5. Forklar hvad følgende kode gør vha. kommentarer:

```javascript
let b; 

function setup() {
  createCanvas(640, 360);
  b = new Ball(); 
}

function draw() {
  background(255);
  b.update(); 
  b.display();
}
class Ball {
  constructor() {
    this.position = new createVector(random(100), random(100));
    this.velocity = new createVector(random(1,4), random(1,5));
  }
  
  update() {
    this.position.add(this.velocity);
    
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 48, 48);
  }
}
```

6. Udvid koden i 5. så der er fem forskellige cirkler med forskellige radier der bevæger sig rundt med forskellige hastigheder. Implementer en metode der giver point hvis der bliver trykket på cirklerne. De små og hurtigt bevægende cirkler skal give flere point.
7. Konstruer en klasse der repræsenterer en fugl og lav metoder til at animere at den flyver og den bevæger sig vandret over skærmen. Det må gerne være en meget simpel fugl.
8. Udvid med en simpel rektangulær riffel i bunden af skærmen, der skyder ellipseformede kugler af sted i den retning, der klikkes med musen.
9. Konstruer en animation vha klasser, der visualiserer en række dominobrikker der vælter fra siden. Brug simple rektangler.
10. Konstruer en klasse for en person. Klassen skal kunne tegne personen (bare en tændstiksmand). Lav metoder der kan bevæge arme og ben i stop motion stil ved at trykke på bestemte taster.
11. Udvid 7)  så man kan gå fra venstre mod højre på skærmen. Lav flere personer der går efter hinanden.
12. Lav en tændstiksmand, der kan danse nogle meget simple bevægelser vha selvvalgte taster. Brug klasser i implementeringen.

## Projekt: Epidemi-simulation
Konstruér et lærred med maksimal størrelse vha. de globale variabler windowWidth og windowHeight.

Lav to globale variabler x og y. Sæt x=windowWidth/2 og y=windowHeight/2.

Lav en global variabel r og sæt den til et lille tal. F.eks. 10.

Tegn en cirkel i (x,y) med radius r. En cirkel repræsenterer et menneske i vores simulation.

Vi skal nu have mennesket til at bevæge sig:

   - Opret to globale variabler r1 og r2 og sæt dem til tal i ]0;1[.

   - I funktionen draw opdateres cirklens centrum til x=x+r1 og y=y+r2.

Kør programmet. Mennesket bevæger sig nu (desværre ud af lærred).

For at få mennesket til at bevæge sig tilbage, skal vi først tjekke om personen er på vej uden for. I draw-funktion skal du implementere følgende:

   - Hvis x-r&lt;0 er personen på vej ud til venstre for lærred. Sæt r1=- r1.

   - Hvis x+r>maxWidth er personen på vej ud til højre for lærred. Sæt r1=-r1.

   - Hvis y&lt;0 er personen  på vej ud over lærred. Sæt r2=-r2.

   - Hvis y>maxHeight er personen på vej ud under lærred. Sæt r2=-r2.

   

Nu bevæger personen sig rundt på lærred så længe, at programmet kører. Svar på følgende spørgsmål:



1. Hvorfor indgår radius r i beregningerne ovenfor?
2. Hvad sker der, hvis vi eksempelvis sætter r1 eller r2 til et større tal?
3. Hvorfor ændrer vi fortegn på retningsvektorens ene koordinat ved kollision med lærreds vægge? Vink: Forstå refleksionsloven: https://www.mathsisfun.com/physics/reflection.html

For at få flere mennesker til at bevæge sig rundt, er det en god idé at benytte datatypen “array” samt lidt objekt-orienteret programmering (OOP). Da OOP er B-niveau er det helt i orden at kopiere koden nedenfor ind øverst i script.js.


```javascript
class Menneske {
    constructor(x, y, radius, retning_x, retning_y) {
   	 this.x = x;
   	 this.y = y;
   	 this.radius = radius;
   	 this.retning_x = retning_x;
   	 this.retning_y = retning_y;
    }

    draw() {
   	 circle(this.x, this.y, this.radius);
    }

    collision(windowWidth, windowHeight) {
   	 if (this.x + this.radius > windowWidth) {
   		 this.retning_x = -this.retning_x;

   	 }
   	 if (this.x - this.radius <= 0) {
   		 this.retning_x = -this.retning_x;

   	 }
   	 if (this.y + this.radius > windowHeight) {
   		 this.retning_y = -this.retning_y;
   	 }
   	 if (this.y - this.radius <= 0) {
   		 this.retning_y = -this.retning_y;
   	 }
   	 this.x = this.x + this.retning_x;
   	 this.y = this.y + this.retning_y;
    }

}
```

Lav nu et globalt array, der er tomt. Kald det “mennesker”.

```javascript
let mennesker = [];
```

Opret en global variabel n og sæt den til f.eks. 500. Denne variabel betegner hvor mange mennesker, der indgår i vores simulation.

I setup-funktionen tilføjer du en for-løkke. I for-løkken skal nye menneske-objekter oprettes og tilføjes til dit array. Det gøres med new-operatoren:


```javascript
mennesker.push(new Menneske(random(0, windowWidth), random(0, windowHeight), radius, random(-5, 5), random(-5, 5)));
```

Bemærk: push-funktionen er en metode på array-objektet, der tilføjer nye elementer til arrayet. 

Random-funktionen sikrer bare, at menneskene indsættes forskellige steder på lærred og bevæger sig med forskellige hastigheder.

Tilbage er bare at konstruere en for-løkke i din draw-funktion, der tegner alle menneskene i dit array.

``` javascript
for (let i = 0; i < n; i++) {
   mennesker[i].draw();
   mennesker[i].collision(windowWidth, windowHeight);
}
```

Nu bevæger n mennesker sig rundt på lærred. Du kan nu implementere følgende funktionalitet selv:

1. Lad hvert menneske have sin egen farve ved at tilføje en farve-attribut til din constructor i Menneske-klassen og initialisere den til en bestemt farve, når du opretter et menneske.
2. Skrive kode i draw-funktionen, der afgør om et menneske kolliderer med et andet menneske. Vink: Benyt en ny for-løkke.
3. Skriv kode, der inddeler mennesker i 3 kategorier: Smittet, usmittet og raske.
