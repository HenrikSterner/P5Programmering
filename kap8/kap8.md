# 8. Rekursive funktioner

Rekursive funktioner betegner funktioner, som kalder sig selv i deres funktionskrop. Dvs. funktioner der er selvrefererende. Tankegangen bag kaldes rekursion og kan være et godt værktøj til værktøjskassen herunder til at løse bestemte typer af problemer, som ikke nødvendigvis altid lader sig så let løse på anden vis. Ofte kan visse problemer løses mere elegant og kompakt ved brug af rekursion. Vi kan eksempelvis ofte omskrive funktion, der indrager iterative strukturer såsom løkker til rekursiv variant. 
De typer problemer, der lader sig løse elegant ved brug af rekursion, er ofte problemer, som kan deles ind i mindre similære problemer.
I det følgende skal vi se eksempler på rekursive funktioner og eksempler på hvor de kan være gode at bruge. 

## Konstruktion af en rekursiv funktion
Herunder en illustration af en rekursiv funktion, hvor funktionen i dens krop på et eller andet tidspunkt refererer til sig selv:

```javascript
 function navn() //funktionshoved
  {
    //instruktioner -  funktionskrop
    //...
    //...
    navn()
    //...

  }
```
<code>navn<strong> </strong></code> er her navnet på funktionen og vi gør opmærksom på, at en rekursiv funktion sagtens kan tage et vilkårligt antal argumenter. Det er blot undladt for at illustrere pointen bag. Det er som nævnt tidligere vigtigt med sigende funktionsnavne og det kan være en god ide at indikere i navnet at funktione er rekursiv.

En rekursiv funktion er typisk opbygget af et eller flere basistilfælde, der sørger for at funktionen returner. Her returneres typisk en eller flere trivielle eller konkrete værdier. Derudover har den rekursive funktion selvfølgelig også pr definitionet kald til sig selv. I praksis implementeres de typisk ved brug af if-statements.

## Rekursivitet i dagligdagen 
Vores dagligdag rummer en lang række eksempler på hændelser, der kan beskrives med rekursive funktioner. Forestil dig eksempelvis at skrive en funktion, der beskriver hvordan en kop kaffe drikkes:
```javascript
 function drikKaffe(kop)
  {
      if(kop er tom)
        return
      else
        kop.tagEnTår()
        drikKaffe(kop)
  }
```
Her kommer et eksempel mere, der beskriver rekursivt hvordan du kommer hjem:

```javascript
 function gåHjem()
  {
      if(hjemme)
        return
      else
        kop.tagEnTår()
        drikKaffe(kop)
  }
```

Det kunne også være, at du ønsker at tælle antal mønter i en kasse. Man kunne dele problemet ind i mindre dele. Fremfor at tælle dem allesammen selv kunne man bede sine kammerater med at tælle den en halvdel og andre den anden. De to halvdele kunne igen blive inddelt i to mindre dele og talt af ens kammerater. Til sidst ender vi med kun en mønt i hver og så kan kammeraterne returnere.
Det er et eksempel på, at rekursion ofte giver god mening at benytte, når vi kan dele problemer ind i mindre delproblemer, som minder om hinanden.

Det kræver noget tilvænning at blive fortrolig med rekursion, så i det følgende kommer der nogle eksempler på rekursion. 

## Fakultetsfunktionen som en rekursiv funktion
Herunder et først simpelt eksempel på en rekursiv funktion, der udregner fakultet af et tal ($n!=1*2*3*....(n-1)*n$). Vi antager i følgende, at $n$ er et naturligt tal større end $0$.

```javascript
function factorial(n)
{
    if(n==1) return 1 //basis tilfældet
    else return factorial(n-1) // rekursivt kald
}
factorial(3); // returnerer 6=1*2*3
```
Bemærk det rekursive kald hvor vi dekrementerer værdien af n med 1. På et tidspunkt vil funktionen blive kaldt med værdien $1$ hvorved at funktionen returnerer.
Der hvor funktionen returnerer kaldes basistilfældet, mens der hvor funktionen kalder sig selv, benævnes ofte som det rekursive kald.

