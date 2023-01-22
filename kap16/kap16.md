# 16. Computationel tænkning og designmønstre (ikke skrevet endnu)
 
Computationel (eller datalogisk) tænkning dækker over en række praksisser og færdigheder, der regelmæssigt benyttes, når man eksempelvis løser komplekse problemer indenfor programmering, men som desuden er essentielle for at tilegne sig viden indenfor det man kunne kalde den digitale eller computationelle verden. Det er essentielle færdigheder i forhold til at facilitere mulig kommunikation mellem menneske og maskine. 

Designmønstre betoner kodenære løsninger på problemer, der ofte opstår indenfor design og udvikling af software. Man kan betragte dem som en form for kodeskabeloner, der kan tilpasses til langt de fleste kontekster.

Fælles for begreberne "computationel tænkning" og "designmønstre" er, at de handler om at beskrive og formalisere den måde man arbejder på, når man løser problemer indenfor programmering.
I næste afsnit gives en mere detaljeret gennemgang af nogle af de vigtigste principper, der knytter sig til computationel tænkning. Herefter et afsnit om nogle af de mest anvendte designmønstre.

## Computationel tænkning
Computationel tænkning er et paraplybegreb, som dækker over en række færdigheder og metoder man typisk gør brug af i arbejdet med at udvikle løsninger på problemer indenfor programmering og datalogi.  

For forskere og udviklere såsom dataloger og programmører giver brugen af computationel tænkning mulighed for bedre at forstå hvordan systemer funger og skabe nye computatinelle modeller og algoritmer. 

For studerende er computationel tænkning et effektivt  værktøj til at hjælpe med udvikle strategier i forhold til at løse diverse problemer. 
Et oplagt eksempel på anvendelse computationel tænkning er i konstruktionen af de algoritmer, som implementeres, når man udvikler et nyt system. Men computationel tænkning bruges i den grad også udenfor programmering. Eksempelvis når man skal bage en kage eller når man skal instrueres i at bygge et fysisk produkt såsom et legetøj fra Lego eller et møbel fra Ikea.

Netop fordi den digitaliseret verden bliver stadig mere nærværende har der i de senere år været et stadig stigende fokus på at træne og udvikle computationel tænkning fra grundskolen til gymnasiet og det gælder i øvrigt på tværs af lande. 
Det hænger desuden sammen med, at stort set alle fag og aspekter af samfundet har fået øjenene op for, at den computationelle tankegang er relevant og nødvendig i mange sammenhænge i forhold til at kommunikere med computeren og løse problemer. 

Herunder gennemgår vi fire af de vigtigste principper indenfor computationel tænkning kaldet dekomposition, abstraktion, mønstergenkendelse og algoritme design. Det er i den sammenhæng vigtigt at understrege, at computationel tænkning ikke kan reduceres til disse fire principper men dækker over et langt mere omfattende teori og begrebsapparat, men at disse principper er centrale for forståelsen og anvendelsen af computationel tænkning indenfor programmering.

I gennemgangen af de fire principper tages udgangspunkt i udviklingen af et simpelt kryds og bolle spil. 

## Dekomposition
Dekomposition minder ret meget om princippet "del og hersk", men der er dog forskelle. Førstnævnte har rod i problemløsning, hvor det handler om at løse et problem i mindre dele, som både mennesket og computeren har nemmere ved at forstå og samtidig finde en løsning på. Dekomposition er mao. en ret kodenær strategi, som gør det muligt at indele koden i mindre dele og efterfølgende gør det nemmere at teste og fejlrette. Del og hersk har rødder i algoritmikken, som en teknik til at dele problemer ind i mindre similære problemer indtil de kan løses, hvilket rekursive algoritmer er et godt eksempel på.  

I forhold til at bruge dekomposition i udviklinge af kryds og bolle kunne man eksempelvis oprette funktioner, der har forskellige opgaver. Det kunne eksempelvis være at tage imod input fra brugeren, tjekke brættet for mulige vinderkombinationer eller tegne brættet. 

## Abstraktion
Abstraktion eller generalisering handler om at kigge på sit problem eller domæne fra et helikopterperspektiv. Når vi kigger på tingene fra en helikopter fokuserer vi på de vigtigste informationer og elementer i det eller de problemer, som vi forsøger at løse, og vi ignorer nogle af de unødige detaljer. Dermed ikke sagt at detaljen på et tidspunkt ikke er vigtig, men abstraktion sker typisk i designfasen af ens problem. 

