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
I det følgende vil vi skrive et rekursivt program, der tager et heltal input N og beregner en approksimation af det det gyldne snit (prøv gerne at google det gyldne snit, det forekommer mange steder i naturen). Det gyldne snit betegner et forhold eller et tal, som er lig med $1$ hvis $N=0$ (basistilfældet) og $1+1/f(N-1)$ hvis $N>0$.

## Renteformlen formuleret rekursivt
Renteformlen fortæller noget om hvorledes en startkapital forrentes overtid. Den typiske måde at formulere den på er således $$K=K_0 (1-r/100)^n,$$ hvor $K_0$ er startkapital, $n$ er antal terminer og $r$ er renten.

Vi kan umiddelbart omformulerer denne til en rekursiv løsning således:
* $K_0$ er lig startkapitalen dvs. basistilfældet
* $K_{n+1} = K_n * (1+r/100)$ dvs. det rekursive kald ligger gemt her. 

Vi kan formulere en løsning således

## Øvelser
1. Skriv en rekursiv funktion, der beregner eksponenten af et tal
2. Skriv en rekursiv funktion, der beregner den harmoniske serie:
3. Skriv en rekursiv funktion der undersøger om et tal er lige eller ulige
4. Skriv en rekursiv funktion, der foretager binær søgning på en liste af
5. Skriv en rekursiv funktioner, der undersøger om et ord er et palindrome 
6. Skriv en rekursiv funktion der returnerer et reversibelt ord
7. Skriv en rekursiv funktion, der finder største fælles divisor af to tal
8. Skriv en rekursiv funktion, der returnerer alle tænkelige permutationer af et ord (eksempel: ”abc” så er ”acb” en permutation.
9.  Skriv en rekursiv funktion, der beregner mindste fælles divisor
10.  Skriv en rekursiv funktion, der konstruerer Pascals Trekant	
11. Skriv en rekursiv funktion, der finder det største tal i en liste
12. Skriv en rekursiv funktion, der sorterer en liste af tal (Bubble sort eller mergesort)
13. Skriv en rekursiv funktion, der beregner Ackermans Funktion:
14. Skriv en rekursiv funktion, der beregner Tribonacci rækkefølgen  (starter med 0,0,1)

## Projekt: Fraktaler