Funktionen kunne let implementeres iterativt med en løkke, men rekursionen giver en elegent, kompakt og let læselig løsning. Rekursion kan være god at inddrage, når vi søger at løse nogle klassiske matematiske problemstillinger.

## Fibonnaci talfølgen som en rekursiv funktion
Herunder endnu et eksempel. Denne gang forsøger vi at udregne det n'te Fibonacci tal. Fibonacci talfølgen består af listen af tal, hvor det i'te tal er summen af de to foregående tal i følgen. Vi starter altid med 0 og 1. Dvs. $0,1,1,2,3,...$.
Fibonacci talfølgen virker måske umiddelbart uinteressant, men det viser sig, at den struktur som den repræsenterer forekommer mange steder i naturen.
```javascript
function fibonacci(n)
{
    if(n<=0) return 0 //basis tilfældet
    else if (n==1) return 1 //andet basistilfælde
    else return fibonacci(n-1) + fibonacci(n-2) // rekursivt kald
}
fibonacci(4); // returnerer 2
```
Vi kan konstruere et såkaldt rekursionstræ, der viser hvordan funktionskaldene foregår:

FIGUR

Det fremgår af figuren hvorfor rekursive funktioner ikke nødvendigvis altid er de mest effektive implementationer. Problemet med den rekursive løsning er, at vi ender med relativt mange kald til funktionen, hvilket er med til at gøre den ineffektiv. Sættes $n=50$ er vi oppe på over 2 milliarder kald til funktionen og mange af disse beregninger er redundante forstået på den måde, at vi allerede har regnet funktionen med det givne argument.
Det ændre dog ikke på, at vi får en rigtig pæn løsning der korresponderer nærmest en til en med den matematiske definition.

## Det gyldne snit
I det følgende vil vi skrive et rekursivt program, der tager et heltal input N og beregner en approksimation af det det gyldne snit (prøv gerne at google det gyldne snit, det forekommer mange steder i naturen). Det gyldne snit betegner et forhold eller et tal, som er lig med $1$ hvis $N=0$ (basistilfældet) og $1+1/f(N-1)$ hvis $N>0$. Herunder kode der illustrerer hvorledes den kan implementeres i praksis:

```javascript
function GoldenRatio(N)
{
  if(N==0) return 1
  else if(N>0) return (1+1/GoldenRatio(N-1))
  
}
```
## Renteformlen formuleret rekursivt
Renteformlen fortæller noget om hvorledes en startkapital forrentes overtid. Den typiske måde at formulere den på er således $$K=K_0 (1-r/100)^n,$$ hvor $K_0$ er startkapital, $n$ er antal terminer og $r$ er renten.

Vi kan umiddelbart omformulerer denne til en rekursiv løsning således:
* $K_0$ er lig startkapitalen dvs. basistilfældet
* $K_{n+1} = K_n * (1+r/100)$ dvs. det rekursive kald ligger gemt her. 

Vi kan formulere en løsning således
```javascript
function rentersRente(K0,n,r)
{
  if(n==0) return K0
  else if(n>0) return (1+r/100)*rentersRente(K0,n-1,r)
}
```

## Cirkler i cirkler
Her kommer et eksempel hvor der tegnes cirkler på cirkler, jo flere gange der trykkes på canvas. Prøv at kør koden og forklar med egne ord hvad der sker. Hvilken betydning har variablen maxDepth?

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight)
  colors = []
}
maxDepth=0
function recursiveCircles(depth, x, y, side) {
  if (depth == maxDepth)
    return
  fill(colors[depth])
  circle(x, y, side)
  side /= 2
  recursiveCircles(depth+1, x-side, y-side, side)
  recursiveCircles(depth+1, x-side, y+side, side)
  recursiveCircles(depth+1, x+side, y-side, side)
  recursiveCircles(depth+1, x+side, y+side, side)
}