I forhold til kryds og bolle kunne man eksempelvis betragte de to mulige spillere `X` og `O`. Selvom de på papiret ser forskellige ud så har de også meget til fælles. De skal begge tegnes i en celle, tre på stribe giver sejr osv. Man kan med andre ord forestille sig, at man i praksis koder kun enkelt spiller og blot ændre måden denne spiller tegnes på ud fra hvis tur det er. 

En anden vinkel på abstraktion er i forhold til at repræsentationen af brættet, hvor man eksempelvis kunne bruge et to-dimensionelt array.
Eller de mulige vinderkombinationer kunne faktisk også repræsenteres som et to-dimensionelt array. Herunder en skitsering af funktion til at konstruere brættets repræsentation: 

```javascript
function createBoard(rows,cols) {
  let board = [];
  for (let r = 0; r < rows; r++) {
    board[r] = [];
    for (let c = 0; c < cols; c++) {
      board[r][c] = "";
    }
  }
  return board;
}
```

Funktionen tager to parametre svarende til antallet af rækker og kolonner. Igen et eksempel på hvorledes abstraktion skaber langt mere elegant kode, hvis man senere ønsker at generalisere brættet til vilkårlige størrelser. 

```javascript
function checkWinnerCombo(board){
  let winnerCombos = [board[0]+board[1]+board[2],
                      board[3]+board[4]+board[5],
                      board[6]+board[7]+board[8]]
}
```




## Mønstergenkendelse
Mønstergenkendelse: Brug loops og betingelser for at tjekke for mønstre som tre i træk på spillebrættet.

## Algoritme design
Opret en algoritme til at håndtere logikken i spillet, inklusiv tjek for sejre og uafgjort, og bestemme næste spillers tur.
P5.js: Brug p5.js biblioteket til at tegne spillebrættet og håndtere brugerinput. Biblioteket giver en række funktioner til at oprette og manipulere grafik, samt håndtere brugerinput.



### Forskellen på datalogi og computationel tænkning




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
Herunder gennemgås tre af de mest anvendte strukturelle mønstre, adapter-mønsteret, facade-mønsteret og komposit-mønsteret.

#### Adapter-mønsteret
Adapter-mønsteret er et designmønster, der gør det muligt for to funktioner/klasser/biblioteker med forskellige grænseflader at arbejde sammen ved at tilpasse den ene grænseflade til den anden. I p5.js bruges Adapter-mønsteret ofte til at tilpasse JavaScript-objekter eller biblioteker til at kommunikere med biblioteket p5.

Herunder et eksempel. Fra P5 ved vi, at der eksisterer en metode til at tegne en cirkel, der tager tre parametre: x,y og radius. 

Vi kunne forestille os, at vi ville gøre brug af den i et andet program lave en grænseflade til denne metode, så vi kan gøre brug af den heri. Det kunne eksempelvis gøres ved at lave en funktion, hvor vi sikrer, at cirklen stadig får radius og ikke diameteren. 

```javascript
function DrawCircleAdapter(x,y,d)
{
    circle(x,y,d/2)
}
```

#### Facade-mønsteret
Facade-mønsteret giver en simpel grænseflade til en kompleks system. På den måde tilbydes et abstraktionslag mellem klienten og det komplekse system, hvilket gør det nemmere at bruge og forstå. I p5.js kan facade-mønsteret bruges til at skjule kompleksiteten i at bruge flere forskellige biblioteker eller funktioner i en enkel grænseflade. På denne måde kan man f.eks. opbygge et komplekst program med mange forskellige funktioner og stadig gøre det nemt at bruge og forstå for en bruger. 

Herunder et eksempel:

```javascript
class P5SketchFacade {
  constructor() {
    this.graphics = new p5(); // her instantieres et p5 objekt, som normalt håndtere scenen
    this.sound = new p5.sound(); //her instantieres lyd til p5
  }
  drawCircle(x, y, r) {
    this.graphics.ellipse(x, y, r);
  }
  createButton(lblName, x, y) {
    this.dom.createButton(lblName).position(x, y);
  }
  playSound(file) {
    this.sound.play(file);
  }

}
```

Herunder bruges facade-mønsteret i praksis:
```javascript
let sketch = new P5SketchFacade();
sketch.createButton("Spil", 50, 40);
sketch.playSound("lyd.mp3");
sketch.drawCircle(100, 100, 50);
```

#### Komposit-mønsteret
Komposit-mønsteret muliggør at arbejde med en samling af objekter på en ensartet måde. Samlingen af objekter kan behandles som var det et enkelt objekt. Det giver mere overskuelig og elegant kode, og nemmere at organisere og manipulere komplekse hierarkier af objekter. 

