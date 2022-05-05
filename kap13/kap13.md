# 13. Testning, debug og fejlhåndtering
Et helt central i al softwareudvikling og programmering er at teste, at ens system eller program rent faktisk fungerer efter hensigten. Ikke desto mindre har det historisk set været nedprioriteret og ofte betragtet som en adskilt del eller en eftertanke af udviklingsprocessen. 

## Testning er vigtigt tidligt i udviklingsfasen 
Stadig den dag i dag er det ikke unormalt, at man først helt til sidst i produktionsfasen tester produktet for fejl med det resultat, at pga et meget lille vindue til at teste systemet, ender man man med sende produkter på markedet med mange fejl, fordi testerne ikke har haft tid nok til at fange alle fejl. 
Et eksempel herpå er indenfor spiludviklingsbranchen hvor det nærmest er blevet tradition, at man på release date eller kort bagefter frigiver store patches, som retter mange fejl. Det koster måske primært noget frustation hos spillerne mere end, at det går udover salgene. 
Et andet eksempel hvor det ikke er tilfældet er bilindustrien, som i de senere år i stadig højere grad, har måtte tilbagekalde biler i tusindvis på grund af en softwaredefekt med airbag eller lignende.
Det koster producenterne millioner eller milliarder af kroner ved ikke at have gode teknikker for testning og skaber samtidig utilfredse kunder, der kan forstærke et i forvejen dårligt ry. 

Ved at indføre tidlig og kontinuerlig testning kan man også langt bedre justere ikke kun på ukorrekt eller fejlbehæftet adfærd og sikkerhedsproblemer, men også justere systemets overordnede arkitektur. Sidstnævnte kan blive svære jo længere vi når i processen. 

## Forskellige former for test
Der findes en lang række forskellige former for afhængig af hvad formålet er. Herunder gennemgås nogle af de centrale former for test:

- Accept testning: Virker det overordnede  system rent faktisk efter hensigten
- Integration testning: Kan de enkelte komponenter i systemet og arkitekturen rent fakiske operere og kommunikere som ønsket
- Enhedstestning: Virker de enkelt enheder såsom funktioner og klasser efter hensigten. 
- Performance test: Hvordan performer systemet under forskellig brug 
- Bagudkompatibilitets test: Fungerer opdateret systemer med tidligere versioner 
- Stress test: Hvor meget kan systemet klare inden det stopper med at fungere. 
- Brugergrænseflade test: Hvordan tager brugeren af systemet i mod systemet og er der en fornuftig interaktion mellem bruger og system

I praksis kan man implementere test i udviklingsprocessen på en lang række måder. Det kunne eksempelvis være:

- Manuel testning
- Automatiseret testning
- Kontinuerlig testning
  
I det følgende vil vi gennemgå disse former for test og hvordan de kan implementeres i praksis. 

## Manuel testning
Enhver programmør eller team af programmører udfører manuel testning på regulær basis. Formålet med manuel testing, som normalt udføres af en eller flere personer, er at lokalisere fejl og mangler i koden/produktet. Man kan inddele denne form for testning i tre dele:
### Sort boks testning 
Her testes produktet af software testere, som ikke nødvendigvis kender den interne struktur af koden eller programmet. Fokus er på at teste funktionaliteten af systemet. Kan systemet det som der forventes. Typisk er denne form for test baseret på en kravspecifikation, hvor der testes for hvorvidt de enkelte krav er opfyldt. Typisk stilles der ikke krav til hvorvidt testeren kan kode eller ej. 
Forestiller man sig eksempelvis, at et login-system med et brugernavn og password skal testes, så vil man her 
typisk kunne teste hvorvidt login fungerer som det skal. Dvs. logger systemet ind når man skriver korrekte login oplysninger og omvendt giver det korrekte beskeder, hvis man bruger forkert login? Hvis loginsystemet er blevet videreudviklet kan man også her teste, hvorvidt systemet stadig fungerer som det skal. 

