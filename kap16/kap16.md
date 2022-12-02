# 16. Vektorer
Vektorer betegner en entitet, som består af en længde og en retning. Man kan tænke på dem som pile, der kan beskrive bevægelser, kræfter og meget mere.  

Vektorer, spiller en helt central rolle i forhold til at beskrive, modellere og simulere fænomener i naturen og fysikkens verden.

I det følgende vil vi introducere vektorer ved at implementere ved brug af grundlæggende objekt-orienteret programmering et vektorbibliotek, der kan konstruere og operere på vektorer. 

Dernæst vil vi motivere brugen af biblioteket ved at kode simulere et økosystem i form af et akvarium med forskellige fisk.

## Et bibliotek af vektorer
Den opmærksomme læser har måske bemærket, at vi allerede har benyttet os af indbyggede vektorer, og undre sig over hvorfor vi ikke bare benytter disse. Det er der mange grunde til. 
For det første giver det en langt bedre forståelse at implementere ting fra bunden ikke mindst vektorer, som er en central datastruktur i programmering og som bruges intensivt mange sammenhænge bl.a. i forhold til at simulere naturfænomener. 
For det andet er implementationen af et vektorbibliotek en god øvelse i at bruge grundlæggende objektorienteret tankegang, hvor vi får trænet brugen af konstruktion af objekter og metoder knyttet hertil. 
Endelig vil vi også gerne opfordre enhver programmør til at designe og implementere generiske løsninger, der kan sættes i spil i andre sammenhænge end det konkrete projekt, som de netop arbejder på. Det er vektorbiblioteket et godt eksempel på. 

### Konstruktion af en vektor
En vektor kan betragtes som en afstand mellem to punkter eller en transformation fra et sted i koordinatsystemet til et andet. 
Herunder et eksempel på en vektor skrevet med vektornotation: 
$$\overrightarrow{a}=(2,3).$$

Det betyder i praksis, at står vi i et vilkårligt punkt i planen, så vil vektoren $\overrightarrow{a}$ transformere os til et nyt ved at gå 2 skridt i x-aksens retning (til højre) og 3 skridt i y-aksens retning (opad). 
Vi får mao mulighed for at beskrive objekters bevægelse ved brug af vektorer. Det skal vi vende tilbage til. Først skal vi konstruere en simpel vektorklasse i P5 til at håndtere vektorer i to dimensioner. Vi gør opmærksom på, at vektorer let kan generaliseres til både og tre og n-dimensioner. Det bliver en af øvelserne for læseren. 
Herunder en hel basal vektorklasse med en konstruktør, der tager et x og y:
```javascript
class Vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
```
Reelt set er vores vektorklasse nu bare en container eller et punkt, der opbevarer et koordinatsæt. Man kan tænke på nuværende vektor, som en såkaldt `stedvektor`, der starter i origo (dvs. $(0,0)$) og peger på et punkt $(x,y)$.

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
Som det fremgår af koden, kan vi uden videre tilgå vores attributter x og y. 

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
I `draw` sikres at vores cirkel bouncer af på skærmen hvis vi når en af kanterne. 

### Andre vigtige metoder til vores vektorbibliotek
Hvis vi havde nok i bare at kunne addere vektorer, så var der næsten ingen grund til at lave et vektorbibliotek. 
Herunder gennemgår vi kort en række metoder, som vores vektorbibliotek skal have implementeret. 


### Indkasplingsprincippet
Til at starte med vil vi gerne inddrage indkapslingsprincippet fra OOP. Det handler knytte data (det vil bl.a. sige $x$ og $y$) med de metoder, som skal operere på dem, men også om at skjule unødig kompleksitet fra brugeren. 
I praksis kan det gøres ved at sætte en hashtag (#) i konstruktøren:
```javascript
```javascript
class Vector{
  constructor(x,y){
    this.#x = x;
    this.#y = y;
  }
```

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
1. Udvid vektorklassen med subtraktionsmetode mfl.
2. Udvid draw metoden, så den tegner egentlig fisk.  

