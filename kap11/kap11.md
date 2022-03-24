# 11. Dokumentation
Dokumentation af ens kode og programmer består typisk af skreven tekst og illustrationer knyttet til koden, og spiller en central rolle i softwareudvikling i forhold til at kommunikere med andre udviklere, slutbrugerne af programmet eller andre aktører.

Målene med dokumentation kan bl.a. være at forklare: 

- Kravspecifikation: Hvilke krav stilles til systemet/brugeren m.m.
- Programmets opbygning: Hvordan er programmet overordnet opbygget (arkitekturen bag) og hvorledes fungerer enkeltdelene herunder funktioner, klasser, algoritmer osv.
- Slutbrugermanual: Hvordan bruges programmet.
  
I det følgende vil vi gennemgå hvorledes disse tre punkter kan dokumenteres og indføre nogle værktøjer/modeller, som kan være relevante at bruge i formidlingen.

## Kravspecifikation
En kravspecifikation er særdeles væsentligt at udarbejde og inddrage i udviklingen af nye systemer. Det handler helt konkret om at få formuleret så præcist som muligt hvad skal programmet kunne og mindst ligeså vigtigt, hvad det ikke skal kunne. 
I den sammenhæng kan det være relevant at gå i dialog med brugeren, kunden eller andre relevante aktører ved brug af eksempelvis spørgeskemaer eller interviews. 

Afhængig af systemets kontekst og hvilket fokus en given aktør har, kan et system bestå af en rækkke forskellige typer krav. Herunder tre forskellige typer krav, som er væsentlige have i fokus i udviklingen af systemet: 

- Forretningskrav. 
- Brugerkrav. 
- Systemkrav. 

Typisk består kravfasen af følgende faser:
- Indsamling af feedback og ønsker fra bruger
- Analyse af om de foreslået krav aligner med visionen med systemet. 
- Definering af krav fra et brugerperspektiv og en detaljeret beskrivelse af de funktionelle og tekniske krav
- Prioritisering og planlægning af hvilke krav der implmenteres hvor og hvornår
- Validering og vedligeholdelse af systemet mhb på at sikre at systemet rent faktisk understøtter de relevante krav.


## Programmets opbygning
Vi har allerede set på metoder til at visualisere arkitekturer. I det følgende kigger vi på hvorledes man kan dokumentere og formidle på et mere kodenært niveau. 

### Indlejret kommentarer til kildekoden
Et vigtigt værktøj til at dokumentere sin kode er ved brug af inline kommentarer. De kan bruges efter behov og er særligt relevante ved mere komplekse instruktioner. Man bør generelt undgå at kommentere alt for meget, da det også kan forstyrre forståelsen. Ved større funktioner eller klasser kan man skrive over den overordnede definition af disse, nogle linjer der i grove træk skitserer hvad disse gør. 

Til et hvert større sprog findes guides eller regler for hvorledes god kode bør skrives og dokumenteres. Det kan være alt fra hvorledes man bør navngive sine variabler, til indenteringen, til hvor man skifter linje. Det er vigtigt, at man i den sammenhæng husker at være konsistent og konsekvent i brugen af de valgte regler.
Et vigtigt aspekt ved god kode er, at det også er læsbar kode. 

### Pseudokode
Pseudokode er formuleret i almindeligt engelsk, dansk eller et tredje sprog, og udgør en mere abstrakt højniveau beskrivelse af koden, som er lettere tilgængelig end den egentlige kode. Pseudokode er typisk formuleret, så det er uafhængig af programmeringssprog og bliver brugt i stor stil i videnskabelige tekster og lærebøger til at kommunikere og formidle centrale ideer og hvorledes de kan omsættes til kode. Pseudokode bruges ofte til at formidle mere komplekse stykker kode, der løser et mere generisk problem. Et godt eksempel herpå er algoritmer, som er en afsluttet sekvens af instruktioner, der løser et problem eller udfører en konkret opgave.

Pseudokode minder om rigtig kode i den forstand, at den inddrager typiske nøgleord fra programmering såsom if-else, while, for m.m. og dermed induceres mere eller mere direkte en struktur for programmet. Man kan tænke på pseudokode som et skelet for rigtig kode, der kan oversættes til maskinekode uden at gøre noget. God pseudokode skal gerne gøre det nemmere og hurtigere at implementere den givne algoritme i ægte kode. 
Der findes ingen fast konvention for hvorledes pseudokode skal se ud, men det er vigtigt, at valget af syntaks er konsekvent og konsistent. 

Herunder eksempler på pseudokode. Det er skrevet på engelsk, da nøgleord i programmeringssprog typisk er skrevet på engelsk. 


### Prosakode
Prosakode er en mindre kodenær beskrivelse. Der stilles ingen krav til, at man bruger bestemte keywords eller lignende. Vigtigste er dog, at prosakoden faciliterer en forståelse af hvorledes man kan skabe en overordnet struktur for programmet. 
Det er også muligt at kombinere prosakode og pseudokode. 
Herunder et eksempel på prosakode for en funktion, der givet en streng returnerer hvorvidt det er et palindrome eller ej:

Givet en streng $s$
a.	Tjek først om strengen $s$ består af et eller flere tegn. Hvis den er tom eller kun består af et tegn returner da sandt.
b.	Hvis den består af flere tegn sammenlign første og sidst element. Hvis de to elementer er forskellige returnes falsk. Ellers fjern dem fra strengen og start algoritmen forfra men nu med den reducerede streng som input.

### Flowdiagrammer



### Brugerhistorier
Brugerhistorier beskriver en afgrænset interaktion mellem brugeren og systemet og kan være relevante at inddrage i sin dokumentation enten som en del af koden eller måske prosakoden. Brugerhistorie kan være gode til at belyse noget af den tavse viden som ofte ligger gemt i de indledende faser af softwareudvikling.

En effektiv brugerhistorie er kendetegnet ved, at den er
- skrevet i et naturligt sprog, idet den skal fungere som kommunikationsmiddel mellem programmets bruger og udviklingsteamet.
- evaluerbar. Når brugerhistorien er implementeret, kan brugerhistorien bruges som udgangspunkt for en test af programmets funktion.

Detaljegraden giver mulighed for at implementere brugerhistorien på en entydig måde, uden at blive så omstændig, at den hæmmer forståelsen.

Brugerhistorierne nummereres - eller navngives på anden vis - så man kan henvise til dem på en struktureret og entydig måde.

Herunder et eksempel på en brugerhistorie, der bliver brugt i en online pizzabutik, når man har valgt en pizza:

Brugeren vælger først en pizza udfra listen af pizzaer.
Brugeren klikker på knappen ”Bestil flere”.
Programmet viser en dialog, hvor brugeren kan se:
Pizzaens navn og hvilke ingredienser den indeholder
En dropdown box, hvor man kan vælge det antal pizzaer man ønsker at bestille. (0-10)
En ”OK”-knap
Brugeren vælger det ønskede antal pizzaer af den bestemte type og klikker ”OK”.
-Hvis antallet er større end 0, oprettes en transaktion, hvor pizzaernes samlede pris justeres, og pizzaerne tilføjes til kurven.
-Hvis antallet er 0 oprettes ingen transaktion, og der sker intet med kurven.
Programmet lukker dialogen.

## Øvelser
