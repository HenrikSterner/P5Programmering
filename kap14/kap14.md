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

I metoden itererer man efterfølgende over eller gentager følgende faser indtil man når sine ønskede mål med systemet/produktet, hvorefter systemet kan frigives til brugeren: 
* Design: I denne fase forberedes systemet til at opfylde de fornødne krav for designet, der kan være et nyt eller en udvidelse af en tidligere version.
* Implementation og test: I denne fase er man optaget af implementere eller programmere de nødvendige krav. Undervejs testes systemet regelmæssigt og systematisk. 
* Evaluering: I denne fase evalueres systemet i fht de aktuelle krav. Man overvejer og reflekterer over den nuværende løsning og man diskuterer muligheden for nye mulige krav i den næste iteration/opdatering. 
   
I en verden hvor teknologien og kravene ændres stort set hele tiden kan modellen være rigtig god at bruge fremfor eksempelvis vandfaldsmodellen. 
Når kravene og nødvendighederne til systemet ikke nødvendigvis er veldefineret men kan forstås og klassificeres, så kan modellen være god at bruge til over tid at udvikle en fornuftig løsning. 

Hvis der er behov for at udvikle eller opdatere eksisterende systemer til eksempelvis at integrere den seneste teknologi, kan metoden også bruges, fordi man kan udvikle inkrementelt og opdatere systemet løbende modsat eksempelvis vandfaldsmodellen, hvor man i højere grad tvinges til at starte forfra.

Men den iterative udviklingsmetode kan i højere grad end vandfaldsmodellen give mulighed for at identificere høj-risiko problemer eller udfordringer, som kan have stor betydning for den endelige løsning, og i stedet justere for dette undervejs ved, så man i højere grad arbejder med lav-risiko beslutninger der i mindre grad påvirker det samlede system. I vandfaldsmodellen ender man i højere grad tvunget til at tage høj-risiko beslutninger i starten og slutningen af processen. 

Metoden kalder på en mere agil tilgang til softwareudvikling, som vi vender tilbage til i næste afsnit. 


## Agil udvikling og SCRUM
Agil betegner noget der let, hurtigt og smidigt. Med andre ord tilpasningsparat. 
Modsat vandfaldsmodellen handler agil udvikling om at være tilpasningsparat i en dynamisk verden, hvor tingene hurtigt kan ændre sig om det er feedback fra brugere, ændringer i konteksten, kravmodifikationer eller lignende. 

I agil udvikling arbejder implementeres denne tilpasningsparathed sig ved at have en iterativ tilgang til udviklingen. Ved iterativ skal her forstås, at man gentager nogle af eller alle faserne i udviklingsprocessen. Det betyder eksempelvis, at man i iterativ udvikling bevæger sig igennem faserne planlægning, udvikling, testning og tilpasning mange gange måske et uendeligt antal gange. På den måde opstår der en såkaldt inkrementel udvikling eller skridtvis forbedring af ens system.  

### Kanban