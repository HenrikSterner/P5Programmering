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
Vi kan forestille os, at vores Car klasse skal repræsentere både en varevogn og en last, og at vi vælger at samle de ting de har til fælles i Car, og de ting der adskiller dem i deres respektive børneklasser. Herunder noget eksempelkode:
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


### Overloading
Vi kan sågar udvide metoderne i børneklassen så de tager flere argumenter. F.eks. kunne man forestille sig, at man udvide Van med en type/model og afhængig af hvilken type Van var kunne man tillade, at bestemte typer Vans kørte hurtigere end andre. Dette kaldes også for at overloade metoder.   
