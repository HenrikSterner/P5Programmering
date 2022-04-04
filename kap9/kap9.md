# 9. Strenge 
Vi har tidligere kort introduceret strenge eller strengvariabler som variable, der indeholder tekst, tal eller andre symboler. 
De spiller en central rolle i programmering til at opbevare og operere på data, hvorfor vi har dedikeret nærværende kapitel til at gå i flere detaljer med dem. 

## Strenge som primitive variable og objekter
Vi kan erklære streng-variable på to forskellige måder herunder både som primitive variable og som objekter.  
Herunder eksempler på primitive streng variable ved brug af var og let:

```javascript
var string1 = "Hej med dig"
let string2 = "Hvordan har du det?"
```
Herunder eksempler på erklæring af  streng variable ved brug af var og let men hvor de konstrueres som et string objekt:

```javascript
var string1 = new String("Hej med dig");
let string2 = new String("Hvordan har du det?");
```

Den overordnede syntaks er altså:
var val1 = new String(string);
let val2 = new String(string);

Bemærk der her er tale om en konstruktør til String klassen og at det String skrives med stort S.

Javascript konverterer automatisk mellem primitive strenge og strenge som objekter, så i praksis kan man reelt undlade at bekymre sig om det.
Men det at strenge faktisk er objekter giver mulighed for at bruge metoder til at tilgå og operere på ens strenge. 

Javascript tilbyder en lang række metoder til at operere og tilgå strenge. Vi vil i det følgende gennemgå nogle af de vigtigste.

## Tæl antal karakterer i en streng
Ofte er det nødvendigt at finde antallet af elementer i en streng. Det kunne eksempelvis være at undersøge om en streng, der skal udgøre et password, har tilpas mange karakterer/tegn. 
Ethvert strengobjekt har en egenskab kaldet length, så antallet af elementer kan tilgås således:

```javascript
let string1 = new String("Er du der?");
console.log("Antallet af elementer i strengen er ", string1.length)
```
Her fås $10$ som output i konsollen, da der med mellemrum og spørgsmålstegn er ti karakterer i alt. 

## Tilgå karakterne i en streng
I nogle tilfælde er det relevant at undersøge enkelte tegn i en given streng. Hvor man i andre sprog kan betragte strenge som arrays, så er det ikke på samme måde tilfældet i Javascript. 
Flere metoder eksisterer dog til at gøre det let at tilgå enkelt elementer i en streng. 

Herunder nogle metoder samt eksempler på anvendelser af dem på strengen fra fra før:

```javascript
//string[n] returnerer den n'te karakter i strengen 'string'
string1[4] // returnerer et 'u'
//string.charAt(index) returnerer karakteren ved det givne index
string1.charAt(0) // returnerer et 'E'
string1.charAt(4)// returnerer et 'u'
//string.indexOf(substr) returnerer første index hvor delstrengen substring forekommer
string1.indexOf("du") //returnerer 3

//string.split(separator) returnerer et array hvor strengen er delt op efter den valgte seperator streng
string1.split(" ") //returnerer arrayet ['Er','du','der?']

//string.trim() returner en trimmet version af strengen hvor mellemrum er fjernet
string1.trim() //returnerer 'Erduder?'

//string.substr(start, length) returnerer de karakterer hvor index starter ved start frem til antallet af karakterer angivet ved length
string.substr(0, 5) //returnerer 'Er du'

//string.slice(start, end) ekstraherer den del af strengen som starter ved index start og slutter ved index end og returnerer den
string.slice(0, 2) //returnerer 'Er '
```


## Sammenkæde strenge
Typiske opgaver med strenge handler om at sammenkæde en eller flere strenge. Det kaldes også med et fint ord for konkatinering. 
Herunder et eksempel:
```javascript
//string1.concat(string2)
string1.concat(" Ja, jeg er her!") //returnerer 'Er du her? Ja, jeg er her!
```

## Store og små bogstaver
I visse sammenhænge kan det være relevant at konvertere strenge til enten store eller små bogstaver. Det kan let gøres ved følgende instruktioner:

```javascript
//string.toLowerCase() returnerer en streng der kun består af små bogstaver
string1.toLowerCase() //returner 'er du der?'
//string.toUpperCase() //returnerer en streng der kun består af store bogstaver
string1.toUpperCase() //returnerer 'ER DU DER?'
```


