# 16. Vektorer
Vektorer betegner en entitet, som består af en længde og en retning. Man kan tænke på den som pile. 

Vektorer, spiller en helt central rolle i forhold til at beskrive, modellere og simulere fænomener i naturen og fysikkens verden. 

I det følgende vil vi introducere vektorer ved først at implementere dem fra bunden og en del metoder, som er centrale i forhold til at operere på vektorer. 
Dernæst vil vi ved brug af disse vektorer og  objekt-orienteret programmering simulere et simpelt økosystem i form af et akvarium med forskellige fisk.

## Konstruktion af en vektor
En vektor kan betragtes som en afstand mellem to punkter, den kan transformere noget fra et punkt til noget andet. 
Herunder et eksempel på en vektor skrevet med vektornotation: 
$$\overrightarrow{a}=(2,3).$$

Det betyder i praksis, at står vi i vilkårligt punkt i planen, så vil vektoren $\overrightarrow{a}$ transformere os til punkter ved at gå 2 skridt i x-aksens retning og 3 skridt i y-aksens retning. 
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
I `draw` sikres at vores cirkel bouncer af på skærmen hvis når en af kanterne. 