function mousePressed() {
  maxDepth++;
  colors.push(color(random(255), random(255), random(255)))
  recursiveCircles(0, width/2, height/2, width/2.2)
}

function keyPressed() {
  background(random(100), random(100), random(100))
}
```

## Fraktraltræer
Ved at tegne lodret linje først, dernæst vinkle to nye linjer ved enden af den første, og fortsætte tilsvarende for enden af de to nye linjer, skabes det vi kalder et fraktaltræ. Koden for et simpelt fraktraltræ ses herunder. Prøv at forstå og forklar koden, og prøv herefter at modificere den en smule. 
```javascript
var angle = PI / 4;
var slider;
function setup(){
  createCanvas(400,400);
  slider = createSlider(0,TWO_PI,PI/4);
}
function draw(){
  background(51);
  stroke(255);
  angle = slider.value();
  translate(200,height);
  branch(100);
}

function branch(len){
  line(0,0,0,-len);
  translate(0,-len);
  if (len>4){
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67);
    pop();
  }
}
```

## Øvelser
1. Skriv en rekursiv funktion, der beregner eksponenten af et tal
2. Skriv en rekursiv funktion, der tegner et kvadrat inde i et kvadrat inde i kvadrat indtil den når en vis dybde.
3. Skriv en rekursiv funktion der undersøger om et tal er lige eller ulige
4. Skriv en rekursiv funktion, der foretager binær søgning på en liste af tal.
5. Skriv en rekursiv funktioner, der undersøger om et ord er et palindrome. Dvs. hvorvidt det læses forfra og bagfra på samme måde. 
6. Skriv en rekursiv funktion der tegner en vandret linje, og nedenunder tegner samme vandrette linje, men hvor den miderste tredjedel er væk, fortsæt med at fjerne den miderste tredjedel indtil du har tegnet de første 15 linjer.
7. Skriv en rekursiv funktion, der finder største fælles divisor af to tal
8. Skriv en rekursiv funktion, der returnerer alle tænkelige permutationer af et ord (eksempel: ”abc” så er ”acb” en permutation.
9.  Skriv en rekursiv funktion, der beregner mindste fælles divisor
10.  Skriv en rekursiv funktion, der konstruerer og visualiserer Pascals Trekant.	
11. Skriv en rekursiv funktion, der finder det største tal i en liste
12. Skriv en rekursiv funktion, der beregner Tribonacci rækkefølgen  (starter med 0,0,1)
13. Udvid koden for fraktaltræer, så der dannes grønne blade for enden af grenene.


## Projekt: Selv-similære figurer
I følgende projekt skal du implementere visuelle repræsentationer af forskellige selv-similære figurer. Dvs. figurer hvor et vilkårligt udsnit af figuren ligner helheden af den samlede figur.

### Konstruer en visuel repræsentation af Cantors mængde
Cantors mængde er opkaldt efter den tyske matematiker Georg Cantor.

Det er en relativt simpel konstruktion, hvor man tager udgangspunkt i et linjestykke. Del stykket ind i tre mindre dele og fjern det miderste stykke. Fortsæt herefter på tilsvarende vis med de de resterende stykker. 

### Konstruer en visuel repræsentation af Kochs snefnugskurve
I Kochs snefnugskure der tredeles ethvert linjestykke i tre lige store dele. Den miderste del fjernes og erstattes af to sider i den ligesidede trekant. Processen gentages på hvert af de nye linjestykker. 

Kochs snefnugskurve er et eksempel på en fraktal


### Konstruer en visuel repræsentation af Sierpinskis trekant

Herunder beskrives konstruktion i prosakode. Dvs. tekst der er mere eller mindre kodenær:

1. Start med at konstruere en ligesidet trekant. Dvs. en trekant hvor alle sider er lige lange (og vinkler lige store).

2. Inddel trekanten i fire kongruente og ligesidede trekanter ved at bestemme midtpunkter for de tre sider i den oprindelige trekant.

3. Fjern den miderste trekant.

4. Gentag trin 2 og 3 for de tre resterende trekanter.
