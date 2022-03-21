# 10. Objektorienteret principper 
Objekter, repræsenteret ved en klasse bestående af metoder og variable, spiller en helt central rolle i moderne softwareudvikling. De hjælper med at skabe struktur og systematik i nogle ofte kompliceret problemer og processer. 

I det følgende vil vi se på nogle af de centrale ideer eller principper, der er med til at retfærdiggøre brugen af objekter i det hele taget. Vi kigger på principperne enkeltvis, men vi gør samtidig opmærksom på, at de skal ses i en sammenhæng. Det ene princip er i vis forstand afhængig af, at vi benytter de andre principper.

## Indkapsling
Indkapslingsprincippet betoner, at objekter kan opfattes for en form for container af data og at objekter principielt set bør skjule mest mulig unødig kompleksitet for andre klasser. Som standard så skjuler de fleste objekt-orienteret sprog ikke nødvendigvis data.  Herunder et eksempel på, at variabler implementeret i klasser umiddelbart let kan tilgås andre steder i programmet: 

```javascript
class Car {
  constructor(speed) {
    this.speed = speed;
  }
  setSpeed(amount)
  {
    this.speed += amount
  }
  getSpeed()
  {
    return this.speed
  }
}

function setup() {
  createCanvas(400, 400);
  const c = new Car(20)
  console.log(c.getSpeed())
  c.speed = 140
  console.log(c.getSpeed())
}
```
Indkapslingsprincippet, bruges nærmest overalt i den virkelige verden, uden at man nødvendigvis kaldet det for indkapsling. 
Tænk på et produkt af en vis kompleksitet. Det kunne være en bil, en støvsuger eller mobiltelefon. Her bekymrer vi os ikke om hvordan bilen eller nogle af de nævnte produkter fungerer nedenunder, men vi tilgår blot den komplekse teknologi nedenunder ved brug af en simpel (bruger)grænseflade.  

Ved at skjule unødig kompleksitet undgår man bl.a. at andre klasser ændrer eller læser data, som de ikke bør have adgang til. Man opfordres også derved til implicit at være bevidst om data, som er essentielle for klassen og som bør være private for klassen. Man fordres med andre ord til at kode op mode veldefineret grænseflader for en klasse, der består af metoder og attributter, som er tilgængelige for andre klasser.

Herved sikres, at bruger af delsystemet ikke behøver at bekymre sig om hvordan delsystemet rent faktisk er implementeret neden under. Vi undgår samtidig i højere grad, at den samme kode gentages flere steder ud fra devicen om, at hvis det er vigtigt, at to stykker ens kode holdes ens, så bør der i praksis ikke være en kopi. 
I praksis gør indkapsling det samtidig muligt, at vi i højere grad kan uddistribuere det egentlige udviklingsarbejde op til flere programmører og at vi i visse tilfælde i højere grad kan parallellisere vores programmer til afvikling på flere processorer/tråd for at optimere køretiden.

I praksis implementeres indkapsling ved at kontrustere metoder i klassen, som andre klasser skal kalde for at tilgå disse komponenter.

I langt de fleste sprog implementeres indkapsling ved brug af et keyword såsom private, som man sætter foran erklæringen af sin variable. 
I Javascript bruges hashtag. Herunder et eksempel:

```javascript
class Car {
  #speed;
  constructor(speed) {
    this.#speed = speed;
  }
  setSpeed(amount)
  {
    this.#speed += amount
  }
  getSpeed()
  {
    return this.#speed
  }
}

function setup() {
  createCanvas(400, 400);
  const c = new Car(20)
  console.log(c.getSpeed())
  c.setSpeed(30)
  console.log(c.getSpeed())
  console.log(c.#speed) //fejl
  c.#speed = 130 //fejl
}
```
Bemærk at de sidste to linjer i setup giver fejl. Vi kan ikke direkte tilgå variablen #speed. Havde vi undladt hashtag var det muligt at læse og skrive speed variablen direkte, hvilket vi ikke ønsker er muligt. I stedet konstrueres metoderne getSpeed hhv. setSpeed, som også kaldes for en accessor- hhv. mutator-metode.

