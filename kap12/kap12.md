# 11. Softwarearkitektur
Softwarearkitektur definerer en grundlæggende organisering af et system og opførsel herunder hvordan de enkelte komponenter i system er samlet samt deres forhold til hinanden og kommunikationen mellem dem. Softwarearkitektur er et slags blueprint for hvorledes systemet er opbygget og danner grundlag for udviklingsgrundlag for programmørerne samtidig med at det inddrager og afbalancerer forskellige aktørers behov og hvorledes holdet bag udviklingen organiseres.
Det er med andre ord en ekstremt vigtig del i udviklingen er mere komplekse systemer. 
I det følgende gennemgår vi en række forskellige modeller til at konceptualisere og visualisere systemarkitektur. Det giver et bedre grundlag til at forstå hvorledes et system bør opbygges og belyser noget af den tavse viden og kompleksitet, som ligger gemt i systemer af en vis størrelse.

## Master-slave eller klient-server arkitektur

## Tre-lags-arkitektur
Tre-lags-arkitektur er en ret simpel struktur, der inddeler et system i tre lag: 
- Et præsentationslag hvis primære opgave at give brugeren af programmet en forståelig og tilgængelig grænseflade, som programmet er opbygget af.
- Et applikationslag, der står for at koordinere og håndtere brugerens interaktion i præsentationslaget med det underliggende datalag. 
- Et datalag hvor data knyttet til systemet er gemt og dets opgave er at bistå applikationslaget i at sende relevante data og information. 

Præsentationslaget kommunikerer med datalaget igennem applikationslaget og aldrig direkte. Herved separeres programlogik fra data og brugergrænseflade. Skal der ændres i nogle af lagene kan det i højere grad gøres uafhængig af de andre lag.
Tre-lags-arkitektur kan bruges med stort set alle tænke systemer. Eksempelvis et website, hvor man klikker på en knap, der så kalder noget kode i applikationslaget, som henter nogle data frem, der så sendes tilbage til brugergrænsefladen og vises på sitet.

## UML-diagrammer
UML står for Unified Modelling Language og er 
et diagramsprog til modellering af ens systemer. 
Det giver en fælles forståelsesramme og sprog til at kommunikere funktionalitet og arkitektur ud på tværs af teknologi og sprog. 

UML omfatter mange forskellige diagramtyper og man kunne skrive lange bøger om UMLs forskellige strukturer. I det følgende vil vi introducere nogle få af de mange mulige diagrammer nemlig klassediagrammet samt use-case-diagrammet. 

### Klassediagrammer

### Use-case-diagrammer


## 4+1-arkitektur 

## C4-model

## SOLID princippet