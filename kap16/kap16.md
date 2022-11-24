# 16. Vektorer
Vektorer betegner en entitet, som består af en længde og en retning. Man kan tænke på dem som pile, der kan beskrive bevægelser, kræfter og meget mere.  

Vektorer, spiller en helt central rolle i forhold til at beskrive, modellere og simulere fænomener i naturen og fysikkens verden. 

I det følgende vil vi introducere vektorer ved at implementere ved brug af grundlæggende objekt-orienteret programmering et vektorbibliotek, der kan konstruere og modificere og behandle vektorer. 

Dernæst vil vi motivere brugen af biblioteket ved at kode simulere et økosystem i form af et akvarium med forskellige fisk.

## Et bibliotek af vektorer
Den opmærksomme læser har måske bemærket, at vi allerede har benyttet os af indbyggede vektorer, og undre sig over hvorfor vi ikke bare benytter disse. Det er der mange grunde til. For det første giver det en langt bedre forståelse at implementere ting fra bunden ikke mindst vektorer, som er centrale i forhold . For det andet er implementationen af et vektorbibliotek en god øvelse i at bruge grundlæggende objektorienteret tangegang. For det tredje er vektorer en  en central rolle i simuleringen af n


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


### Vektorer i praksis: Et økosystem

## Øvelser
1. Udvid vektorklassen med subtraktionsmetode mfl.
2. Udvid draw metoden, så den tegner egentlig fisk.  

