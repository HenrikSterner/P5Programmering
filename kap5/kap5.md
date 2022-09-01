# 5. Løkker og lister
Løkker er en særdeles vigtig konstruktion i de fleste programmeringssprog, dan den giver mulighed for at afvikle en sekvens af instruktioner et vilkårligt antal gange uden at skulle gentage koden. Løkker er typisk ligesom if-udtryk betinget af noget for at de sættes i gang, men det behøver ikke at være tilfældet. De to løkker vi kigger på kaldes `while` og `for` og findes i øvrigt i ret mange af de mest anvendte programmeringssprog, så kender man den i det ene sprog er det nemmere at forstå den i det andet. 

Efter at have introduceret løkker, så kigger vi på en datastruktur kaldet "lister" eller arrays, der populært sagt er en type variable, der giver mulighed for at rumme mere end en værdi, som det ellers har været tilfældet indtilvidere. De introduceres sammen med løkke, da løkkerne giver mulighed for på en nem måde at besøge, undersøge og operere på hvert enkelt element i en liste. 

## Løkker
Både `for`og `while` starter med en formulering af en betingelse, hvilket også kaldes løkkens hoved og dernæst kommer kroppen indkapslet af krølparenteser. Det er denne sekvens af instruktioner, der udføres sålænge betingelsen er sand. Herunder en kort illustration af deres opbygning:

```javascript
while(betingelse){ // hoved af while-løkken
 // kroppen af while-løkken
}
```

```javascript
for(start,slut,opdatering){ // hoved af for-løkken
// kroppen af for-løkken.
}
```

Vi vender tilbage herunder hvad de enkelte ting betyder. 


### while-løkken

Et simpel eksempel på brug af  while-løkken er ved at printe tallene 100 til 1 ud i konsollen:


```javascript
let num = 101;
while (num > 0) {
  num = num - 1;
  console.log(num);
}
console.log("Ude af løkken")
```


Vi sætter en variable til 101. Dernæst undersøger vi om variablen er større end nul. Det er den, da vi jo lige har sat den til 100. Herved ryger vi ned i kroppen defineret af krølparenteserne og dekrementerer variablen, printer den ud. Igen undersøger vi om den er større end 0. Sådan bliver vi ved. På et tidspunkt er variablen 1, når vi rygger ned i kroppen og 0 når vi skal tjekke om betingelsen er sand. Herved er betingelsen ikke længere sand, da der står `num` skal være skarpt større end 0, så vi rygger ud af løkken.

Havde vi ikke dekrementeret variablen i kroppen ville betingelsen aldrig blive falsk og vi ville have en uendelig løkke. 

Herunder et eksempel hvor vi printer en masse forskellige farvede cirkler:

```javascript
var y = 10
var x = 5
function setup() { 
 createCanvas(400, 400);
 background(220);
} 

function draw() { 
 fill(random(255),random(255),random(255))
 while(x < 390){
   x = x + 10;
   ellipse(x, y, 10 ,10);
 }
 if(x >= 390){
  x = 10
  y = y + 10
 }
}
```

Koden illustrerer, at vi kan have lige så mange instruktioner i kroppen, som vi ønsker. Vi kan sågar have betinget udførsel eller løkker inde i løkker. Løkker kan med andre ord blive ret kompliceret. Når en løkke konstrueres så prøv at undgå unødig kompleksitet.


### for-løkken
Herunder printer vi tallene fra 1 til 100 vha en for-løkke:


```javascript
for (let i = 1; i < 101; i++) {
  console.log(i);
}
```


Vi kan læse for-løkken således i ovenstående eksempel: Fra i lig med 1 til i mindre end 101 skal i printes og for hver gennemgang af løkken (en såkaldt iteration) skal vi inkrementere i med 1. Dermed bliver i heller ikke ved med at være mindre end 100.

Start og slut og vejen hertil kan bestå af både simple men også mere komplekse udtryk. Typisk bruges for-løkken, når vi skal itererere over et bestemt og velkendt interval. 

Herunder tegner vi en lang række linjer og rektangler vha af nogle for-løkker:


```javascript
let y;
let num = 14;

function setup() {
  createCanvas(720, 360);
  background(102);
  noStroke();

  // Draw white bars
  fill(255);
  y = 60;
  for (let i = 0; i < num / 3; i++) {
    rect(50, y, 475, 10);
    y += 20;
  }

  // Gray bars
  fill(51);
  y = 40;
  for (let i = 0; i < num; i++) {
    rect(405, y, 30, 10);
    y += 20;
  }
  y = 50;
  for (let i = 0; i < num; i++) {
    rect(425, y, 30, 10);
    y += 20;
  }

  // Thin lines
  y = 45;
  fill(0);
  for (let i = 0; i < num - 1; i++) {
    rect(120, y, 40, 1);
    y += 20;
  }
}
```
Vær i øvrigt opmærksom på forskellen ved brug af let og var i for-løkker. Herunder et eksempel til illustration med var:


```javascript
var i = 5;
for (var i = 0; i < 10; i++) {
  // nogle instruktioner
}
// i er 10
```
Og her et med let:

```javascript
let i = 5;
for (let i = 0; i < 10; i++) {
  // nogle instruktioner
}
// i er 5
```
### Kom ud af en løkke før tid ved brug af `break`
Der kan være tilfælde hvor vi gerne vil ud af en løkke før tid. Her kan vi bruge kommandoen `break` i løkkekroppen. Herunder et eksempel:

```javascript 
function setup(){
  textsize(20)
  for (let i = 0; i < 100; i++) {
    if (i==50 ) { 
      break; 
    }
    text(i,random(width),random(heigth))
  }
}
```
I koden bruger vi break, når variablen i bliver 50. 

Vi kan bruge `break` både når vi bruger `for`- og `while`-løkken. Her et tilsvarende eksempel med `while`: 

```javascript
function setup(){
  textsize(20)
  let i=100
  while(i>0) {
    if (i==50 ) { 
      break; 
    }
    text(i,random(width),random(heigth))
    i=i-1
  }
}
```

Vi kunne også være i et tilfælde, at vi har en løkke inde i løkke. Bruges `break` i den inderste løkke ryger vi kun ud af den inderste løkke. 
Herunder et eksempel der tegner en række cirkler på skærmen:
```javascript
let ypos = 100;
let yskridt = 20;
let xpos = 100;
let xskridt = 20;
function setup() {
  createCanvas(500, 500);
  noLoop(); //
}

function draw() {
  background(250);
  fill(150,50,50);
  noStroke();
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 9; i++) {
      ellipse(xpos+(xskridt*i), ypos+(yskridt*j), 20, 20);
      if(i==5) break
    }
  }
}
```

### Springe en iteration over med `continue`
I visse tilfælde kan det være relvant også at springe en iteration af løkken over. Det kan man gøre med nøgleordet `continue`. 

Herunder eksempel med `for`-løkken:

```javascript
function setup(){
  textsize(20)
  for (let i = 0; i < 10; i++) {
    if (i==5 ) { 
      continue; 
    }
    else{ 
      text(i,random(width),random(heigth))
    }
  }
}
```

og tilsvarende for `while`-løkken:

```javascript
function setup(){
  textsize(20)
  let i=0
  while(i<10){
    if(i==5){
      continue
    }
    else{ 
      text(i,random(width),random(heigth))
    }
  }
}
```
Begge eksempler tegner tallene 0 til og med 9 dog eksklusiv tallet 5. 

## Lister

## Øvelser

1. Forklar hvad følgende kode gør:
```javascript
function setup() {
  createCanvas(400, 400);
  while(i<100)
    {
      let x=random(400)
      let y=random(400)
      let r = random(100)
      circle(x,y,r)
      text(i,x,y)
      i=i+1
    }
}
```
2. Omskriv koden i opgave 1, så den benytter en `for`-løkke. Udvid herefter en af de to løkker, så cirkler tegnes i venstre halvdel hvis i er lige, og hvis i er ulige tegnes cirkler i højre halvdel. 
3. Brug en `for`-løkke til at tegne de lige tal mellem 0 og 100 tilfældige steder på skærmen med farven rød.
4. Brug en `while`-løkke til at tegne de ulige tal mellem 0 og 100 tilfældige steder på skærmen med farven blå. 
5. Tegn en cirkel i centrum og dernæst en lidt større. Gør det 30 gange ved brug af både for og while. Det er ikke forventet at du laver en animation. Overvej forskellen på løkker og draw. Vi opfordrer at du overvejer at skrive koden i setup eller skriver `noLoop()` i setup, hvis du vil skrive koden i draw. 
6. Tegn 10 forskellige ellipser forskellige steder på skærmen både ved brug af while og for.
7. Overvej hvad følgende kode gør:
```javascript
function setup() {
  createCanvas(400, 400);
  let wordcloud =["Javascript","Python","C++","C","C#","Julia","Java","Go","R","Basic"]
  for(let i = 0;i<wordcloud.length;i++)
    {
      text(wordcloud[i],random(400),random(400))
      i=i+1
    }
}
```
8. Tegn 10 forskellige rektangler forskellige steder på skærmen både ved brug af while og for. Farvelæg dem med hver sin farve.
9.  Tegn 10 vandrette linjer, der løber henover skærmen. Tegn 10 lodrette linjer, der løber henover skærmen i dobbelt så hurtigt som den vandrette linje.
10. Tegn 10 tilfældige punkter på dit canvas i  10 forskellige farver. 
11. Opret et kanvas 800 bredt og 800 langt. Lav et skakbræt.
12. Konstruer en vandret linje i midten og tegn vha løkker 10 rektangler der ligger på den linje. Prøv at varierer længden af disse.
13. Herunder ses et eksempel på en løkke inde i en løkke. Hvad gør koden?