## Nedarvning
Lidt ligesom et barn arver egenskaber fra sine forældre, så handler nedarvningsprincippet om, at klasser (kaldet børn) kan arve data og metoder fra en forældre klasse (kaldet super).  
På den måde kan konstrueres børneklasser, som udvider de grundlæggende egenskaber og funktionalitet fra superklassen uden at skulle kode de samme ting flere gange.

I Javascript implementeres nedarvning ved brug af nøgleordet extends. Herunder et generisk eksempel:

```javascript
class Father {
}

class Son extends Father {
}

```
Alle metoder og variable der er implementeret i Father er tilgængelige i Son også. Hvis sønnen en dag får et barn kan barnet tilsvarende og så nedarve fra sønnen og derved arve  fra Father også. I visse sprog kan børn arve fra multiple forældre. Dette er dog ikke muligt i JavaScript.

Herunder et eksempel på hvorledes Car klassen kan udvides

```javascript
class Van extends Car {
  setSpeed(amount)
  {
    if((this.#speed+amount) > 110) 
    {
      console.log("A van is not allowed to drive faster then 110 km/s")
    }
    else{
      this.#speed += amount
    }
  }
}
function setup() {
  createCanvas(400, 400);
  const v = new Van(10)
  v.setSpeed(120) //not allowed when its a van
  v.getSpeed() //writes 10
}
```
Klassen Van er et barn af forældren eller superklassen Car hvilkes ses ved, at den udvider (se nøgleordet extends) klassen.
I konstruktøren kaldes super() for at initialisere barnet ud fra superklassen. 

I metoden setSpeed har vi valgt at undersøge hvorvidt hastigheden bliver mere end 120, da vi i dette eksempel tillader os at forestille os, at det ikke er lovligt for en Van. Vi har med andre ord overskrevet metoden setSpeed i børneklassen, så den implementerer sin egen adfærd forskellig fra forældren. 

Ydermere ser vi, at vi uden videre kan kalde eksisterende metoder fra superklassen jf. vores kald til getSpeed. 
Vi kan også konstruere helt nye metoder eller variable. Det gøres fuldstændig på samme måde som hvis vi havde gjort det i superklassen.

## Polymorfi
Polymorfi består af to ord, poly og morf, som betyder hhv. mange og former. Underforstået så handler polymorfi helt grundlæggende i programmering om, at objekter kan antage forskellige former, men vi kan stadig behandle dem på en ens måde. Det betyder i praksis mere kompakt læsbar kode med forhåbentlig færre fejl, som også i højere grad kan justeres og skaleres. Det er en af de mere komplekse dele af den objektorienteret programmering, som kan tage noget tid at blive vant, men det er omvendt også et særdeles kraftfuldt værktøj.

Når vi skriver, at vi kan behandle forskellige former ens, så betyder det mere konkret, at man kan justere på børneklassers nedarvede metoder så de ikke afvikles de præcis samme instruktioner som forældreklassen, men at vi kan tilpasse dem den konkrete kontekst i børneklassen. 

I praksis er der to forskelige måder at opnå denne form for polymorfisme. Den ene kaldes overskrivning og den anden overloading.
I det følgende vil vi illustere hvorledes disse to metoder fungerer.

### Overskrivning
Vi kan forestille os, at vores Car klasse skal repræsentere både en varevogn og en last, og at vi vælger at samle de ting de har til fælles i Car, og de ting der adskiller dem i deres respektive børneklasser. Herunder et eksempel:
```javascript
class Truck extends Car {
  setSpeed(amount)
  {
    if((this.#speed+amount) > 90) 
    {
      console.log("A van is not allowed to drive faster then 90 km/s")
    }
    else{
      this.#speed += amount
    }
  }
}
class Van extends Car {
  setSpeed(amount)
  {
    if((this.#speed+amount) > 110) 
    {
      console.log("A van is not allowed to drive faster then 110 km/s")
    }
    else{
      this.#speed += amount
    }
  }
}
function setup() {
  createCanvas(400, 400);
  const v = new Van(10)
  v.setSpeed(120) //not allowed when its a van
  v.getSpeed() //writes 10
}
```
Vi bemærker her, at begge børneklasser overskriver den oprindelige setSpeed metode. 


