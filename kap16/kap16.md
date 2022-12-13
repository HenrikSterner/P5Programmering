# 16. Vektorer
Vektorer betegner en entitet, som består af en længde og en retning. Man kan tænke på dem som pile, der kan beskrive bevægelser, kræfter og meget mere.  

Vektorer, spiller en helt central rolle i forhold til at beskrive, undersøge og simulere fænomener i naturen og fysikkens verden.

I det følgende startes med at implementere et basalt vektorbibliotek, der kan konstruere og operere på vektorer, ved brug af principperne fra OOP. 

Dernæst motiveres brugen af biblioteket ved at kode en simulering af et mikro økosystem i form af et akvarium med forskellige typer fisk. Ved brug af vores vektorbibliotek og objekter vil vi bl.a. simulere et naturfæonomen nemlig visse dyr (og i tilfældet her fisks) flokadfærd. Umiddelbart kunne dyrs flokmentalitet tyde på en højere og dybere intelligens, men som vi skal se, kan vi denne adfærd faktisk reduceres til nogle simple regler.  

## Et bibliotek af vektorer
P5 har på forhånd stillet et vektorbibliotek til rådighed, så man kan måske undre sig over hvorfor vi ikke bare benytter dette. Det er der mange grunde til. 
For det første giver det en langt bedre forståelse at implementere ting fra bunden ikke mindst vektorer, som er en central datastruktur i programmering og som bruges intensivt i mange sammenhænge. Bl.a. når programmering skal facilitere  og undersøge et emne indenfor eksempelvis fysiki forhold til at simulere naturfænomener. 
For det andet er implementationen af et vektorbibliotek en god øvelse i at bruge grundlæggende objektorienteret tankegang, hvor vi får trænet brugen af konstruktion af objekter og metoder knyttet hertil. Det såkaldte indkapslingsprincip.  
Endelig vil vi også gerne opfordre enhver programmør til at designe og implementere generiske løsninger, der kan sættes i spil i andre sammenhænge end det konkrete projekt, som de netop arbejder på. 

### Konstruktion af en vektor: Indkapslingsprincippet i praksis
Indkapslingsprincippet, som er en af grundprincipperne indenfor OOP, betoner, at vi pakker data og metoder, som opererer på disse data, i en og samme enhed (læs: klasse). 
Vektorer er et godt eksempel på en sådan enhed. En vektor kan betragtes som en afstand mellem to punkter eller en transformation fra et sted i koordinatsystemet til et andet. 
Herunder et eksempel på en vektor skrevet med vektornotation: 
$$\overrightarrow{a}=(2,3).$$

Det betyder i praksis, at står vi i et vilkårligt punkt i planen, så vil vektoren $\overrightarrow{a}$ transformere os til et nyt punkt ved at gå 2 skridt i x-aksens retning (til højre) og 3 skridt i y-aksens retning (opad). 
Vi får mao mulighed for at beskrive objekters bevægelse ved brug af vektorer. Det skal vi vende tilbage til. Først skal vi konstruere en simpel vektorklasse i P5 til at håndtere vektorer i to dimensioner. Vi gør opmærksom på, at vektorer let kan generaliseres til både og tre og n-dimensioner. Det bliver en af øvelserne for læseren. 
Herunder en hel basal vektorklasse med en konstruktør, der tager et x og y:
```javascript
class Vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
```
Reelt set er vores vektorklasse nu bare en container eller et punkt, der opbevarer et koordinatsæt. Man kan tænke på vores nuværende vektor, som en såkaldt `stedvektor`, der starter i origo (dvs. $(0,0)$) og peger på et punkt $(x,y)$. Men det er vigtigt at understrege, at vi kan abstrahere fra dette og placerer vores vektor et vilkårligt sted i planen. 

Herunder benytter vi klassen til at tegne cirkel ud fra vores vektor: 
```javascript
let vec
function setup() {
  createCanvas(400, 400);
  vec = new Vector(200,300)
}

function draw() {
  circle(vec.x,vec.y,50)
}
```
Som det fremgår af koden, kan vi uden videre tilgå vores attributter x og y. Ifølge indkapslingsprincippet er det god designpraksis at skjule så megen unødig kompleksitet og information for brugeren som muligt.  I javascript kan det gøres ved brug af hashtag, som nedenfor:

```javascript
class Vector{
  constructor(x,y){
    this.#x = x;
    this.#y = y;
  }
}
```
På den måde kan vi ikke længere tilgå attributterne x og y, men må i stedet implementere accessor og mutator-metoder, som kan ændre og hente værdierne. Af hensyn til læsbarheden af vores kode vælger vi dog i første omgang at gå på kompromis med princippet og overlade det som en øvelse til læseren at implementere disse metoder. Vi implementerer til gengæld herunder en accessor-metoder til at hente længden af vektoren ud fra Pythagoras læresætning:

```javascript
    getLength()
    {
      return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
    }
```

## Animere ved brug af vektoraddition
Hvis vi ønsker at animere vores vektor har vi brug for at ændre vektorens koordinater, hvorfor vi indfører begrebet `hastighed` (eller `velocity` på engelsk) i form af to nye variable kaldet `xspeed` hhv. `yspeed`, som vi ønsker at addere til vores vektors koordinater:
```javascript
x = x + xspeed
y = y + yspeed
```  
Fra matematik kender vi det som vektoraddition. Givet $\overrightarrow{a}=(a_1,a_2)$
og $\overrightarrow{b}=(b_1,b_2)$, så er additionen givet ved $$\overrightarrow{a}+\overrightarrow{b}=(a_1+b_1,a_2+b_2).$$
I praksis svarer addition af vektorer til, at vi starter i punktet for den første vektor, bevæger os til enden af den og bevæger os fra det endepunkt til enden af den anden vektor. 
I praksis svarer det til at summe vektorerne koordinatvis, hvilket let kan implementere i praksis:
```javascript
  add(v){
    this.x += v.x
    this.y += v.y
  } 
```
Vi kan nu let sætte vores cirkel i bevægelse:
```javascript
let place
let velocity
function setup(){
  createCanvas(400, 400);
  place = new Vector(200,300)
  velocity = new Vector(5,-4)
}

function draw(){
  background(255);
  place.add(velocity);
  if ((place.x > width) || (place.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((place.y > height) || (place.y < 0)) {
    velocity.y = velocity.y * -1;
  }
  fill(130);
  circle(place.x,place.y,50);
}
```
I `draw` sikres at vores cirkel bouncer af på skærmen hvis vi, når en af kanterne. 

### Andre vigtige metoder til vores vektorbibliotek
Hvis vi havde nok i bare at kunne addere vektorer, så var der næsten ingen grund til at lave et vektorbibliotek. 
Herunder gennemgår vi kort en række metoder, som vores vektorbibliotek kan eller skal have implementeret. Vi overlader det til læseren at implementere disse metoder vis navne står i firkantede parenteser med deres parametre i parenteser:

- Skalering [`scalar(k)`]: En vektor kan skaleres i længde værdien $k$. Det sker ved at multiplicere $k$ på både x og y.  Metoden skal returnere ændre vektoren og returnere den skaleret vektor. 
- Tegne vektor [`drawVector(xstart=0,ystart=0)`]: Skal tegne vektoren fra startpunktet $(xstart,ystart)$. Hvis ingen argumenter angives, tegnes stedvektoren. 
- Til streng [`toString()`]: Skal returnere en streng, der består af koordinaterne og vektorens længde. 
- Prikproduktet [`dotProduct(v)`]: Beregner prikproduktet med en anden vektor `v`. Det er summen af koordinaterne multipliceret koordinatvis. 
- Normalisering [`normalize()`]: Vi kan konstruere en såkaldt enhedsvektor med samme retning som vores oprindelige vektor, men med længden $1$ ved at skalere med $\frac{1}{Længden af vektoren}$. 
- Ens retning [`isParallel(v)`]: Hvis vi normaliserer vores vektorer, beregner prikproduktet og det giver 1, så betyder det, at vektorerne er ens eller parallelle. Metoden skal returnere sand eller fask.
- Modsat retning [`isOpposite(v)`]: Hvis vi normaliserer vores vektorer, beregner prikproduktet og det giver -1, så betyder det, at vektorerne står vinkelret på hinandnen. Metoden skal returnere sand eller fask. 
- Vinkelret [`isPerpendicular(v)`]: Hvis vi normaliserer vores vektorer, beregner prikproduktet og det giver nul, så betyder det, at vektorerne står vinkelret på hinandnen. Metoden skal returnere sand eller fask.
- Negering af vektor [`negate()`]: Hvis vi ønsker en vektor i modsat retning kan vi "negere" den oprindelige vektor ved at skalere med -1. Metoden skal returnere den negeret vektor. 

