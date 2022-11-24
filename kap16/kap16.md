# 16. Vektorer
Vektorer betegner en entitet, som består af en længde og en retning. Man kan tænke på dem som pile, der kan beskrive bevægelser, kræfter og meget mere.  

Vektorer, spiller en helt central rolle i forhold til at beskrive, modellere og simulere fænomener i naturen og fysikkens verden. 

I det følgende vil vi introducere vektorer ved at implementere ved brug af grundlæggende objekt-orienteret programmering et vektorbibliotek, der kan konstruere og modificere og behandle vektorer. 

Dernæst vil vi motivere brugen af biblioteket ved at kode simulere et økosystem i form af et akvarium med forskellige fisk.

## Et bibliotek af vektorer
Den opmærksomme læser har måske bemærket, at vi allerede har benyttet os af indbyggede vektorer, og undre sig over hvorfor vi ikke bare benytter disse. Det er der mange grunde til. For det første giver det en langt bedre forståelse at implementere ting fra bunden ikke mindst vektorer, som er centrale i forhold til at simulere fænomener i den verden vi er en del af. For det andet er implementationen af et vektorbibliotek en god øvelse i at bruge grundlæggende objektorienteret tangegang. 
Endelig vil vi også gerne opfordre enhver programmør til at designe og implementere generiske løsninger, der kan sættes i spil i andre sammenhænge end det konkrete projekt, som de netop arbejder på. 

### Konstruktion af en vektor
En vektor kan betragtes som en afstand mellem to punkter, den kan transformere noget fra et punkt til noget andet. 
Herunder et eksempel på en vektor skrevet med vektornotation: 
$$\overrightarrow{a}=(2,3).$$

Det betyder i praksis, at står vi i et vilkårligt punkt i planen, så vil vektoren $\overrightarrow{a}$ transformere os til et nyt ved at gå 2 skridt i x-aksens retning (til højre) og 3 skridt i y-aksens retning (opad). 
Vi får mao mulighed for at beskrive objekters bevægelse ved brug af vektorer. Det skal vi vende tilbage til. Først skal vi konstruere en simpel vektorklasse i P5:
```javascript
class Vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
```
Reelt set er vores vektorklasse bare en container, der opbevarer et koordinatsæt. 
Herunder tegner vi en cirkel ud fra en vektor: 
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
## Animere ved brug af vektorer
Hvis vi ønsker at animere vores vektor har vi brug for at ændre vektorens koordinater, hvorfor vi indfører begrebet `hastighed` (eller `velocity` på engelsk) i form af to nye variable kaldet `xspeed` hhv. `yspeed`, som vi ønsker at addere til vores vektors koordinater:
```javascript
x = x + xspeed
y = y + yspeed
```  
Fra matematik kender vi det som vektoraddition. Givet $\overrightarrow{a}=(a_1,a_2)$
og $\overrightarrow{b}=(b_1,b_2)$, så er additionen givet ved $$\overrightarrow{a}+\overrightarrow{b}=(a_1+b_1,a_2+b_2).$$
Ved vektoraddition summer vi koordinatvis, så vi kan let implementere en metode i vores klasse, som udfører vektoraddition:
```javascript
  add(velocityVector){
    this.x += velocityVector.x
    this.y += velocityVector.y
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

## Øvelser
1. Udvid vektorklassen med subtraktionsmetode mfl.
2. Udvid draw metoden, så den tegner egentlig fisk.  

