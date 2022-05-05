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

### Vandfaldsmodel
Vandfaldsmodellen er en af de ældste og mest traditionelle modellering af udviklingsprocessen. Som et vandfald, der pga tyngdeloven falder og falder, så er udgangspunktet for denne model, at man udfører en række skridt i en række skridt inden man bevæger sig videre til næste skridt. I praksis er der dog typisk nogle små overlap mellem de enkelte faser/skridt. 
Modellen blev oprindeligt brugt dengang hvor man udviklede til større mainframe systemer. 
Selvom den måske ikke bruges umiddelbart så meget i dag, er den stadig særdeles vigtig at kende til fordi den strukturerer mange af de overvejelser, som udviklingen af ethvert system bør inddrage. 
Vandfaldsmodellen kan være god  at inddrage når mål og krav med systemet står meget klar, og teknologi-stakken er veldefineret og velkendt. Mao. hvor man ikke forventer større, radikale ændringer undervejs i processen. Det kunne eksempelvis være i større organisationer, såsom i udviklingen af offentlige it-systemer. 
En klar ulempe ved modellen er, at den mangler grundlæggende fleksibilitet. Hvis du f.eks.  udvikler et mindre system eller en prototype, der skal formes eller tilpasses markant undervejs - måske udfra feedback fra brugere/testere - så er vandfaldsmodellen formentlig ikke hensigtsmæssig at bruge. 

### Agil udvikling og SCRUM
Agil betegner noget der let, hurtigt og smidigt. Med andre ord tilpasningsparat. 
Modsat vandfaldsmodellen handler agil udvikling om at være tilpasningsparat i en dynamisk verden, hvor tingene hurtigt kan ændre sig om det er feedback fra brugere, ændringer i konteksten, kravmodifikationer eller lignende. 

I agil udvikling arbejder implementeres denne tilpasningsparathed sig ved at have en iterativ tilgang til udviklingen. Ved iterativ skal her forstås, at man gentager nogle af eller alle faserne i udviklingsprocessen. Det betyder eksempelvis, at man i iterativ udvikling bevæger sig igennem faserne planlægning, udvikling, testning og tilpasning mange gange måske et uendeligt antal gange. På den måde opstår der en såkaldt inkrementel udvikling eller skridtvis forbedring af ens system.  