Vi beder læseren om at implementere disse i øvelserne.  
Som et eksempel på hvorledes det kan gøres har vi i det følgende implementeret en metode [`getAngleBetween(v)`], som finder vinklen mellem to vektorer og returnerer resultatet i grader:
```javascript
class Vector{
  //...
  getAngleBetween(v) {
    let vrad = Math.acos(this.dotProduct(other) / (this.getLength() * v.getLength()))
    return ((vrad*180)/Math.PI)
  }
}
const v1 = new Vector(0, 2)
const v2 = new Vector(1, 0)
console.log(v1.getAngleBetween(v2))
```

### Hvad med flere dimensioner?
Vektorer behøver ikke kun være knyttet til 2-dimensioner, men kan generaliseres til både tre og et vilkårligt antal dimensioner. I tilfældet med 3 dimensioner kan vi benytte javascripts notation for standardværdier. Herunder et eksempel:
```javascript
class Vector{
  constructor(x,y,z=0){
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
```
Hvis ikke andet angives sættes z til 0. 
Alle metoderne nævnt ovenfor lader sig let generalisere ved reelt bare at inddrage z i udregningen. Vi overlader det som en øvelse til læseren, at udvide bibliotektet, så det kan håndtere 3-dimensioner. 

Såfremt man ønsker at udvide med flere dimensioner, hvilket kan være særdeles relevant når man skal arbejde med kunstig intelligens og datavidenskab, så vil det formentlig være bedre at give et array af tal, som argument til konstruktøren. Alternativt kan man hente listen af argumenter fra en metode ud vha af `arguments`. Herunder et eksempel der blot printer koordinaterne i konsollen:
```javascript
class Vector{
    constructor() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
}

v1 = new Vector(1,2)
v2 = new Vector(3,4,5)
```
I øvelserne opfordres du til at implementere et mere generisk vektorbibliotek, der kan håndtere vilkårligt mange dimensioner. 

### Hvad med dokumentationen?
En central del af det at udvikle et bibliotek eller API ("Application Programmer Interface") er at dokumentere hvorledes det bruges. I Javascript benyttes typisk formatet JSDoc. Kræver installation af `npm` og kørsel af følgende linje i kommandoprompt `npm install -g jsdoc`. 
Fordelene ved at brug JSDoc er bl.a. at sikre en ensartet måde at dokumentere kode på og at brugere af ens bibliotekt får mulighed for at få automatiseret forslag i sit udviklingsmiljø til hvorledes biblioteket bruges. Herunder et eksempel på dokumentation af vores vektorklasse:
```javascript
/** Class representing a Vector. */
class Vector {
    /**
     * Create a Vector.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Scales a vector
     * @param {float} float - The scalar a real number.
     * @return {Vector} A scaled vector.
     */
    scale(flt) {
        // ...
    }
    //...
}
```
Vi overlader det som en øvelse til læseren at dokumentere metoderne. 


## Vektorbiblioteket i praksis: Simulering af et økosystem
I denne del vil vi gøre brug af vores vektorbibliotek til at simulere et akvarium med fisk, som et eksempel på et simpelt økosystem. 

