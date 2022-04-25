# 13. Testning
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
Her kommer automatiseret test til rådighed, fordi det kan udføres uden indblanding fra mennesker og man kan køre det når som helst. Selvom natten. Man kan gentage test lige så ofte, som man finder det nødvendigt.
Ydermere kan manuel testning være en ret kedelig proces i længden, og herved opstår muligheden for fejl i højere grad end hvis et system står for processen.  
Eksempelvis kan man forestille sig et system, som skal understøtte flere sprog. Her vil det hurtigt være en lang, kedelig og næsten triviel process for et menneske at teste hvorvidt systemet opfører sig ens og fremstår korrekt i de forskellige sprog. 

Typisk bruges automatiseret testning derfor når testning skal gentages ofte, og at det er kedeligt, svært og tidskrævende at gøre manuelt, men også når testningen involverer en kritisk del af systemet. 

I det følgende skal vi se nogle eksempler på forskellige typser automatiseret testning. 

### Unit testning