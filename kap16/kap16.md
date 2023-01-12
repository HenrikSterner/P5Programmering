# 16. Computationel tænkning og designmønstre (ikke skrevet endnu)
 
Computationel (eller datalogisk) tænkning dækker over en række praksisser og færdigheder, der regelmæssigt benyttes, når man eksempelvis løser komplekse problemer indenfor programmering, men som desuden er essentielle for at tilegne sig viden indenfor det man kunne kalde den digitale eller computationelle verden. Det er essentielle færdigheder i forhold til at facilitere mulig kommunikation mellem menneske og maskine. 

Designmønstre betoner kodenære løsninger på problemer, der ofte opstår indenfor design og udvikling af software. Man kan betragte dem som en form for kodeskabeloner, der kan tilpasses til langt de fleste kontekster.

Fælles for begreberne "computationel tænkning" og "designmønstre" er, at de handler om at beskrive og formalisere den måde man arbejder på, når man løser problemer indenfor programmering.
I næste afsnit gives en mere detaljeret gennemgang af nogle af de vigtigste principper, der knytter sig til computationel tænkning. Herefter et afsnit om nogle af de mest anvendte designmønstre.

## Computationel tænkning


## Designmønstre
Har man kodet længe nok begynder man formentlig at opdage, at man løber ind i mange af de samme problemer og udfordringer uafhængig af hvilket system man udvikler,hvilken kontekst/domæne man arbejder indenfor eller hvilket sprog man koder i. 
Designmønstre (kaldet "design patterns" på engelsk) er et forsøg på at komme disse typiske problemer til livs ved at tilbyde generiske løsninger og generelle koncepter, som kan sættes i spil. Modsat algoritmer, der ligesom en madopskrift typisk definerer et meget præcist sæt af instruktioner, som løser en konkret opgave, så er designmønstre mere generiske konceptuelle skabeloner på løsninger, der kan justeres til den konkrete kontekst og system.

I det følgende gives først et overblik over de forskellige typer af designmønstre og gennemgår vi i flere detaljer med konkrete kodeeksempler, en række af de vigtigste designmønstre.

### Tre forskellige typer designmønstre
Designmønstre kan inddeles i fire overordnede typer:
- Konstruktionsmønstre (på engelsk: "creational patterns"): Beskriver forskellige måder eller mekanismer til at konstruere eller kreaere objekter på. 
- Strukturelle mønstre (på engelsk: "structural patterns"): Beskriver hvorledes objekter kan samles i større strukturer, som stadig er fleksibel, skalerbar og effektiv.
- Adfærdsmønstre (på engelsk "behavioral patterns"): Beskriver hvorledes ansvar fordeles mellem forskellige objekter og hvorledes algoritmer kan integreres.

### Konstruktionsmønstre
Herunder gennemgås kort eksempler på tre af de mest typiske konstruktionsmønstre, fabriksmønsteret, byggemønsteret og prototypemønsteret. 

#### Fabrik mønsteret ("Factory design pattern")
Factory design mønsteret giver mulighed for at konstruere objekter uden at præcisere hvilken klasse de er instantieret fra. I stedet konstrueres en fabrik, som har ansvaret for at oprette objekterne.

Et eksempel i p5.js kan være en fabrik, der opretter forskellige former for trekanter. 
Fabrikken kan have en metode, der tager en parameter som indikerer typen af trekanten. Eksempelvis kunne man forestille sig en med runde hjørner, stump eller spids trekant. Fabrikken returnerer derfor et objekt af den ønskede type.

```javascript
class TriangleFactory {
  create(type) {
    if (type === 'normal') {
      return new NormalTriangle(); // normal trekant
    } else if (type === 'Obtuse') {
      return new ObtuseTriangle(); // stump trekant
    } else if (type === 'Pointed') {
      return new PointedTriangle(); // spids trekant
    }
  }
}

const factory = new TriangleFactory();
const regularSquare = factory.create('normal');
const roundedSquare = factory.create('obtuse');
const imageSquare = factory.create('pointed');
```

Metoden `create()` tager en parameter på baggrund heraf returneres en instans af den tilsvarende klasse.