### Hvid boks testning
Hvid boks testning foretages typisk af softwareudviklere hvor testeren har viden om programmets interne struktur. Man tester her programmet på kodeniveau, hvor de enkelte funktioner og programstumper logisk testes for hvorvidt de gør som de skal. 
Forestiller man sig igen et login-system vil fokus i hvid boks testning være på om flowet i koden er korrekt. Et login system består typisk af et opslag i et sæt af brugere og deres respektive passwords (løkke eller forespørgsel i database), et tjek om det respektive brugernavn og password stemmer overens med det indtastede (betinget udførsel) og at man videresendes på korrekt vis. 
Fokus er mao på at teste hvorvidt opslaget og den betinget udførsel fungerer korrekt.  
  
### Grå boks testning
Grå boks testning kombinerer hvid boks og sort boks testning i den forstand, at man her antager, at testeren af systemet har partiel viden om systemet. Man ser denne form testning anvendt i bl.a. webapplikationer, hvor testeren kan tilpasse og justere html-koden. F.eks. kunne man i casen med et login-system lade testeren redigere i html koden, hvis linket til systemet ikke fungerer optimalt.
Herved kan udviklerne i højere grad koncentere sig om at teste den mere komplekse del af systemet. 

## Automatiseret testning
Til forskel for manuel testning, hvor et menneske står for at teste systemet, så gør man i automatiseret testning brug af programmer til at teste ens produkt. 
Ulempen ved manuel testning er, at det ofte kræver mange ressourcer både i form af tid og mennesker, hvis hele workflowet i et system skal testes. Og det koster mange penge.  
Her kommer automatiseret test til rådighed, fordi det kan udføres uden indblanding fra mennesker og man kan køre det når som helst. Selvom natten. Man kan genbruge og gentage test lige så ofte, som man finder det nødvendigt. På den måde faciliteres et mere præcist billede systemets tilstand i fht fejl og mangler. 
Ydermere kan manuel testning være en ret kedelig proces i længden, og herved opstår muligheden for fejl i højere grad end hvis et system står for processen.  
Eksempelvis kan man forestille sig et system, som skal understøtte flere sprog. Her vil det hurtigt være en lang, kedelig og næsten triviel process for et menneske at teste hvorvidt systemet opfører sig ens og fremstår korrekt i de forskellige sprog. 

Typisk bruges automatiseret testning derfor når testning skal gentages ofte, og at det er kedeligt, svært og tidskrævende at gøre manuelt, men også når testningen involverer en kritisk del af systemet. Kritiske systemer kan være alt fra sundhedsplatforme, banksystemer til systemer, der håndterer hardware eller robotter. Et eksempel på hvor man i den grad kunne have gjort brug af automatiseret test var NASAs og firmaet Lockheed Martins satelit, som blev sendt afsted i 1998 for at gå i kredsløb omkring Mars. Den kostede flere milliarder at få sendt afsted  og over et år i rejsetid før satelitten etablerede kredsløbet omkring Mars. Få minutter efter bragede satelitten ind i Mars. Det viste sig efterfølgende, at fejlen lå i, at to af systemerne udviklet af hhv Nasa og Lockheed Martin brugte forskellige afsandsmetrikker.

I det følgende skal vi se nogle eksempler på forskellige typser automatiseret testning. 

### Unit testning
Unit test eller modultest er en særdeles anvendt metode til at teste og validere enkeltkomponenter i koden. Det kan være funktioner, klasser, etc.
I det følgende skal vi se et eksempel på hvorledes man kan bruge Unit tests i P5. Til øvelsen kræves, at man har installeret Node JS, som er et software miljø, der kører på en server og faciliterer afvikling af webapplikationer. Man behøver ikke videre mere om det umiddelbart. Det skal bruges til at installere et test-systemt kaldet Jest. Dvs. starte med at hente og installere pakkesystemet npm via "https://nodejs.org/en/download/". Fra kommandoprompt installeres Jest med følgende kommando:
npm install --save-dev jest
Kommandoprompt kan tilgås i Windows fra windowstasten og så skriv de første bogstaver af kommandoprompt. 