### Overloading
Vi kan sågar udvide metoderne i børneklassen så de tager flere argumenter. F.eks. kunne man forestille sig, at man udvider Van med en type/model og afhængig af hvilken type Van var kunne man tillade, at bestemte typer Vans kørte hurtigere end andre. Dette kaldes også for at overloade metoder.  Javascript understøtter ikke overloading men kan implementeres på forskellige måder. Herunder et eksempel der illustrerer hvordan vi kan tjekke argumenterne til setSpeed: 

```javascript
setSpeed(p1, p2, p3)
{
  var s = p1;
  if(typeof p2 !== "undefined") {s += p2;}
  if(typeof p3 !== "undefined") {s += p3;}
  return s;
};

setSpeed("one");        // result = one
setSpeed("one",2);      // result = one2
setSpeed("one",2,true); // result = one2true
```

## Øvelser
1. I det følgende ses kode for en klasse Car. Omskriv koden så den bruger private variabler. Forklar desuden hvad metoderne gør.


```javascript
class Car {
  constructor(PosX, PosY, Width, Length, Speed, Color, Brand) {
    this.x = PosX;
    this.y = PosY;
    this.width = Width;
    this.length = Length;
    this.speed = Speed;
    this.c = color(Color);
    this.brand = Brand;
    this.finished = false;
  }

  move() {
    this.x += this.speed;
  }

  display() {
    fill(this.c);
    rect(this.x, this.y, this.width, this.length);
  }

  finish() {
    if (this.x >= 1000 && !this.finished) {
    this.finished = true;
    console.log(this.brand + " hit the finish-line!");
    }
  }
}
```
2. Afprøv din nye klasse ved at konstruere tre biler, en Tesla, en Mercedes og en BMW. Brug metoderne display til at lave et simpelt racerløb, hvor bilerne kører venstre mod højre side. Herunder noget kode der illustrerer ideen:

```javascript
let tesla;
let volvo;
let audi;

function setup() {
  createCanvas(1000, 400);
  //new car(posX, posY, width, height, speed, color, name)
  tesla = new Car(0, 20, 90, 50, 4, "blue", "Tesla");
  volvo = new Car(0, 100, 50, 50, 2, "yellow", "Volvo");
  audi = new Car(0, 200, 90, 80, 3, "green", "Audi");
}

function draw() {
  background(220);
  tesla.move();
  tesla.display();
  tesla.finish(); 
}   
```

3. Udvid klassen med to attributter. En, der repræsenterer accellerationen, en anden der repræsenterer hvor mange km bilen kan køre på en tank. Udvid metoden move så den inddrager accellerationen og  trækker en fra hver gang bil har kørt 20 pixels. Når bilen rammer 0 skal bilen stoppe og man skal have besked i konsollen om, at bilen skal tanke benzin.  

4. Vi forestiller os nu, at I vi udvider med to nye klasser, der nedarver fra Car.  Den ene skal håndtere elektriske biler (kaldet EVCar) og den anden skal håndtere ikke elektrisk biler (kaldet NonEVCar). Begge klasser har fælles egenskaber, som angivet I den oprindelige Car klasse. Men de har forskellige egenskaber som skal implementeres i de respektive klasser. Opret de to respektive klasser og implementer, at en elektrisk bil skal bruge tid på at lade op (vha en særlig attribut) og at den ikke elektriske version hurtigt kan tanke benzin.  Dvs. metoden move skal overskrives.

5. En dyrehandler har brug for et visuelt aquarium til sin butik, hvor børn kan simulere et aquarium og lave sjov med forskellige fisk. Der skal udvikles et visuelt simuleret aquarium man som bruger kan interagere med. Herunder skeletkode, der simulerer et simpelt akvarium. 

```javascript
// The Fish class defines fish objects, that move around on the
// screen and change direction when they bump into the walls.
class Fish {
  // Constructor function for a new fish.
  // Requires x, y position where the fish is to be created.
  constructor(x, y){
    // Record the x and y position inside 'this'
    this.x = x;
    this.y = y;

    // Pick a random starting velocity
    this.xVel = random(-1, 1);
    this.yVel = random(-1, 1);
  }

  // Function to display the fish on the canvas.
  show(){
    // push matrix to save previous state
    push();

    // Translate to the x, y position of the fish.
    translate(this.x, this.y);

    // Draw a triangle to represent the fish
    triangle(20, 0, -10, -10, -10, 10);

    pop();
  }
  
  // Update the position of the fish depending on its velocity.
  update(){
    this.x += this.xVel;
    this.y += this.yVel;

    // Check whether the fish has gone off the left or right
    if (this.x < 0 || this.x > width){
      // If it has, reverse direction and move back
      this.xVel = -this.xVel;
      this.x += this.xVel;
    }

    // Check whether the fish has gone off the top or bottom
    if (this.y < 0 || this.y > height){
      // If it has, reverse direction and move back
      this.yVel = -this.yVel;
      this.y += this.yVel;
    }
  }  
}
```
6. Udvid klassen, så den har farve, størrelse og hastighed med til at beskrive fisken.

