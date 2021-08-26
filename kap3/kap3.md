# 3. Variabler, animationer og input

I dette modul kigger vi nærmere på variable og input fra mus og taster på tastaturet.


## Variabler og datatyper

Variabler bruges til at opbevare data. Dataens “form” eller type kaldes også datatypen. Man erklærer dem ved at bruge nøgleordet **let **eller **var**. 

Eksempel herunder hvor kommentaren angiver datatypen.


```javascript
let n = 80; // heltal/integer 
let s = "Hej"; // tekst/string 
let b = true; // boolsk/boolean
let f = 10.2; // kommatal/float
```


Variabler har et såkaldt _scope. _Dvs. hvor de er tilgængelige. Erklæres en variable indenfor eksempelvis `setup`  er den kun tilgængelig derinde. Omvendt kan man lave en global variable ved at erklære den udenfor metodernes kroppe:


```javascript
let n = 5; //global variable 
function setup(){
 let x = 7; //lokal variable 
}
```


Hvis du ønsker at ændre værdien undervejs kan det anbefales at bruge nøgleordet `var` i stedet for:


```javascript
var a=1;
var b=2;
if(a===1){
 var a=11; //scope er globalt
 let b=22; //scope er indenfor if-blokken dvs. Krølparenteser
 console.log(a); //11
 console.log(b); //22
}
console.log(a); //11
console.log(b); //2
```


Den vigtigste forskel på de to deklarationer er altså scopet. Variabler, der er erklæret af `var` nøgleordet har et globalt scope knyttet til den umiddelbare krop, som kan være i en funktionskrop eller hvis det ikke er tilfældet, som i ovenstående tilfælde, så er den global , mens `let` variabler har et scope i forhold til den lukkende blok, som de er omgrænset af.

Herunder nogle flere eksempler på **var:**


```javascript
var carName = "Volvo";

// koden kan bruge carName

function myFunction() {
  // kode her kan bruge carName
}
```


Havde vi erklæret carName inde i funktionen  kunne vi ikke bruge den udenfor. Det samme gør sig dog ikke gældende hvis man laver en blok, som eksemplet herunder viser:


```javascript
{
  var x = 2;
  let y = 2;
}
// x kan bruges her men y kan ikke bruges her
```


Pas på med redeklarationer med **var**, som eksemplet illustrerer:


```javascript
var x = 10;
// x er 10
{
  var x = 2;
  // x er 2
}
// x er 2
```


Til forskel fra følgende:


```javascript
var x = 10;
// x er 10
{
  let x = 2;
  // x er 2
}
// x er 10
```



## Operationer på variable

Herunder en kort oversigt over de vigtigste operatorer.


<table>
  <tr>
   <td>=
   </td>
   <td>Tildeling
   </td>
  </tr>
  <tr>
   <td>+
   </td>
   <td>Addition (plus)
   </td>
  </tr>
  <tr>
   <td>-
   </td>
   <td>Subtraktion (minus)
   </td>
  </tr>
  <tr>
   <td>*
   </td>
   <td>Multiplikation (gange)
   </td>
  </tr>
  <tr>
   <td>**
   </td>
   <td>Eksponent (et tal x opløftet i y skrive x**y)
   </td>
  </tr>
  <tr>
   <td>/
   </td>
   <td>Division (deling)
   </td>
  </tr>
  <tr>
   <td>%
   </td>
   <td>Modulus (bestemmer resten af en division.)
   </td>
  </tr>
  <tr>
   <td>++
   </td>
   <td>Inkrementering (x++ betyder at man lægger en til x)
   </td>
  </tr>
  <tr>
   <td>--
   </td>
   <td>Dekrementering (x-- betyder at man trækker en fra x)
   </td>
  </tr>
</table>


Her et eksempel på tildeling og addition


```javascript
var x = 5;         // assign the value 5 to x
var y = 2+x;       // assign the value 7 to y
```


Dernæst multiplikation:


```javascript
var x = 5;
var y = 2;
var z = x * y;
```


Man kan kombinere en lang række operationer:


<table>
  <tr>
   <td><strong>Operator</strong>
   </td>
   <td><strong>Eksempel</strong>
   </td>
   <td><strong>Det samme som</strong>
   </td>
  </tr>
  <tr>
   <td>=
   </td>
   <td>x = y
   </td>
   <td>x = y
   </td>
  </tr>
  <tr>
   <td>+=
   </td>
   <td>x += y
   </td>
   <td>x = x + y
   </td>
  </tr>
  <tr>
   <td>-=
   </td>
   <td>x -= y
   </td>
   <td>x = x - y
   </td>
  </tr>
  <tr>
   <td>*=
   </td>
   <td>x *= y
   </td>
   <td>x = x * y
   </td>
  </tr>
  <tr>
   <td>/=
   </td>
   <td>x /= y
   </td>
   <td>x = x / y
   </td>
  </tr>
  <tr>
   <td>%=
   </td>
   <td>x %= y
   </td>
   <td>x = x % y
   </td>
  </tr>
  <tr>
   <td>**=
   </td>
   <td>x **= y
   </td>
   <td>x = x ** y
   </td>
  </tr>
