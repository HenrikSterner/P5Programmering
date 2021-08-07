# 4. Betinget udførsel

Indtil nu har vi primært arbejdet med programmer som en lineær sekvens af instruktioner. Men ofte vil man gerne have mulighed for at afvikle nogle bestemte instruktioner eksempelvis når man skal undersøge om brugeren har trykket på en bestemt tast eller har trykket højre eller venstre mus. I det følgende skal vi med andre ord se på hvorledes man kan evaluere hvorvidt en instruktion rent faktisk skal udføres eller om den skal springes over. Det kaldes betinget udførsel.


## If-konstruktionen

Den helt simple if-konstruktion ser således ud:


```javascript
if (betingelse){
 //sekvens af instruktioner
} 
```


Hvis betingelsen er sand så afvikles instruktionerne mellem krølparenteserne og ellers springes de instruktioner over. 

Eksempel kunne være at undersøge om musen ligger over i den venstre side af kanvas og i så fald ændre baggrundsfarven:


```javascript
  if (mouseX < 100){
    background(255,0,0);
  }
```


Betingelsen skal ved afviklingen gerne kunne evalueres af kompileren til enten sand eller falsk. Et sådan udtryk kaldes også et boolsk udtryk og kan i princippet rummes i en boolsk variable. Disse udtrykke kan bestå af mange delbetingelser, som vi kigger nærmere på sidst i modulet. 


## If-else konstruktionen

Man kan udvide if-konstruktion så vi gør noget andet hvis betingelsen er falsk. Det ser grundlæggende således ud:


```javascript
if (betingelse){
 //sekvens af instruktioner afvikles hvis betingelse er sand
} 
else{     
 //sekvens af instruktioner afvikles hvis betingelse er falsk
}
```


Vi kan udvide vores eksempel fra før, så vi giver den en anden farve hvis musen har en x-værdi, der er større end eller lig med 100:


```javascript
if (mouseX < 100){
 background(255,0,0);
  } 
else{     
 background(0,0,255);
}

```
## If-else-if konstruktionen

Endelig kan man også udvide og undersøge flere kriterier på engang:


```javascript
if (betingelse #1){
 //sekvens af instruktioner afvikles hvis betingelse #1 er sand
} 
else if (betingelse #2){
 //sekvens af instruktioner afvikles hvis betingelse #2 er sand
} 
else if (betingelse #3){
 //sekvens af instruktioner afvikles hvis betingelse #3 er sand
}
//...
else{
 //sekvens af instruktioner afvikles hvis ingen af betingelserne er sande
}
```


Man kan udvide med lige så mange betingelser, som man har lyst til.

Herunder ses et eksempel med tre del-betingelser:


```javascript
if (mouseX < 100){
 background(255,0,0);
} 
else if (mouseX >= 100 && mouseX < 300){
 background(0,255,0);
} 
else if (mouseX >= 300){
 background(0,0,255);
}
```



## Boolske operatorer

Som vi nævnte tidligere er betingelser egentlig bare boolske udtryk, som kan opbevares i de boolske variable, der enten er sande eller falske (true/false).

Boolske operatorer giver os mulighed for at operere på boolske variable og dermed muligheden for at lave mere komplekse boolske udtryk. 

Herunder et eksempel på brug af AND/og-operatoren, der er repræsenteret ved to ampersander && og tager en boolsk variable på hver sin side. Hvis de begge er sande bliver det samlede udtryk også sandt.


```
boolsk_variable_1 && boolsk_variable_2
```


For at et boolsk udtryk med AND skal blive sandt skal begge variable være sande ellers vil det samlede udtryk blive falsk.

Herunder et eksempel:


```javascript
let canSwim = true;
let canFly = true;
let isDuck = canSwim && canFly;
```


Modsat forholder det sig med OR/eller-operatoren, der er repræsenteret ved to lodrette streger og som tager en boolsk variable på hver sin side. Hvis de begge er falske bliver det samlede udtryk falsk:


```javascript
boolsk_variable_1 || boolsk_variable_2
```


Her skal blot en af variablerne være sande for at det samlede udtryk bliver sandt. 

Herunder et eksempel:


```javascript
let isTodaySaturday = true;
let isTodaySunday = false;
let isTodayWeekend = isTodaySaturday || isTodaySunday;
```


Endelig er der NOT/negerings-operatoren, der er repræsenteret ved udråbstegn !. Den tager en boolsk variable og hvis den er sand, så vil NOT gøre den til falsk, og omvendt.


```javascript
!boolsk_variable  
```


Herunder et eksempel:


```javascript
let sinks = !canSwim;
let falls = !canFly;
let isTodayWeekday = !isTodayWeekend;
```


Man kan kombinere disse operatorer til mere komplekse udtryk. Eksempelvis:


```javascript
let isMammal = !canSwim && !canFly;
```



## Øvelser



1. Tegn en cirkel midt på skærmen. Hvis musen bevæger sig til højre for dens centrum bliver den til et rektangel. Hvis den bevæger sig til venstre for bliver den igen en cirkel.
2. Forklar hvad følgende kode gør (hvad width og height?):

    ```javascript
function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(220);
  fill(255,0,0);
  noStroke();
  if (mouseX < width/3) {
    rect(0, 0, width/3, height);
  }
  else if (mouseX <= width*2/3) {
    rect(width/3, 0, width/3, height);
  }
  else {
    rect(width*2/3, 0, width/3, height);
  }
}
```


3. Hvad gør følgende kode:

    ```javascript
let x;
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2;
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  ellipse(x, height/2, 50, 50);
}
```