Vi er nu klar til at skrive vores første unit-test cases i Jest. 
Konstruer en funktion kaldet multiply i et sketch.js P5-projekt, som du har lavet til formålet:

```javascript
function multiply(a, b) {
  return a * b;
}
module.exports = product;
```

Opret nu en ny fil kaldet sketch.test.js, som skal rumme den aktuelle test:
const sum = require('./sum');
```javascript
test('multiply 4 * 6 to equal 24', () => {
  expect(multiply(4, 6)).toBe(24);
});
```
Tilføj herefter følgende til en fil kaldet "package.json":
```javascript
{
  "scripts": {
    "test": "jest"
  }
}
```

Prøv nu fra kommandoprompt at skrive npm test fra samme bibliotek som filerne ligger. Du kan i kommandoprompt skifte mellem gå ud af et bibliotek med 
```javascript
cd .. // Bevæger sig ud af børnebibliotektet
cd child_directory // Hopper ind i børne biblioteket
C: //skifter til drev C
```
Det kan være en fordel at øve sig i brugen af et såkaldt CLI-miljø (Command-Line-Enviroment), fordi det til tider er mere effektivt at arbejde fra en kommandoprompt, når man tester og afvikler applikationer. 

I det følgende ser vi et eksempel på, hvorledes man kan validere hvorvidt to objekter er af samme type. Her bruges metoden toEqual:
```javascript
test('Objekt validering', () => {
  const data = {en: 1};
  data['to'] = 2;
  expect(data).toEqual({en: 1, to: 2});
});
```

Tilsvarende findes en lang række andre metoder til  eksplicit at teste og matche udtryk og værdier mod hinanden:


- toBeNull: matcher kun null
- toBeUndefined: matcher kun undefined
- toBeDefined: det modsatte af toBeUndefined
- toBeTruthy matcher alt som if- sætning benhandler som sand
- toBeFalsy: matcher alt som if- sætning benhandler som falsk

## Kontinuerlig testning
I kontinuerlig testning bygger oven på den automatiseret testning, så testning ikke bare udføres automatisk men at det rent faktisk også bliver gjort regelmæssigt og struktureret. På den måde kan udviklingsprocessen accelleres betydeligt og kodekvaliteten på papiret forhøjes.  

Det handler mao om at teste ofte, så meget som muligt og at automatisere processen. Man bevæger sig mao kontinuerligt fra udvikling til testning til produktion. Et gennemløb af disse faser kaldes en iteration. For nogle projekter kan et software projekt gennemløbe mange iterationer i løbet af bare en dag.
I processen bruges speciel software, som sikrer, at den produceret software (også kaldet "build") via unit test tester hvorvidt ændringer lever op til testkrav. Hvis det ikke er tilfældet kan koden ikke sættes i produktion. Hvis det er tilfældet kan funktionaliteten testes igen. 

Kontinuerlig testning er en testmetode, der typisk anvendes indenfor såkaldt agil udvikling, hvor man løbende itererer over krav og løsninger gennem samarbejde mellem mindre selv-organiserende tværfaglige og tværfunktionelle hold. Agil udvikling er en vigtig del af fokus for det næste kapitel. 


## Debug
Debugging betegner den proces hvorved man finder fejl eller såkaldte bugs i sin kode. Debug er en væsentlig del af hvidbox testning, hvor programmører tester koden og leder efter fejl. 

Det kan være en frustrerende og tidskrævende proces at finde fejl af flere grunde. Fejl kan eksempelvis forudsagde fejl, som er svære at relatere til kilden i problemet. En anden årsag er, at I nogle tilfælde manifisterer fejl sig kun en ud af hundrede gange, når eksempelvis en variabler, der tildeles tilfældige værdier, har præcis en værdi. 