</table>


Særlig for tekst strenge betyder +, at man konkatinerer to tekststrenge. Dvs. kæder dem sammen:


```javascript
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
```



## Input fra mus

Vi kan hente musens koordinater ved bruge af variablerne mouseX og mouseY, som er af typen heltal. De er prædefineret og starter altid med at være 0, når programmet indlæses:


```javascript
function draw() {
  background(255);
  frameRate(12);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
}
```


Vi benytter funktionen frameRate til at sikre, at draw ikke udføres for ofte. Det sker for at sikre, at den ikke overskriver vores to tekstfelter.

Herunder tegner vi en hvid cirkel hvor musen er:


```javascript
function setup() {
  createCanvas(100, 100);
  noStroke();
}
function draw() {
  background(126);
  ellipse(mouseX, mouseY, 33, 33);
}
```


Her tegner vi en linje efter musen. Holder vi musen stille er det bare en cirkel:


```javascript
function setup() {
  createCanvas(100, 100);
  strokeWeight(8);
}
function draw() {
  background(204);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
```


Herunder skifter vi farve på et rektangel når vi klikker på den:


```javascript
function setup() {
  createCanvas(100, 100);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if (mouseIsPressed == true) {
    fill(255); // White
  }
  else {
    fill(0);   // Black
  }
  rect(25, 25, 50, 50);
}
```


Centralt er `if (mouseIsPressed == true) `som betyder, at vi undersøger om musen er trykket ellers gør vi noget andet. Vi vender tilbage til den såkaldte betinget udførsel (if-else) i næste modul.

Vi kender forskel på højre og venstre museklik ved følgende:


```javascript
function setup() {
  createCanvas(100, 100);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      fill(0);   // Black
    }
    else if (mouseButton == RIGHT) {
      fill(255); // White
    }
  }
  else {
    fill(126);   // Gray
  }
  rect(40, 20, 40, 60);
}
```



## Input fra keyboard

Herunder et eksempel på hvordan et rektangel farvelægges forskelligt når man registrerer om der trykkes pil op eller ned:


```javascript
let fillVal = 126;
function draw() {
  fill(fillVal);
  rect(25, 25, 50, 50);
  if (keyCode === UP_ARROW) {
    fillVal = 255;
  } else if (keyCode === DOWN_ARROW) {
    fillVal = 0;
  }
  return false;
}
```


Vi vender tilbage til if-konstruktionen, men bemærker at hver tast har sin egen keycode, som man kan finde på følgende side: [http://keycode.info/](http://keycode.info/).


## Øvelser



1. Lav et program der tegner en cirkel alle de steder du bevæger musen hen
2. Lav et program, der tegner en cirkel når du klikker med venstre mus og et rektangel med højre mus.
3. Lav et simpelt tegneprogram der tegner en streg efter musens bevægelse
4. Lav et program, der tegner en firkant hvis du trykker f, en cirkel hvis du trykker c eller en ellipse hvis du trykker e. 
5. Udvid programmet i 4. så de konstrueres der hvor musen er.
6. Hvad gør følgende kode:

```javascript
var x = 200;
var y = 200;
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);   
  if (x >= 400){
   x = 0; 
  }
  if (keyCode === UP_ARROW) {
    y = y - 1;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1;
  }
}
```


7. Forklar hvad følgende kode gør:

```javascript
let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50); 
  x+=xspeed; 
  y+=yspeed; 
}
```


8. Prøv at udvide 7 så cirklen ikke kan bevæge sig ud af skærmen og bagefter, at man kan klikke et sted på skærmen med musen og så følger cirklen det punkt. 
9. Lav to cirkler og sæt dem i fart i en given retning. Undersøg om de kolliderer med hinanden.
10. Konstruer en vandret linje der bevæger sig op og ned af skærmen. Konstruer herefter en tilsvarende lodret linje, der bevæger sig til højre og venstre.


## Projekt: Algoritmisk kunst

I det følgende skal vi lave algoritmisk kunst, der er kunst som er kendetegnet ved at følge nogle regler som kan formaliseres i række instruktioner, som kan implementeres i et programmeringssprog. 


    På følgende link kan I se en lang række eksempler.:[http://www.generative-gestaltung.de/2/](http://www.generative-gestaltung.de/2/). 



    1. Udvælg et eksempel og kig på koden bag. Prøv at forstå hvad koden gør og sæt kommentarer på.
    2. Lav nu jeres egen algoritmiske kunst ved først at formulere jeres kunst i almindelig prosa, listeform, pseudokode eller lignende. Prøv at implementere den i P5. Husk at kommentere koden. 
    3. Overvej om I synes, at algoritmisk kunst er rigtig kunst. 
    4. Forbered en kort præsentation af punkterne i plenum. 
