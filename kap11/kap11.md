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

### Pseudokode
Pseudokode er formuleret i almindeligt dansk, engelsk eller et tredje sprog, og udgør en mere abstrakt højniveau beskrivelse af koden, som er lettere tilgængelig end "rigtig" kode. Pseudokode er typisk formuleret, så det er uafhængig af programmeringssprog og bliver brugt i stor stil i videnskabelige tekster og lærebøger. Pseudokode bruges ofte til at formidle mere komplekse stykker kode, der løser et mere generisk problem. Et godt eksempel herpå er algoritmer, som er en afsluttet sekvens af instruktioner, der løser et problem eller udfører en konkret opgave.

Pseudokode minder om rigtig kode i den forstand, at den inddrager typiske nøgleord såsom if-else, while, for m.m. og dermed induceres mere eller mere direkte en struktur for programmet. Man kan tænke på pseudokode som et skelet for rigtig kode, der kan oversættes til maskinekode uden at gøre noget. God pseudokode skal gerne gøre det nemmere og hurtigere at implementere den i ægte kode. 