4. Skriv et program der får en cirkel til at bevæge sig lodret op og ned til den indenfor et givent kanvas.
5. Hvad gør følgende kode:

    ```javascript
function setup() { 
createCanvas(120, 120); 
strokeWeight(30); 
} 
function draw() { 
 background(204); 
 stroke(102); 
 line(40, 0, 70, height); 
 if (mouseIsPressed) { //hvor kommer denne variable fra?
  if (mouseButton == LEFT) {  // og hvad med den?
   stroke(255); 
  } 
  else { 
   stroke(0); 
  } 
  line(0, 70, width, 50);
  } 
} 
```


6. Hvad gør følgende kode:

    ```javascript
function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable for en størrelse?
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
} 
```


7. Lav et program, så når du trykker på A tegnes A og V når der trykkes på V.
8. Lav et program der indsætter en cirkelformet mus et tilfældigt sted på skærmen og som kan bevæges op og ned, til højre og venstre vha piltasterne. Udvid programmet så det tilsvarende også rummer en firkantet mus, der kan bevæge sig op og ned, til højre og venstre men ved brug af w,a,s og f. 
9. Udvid opgave 8 ved at indsætte nogle oste i form af prikker vilkårlige steder, som hvis de to mus kolliderer med forsvinder. Hold øje ved brug af variable hvem der har flest oste.
10. Lav en cookie-klikker. Dvs. konstruer en cirkel et vilkårligt sted på skærmen. Når der klikkes på den forsvinder den og en ny oprettes et andet sted. 


## Projekt: Katten efter musen



1. Få en cirkel til at bevæge sig i vandret eller lodret retning på lærred.
    1. Start med at oprette følgende globale variabler: x, y, a, b, d og speed.
    2. Lad (x,y) være cirklens centrum og lad d være diameter af cirklen.. Sæt f.eks. x = random(0, windowWidth), y=random(0, windowHeight) og d = 20.
    3. Variablen speed angiver hvor mange pixels at cirklen skal bevæge sig i enten vandret eller lodret retning. Lad f.eks. speed = 10.
    4. Lad (a,b) være retningsvektor for cirklen. Sæt f.eks. a = speed og b = 0. Dvs. når spillet starter, så bevæger cirklen sig x-aksens retning.
    5. Skriv en funktion, der tjekker for, om cirklen er på vej uden for skærmen. Brug evt. følgende:

        ```javascript
function borderCheck() {
 if (x + d / 2 >= windowWidth) {
   a = -speed;
   b = 0;
 }
 if (x - d / 2 <= 0) {
   a = speed;
   b = 0;
 }
 if (y + d / 2 >= windowHeight) {
   a = 0;
   b = -speed;
 }
 if (y - d / 2 < 0) {
   a = 0;
   b = speed;
 }
}
```


2. Nu bevæger cirklen sig rundt inden for skærmen. Nu skal vi have cirklen til at bevæge sig i den retning, som  piltasten, der trykkes på, viser. Vi skal mao. benytte funktionen keyPressed:

	


```javascript
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   b = speed;
   a = 0;
 }
 if (keyCode === UP_ARROW) {
   b = -speed;
   a = 0;
 }
 if (keyCode === LEFT_ARROW) {
   b = 0;
   a = -speed;
 }
 if (keyCode === RIGHT_ARROW) {
   b = 0;
   a = speed;
 }
}

```



3. I stedet for cirkel kan man indsætte et billede af en mus eller af sig selv :-). Det gøres vha. preload-funktionen.

	


```javascript
function preload() {
 img = loadImage('mus.png');
}

```



4. Tilføj nogle “katte” der bevæger sig tilfældigt rundt på skærmen. Vink: Samme princip som med musen.
5. Hvis to cirkler skærer hinanden, har katten fanget musen. Skriv en funktion, der undersøger dette. 
6. Gør evt. spillet svære med tiden. Sæt f.eks. hastigheden på kattene op med tiden.


## Projekt: Trommer, klaver og guitar

I det følgende projekt skal du prøve at lave simple digitale prototyper på et trommesæt, et klaver og en guitar eller evt et andet selvvalgt instrument. Tanken er at du for alle tre instrumenter skal tegne dem først og evt farvelægge dem. Projeket forudsætter at du kan afspille lyd og dermed køre din egen webserver (se sidste øvelse i modul 1). Følgende instrumenter kunne man lave:



* Trommesæt. Konstruer først en række ikke-overlappende cirkler. Indsæt relevante lyde når man trykker med musen på cirklerne
* Piano. Tegn først et klaver/keyboard set for oven med sorte og hvide rektangler. Det behøver selvfølgelig ikke være et fuldt klaver blot en delmængde af. Sæt forskellige lyde på, når man trykker med musen på bestemte rektangler.
* Guitar. Tegn seks vandrette linjer midt på canvas. Lad nogle små figurer bevæge sig henover skærmen og sæt nogle lodrette punkter. Når firkanten ligger indenfor disse punkter og man taster korrekt afspilles en selvvalgt lyd.

Du er velkommen til bagefter at indsætte billeder af instrumenter som baggrund i canvas, så det ser mere realistisk ud. Det kan gøres hvis du afvikler p5 på din egen webserver med følgende tre instruktioner:


```javascript
function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('...'); //path to picture
  createCanvas(720, 400);
}
```


 


```javascript
function draw() {
  background(bg);
}
```


Herunder et eksempel på hvordan man afspiller lyd. Vær obs på, at lydfilerne ligger det rigtige sted:


```javascript
let song;

function setup() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
```