Et godt eksempel i p5 kunne være at opbygge mere komplekse animationer eller scener ved at sammensætte simple objekter til mere komplekse objekter, som knyttes til en scene. Herunder et eksempel hvor vi igen kan tilføje forskellige geometriske figurer til scenen.

```javascript
class Scene {
    constructor() {
        this.shapes = [];
    }
    add(shape) {
        this.shapes.push(shape);
    }
    remove(shape) {
        let index = this.shapes.indexOf(shape);
        if(index !== -1) {
            this.shapes.splice(index, 1);
        }
    }
    draw() {
        for (let shape of this.shapes) {
            shape.draw();
        }
    }
}
```
Mønsteret minder om byggemønsteret men adskiller sig ved, at vi abstraherer fra hvilken slags geometrisk form, som vi ønsker at tilføje til scenen. 

Eksempelvis kunne vi bruge mønsteret på at tilføje forskellige figurer på en elegant måde og efterfølgende tegne den:

```javascript
let myScene = new Scene();
let square = new Square(100, 100, 30);
let circle = new Circle(200, 300, 40);
let triangle = new Triangle(300, 490, 70);
myScene.add(square);
myScene.add(circle);
myScene.add(triangle);
myScene.draw()
```


### Adfærdsmønstre
Herunder gennemgås tre af de vigste adfærdsmønstre, ansvarskæden-mønsteret, kommando-mønsteret og iterator-mønsteret. 

#### Ansvarskæde-mønsteret ("Chain of responsibility")
Ansvarskæde muliggør at sende et objekt gennem en kæde af objekter til det når et objekt, der kan operere på det. Det giver en fleksibel måde at håndtere begivenheder eller anmodninger i et system. Eksempelvis kunne det være relevant ved håndteringen forskellige typer input fra brugeren:

```javascript
class ClickHandler {
    constructor() {
        this.next = null;
    }
    handleClick(x, y) {
        if (this.next) {
            this.next.handleClick(x, y);
        }
    }
}
class CircleHandler extends ClickHandler {
    handleClick(x, y) {
        if (insideCircle(x, y)) {
            console.log("Vi har klikket på en cirkel");
        } else {
            super.handleClick(x, y);
        }
    }
}
class SquareHandler extends ClickHandler {
    handleClick(x, y) {
        if (insideSquare(x, y)) {
            console.log("Vi har klikket på et kvadrat");
        } else {
            super.handleClick(x, y);
        }
    }
}
```
Her tjekker metoderne `insideCircle` og `insideSquare` hvorvidt vi har klikket indenfor en cirkel hhv. et kvadrat. 
Metoderne er ikke implementeret, hvilket overlades til læseren.  De skal havde adgang til hvor cirklerne og kvadraterne er placeret. Her kunne man eksempelvis gør brug af eksempelvis singletonmønsteret. 

Herunder anvendes mønsteret til at håndtere forskellige kliks:
```javascript
let circle = new CircleHandler();
let square = new SquareHandler();
circle.next = square;

function mouseClicked() {
    circle.handleClick(mouseX, mouseY);
}
```

#### Kommandomønsteret
Command-mønsteret er et designmønster, der adskiller en anmodning om at udføre en handling fra selve handlingen. Det giver en fleksibel måde at håndtere handlinger eller kommandoer i et system. I p5.js kan Command-mønsteret bruges til at håndtere input eller interaktioner fra brugeren.

For eksempel, hvis man ønsker at opbygge en interaktiv scene med flere forskellige interaktionsmuligheder, kan man oprette et Command-objekt for hver handling, der skal udføres.

Man kunne forestille sig, at der bygges en scene hvor brugeren kan skifte baggrundsfarve ved at trykke på en knap.

I din forbindelse oprettes en Command-klasse med en eksekveringsmetode kaldet `execute()`. 
Ved at skifte baggrundsfarve kan repræsenteres som en ny instans af Command-klassen med sin specifikke implementering af execute()-metoden.

```javascript
class Command {
    constructor() {
        this.execute = function(){};
    }
}

class changeBGColor extends Command {
    constructor(color) {
        super();
        this.color = color;
        this.execute = function() {
            background(color);
        };
    }
}
```

I scenen kan nu oprettes en ny instans af `changeBGColor`, når brugeren trykker på knappen, og kalder `execute()`:
```javascript
function setup() {
    let button = createButton("Ændre baggrundsfarven");
    button.mousePressed(changeBackground);
}
function changeBackground() {
    let cmd = new changeBGColor("yellow");
    cmd.execute();
}
```

## Øvelser