### En fiske-klasse
Til at starte med konstrueres en klasse, der skal stå for at repræsentere en fisk. Vi benytter vektorer til at beskrives dens lokation og hastighed, og vi implementerer to metoder, der opdatere fiskens position samt tegner den:
```javascript
class Fish{
    constructor(location,velocity)
    {
        this.location = location
        this.velocity = velocity
        this.size = 50
    }

    update()
    {
        this.location.add(this.velocity);
    }

    draw()
    {        
        if ((this.location.x > width) || (this.location.x < 0)) {
          this.velocity.x = this.velocity.x * -1;
        }
        if ((this.location.y > height) || (this.location.y < 0)) {
          this.velocity.y = this.velocity.y * -1;
        }
        fill(130);
        circle(this.location.x,this.location.y,this.size);
    }
}
```
Vi kan nu med ganske få linjers kode konstruere nogle fisk: 
```javascript
function setup(){
  createCanvas(400, 400);
  fish1 = new Fish(new Vector(200,300),new Vector(5,-4))
  fish2 = new Fish(new Vector(100,100),new Vector(-3,7))
}

function draw(){
  background(255)
  fish1.update()
  fish1.draw()
  fish2.update()
  fish2.draw()
}
```
Selvom koden er blevet meget pænere og mere let læselig ved brug af klasser, kan det stadig bliver omfangsrigt, når vi begynder at få mange fisk. Vi sætter derfor fiskene ind i en liste og løber den igennem med en løkke. Herunder genereres $n$ fisk tilfældige steder på skærmen: 
```javascript
let n = 10
let fishes =[]
function setup(){
  createCanvas(400, 400); 
  for(let i = 0;i <n;i++){
    fishes.push(new Fish(new Vector(random(0,width),random(0,height)),new Vector(random(-10,10),random(-10,10))))
  }
}

function draw(){
  background(255)
  for(let i = 0;i <n;i++){
    fishes[i].update()
    fishes[i].draw()
  }
}
```

### Forskellige typer af fisk: Nedarvningsprincippet
Vi ønsker at vores system skal have to forskellige typer af fisk:
- En "bytte" fisk som svømmer rundt vilkårligt efter mad
- En "jager" eller "pirat" fisk, der jager byttefiskene. 

På trods af at de to umiddelbart virker forskellige, så er de også meget ens. Fremfor at implementere to forskellige klasser af fisk, så kan vi gøre brug af nedarvningsprincippet. Her samler vi de egenskaber og metoder, der er til fælles, i den oprindelige fiskeklasse, og ved at udlede børneklasser, der på den ene side arver fælles egenskaber og på anden side divergerer på attributter og metoder, sikres, at vi kan genbruge store dele af koden og at vi senere kan behandle de forskellige typer fisk på en ensartet måde. Det fører igen til mere elegant og læsbar kode, som også i højere grad lader sig skalere og udvide. 

I praksis kan vi i Javascript udvide med nøgleordet `extends`:

```javascript
class BytteFisk extends Fisk{
  //...
}
class PiratFisk extends Fisk{
  //...
}
```
### Flok intelligens: Beskeder mellem objekter
Det simple økosystem i form af akvariet kan udvides på mange måder. Et sted at starte kunne være at få fiskene til at opføre sig mere naturligt. Eksempelvis ved vi, at visse fiskearter har tilbøjelighed til at svømme i flokke (lidt ligesom fugle, myrer, mennesker og mange andre dyr). 

![Fisk bevæger sig ofte i blokke ligesom mange andre dyr](../kap16/images/fishflock.jpg)

Det er spændende at undersøge af mange grunde. Bl.a. fordi naturens indbyggede flok-intelligens viser sig, at være anvedelig i en lang række eksempel såsom kurering af kræft, optimering af processer, simulering af individulles adfærd i grupper etc. Men desuden stiller implementeringen af flok-intelligens krav om, at vores fiske-objekter udveklser informationer mellem hinanden, så de ved hvor hinanden er. Dvs. for programmører er implementationen af flok-intelligens et godt eksempel på, hvordan objekter kan kommunikere med hinanden. 

I det følgende gennemgås nogle simple regler for hvorledes flok-mentaliteten, som vi efterfølgende kan implementeres i praksis ved brug af interagerende objekter og attributter knyttet til disse. 

- Seperation: En fisk vil forsøge at svømme væk fra andre fisk, der er tæt på den. Men ligesom naturen vil ingen fisk have viden om alle fisk i flokken. Til at holde styr på antallet af synlige naboer indføres en variable kaldet `neighboring_boids`. 
- Justering: En fisk vil forsøge at efterleve hastigheden af andre fisk i nærheden. Vi indfører vektoren `xvel_avg` og `yvel_avg`. 
-  Samhørighed: En fisk vil forsøge at svømme mod centrum af flokken. Vi indfører variablerne `xpos_avg` og `ypos_avg`. 

Udover de nævnte vil det også være relvant at prædefinere en minimumshastighed og maksimumshastighed for vores fisk. 

Vi er nu klar til at formulere en højniveau pseudokode version af den overordnede algoritme:

```javascript
for hver fisk F:
  Nulstil variablerne xpos_avg, ypos_avg, xvel_avg, yvel_avg, neighboring_boids, close_dx, close_dy = 0
  for hver anden fisk G:
    F.seperation(G)
    F.justering(G)
    F.samhørighed(G)
```

Som det fremgår af pseudokoden, så kommer vi ikke uden om at skulle have en løkke i en løkke, da vi er nødsaget til for hvert fiskeobjekt at kommunikere med alle andre fiskeobjekter om deres placering og fart. Vi inddeler desuden ovenstående pseudokode i nogle mindre metoder for at gøre det mere overskueligt. 


```javascript
for hver fisk:

    # indlæs lokale attributter til nul
    xpos_avg, ypos_avg, xvel_avg, yvel_avg, neighboring_boids, close_dx, close_dy = 0

    )
```

De tre regler bør implementeres i hver enkelt fisk, medfører, at vi bør udvide vores Fiske-klasse med en række attributter: 


```javascript
class Fish{
    constructor(location,velocity)
    {
        this.location = location //(x,y) peger på fiskens placering
        this.velocity = velocity // (xvel,yvel) peger på fiskens hastighed i de to retninger
        this.size = 50
    }
}

```





## Øvelser
I afsnittet er øvelserne inddelt i hvorvidt de knytter sig til vektorer eller eksemplet. Til at starte med arbejdes i to dimensioner. Senere i øvelserne skal alle resultaterne generaliseres til n-dimensioner. Det er dog en god ide at starte i 2-dimensioner. Generelt opfordres til, at man i alle øvelserne starter med at justere klassediagrammet, udvide med en skeletmetode og herefter test den. Endelig bør man teste og dokumentere alle udvidelser. 

### Øvelser om vektorer
1. Modeller vektorklassen ved at konstruere et klassediagram, hvor du tilføjer relevante attributter til at starte med. Blandt de relevante attributter x- og y-koordinater, vektorens farve, tykkelse og navn. Indiker typerne i diagrammet.
2. Udvid med en klasse, der initialiserer de indførte attributter.
3. Overvej hvilke attributter som bør være private. Juster klassediagrammet. 
4. Indfør relevante mutator-metoder (getters og setters) for alle dine attributter og tilføj metoderne til klassediagrammet.  Prøv metoderne af og se om de
5. Udvid klassediagrammet med metoder `scalar(k)`, `drawVector(xstart=0,ystart=0)`, `toString()`, `dotProduct(v)`,`normalize()`, `isParallel(v)`, `isOpposite(v)`, `isPerpendicular(v)` og `negate()`.
6. Udarbej skeletmetoder for hver af metoderne hvor du tilføjer kommentaren `//pass` til alle metoderne, og prøv herefter at implementer de relevante metoder. 
7.  Prøv alle metoderne af og se om de giver det ønskede resultat.
8.  Dokumenter alle metoder ved brug af JsDoc formatet. 
9.  Udvid med en metode, der undersøger om en vektor er lig med eller forskellig fra en anden vektor. Dvs. hvorvidt koordinaterne er ens. 
10. Tilføj en metode der giver mulighed for at lave elementvis multiplikation og division mellem to vektorer. Husk at teste og dokumentere dem.  
11. Udvid vektorklasen med nedenstående statiske sammenligningsmetoder (ved at skrive `static` i erklæringen af metoderne). Vær opmærksom på, at ved at erklære metoderne for `static` kan de kaldes uden, at man behøver at instantiere dem. Husk at teste og dokumentere dem. 
    - `lessThan(a,b)`: Undersøger om hvert koordinat i vektor a er skarpt mindre end tilsvarende koordinat i vektor b. Returner sand hvis det er tilfældet ellers falsk.
    - `lessThanOrEqualTo(a,b)`: Undersøger om hvert koordinat i vektor a er mindre end eller lig tilsvarende koordinat i vektor b. Returner sand hvis det er tilfældet ellers falsk.
    - `greaterThan(a,b)`: Undersøger om hvert koordinat i vektor a er skarpt større end tilsvarende koordinat i vektor b. Returner sand hvis det er tilfældet ellers falsk.
    - `greaterThanOrEqualTo(a,b)`: Undersøger om hvert koordinat i vektor a er større end eller lig tilsvarende koordinat i vektor b. Returner sand hvis det er tilfældet ellers falsk.
