# 14. Udviklings-processer og -metodologier
Softwaresystemer komplekse af natur. De kan tage år at udvikle (af flere hundrede eller tusind udviklere), bestå af millioner af linjers kode og koste mange penge at lave og vedligeholde. 
Eksempelvis blev det estimeret, at det nu forældet styresystem Microsoft Windows 98 tog i omegnen af 200 programmører, 16 år, dag og nat at udvikle. Og på trods af de massive mængder ressourcer, der blev sat af, så fejlede systemet alligevel da Microsofts Bill Gates skulle præsentere det live med blå skærm. 

Udviklingen af softwaresystemer af en vis størrelse er mao en kompliceret proces, hvor der i de er behov for planlægning og en klar proces for udviklinge af systemet for at sikre den nødvendige struktur og at systemet fungerer hensigtsmæssigt. Hvis man ikke planlægger, så planlægger man at fejle. 

Helt grundlæggende kan softwaresystems livscyklus fra ide til færdigt produkt beskrives i fire overordnede trin:

Trin 1: Planlægning
Trin 2: Implementering
Trin 3: Test
Trin 4: Implementering og vedligeholdelse

I de senere år er der forsket i og udviklet en lang række forskellige metoder til at skabe systemer og . I det følgende vil vi gennemgå nogle af de vigtigste metodologier. Det er i den sammenhæng vigtigt at understrege, at der ikke findes en tilgang, der passer til alle. Valg af metodologi til udviklingsprocessen afhænger af mange ting såsom projekts omfang, antal udviklere, kontekst osv.  

## Vandfaldsmodel
Vandfaldsmodellen er en af de ældste og mest traditionelle modellering af udviklingsprocessen. Som et vandfald, der pga tyngdeloven falder og falder, så er udgangspunktet for denne model, at man udfører en række skridt  inden man bevæger sig videre til næste skridt. I praksis er der dog typisk nogle små overlap mellem de enkelte faser/skridt. 
Modellen blev oprindeligt brugt dengang hvor man udviklede til større mainframe systemer. 
Selvom den måske ikke bruges umiddelbart så meget i dag, er den stadig særdeles vigtig at kende til fordi den strukturerer mange af de overvejelser, som udviklingen af ethvert system bør inddrage. 
Vandfaldsmodellen kan være god  at bruge når mål og krav med systemet står meget klar, og teknologi-stakken er veldefineret og velkendt. Mao. hvor man ikke forventer større, radikale ændringer undervejs i processen. Det kunne eksempelvis være i større organisationer, såsom i udviklingen af offentlige it-systemer. 
En klar ulempe ved modellen er, at den mangler grundlæggende fleksibilitet. Hvis du f.eks.  udvikler et mindre system eller en prototype, der skal formes eller tilpasses markant undervejs - måske udfra feedback fra brugere/testere - så er vandfaldsmodellen formentlig ikke hensigtsmæssig at bruge. 

## Inkrementel udvikling
Inkrementel udvikling også kaldet skridtvis forbedring betoner, at systemer udvikles løbende i skridt eller iterationer, hvor hver iteration består af følgende faser:  
* En kravanalyse fase hvor krav og specifikationer til systemet indsamles og klassificeres 
* En design fase hvor systemets funktioner designet 
* En kode fase hvor designet implementeres ved brug af programmering 
* En test fase hvor den nye funktionalitet testes. 

Hver ny iteration tilfører ny funktionalitet til systemet og systemet sættes i produktion, når den første iteration er fuldført. 

I første iteration udvikles typisk den grundlæggende funktionalitet af produktet, så kernen af produktet er på plads. Supplerende funktionalitet tilføjes typisk i de efterfølgende iterationer. 

Man kunne eksempelvis forestille sig, at man ønske at udvikle et transportmiddel. Til at starte med udvikles måske et skateboard i første iteration. Man bliver bevidst om, at det måske er for upraktisk og der er brug for mere fart, så man viderudvikler til en cykel og i den efterfølgende iteration til en bil. 

Inkrementel udvikling kan være god at bruge, når kravene til ens system er veldefineret og klare. 
## Den iterative udviklingsmetode
Iterativ udviklingsmetode har vundet indpas i den seneste årrække. Metoden er modsat vandfandsmodellen af en cyklisk natur, hvor man på baggrund af en ide, starter med at samle og analysere på data relateret til systemet man ønskere at udvikle. Herefter konstruerer typisk nogle få enkle krav til systemet, der planlægges implementeret.  Efterfølgende tilpasses og justeres disse krav i takt med at systemet tager form og man får feedback fra bruger eller anden ny information. 
Den bagvedliggende tanke er, at man ikke nødvendigvis på forhånd kender det optimale system og krav til et system, da disse i høj grad kan ændres undervejs. Man bliver mao i stedet i takt med udviklingen af systemet stadig klogere på den bedste løsning og de respektive krav. Den iterative model giver altså mulighed for at tilpasse disse krav til en dynamisk verden og kontekst. 