7. Brugeren af systemet skal kunne interagere med fiskene. Eksempler på interaktioner kunne være at give mad til fisk, fjerne fisk, farve fisk, sætte forskellige fisk i aquarium, trykke på fisk så de bliver bange og svømmer væk, indsætte planter og andre ting i akvariet, give fisk mulighed for at få finner og haler. Udvælg selv nogle interaktioner og prøv at implementere disse. Prøv dem af i praksis.

8. Det skal være muligt at indsætte piratfisk, der æder de andre hvis de kolliderer. De skal være større og se farlige ud. Herunder ses skelet kode for et barn af Fish. Udvid denne klasse så piratfisk svømmer hurtigere, er større og hvis de kolliderer med en af de andre fisk, så spiser de dem. 
```javascript
class PiratFish extends Fish
{
    constructor(x, y){
    super();  
    // Record the x and y position inside 'this'
    this.x = x;
    this.y = y;

    // Pick a random starting velocity
    this.xVel = random(-10, 10);
    this.yVel = random(-10, 10);
  } 
}
```

9. Du er systemudvikler og skal udvikle et nyt system til at simulere dyr i nationalparken Serengenti, der kan håndtere forskellige typer af dyr. Lav en forældre klasse, der hedder Animal. Den skal rumme attributter, som er fælles for alle dyr, såsom alder, køn, hvorvidt de er sultne, er rovdyr eller pattedyr. 
    
10.  Udvid nu med tre børneklasser af Animal, der repræsenterer hhv. dyr der lever i vandet, på landet og i luften. Giv dem passende navne og implementer en metode draw for hver af de tre børn, der tegner forskellige figurer som repræsenterer disse typer dyr.  

11. Udvid så dyrene kan bevæge sig rundt på skærmen ved brug af en metode kaldet move, men at dyrene kun kan bevæge sige ind for et bestemt område i form af en firkant eller cirkel af skærmen angivet ved et x og y som peger på punktet i venstre hjørne samt en længde og bredde eller radius. Afprøv din kode. 

12. Konstruer en scene, der konstruerer nationalparken Serengenti. Om man ser parken fra siden eller fra fugleperspektiv, bestemmer du. Parken skal dog inddeles i et vandområde, et område for dyr der kan flyve og for nogle består af illustrerer bestående. Indsæt respektive dyr i de forskellige områder, som bevæger sig rundt i området. Initialiser tilfældigt hvorvidt dyrene er rovdyr eller pattedyr.

13. Udvid nu klasserne, så hvis rovdyrene er sultne og kolliderer med pattedyr, så spises pattedyr. Hvis de ikke er sultne, så får pattedyrene lov at slippe. Afprøv koden i praksis.

## Projekter
I det følgende projekt er det endelige produkt en automatisk konstruktion af en scene sat sammen af forskellige geometriske figurer. Scenen kan eksempelvis forestille huse med træer, mennesker, blomster, skyer eller lignende. Man kan forestille sig, at denne scene generator kan bruges i spil, kunst eller til at simulere forskellige fysiske fænomener. 
En scene kunne eksempelvis bestå af et hus, der består af en trekant ovenpå en firkant, nogle skyer bestående af overlappende cirkler osv. 
Til at starte med skal konstrueres en GeometricFigure, der rummer nogle grundlæggende egenskaber ved en geometrisk figur. Det kunne være farve, form, koordinater m.m. Som børn til GeometricFigure oprettes forskellige primitive geometriske figurer såsom cirkler, linjestykker, trekanter, firkanter, polygoner... 
Endelig oprettes klasser til at repræsentere huse, mennesker, skyer m.m. Disse klasser skal benytte de nævnte geometriske figurer til at konstruere huse m.m.