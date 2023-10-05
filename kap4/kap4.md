# 4. Betinget udførsel
Indtil nu har vi primært arbejdet med programmer som en lineær sekvens af instruktioner, der afvikles fra top til bund. 
Men ofte vil man gerne have mulighed for at afvikle nogle bestemte instruktioner hvis en given betingelse er opfyldt. Det kunne eksempelvis være når man skal undersøge om brugeren har trykket på en bestemt tast eller har trykket højre eller venstre mus. 

I det følgende skal vi med andre ord se på hvorledes man kan evaluere hvorvidt en instruktion rent faktisk skal udføres eller om den skal springes over. Det kaldes også for "betinget udførsel" eller "forgreninger".


## If-konstruktionen
Den mest simple betinget udførsels også kendt som "if-konstruktion" ser i grundform således ud:

```javascript
if (betingelse){
 //sekvens af instruktioner
} 
```

Hvis betingelsen er sand så afvikles instruktionerne mellem krølparenteserne og ellers springes de instruktioner over. 

Et eksempel kunne være at undersøge om musen ligger over i den venstre side af kanvas og i så fald ændre baggrundsfarven:

```javascript
  if (mouseX < 100){
    background(255,0,0);
  }
```

Betingelsen skal ved afviklingen kunne evalueres til enten at være sand eller falsk. Det skal med andre ord være muligt for programmet at verificere udtrykket som sandt eller falsk. 
Et sådan udtryk kaldes også et boolsk udtryk og kan i princippet rummes i en boolsk variable. Disse udtrykke kan bestå af mange delbetingelser, som vi kigger nærmere på senere. 
Herunder en række eksempler på udtryk, der muligvis er boolske. Overvej gerne betydningen af disse og hvilke, som du tror er boolske. Svaret følger herunder. 
* 6>3 
* Det regner i dag
* mouseX===500
* 10 + 5
* mouseX*mouseY
* !(mouseY < height)
* random(0,10)
* "Programmering er sjovt"