Enhver, der har programmeret længe nok har oplevet, at bruge enorme mængder af tid på at finde en fejl, så det er en vigtig men også mindre sjove dele af programmering. Man kan udvikle forskellige teknikker og udnytte ens udviklingsmiljø til reducere omfanget af debugging. 

- Læs koden linje for linje. Dobbeltcheck at koden, som du skrev, rent faktisk var det du mente. Tjek for stavefejl, forskel på store og små bogstaver. 
- Brug gerne dit IDE/udviklingsmiljø til at inspicere variable eller gennemgå koden linje for linje. I de fleste IDE'er kan du indsætte breakpoints i koden og herefter afvikle den linje for linje. Se mere om det i et af de næste kapitler. 
- Brug evt papir og blyant til at håndtere og observere deres værdier. 
- Tænk før du koder. Jo hurtigere at du starter med at kode jo længere tid tager det ofte. 
- Skriv kommentarer/pseudokode eller lignende før du skriver koden. Ved at skrive kommentarer udkrystalliseres ofte ens tanker, så løsningen på problemet fremstår mere klar. 
- Giv meningsfulde variable navne og konstruer funktioner, der står for at implementere noget af det gentagende opgaver.
- Undgå for store funktioner og for store filer af kode. Opdel koden i flere filer
- Tænk over hvordan du vil teste før du skriver koden
- Tilføj kun en ny funktionalitet ad gangen
- Hold tingene simpelt, så simpelt som muligt, men hellere ikke simplere
- Test ofte og regelmæssigt
- Hvis du er i tvivl om hvordan noget kode fungerer/problem løses så undgå at starte med at integrere denne kode/løsning i selve programmet. Skriv derfor hellere noget eksempelkode som er isoleret for resten af programmet og prøv det af indtil du forstår koden til bunds
- Læs din kode efter du har skrevet den
- Pas på globale variable, da de ofte kan ændres mange steder og dermed være svære at finde fejl
- Sæt Compiler warnings til sand når du afvikler kompilerer din kode. Det kan give et godt indblik i mulige fejl. 
- Print evt vigtige variabler ud undervejs i afviklingen. Det kan dog godt blive rodet på sigt. Brug gerne en global boolsk variable til at afgøre hvorvidt denne printning udføres i praksis
- Husk at tage pauser
- Prøv at forklare dit problem til en anden. Vedkommende behøver egentlig ikke at vide noget om kode eller dit problem. Ofte giver det et nyt perspektiv på tingene.  
- Brug nettet til at finde hjælp. Typisk er du sjældent den første der har siddet med et givent problem, så brug fora m.m. til at få hjælp.


### Typer af fejl 
Det er en god ide, at være bevidst om at der findes forskellige typer af fejl. Herunder gennemgår vi kort nogle af de typiske fejl:

- Syntaksfejl. Syntaks betegner de ord og symboler som indgår i et givent programmeringssprog. Hvis du kun bruger de ord og symboler, som sproget og dets regler tillader, så kan der ikke umiddelbart opstå syntaksfejl. Men hvis du bruger et ord, som computeren ikke genkender, så vil computeren give en syntaksfejl. Herunder et simpelt eksempel på syntaksfejl. Kan du finde fejlen?

```javascript
function setup() {
  createCanvas(400, 600);
}

function draw {
  background(200);
} 
``` 

Selvom det ikke er meget kode, så ligger fejlen i, at der mangler parenteser  efter draw, da det er en funktion. 
Heldigvis får du også nogenlunde klar besked i konsollen. Hvis du kigger, så står der noget i retning af følgende:

Uncaught SyntaxError: Unexpected token '{' (sketch: line 5)

Nogenlunde klar fordi en nybegynder kunne måske tro, at det handlede om at der var noget galt med krølparentesen. 