## Øvelser
1. Lav en knap der genererer et 'sikkert' password. Ved sikkert forstås, at det skal være minimum 8 bogstaver langt samt indeholde både et stort og lille bogstav samt et tal. Udvid selv med et relevant kriterie.
2. Lav et tekst input felt hvor det forventes, at man indtaster et sikkert password. Giv brugeren besked hvis det er tilfældet eller ej. Ved sikkert forstås definitionen fra 1. 
3. Lav et tekst input felt hvor det forventes, at man indtaster et CPR-NR. Skriv noget kode, der tjekker hvorvidt det er tilfældet.
4. Lav en bogstavsky ud fra et tekst inputfelt. Dvs. brugeren indtaster nogle ord/bogstaver og på baggrund heraf genereres en sky af bogstaverne. Jo flere gange et bogstav forekommer jo større bliver det vist. 
5. Lav et tekstfelt og undersøg om input fra brugeren er et palindrom. Dvs. hvorvidt der ordet læses ens forfra og bagfra. Bemærk at det kan gøres ret kort ved at bruge rekursion.
6. Lav et 'Hang-man' spil eller 'gæt et bogstav', hvor et ords bogstaver er markeret med stjerner og ved at gætte bogstaver via et inputfelt, erstattes stjerne med de faktiske bogstaver. For hver gang der gættes forkert tegnes dele af en hængt mand. Man er også velkommen til at lave sin egen illustration.

7. Konstruer et array af sætninger gerne således at brugeren selv kan tilføje input til arrayet. På baggrund heraf skal konstrueres et Haiku-digt. Et Haiku-digt består af 17 stavelser fordelt på 5-7-5 i de tre linjer. 

8. Lav to tekstfelter hvor brugeren kan indtaste tekst, der skal krypteres hhv tekst der skal dekrypteres. Implementer en selvvalgt kryptering. Det kan eksempelvis være at bytte om på rækkefølgen af bogstaver.

9. Lav igen to tekstfelter. Overvej og implementer en selvvalgt metode, der rapporterer hvor sammenlignelige de to strenge er. Dvs. en form for plagiatkontrol. 

10. Lav to tekstfelter. Den ene bruges som kilde til at søge i efter den anden. Rapporter alle de steder hvor den søgte tekststreng forekommer i kilden. Giv mulighed for at man kan erstatte den søgte streng med en anden streng.

11. Lav et tekstfelt hvor brugeren kan skrive en sætning. Prøv at lav en simpel analyse af sætningens sentiment og rapporter hvorvidt sætningen er positivt eller negativt ladet. 

12. Zipfs lov for forkortelser er en empirisk lov/princip, der foreskriver, at jo oftere et ord bruges i en tekst, jo kortere er ordet. Og omvendt. Jo sjældnere et ord bruges, jo længere er det typisk. Lav et program, der analyserer og visualiserer de 10 mest forekomne ord og de 10 mindst forekomne ord. Visualiser antallet af ord


## Projekt: Lix-tallet
Lixtallet er et udtryk for en teksts læsbarhed. Formlen til at beregne LIX-tallet er givet ved 
 
 $$LIX = \frac{O}{P}+ \frac{L*100}{O}, $$
 hvor $O$ er antal ord i teksten,  $P$ er antal punktummer i teksten og $L$ antal lange ord (over 6 bogstaver lange).

Formlen kan altså forstås som antal ord per mellem hvert punktum lagt sammen med procentdelen af de lange ord i teksten. Man har så følgende skala til at vurdere LIX-tallet med:

$LIX\geq 55$: Meget svær, faglitteratur på akademisk niveau, lovtekster.

$45\leq LIX \geq 55$: Svær, f.eks. saglige bøger, populærvidenskabelige værker, akademiske udgivelser.

$35\leq LIX \geq 45$: Middel, f.eks. dagblade og tidsskrifter.

$25\leq LIX \geq 35$: Let for øvede læsere, f.eks. ugebladslitteratur og skønlitteratur for voksne.

$LIX < 25$: Let tekst for alle læsere, f.eks. børnelitteratur.

Lav et program, der bestemmer Lix-tallet af en tekststreng. Programmet skal fortælle hvilket niveau teksten ligger på. Antag at du får teksten i en string-variable.

Benyt din LIX-beregner på en selvvalgt tekst. Giv resultatet mening?

## Projekt: Blindskrift Tester
I dette projekt skal du udvikle et simpelt system til at teste hvor hurtig man er til at skrive blindskrift. Dvs. en tekst skal rulle henover skærmen mens man skriver og programmet skal registrere hvor mange ord man når at taste samt hvor mange fejl, der er, indenfor et givent tidsrum.
Udvid systemet så man kan vælge forskellige typer tekst at indtaste ud fra tekstens lixtal.