Herunder følger svarerne:
* 6>3: Boolsk udtryk. Vi undersøger om 6 er større end 3.
* mouseX===500: Boolsk udtryk. Vi undersøger om musens x-væri er lig med 500
* 10 + 5: Ikke et boolsk udtryk. Vi adderer blot 10 og 5. 
* mouseX*mouseY: Ikke et boolsk udtryk. Vi multiplicerer musens koordinater. 
* mouseY < height: Boolsk udtryk. Vi undersøger om musens y-koordinat er mindre end højden. 
* random(0,10): Ikke et boolsk udtryk. Vi modtager blot et tilfældigt tal mellem 0 og 10. 
* "Programmering er sjovt": Heller ikke et boolsk udtryk, da det i høj grad er en subjektiv oplevelse. 


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
else if (mouseX < 300){
 background(0,255,0);
} 
else if (mouseX >= 300){
 background(0,0,255);
}
```
Hvis musens `x`-værdi er mindre end 100 får baggrunden en farve, en anden hvis den er mindre end 300 og en tredje hvis den er større end 300. 

## Boolske operatorer
Som vi nævnte tidligere er betingelser egentlig bare boolske udtryk, som kan opbevares i de boolske variable, der enten er sande eller falske (true/false).

Boolske operatorer giver os mulighed for at operere på boolske variable/udtryk og dermed muligheden for at lave mere komplekse boolske udtryk. 

Herunder en generel definition på brug af den boolske og-operator, der i javascript  er repræsenteret ved to ampersander `&&` og tager et boolsk udtryk (eller evt. en boolsk variable) på hver sin side. Hvis de begge er sande bliver det samlede udtryk også sandt.

```
boolsk_udtryk_1 && boolsk_udtryk_2
```

De boolske udtryk kan også blot være to boolske variable:

```javascript
boolsk_variable_1 || boolsk_variable_2
```


For at et boolsk udtryk med AND skal evalures til sandt skal begge udtryk/variable være sande ellers vil det samlede udtryk blive falsk.

Herunder et eksempel på brugen af `AND`:
```javascript
if (mouseX > 100 && mouseX < 300){
 background(255,0,0);
} 
```
I det her tilfælde skal musens `x`-værdi altså både være større end 100 og mindre end 300 for at baggrundsfarven skiftes. 

Herunder et eksempel hvor vi `&&` benytter to boolske variable til at erklære en ny variable:

```javascript
let canSwim = true;
let canFly = true;
let isDuck = canSwim && canFly;
```

Modsat forholder det sig med OR/eller-operatoren, der er repræsenteret ved to lodrette streger `||` og som tager et boolsk udtryk eller en boolsk variable på hver sin side:


```javascript
boolsk_udtryk_1 || boolsk_udtryk_2
```

De boolske udtryk kan også blot være to boolske variable:

```javascript
boolsk_variable_1 || boolsk_variable_2
```

Her skal blot en af variablerne være sande for at det samlede udtryk bliver sandt. Hvis begge udtryk eller begge variable er falske vil det samlede udtryk også evaluere til falsk. 

Herunder et eksempel:
```javascript
if (mouseX < 100 || mouseX > 300){
 background(255,0,0);
} 
```

Kun hvis musens `x`-værdi er mindre end 100 eller større end 300 vil baggrundsfarven ændres. 

Herunder et eksempel mere:
```javascript
let isTodaySaturday = true;
let isTodaySunday = false;
let isTodayWeekend = isTodaySaturday OR isTodaySunday;
```

Endelig er der negerings-operatoren, der er repræsenteret ved udråbstegn `!`. Den tager boolsk udtryk eller en boolsk variable og hvis den er sand, så vil NOT gøre den til falsk, og omvendt.


```javascript
!boolsk_udtryk   
!boolsk_variable  
```

Herunder et eksempel:
```javascript
if (!(mouseX > 100 && mouseX < 300)){
 background(255,0,0);
} 
```
Kun hvis musens `x`-værdi ikke ligger i intervallet 100 til 300 (begge eksklusiv), vil baggrunden blive ændret.

Her et eksempel med negering brug på variabler: 
```javascript
let sinks = !canSwim;
let falls = !canFly;
let isTodayWeekday = !isTodayWeekend;
```

Man kan kombinere disse operatorer til mere komplekse udtryk. Eksempelvis:

```javascript
let isMammal = !canSwim && !canFly;
```

## Sammenligningsoperatorer `==`,`===`,`!=`,`===`
I mange tilfælde kan det også være relevant at spørge om to udtryk eller to variable er ens. Til det bruger vi sammenligningsoperatorerne `==` og `===`. Begge operatorer sammenligner operandernes værdier men med en vigtig forskel. Hvis X og Y er operanderne gælder 

```javascript
X==Y // returnerer sand hvis X og Y er lig hinanden, men ikke nødvendigvis samme type
X===Y // returnerer sand kun hvis X og Y er lig hinanden og har samme type
```

Herunder nogle eksempler på de to operatorer:
```javascript
let x = 7
console.log(x==9) // false
console.log(x==7) // true
console.log(x=="7") // true
console.log(x===7) // true
console.log(x==="7") // false
```
Bemærk særligt sidste eksempel. Tre lighedstegn returnerer falsk fordi vi sammenligner tal og tekst. 
Herunder et par eksempler hvor vis sammenligner strenge:
```javascript
let str1 = 'Henrik';
let str2 = 'Henrik';
let str3 = 'HenRik';

console.log(str1 == str2); // true
console.log(str1 == str3); // false
console.log(str1 === str2); // true
console.log(str1 === str3); // false
```
Sammenligningen med `str3` bliver falsk da der "R" er skrevet med stort.

Ligesom vi kan undersøge om to udtryk er ens kan vi også undersøge om to udtryk er forskellige. Det gøres med `!=` og `!==`:

```javascript
X!=Y // returnerer sand hvis X og Y er forskellige fra hinanden, men ikke nødvendigvis samme type
X!==Y // returnerer sand kun hvis X og Y er forskellige fra hinanden og har forskellig  type
```
Herunder nogle eksempler:
```javascript
let x = 7
console.log(x!=9) // true
console.log(x!=7) // false
console.log(x!="7") // false
console.log(x!==7) // false
console.log(x!=="7") // true
```
Særligt tredje og femte linje er centrale. Bemærk altså, at `!=` returnerer falsk når vi sammenligner tallet 7 med strengen "7". 
Endelig et par eksempler hvor vi kun bruger strenge som operander:
```javascript
let str1 = 'Henrik';
let str2 = 'Henrik';
let str3 = 'HenRik';