Jo mere man øver sig, jo bedre bliver man til at spotte den her type fejl hurtigt. Og man hjælpes meget på vej af et godt udviklingsmiljø, som typisk opdager mange af disse fejl allerede inden man forsøger at køre sit program. 

- Kørtetidsfejl. Selv hvis din kode er korrekt skrevet og overholder alle regler, så kan der stadig opstå masser af fejl. 
Køretidsfejl opstår typisk, når computeren ikke forstår hvad din kode prøver at gøre. Herunder et eksempel:


```javascript
let xPos;
let yPos;

function setup() {
  xPos = width ;
  yPos = height ;
  createCanvas(400, 600);
  text("Hej " + name)
}
```  

Her er problemet, at name ikke er defineret nogle steder. Der meldes om følgende fejl:
Uncaught ReferenceError: name is not defined (sketch: line 3). 

Her er det nok at erklære en variable name med en værdi. Ikke alle køretidsfejl er så nemme at rette. 

- Logiske fejl. Ved denne type fejl afvikles programmet, men det giver ikke det ønskede input. Der er mao. tale om en fejl i logikken i koden, hvor man måske gør en antagelse om at noget kode virker på en bestemt måde, men ikke gør i praksis. Det er en meget almindelig fejl og enhver programmør på alle niveauer kommer til at lave den type fejl nærmest dagligt. Det kan være tidskrævende fejl at finde. I sidste ende er det op til programmøren, at ens kode fortæller computeren præcis hvad man ønsker den skal gøre.

Her er et eksempel på kode, hvor vi ønsker at skrive "Hej" midt på kanvas. Kan du se fejlen?
```javascript
let xPos;
let yPos;

function setup() {
  xPos = width/2 ;
  yPos = height/2 ;
  createCanvas(300, 300);  
}

function draw() {
  text("Hej", xPos,yPos)
}
```
Fejlen skyldes, at vi initialisere xPos og yPos før kanvasset initialiseres. Havde vi i stedet initialiseret xPos og yPos efter createCanvas, så står det rigtigt. 

## Fejlhåndtering 
Når en funktion ikke afvikles normalt eller efter hensigten, kan det være relevant at overveje at hoppe til et sted i koden, hvor vi ved hvordan problemet skal håndteres.
Fejlhåndtering handler om at man i sin kode implementerer en mekanisme som aktiveres hvis vi løber ind i problemer. Dette kaldes også i fagsprog for at rejse eller kaste en exception eller undtagelse. 
En undtagelse håndteres i javascript ved brug af nøgleordene try, catch og finally:

```javascript
try {
  //Kode, der forsøges udført. 
  //I koden kan inddrages throw 
}
catch(err) {
  // Kode, der håndterer fejl kaldet err
}
finally {
  //Blok af kode som udføres uanset resultatet  try / catch 
}
```
Ved brug af throw under try-strukturen kan man kaste en undtagelse, som gribes i catch. I finally kan vi afvikle kode som vi udfører uafhængig af om der gribes en fejl. Det lyder måske mere kompliceret end det faktisk er i praksis, så herunder et eksempel: 

```javascript
function myFunction(x) {
  try {
    if(x == "") throw "tom streng";
    if(isNaN(x)) throw "ikke et tal";
    x = Number(x);
    if(x > 12) throw "for stort";
    if(x < 3) throw "for lille";
  }
  catch(err) {
    console.log("Fejl: " + err + ".");
  }
  finally {
    console.log("Slut.");
  }
}
```
Funktionen herover tjekker et input x for hvilken type og hvor stor værdi det rummer. Her repræsenterer err den tekststreng som kastes under try. 
Det kan anbefales at eksperimentere med koden  i praksis for at få en bedre forståelse af håndtering af undtagelser. 