12. Udvid nu med selvvalgte statiske metoder `max(a,b)` og `min(a,b)`, der finder det hhv. største og mindste koordinat i to vektorer, a og b. 
13. Udvid biblioteket med følgende statiske metoder:
    - `abs(v)`: Returnerer en ny vektor med koordinater som vektor v, men hvor den absolutte/numeriske værdi er taget på hver af koordinaterne. 
    - `floor(v)`: Returnerer det største hele tal mindre end eller lig med hvert koordinat i vektoren. 
    - `ceil(v)`: Returnerer det mindste hele tal større end eller lig med hvert koordinat i vektoren. 
14. Udvid biblioteket med følgende statiske metoder:
    - `power(vec,n)`: Metoden opløfter hvert element i heltallet `n`.
    - `power(a,b)`: Metoden opløfter hvert element i vektor a med tilhørende element i vektor b. 
15. Generaliser vektorbiblioteket så det kan håndtere og operere på vektorer i n-dimensioner. 
16. Generaliser alle metoderne, som du har implementeret i 2d til n-dimensioner. F.eks. bør getters og setters tage parametre, der indikerer hvilke koordinat i form af et heltal fra 0 til n-1, der indikerer hvilket koordinat man ønsker at hente eller sætte. Overvej desuden hvilken datastrukturer, der skal bruges til at håndtere data. 
17. I det følgende skal anvendes en såkaldt højere ordens funktion ved navn `map`. Funktionen `map` tager en funktion og lader den virke på hvert element i et array. Herunder et eksempel, som skal prøves af:
  ```javascript
  const lstNumbers = [1, 2, 3, 4];
  const sqrNumbers = numbers.map(mySquareFunction)

  function mySquareFunction(num) {
    return num * num;
  }
  ```
  Givet et array ved navn A og en funktion f kan `map´ altså kaldes ved:
  ```javascript
  A.map(f)
  ```
18. Udvid vektorbiblioteket, så det inkluderer en `map(f)` funktion, der lader funktionen f virke på alle koordinater i vektoren. Prøv map af i praksis med forskellige funktioner. Bemærk at `f` skal være en funktion som tager et reelt tal og returnerer et reelt tal. 


### Øvelser om animationer af fisk
Herunder følger en række øvelser, som udvide økosystemet eller akvariet med ny funktionalitet. Igen bør man løbende opdatere klassediagrammet med nye metoder og attributter samt teste og dokumentere sin kode.  
1.  Konstruer klassediagrammer med metoder og attributter for de to slags fisk. 
2.  Implementer klassen fisk, så fisken tegnes som en trekant og at de bevæger sig rundt på skærmen.
3.  Sørg for at fiskene "bouncer" af på kanterne af skærmen i en tilpas afstand f.eks. med en margin på 100 pixels. 
4.  Overskriv måden fiskene tegnes på i de to børn, så jægerfiskene og byttefiskene ser forskellige ud i fht form og farve.  
5.  Udvid byttefiskenes måde at svømme på så de svømmer væk fra jægerfisk. 
6.  Udvid jægerfiskene så de forsøger at fange byttefisk. 
7.  Hvis jægerfisk kolliderer med byttefisk så spises byttefisk. Dvs. den forsvinder og jægerfisk bliver en lille smule større i næste frame. 
8.  Udvid så jægerfiskene undervejs og helt tilfældigt holder nogle små pauser, hvor de "står stille" i vandet. 
9.  Udvid med en ny klasse "Food", som dumper ned for oven og lander i bunden. Der må max ligge 5 stykker mad på bunden til et givent tidspunkt. 
10. Hvis byttefiskene kolliderer med maden svarer det til at de har spist maden. Spiser de noget mad skal de tegnes en lille smule større i næste frame. 
11. Udvid byttefiskenes svømmemønster så ud over at undgå jægerfisk forsøger de også at fange maden. Lad afstanden bestemme hvilken ting de prioriterer højest.   


### Øvelser om implementering af flokadfærd hos fisk 
Herunder følger en række øvelser, der skal udvide akvariet så særligt byttefiskene har tendens til at svømme i flok. 