console.log(str1 != str2); // false
console.log(str1 != str3); // true
console.log(str1 !== str2); // false
console.log(str1 !== str3); // true
```

## Større end (`>`) og mindre end (`<`) operatorer
Vi har også mulighed for at spørge om noget er større end eller mindre end noget andet. Typisk er det tal som vi ønsker at undersøge.
Herunder den generelle definition:

```javascript
X>Y // returnerer sand hvis X er større end Y 
X<Y // returnerer sand hvis X er mindre end Y
```
Herunder  nogle eksempler:
```javascript
let x = 7
let y = 5
let z = 7.0
console.log(x>y) // true
console.log(x<y) // false
console.log(x>z) // false
```
 
Man kan kombinere disse operatorer med lighedstegn:
```javascript
X>=Y // returnerer sand hvis X er større end eller lig med Y 
X<=Y // returnerer sand hvis X er mindre end eller lig med Y
```
Herunder nogle eksempler:
```javascript
let x = 7
let y = 5
let z = 7.0
console.log(x>=y) // true
console.log(x<=y) // false
console.log(x>=z) // true
```

## Øvelser
Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 11 samt et projekt.  

1. Overvej i det følgende hvad der printes i konsollen:
```javascript
// =
console.log(2 == 2); 
console.log(2 == '2'); 
// !=
console.log(3 != 2); 
console.log('hello' != 'Hello'); 
//===
console.log(2 === 2); 
console.log(2 === '2'); 
// !==
console.log(2 !== '2'); 
console.log(2 !== 2);
```
2. Tegn en cirkel midt på skærmen. Hvis musen bevæger sig til højre for cirklens centrum bliver den til et rektangel. Hvis den bevæger sig til venstre for bliver den igen en cirkel.
3. Overvej og følgende udtryk er sande eller falske og tjek efter med det der printes i konsollen:
```javascript
console.log(2 == 2 && 2 == '2'); 
console.log(2 == 2 && 2 == '2' && 2 === '2'); 
console.log(2 == 2 && 2 == '2' || 2!=2); 
console.log('hello' != 'Hello' && 'hello' !== 'Hello'); 
console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo'); 
console.log(2 === 2 || 2!=3 ); 
console.log(2 === 2 || 2!='2' && (true || false));
```
4. a) Forklar hvad følgende kode gør (hvad betyder width og height?):

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

4. b) Forklar hvad følgende kode gør:

```javascript
let x;
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
  circle(x, height/2, 50);
}
```


5. Skriv et program der får en cirkel til at bevæge sig lodret op og ned  indenfor et givent kanvas.
6. Hvad gør følgende kode:

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


7. Hvad gør følgende kode:

```javascript
function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
} 
```


8. Lav et program, som tegner et `A` på kanvas når du trykker på A. Og når du trykker på V tegnes et `V`.
9. Forklar og forstå hvad følgende kode gør (hvad betyder mon `keyIsDown`):

```javascript
let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  circle(x, y, 50);
}
```


10.  Lav et program der indsætter en cirkelformet mus et tilfældigt sted på skærmen og som kan bevæges op og ned, til højre og venstre vha piltasterne. 
11.  Udvid programmet fra forrige opgave så det tilsvarende også rummer en firkantet mus, der kan bevæge sig op og ned, til højre og venstre men ved brug af tasterne `w`,`a`, `s` og `d`. 
12.  Udvid de to forrige opgaver ved at indsætte nogle oste i form af prikker vilkårlige steder, som hvis de to mus kolliderer med forsvinder. Hold øje ved brug af to heltalsvariable hvem der har samlet flest oste. For hver ost der spises inkrementeres den respektive variable med 1. 
13. Lav en cookie-klikker. Dvs. konstruer en cirkel et vilkårligt sted på skærmen. Når der klikkes på den forsvinder den og en ny oprettes et andet sted. 


## Projekt: Katten efter musen

1. Få en cirkel til at bevæge sig i vandret eller lodret retning på lærred.
    1. Start med at oprette følgende globale variabler: x, y, a, b, d og speed.
    2. Lad (x,y) være cirklens centrum og lad d være diameter af cirklen.. Sæt f.eks. x = random(0, windowWidth), y=random(0, windowHeight) og d = 20.
    3. Variablen speed angiver hvor mange pixels at cirklen skal bevæge sig i enten vandret eller lodret retning. Lad f.eks. speed = 10.
    4. Lad (a,b) være retningsvektor for cirklen. Sæt f.eks. a = speed og b = 0. Dvs. når spillet starter, så bevæger cirklen sig x-aksens retning.
    5. Skriv en funktion, der tjekker for, om cirklen er på vej uden for skærmen. Brug evt. følgende:

```javascript
function borderCheck() {
 if (x + d / 2 >= width) {
   a = -speed;
   b = 0;
 }
 if (x - d / 2 <= 0) {
   a = speed;
   b = 0;
 }
 if (y + d / 2 >= height) {
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