Herunder et andet eksempel, der håndterer forskellige typer af undtagelser, som er indbygget i javascript. I koden antages det, at myFunction kaster tre forskellige typer af undtagelser TypeError, RangeError, EvalError, som vi kort gennemgår efter eksemplet.  
```javascript
try {
  myFunction(); // antag den kaste tre typer af undtagelser
} catch (e) {
  if (err instanceof TypeError) {
    // Kode der skal håndtere type fejl
  } else if (err instanceof RangeError) {
    // Kode der skal håndtere fejl med intervaller
  } else if (err instanceof SyntaxError) {
    // Kode der skal håndtere fejl i syntaksen
  } else {
    // Kode, der håndterer fejl som ikke er knyttet til de tre fejltyper
  }
}
```

Herunder gennemgår vi nogle af de mest almindelige typer fejl, som kan kastes:

- RangeError: Opstår når en numerisk værdi er udenfor et specificeret interval
- ReferenceError: Opstår når en variable ikke er deklareret. Typisk pga. stavefejl eller glemt at tage højde for store og små bogstaver
- Syntax Error: Når reglerne for Javascript sprogets struktur er brudt .
- TypeError: Opstår når der forventes en type men i praksis er det en anden. 


## Øvelser
1. Find flere eksempler fra den virkelige verden, hvor  systemer har haft betydelige fejl og hvilke konsekvenser det har haft for udviklerne og systemet samt brugerne heraf. Kunne fejlene mon være undgået ved at teste mere og bedre? 
2. Overvej fordele og ulemper ved brug af manuel testning, automatisk testning og kontinuerlig testning med udgangspunkt i, at man enten arbejder i en mindre startup virksomhed kontra et større og mere veletableret softwarevirksomhed?
3. I det følgende skal du skrive et program, som tager heltal som input svarende til længderne af siderne i en trekant. Programmet skal returnere hvorvidt, der er tale om en ligesidet trekant, en retvinklet trekant eller en vilkårlig trekant. 
Overvej hvorledes du vil teste programmet for fejl. 
Brug jest-biblioteket til at teste hvorvidt input og output er korrekt. 
4. Lav en BMI-beregner, der tager vægt, højde og navn, og hvor du bruger Jest til at sikre at du får en korrekt type af input på dine data. 
5. Overvej hvordan du vil lave sort boks testning på din BMI beregner
6. Prøv at finde fejlene i følgende kode? Hvilken type fejl er der tale om?
```javascript
function setup() {
  createCanvas(300 300);
  noFill();
  stroke(255);
  strokeWeight(8);
}

function draw( {
  background(32);
  // top, bund
  /  venstre, højre
  circle(150, 0, 300);
  circle(150, 300, 300);
  Circle(0, 150, 300);
  circle(300, 150 300);
}
```


7. Prøv at finde fejlene i følgende kode? Hvilken type fejl er der tale om?

```javascript
let circleY;
let circleX;
let circleZ;
let r
function setup() {
  createCanvas(800, 300);
  circleX = 60;
}

function draw() {
	background(180);
	ellipse(12, circleY, r, 60);
	ellipse(circleX, circleZ, 60, 60);
	ellipse(20, circleY, 60, 60);
	ellipse(40, circleY, 60, 60);
	circle(circleY, circleX, r);
  
}
```

8. Prøv at finde fejlene i følgende kode? Vi ønsker at printe tallene fra 1 til 20. Hvilken type fejl er der tale om?
```javascript

function setup() {
  let n = 20
  let i = 0
  while(i>20)
  {
    if(i=10) console.log("Vi er halvvejs")
    console.log(i)
  }
}

```


9.  Skriv en funktion $f$, der tager tre argumenter $a,b$ og $c$ ved brug af exceptions håndterer mulige fejl i fht input: $$f(a,b,c)= \sqrt{\frac{a+b}{b-1} - c}$$

10. Skriv en funktion myFunction, der som minimum kaster TypeError, RangeError, SyntaxError. Afprøv den efterfølgende sammen med koden i eksemplet. 