```javascript
let angle =0;
let x = 50;
let y= 50; 

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink"); 
  noStroke(); 
}

function draw() {
  background("yellow");
  translate(x,y)
  rotate(angle);
  ellipseMode(CENTER);
  
  x=x+2
  angle = angle + 4
  for (var row=3; row <= width; row = row + 50){
  	for (var col=3; col <= height; col = col + 50){
  		ellipse(row,col,20,20);
  	}
  }
}
```


13. Lav en løkke, der summer de første 100 tal og printer dem i konsollen.
14. Tegn en masse linjer der roterer om det samme centrum vha af løkker.
15. Konstruer et koordinatsystem med midten af skærmen som centrum. Tegn graferne for en selvvalgt ret linje, en andengradsfunktion,  kvadratrodsfunktionen, den reciprokke funktion samt cos og sin. Herunder nogle eksempler på brugen af matematik i javascript:

```javascript
  Math.PI;            // returner 3.141592653589793
  Math.round(4.7);    // afrunder til nærmeste hele tal dvs. returner 5
  Math.round(4.4);    // afrunder til nærmeste hele tal dvs. returner 4
  Math.pow(8, 2);      // potens -  returnerer 64 = 8^2
  Math.sqrt(64);      // kvadratrod - returnerer 8 = 8^1/2
  Math.abs(-4.7);     // numerisk værdi - returner 4.7
  Math.ceil(4.4);     // runder op - returner 5
  Math.floor(4.7);    // runder ned - returner 4
  Math.cos(0 * Math.PI / 180);    // returner 1 (cos(0 grader))
  Math.sin(90 * Math.PI / 180);     // returns 1 (sin(0 grader))
  //man kan også bruge radians(grader), som konverterer grader til radianer
```


16. Tegn en tændstiksmand et sted til venstre på skærmen og en figur til højre for. Når du trykker på tasten K (for kast) sendes en cirkelformet genstand afsted ved en kasteparabel. Tegn banekurven og undersøg om genstanden rammer figuren til højre.


## Projekt: Opsparing eller aktier?

Kapitalfremskrivningsformlen (også kendt som renteformlen) er givet ved:

$$
K_n = K_0 * (1+r)^n.
$$

Hvor $K_0$ er startkapitalen, $r$ er renten, $n$ antal terminer og $K_n$ er kapitalens størrelse efter $n$-terminer.

Forestil dig nu, at du har et beløb på 50.000 kr. Du kan nu vælge at sætte dine penge til en 0.5% i DanmarksBanken eller investerer dem i aktier. Globalt har aktier de seneste 30 år givet ca. 7% i gennemsnitligafkast om året. Skriv et program, der beregner termin for termin (altså år efter år), hvor stor kapitalen bliver. Vha. beginShape og vertex ønskes en graf, der illustrerer væksten. Farvelæg de to kurver med to forskellige farver.

Bemærk i øvrigt, at 0.5% er meget højt sat :-).


## Projekt: Minigolf

Konstruer en simpel minigolfbane med en firkantet ramme med mulige forhindringer i form af rette linjer. Placer en golfbold et sted og send den afsted med konstant fart. Beregn og tegn banekurven, der gerne skulle bestå af rette linjer eftersom indgangsvinkel er lig med udgangsvinkel. 


## Projekt: Talrækker 

Lige siden opdagelsen af pi, har man været interesseret i at bestemme pi med flest mulige decimalers nøjagtighed. I det følgende skal I konstruere en række funktioner, der beregner forskellige tilnærmelser af pi. 


Den første og letteste at implementere er “Leipniz sum” der konvergerer mod en kvart pi, men så er det jo bare at gange med fire:
$$
\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = \frac{1}{1} - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} - \cdots.
$$

1. Skriv en funktion, der givet $n$ beregner de første $n$ led i ovenstående. Husk at du kan skrive ud til konsollen vha. kommandoen (console.log). Et skelet til funktionen ses herunder:

```
function computeLeipniz(i)
{
    
  //return summen af de i-led
}
```

2. Prøv herefter at skrive en tilsvarende funktion, der implementerer Newtons formel:
$$
\pi = \dfrac {3 \sqrt 3} 4 + 24 \paren {\dfrac 2 {3 \times 2^3} - \dfrac 1 {5 \times 2^5} - \dfrac 1 {28 \times 2^7} - \dfrac 1 {72 \times 2^9} - \dfrac 5 {704 \times 2^{11} } - \dfrac 7 {1664 \times 2^{13} } - \cdots}
$$

3. Prøv endelig Ramanujans formel:
$$
\frac{1}{\pi} = \frac{2 \sqrt 2}{99^2} \sum_{k=0}^\infty \frac{(4k)!}{k!^4} \frac{26390k+1103}{396^{4k}}
$$

    