#### Byggemønsteret ("Builder pattern")
Builder design pattern er en måde at opbygge komplekse objekter ved at adskille objektets konstruktion fra dens representation. Det gør det nemmere at skifte mellem forskellige måder at opbygge et objekt på, uden at ændre selve objektet. 
Mønsteren kan bruges til at bygge mere komplekse objekter ved at give brugeren mulighed for at specificere hvad der er knyttet til klassen fremfor en kompleks konstruktør i klassen, som tager en lang række parametre, kan man i stedet lade brugeren vælge og tilføje hvad der skal være inkluderet i det endelige objekt.

Et eksempel i p5.js kan være en klasse, der repræsenterer en skitse, der består af flere figurer. I stedet for at have en konstruktør, der tager en række parametre for at oprette skitsen, kan man bruge en builder-klasse til at bygge skitsen op. 

```javascript
class SceneBuilder {
  constructor() {
    this.scene = [];
  }

  addCircle(x, y, r) {
    this.scene.push(new Circle(x, y, r));
  }

  addTriangle(x1,y1,x2,y2,x3,y3)
  {
    this.scene.push(new triangle(x1,y1,x2,y2,x3,y3))
  }

  addRectangle(x, y, w, h) {
    this.scene.push(new Rectangle(x, y, w, h));
  }

  getSketch() {
    return this.scene;
  }
}

const builder = new SceneBuilder();
builder.addCircle(10, 30, 55);
builder.addTriangle(5, 5, 60,60,700,700);
builder.addRectangle(30, 30, 40, 40);
const mySketch = builder.getSketch();
```
I eksemplet ovenfor tilføjes en cirkel, en trekant og et rektangel til en scene, der reelt bare er et tomt array. 
Ved at bruge builder-mønsteret kan man nemt tilføje eller fjerne figurer i scenen, uden at skulle ændre i selve scenen, og kan også nemt skifte mellem forskellige måder at opbygge scenen på, ved at have flere forskellige scenebyggere.

#### Prototypemønsteret
Prototypemønsteret bruges til at oprette nye objekter ved at klone eksisterende objekter i stedet for at oprette dem fra bunden. Det gør det nemmere at oprette flere objekter, som minder meget om hinanden men stadig er unikke. 

Nedenfor konstrueres en prototype-klasse kaldet `Circle`, som klones ved at kalde `Object.create`. Dernæst ændres værdierne for klonen. 

```javascript
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  draw() {
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}

function setup() {
  const prototypeCircle = new Circle(50, 50, 30);
  const newCircle = Object.create(prototypeCircle);
  newCircle.x = 100;
  newCircle.y = 100;
  prototypeCircle.draw();
  newCircle.draw();
}
```

#### Singletonmønsteret
Singleton pattern er en design pattern, der sørger for, at der kun kan oprettes én instans af en klasse i koden, hvilket muliggør at dele objekter mellem forskellige dele af programmet, da man altid ved, at der kun er én instans af objektet.

I p5.js kan man bruge Singleton pattern til at sikre, at der kun er én instans af en klasse, der styrer adgangen til en bestemt ressource. Det kunne eksempelvis være en klasse `Config`, som opbevarede nogle data, der beskrev konfigurationen af et system. Dvs. nogle globale værdier, som skal kunnes ændres og tilgås fra forskellige steder i programmet.

Herunder er et eksempel:

```javascript
class Config {
  constructor() {
    if (!Config.instance) { //her tjekkes hvorvidt klassen allerede er instantieret
      this.data = [];
      Config.instance = this;
    }
    return Config.instance;
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

const config1 = new config();
const config2 = new config();
console.log(config1 === config2); // returner sand

config1.addData("Et tal");
console.log(config2.getData()); // returner ["Et tal"]
```

Ved at tjekke i instanstieringen af klassen hvorvidt klassen allerede er oprettet. Hvis det er tilfældes returnes den eksisterende instans og ellers oprettes den for første gang. Således kan forskellige instanser af klassen arbejde på de samme data. 

### Strukturelle mønstre
