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