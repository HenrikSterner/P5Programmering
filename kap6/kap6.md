# 6. Funktioner

Funktioner kan betragtes som små afsluttede programmer i programmet. Når først de mestres  er de et ekstremt kraftfuldt værktøj, som kan medvirke til at skabe overskuelighed og læsbarhed, en højere grad af genbrugelighed af sin kode, samt nemmere at rette og finde fejl og endelig at distribuere arbejdet ud, så flere mennesker kan arbejde på samme program.


## Konstruktion af en funktion
Vi har allerede set flere eksempler på funktioner såsom setup og draw. Herunder en definition af funktionsbegrebet:


```javascript
 function navn() //funktionshoved
  {
    //instruktioner -  funktionskrop
    //...
    //...
  }
```


<code>navn<strong> </strong></code>skal erstattes med navnet for en funktion. Det er vigtigt med sigende funktionsnavne og være obs på, at der er forskel på små og store bogstaver. Det letter læsbarheden og forståelsen af programmets funktionalitet, hvis man har tildelt sine funktioner nogle navne der både er konsistente og fortæller noget om hvad funktionen gør.

Herunder en funktion, der printer et navn ud:


```javascript
function sayHello() {
  console.log('Hello Henrik');
}
sayHello(); // kalder funktionen
```



## Input fra mus, tekstfelter og knapper ved brug af funktioner

Funktioner kan være særligt gode i forbindelse med at håndtere input fra forskellige enheder. Det skal vi se eksempler på herunder.

Herunder en funktion, som håndtere input fra tastatur:


```javascript
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}
```

Der er i øvrigt en lang række keycodes eksempelvis: BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.

Hvis du gerne vil kende forskel på små og store bogstaver så kan du bruge keyTyped():


```javascript
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyTyped() {
  if (key === 'a') {
    value = 255;
  } else if (key === 'b') {
    value = 0;
  }
}
```

En anden relevant funktion i forbindelse med tastaturtryk kunne være når man frigiver trykket på en tast. Her bruges funktionen keyRelased().

Herunder et eksempel på hvordan man laver en funktion, der håndterer at der trykkes på en knap, som oprettes med den indbyggede funktion `createButton('Tekst på knappen')`:

```javascript
let button;
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(changeBackGround); //kald til funktionen
}

function changeBackGround() { 
  let val = random(255);
  background(val);
}
```


I det følgende bruger vi funktioner til at håndtere tekst fra et tekstfelt og som efterfølgende printer “hello” samt navnet ud:


```javascript
let input, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');
}
```



## Konstruktion af en funktion med parametre
Vi nævnte i starten, at funktioner minder lidt om små programmer i programmet. De kan ligesom programmer og så tage et input. Bl.a. i form af en eller flere variable/lister (som :

```javascript
 function navn(x1, x2, x3, …,xn) //funktionshoved
  {
    //instruktioner -  funktionskrop
    //...
    //...
  }
```


Her angiver x1, x2, x3, …, xn parametre eller input til funktionen. 

Her kommer et indledende eksempel:


```javascript
let myName = 'Henrik';
function sayHello(name) {
  console.log('Hello ' + name + '!');
}
sayHello(myName); // kalder funktionen med argumentet 'Henrik'
```


Bemærk, at når man har en konkret værdi, der evt er gemt i en variable, kaldes parameteren for argument i kommentaren. Parameter og argument blandes ofte sammen, men man bør være opmærksom på, at en inputvariabel i en funktionsdefinition kaldes en parameter men ved udførselspunktet, når den får en faktisk værdi kaldes denne et argument (eller formel parameter).


## Returnere i en funktion

Indtil nu har vi enten printet i funktionen eller bare ændret på nogle værdier. Ofte ønsker man at få et output fra funktionen, som man kan gemme i anden variable eller lignende til senere brug. 

Til det bruges return: 

```javascript
function beregnKvadrat(x) {
  return x * x;
}
const resultat = beregnKvadrat(4); // returner 16
console.log(resultat); // printer '16' til konsolen
```

Eller vores foregående eksempel med navn:

```javascript
function sayHello(name) {
  console.log('Hello ' + name + '!');
  return name;
}
let name = sayHello('Henrik'); // kalder funktionen med argumentet Henrik
```


Her gemmer vi resultatet fra funktionen ud i en variable. Bemærk det er med vilje, at vi har givet variablen samme navn (altså _name_). Det er for at indikere, at parametrenavne er kun tilgængelige i funktionen.


## Øvelser

1. Lav først en funktion, der printer summen af tallene 2 og 3. Udvid funktionen, så den kan printe summen af to vilkårlige parametre a og b. Afprøv funktionen på både tal og strenge. Hvad bliver resultatet? 
2. Lav en funktion der konstruerer en gul cirkel ud fra tre parametre, x, y og radius.
3. Lav en funktion der givet to cirkler i form af centre og radier som parametre returnerer sand eller falsk afhængig af om de overlapper hinanden.
4. Lav en funktion, der undersøger om man med venstre mus trykker på en cirkel, der er konstrueret
5. Lav en funktion der konverterer mellem grader og radianer.
6. Lav en funktion der som input tager tre sidelængder og efterfølgende konstruerer en trekant med de vinkler og angivelser af sidelængderne, som beregnes ved brug af de trigonometriske funktioner.
7. Lav et simpelt hang-man spil, der tegner mere og mere af en hængende mand hvis man gætter forkert bogstav på et predefineret ord.
8. Lav et program der har en funktion som tager et tal i et tekstfelt som input og så genererer de n første fibonacci tal  i konsollen. Udvid eventuelt med en funktion, der kan genererer den gyldne spiral (baseret på fibonacci tallene) også kendt som fibonacci spiralen. Sidstnævnte er ikke helt nem.
9. Lav en funktion, der beregner BMI (Body Mass Index) og BMR (Basal Metabolic Rate), ud fra tal i nogle tekstfelter. Slå selv formlerne op. 
10. Lav en funktion der kan løse 2.gradsligninger og visualiser parablen med skæringspunkter på x-aksen.
11. Lav Sten-saks-papir med en tæller. Når tælleren rammer 0 skal der tegnes en sten saks og papir, der hver får knyttet to bogstaver (til hver af de to spillere). Tælleren er som hjælp implementeret herunder - men prøv at omsætte den til en simpel funktion, der tager en parameter - nemlig antallet af sekunder, der skal tælles ned:

<table>
  <tr>
   <td>
<code>let timer = 3 \
function setup() {  \
  createCanvas(400, 400); \
}  \
function draw() {  \
  background(220); \
  textAlign(CENTER, CENTER); \
  textSize(100); \
  text(timer, width/2, height/2); \
  if (frameCount % 60 == 0 && timer > 0) {//frameCount er antal frames vist</code>
<p>
<code>    // timer dekrementeres automatisk i draw; \
  } \
  if (timer == 0) { \
    text("GAME OVER", width/2, height*0.7); \
  } \
}</code>
   </td>
  </tr>
  <tr>
   <td>
   </td>
  </tr>
</table>



## Projekt: Lommeregner
Lav en lommeregner. Den behøver bare at kunne de helt basale regnearter samt kvadratrod, potens, fakultet, sin, cos, tan og potens, der alle skal implementeres som funktioner. 