Hvor inkrementel udvikling i høj grad handler om at få en system ud så hurtigt som muligt og så i de efterfølgende iterationer udvide systemet, har den iterative proces i højere grad fokus på at inddrage feedback fra brugere og testfasen. På den måde skulle projektet gerne blive bedre i takt med, at man itererer over løsningen. 

I metoden itererer man efterfølgende over eller gentager følgende faser indtil man når sine ønskede mål med systemet/produktet, hvorefter systemet kan frigives til brugeren. Det er en projektmanager/leder, der koordinerer og er ansvarlig for hver iteration:
* Design: I denne fase forberedes systemet til at opfylde de fornødne krav for designet, der kan være et nyt eller en udvidelse af en tidligere version.
* Implementation og test: I denne fase er man optaget af implementere eller programmere de nødvendige krav. Undervejs testes systemet regelmæssigt og systematisk. 
* Evaluering: I denne fase evalueres systemet i fht de aktuelle krav. Man overvejer og reflekterer over den nuværende løsning og man diskuterer muligheden for nye mulige krav i den næste iteration/opdatering. 
   
I en verden hvor teknologien og kravene ændres stort set hele tiden kan modellen være rigtig god at bruge fremfor eksempelvis vandfaldsmodellen. 
Når kravene og nødvendighederne til systemet ikke nødvendigvis er veldefineret men kan forstås og klassificeres, så kan modellen være god at bruge til over tid at udvikle en fornuftig løsning. 

Hvis der er behov for at udvikle eller opdatere eksisterende systemer til eksempelvis at integrere den seneste teknologi, kan metoden også bruges, fordi man kan udvikle inkrementelt og opdatere systemet løbende modsat eksempelvis vandfaldsmodellen, hvor man i højere grad tvinges til at starte forfra.

Men den iterative udviklingsmetode kan i højere grad end vandfaldsmodellen give mulighed for at identificere høj-risiko problemer eller udfordringer, som kan have stor betydning for den endelige løsning, ved at tilbyde mulighed for justering for disse udfordringer undervejs. Herved opnår man i højere grad at skulle forholde sig til lav-risiko beslutninger, der i mindre grad påvirker det samlede system. I vandfaldsmodellen ender man i højere grad tvunget til at tage høj-risiko beslutninger i starten og slutningen af processen. 




## Agil udvikling og SCRUM
Agil, betegner noget der let, hurtigt og smidigt. Med andre ord tilpasningsparat. Agil udvikling og agile metoder er en tilgang til projektstyring, der kombinerer både iterativ og inkremental udvikling med henblik på at skabe en tilpasningsparat udviklingsproces. I sidste ende handler det om at øge tilfredsheden hos kunden og slutbrugeren ved hurtigt at kunne frigive et produkt. 

Modsat vandfaldsmodellen handler agil udvikling om at være tilpasningsparat i en dynamisk verden, hvor alting hurtigt kan ændre sig om det er feedback fra brugere, ændringer i konteksten, kravmodifikationer eller lignende. 
Den agile udvikling har modsat vandfaldsmodellen overlappende faser og systemet udvikles af små selvorganiserende og samarbejdende teams, som i kontinuerte cykluser også kaldet sprints udvider systemer. Det sker i tæt samarbejde med kunden, der er involveret i processen fra start til slut.

Den agile udviklingsmetode er beskrevet i et manifest, der består af fire vigtige værdier og tolv principper, der fungerer som en guide for den agile tilgang. 
De fire vigtige værdier, som den agile metode tager udgangspunkt i, kan kort sagt opsummeres således:

1. Hellere samarbejde og mennesker end processer og værktøjer
2. Hellere et velfungerende system end omfattende dokumentation
3. Hellere dialog og samarbejde med kunden end forhandling af kontrakt
4. Hellere muliggøre håndtering af forandringer end ensidigt fokus på fastholdelse af en plan. 

Disse værdier skal i et vist omfang ses som prioriteringer. 
Dvs. i den agile udviklingsmetodologi sættes stadig stor pris på punkterne der står til sidst. Men man værdsætter bare de andre værdier til venstre endnu højere. 
   
Med udgangspunkt i værdisættet har man i manifestet formuleret følgende principper:

1. Kundens tilfredshed er af højeste prioritet. Det sker gennem tidlige og løbende afleveringer af værdifuld systemet.
2. Ændringer i krav imødekommes også sent i udviklingen af systemet. De agile ændringer sikrer, at ændringerne er til kundens fordel i sidste ende. 
3. Løbende evaluering og test af systemet. Jo oftere, jo bedre. 
4. Udviklere og repræsentanter for forretningsdelen skal samarbejde dagligt. 
5. Opbyg projekter omkring motiverede folk. Giv dem de rette omgivelser og relevant støtte. Stol på dem. 
6. Den mest effektive form for kommunikation er ansigt til ansigt.
7. Fremdrift måles på hvor velfungerende systemet er. 
8. Agil udvikling fremmer bæredygtig udvikling. Udviklere og brugere bør altid kunne holde et bestemt tempo i udviklingen. 
9. Agil udvikling fremmes ved godt design og ekspertise
10. Hold det enkelt (KISS - Keep It Simple and Straight) og tænk i løsninger der er så simple som mulige og kun kan det de skal. 
11. Selvorganiserede teams der langt hen ad vejen leder sig selv. Det er karakteristisk at når alle i gruppen tager ansvar og respekterer hinanden, så følger ofte gode resultater. 
12. Reflekterende praksis hvor der løbende kigges tilbage på hvad der er gået godt og hvad der er gået mindre godt. Hvorledes kan kunden inddrages undervejs i processen. 


I figuren er det illustreret hvorledes agil udvikling fungerer. 
![Agil udvikling](images/agileprojekt.jpg)

Som det også er illustreret i figuren, så inddeles produktet i mindre inkrementale komponenter. Heraf den inkrementelle udviklingstilgang. 

I næste afsnit kigger vi på en konkret implementering af de agile tankegang, som kaldes for SCRUM.

### Agil vs iterativ udvikling
Iterativ udvikling i høj grad er fokuseret på softwarens struktur og hvorledes man kan anvende sine ressourcer bedst muligt til at udvikle og udvide systemet med mindre komponenter, så det på sigt giver systemet ny værdi for brugeren, men ikke nødvendigvis i den nuværende iteration. 
Agil udvikling adskiller sig fra iterativ udvikling i den forstand, at ved hver ny iteration bør der skabes ny værdi for brugeren ellers har iterationen fejlet. 

### Agil udvikling i praksis: SCRUM
Et eksempel på meget anvendt og anerkendt agil udviklingsmetode er SCRUM, som er taget fra rugby og betyder noget i retning af "skærmydsler". 

Man starter typisk en SCRUM proces i forberedelses fasen med at formulere følgende:
* Produkt vision. Her beskrives de overordnede mål for udviklingen af systemet.
* Produkt roadmap. Her beskrives ved brug af milepæle en overordnet plan for hvornår de vigtigste nøglefunktioer eller features er klar til levering. 
* Release plan. Her inddeles road map i punkt 2 i indtil flere releases, hvor første release betegner et såkaldt "minimum viable project" eller minimum levedygtigt produkt. Dvs. de funktioner/features, som er essentielle for produktet. 

I SCRUM arbejdes med tre forskellige roller:
* Product owner, som er ansvarlig for at planlægge leveringer til kunden og at der er styr på kravene til produktet. Den pågældende er mao den egentlige ansvarlige for produktet. 
* Scrum master, som sikrer at de enkelte iterationer - de såkaldte sprints -  gennemføres og at det kommunikeres ud og synliggøres for Product owner. 
* Scrum teamet, som er en mindre grupper af mennesker der står for at udføre de enkelte sprints. 

Grundlaget for ethvert SCRUM projekt består af følgende såkaldte artefakter eller materialer:

* Produkt Backlog er en samling af alle krav til systemet og projektet, som administreres af Product owner. De enkelte krav prioriteres og jo højere prioritering, jo mere præcis skal kravene være beskrevet. 
* Sprint Backlog indikerer hvilke dele af Product Backlog altså hvilke krav, som implementeres i den kommende sprint. 
* Burndown Chart er et visuelt diagram af fremdriften i en iteration. Hvor iterationer (typisk målt i dage) er ud af x-aksen men systemets backlog er opad y-aksen. Den kan også måles i tid eller antal opgaver. Se figuren for et eksempel på et sådan plot. 

Et sprint forløber i fire ceremonier hvor hele teamet mødes og det er SCRUM masterens opgave at facilitere og koordinere møderne.. 
* Planlægning af sprint hvor det enkelt sprint koordineres i fht de enkelte medlemmer i teamet 
* Dagligt Stand Up hvor hvert medlem af teamet fortæller om hvad de har lavet, hvad de skal i dag og hvorvidt de har nogle problemer eller ting som kan blokere for at opnå dagens program
* Sprint review hvor sprintets leveringer gennemgås og godkendes

Efterfølgende foretages også en retrospektiv proces som har fokus på hvorledes samarbejdet forløber og hvad der kan gøres bedre til næste sprint. 




### Agil udvikling i praksis: Kanban