# Programmering i teori og praksis ved brug af P5.JS

## Af Henrik van Bedaf Sterner og Peter Sterner

Velkommen til hjemmesiden til lærebogen *Programmering i p5.js*, som er
under udarbejdelse og skrevet af Peter og Henrik Sterner.

I de respektive mapper finder man kapitlerne samt tilhørende øvelser.
Grundet GitHub Pages er langsomme om at opdatere, så peger links
herunder direkte på filerne i repository for at sikre, at læseren har
den nyeste opdatering.

OBS: Bogen er i den grad under udarbejdelse, så forvent masser af fejl
og mangler. Skriv gerne til <henrik.sterner@gmail.com> hvis du har
forslag til forbedringer eller rettelser. Bogens hjemmeside:\
`<a href = "http://henriksterner.github.io/P5Programmering/">`{=html}henriksterner.github.io/P5Programmering`</a>`{=html}.

God fornøjelse!

Peter & Henrik

Mekanisk, elektronisk eller anden gengivelse af eller kopiering fra
denne digitale udgave af bogen eller dele heraf er uden eksplicit aftale
med os ifølge gældende dansk lov om ophavsret ikke tilladt. Copyright ©
Henrik Sterner & Peter Sterner 2022.

# Kapitler

Del I: Introduktion til basal programmering - [Kapitel 1:https://github.com/HenrikSterner/P5Book/blob/main/kap1/kap1.md
Indledning](https://github.com/HenrikSterner/P5Programmering/blob/main/kap1/kap1.md)
- [Kapitel 2: Intro til P5 og
Javascript](https://github.com/HenrikSterner/P5Programmering/blob/main/kap2/kap2.md)
- [Kapitel 3: Variabler, animationer og
input](https://github.com/HenrikSterner/P5Programmering/blob/main/kap3/kap3.md)
- [Kapitel 4: Betinget
udførsel](https://github.com/HenrikSterner/P5Programmering/blob/main/kap4/kap4.md)
- [Kapitel 5:
Løkker](https://github.com/HenrikSterner/P5Programmering/blob/main/kap5/kap5.md)
- [Kapitel 6:
Funktioner](https://github.com/HenrikSterner/P5Programmering/blob/main/kap6/kap6.md)
- [Kapitel 7:
Rekursion](https://github.com/HenrikSterner/P5Programmering/blob/main/kap7/kap7.md)

Del II: Objektorienteret programmering - [Kapitel 8:
Objekter](https://github.com/HenrikSterner/P5Programmering/blob/main/kap8/kap8.md)
- [Kapitel 9:
Strengobjekter](https://github.com/HenrikSterner/P5Programmering/blob/main/kap9/kap9.md)
- [Kapitel 10: Objektorienteret
principper](https://github.com/HenrikSterner/P5Programmering/blob/main/kap10/kap10.md)
- [Kapitel 11: Et vektorbibliotek - objektorienteret principper i
praksis](https://github.com/HenrikSterner/P5Programmering/blob/main/kap11/kap11.md)

Del III: Softwareudvikling

-   [Kapitel 12: Dokumentation og
    kravspecikation](https://github.com/HenrikSterner/P5Programmering/blob/main/kap12/kap12.md)
-   [Kapitel 13:
    Softwarearkitektur](https://github.com/HenrikSterner/P5Programmering/blob/main/kap13/kap13.md)
-   [Kapitel 14: Testning, debug og
    fejlhåndtering](https://github.com/HenrikSterner/P5Programmering/blob/main/kap14/kap14.md)
-   [Kapitel 15:
    Udviklingsprocesser](https://github.com/HenrikSterner/P5Programmering/blob/main/kap15/kap15.md)
-   [Kapitel 16: Computationel tænkning og Designmønstre (under
    udarbejdelse)](kap16/kap16.md)
-   [Kapitel 17: Udviklingsmiljø og
    versioneringskontrol](https://github.com/HenrikSterner/P5Programmering/blob/main/kap17/kap17.md)

# 1. Indledning

Programmering eller kodning dækker over den process hvor man i et givent
programmeringssprog skriver noget kode, som resulterer i et program
(eller system). Programmet kan typisk afvikles på en eller flere
platforme såsom en computer, en mobiltelefon, en selvkørende bil, en
sensor i køleskabet eller noget helt femte.

Der kan være mange formål med at udvikle programmer. Typisk handler
programmering om at automatisere kedelige eller beregningstunge opgaver
eller gøre det nemmere for folk at kommunikere, søge information eller
træffe bedre og mere kvalificerede beslutninger.

Eksempler på programmer findes overalt i vores moderne samfund og
digitaliseringen af samfundet bliver stadig mere allestedsnærværende. Vi
interagerer dagligt mange gange med programmer i den ene eller anden
form fra handel, sundhed, finans, transport, medier, kunst og kultur.
Alle domæner af vores samfund er efterhånden gennemsyret af og afhængig
af digitale programmer og systemer. Ligesom vi påvirker programmerne, så
påvirker programmer også vores adfærd og måde at leve og agere på.
Derfor, hvis vi skal tackle morgendagens store udfordringer kræver det
en bred og divers gruppe af udviklere på tværs af køn, alder,
religiøsitet osv.

Prøv i det følgende at overveje nogle af nedenstående spørgsmål?

-   Når du googler hvem eller hvad er det, der afgør hvad der vises
    først?
-   Hvordan konstruerer Netflix anbefalinger til næste film?
-   Hvordan virker den selvkørende bil egentlig, når det kommer til
    stykket? Hvordan kender den forskel på de forskellige objekter
    udenfor?
-   Hvor lang tid mon du bruger på at kigge på en skærm
    (mobil/computer), hvis du er lige som de fleste andre?
-   Hvordan kan vi være sikre på, at de private beskeder vi sender til
    hinanden rent faktisk er private?
-   Bør vi kunne stemme digitalt ved næste valg? Hvad kan udfordringerne
    være?
-   Hvordan identificerer vi fake news?

Målet med denne bog er ikke nødvendigvis, at gøre alle til
professionelle programmører, men håbet er at give læseren en sjov og
måske lidt anderledes introduktion til programmering og kode, som tidens
helt centrale metodefag, der kan efterhånden bruges som værktøj i stort
set alle fag.

Ved at give læseren en grundlæggende, digital skaberkompentece,
muliggøres det, at skabe værdi for den enkelte, som den pågældende kan
drage nytte af indenfor sit domæne, vidensfelt eller interesseområde.
Hvis vi kan så et frø, der på sigt kan rykke nogle til at blive
professionelle udviklere, så går vi selvfølgelig ikke i vejen for det.

Det handler i sidste ende om, at være med til at oplyse og skabe
demokratiske medborgere, der har en principiel eller grundlæggende
forståelse for hvad kode er og hvordan systemer er opbygget, men som
også kan forholde sig kritisk og reflekterende i fht udviklingen af ny
teknologi.

## Det tager 10 år at blive en dygtig programmør!

Denne bog har som nævnt ikke til hensigt, at gøre dig til en
professionel programmør, men gør dig bedre i stand til at vurdere, om
det måske er noget du har lyst til at arbejde videre med på sigt.

Vær på vagt overfor folk, der påstår, at man kan lære et nyt sprog i
løbet af få timer, dage eller et kursus på nogle uger. Kigger man på den
gængse litteratur indenfor programmering finder man utallige eksempler
på bøger med titler ala "lær dig sprog X i løbet af 24 timer", hvor X
kan erstattes med passende sprog såsom Javascript, Python, Java, C++
osv. Ændres timer til dage så er der endnu flere.

På 24 timer kan man måske nå at sætte sig ind i noget af den
grundlæggende syntaks og sprogets opbygning, men næppe tid til at skrive
særligt mange signifikante, ikke trivielle programmer, tid til at
fejlrette eller lære af mere erfarne programmører eller tid til at
forstå den dybere forskel på korrekte og effektive programmer
vs. korrekte, men ineffektive løsninger eller tid til at forstå sprogets
standardbibliotek eller til at leve og arbejde i et udviklingsmiljø med
alle de muligheder det giver for debugning og fejlretning.

Det korte af det lange er, at du efter 24 timer allerhøjest vil have
nået en særdeles overfladisk og ikke særlig dyb viden. Som den engelske
poet, Alexander Pope, skrev det, så kan lidt viden være en farlig ting.
Særligt hvis det får en til at tro eller overvurdere egne evner, fordi
nogle måske kan have tilbøjelighed til ikke at øve sig nok eller få godt
nok styr på det fundamentale. Det er en velkendt psykologis bias
eftervist eksperimentelt af de to psykologer Dunning og Kruger (se
figuren nedenfor), at mindre kompetente individer indenfor en lang række
domæner, har en tilbøjelighed til at overvurdere egne evner. Effekten er
vigtig at kende til på alle stadier af ens udvikling som programmør,
fordi vi ellers risikerer at undervurdere kompleksiteten af ​​et system
eller det skaber et ego, der gør at vi tror, at vi ved mere end vi gør,
og det hindrer os i at søge hjælp til koden, når vi måske har brug for
det.

![Dunning-Kruger effekten](../kap1/images/dunningkruger.png)

Vi skal med andre ord øve os i det fundamentale, fordi kun når det
fundamentale er godt nok på plads, begynder de mere avanceret og
videregående emner at give mening.

Rigtig megen forskning peger på, at det ofte tager 10.000 timer eller 10
år at udvikle ekspertise indenfor et felt om det er komponering af
musik, sport eller fag. Programmering er ingen undtagelse. Langt hen ad
vejen kan vi tænke på programmering, som et håndværk. Man kan måske nok
lære ret hurtigt at forstå hvordan værktøjerne virker, men rent faktisk
at kunne bruge dem til at lave noget ikke-trivielt af værdi, kræver, at
man træner og øver sig i meget, meget lang tid. For nogle kortere end
andre, men det tog stadig Mozart, der blev opdaget som et musikalsk
geni, som 4 årig, næsten 13 år mere før han begyndte at skrive
verdensklasse musik.

For at blive en god programmør og få succes med programmering, så vil vi
foreslå følgende:

-   Bevidst træning i den forstand, at man udfordrer sig selv med nye og
    svære opgaver, prøver at løse dem og analysere hvad der gik galt. Og
    gør det så igen, igen og igen Til hvert kapitel i denne bog er der
    en række øvelser, som har en stigende progression, så de kan være et
    godt sted at starte. Lad være med at springe over. Få styr på det
    fundamentale først!
-   Programmering læres bedst ved at gøre det selv. Find nogle opgaver
    som du synes kunne være interessante at lave. Det vigtigste er, at
    programmering skal gerne være sjovt også efter de første 10.000
    timer.
-   Læs andres kode og forstå det til bunds
-   Tal med andre programmører og arbejd med andre programmører på
    projekter både før og efter. Der findes en lang række open source
    projekter derude, som du kan bidrage til.
-   Når først du har øvet dig en del i et sprog, så prøv at lære et
    eller flere andre sprog. Gerne sprog med forskellige tilgange til
    processen.
-   Giv ikke op. Men bliv ved med at øve dig.
-   Vær vidende om, at alle dygtige programmører har på et eller andet
    tidspunkt været der hvor du er nu. Du er ikke alene.

Ønsker du på sigt at blive en ekspert indenfor programmering, så se i
øjenene, at ægte ekspertise kan tage et helt liv eller som digteren,
Samuel Johnson formulerede det: "Ekspertise i enhvert fag kan kun opnås
ved et livs arbejde; det kan og skal ikke købes til en lavere pris."

## Valg af sprog

Når man skal lære at programmere er et af de første store spørgsmål,
hvilket sprog man bør tage fat på. Der findes ikke noget entydigt godt
sprog at starte på. Nogle sprog er dog stadig nemmere at lære end andre.
Der findes i dag flere hundrede forskellige sprog og valget af sprog
afhænger i høj grad hvad man ønsker at lave eller bruge det til. Selvom
alle sprog er unikke er mange af dem og så meget ens, og forstår man
først de grundlæggende principper i et sprog, så har man typisk nemmere
ved at overføre det til et andet.

Man kan inddele sprog i lavniveau og højniveau sprog, som indikerer hvor
tæt vi er på den egentlig maskinkode. Jo lavere niveau, jo tættere er vi
på noget kode som maskinen forstår. Jo højere niveau, jo længere væk er
vi fra den meget maskinnære syntaks.

Nærværende kompendie bruger højniveausproget Javascript og biblioteket
P5.JS, som på mange måder minder om Processing i Java. Det er der en
række grunde til, som vi kort vil komme ind på herunder.

-   Javascript er med et fint ord dynamisk fortolket. Det kan betragtes
    som en form for syntaktisk sukker, der gør det nemmere at komme i
    gang. Når man eksempelvis vis skal erklære en såkaldt variable (en
    navngiven plad i computerens hukommelse), så behøver man ikke bruge
    så meget krudt på at fortælle hvilken type data, der gemmes. I andre
    sprog, såsom Java, der er statisk typet, skal man erklære typerne på
    forhånd. Vi kan tænke på Javascript, som den gamle, søde mormor, der
    tillader os at gøre ret meget, mens Java er der noget mere strikse
    og disciplineret militærsergent, som kræver hård disciplin.
-   Javascript er nemt at afvikle i din browser og kan afvikles på stort
    set alle platforme. Det kan bruges til at udvikle alle mulige slags
    applikationer.
-   Ved brug af biblioteket P5.JS får vi mulighed for skrive kode, der i
    højere grad lader sig visualisere. Det kan hjælpe på forståelsen for
    mange, og man kan tidligere i læringsprocessen lave nogle mere
    interessante og spændende programmer med input fra tastatur, mus,
    fingre osv. fremfor at kunne skrive "Hej verden" på som det ofte er
    traditionen, at man starter med i de fleste sprog.
-   Der findes et enormt community til både Javascript og P5, så det er
    nemt at få hjælp og man kan nærmeste lave hvad som helst ved brug af
    forskellige opensource værktøjer.
-   Når man føler sig klar er der mulighed for at arbejde videre i P5
    miljøet ved brug af eksempelvis Python eller Java til Processesing.

## Gode råd til at blive en bedre programmør

Programmering handler i bund og grund om problemløsning og at formulere
denne løsning i kode, så computeren kan forstå det. Det er på mange
måder en sjov, lærerig og tilfredsstillende proces, som dog først rigtig
bliver levende når man selv sætter sig foran keyboardet. Programmering
er tidskrævende og man vil begå fejl undervejs, men i takt med at man
bliver dygtigere vil fejlene blive færre og produktiviteten større.
Herunder nogle gode råd til når du sidder fast i udviklingsprocessen:

-   Har du et problem, som du ikke umiddelbart kan finde en løsning på,
    så start med at google problemet/fejlen. Der findes med garanti
    andre derude, som har haft samme problem som dig, så hvis du ikke
    kan finde svaret så overvej hvordan du google spørgsmålet.
-   Hvis ikke Google kan hjælpe, så prøv at spørg en anden programmør.
-   Hvis der ikke er en anden programmør til rådighed, så prøv at fortæl
    en anden, der gider at lytte. Det hjælpe ofte at sætte ord på sine
    problemer.
-   Brug gerne del og hersk princippet. Har du et problem som du ikke
    kan løse, så prøv at dele det ind i mindre problemer, som du måske
    så bedre kan løse. Prøv altså at reducere problemet til et mere
    simpelt problem og løs det først.
-   Hold tingene så simple som mulige men hellere ikke simplere (KISS -
    Keep It Simple and Straight)
-   Indse at Programmering = Kode + Problemløsning. Det er altså ikke
    nok at have styr på koden. Du skal også have en forståelse af
    hvordan problemer mere generelt kan løses og du skal have styr på
    den underliggende teori bag det givne problem. I kapitlet om
    computationel tænkning kigger vi på klassiske
    problemløsningsteknikker og hvordan man systematisk kan arbejde med
    at løse problemer.
-   Lær at bruge et udviklingsmiljø og de mange muligheder det tilbyder.
    Brug miljøets mulighed for at debugge og finde fejl let
-   Læs sproget dokumentation eller vær klar over hvor du kan slå
    tingene op
-   Hold pauser i ny og næ. Din underbevidshed arbejder stadig for dig
-   Test regelmæssigt - for ikke at sige hele tiden
-   Brug et versioneringssystem ala Github, der giver mulighed for at
    synkronisere kode på tværs af computere let. Det giver dig mulighed
    for at arbejde hvor som helst når som helst.
-   Først får vi programmet til at virke, så gør vi det korrekt og til
    sidst effektivt.

## Javascripts afvikling i en browser

Det kan være en fordel, at man ved lidt om opbygningen hvorledes kode i
javascript afvikles i browseren inden man går i gang med at skrive kode
selv. En browser eller webbrowser ala Google Chrome, Firefox etc. har
det grundlæggende formål at fremvise HTML hhv. CSS, der står for
HyperText Markup Language hhv. Cascading Styling Sheet, der er to sprog
til at opbygge hhv. style hjemmesider. Browserens opgave er altså at
rendere eller fremstille koder udfra disse sprog, så det man ser er
hjemmesiden og ikke de egentlige HTML koder eller CSS koder. Faktisk kan
Javascript være direkte involveret i HTML, så det kan være en god ide at
vide en smule om HTML. Udover renderingsmotoren har langt de fleste
browsere også en såkaldt Javascript fortolker, som kan afvikle
Javascript programmer. Renderingsmotoren kan kalde Javascript
fortolkeren, når det er nødvendigt. Dvs. overordnet foregår afviklingen
af Javascript kode i følgende trin:

1.  Kode skrevet i javascript indlæses
2.  Fortolkeren kaldes og sættes i gang med at fortolke og oversætte
    koden linje for linje
3.  Kompileren (som står for at oversætte koden til den binære kode, der
    er læsbar og kan forstås af maskinen) modtager koden og begynder at
    optimere og kompilere koden
4.  Kompileren optimerer inkrementelt på koden

Kompileren er en såkaldt Just-In-Time kompiler, der dynamisk oversætter
i mens programmet kører (også kaldet "run time"). Der findes andre typer
kompilere, som oversætter og optimerer al koden til maskinkode inden
programmet kører.

## Udviklingsmiljø

Vi starter med blot at bruge editoren eller tekstfeltet, der er
tilgængelig på P5JS. Den er simpel og let at komme i gang. Vigtigst er i
første omgang at få skrevet noget kode og det er samtidig nemt at både
dele og hente andres programmer, så man kan lade sig inspirere.

Herefter tager vi hul på brug af Visual Studio Code, som det såkaldte
udviklingsmiljø, hvor vi skal have følgende plugins (tryk Ctrl+Shift+P):

1)  Live Server til at afvikle en lokal webserver
2)  P5 Project Creator: Til nemt at konstruere P5 projekter.
3)  p5js Snippets: Til nemt at indsætte ofte brugte kodestumper ind
    automatisk

Vi giver en grundig indføring i installationen og brugen af både online
editoren samt Visual Studio Code og de nødvendige plugins i kapitel 17.

## Læsevejledning

Generelt anbefales det at følge de første ni kapitler i den rækkefølge.
Her introduceres de grundlæggende strukturer, som er essentielle for at
kunne kode. Man kan undervejs dykke ned i kapitlerne 11-16, som langt
hen ad vejen kan læses uafhængigt af hinanden. Det kan være en god ide
relativt tidligt i sin læringsproces at få en forståelse for
dokumentation og testning samt de grundlæggende problemløsningsteknikker
og den måde vi tænker og arbejder computationelt.

Ved hvert kapitel er der en række øvelser og større projekter. Det
anbefales at lave så mange øvelser som muligt og gerne de projekter, som
man finder interessante. Projekterne, er generelt noget større og åbne
opgaver.

## Øvelser

Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 7.\
1. Overvej nogle eksempler fra din hverdag hvor du i et eller andet
omfang interagerer med programmer. Hvorledes påvirker disse programmer
mon din eller andres adfærd? 2. Hvorfor er det vigtigt, at vi får en
bred og divers gruppe af udviklere til at kode fremtidens løsninger? 3.
Giv tre eksempler på hvor programmering kan bruges til at automatisere
kedelige opgaver. 4. Giv tre eksempler på hvor programmering kan bruges
til at gøre noget skidt eller hvor en programmør kan have ondsigtede
intentioner? 5. Brug trekantsmodellen illustreret nedenfor til at
kvalificere og belyse nogle af spørgsmålene formuleret i indledningen.
Modellen har tre hjørner: Menneske, maskine og miljø. Med maskine skal
forstås noget, som i en eller anden form (software eller hardware) er
automatiseret ved brug af noget kode og miljø betegner de ydre forhold
som omgiver os. Det kan eksempelvis være samfundet og kulturelle forhold
og normer.

![Trekantsmodel](../kap1/images/trekantsmodel.png)

6.  Hvad er forskellen på lavniveau og højniveau sprog? Hvorfor er det
    en god ide at starte i et højniveau sprog?
7.  Prøv at kigge på følgende to sider, [tiobe
    index](http://tiobe.com/tiobe-index/) og
    [github](https://githut.info/), som rummer statististikker over de
    mest anvendte sprog netop nu. Hvorfor ligger Javascript mon nr 7 på
    den ene og nr 1 på anden?
8.  Prøv at google historien bag udviklingen af sprogene C++, C\#, og
    PHP. Kan du finde en sammenhæng?
9.  Som nævnt tidligere så handler programmering i høj grad om at hjælpe
    mennesker. Forestil dig nu, at du skal skrive et program, der kan
    hjælpe en person lider af locked-in-syndromet (dvs. vedkommende kan
    reelt kun bevæge øjnebrynene), med at skrive en bog. Det lyder måske
    umuligt, men var ikke desto mindre tilfældet for Jean-Dominique
    Bauby, da han skrev den fremragende bog, Dykkerklokken og
    sommerfuglen. Forestil dig, at programmet kan opfange når der
    blinkes og hvor mange gange det sker. Dvs. vi kan bruge blink til at
    indikere hvilket bogstav nr i alfabetet. Ved brug af såkaldt lineær
    søgning kunne 1 blink svarer til et a, 2 til b, 3 til et c osv. Det
    vil være ret ineffektivt. Hvorledes kunne vi gøre det smartere
    (altså med færre blink)? Mon en med locked-in-syndromet overhovedet
    ville være interesseret i at bruge et sådan program?
10. Der kan være mange vej til Rom. På samme måde kan et program have
    mange forskellige løsninger. Det skal denne øvelse illustrere.
    Øvelsen kan være god at lave med en anden. Tegn et kvadrat bestående
    af 8\*8 mindre kvadrater vha noget kridt på asfalt. Brug evt noget
    papir, hvis du er alene. Sæt den ene person i et af kvadraterne og
    en bold eller noget et andet sted. Nu skal du som programmør skrive
    noget kode, der får den anden over til bolden. Du må kun bruge
    instruktionerne F samt V/H for hhv. Fremad og til Venstre/Højre
    betyder at du roterer 90 grader men bliver i samme felt. Programmet
    må først køres, når du har skrevet det færdig. Hvis du ikke når i
    mål, så prøv at debugge eller finde fejlen. Bemærk, der er undelige
    mange korrekte løsninger til programmet og uendelig mange forkerte.
11. Udvid nu ideen fra 10. så du skal have en robot eller lignende til
    at hente dig en kop vand eller lignende. Du må gerne selv finde på
    nogle nye instruktioner. En god instruktion at tilføje kunne være
    "Gentag følgende sålænge at", der gentager instruktioner et vist
    antal gange. Prøv dit program af i praksis.
12. Ofte har man brug for at sortere tal i stigende rækkefølge. Det sker
    faktisk rigtig mange gange i løbet af en dag, når man googler, ser
    transaktioner på sin netbank, sorterer sit musikbibliotek osv. Tag
    nogle kort fra et kortspil eller en gruppe af mennesker med
    forskellige højder, der hver repræsenterer et unikt tal. Prøv at
    overveje et program og et entydigt sæt af instruktioner, der gør det
    muligt at sortere kortene eller menneskene i stigende rækkefølge.
    Prøv dit program af i praksis. Hvad gik godt og hvad gik mindre
    godt?

# 2. Intro til P5 og Javascript

Et program består af en række instruktioner, som en maskine (computer,
telefon, bil, køleskab etc) forstår. Programmering betegner den proces
hvor man ud fra nogle formelle regler konstruerer programmet.

Vi kan tænke på det at programmere som at lave en tegning, hvor den
endelige tegning udgør programmet. I det følgende skal vi arbejde med at
konstruere simple geometriske former som kan blive til en form for
automatiseret tegninger. Dvs. programmer.

Det bemærkes, at til at starte med er det dog nok bare at trykke
"Editor" på p5js.org, men hvis man eksempelvis ønsker at gemme sine
programmer, så er det nødvendigt at logge ind/oprette en konto. Det er
grundigt forklaret i kapitel 18 hvor man bl.a. får en udførlig
vejledning i brug af editoren (hvor koden skrives) på p5js.org i kapitel
18.

## Koordinatsystemer og geometriske former i P5.JS

På figuren nedenfor ses til venstre et koordinatsystem,som vi kender det
fra matematikundervisningen. Det indbyggede koordinatsystem i P5 er på
figuren vist til højre:

![alt_text](billeder/kap2-koordinatsystem.png "Til højre ses koordinatsystemet i P5")

Vi konstruere punkter, linjer, rektangler, ellipser og cirkler nedenfor:

``` {.javascript}
function setup(){
    // størrelsen af vores tegneflade også kaldet kanvas 
    // (100,100) markerer brede og og længde
    createCanvas(100, 100);
}
function draw(){
 // point(x, y) hvor x og y refererer til placeringen af punktet: 
 point(40, 50); 
 // line(x1, y1, x2, y2) hvor (x1,y1) og (x2,y2) refererer til placering af endepunkter
 line(10, 20, 50, 20); // line(x1, y1, x2, y2) hvor tallene 
 // rect(x, y, width, height) hvor (x,y) er punktet i øverste, vesntre hjørne og width og height
 // er bredde hhv højde
 rect(10, 20, 40, 30); 
 // ellipse(x, y, width, height) , hvor (x,y) er centrum af ellipsen 
 // width hhv. height er længden af stor- hhv lille-aksen
 ellipse(30, 30, 40, 60); // ellipse(x, y, width, height)
 ellipse(30, 30, 40, 40); // ellipse(x, y, width, height)
}
```

Sidstnævnte bliver til en cirkel. Hvorfor mon?

I `setup` initialiseres programmet (instruktionerne herinde afvikles en
gang og som det allerførste i programmet). I det her tilfælde
konstruerer vi blot tegnefladen, som vi fremover også kalder for et
kanvas. Det er her vores illustrationer og objekter fremkommer.

I `draw` skrives den kode, som tegner figurerne på kanvas. Bemærk at
koden i draw afvikles som standard 30 gange i sekundet.\
De to skråstreger indikerer at der er tale om kommentarer, som ikke
fortolkes af computeren. Den opfatter det som kommentarer.
Krølparenteser markerer start og slut på de to såkaldte metoder, `setup`
og `draw`.

Alternativt kan rektangler eksempelvis konstrueres ud fra deres hjørner:

``` {.javascript}
function setup(){
 createCanvas(100, 100);
 rectMode(CENTER);
}
function draw(){
// rect(x, y, width, height) hvor (x,y) er centrum
 // width og højde er bredde hhv højde
 rect(30, 20, 40, 20); 
}
```

Man kan ændre tykkelsen af streger på følgende måde:

``` {.javascript}
strokeWeight(1); // Standard
line(20, 20, 80, 20);
strokeWeight(4); // Tykkere
line(20, 40, 80, 40);
strokeWeight(10); // Fed
line(20, 70, 80, 70);
```

Man kan lave en form bestående af mange punkter der forbindes ved brug
af linjer ved at bruge shape. Herunder tegnes en pil:

``` {.javascript}
function setup() { 
 createCanvas(480, 120); 
} 
function draw() { 
 background(204); 
 beginShape(); 
  vertex(180, 82); 
  vertex(207, 36); 
  vertex(214, 63); 
  vertex(407, 11); 
  vertex(412, 30); 
  vertex(219, 82); 
  vertex(226, 109); 
 endShape(CLOSE); 
}
```

## Kommentarer

Man kan som nævnt skrive kommentarer i sin kode ved at skrive to
skråstreger "//". Alternativt brug \"/*\" og så vil alt være kommentarer
indtil man igen skriver */. Herunder et par eksempler.

``` {.javascript}
function setup() { 
 // Her et eksempel på en enkelt linjes kommentar i setup

} 
function draw() { 
 /* Her er et eksempel på en kommentar 
    over flere linjer.
    Vi kan skrive lige så mange linjer som man har lyst til
  */
}
```

## Farver

Vi skal være præcise når vi vil farvelægge former. For sort til hvid og
nuancer herimellem gælder følgende farveskema:

![alt_text](billeder/kap2-sorthvid.png "Sort-hvid-skala")

Herunder ses hvordan man ændrer farven på baggrund og et rektangel:

``` {.javascript}
background(255);  // hvid baggrund
stroke(0);        // farve til sort
fill(150);        // indre form grå
rect(50,50,75,100); // tegner rektangel
```

Vil vi have farver så skal vi bruge RGB (Red, Green, Blue):

```{=html}
<table>
```
```{=html}
<tr>
```
```{=html}
<td>
```
`<img src="billeder/kap2-farver.png" width="" alt="alt_text" title="image_tooltip">`{=html}

```{=html}
</td>
```
```{=html}
<td>
```
Rød + grøn =gul
```{=html}
<p>
```
Red + blå = lilla
```{=html}
<p>
```
Grøn og blå = blå-grøn
```{=html}
<p>
```
Rød + grøn + blå = hvid
```{=html}
<p>
```
Ingen farver = sort
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
</table>
```
Nuancen af rød, grøn og blå angives med tallene 0 til 255 for alle tre
farver. Herunder et eksempel

``` {.javascript}
function draw() {
  background(255);
  noStroke();

  // Bright red
  fill(255,0,0);
  ellipse(20,20,16,16);

  // Dark red
  fill(127,0,0);
  ellipse(40,20,16,16);

  // Pink (pale red)
  fill(255,200,200);
  ellipse(60,20,16,16);
}
```

Metoden draw opdateres som nævnt 30 gange i sekundet. Det kaldes også 30
FPS - Frames Per Second. Det betyder, at linjerne mellem
krølparenteserne i draw afvikles 30 gange i sekundet. Du sætter antallet
af frames i setup ved brug af kommandoen

``` {.javascript}
frameRate(x); //x er antallet af frames
```

Overvej altid om du bør eller ikke bør have en background kommando med,
da den sørger for at rense kanvas, så noget nyt kan tegnes. Hvis du ikke
har objekter, der bevæger sig dynamisk kan det overvejes om det er
nødvendigt at rense kanvas.

## Tilfældige tal ved brug af random

Man kan generere tilfældige farver ved at bruge en den indbyggede
tilfældighedsgenerator, som vi også kalder for random, der bl.a. kan
generere tilfældige heltal på følgende måde:

``` {.javascript}
random(50); // giver et tilfældigt tal mellem 0 og 50
random(-50,50); //giver et tilfældigt tal mellem -50 og 50
```

Funktionen viser sig at være ekstremt nyttig i mange sammenhænge, men
til at starte med kan den eksempelvis bruges til at tildele en
geometrisk form en vilkårlig farv eller placering:

``` {.javascript}
fill(random(250),random(250),random(250)); //en tilfældig RGB-farve
ellipse(random(75),random(75),50,50); //en tilfældig position for en cirkel
```

## Skrive til konsollen

Man har mulighed for at skrive til konsolen, som man tilgår via
Ctrl+Shift+J i de fleste browsere.

``` {.javascript}
var i = 0;
function setup() {
  createCanvas(400, 400);
  console.log("HEJ her fra setup");

}
function draw() {
  background(220);
  console.log("Hej her fra draw"+ i );
  i=i+1;
}
```

Her opretter vi en heltalsvariable (en såkaldt tællevariable), som vi
inkrementerer i metoderne i `draw`og printer i både `draw` og `setup`.
Førstnævnte kaldes 30 gange i sekundet, mens setup kun kører en gang.
Bemærk vi kan sagtens skrive kode uden for de to metoder og vi kan sågar
lave vores egne metoder. Men det vender vi tilbage til senere.

## Afvikling på p5js.org eller egen computer

Indtil nu har vi afviklet applikationer på vores p5's hjemmeside via
editoren og dette kan man sagtens forsætte med i de næste par kapitler,
hvis man synes det er sjovere at kode.

Men på et tidspunkt vil det måske være rart med en lidt mere avanceret
editor eller et decideret udviklingsmiljø.\
Det er praktisk af mange grunde. Bl.a. får vi lettere ved at skrive
større mængder kode fordelt på flere filer og vi får en række værktøjer
til at skrive kode hurtigere og med færre fejl.

Vi vælger at bruge Visual Studio Code, som er open source og gratis. Den
kan hentes på <https://code.visualstudio.com/> til stort set alle
platforme (herunder Windows, Mac og linux).

Visual Studio Code (VSC) er en slags Word for programmører og vi skriver
fremover al vores kode heri. I VSC skal du installere tre plugins:

-   Live Server
-   P5 JS snippets
-   p5.vscode

Når du har installeret disse kan du nøjes med at trykke Ctrl + Shift + p
og skrive Create. Herefter kommer der en valgmulighed, som hedder Create
P5 JS project. Vælg den og vælg en mappe hvor dine filer skal ligge. I
mappen kommer der en række filer og et enkelt bibliotek:

[Libraries]{style="text-decoration:underline;"}: Mappen med p5.js filer.
Den skal du ikke røre ved.

[Index.html]{style="text-decoration:underline;"}: Hjemmesiden hvor du
linker til din javascript kode og style sheet. Ser herunder.

[Script.src]{style="text-decoration:underline;"}: Her er funktionerne
setup og draw. Det er her du skal skrive din kode indtil videre.

[Style.css]{style="text-decoration:underline;"}: Her kan du skrive style
sheets der ændrer på hjemmesidens udseende. Undlad at kigge på den nu.

I kapitel 18 gennemgår vi i langt flere detajler installationen og
brugen af Visual Studio Code.

## Øvelser

Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 9.
Dele af projektet kan også være sjovt at lave.\
1. Tegn de forskellige geometriske former i forskellige farver 2. Gør
baggrunden mørkeblå. Tegn to linjer der krydser diagonalt i en hvid
farve. 3. Tegn OL-logoet i farver 4. Tegn et hus. Farvelæg det. 5. Tegn
et dyr eller et rumvæsen. Farvelæg det. 6. Konstruér en stjerne. To gode
funktioner at kende er "translate(x,y)", som definerer
omdrejningspunktet og "rotate(vinkel i radianer)", der roterer de
efterfølgende objekter i radianer med uret. Til orientering kan man
konvertere mellem radianer og grader ved følgende formler:
$$radianer= \frac{grader}{180}*\pi $$
$$grader= \frac{radianer}{pi}*180 $$ 7. Konstruér en blomst ved brug af
cirkler og ellipser. 8. Konstruer din egen figur ved hjælp af beginShape
og endShape. 9. Du er ved at starte din egen virksomhed og har brug for
at kunne autogenerere dit firmas logo. Skriv et program der konstruerer
dit logo. 10. Bestem selv om du vil vente med denne øvelse. Installér
Visual Studio Code og følgende plugins: 1. Live Server til at afvikle en
lokal webserver 2. P5 Project Creator 3. P5js Snippets Se en udførlig
vejledning i kapitel 18.

## Projekt: Algoritmisk flag konstruktion

Du har startet en virksomhed op som producerer flag automatisk og
digitalt i P5. Flere lande har allerede efterspurgt om deres flag kan
blive konstrueret i P5 og en beskrivelse (dvs. en algoritme), der skridt
for skridt fortæller hvordan flaget konstrueres vha computeren. Det
drejer sig om følgende lande:

![alt_text](billeder/kap2-lande.png)

Du skal altså gøre følgende

-   a.  Skriv med ord på helt almindelig dansk hvorledes du vil
        konstruere et flag. Denne form for kode kaldes pseudokode.

-   b.  Skriv koden der rent faktisk visualisere flaget.

-   c.  Udfør a. og b. for et selvvalgt flag.

Pseudokode for eksempelvis det japanske flag kunne lyde i retning af
følgende:

-   Konstruer et kanvas med hvid bagrund
-   Tegn en rød cirkel i midten af kanvas
-   Fyld cirklen med en rød farve

Hvis du kender andre, som er ved at lære p5 kan det være en fordel at
prøve at give din beskrivelse i a. til vedkommende, og se om vedkommende
kan visualisere dit flag.

Ofte er den bedste måde at kommunikere kode til andre på ikke
nødvendigvis ved at tage udgangspunkt i selve koden men i stedet at
kommunikere i pseudokode eller lignende. Ydermere er det også en god
måde at dokukumentere sin kode på, hvis andre skal læse den eller hvis
man selv vender tilbage til koden en dag. Man vil blive overrasket over
hvor hurtigt man kan glemmer tankegangen og ideer man havde, da man
udviklede et program.

Det er generelt en vigtigt egenskab for alle programmører at være
bevidst om hvorledes man bedst kommunikere sit program ud og at
programmer kan repræsenteres ikke kun som den egentlig kode men også
almindelig tekst, figurer eller noget helt tredje. \# 3. Variabler,
animationer og input Variabler udgør de centrale byggesten i ethvert
program. Variabler kan tænkes på som navngivne pladser i computerens
hukommelse, og de bruges til at opbevare data af forskellige typer. Det
skal vi kigge nærmere på nedenfor, hvor vi også vil se på hvorledes man
håndterer input fra brugeren i form af taster på tastaturet eller input
fra musen. Undervejs ser vi også eksempler på hvorledes man kan lave
ikke bare statiske tegninger men også animationer.

## Variabler og datatyper

Variabler bruges til at opbevare data. Dataens "form" eller type kaldes
også datatypen. Når man erklærer eller konstruerer en variable, så
reserverer vi en plads i computerens hukommelse, hvor variablens værdi
opbevares. Man erklærer variabler ved at bruge nøgleordet **let **,
**var** eller **const** i kombination med tildelingsoperatoren. Helt
overordnet vil en erklæring se således ud:

```{=html}
<p align="center">
```
`<b>`{=html}let`</b>`{=html} `<i>`{=html}variablenavn`</i>`{=html}
`<b>`{=html}=`</b>`{=html} `<i>`{=html}værdi`</i>`{=html}`<br>`{=html}
`<b>`{=html}var`</b>`{=html} `<i>`{=html}variablenavn`</i>`{=html}
`<b>`{=html}=`</b>`{=html} `<i>`{=html}værdi`</i>`{=html}`<br>`{=html}
`<b>`{=html}const`</b>`{=html} `<i>`{=html}variablenavn`</i>`{=html}
`<b>`{=html}=`</b>`{=html} `<i>`{=html}værdi`</i>`{=html}
```{=html}
</p>
```
Bemærk variablenavn skal erstattes med et navn, som du vælger. Det bør
gerne være sigende for den værdi variablen skal indeholde. Værdien
angives på højre side skal angives i stedet for værdi. Vi skal senere
studere forskellen på brugen af let, var og const i detaljer. En
væsentlig forskel er, at const ikke kan ændres i værdi eller erklæres på
ny. Den er som nøgleordet antyder konstant. "let" blev introduceret i
2015 og er typisk den måde variabler erklæres på i moderne javascript.
Ældre applikationer bruger dog stadig var og det kan nogle få gange være
relevant at bruge. Men generelt er rådet at bruge let så meget som
muligt, da det typisk reducerer risikoen for fejl. Vi vil derfor primært
fokusere på at bruge let forskellen på og hvorfor "let" er at
foretrække.

Herunder nogle eksempler på erklæringer af forskellige variabler og
initialiseringer af :

``` {.javascript}
let n = 1; // variablen n peger nu på tallet 1 
var m = 2; // variablen n peger nu på tallet 2 
const p = 3 // variablen p peger nu på tallet 3 og kan ikke ændres/erklæres på ny
let s = "Hej"; // variablen s peger nu på teksten "Hej"
var t = "med dig"; // variablen t peger nu på teksten "Hej"
const r = "Halløj"; // variablen r peger nu på teksten "Halløj" og kan ikke ændres/erklæres på ny
```

Disse eksempler illustrerer brugen af de tre nøgleord til at erklære og
dermed konstruere nogle forskellige variable med forskellige værdier.
Når vi nu bruger variablenavnene i en kontekst udgør de en pladsholder
for den konkrete værdi, som vi har

Der findes overordnet syv forskellige typer i javascript:

![alt_text](images/data-types-in-python.png "Overblik over de forskellige datatyper i Javascript")

I følgende kapitel vil vi primært fokusere på de primitive typer kaldet
\* "Number": Der består af heltal (integers på engelsk) og kommatal
(floats på engelsk).\
\* "String": Der består af strenge af tekst eller karakterer.\
\* "Boolean": Der består af de boolske værdier true og false.

Vi vender senere tilbage til de andre typer.

Javascript er et såkaldt dynamisk typet sprog. Dvs. at du ikke på
forhånd behøver at erklære hvilken type variablen skal have, hvilket
typisk gøre det nemmere at bruge sproget. Omvendt risikerer man at lave
nogle fejl, som kan være svære at finde.

Eksempel herunder hvor kommentaren angiver datatypen.

``` {.javascript}
let n = 80; // Number - heltal/integer 
let s = "Hej"; // String - tekst 
let b = true; // Boolean - boolsk
let f = 10.2; // Number - kommatal/float
```

Er du i tvivl om en variables type kan du bruge kommandoen "typeof()":

``` {.javascript}
console.log(typeof(n)) // Number - heltal/integer 
```

## Primitive typer og muterbarhed

Generelt kan vi sige om de primitive datatyper, at de er datatyper, som
kun opbevarer en enkelt værdi. De er desuden "ikke muterbare". I praksis
betyder, at vi kan ikke ændre variablernes værdi.

Lad os se et eksempel på det ved at betragte en streng variable:

``` {.javascript}
let navn = "Hemrik"
```

Der er tydeligvis en stavefejl i navnet. Vi kan heldigvis tilgå de
enkelte elementer i navn ved at skrive "\[x\]" hvor x kan antage værdier
fra 0 til og med 5, da første bogstaver står på plads 0 og der i alt er
6 bogstaver i strengen. Dvs. hente de enkelte bogstaver ud af navnet
således:

``` {.javascript}
let navn = "Hemrik"
console.log(navn[0]) //printer "H"
console.log(navn[1]) //printer "e"
console.log(navn[2]) //printer "m"
console.log(navn[3]) //printer "r"
console.log(navn[4]) //printer "i"
console.log(navn[5]) //printer "k"
```

Umiddelbart kunne vi måske prøve bare at tildele værdien på:

``` {.javascript}
let navn = "Hemrik"
navn[2]="n"
console.log(navn) //printer stadig "Hemrik"
```

Hvis du prøver koden af vil du opdage, at der stadig printes "Hemrik",
hvilket altså skyldes at navn ikke lader sig ændre eller med et fint
udtryk "er immuterbar".

Kan vi så overhovedet tildele navn en ny værdi? Svaret er ja, men det
kan kun lade sig gøre ved at bruge tildelingsoperatoren "=" og ikke ved
at ændre den eksisterende værdi. Herunder retter vi stavefejlen i navn:

``` {.javascript}
let navn = "Hemrik"
navn="Henrik"
console.log(navn) //printer nu korrekt "Henrik"
```

Bemærk altså at vi ikke muterer navn men i stedet tildeler den en ny
værdi.

Det leder frem til en vigtig pointe, som vi kort vil illustrere med
følgende simple eksempel:

``` {.javascript}
  let navn = "Hemrik";
  let navn2 = navn;
  console.log(navn2)
  navn = "Henrik" + " Sterner";
  console.log(navn2)
```

Hvad skrives mon ud i konsollen i de to tilfælde? I det første er det
nok ikke så overraskende "Henrik" men det er det faktisk også i det
andet tilfælde!

Når vi tildeler variablen "navn" en ny værdi, så ændrer vi variablen, så
den nu peger på strengværdien "Henrik Sterner", hvorfor værdien af
"navn2" ikke er påvirket.

Man hører ofte metaforeren om variabler, som en slags container i form
af en navngiven kasse eller spand med en konkret værdi. Det er et godt
billede, når vi arbejder med statisk typede sprog, hvor vi erklærer
typerne på forhånd, som det eksempelis er gjort herunder i java:

``` {.java}
int x = 6; //erklærer en heltalsvariable der rummer 6
```

Men i dynamiske sprog som Javascript, er det bedre at tænke på
variabler, som nogle størrelser der peger på en anden spand/kasse, som
rummer værdien 6. Det har derfor heller ingen betydning i dynamiske
sprog om vi eksempelvis lader x pege på et tal eller en streng, som det
eksempelvis er tilfældet i følgende:

``` {.javascript}
let x = 6
x = "Hej med dig"
```

## Variablers scope

Variabler har et såkaldt scope eller sigte. Dvs. hvor de er tilgængelige
i koden. Erklæres en variable indenfor eksempelvis `setup` er den kun
tilgængelig derinde. Omvendt kan man lave en global variable ved at
erklære den udenfor metodernes kroppe:

``` {.javascript}
let n = 5; //global variable 
function setup(){
 let x = 7; //lokal variable 
}
```

Hvis du ønsker at ændre værdien undervejs kan man overveje at bruge
nøgleordet `var` i stedet for:

``` {.javascript}
var a=1;
var b=2;
if(a===1){
 var a=11; //scope er globalt
 let b=22; //scope er indenfor if-blokken dvs. Krølparenteser
 console.log(a); //11
 console.log(b); //22
}
console.log(a); //11
console.log(b); //2
```

Bruger vi "let" kan vi `<b>`{=html}ikke`</b>`{=html} redeklarere en
eksisterende variable, hvis det sker indenfor de samme krølparenteser.
Skriver vi eksempelvis følgende får vi en fejl:

``` {.javascript}
let a= 2
let a= 3
```

Sætter vi den sidste erklæring i krølparenteser får den et lokalt sigte
eller scope:

``` {.javascript}
let a = 2
{
  let a = 3
  console.log(a)
}
console.log(a)
```

Når vi printer her så vil resultatet være 3 og 2, da den sidste print
vil refererer til den oprindelige værdi af a som var 2.

Bruger vi "var" kan det godt lade sig gøre at erklære en variable igen:

``` {.javascript}
var a= 2
var a= 3
```

Man kan dog overveje om det er en god ide.

De vigtigste forskelle mellem let og var: \* 1. `let` kan ikke bruges
til at redeklarere en variable i samme krølparenteser. Det kan godt lade
sig gøre med `var` \* 2. Variabler deklareret med `let` er kun
tilgængelige indenfor den lukkede blok, som de er omgrænset af.
Variabler, der er erklæret med `var` har et globalt scope og kan bruge
overalt i en funktion \* 3. En variable deklareret med `let` skal
deklareres før dens brug. Det er ikke nødvendigt med `var`

Herunder nogle flere eksempler på brugen af `let` og `var`:

``` {.javascript}
var carName = "Volvo";
// koden kan bruge carName
function setup() {
  // kode her kan bruge carName
}
```

Havde vi erklæret carName inde i funktionen i setup, kunne vi ikke bruge
den udenfor. Det samme gør sig dog ikke gældende hvis man laver en blok,
som eksemplet herunder viser:

``` {.javascript}
{
  var x = 2;
  let y = 2;
}
// x kan bruges her men y kan ikke bruges her
```

Til at illustrere punkt 2 kommer her et eksempel:

``` {.javascript}
function setup() {
    let a = 'hej';

    // variable b kan ikke bruges her
    {
        // variable b kan bruges
        let b = 'verden';
        console.log(a + ' ' + b);
    }

     // variable b kan ikke bruges
    console.log(a + ' ' + b); // giver en fejl
}
// variable a kan ikke bruges her


Som vi nævnte før skal man passe på med at redeklarere variabler med "var", da det ofte forvirrer mere end det gavner. Pas eksempelvis på med redeklarationer med **var**, som eksemplet illustrerer:

```javascript
var x = 10;
// x er 10
{
  var x = 2;
  // x er 2
}
// x er 2
```

Til forskel fra følgende:

``` {.javascript}
var x = 10;
// x er 10
{
  let x = 2;
  // x er 2
}
// x er 10
```

Det er ofte en god ide at undgå for mange globale variable. Prøv hellere
at indlejre dem i setup eller draw ved brug af "let"-konstruktionen.

## Operationer på variable

Herunder en kort oversigt over de vigtigste operatorer.

```{=html}
<table>
```
```{=html}
<tr>
```
```{=html}
<td>
```
=
```{=html}
</td>
```
```{=html}
<td>
```
Tildeling
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
-   ```{=html}
    </td>
    ```
    ```{=html}
    <td>
    ```
    Addition (plus)
    ```{=html}
    </td>
    ```
    ```{=html}
    </tr>
    ```
    ```{=html}
    <tr>
    ```
    ```{=html}
    <td>
    ```
    -   ```{=html}
        </td>
        ```
        ```{=html}
        <td>
        ```
        Subtraktion (minus)
        ```{=html}
        </td>
        ```
        ```{=html}
        </tr>
        ```
        ```{=html}
        <tr>
        ```
        ```{=html}
        <td>
        ```
        -   ```{=html}
            </td>
            ```
            ```{=html}
            <td>
            ```
            Multiplikation (gange)
            ```{=html}
            </td>
            ```
            ```{=html}
            </tr>
            ```
            ```{=html}
            <tr>
            ```
            ```{=html}
            <td>
            ```
            \*\*
            ```{=html}
            </td>
            ```
            ```{=html}
            <td>
            ```
            Eksponent (et tal x opløftet i y skrive x\*\*y)
            ```{=html}
            </td>
            ```
            ```{=html}
            </tr>
            ```
            ```{=html}
            <tr>
            ```
            ```{=html}
            <td>
            ```
            /
            ```{=html}
            </td>
            ```
            ```{=html}
            <td>
            ```
            Division (deling)
            ```{=html}
            </td>
            ```
            ```{=html}
            </tr>
            ```
            ```{=html}
            <tr>
            ```
            ```{=html}
            <td>
            ```
            \%
            ```{=html}
            </td>
            ```
            ```{=html}
            <td>
            ```
            Modulus (bestemmer resten af en division.)
            ```{=html}
            </td>
            ```
            ```{=html}
            </tr>
            ```
            ```{=html}
            <tr>
            ```
            ```{=html}
            <td>
            ```
            ++
            ```{=html}
            </td>
            ```
            ```{=html}
            <td>
            ```
            Inkrementering (x++ betyder at man lægger en til x)
            ```{=html}
            </td>
            ```
            ```{=html}
            </tr>
            ```
            ```{=html}
            <tr>
            ```
            ```{=html}
            <td>
            ```
            --
            ```{=html}
            </td>
            ```
            ```{=html}
            <td>
            ```
            Dekrementering (x-- betyder at man trækker en fra x)
            ```{=html}
            </td>
            ```
            ```{=html}
            </tr>
            ```
            ```{=html}
            </table>
            ```

Her et eksempel på tildeling og addition

``` {.javascript}
let x = 5;         // tildeler x værdien 5
let y = 2+x;       // tildeler y værdien af x adderet med 2
```

Dernæst multiplikation:

``` {.javascript}
let x = 5;
let y = 2;
let z = x * y;
```

Man kan kombinere en lang række operationer:

```{=html}
<table>
```
```{=html}
<tr>
```
```{=html}
<td>
```
`<strong>`{=html}Operator`</strong>`{=html}
```{=html}
</td>
```
```{=html}
<td>
```
`<strong>`{=html}Eksempel`</strong>`{=html}
```{=html}
</td>
```
```{=html}
<td>
```
`<strong>`{=html}Det samme som`</strong>`{=html}
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
=
```{=html}
</td>
```
```{=html}
<td>
```
x = y
```{=html}
</td>
```
```{=html}
<td>
```
x = y
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
+=
```{=html}
</td>
```
```{=html}
<td>
```
x += y
```{=html}
</td>
```
```{=html}
<td>
```
x = x + y
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
-=
```{=html}
</td>
```
```{=html}
<td>
```
x -= y
```{=html}
</td>
```
```{=html}
<td>
```
x = x - y
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
\*=
```{=html}
</td>
```
```{=html}
<td>
```
x \*= y
```{=html}
</td>
```
```{=html}
<td>
```
x = x \* y
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
/=
```{=html}
</td>
```
```{=html}
<td>
```
x /= y
```{=html}
</td>
```
```{=html}
<td>
```
x = x / y
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
%=
```{=html}
</td>
```
```{=html}
<td>
```
x %= y
```{=html}
</td>
```
```{=html}
<td>
```
x = x % y
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
\*\*=
```{=html}
</td>
```
```{=html}
<td>
```
x \*\*= y
```{=html}
</td>
```
```{=html}
<td>
```
x = x \*\* y
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
</table>
```
Særlig for tekst strenge betyder +, at man konkatinerer to tekststrenge.
Dvs. kæder dem sammen:

``` {.javascript}
let txt1 = "John";
let txt2 = "Doe";
let txt3 = txt1 + " " + txt2;
```

## Input fra mus

Vi kan hente musens koordinater ved bruge af variablerne mouseX og
mouseY, som er af typen heltal. De er prædefineret og starter altid med
at være 0, når programmet indlæses:

``` {.javascript}
function draw() {
  background(255);
  frameRate(12);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
}
```

Vi benytter funktionen frameRate til at sikre, at draw ikke udføres for
ofte. Det sker for at sikre, at den ikke overskriver vores to
tekstfelter.

Herunder tegner vi en hvid cirkel hvor musen er:

``` {.javascript}
function setup() {
  createCanvas(100, 100);
  noStroke();
}
function draw() {
  background(126);
  ellipse(mouseX, mouseY, 33, 33);
}
```

Her tegner vi en linje efter musen. Holder vi musen stille er det bare
en cirkel:

``` {.javascript}
function setup() {
  createCanvas(100, 100);
  strokeWeight(8);
}
function draw() {
  background(204);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
```

Herunder skifter vi farve på et rektangel når vi klikker på den:

``` {.javascript}
function setup() {
  createCanvas(100, 100);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if (mouseIsPressed == true) {
    fill(255); // White
  }
  else {
    fill(0);   // Black
  }
  rect(25, 25, 50, 50);
}
```

Centralt er `if (mouseIsPressed == true)`, som betyder, at vi undersøger
om musen er trykket ellers gør vi noget andet. Vi vender tilbage til den
såkaldte betinget udførsel (if-else) i næste modul.

Vi kender forskel på højre og venstre museklik ved følgende:

``` {.javascript}
function setup() {
  createCanvas(100, 100);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      fill(0);   // sort
    }
    else if (mouseButton == RIGHT) {
      fill(255); // hvid
    }
  }
  else {
    fill(126);   // grå
  }
  rect(40, 20, 40, 60);
}
```

Som nævnt vender vi lige straks tilbage til 'if' og 'else if', men
forhåbentlig giver det god mening, at vi tjekker først om musen er
trykket og hvis det er tilfældet, undersøger vi om det er højre eller
venstre. Prøv meget gerne koden af selv.

## Input fra keyboard

Herunder et eksempel på hvordan et rektangel farvelægges forskelligt når
man registrerer om der trykkes pil op eller ned:

``` {.javascript}
let fillVal = 126;
function draw() {
  fill(fillVal);
  rect(25, 25, 50, 50);
  if (keyCode === UP_ARROW) {
    fillVal = 255;
  } else if (keyCode === DOWN_ARROW) {
    fillVal = 0;
  }
  return false;
}
```

Hver tast har sin egen keycode, som man kan finde på følgende side:
<http://keycode.info/>.

## Øvelser

Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 16.

1.  Som nævnt kan du hente finde musens position ved brug af variablerne
    `mouseX` og `mouseY`. Skriv noget kode, der printer musens position
    ud i konsollen. Du skal inddrage følgende to streng variabler i den
    tekst du udskriver:

``` {.javascript}
let musPosX = "Din mus x-koordinat er givet ved "
let musPosY = "Din mus y-koordinat er givet ved "
```

2.  Udover musens position i den nuværende frame kan du også få musens
    position i den foregående frame ved brug af `pmouseX` og `pmouseY`.
    Udvid dit program så du også udskriver `x` og `y` fra den foregående
    frame.
3.  Beregn nu hastigheden i x-retningen og i y-retningen ved at udskrive
    forskellen mellem `x`-værdierne og tilsvarende med `y`-værdierne.
4.  Beregn et udtryk for farten af din mus ved at bruge formlen:
    $$\sqrt{(mouseX-pmouseX)^2 + (mouseX-pmouseX)^2}.$$\
5.  Definerer to variable x og y og sæt den lig med hhv. 5 og 3. Brug nu
    javascript til at beregne summen, differencen, multiplikationen og
    divisionen af de to samt find resten ved divisionen.
6.  Hvad bliver x og y i slutningen af hver instruktion? Kommenter koden
    og forklar hvad variablen resultat er efter hver operation. Brug evt
    console.log til at finde svaret.

``` {.javascript}
let x = 5
let y = 7
let resultat
resultat=--x;
console.log(resultat)
resultat=x++;
console.log(resultat)
resultat=y*(x++);
console.log(resultat)
resultat=x**((y--)-4)
console.log(resultat)
resultat+=(resultat%(x**2))
console.log(resultat)
```

7.  Lav et program der tegner en cirkel alle de steder du bevæger musen
    hen.
8.  Lav et program, der tegner en cirkel når du klikker med venstre mus
    og et rektangel med højre mus.
9.  I det følgende nogle boolske udtryk. Overvej typerne af variablerne
    og udtrykkene herunder. Hvad mon der printes i konsollen?:

``` {.javascript}
x=12
y=12.5
s="Hej"
t="12.5"
b=true
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(s))
console.log(typeof(t))
console.log(typeof(b))
console.log(typeof(x+y))
console.log(typeof(s+t))
console.log(typeof(x+t))
```

10. Lav et simpelt tegneprogram der tegner en streg efter musens
    bevægelse
11. Lav et program, der tegner en firkant hvis du trykker f, en cirkel
    hvis du trykker c eller en ellipse hvis du trykker e.
12. Lav et program, der tegner en firkant hvor musen er.
13. Hvad gør følgende kode:

``` {.javascript}
var x = 200;
var y = 200;
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);   
  if (x >= 400){
   x = 0; 
  }
  if (keyCode === UP_ARROW) {
    y = y - 1;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1;
  }
}
```

14. Forklar hvad følgende kode gør:

``` {.javascript}
let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50); 
  x+=xspeed; 
  y+=yspeed; 
}
```

15. Prøv at udvide 7 så cirklen ikke kan bevæge sig ud af skærmen og
    bagefter, at man kan klikke et sted på skærmen med musen og så
    følger cirklen det punkt.
16. Lav to cirkler og sæt dem i fart i en given retning. Undersøg om de
    kolliderer med hinanden.
17. Konstruer en vandret linje der bevæger sig op og ned af skærmen. Når
    den når toppen af skærmen bevæger den sig nedad. Og omvendt.
18. Konstruer en lodret linje, der bevæger sig til højre og venstre. Når
    den når højre side bevæger den sig tilbage mod venstre side. Og
    omvendt.

## Projekt: Algoritmisk kunst

I det følgende skal vi udvikle noget algoritmisk kunst, der er
kendetegnet ved at følge regler som kan formaliseres i instruktioner der
kan implementeres i et programmeringssprog.

På følgende link kan I se en lang række eksempler:

<http://www.generative-gestaltung.de/2/>

1.  Udvælg et eksempel og kig på koden bag. Prøv at forstå hvad koden
    gør og sæt kommentarer på.
2.  Lav din egen algoritmiske kunst ved først at formulere kunsten i
    almindelig prosa, listeform, pseudokode eller lignende.
3.  Prøv at implementere den i P5. Husk at kommentere koden.
4.  Overvej om algoritmisk kunst er rigtig kunst.

# 4. Betinget udførsel

Indtil nu har vi primært arbejdet med programmer som en lineær sekvens
af instruktioner, der afvikles fra top til bund. Men ofte vil man gerne
have mulighed for at afvikle nogle bestemte instruktioner hvis en given
betingelse er opfyldt. Det kunne eksempelvis være når man skal undersøge
om brugeren har trykket på en bestemt tast eller har trykket højre eller
venstre mus.

I det følgende skal vi med andre ord se på hvorledes man kan evaluere
hvorvidt en instruktion rent faktisk skal udføres eller om den skal
springes over. Det kaldes også for "betinget udførsel".

## If-konstruktionen

Den helt simple if-konstruktion ser således ud:

``` {.javascript}
if (betingelse){
 //sekvens af instruktioner
} 
```

Hvis betingelsen er sand så afvikles instruktionerne mellem
krølparenteserne og ellers springes de instruktioner over.

Et eksempel kunne være at undersøge om musen ligger over i den venstre
side af kanvas og i så fald ændre baggrundsfarven:

``` {.javascript}
  if (mouseX < 100){
    background(255,0,0);
  }
```

Betingelsen skal ved afviklingen gerne kunne evalueres til enten at være
sand eller falsk. Et sådan udtryk kaldes også et boolsk udtryk og kan i
princippet rummes i en boolsk variable. Disse udtrykke kan bestå af
mange delbetingelser, som vi kigger nærmere på senere.

## If-else konstruktionen

Man kan udvide if-konstruktion så vi gør noget andet hvis betingelsen er
falsk. Det ser grundlæggende således ud:

``` {.javascript}
if (betingelse){
 //sekvens af instruktioner afvikles hvis betingelse er sand
} 
else{     
 //sekvens af instruktioner afvikles hvis betingelse er falsk
}
```

Vi kan udvide vores eksempel fra før, så vi giver den en anden farve
hvis musen har en x-værdi, der er større end eller lig med 100:

``` {.javascript}
if (mouseX < 100){
 background(255,0,0);
  } 
else{     
 background(0,0,255);
}
```

## If-else-if konstruktionen

Endelig kan man også udvide og undersøge flere kriterier på engang:

``` {.javascript}
if (betingelse #1){
 //sekvens af instruktioner afvikles hvis betingelse #1 er sand
} 
else if (betingelse #2){
 //sekvens af instruktioner afvikles hvis betingelse #2 er sand
} 
else if (betingelse #3){
 //sekvens af instruktioner afvikles hvis betingelse #3 er sand
}
//...
else{
 //sekvens af instruktioner afvikles hvis ingen af betingelserne er sande
}
```

Man kan udvide med lige så mange betingelser, som man har lyst til.

Herunder ses et eksempel med tre del-betingelser:

``` {.javascript}
if (mouseX < 100){
 background(255,0,0);
} 
else if (mouseX < 300){
 background(0,255,0);
} 
else if (mouseX >= 300){
 background(0,0,255);
}
```

Hvis musens `x`-værdi er mindre end 100 får baggrunden en farve, en
anden hvis den er mindre end 300 og en tredje hvis den er større end
300.

## Boolske operatorer

Som vi nævnte tidligere er betingelser egentlig bare boolske udtryk, som
kan opbevares i de boolske variable, der enten er sande eller falske
(true/false).

Boolske operatorer giver os mulighed for at operere på boolske
variable/udtryk og dermed muligheden for at lave mere komplekse boolske
udtryk.

Herunder en generel definition på brug af den boolske og-operator, der i
javascript er repræsenteret ved to ampersander `&&` og tager et boolsk
udtryk (eller evt. en boolsk variable) på hver sin side. Hvis de begge
er sande bliver det samlede udtryk også sandt.

    boolsk_udtryk_1 && boolsk_udtryk_2

De boolske udtryk kan også blot være to boolske variable:

``` {.javascript}
boolsk_variable_1 || boolsk_variable_2
```

For at et boolsk udtryk med AND skal evalures til sandt skal begge
udtryk/variable være sande ellers vil det samlede udtryk blive falsk.

Herunder et eksempel på brugen af `AND`:

``` {.javascript}
if (mouseX > 100 && mouseX < 300){
 background(255,0,0);
} 
```

I det her tilfælde skal musens `x`-værdi altså både være større end 100
og mindre end 300 for at baggrundsfarven skiftes.

Herunder et eksempel hvor vi `&&` benytter to boolske variable til at
erklære en ny variable:

``` {.javascript}
let canSwim = true;
let canFly = true;
let isDuck = canSwim && canFly;
```

Modsat forholder det sig med OR/eller-operatoren, der er repræsenteret
ved to lodrette streger `||` og som tager et boolsk udtryk eller en
boolsk variable på hver sin side:

``` {.javascript}
boolsk_udtryk_1 || boolsk_udtryk_2
```

De boolske udtryk kan også blot være to boolske variable:

``` {.javascript}
boolsk_variable_1 || boolsk_variable_2
```

Her skal blot en af variablerne være sande for at det samlede udtryk
bliver sandt. Hvis begge udtryk eller begge variable er falske vil det
samlede udtryk også evaluere til falsk.

Herunder et eksempel:

``` {.javascript}
if (mouseX < 100 || mouseX > 300){
 background(255,0,0);
} 
```

Kun hvis musens `x`-værdi er mindre end 100 eller større end 300 vil
baggrundsfarven ændres.

Herunder et eksempel mere:

``` {.javascript}
let isTodaySaturday = true;
let isTodaySunday = false;
let isTodayWeekend = isTodaySaturday OR isTodaySunday;
```

Endelig er der negerings-operatoren, der er repræsenteret ved udråbstegn
`!`. Den tager boolsk udtryk eller en boolsk variable og hvis den er
sand, så vil NOT gøre den til falsk, og omvendt.

``` {.javascript}
!boolsk_udtryk   
!boolsk_variable  
```

Herunder et eksempel:

``` {.javascript}
if !(mouseX > 100 && mouseX < 300){
 background(255,0,0);
} 
```

Kun hvis musens `x`-værdi ikke ligger i intervallet 100 til 300 (begge
eksklusiv), vil baggrunden blive ændret.

Her et eksempel med negering brug på variabler:

``` {.javascript}
let sinks = !canSwim;
let falls = !canFly;
let isTodayWeekday = !isTodayWeekend;
```

Man kan kombinere disse operatorer til mere komplekse udtryk.
Eksempelvis:

``` {.javascript}
let isMammal = !canSwim && !canFly;
```

## Sammenligningsoperatorer `==`,`===`,`!=`,`===`

I mange tilfælde kan det også være relevant at spørge om to udtryk eller
to variable er ens. Til det bruger vi sammenligningsoperatorerne `==` og
`===`. Begge operatorer sammenligner operandernes værdier men med en
vigtig forskel. Hvis X og Y er operanderne gælder

``` {.javascript}
X==Y // returnerer sand hvis X og Y er lig hinanden, men ikke nødvendigvis samme type
X===Y // returnerer sand kun hvis X og Y er lig hinanden og har samme type
```

Herunder nogle eksempler på de to operatorer:

``` {.javascript}
let x = 7
console.log(x==9) // false
console.log(x==7) // true
console.log(x=="7") // true
console.log(x===7) // true
console.log(x==="7") // false
```

Bemærk særligt sidste eksempel. Tre lighedstegn returnerer falsk fordi
vi sammenligner tal og tekst. Herunder et par eksempler hvor vis
sammenligner strenge:

``` {.javascript}
let str1 = 'Henrik';
let str2 = 'Henrik';
let str3 = 'HenRik';

console.log(str1 == str2); // true
console.log(str1 == str3); // false
console.log(str1 === str2); // true
console.log(str1 === str3); // false
```

Sammenligningen med `str3` bliver falsk da der "R" er skrevet med stort.

Ligesom vi kan undersøge om to udtryk er ens kan vi også undersøge om to
udtryk er forskellige. Det gøres med `!=` og `!==`:

``` {.javascript}
X!=Y // returnerer sand hvis X og Y er forskellige fra hinanden, men ikke nødvendigvis samme type
X!==Y // returnerer sand kun hvis X og Y er forskellige fra hinanden og har forskellig  type
```

Herunder nogle eksempler:

``` {.javascript}
let x = 7
console.log(x!=9) // true
console.log(x!=7) // false
console.log(x!="7") // false
console.log(x!==7) // false
console.log(x!=="7") // true
```

Særligt tredje og femte linje er centrale. Bemærk altså, at `!=`
returnerer falsk når vi sammenligner tallet 7 med strengen "7". Endelig
et par eksempler hvor vi kun bruger strenge som operander:

``` {.javascript}
let str1 = 'Henrik';
let str2 = 'Henrik';
let str3 = 'HenRik';

console.log(str1 != str2); // false
console.log(str1 != str3); // true
console.log(str1 !== str2); // false
console.log(str1 !== str3); // true
```

## Større end (`>`) og mindre end (`<`) operatorer

Vi har også mulighed for at spørge om noget er større end eller mindre
end noget andet. Typisk er det tal som vi ønsker at undersøge. Herunder
den generelle definition:

``` {.javascript}
X>Y // returnerer sand hvis X er større end Y 
X<Y // returnerer sand hvis X er mindre end Y
```

Herunder nogle eksempler:

``` {.javascript}
let x = 7
let y = 5
let z = 7.0
console.log(x>y) // true
console.log(x<y) // false
console.log(x>z) // false
```

Man kan kombinere disse operatorer med lighedstegn:

``` {.javascript}
X>=Y // returnerer sand hvis X er større end eller lig med Y 
X<=Y // returnerer sand hvis X er mindre end eller lig med Y
```

Herunder nogle eksempler:

``` {.javascript}
let x = 7
let y = 5
let z = 7.0
console.log(x>=y) // true
console.log(x<=y) // false
console.log(x>=z) // true
```

## Øvelser

Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 11
samt et projekt.

1.  Overvej i det følgende hvad der printes i konsollen:

``` {.javascript}
// =
console.log(2 == 2); 
console.log(2 == '2'); 
// !=
console.log(3 != 2); 
console.log('hello' != 'Hello'); 
//===
console.log(2 === 2); 
console.log(2 === '2'); 
// !==
console.log(2 !== '2'); 
console.log(2 !== 2);
```

2.  Tegn en cirkel midt på skærmen. Hvis musen bevæger sig til højre for
    cirklens centrum bliver den til et rektangel. Hvis den bevæger sig
    til venstre for bliver den igen en cirkel.
3.  Overvej og følgende udtryk er sande eller falske og tjek efter med
    det der printes i konsollen:

``` {.javascript}
console.log(2 == 2 && 2 == '2'); 
console.log(2 == 2 && 2 == '2' && 2 === '2'); 
console.log(2 == 2 && 2 == '2' || 2!=2); 
console.log('hello' != 'Hello' && 'hello' !== 'Hello'); 
console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo'); 
console.log(2 === 2 || 2!=3 ); 
console.log(2 === 2 || 2!='2' && (true || false));
```

4.  Forklar hvad følgende kode gør (hvad betyder width og height?):

``` {.javascript}
function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(220);
  fill(255,0,0);
  noStroke();
  if (mouseX < width/3) {
    rect(0, 0, width/3, height);
  }
  else if (mouseX <= width*2/3) {
    rect(width/3, 0, width/3, height);
  }
  else {
    rect(width*2/3, 0, width/3, height);
  }
}
```

3.  Hvad gør følgende kode:

``` {.javascript}
let x;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2;
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  circle(x, height/2, 50);
}
```

5.  Skriv et program der får en cirkel til at bevæge sig lodret op og
    ned indenfor et givent kanvas.
6.  Hvad gør følgende kode:

``` {.javascript}
function setup() { 
createCanvas(120, 120); 
strokeWeight(30); 
} 
function draw() { 
 background(204); 
 stroke(102); 
 line(40, 0, 70, height); 
 if (mouseIsPressed) { //hvor kommer denne variable fra?
  if (mouseButton == LEFT) {  // og hvad med den?
   stroke(255); 
  } 
  else { 
   stroke(0); 
  } 
  line(0, 70, width, 50);
  } 
} 
```

7.  Hvad gør følgende kode:

``` {.javascript}
function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
} 
```

8.  Lav et program, som tegner et `A` på kanvas når du trykker på A. Og
    når du trykker på V tegnes et `V`.
9.  Forklar og forstå hvad følgende kode gør (hvad betyder mon
    `keyIsDown`):

``` {.javascript}
let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  circle(x, y, 50);
}
```

10. Lav et program der indsætter en cirkelformet mus et tilfældigt sted
    på skærmen og som kan bevæges op og ned, til højre og venstre vha
    piltasterne.
11. Udvid programmet fra forrige opgave så det tilsvarende også rummer
    en firkantet mus, der kan bevæge sig op og ned, til højre og venstre
    men ved brug af tasterne `w`,`a`, `s` og `f`.
12. Udvid de to forrige opgaver ved at indsætte nogle oste i form af
    prikker vilkårlige steder, som hvis de to mus kolliderer med
    forsvinder. Hold øje ved brug af to heltalsvariable hvem der har
    samlet flest oste. For hver ost der spises inkrementeres den
    respektive variable med 1.
13. Lav en cookie-klikker. Dvs. konstruer en cirkel et vilkårligt sted
    på skærmen. Når der klikkes på den forsvinder den og en ny oprettes
    et andet sted.

## Projekt: Katten efter musen

1.  Få en cirkel til at bevæge sig i vandret eller lodret retning på
    lærred.
    1.  Start med at oprette følgende globale variabler: x, y, a, b, d
        og speed.
    2.  Lad (x,y) være cirklens centrum og lad d være diameter af
        cirklen.. Sæt f.eks. x = random(0, windowWidth), y=random(0,
        windowHeight) og d = 20.
    3.  Variablen speed angiver hvor mange pixels at cirklen skal bevæge
        sig i enten vandret eller lodret retning. Lad f.eks. speed = 10.
    4.  Lad (a,b) være retningsvektor for cirklen. Sæt f.eks. a = speed
        og b = 0. Dvs. når spillet starter, så bevæger cirklen sig
        x-aksens retning.
    5.  Skriv en funktion, der tjekker for, om cirklen er på vej uden
        for skærmen. Brug evt. følgende:

``` {.javascript}
function borderCheck() {
 if (x + d / 2 >= width) {
   a = -speed;
   b = 0;
 }
 if (x - d / 2 <= 0) {
   a = speed;
   b = 0;
 }
 if (y + d / 2 >= height) {
   a = 0;
   b = -speed;
 }
 if (y - d / 2 < 0) {
   a = 0;
   b = speed;
 }
}
```

2.  Nu bevæger cirklen sig rundt inden for skærmen. Nu skal vi have
    cirklen til at bevæge sig i den retning, som piltasten, der trykkes
    på, viser. Vi skal mao. benytte funktionen keyPressed:

``` {.javascript}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   b = speed;
   a = 0;
 }
 if (keyCode === UP_ARROW) {
   b = -speed;
   a = 0;
 }
 if (keyCode === LEFT_ARROW) {
   b = 0;
   a = -speed;
 }
 if (keyCode === RIGHT_ARROW) {
   b = 0;
   a = speed;
 }
}
```

3.  I stedet for cirkel kan man indsætte et billede af en mus eller af
    sig selv :-). Det gøres vha. preload-funktionen.

``` {.javascript}
function preload() {
 img = loadImage('mus.png');
}
```

4.  Tilføj nogle "katte" der bevæger sig tilfældigt rundt på skærmen.
    Vink: Samme princip som med musen.
5.  Hvis to cirkler skærer hinanden, har katten fanget musen. Skriv en
    funktion, der undersøger dette.
6.  Gør evt. spillet svære med tiden. Sæt f.eks. hastigheden på kattene
    op med tiden.

## Projekt: Trommer, klaver og guitar

I det følgende projekt skal du prøve at lave simple digitale prototyper
på et trommesæt, et klaver og en guitar eller evt et andet selvvalgt
instrument. Tanken er at du for alle tre instrumenter skal tegne dem
først og evt farvelægge dem. Projeket forudsætter at du kan afspille lyd
og dermed køre din egen webserver (se sidste øvelse i modul 1). Følgende
instrumenter kunne man lave:

-   Trommesæt. Konstruer først en række ikke-overlappende cirkler.
    Indsæt relevante lyde når man trykker med musen på cirklerne
-   Piano. Tegn først et klaver/keyboard set for oven med sorte og hvide
    rektangler. Det behøver selvfølgelig ikke være et fuldt klaver blot
    en delmængde af. Sæt forskellige lyde på, når man trykker med musen
    på bestemte rektangler.
-   Guitar. Tegn seks vandrette linjer midt på canvas. Lad nogle små
    figurer bevæge sig henover skærmen og sæt nogle lodrette punkter.
    Når firkanten ligger indenfor disse punkter og man taster korrekt
    afspilles en selvvalgt lyd.

Du er velkommen til bagefter at indsætte billeder af instrumenter som
baggrund i canvas, så det ser mere realistisk ud. Det kan gøres hvis du
afvikler p5 på din egen webserver med følgende tre instruktioner:

``` {.javascript}
function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('...'); //path to picture
  createCanvas(720, 400);
}
```

``` {.javascript}
function draw() {
  background(bg);
}
```

Herunder et eksempel på hvordan man afspiller lyd. Vær obs på, at
lydfilerne ligger det rigtige sted:

``` {.javascript}
let song;

function setup() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
```

# 5. Løkker og arrays

Løkker er en særdeles vigtig konstruktion i de fleste
programmeringssprog, dan den giver mulighed for at afvikle en sekvens af
instruktioner et vilkårligt antal gange uden at skulle gentage koden.
Løkker er typisk ligesom if-udtryk betinget af noget for at de sættes i
gang, men det behøver ikke at være tilfældet. De to løkker vi kigger på
kaldes `while` og `for` og findes i øvrigt i ret mange af de mest
anvendte programmeringssprog, så kender man den i det ene sprog er det
nemmere at forstå den i det andet.

Efter at have introduceret løkker, så kigger vi på en datastruktur
kaldet "lister" eller arrays, der populært sagt er en type variable, der
giver mulighed for at rumme mere end en værdi, som det ellers har været
tilfældet indtilvidere. De introduceres sammen med løkke, da løkkerne
giver mulighed for på en nem måde at besøge, undersøge og operere på
hvert enkelt element i en liste.

## Løkker

Både `for`og `while` starter med en formulering af en betingelse,
hvilket også kaldes løkkens hoved og dernæst kommer kroppen indkapslet
af krølparenteser. Det er denne sekvens af instruktioner, der udføres
sålænge betingelsen er sand. Herunder en kort illustration af deres
opbygning:

``` {.javascript}
while(betingelse){ // hoved af while-løkken
 // kroppen af while-løkken
}
```

``` {.javascript}
for(start,slut,opdatering){ // hoved af for-løkken
// kroppen af for-løkken.
}
```

Vi vender tilbage herunder hvad de enkelte ting betyder.

### while-løkken

Et simpel eksempel på brug af while-løkken er ved at printe tallene 100
til 1 ud i konsollen:

``` {.javascript}
let num = 101;
while (num > 0) {
  num = num - 1;
  console.log(num);
}
console.log("Ude af løkken")
```

Vi sætter en variable til 101. Dernæst undersøger vi om variablen er
større end nul. Det er den, da vi jo lige har sat den til 100. Herved
ryger vi ned i kroppen defineret af krølparenteserne og dekrementerer
variablen, printer den ud. Igen undersøger vi om den er større end 0.
Sådan bliver vi ved. På et tidspunkt er variablen 1, når vi rygger ned i
kroppen og 0 når vi skal tjekke om betingelsen er sand. Herved er
betingelsen ikke længere sand, da der står `num` skal være skarpt større
end 0, så vi rygger ud af løkken.

Havde vi ikke dekrementeret variablen i kroppen ville betingelsen aldrig
blive falsk og vi ville have en uendelig løkke.

Herunder et eksempel hvor vi printer en masse forskellige farvede
cirkler:

``` {.javascript}
var y = 10
var x = 5
function setup() { 
 createCanvas(400, 400);
 background(220);
} 

function draw() { 
 fill(random(255),random(255),random(255))
 while(x < 390){
   x = x + 10;
   ellipse(x, y, 10 ,10);
 }
 if(x >= 390){
  x = 10
  y = y + 10
 }
}
```

Koden illustrerer, at vi kan have lige så mange instruktioner i kroppen,
som vi ønsker. Vi kan sågar have betinget udførsel eller løkker inde i
løkker. Løkker kan med andre ord blive ret kompliceret. Når en løkke
konstrueres så prøv at undgå unødig kompleksitet.

### for-løkken

Herunder printer vi tallene fra 1 til 100 vha en for-løkke:

``` {.javascript}
for (let i = 1; i < 101; i++) {
  console.log(i);
}
```

Vi kan læse for-løkken således i ovenstående eksempel: Fra i lig med 1
til i mindre end 101 skal i printes og for hver gennemgang af løkken (en
såkaldt iteration) skal vi inkrementere i med 1. Dermed bliver i heller
ikke ved med at være mindre end 100.

Start og slut og vejen hertil kan bestå af både simple men også mere
komplekse udtryk. Typisk bruges for-løkken, når vi skal itererere over
et bestemt og velkendt interval.

Herunder tegner vi en lang række linjer og rektangler vha af nogle
for-løkker:

``` {.javascript}
let y;
let num = 14;

function setup() {
  createCanvas(720, 360);
  background(102);
  noStroke();

  // Draw white bars
  fill(255);
  y = 60;
  for (let i = 0; i < num / 3; i++) {
    rect(50, y, 475, 10);
    y += 20;
  }

  // Gray bars
  fill(51);
  y = 40;
  for (let i = 0; i < num; i++) {
    rect(405, y, 30, 10);
    y += 20;
  }
  y = 50;
  for (let i = 0; i < num; i++) {
    rect(425, y, 30, 10);
    y += 20;
  }

  // Thin lines
  y = 45;
  fill(0);
  for (let i = 0; i < num - 1; i++) {
    rect(120, y, 40, 1);
    y += 20;
  }
}
```

Vær i øvrigt opmærksom på forskellen ved brug af let og var i
for-løkker. Herunder et eksempel til illustration med var:

``` {.javascript}
var i = 5;
for (var i = 0; i < 10; i++) {
  // nogle instruktioner
}
// i er 10
```

Og her et med let:

``` {.javascript}
let i = 5;
for (let i = 0; i < 10; i++) {
  // nogle instruktioner
}
// i er 5
```

### Kom ud af en løkke før tid ved brug af `break`

Der kan være tilfælde hvor vi gerne vil ud af en løkke før tid. Her kan
vi bruge kommandoen `break` i løkkekroppen. Herunder et eksempel:

``` {.javascript}
function setup(){
  textsize(20)
  for (let i = 0; i < 100; i++) {
    if (i==50 ) { 
      break; 
    }
    text(i,random(width),random(heigth))
  }
}
```

I koden bruger vi break, når variablen i bliver 50.

Vi kan bruge `break` både når vi bruger `for`- og `while`-løkken. Her et
tilsvarende eksempel med `while`:

``` {.javascript}
function setup(){
  textsize(20)
  let i=100
  while(i>0) {
    if (i==50 ) { 
      break; 
    }
    text(i,random(width),random(heigth))
    i=i-1
  }
}
```

Vi kunne også være i et tilfælde, at vi har en løkke inde i løkke.
Bruges `break` i den inderste løkke ryger vi kun ud af den inderste
løkke. Herunder et eksempel der tegner en række cirkler på skærmen:

``` {.javascript}
let ypos = 100;
let yskridt = 20;
let xpos = 100;
let xskridt = 20;
function setup() {
  createCanvas(500, 500);
  noLoop(); //
}

function draw() {
  background(250);
  fill(150,50,50);
  noStroke();
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 9; i++) {
      ellipse(xpos+(xskridt*i), ypos+(yskridt*j), 20, 20);
      if(i==5) break
    }
  }
}
```

### Springe en iteration over med `continue`

I visse tilfælde kan det være relvant også at springe en iteration af
løkken over. Det kan man gøre med nøgleordet `continue`.

Herunder eksempel med `for`-løkken:

``` {.javascript}
function setup(){
  textsize(20)
  for (let i = 0; i < 10; i++) {
    if (i==5 ) { 
      continue; 
    }
    else{ 
      text(i,random(width),random(heigth))
    }
  }
}
```

og tilsvarende for `while`-løkken:

``` {.javascript}
function setup(){
  textsize(20)
  let i=0
  while(i<10){
    if(i==5){
      continue
    }
    else{ 
      text(i,random(width),random(heigth))
    }
  }
}
```

Begge eksempler tegner tallene 0 til og med 9 dog eksklusiv tallet 5.

## Arrays

Ofte er det rart at kunne opbevare mere end en værdi i en variable. Tænk
eksempelvis på en liste af navne, et sæt af tal eller noget helt tredje.
I den sammenhæng er arrays også kaldet lister en særdeles god
konstruktion at kende. Man erklærer en array/liste på samme måde som en
variable, men man indfører firkantede parenteser for at markere, at der
er tale om et array/liste. Herunder en generel definition:

``` {.javascript}
let liste = [element 0,element 1,element 2, ...]
```

Her er to ting der er særdeles vigtige at bemærke:

-   Hvert element i listen er adskildt af et komma. Bemærk at elementer
    kan både være tal, strenge, boolske værdier og meget andet. Det kan
    sågar være en blanding af disse.
-   Hvert element i en liste har en adresse i form af et heltal.
    Adresserne kaldes også index. Det første element i en liste har
    adresse/index 0, det andet har adresse/index 1, det tredje har
    adresse/index 2 osv. Disse index bruges til at tilgå de enkelte
    elementer i listen.

Herunder først nogle eksempler på erklæring af nogle forskellige lister
med forskellige typer af data:

``` {.javascript}
let talListe = [4,7,2,9,5]
let tekstListe= ["Marianne", "Anders", "Steen", "Peter"]
let boolskListe = [true, false, true, true, true,false]
let blandetListe = ["hej", 5, true, 6.7]
```

Dernæst prøver vi nu at tilgå nogle elementer i de fire lister:

``` {.javascript}
console.log(talListe[0]) //printer 4
console.log(tekstListe[1]) //printer "Anders"
console.log(boolskListe[2]) //printer true
console.log(blandetListe[3]) //printer 6.7
```

Som læseren måske allerede tænker, så kan det gøres smartere, hvis vi nu
eksempelvis ønsker at printe alle navne i tekstlisten. Vores
løkke-konstruktioner bliver brugbare her:

``` {.javascript}
for(let i = 0;i<tekstListe.length;i++)
{
  console.log(tekstListe[i])
}
```

I tilfældet her betyder tekstListe.length antallet af elementer i
listen. Bemærk vores løkker løber til skarpt mindre end længden af
listen, da listers første element har index 0.

Herunder et eksempel hvor vi benytter `while`-løkke i kombination med
betinget udførsel.

``` {.javascript}
let i = 0
let min = talListe[0]
while(i<talListe.length)
{
  if(talListe[i]<min)
  {
    min = talListe[i]
  }
}
console.log(min) // hvad mon der printes?
```

### Operationer på arrays

Der findes en lang række forskellige operationer man kan udføre på
lister. Herunder vil vi kort berøre nogle af de vigtigste.

Vi kan tilføje ny elementer til et array ved at bruge metoden `push`:

``` {.javascript}
array.push(element 1, element 2,...)
```

Vi behøver ikke give push mere end et element, men vi kan give den lige
så mange vi har lyst til. Elementer tilføjes altid bagerst når vi bruger
`push`. Bemærk at metoden ændre på den oprindelig liste.

``` {.javascript}
//tilføjer 3 til sidst i listen, så den ser således ud [4,7,2,9,5,3]
talListe.push(3) 
//tilføjer "Michael" og "Suzanne" til sidst i listen, så den ser således ud ["Marianne", "Anders", "Steen", "Peter", "Michael", "Suzanne"]
tekstListe.push("Michael", "Suzanne") 
```

Tilsvarende findes `pop` der altid fjerner det bagerste element i
listen:

``` {.javascript}
array.pop()
```

Metoden fjerner altid elementer bagerst i listen. Bemærk at metoden
ændre på den oprindelig liste.

``` {.javascript}
tekstListe.pop()  // "Suzanne" er fjernet
tekstListe.pop() // "Michael" er fjernet
talListe.pop()  // tallet 3 er fjernet
```

Hvis vi ønsker at fjerne det første element i arrayet kan vi bruge
`shift`:

``` {.javascript}
tekstListe.shift() // består herefter af ["Anders", "Steen", "Peter"]
talListe.shift() // består herefter af [2,9,5]
```

Tilsvarende kan vi tilføje elementer forrest i listen ved brug af
`unshift`:

``` {.javascript}
array.unshift(element 1, element 2,...)
```

Vi behøver ikke give push mere end et element, men vi kan give den lige
så mange elementer, som vi har lyst til. Elementer tilføjes altid
forrest når vi bruger `unshift`. Bemærk at metoden ændre på den
oprindelig liste.

``` {.javascript}
tekstListe.unshift("Martin","Paul") // består herefter af ["Martin", "Paul", "Anders", "Steen", "Peter"]
talListe.unshift(4) // består herefter af [4,2,9,5]
```

Vi har også mulighed for at udvælge en delmængde af elementerne i
arrayet ved at bruge `slice`:

``` {.javascript}
array.slice(start, slut) 
```

Her angiver `start` og `slut` index på hvor elementer skal udvælges. Som
standard er `start`sat til 0, så den kan reelt helt undlades.
Operationen returnerer et ny array bestående af de udvalgte elementer,
men ændrer ikke den oprindelige liste.

Heruder et par eksempler på vores

``` {.javascript}
let nyListe
nyListe = tekstListe.slice(0, 2) //nyListe bliver til ["Martin","Paul"]
nyListe = tekstListe.slice(3)  //nyListe bliver ["Steen","Peter"]
```

Da operationen ikke ændrer på den oprindelige liste er det vigtigt at
gemme en reference til den nye liste i en variable.

### Flerdimensionelle arrays

Ligesom arrays kan opbevare tal, strenge, boolske værdier og mange
flere, så kan de faktisk også opbevare andre arrays, der igen kan bestå
af nye arrays, som igen kan bestå af nye arrays osv. Dybden i antallet
arrays kaldes også dimensionen af et array. Typisk er det for
overskueligheden og læsbarhedens skyld en god ide ikke at have for mange
dimensioner på sin arrays. I det følgende vil vi primært arbejde med
to-dimensionelle arrays. Herunder et eksempel på et to-dimensionelt
array:

``` {.javascript}
function setup() {
  createCanvas(400, 400);
  //2-dim array med 3 tal i det inderste array svarende til
  //centrum (x,y) og radius r
  //Eks første array beskriver en cirkel med centrum i (50,50) og radius lig 30
  let cirkler = [[50,50,30],[100,120,80],[250,120,100]]
  
  // til gå anden cirkels koordinater og radius
  let x1 = cirkler[1][0]
  let y1 = cirkler[1][1]
  let r1 = cirkler[1][2]
  // Tegne cirkler med en for-løkke
  for(let i = 0;i<3;i++)
  {
        circle(cirkler[i][0],cirkler[i][1],cirkler[i][2])
  }
}
```

Bemærk måden vi refererer til flerdimensionelle arrays er igen ved brug
af firkantede parenteser. Første firkantede parenteser refererer til
index i det ydre array, der opbevarer en samling af indre arrays som
beskriver nogle cirkler, mens de næste firkantede parenteser refererer
til de konkrete cirkler.

## Øvelser

Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 7
samt 13. til 18. Derudover kan det anbefales at lave et af projekterne.

1.  Forklar hvad følgende kode gør:

``` {.javascript}
function setup() {
  let i = 0
  createCanvas(400, 400);
  while(i<100)
    {
      let x=random(400)
      let y=random(400)
      let r = random(100)
      circle(x,y,r)
      text(i,x,y)
      i=i+1
    }
}
```

2.  Omskriv koden i opgave 1, så den benytter en `for`-løkke. Udvid
    herefter en af de to løkker, så cirkler tegnes i venstre halvdel
    hvis i er lige, og hvis i er ulige tegnes cirkler i højre halvdel.
3.  Brug en `for`-løkke til at tegne de lige tal mellem 0 og 100
    tilfældige steder på skærmen med farven rød.
4.  Brug en `while`-løkke til at tegne de ulige tal mellem 0 og 100
    tilfældige steder på skærmen med farven blå.
5.  Tegn en cirkel i centrum og dernæst en ny cirkel, som er en smule
    større men med samme centrum. Gør det 30 gange ved brug af både for
    og while. Det er ikke forventet at du laver en animation. Overvej
    forskellen på løkker og draw. Vi opfordrer at du overvejer at skrive
    koden i setup eller skriver `noLoop()` i setup, hvis du vil skrive
    koden i draw.
6.  Tegn 10 forskellige ellipser forskellige steder på skærmen både ved
    brug af while og for.
7.  Overvej hvad følgende kode gør:

``` {.javascript}
function setup() {
  createCanvas(400, 400);
  let wordcloud =["Javascript","Python","C++","C","C#","Julia","Java","Go","R","Basic"]
  for(let i = 0;i<wordcloud.length;i++)
    {
      text(wordcloud[i],random(400),random(400))
      i=i+1
    }
}
```

8.  Tegn 10 forskellige rektangler forskellige steder på skærmen både
    ved brug af while og for. Farvelæg dem med hver sin farve.
9.  Tegn 10 vandrette linjer, der løber henover skærmen. Tegn 10
    lodrette linjer, der løber henover skærmen i dobbelt så hurtigt som
    den vandrette linje.
10. Tegn 10 tilfældige punkter på dit canvas i 10 forskellige farver.
11. Opret et kanvas 800 bredt og 800 langt. Lav et skakbræt.
12. Konstruer en vandret linje i midten og tegn vha løkker 10 rektangler
    der ligger på den linje. Prøv at varierer længden af disse.
13. Herunder ses et eksempel på en løkke inde i en løkke. Hvad gør
    koden?

``` {.javascript}
let angle =0;
let x = 50;
let y= 50; 

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink"); 
  noStroke(); 
}

function draw() {
  background("yellow");
  translate(x,y)
  rotate(angle);
  ellipseMode(CENTER);
  
  x=x+2
  angle = angle + 4
  for (var row=3; row <= width; row = row + 50){
    for (var col=3; col <= height; col = col + 50){
        ellipse(row,col,20,20);
    }
  }
}
```

14. Hvad gør følgende kode? Prøv den gerne af i praksis og juster på de
    enkelte dele i løkken:

``` {.javascript}
function setup() {
  createCanvas(720, 400);
  background(200);
  translate(100, 100);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/4);
  }
}
```

15. Lav en løkke, der summer de første 100 tal og printer dem i
    konsollen.
16. Lav en liste med 10 selvvalgte navne. Lav en ordsky på kanvas af
    navnene. Jo flere karakterer et navn består af, jo større skrift
    skal teksten være.
17. Lav en løkke, der tilføje de lige tal i en liste og de ulige tal i
    en anden liste. Skriv de lige tal tilfældige steder i højre side af
    kanvas og de ulige tal, tilfældige steder, i venstre side af kanvas.
18. Betragt listen \[7,4,5,6,9,1,2,8,3,10\]. Skriv et program, der
    finder det største element i en liste, printer det i konsollen og
    fjerner det fra listen. Gentag denne procedure (gerne med en løkke
    inde i en løkke) indtil listen er tom. Brug evt. en eller flere af
    operationerne `push`,`unshift`,`pop`,`shift`,`slice`. Hvad har du
    opnået
19. Tegn en masse linjer der roterer om det samme centrum vha af løkker.
20. Konstruer et koordinatsystem med midten af skærmen som centrum. Tegn
    graferne for en selvvalgt ret linje, en andengradsfunktion,
    kvadratrodsfunktionen, den reciprokke funktion samt cos og sin.
    Herunder nogle eksempler på brugen af matematik i javascript:

``` {.javascript}
  Math.PI;            // returner 3.141592653589793
  Math.round(4.7);    // afrunder til nærmeste hele tal dvs. returner 5
  Math.round(4.4);    // afrunder til nærmeste hele tal dvs. returner 4
  Math.pow(8, 2);      // potens -  returnerer 64 = 8^2
  Math.sqrt(64);      // kvadratrod - returnerer 8 = 8^1/2
  Math.abs(-4.7);     // numerisk værdi - returner 4.7
  Math.ceil(4.4);     // runder op - returner 5
  Math.floor(4.7);    // runder ned - returner 4
  Math.cos(0 * Math.PI / 180);    // returner 1 (cos(0 grader))
  Math.sin(90 * Math.PI / 180);     // returns 1 (sin(0 grader))
  //man kan også bruge radians(grader), som konverterer grader til radianer
```

21. Tegn en tændstiksmand et sted til venstre på skærmen og en figur til
    højre for. Når du trykker på tasten K (for kast) sendes en
    cirkelformet genstand afsted ved en kasteparabel. Tegn banekurven og
    undersøg om genstanden rammer figuren til højre.
22. Betragt følgende kode. Hvad gør den?. Hvad sker der med arrayet \[4,
    3, 5, 2, 1\]?:

``` {.javascript}
let tal = [4, 3, 5, 2, 1]
let i = tal.length ‐ 1;
let antalSammenligninger = 0;
while (i >= 1) {
    for (var j = 0; j < i; j++) {
      x = tal[j];
      y = tal[j + 1];
      antalSammenligninger += 1;
      if (x > y) {
        tal[j] = y
        tal[j + 1] = x
      }
    }
    i ‐= 1;
}
console.log("Færdig. Der blev foretaget", antalSammenligninger, "sammenligninger");
console.log(tal);
```

Hvor mange sammenligninger ville der mon blive foretaget, hvis arrayet
bestod af $n$-elementer? 23. Betragt følgende kode og beskriv hvad der
sker:

``` {.javascript}
function setup() {
  createCanvas(400, 400);
  let cirkler = []
  let antalcirkler = 20   
  for(let i = 0;i<20;i++)
  {
    let x1 = random(400)
    let y1 = random(400)
    let r1 = random(100)
    cirkel = [x1,y1,r1]
    cirkler.push(cirkel)
    circle(x1,y1,r1)
  }
}
```

Skriv noget kode der identificerer om der er nogle af cirklerne som
overlapper. Lav en ny liste for hver cirkel, der rummer index på de
cirkler, som overlapper. Bemærk to cirkler overlapper hvis afstanden fra
de to centre er mindre end summen af deres radier.

## Projekt: Opsparing eller aktier?

Kapitalfremskrivningsformlen (også kendt som renteformlen) er givet ved:

$$
K_n = K_0 * (1+r)^n.
$$

Hvor $K_0$ er startkapitalen, $r$ er renten, $n$ antal terminer og $K_n$
er kapitalens størrelse efter $n$-terminer.

Forestil dig nu, at du har et beløb på 50.000 kr. Du kan nu vælge at
sætte dine penge til en 0.5% i DanmarksBanken eller investerer dem i
aktier. Globalt har aktier de seneste 30 år givet ca. 7% i
gennemsnitligafkast om året. Skriv et program, der beregner termin for
termin (altså år efter år), hvor stor kapitalen bliver. Vha. beginShape
og vertex ønskes en graf, der illustrerer væksten. Farvelæg de to kurver
med to forskellige farver.

Bemærk i øvrigt, at 0.5% er meget højt sat :-).

## Projekt: Talrækker

Lige siden opdagelsen af pi, har man været interesseret i at bestemme pi
med flest mulige decimalers nøjagtighed. I det følgende skal I
konstruere en række funktioner, der beregner forskellige tilnærmelser af
pi.

Den første og letteste at implementere er "Leipniz sum" der konvergerer
mod en kvart pi, men så er det jo bare at gange med fire:
$$\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = \frac{1}{1} - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} - \cdots.$$

1.  Skriv en funktion, der givet $n$ beregner de første $n$ led i
    ovenstående alternerende sum. Husk at du kan skrive ud til konsollen
    vha. kommandoen (console.log). Et skelet til funktionen ses
    herunder:

```{=html}
<!-- -->
```
    function computeLeipniz(i)
    {
        
      //return summen af de i-led
    }

2.  Prøv herefter at skrive en tilsvarende funktion, der implementerer
    Newtons formel:
    $$\pi = \dfrac {3 \sqrt 3} 4 + 24 \cdot (  {\dfrac 2 {3 \times 2^3} - \dfrac 1 {5 \times 2^5} - \dfrac 1 {28 \times 2^7} - \dfrac 1 {72 \times 2^9} - \dfrac 5 {704 \times 2^{11} } - \dfrac 7 {1664 \times 2^{13} } - \cdots})$$

3.  Prøv endelig Ramanujans formel:
    $$\frac{1}{\pi} = \frac{2 \sqrt 2}{99^2} \sum_{k=0}^\infty \frac{(4k)!}{k!^4} \frac{26390k+1103}{396^{4k}}$$

## Projekt: Minigolf

Konstruer en simpel minigolfbane med en firkantet ramme. Evt. med mulige
forhindringer i form af rette linjer. Placer en golfbold et sted og send
den afsted med konstant fart. Beregn og tegn banekurven, der gerne
skulle bestå af rette linjer eftersom indgangsvinkel er lig med
udgangsvinkel.

# 6. Funktioner

Funktioner kan betragtes som små afsluttede programmer i programmet. De
kan tage input og returnere output, men behøver ikke at gøre nogle af
delene. De er helt centrale i forhold til at skabe mere overskuelig og
læsbar kode. Det understøtter nemmere og hurtigere fejlretning, hvis man
kan lokalisere en evt fejl i en bestemt funktion fremfor hele
programmet.\
Ydermere understøtter funktioner højere grad af genbrugelighed af ens
kode, hvilket er essentielt i forhold til at øge ens produktivitet som
programmør. Vi finder nemlig ofte ud af, at selvom vi laver forskellige
løsninger på forskellige problemer, så går mange af de samme
udfordringer igen. Endelig muliggør funktioner også i højere grad at
distribuere arbejdet ud, så flere mennesker kan arbejde på samme program
og man får nemmere ved at dele sine kode med andre, så de kan få gavn af
ens arbejde. Funktioner er med andre ord et helt essentielt værktøj i
enhver programmørs værktøjskasse.

## Konstruktion af en funktion

Vi har allerede set flere eksempler på hvorledes funktioner kan
konstrueres. Bare tænk på `setup` og `draw`. Herunder en definition af
funktionsbegrebet:

``` {.javascript}
 function navn() //funktionshoved
  {
    //instruktioner -  funktionskrop
    //...
    //...
  }
```

`navn` skal erstattes med navnet for en funktion. Det er vigtigt med
sigende funktionsnavne og være opmærksom på, at der er forskel på små og
store bogstaver. Det letter læsbarheden og forståelsen af programmets
funktionalitet, hvis man har tildelt sine funktioner nogle navne der
både er konsistente og fortæller noget om hvad funktionen gør.
Parenteserne skal sættes uanset hvad. Vi skal senere se hvorfor de er
relevante.

Herunder en funktion, der printer lidt tekst ud:

``` {.javascript}
function sayHello() {
  console.log('Hej Henrik');
  console.log(`Hvordan går det?`)
}
sayHello(); // kalder funktionen 
```

Når funktionen kaldes ved sit navn, så afvikles de instruktioner, som
står i funktionens krop.

Herunder et lidt mere avanceret eksempel:

``` {.javascript}
function fib(){
    N = 10
    numbers = []
    let a = 0
    let b = 1
    while(numbers.length < N)
    {
        a = b
        b = a + b
        numbers.push(a)
    }
    console.log("Fibonacci tal" , numbers)
}
```

Funktionen returner en liste af de 10 første fibonacci tal (en talfølge
som starter med 0, 1 og næste tal er så summen af de to foregående tal).

## Konstruktion af en funktion med parametre og argumenter

Vi nævnte i starten, at funktioner minder lidt om små programmer i
programmet. De kan ligesom programmer og så tage et input. Bl.a. i form
af en eller flere variable/lister eller lignende. Herunder en generel
definition:

``` {.javascript}
 function navn(x1, x2, x3, …,xn) //funktionshoved
  {
    //instruktioner -  funktionskrop
    //...
    //...
  }
```

Her angiver x1, x2, x3, ..., xn argumenter eller input til funktionen.

Her kommer et indledende eksempel:

``` {.javascript}
let myName = 'Henrik';
function sayHello(name) {
  console.log('Hello ' + name + '!');
}
sayHello(myName); // kalder funktionen med argumentet 'Henrik'
```

Bemærk, at når man har en konkret værdi, der evt er gemt i en variable,
kaldes parameteren for argument i kommentaren. Parameter og argument
blandes ofte sammen, men man bør være opmærksom på, at en inputvariabel
i en funktionsdefinition kaldes en parameter men ved udførselspunktet,
når den får en faktisk værdi kaldes denne et argument (eller formel
parameter).

Herunder en ny variant af vores fibonacci-funktion, som giver mulighed
for at variere hvor mange tal vi ønsker at få printet ud:

``` {.javascript}
function fib(N){
    numbers = []
    let a = 0
    let b = 1
    while(numbers.length < N)
    {
        a = b
        b = a + b
        numbers.push(a)
    }
    console.log("Fibonacci tal" , numbers)
}
//kald til fib
fib(10)
fib(20)
fib(30)
```

Fremfor at definere a og b inde i funktion kan vi give funktionen nogle
standard værdier, som kan ændres ved et evt kald til funktionen.
Herunder en variant af fibonnaci-funktionen, der giver mulighed for at
ændre på de første to værdier i talfølgen ved at ændre på funktionens
parametre:

``` {.javascript}
function fib(N,a=0,b=1){
    numbers = []
    while numbers.length < N:
        a = b
        b = a + b
        numbers.push(a)
    console.log("Fibonacci tal" , numbers)
}
//kald til fib
fib(10) // printer de 10 første fibonnaci tal med start værdierne 0 og 1
fib(20,1,3) // printer de 20 første fibonnaci tal med start værdierne 1 og 3
fib(30,0,7) // printer de 30 første fibonnaci tal med start værdierne 0 og 7
```

## Returnere i en funktion

Indtil nu har vi enten printet i funktionen eller bare ændret på nogle
værdier. Ofte ønsker man at få et output fra funktionen, som man kan
gemme i anden variable eller lignende til senere brug.

Til det bruges nøgleordet `return`, som samtidig sørger for at vi
returnerer fra funktionen:

``` {.javascript}
function beregnKvadrat(x) {
  return x * x;
}
const resultat = beregnKvadrat(4); // returner 16
console.log(resultat); // printer '16' til konsolen
```

Det at returnere betyder populært sagt, at vi kvitter funktionen hvorfor
linjer skrevet efter en `return` aldrig vil blive udført.

Eller vores foregående eksempel med navn:

``` {.javascript}
function sayHello(name) {
  console.log('Hej ' + name + '!');
  return name;
}
let name = sayHej('Henrik'); // kalder funktionen med argumentet Henrik
```

Her gemmer vi resultatet fra funktionen ud i en variable. Bemærk det er
med vilje, at vi har givet variablen samme navn (altså `name`). Det er
for at indikere, at parametrenavne kun er lokalt tilgængelige i
funktionen, så `name` i kroppen er en anden variable end den vi samler
returværdien op i. Undervejs i funktionen skriver vi i øvrigt til
konsollen. Det kan man altid gøre, men så snart vi kalder `return` så
returnerer vi fra funktionen.

Vi kan også udvide vores fibonacci-funktion, så den i stedet returnerer
en liste af fibonacci tal:

``` {.javascript}
function fib(N,a=0,b=1){
    numbers = []
    while (numbers.length < N){
        a = b
        b = a + b
        numbers.push(a)
    }
    return numbers
}
//kald til fib
L= fib(10) // opsamler de 10 første tal i listen L
```

## Input fra mus, tekstfelter og knapper ved brug af funktioner

Funktioner kan være særligt gode i forbindelse med at håndtere input fra
forskellige enheder. Det skal vi se eksempler på herunder.

Herunder en funktion, som håndtere input fra tastatur:

``` {.javascript}
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}
```

Der er i øvrigt en lang række keycodes eksempelvis: BACKSPACE, DELETE,
ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW,
DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.

Hvis du gerne vil kende forskel på små og store bogstaver så kan du
bruge keyTyped():

``` {.javascript}
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyTyped() {
  if (key === 'a') {
    value = 255;
  } else if (key === 'b') {
    value = 0;
  }
}
```

En anden relevant funktion i forbindelse med tastaturtryk kunne være når
man frigiver trykket på en tast. Her bruges funktionen ´keyRelased()\`.

Herunder et eksempel på hvordan man laver en funktion, der håndterer at
der trykkes på en knap, som oprettes med den indbyggede funktion
`createButton('Tekst på knappen')`:

``` {.javascript}
let button;
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(changeBackGround); //kald til funktionen
}

function changeBackGround() { 
  let val = random(255);
  background(val);
}
```

I det følgende bruger vi funktioner til at håndtere tekst fra et
tekstfelt og som efterfølgende printer "hello" samt navnet ud:

``` {.javascript}
let input, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');
}
```

## Øvelser

Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 10.
Lav desuden gerne et af projekterne.

1.  Lav først en funktion, der printer summen af tallene 2 og 3. Udvid
    funktionen, så den kan printe summen af to vilkårlige parametre a
    og b. Afprøv funktionen på både tal og strenge. Hvad bliver
    resultatet?
2.  Lav en funktion der konstruerer en gul cirkel ud fra tre parametre,
    x, y og radius.
3.  Lav en funktion der givet to cirkler i form af centre og radier som
    parametre returnerer sand eller falsk afhængig af om de overlapper
    hinanden.
4.  Lav en funktion, der undersøger om man med venstre mus trykker på en
    cirkel, der er konstrueret
5.  Lav en funktion der konverterer mellem grader og radianer.
6.  Lav en funktion der som input tager tre sidelængder og efterfølgende
    konstruerer en trekant med de vinkler og angivelser af
    sidelængderne, som beregnes ved brug af de trigonometriske
    funktioner.
7.  Lav et simpelt hang-man spil, der tegner mere og mere af en hængende
    mand hvis man gætter forkert bogstav på et predefineret ord.
8.  Lav et program der har en funktion som tager et tal i et tekstfelt
    som input og så genererer de n første fibonacci tal i konsollen.
    Udvid eventuelt med en funktion, der kan genererer den gyldne spiral
    (baseret på fibonacci tallene) også kendt som fibonacci spiralen.
    Sidstnævnte er ikke helt nem.
9.  Lav en funktion, der beregner BMI (Body Mass Index) og BMR (Basal
    Metabolic Rate), ud fra tal i nogle tekstfelter. Slå selv formlerne
    op.
10. Lav en funktion der kan løse 2.gradsligninger og visualiser parablen
    med skæringspunkter på x-aksen.
11. Lav Sten-saks-papir med en tæller. Når tælleren rammer 0 skal der
    tegnes en sten saks og papir, der hver får knyttet to bogstaver (til
    hver af de to spillere). Tælleren er som hjælp implementeret
    herunder - men prøv at omsætte den til en simpel funktion, der tager
    en parameter - nemlig antallet af sekunder, der skal tælles ned:

``` {.javascript}
let timer = 3;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, width/2, height/2);
  if (frameCount % 60 == 0 && timer > 0) {
   //frameCount er antal frames vist
   // timer dekrementeres automatisk i draw;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
}
```

12. Skriv en funktion, der tegner et simpelt hus på baggrund af mindst
    fem parametre. Det kunne f.eks. være placering af huset på kanvas,
    bredde, længde, farven af huset, antallet af etager, antallet af
    vinduer etc. Prøv funktionen. Du bestemmer selv formen af huset.
13. Lav en funktion, der på baggrund af mindst tre parametre tegner et
    træ. Det kunne f.eks. være placering af huset på kanvas, bredde,
    længde etc. Du bestemmer selv formen af træet.
14. Lav en funktion, der konstruerer skyer, som glider henover skærmen.
15. Sæt nu funktionerne sammen fra opgave de tre foregående opgaver, så
    du konstruerer et maleri bestående af et hus, nogler træer og skyer
    der kan bevæge sig henover himlen.

## Projekt: Lommeregner

Lav en lommeregner. Den behøver bare at kunne de helt basale regnearter
samt kvadratrod, potens, fakultet, sin, cos, tan og potens, der alle
skal implementeres som funktioner. Du skal være velkommen til at udvide
lommeregneren.

## Projekt: Kryds og bolle

I det følgende skal vi lave et simpelt kryds og bolle spil ved brug af
funktioner. Der skal som minimum være funktioner til følgende dele af
spillet: - Tegne brættet - Rense brættet/starte forfra - Undersøge om
der er en vinder eller taber - Sætte en brik - En funktioner der starter
spillet (også kaldet `main`)

Derudover må man helt selv bestemme hvordan man vil implementere spillet
og hvorvidt man vil tilføje flere funktioner. Overvej gerne undervejs
fordele og ulemper ved at bruge funktioner. \# 7. Rekursive funktioner

Rekursive funktioner betegner funktioner, som kalder sig selv i deres
funktionskrop. Dvs. det er funktioner, som er selvrefererende.
Tankegangen bag kaldes rekursion og kan være et godt værktøj til
værktøjskassen herunder til at løse bestemte typer af problemer, som
ikke nødvendigvis altid lader sig så let løse på anden vis. Ofte kan
visse problemer løses mere elegant og kompakt ved brug af rekursion. Vi
kan eksempelvis ofte omskrive funktion, der indrager iterative
strukturer såsom løkker til rekursiv variant. De typer problemer, der
lader sig løse elegant ved brug af rekursion, er ofte problemer, som kan
deles ind i mindre similære problemer. I det følgende skal vi se
eksempler på rekursive funktioner og eksempler på hvor de kan være gode
at bruge.

## Konstruktion af en rekursiv funktion

Herunder en illustration af en rekursiv funktion, hvor funktionen i dens
krop på et eller andet tidspunkt refererer til sig selv:

``` {.javascript}
 function navn() //funktionshoved
  {
    //instruktioner -  funktionskrop
    //...
    //...
    navn()
    //...

  }
```

`<code>`{=html}navn`<strong>`{=html} `</strong>`{=html}`</code>`{=html}
er her navnet på funktionen og vi gør opmærksom på, at en rekursiv
funktion sagtens kan tage et vilkårligt antal argumenter. Det er blot
undladt for at illustrere pointen bag. Det er som nævnt tidligere
vigtigt med sigende funktionsnavne og det kan være en god ide at
indikere i navnet at funktione er rekursiv.

En rekursiv funktion er typisk opbygget af et eller flere basistilfælde,
der sørger for at funktionen returner. Her returneres typisk en eller
flere trivielle eller konkrete værdier. Derudover har den rekursive
funktion selvfølgelig også pr definitionet kald til sig selv. I praksis
implementeres de typisk ved brug af if-statements.

## Rekursivitet i dagligdagen

Vores dagligdag rummer en lang række eksempler på hændelser, der kan
beskrives med rekursive funktioner. Forestil dig eksempelvis at skrive
en funktion, der beskriver hvordan en kop kaffe drikkes:

``` {.javascript}
 function drikKaffe(kop)
  {
      if(kop er tom)
        return
      else
        kop.tagEnTår()
        drikKaffe(kop)
  }
```

Her kommer et eksempel mere, der beskriver rekursivt hvordan du kommer
hjem:

``` {.javascript}
 function gåHjem()
  {
      if(hjemme)
        return
      else
        tagEtSkridt()
        gåHjem()
  }
```

Det kunne også være, at du ønsker at tælle antal mønter i en kasse. Man
kunne dele problemet ind i mindre dele. Fremfor at tælle dem allesammen
selv kunne man bede sine kammerater med at tælle den en halvdel og andre
den anden. De to halvdele kunne igen blive inddelt i to mindre dele og
talt af ens kammerater. Til sidst ender vi med kun en mønt i hver og så
kan kammeraterne returnere. Det er et eksempel på, at rekursion ofte
giver god mening at benytte, når vi kan dele problemer ind i mindre
delproblemer, som minder om hinanden.

Det kræver noget tilvænning at blive fortrolig med rekursion, så i det
følgende kommer der nogle eksempler på rekursion.

## Fakultetsfunktionen som en rekursiv funktion

Herunder et først simpelt eksempel på en rekursiv funktion, der udregner
fakultet af et tal ($n!=1*2*3*....(n-1)*n$). Vi antager i følgende, at
$n$ er et naturligt tal større end $0$.

``` {.javascript}
function factorial(n)
{
    if(n<=1) return 1 //basis tilfældet
    else return n*factorial(n-1) // rekursivt kald
}
factorial(3); // returnerer 6=1*2*3
```

Herunder illustrerer vi hvorledes kaldene til funktionen foregår for
`factorial(5)`:

``` {.javascript}
factorial(5)
=5*factorial(4)
=5*4*factorial(3)
=5*4*3*factorial(2)
=5*4*3*2*factorial(1)
=5*4*3*2*1
=120
```

Det kan illustreres med et rekursionstræ, som kunne se således ud:

![Rekursionstræ fakultetsfunktion](../kap8/images/factree.png)

Bemærk det rekursive kald hvor vi dekrementerer værdien af n med 1. På
et tidspunkt vil funktionen blive kaldt med værdien $1$ hvorved at
funktionen returnerer. Der hvor funktionen returnerer kaldes
basistilfældet, mens der hvor funktionen kalder sig selv, benævnes ofte
som det rekursive kald.

Funktionen kunne let implementeres iterativt med en løkke, men
rekursionen giver en elegent, kompakt og let læselig løsning. Rekursion
kan være god at inddrage, når vi søger at løse nogle klassiske
matematiske problemstillinger.

## Fibonnaci talfølgen som en rekursiv funktion

Herunder endnu et eksempel. Denne gang forsøger vi at udregne det n'te
Fibonacci tal. Fibonacci talfølgen består af listen af tal, hvor det
i'te tal er summen af de to foregående tal i følgen. Vi starter altid
med 0 og 1. Dvs. $0,1,1,2,3,...$. Fibonacci talfølgen virker måske
umiddelbart uinteressant, men det viser sig, at den struktur som den
repræsenterer forekommer mange steder i naturen.

``` {.javascript}
function fibonacci(n)
{
    if(n<=0) return 0 //basis tilfældet
    else if (n==1) return 1 //andet basistilfælde
    else return fibonacci(n-1) + fibonacci(n-2) // rekursivt kald
}
fibonacci(4); // returnerer 2
```

Vi kan konstruere et såkaldt rekursionstræ, der viser hvordan
funktionskaldene foregår:

![Rekursionstræ fibonacci funktion](../kap8/images/fibtree.png)

Det fremgår af figuren hvorfor rekursive funktioner ikke nødvendigvis
altid er de mest effektive implementationer. Problemet med den rekursive
løsning er, at vi ender med relativt mange kald til funktionen, hvilket
er med til at gøre den ineffektiv. Sættes $n=50$ er vi oppe på over 2
milliarder kald til funktionen og mange af disse beregninger er
redundante forstået på den måde, at vi allerede har regnet funktionen
med det givne argument. Det ændre dog ikke på, at vi får en rigtig pæn
løsning der korresponderer nærmest en til en med den matematiske
definition.

## Det gyldne snit

I det følgende vil vi skrive et rekursivt program, der tager et heltal
input N og beregner en approksimation af det det gyldne snit (prøv gerne
at google det gyldne snit, det forekommer mange steder i naturen). Det
gyldne snit betegner et forhold eller et tal, som er lig med $1$ hvis
$N=0$ (basistilfældet) og $1+1/f(N-1)$ hvis $N>0$. Herunder kode der
illustrerer hvorledes den kan implementeres i praksis:

``` {.javascript}
function GoldenRatio(N)
{
  if(N==0) return 1
  else if(N>0) return (1+1/GoldenRatio(N-1))
  
}
```

## Renteformlen formuleret rekursivt

Renteformlen fortæller noget om hvorledes en startkapital forrentes
overtid. Den typiske måde at formulere den på er således
$$K=K_0 (1-r/100)^n,$$ hvor $K_0$ er startkapital, $n$ er antal terminer
og $r$ er renten.

Vi kan umiddelbart omformulerer denne til en rekursiv løsning således:
\* $K_0$ er lig startkapitalen dvs. basistilfældet \*
$K_{n+1} = K_n * (1+r/100)$ dvs. det rekursive kald ligger gemt her.

Vi kan formulere en løsning således

``` {.javascript}
function rentersRente(K0,n,r)
{
  if(n==0) return K0
  else if(n>0) return (1+r/100)*rentersRente(K0,n-1,r)
}
```

## Cirkler i cirkler

Her kommer et eksempel hvor der tegnes cirkler på cirkler, jo flere
gange der trykkes på canvas. Prøv at kør koden og forklar med egne ord
hvad der sker. Hvilken betydning har variablen maxDepth?

``` {.javascript}
function setup() {
  createCanvas(windowWidth, windowHeight)
  colors = []
}
maxDepth=0
function recursiveCircles(depth, x, y, side) {
  if (depth == maxDepth)
    return
  fill(colors[depth])
  circle(x, y, side)
  side /= 2
  recursiveCircles(depth+1, x-side, y-side, side)
  recursiveCircles(depth+1, x-side, y+side, side)
  recursiveCircles(depth+1, x+side, y-side, side)
  recursiveCircles(depth+1, x+side, y+side, side)
}


function mousePressed() {
  maxDepth++;
  colors.push(color(random(255), random(255), random(255)))
  recursiveCircles(0, width/2, height/2, width/2.2)
}

function keyPressed() {
  background(random(100), random(100), random(100))
}
```

## Fraktraltræer

Ved at tegne lodret linje først, dernæst vinkle to nye linjer ved enden
af den første, og fortsætte tilsvarende for enden af de to nye linjer,
skabes det vi kalder et fraktaltræ. Koden for et simpelt fraktraltræ ses
herunder. Prøv at forstå og forklar koden, og prøv herefter at
modificere den en smule.

``` {.javascript}
var angle = PI / 4;
var slider;
function setup(){
  createCanvas(400,400);
  slider = createSlider(0,TWO_PI,PI/4);
}
function draw(){
  background(51);
  stroke(255);
  angle = slider.value();
  translate(200,height);
  branch(100);
}

function branch(len){
  line(0,0,0,-len);
  translate(0,-len);
  if (len>4){
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67);
    pop();
  }
}
```

## Øvelser

Herunder en række øvelser. Som minimum bør man lave 1. til og med 8.
Gerne lav et af projekterne.

1.  Forklar hvad funktionen gør og udskriv kaldene for sum(5):

``` {.javascript}
function sum(n) {
  if (n == 0 || n == 1)
    return 1;
  if (n > 0)
    return n + sum(n ‐ 1);
}
```

2.  Skriv en rekursiv funktion, der beregner eksponenten af et ta.
3.  Skriv en funktion der rekursivt skifter mellem at addere og
    subtrahere tal i en liste. Hvis listen eksempelvis er \[5,3,1,2,4\]
    så skal funktionen udregne: 5-3+1-2+4=5.
4.  Skriv en rekursiv funktion, der tegner et kvadrat inde i et kvadrat
    inde i kvadrat indtil den når en vis dybde.
5.  Skriv en rekursiv funktion der undersøger om et tal er lige eller
    ulige
6.  Hvad gør følgende funktion. Forklar koden i detaljer:

``` {.javascript}
function recBinSearch(n, arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != n) {
    return false;
  }
  if (n === arr[mid]) {
    return true;
  } else if (n < arr[mid]) {
    return recBinSearch(n, arr.slice(0, mid));
  } else if (n > arr[mid]) {
    return recBinSearch(n, arr.slice(mid));
  }
}
```

7.  Skriv en rekursiv funktion, der undersøger om et ord er et
    palindrome. Dvs. hvorvidt det læses forfra og bagfra på samme måde.
8.  Skriv en rekursiv funktion der tegner en vandret linje, og
    nedenunder tegner samme vandrette linje, men hvor den miderste
    tredjedel er væk, fortsæt med at fjerne den miderste tredjedel
    indtil du har tegnet de første 15 linjer.
9.  Skriv en rekursiv funktion, der finder største fælles divisor af to
    tal
10. Skriv en rekursiv funktion, der returnerer alle tænkelige
    permutationer af et ord (eksempel: "abc" så er "acb" en permutation.
11. Skriv en rekursiv funktion, der beregner mindste fælles divisor
12. Skriv en rekursiv funktion der afgør om et naturligt tal er et
    primtal eller ej.
13. Skriv en rekursiv funktion, der konstruerer og visualiserer Pascals
    Trekant.\
14. Skriv en rekursiv funktion, der finder det største tal i en liste
15. Skriv en rekursiv funktion, der beregner Tribonacci rækkefølgen
    (starter med 0,0,1)
16. Udvid koden for fraktaltræer, så der dannes grønne blade for enden
    af grenene.

## Projekt: Selv-similære figurer

I følgende projekt skal du implementere visuelle repræsentationer af
forskellige selv-similære figurer. Dvs. figurer hvor et vilkårligt
udsnit af figuren ligner helheden af den samlede figur.

### Konstruer en visuel repræsentation af Cantors mængde

Cantors mængde er opkaldt efter den tyske matematiker Georg Cantor.

Det er en relativt simpel konstruktion, hvor man tager udgangspunkt i et
linjestykke. Del stykket ind i tre mindre dele og fjern det miderste
stykke. Fortsæt herefter på tilsvarende vis med de de resterende
stykker.

### Konstruer en visuel repræsentation af Kochs snefnugskurve

I Kochs snefnugskure der tredeles ethvert linjestykke i tre lige store
dele. Den miderste del fjernes og erstattes af to sider i den ligesidede
trekant. Processen gentages på hvert af de nye linjestykker.

Kochs snefnugskurve er et eksempel på en fraktal

### Konstruer en visuel repræsentation af Sierpinskis trekant

Herunder beskrives konstruktion i prosakode. Dvs. tekst der er mere
eller mindre kodenær:

1.  Start med at konstruere en ligesidet trekant. Dvs. en trekant hvor
    alle sider er lige lange (og vinkler lige store).

2.  Inddel trekanten i fire kongruente og ligesidede trekanter ved at
    bestemme midtpunkter for de tre sider i den oprindelige trekant.

3.  Fjern den miderste trekant.

4.  Gentag trin 2 og 3 for de tre resterende trekanter.

# 8. Objekter

Et vigtigt begreb i programmering og softwareudvikling i det hele taget
er de såkaldte "objekter", som vi vil introducerer i nærværende afsnit.
De spiller en central rolle i objekt-orienteret programmering (forkortet
OOP), som vel nok er den mest anvendte tilgang af professionelle
programmører og softwareudviklere.

Kort fortalt betragtes verdenen i OOP som opbygget af objekter. Objekter
kan være alt muligt fra mennesker, dyr til ting osv. Grundlæggende
gælder det for alle objekter, at de har to begreber knyttet til sig: 1.
Attributter: Der beskriver objektets nuværende tilstand. 2. Metoder:
Dvs. en form for funktioner, der kan ændre på objektets nuværende
tilstand.

Objekter indkapsler med andre ord data og funktioner. Man kan tænke på
dem som nogle containere, der ikke bare rummer statistiske værdier men
også metoder til at ændre på disse værdier. Objekter kan have relationer
til hinanden, de kan interagere med hinanden og ændre på hinandens
tilstande. Herunder en figur der illustrerer det overordnede
klassebegreb som en kapsel, der rummer metoder(eller adfærd) og
variabler (eller data/attributter): ![En klasse som en
kapsel](../kap8/images/kapsel.png)

En klasse kan også modelleres efter et såkaldt klassediagram, som er en
nem måde at skabe et overblik over klassens funktionalitet:

![En klasse som en kapsel](../kap8/images/class.png)

Som vi skal se i senere kapitler kan man tilføje rigtig megen
information omkring en klasses metoder og attributter. I det følgende
vil diagrammet blive brugt til at give en mere visuel repræsentation af
klassebegrebet, og i takt med at vi udvider vores forståelse tilføjer vi
flere informationer.

I praksis kan OOP bruges bl.a. til at sikre, at man bedre kan håndtere,
overskue og implementere den enorme og stadigt voksende kompleksitet i
programmer og systemer. Brugt rigtigt giver de ligesom funktioner pænere
løsninger, der er nemmere at forstå, nemmere at udvide og modificere men
også i højere grad at genbruge.

Til at starte med har vi fokus på at få en fornemmelse for hvordan et
objekt konstrueres og hvad de kan bruges til herunder hvorledes vi
tilføjer data og metoder samt benytter dem i praksis.

## Oprette en klasse som skabelon for et objekt

I Javascript konstrueres et objekt vha af nøgleordet "class". Vi vil
tillade at bruge klasse i stedet for class, når vi omtaler dem. Når man
opretter en klasse konstrueres en datastruktur, der rummer både data
eller egenskaber om det objekt, som klassen er en skabelon for, men også
metoder (eller funktioner), der ændrer på objektets tilstand.

Vi konstruerer en klasse ved at skrive `class` efterfulgt af navnet på
klassen. Navnet skal være i et ord. Herefter følger kroppen omkrænset af
en start og slut krølparentes:

``` {.javascript}
class "KlasseNavn"
{


}
```

Klassen er vores skabelon, som kan bruges til at konstruere eller med et
fint ord "instantiere" objekter af denne skabelon. Dvs. objekter er med
andre ord konstrueret ud fra vores skabelon.

## Klassens konstruktør initialiserer objektet

Når vi opretter et objekt dvs. en instans af klassen er vi typisk
interesseret i at indlæse nogle grundlæggende egenskaber fra start af.
Det gør vi ved brug af en såkaldt "konstruktør", som er en funktion
eller metode, der har til formål at sætte nogle bestemte værdier på
forhånd for den konkrete instans af klassen. I JS bruges nøgleordet
`constructor` (eller konstruktør på dansk). Herunder et eksempel på en
klasse som ingen argumenter tager og heller ingen værdier sætter i
konstruktøren:

``` {.javascript}
class "KlasseNavn"
{
  constructor()
  {

  }
}
```

## Multiple konstruktører og klassens attributter

Modsat mange andre sprog, så understøtter Javascript som udgangspunkt
kun en konstruktør uden mulighed for at `overloade` denne. Med dette
skal forstås, at I mange andre sprog kan man faktisk lave flere
konstruktører og skelne mellem de enkelte ved at have forskellige antal
argumenter til konstruktøren. Dette lader sig ikke umiddelbart gøre i
Javascript, men man kan i stedet gøre brug af et mindre "hack", hvor man
bruger standardværdier, og på den måde opnår nogenlunde samme
funktionalitet i praksis.

Herunder et eksempel på ovenstående hvor vi har lavet en konstruktør,
der har mulighed for at tage ingen eller op til n parametre med angivet
ved p1,..,pn :

``` {.javascript}
class "KlasseNavn"
{
  constructor(p1='',p2='',...,pn='')
  {
    this.p1 = p1
    this.p2 = p2
    ...
    this.pn = pn

  }
}
```

Ved at sætte p1,...,pn til en tom streng giver vi mulighed for at
konstruktøren kan tage op til n-argumenter. De kan initialiseres eller
undlades at initialiseres fuldstændig. Hvis vi initialiserer dem til
andre værdier end de prædefineret, tildeles variablerne i kroppen af
konstruktøren den/de ønskede værdi(er). Alternativt sætter Javascript
blot disse attributter til den tomme streng.

Variablerne i konstruktøren kaldes som tidligere nævnt også for
`attributter`. Og som angivet ovenfor er det vigtigt at understrege, at
selvom konstruktørens parametre har samme navne som attributterne, så er
der tale om to forskellige ting.

Brugen af `this.p1 = p1`,..., `this.pn = pn` betyder, at vi knytter
argumenterne givet i konstruktøren som attributter til det konkrete
objekt, som klassen er en skabelon for. `this` refererer altså til den
konkrete instans af klassen eller objektet.

## Eksempel på en klasse: Cirkel

Lad os prøve at konkretisere ovenstående ved at lave en klasse for
cirkler. Vi starter med at visualisere den i et klassediagram: ![En
klasse for en cirkel](../kap8/images/classcircle.drawio.png)

Til at starte med rummer klassen kun attributter, der skal beskrive
cirklen. Vi skal senere udvide med metoder.

En skabelon eller mere præcist en klasse for en cirkel kunne se således
ud, men det er vigtigt at understrege, at den kunne se ud på mange
forskellige måder:

``` {.javascript}
class Cirkel{
 constructor() {
   this.color = color(255);
   this.xpos = width/2; 
   this.ypos = height/2;
   this.radius = 1;
  }
}
```

Her angiver farve, position og radius nogle egenskaber ved en cirkel. De
to variable `width`og `heigth` er prædefineret variable i P5.

I det følgende har vi tilføjet konstruktøren, som vores første metode:

![En klasse for en cirkel med
konstruktør](../kap8/images/classcircleconstructor.drawio.png)

Konstruktøren kan betragtes som klassens første og meget vigtige metode,
da den konstruerer klassen som objekt og initialiserer attributterne.
Den første konstruktør tager ingen parametre, men i praksis vil det dog
være rart selv at kunne bestemme værdierne, da de naturligvis varierer
fra cirkel til cirkel. I det følgende ændres koden, så værdierne gives
med i konstruktøren:

``` {.javascript}
class Cirkel{
 constructor(colorcode=255,xpos = width/2,ypos = height/2,radius = 1 ) {
   this.color = color(colorcode);
   this.xpos = xpos; 
   this.ypos = ypos;
   this.radius = radius;
  }
}
```

Herunder et klassediagram der illustrer ovenstående: ![En klasse for en
cirkel med
konstruktør](../kap8/images/classcircleconstructorparam.drawio.png)

Hvis vi ikke angiver andet i konstruktøren, så vil de angivne variabler
blive initialiseret med de samme værdier som i den foregående
konstruktør. Meget vigtigt at gøre opmærksom på i denne sammenhæng er
dog, at konstruktøren forventer at få argumenterne i den anviste
rækkefølge, når vi opretter en konkret instans af klassen. Det vender vi
tilbage til om lidt.

Hvert objekt er en cirkel, som skal kunne have forskellige egenskaber.
Ved at bruge `this` får vi mulighed for at opbevare forskellige
attributter hos de respektive cirkler. Igen er det en god ide at tænke
på objekter som containere, der indeholder forskellige værdier.

## Oprette et objekt eller instans af klassen med nøgleordet `new`

Vi kan nu oprette objekter vha. af vores klasse. Det gør vi ved brug af
nøgleordet `new`:

``` {.javascript}
let V = new K(A)
```

Variablenavnet er repræsenteret ved "V" og skal erstattes af et sigende
navn/forkortelse for den klasse, som vi opretter en instans af. "K"
repræsenterer klassens navn, og A betegner en eller flere attributter
(adskilt af komma), som man kan give med til konstruktøren.

Herunder et eksempel der forhåbentlig giver en bedre forståelse end den
generelle definition:

``` {.javascript}
let c1;
let c2;
function setup() {
  createCanvas(400, 400);
  c1 = new Cirkel(); //vi opretter et nyt cirkel-objekt vha new (standard værdier for cirklen indlæses som attributter)
  c2 = new Cirkel(255,100,100,20); //vi opretter et nyt cirkel-objekt vha new (colorcode = 255, x = 100, y= 100, radius = 20) 
}
```

Vi har oprettet to forskellige cirkel-objekter med de to forskellige
kald til den samme konstruktør her og gemt referencer til dem i de to
variabler c1 og c2. Variablernes type er af typen "Cirkel". Vi har med
andre ord konstrueret vores helt egen type. Vi bemærk i øvrigt, at
variablerne i virkeligheden blot peger på en adresse til de to objekter.
Det er netop det vi forsøger at indikere, når vi taler om "referencer".
Herunder en illustration af ovenstående kode:

![En cirkel og instanser af
denne](../kap8/images/circleinstance.drawio.png)

## Rækkefølgen af argumenter til konstruktøren

Endelig gør vi, som vi nævnte før, opmærksom på at ved at bruge standard
værdier til at rumme forskellige antal argumenter til konstruktørerne,
er vi tvunget til at overholde rækkefølgen i argumenterne. Eksempelvis
kunne man forestille sig følgende instantiering:

``` {.javascript}
c3 = new Cirkel(100,100,20)
```

Umiddelbart ville man tror det var en cirkel magen til referencen i `c2`
men i praksis er det en cirkel med farvekoden `100` og centrum i
`(x,y)=(100,20)` og radius `1`. Man skal med andre ord være opmærksom på
rækkefølgen af ens argumenter/parametre i konstruktøren er overholdt
ellers risikerer man at blande "æbler og bananer".

I den forbindelse bør man derfor være meget bevidst om hvilke
attributter, som man i en instantiering har brug for at indlæse versus
hvilke som altid kan justeres undervejs. Tænkes eksempelvis på en cirkel
kunne man spørge sig selv, hvad er det der gør en cirkel til en cirkel?
Er det ikke i højere grad et punkt og en radius fremfor eksempelvis
farvekoden? I praksis kunne man derfor overveje helt at undlade
farvekoden som argument til konstruktøren. Den kan nemlig altid
justeres. Herunder et eksempel på en ny klasse konstruktion:

``` {.javascript}
class Cirkel{
 constructor(x,y,r) {
   this.color = color(255); // bemærk vi har valgt at give den en prædefineret farvekode 
                            // og ikke som argument til konstruktøren 
   this.xpos = x;
   this.ypos = y;
   this.radius = r;
  }
```

## Ændre attributter efter konstruktøren er blevet kaldt

Vi kan som udgangspunkt ganske let ændre på attributternes værdier i et
objekt, når vi først har instantieret det. Vi benytter følgende
overordnede struktur:

``` {.javascript}
VariableObjekt.AttributNavn = NyVærdi
```

Herunder et eksempel der illustrerer hvorledes vi kan ændre en instans
af cirklens attributter ovenfor:

``` {.javascript}
c = new Cirkel(100,100,20)
c.color = color(75) // ændre farvekoden for cirklen
c.xpos = 50 //ændre x-koordinatet til 50 i stedet for 100
```

I praksis anbefales derfor at justere på ikke essentielle attributter
(såsom farvekoden ovenfor) på denne måde.

Vi gør desuden opmærksom på, at man også kan specificere at visse
attributter er `private`. Dvs. de ikke bare lader sig ændre alle mulige
steder i koder men at de skal ændres ved brug af bestemte metoder, så vi
sikrer at de ændres korrekt. Det vender vi tilbage til i et senere
kapitel.

## Objekters metoder

Som vi nævnte før, så rummer klasser også metoder, der kan ændre på
objektets tilstand. Herunder har vi udvidet vores generelle
klassedefinition med metoder. Vi skal tænke på metoder som funktioner.
De kan tage et input og returnere et output. Dvs. reelt er der bare tale
om funktioner, men de kaldes typisk for "metoder", når de flyttes ind i
en klasse. Målet med metoder er typisk at ændre på et konkret objekts
tilstand, som typisk er beskrevet ved dets attributter. Det kunne
eksempelvis være at ændre på centrum for cirklen eller farvekoden.

Herunder først en generisk formulering af metoder:

``` {.javascript}
class "KlasseNavn"
{
  // først konstruktøren ...
  constructor(p1='',p2='',...,pn='')
  {
    //...
  }
  // erstat selv "metode1" med et sigende navn
  // kan have ingen eller op til n parametre
  "metode1"(p11,....p1n)
  {

  }
  //...
  // erstat selv "metodeM" med et sigende navn
  // kan have ingen eller op til n parametre
  "metodeM"(pm1,....pmn)
  {

  }
}
```

I ovenstående har vi for overskuelighedens skyld givet metoderne navnene
"metode1", ...,"metodeM", men i praksis bør man selvfølgelig give dem
nogle sigende navne for den kontekst man arbejder med og være opmærksom
på, at man navngiver metoderne på en ensartet måde.

Vi kan have ligeså mange metoder vi ønsker, der tager lige så mange
parametre som vi ønsker, og vi kan sågar have metoder ved samme navn,
men i såfald vil den sidst defineret blive kaldt, hvorfor vi opfordre
til at man undgår det eller løser det på samme måde som med
konstruktøren, der har nogle standard værdier.

Herunder har vi modelleret denne generelle klasse ovenfor i et generisk
klassediagram: ![Et generelt
klassediagram](../kap8/images/genereltklassediagram.drawio.png) Vi
bemærker, at diagrammet er udvidet med en indikation af hvilken type
attributterne har og hvilken type metoderne returnerer. Der er med andre
ord mulighed for at eksplicitere. Det er ikke nødvendigvis et krav og
afhænger i høj grad af hvem man kommunikerer til. Handler det om at give
et overblik så kan det undlades og omvendt, hvis det er til en
programmør. Vi vender tilbage til klassediagrammer i detaljer i kapitel
13.

Lad os konkretisere brugen af metoder i vores eksempel fra før med
cirklen. Der kan eksempelvis blive behov for at ændre på cirklens
tilstand såsom at bevæge cirklen et andet sted end på skærmen samt at
tegne cirklen:

``` {.javascript}
class Cirkel{
 constructor(x,y,r) {
   this.color = color(255); // bemærk vi har valgt at give den en prædefineret farvekode 
                            // og ikke som argument til konstruktøren 
   this.xpos = x;
   this.ypos = y;
   this.radius = r;
  }
  move(x,y){  //start på metoden move
    this.xpos = x;
    this.ypos = y;
  }
  draw() //start på metoden draw
  {
    ellipse(this.xpos,this.ypos,this.radius);
  }
}
```

Bemærk flere vigtige ting her: 1) Selvom metoder reelt bare er
funktioner, så skriver vi ikke længere function foran, når vi
implementere en metode til en klasse. 2) Metode move tager to parametre
mens draw ikke tager nogle. I metoden move bliver x og y brugt til at
sætte centrums koordinaterne for x og y, der betegnes med xpos og ypos.
3) I metoden draw udnytter vi, at klassen har indlejret en række
egenskaber, såsom centrum for cirklen, der betegnes med xpos og ypos.

Herunder viser vi nu hvordan man kan bruge klassen til at oprette og
bevæge en cirkel rundt på skærmen. Dvs. vi antager at koden ovenfor er
tilføjet over funktionen setup:

``` {.javascript}
let c;
function setup() {
  createCanvas(400, 400);
  c = new Cirkel(200,200,50); //vi opretter et nyt cirkel-objekt vha new
  c.draw();
  c.move(300,300);
  c.draw();
}
```

Bemærk her særligt konstruktionen af et nyt cirkelobjekt. Vi bruger
nøgleordet `new`. Vi giver den argumenterne 200, 200 og 50, som xpos,
ypos og radius bliver sat til jf. klasse-definitionen.

Vi tegner herefter cirklen og flytter den til position (300,300).
Afslutningsvis tegner vi den igen.

Vi kunne let konstruere lige så mange cirkler som vi nu havde lyst til
og vi skal i næste afsnit se hvordan vi kan opbevare mange af de samme
objekter uden at skulle konstruere tilsvarende ligeså mange variabler.
Men herunder følger et eksempel hvor vi har konstrueret to cirkler og
kalder deres respektive metoder:

``` {.javascript}
let c1;
let c2;
function setup() {
  createCanvas(400, 400);
  c1 = new Cirkel(200,200,50);
  c1.draw();
  c1.move(300,300);
  c1.draw();
  c2 = new Cirkel(100,100,20);
  c2.draw();
}
```

## Navngivning af klasser, metoder og attributter

For at øge læsbarheden på tværs af programmer og programmører, så
anbefales det kraftigt, at man er konsekvent i sin navngivning af
klasser, metoder og variable. I JavaScript ligesom alle mulige andre
sprog, er der en række konventioner, som man forslås at følge.

Når man navngiver en klasse skrives første bogstav med stort. Hvis
klassens navn består af flere ord benyttes `PascalCase`. Dvs. hvert nyt
ord skal starte med stort. Herunder nogle tænkte eksempler på
klassenavne der illustrer ideen:

``` {.javascript}
hund = new Hund()
hundEjer = new HundEjer(hund)
p1 = new Punkt()
p2 = new Punkt()
ls = new LinjeSegment(p1,p2)
```

For navngivningen af metoder gælder, at man opfordres til at bruge at
`CamelCase`, der modsat `PascalCase` tillader at det første bogstav i
det første ord starter med småt. Ydermere anbefales det, at det første
ord er et verbum som indikerer en handling (eller en ændring af
objektets tilstand). Herunder nogle tænkte eksempler fra de ovenfor
instantieret klasser:

``` {.javascript}
hundeNavn.sætNavn("Terry") //sætter hundens navn
console.log(hundEjer.hentNavn()) // printer "Tintin" ;-)
p1.sætKoordinater(2,3) //sætter koordinater for punkter
p2.sætKoordinater(7,4)
ls = new LinjeSegment(p1,p2) //konstruerer et linjesegment udfra punkterne
```

Attributter og variablenavne kan også erklæres med `CamelCase` som
eksemplerne ovenfor. Man bør i øvrigt være opmærksom på at for både
klasser, metoder og attributter, så gælder der, at de er "case
sensitive", hvilket betyder, at Javascript skelner mellem navne/ord,
hvor den eneste forskel er om et eller flere af bogstaverne er skrevet
med små eller store bogstaver.

Endelig bør man også være bevidst om, at man skriver på engelsk eller
dansk. Generelt vil vi opfordre læseren til at overveje hvem målgruppen
er og så i øvrigt være konsekvent og konsistent i sine valg.

## Øvelser

Herunder følger en række øvelser. Lav som minimum øvelserne 1. til 7
samt et af projekterne.

1.  Hvilke egenskaber og metoder kunne være relevante for en bil, et dyr
    og et selvvalgt objekt som den tredje. Giv mindst 3 metoder og 3
    egenskaber for hver af de tre objekter. Overvej egenskabernes
    datatyper og hvordan metoderne bør kodes. Metoderne må ikke være
    draw.
2.  Navngiv metoderne hhv. klasserne ud fra reglerne om `CamelCase` hhv.
    `PascalCase`.
3.  Implementer en konstruktør med egenskaber og metoder for hver af de
    nævnte i 1.
4.  Implementer en draw metode, der kan tegne de tre objekter. Metoden
    skal gerne inddrage nogle af de 3 egenskaber for hver af de 3
    objekter. Dvs. udfaldet af draw skal gerne påvirkes af ændringer i
    egenskaberne. Eksempelvis kan højden på en bil ændre tegningen af
    bilen.
5.  Vi laver i det følgende et simpelt spil kaldet "Afraid of
    raindrops", hvor man i bunden har en vandret linje, som ens helt kan
    bevæge sig til venstre og højre på. Fra oven regner det med
    forskellige cirkler, der oprettes i toppen af skærmen og bevæger sig
    lodret ned. Cirklerne har forskellige størrelser og bevæger sig i
    forskellige hastigheder. Hvis ens cirkel kolliderer med ens helt, så
    er det gameover. Implementer en klasse for en cirkel, der håndterer
    forskellige størrelser, placeringer, hastigheder og kollision med
    ens helt. Implementer desuden, at man kan starte forfra og hold styr
    på antallet af cirkler, som man undgår.
6.  Forklar hvad følgende kode gør vha. kommentarer:

``` {.javascript}
let b; 

function setup() {
  createCanvas(640, 360);
  b = new Ball(); 
}

function draw() {
  background(255);
  b.update(); 
  b.display();
}
class Ball {
  constructor() {
    // vi opretter to vektorer
    this.position = new createVector(random(100), random(100));
    this.velocity = new createVector(random(1,4), random(1,5));
  }
  
  update() {
    this.position.add(this.velocity);
    
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 48, 48);
  }
}
```

6.  Udvid koden i 5 med en metode, der tager en anden bold og returnerer
    hvorvidt de overlapper/kolliderer.
7.  Udvid koden i 5. så der er fem forskellige cirkler med forskellige
    radier der bevæger sig rundt med forskellige hastigheder.
    Implementer en metode der giver point hvis der bliver trykket på
    cirklerne. De små og hurtigt bevægende cirkler skal give flere
    point.
8.  Konstruer en klasse der repræsenterer en cirkel. Dvs. med
    attributter til at beskrive radius og placering samt metoder til at
    tegne og farvelægge cirklen. Udvid nu cirklen så den har en ekstra
    attribut, der beskriver farven af cirklen. Cirklen kan antage fem
    forskellige farver. Udvid draw, så den farvelægger cirklen efter den
    foreskrevne attribut.
9.  Konstruer en løkke, der genererer 100 af de nævnte cirkler fra
    forrige opgave med fire tilfældige farver. Skriv nu en funktion, der
    tager tre parametre (se nedenfor). De fire parametre består af
    listen af cirkler, koordinater. Funktionen har til opgave at finde
    farven for den nye cirkel ved at farvelæg den med den samme farve,
    som den cirkel der ligger nærmest den nye cirkel.

``` {.javascript}
function knn(cirkler, x, y, r)
{

}
```

10. Udvid koden i foregående opgave, så tager en ekstra parameter kaldet
    K, hvor K er et naturligt tal større end 1. Farvelæg nu cirklen
    efter den mest forekommende farve blandt de K nærmeste naboer til
    cirklen. Denne algoritme kaldes KNN (K-Nærmeste-Naboer) og er en
    basal, men vigtig algoritme indenfor maskinelæring og kunstig
    intelligens.
11. Konstruer en klasse der repræsenterer en fugl og lav metoder til at
    animere at den flyver og den bevæger sig vandret over skærmen. Det
    må gerne være en meget simpel fugl.
12. Udvid med en simpel rektangulær riffel i bunden af skærmen, der
    skyder ellipseformede kugler af sted i den retning, der klikkes med
    musen.
13. Konstruer en animation vha klasser, der visualiserer en række
    dominobrikker der vælter fra siden. Brug simple rektangler.
14. Konstruer en klasse for en person. Klassen skal kunne tegne personen
    (bare en tændstiksmand). Lav metoder der kan bevæge arme og ben i
    stop motion stil ved at trykke på bestemte taster.
15. Udvid 7) så man kan gå fra venstre mod højre på skærmen. Lav flere
    personer der går efter hinanden.
16. Lav en tændstiksmand, der kan danse nogle meget simple bevægelser
    vha selvvalgte taster. Brug klasser i implementeringen.
17. Lav et simpelt Pong-spil ved hjælp af klasser. En klasse til at
    repræsentere de to padler, som placeres i hver sin side. Bolden
    bevæger sig frem og tilbage, når den kolliderer med padlerne. Udvid
    Pong, så man kan have flere bolde i gang samtidig. Der er point til
    modstanderen hvis man ikke når at ramme bolden. I et af projekterne
    skal vi lave en kunstig intelligent modstander, så der har du også
    mulighed for at se hvorledes Pong kan laves. Men det er en god
    øvelse at lave det selv først.

## Projekt: Epidemi-simulation

Konstruér et lærred med maksimal størrelse vha. de globale variabler
windowWidth og windowHeight.

Lav to globale variabler x og y. Sæt x=windowWidth/2 og
y=windowHeight/2.

Lav en global variabel r og sæt den til et lille tal. F.eks. 10.

Tegn en cirkel i (x,y) med radius r. En cirkel repræsenterer et menneske
i vores simulation.

Vi skal nu have mennesket til at bevæge sig:

-   Opret to globale variabler r1 og r2 og sæt dem til tal i \]0;1\[.

-   I funktionen draw opdateres cirklens centrum til x=x+r1 og y=y+r2.

Kør programmet. Mennesket bevæger sig nu (desværre ud af lærred).

For at få mennesket til at bevæge sig tilbage, skal vi først tjekke om
personen er på vej uden for. I draw-funktion skal du implementere
følgende:

-   Hvis x-r\<0 er personen på vej ud til venstre for lærred. Sæt r1=-
    r1.

-   Hvis x+r\>maxWidth er personen på vej ud til højre for lærred. Sæt
    r1=-r1.

-   Hvis y\<0 er personen på vej ud over lærred. Sæt r2=-r2.

-   Hvis y\>maxHeight er personen på vej ud under lærred. Sæt r2=-r2.

Nu bevæger personen sig rundt på lærred så længe, at programmet kører.
Svar på følgende spørgsmål:

1.  Hvorfor indgår radius r i beregningerne ovenfor?
2.  Hvad sker der, hvis vi eksempelvis sætter r1 eller r2 til et større
    tal?
3.  Hvorfor ændrer vi fortegn på retningsvektorens ene koordinat ved
    kollision med lærreds vægge? Vink: Forstå refleksionsloven:
    https://www.mathsisfun.com/physics/reflection.html

For at få flere mennesker til at bevæge sig rundt, er det en god idé at
benytte datatypen "array" samt lidt objekt-orienteret programmering
(OOP). Da OOP er B-niveau er det helt i orden at kopiere koden nedenfor
ind øverst i script.js.

``` {.javascript}
class Menneske {
    constructor(x, y, radius, retning_x, retning_y) {
     this.x = x;
     this.y = y;
     this.radius = radius;
     this.retning_x = retning_x;
     this.retning_y = retning_y;
    }

    draw() {
     circle(this.x, this.y, this.radius*2);
    }

    collision(windowWidth, windowHeight) {
     if (this.x + this.radius > windowWidth) {
         this.retning_x = -this.retning_x;

     }
     if (this.x - this.radius <= 0) {
         this.retning_x = -this.retning_x;

     }
     if (this.y + this.radius > windowHeight) {
         this.retning_y = -this.retning_y;
     }
     if (this.y - this.radius <= 0) {
         this.retning_y = -this.retning_y;
     }
     this.x = this.x + this.retning_x;
     this.y = this.y + this.retning_y;
    }

}
```

Lav nu et globalt array, der er tomt. Kald det "mennesker".

``` {.javascript}
let mennesker = [];
```

Opret en global variabel n og sæt den til f.eks. 500. Denne variabel
betegner hvor mange mennesker, der indgår i vores simulation.

I setup-funktionen tilføjer du en for-løkke. I for-løkken skal nye
menneske-objekter oprettes og tilføjes til dit array. Det gøres med
new-operatoren:

``` {.javascript}
mennesker.push(new Menneske(random(0, windowWidth), random(0, windowHeight), radius, random(-5, 5), random(-5, 5)));
```

Bemærk: push-funktionen er en metode på array-objektet, der tilføjer nye
elementer til arrayet.

Random-funktionen sikrer bare, at menneskene indsættes forskellige
steder på lærred og bevæger sig med forskellige hastigheder.

Tilbage er bare at konstruere en for-løkke i din draw-funktion, der
tegner alle menneskene i dit array.

``` {.javascript}
for (let i = 0; i < n; i++) {
   mennesker[i].draw();
   mennesker[i].collision(windowWidth, windowHeight);
}
```

Nu bevæger n mennesker sig rundt på lærred. Du kan nu implementere
følgende funktionalitet selv:

1.  Lad hvert menneske have sin egen farve ved at tilføje en
    farve-attribut til din constructor i Menneske-klassen og
    initialisere den til en bestemt farve, når du opretter et menneske.
2.  Skrive kode i draw-funktionen, der afgør om et menneske kolliderer
    med et andet menneske. Vink: Benyt en ny for-løkke.
3.  Skriv kode, der inddeler mennesker i 3 kategorier: Smittet, usmittet
    og raske.

## Projekt: Ping-Pong AI

I nærværende skal vi lave en kunstig intelligent modstander til Pong.
Man kan vælge mange strategier. Herunder er bare nævnt nogle få stykker:
\* "Løberen": Bevæger sig efter bolden. \* "Midteren": Bevæger sig ind
til midten, når man har slået og bevæger sig først igen når modstanderen
har slået. \* "Beregneren": Forsøger at beregne banekurven for bolden og
placere sig derefter.

Projektet er rigtig sjovt, hvis man er flere om at udvikle hver sin AI,
så man kan lade dem konkurrece mod hinanden.

Start med at danne dig et overblik over koden og forstå hvad der sker.
Projektet er øvelse i at bruge klasser samt deres metoder og
attributter. Men ydermere vil det også øve dig i at læse større mængder
af eksisterende kode. Det er vigtig kompetence som programmør, da man jo
sjældent starter med at udvikle noget fra bunden men i stedet ofte tager
udgangspunkt i en eksisterende kodebase. Selve spillet og koden er
vedlagt men kan også tilgås online på
https://editor.p5js.org/henrik.sterner/sketches/0cVpDHzZU​

Herunder er koden for pong-spillet fordelt på flere filer. Husk at
inkludere filerne i din index.html (se et eksempel til sidst):

``` {.javascript}
//ball.js: Håndtere bolden og dens fysik
class Ball
{
  constructor()
  {
    this.START_SPEED = 4;
    this.x = 200;
    this.y = 100;
    this.w = 20;
    let a = random(-PI/4,PI/4)+random([0,PI]);
    this.vx = cos(a)*this.START_SPEED;
    this.vy = sin(a)*this.START_SPEED;
    this.history=[]//contains the 25 points from the last 25 frames
  }
  
  move()
  {
    this.y +=this.vy;
    this.x +=this.vx;
  } 
  
  update()
  {
    if(this.y>=height || this.y<=0)
    {
      this.vy *= -1;
    }
    let v = createVector(this.x, this.y)
    
    if(this.history.length>25)
    {
      this.history=this.history.slice((1, 26))
    }
    this.history.push(v)

  }
  reset()
  {
    this.history = [];
    this.x = 200;
    this.y = 100;
    let a = random(-PI/4,PI/4)+random([0,PI]);
    this.vx = cos(a)*this.START_SPEED;
    this.vy = sin(a)*this.START_SPEED;
  }
  show()
  {
    fill(255);
    noStroke();
    ellipse(this.x,this.y,this.w);
  }
}
```

Herefter følger koden for den menneske paddle:

``` {.javascript}
//peddle.js håndtere at man kan bevæge paddlen med tastaturet
class Peddle
{
  constructor(side,name)
  {
    this.name = name
    this.x = this.selectPosition(side);
    this.w = 20;
    this.h = 100;
    this.y = 200//height;
    this.vy = 2;     
  }

  selectPosition(side)
  {
    if(side==="Left") return 10
    if(side==="Right") return 390
  }

  update()
  {
    if(this.y>=height-50 || this.y<=50)
    {
      this.vy *=-1;
    }
  }
  change_dir(y)
  {
    this.vy = y;
  }
  // ballx, bally er boldens nuværende postition
  // ballxspeed, ballyspeed boldens velocity 
  // history er en liste af vektorer der pejer på de sidste 25 pkt bolden har været
  // Paddlex og Paddley er positionen af den anden paddle
 
  move(ballx,bally,ballxspeed, ballyspeed, history,Paddlex,Paddley)
  {
    //The runner
    this.y +=this.vy; 
  }
  show()
  {
    rect(this.x,this.y,this.w,this.h);
  }
  
}
```

Endelige følger en skabelon for AI-modstanderen.

``` {.javascript}
  //peddleAI.js
  // Det er her i peddleAI.js=> move at I skal skrive noget kode der får jeres AI til at rykke sig
  // ballx, bally er boldens nuværende postition
  // ballxspeed, ballyspeed boldens velocity 
  // history er en liste af vektorer der pejer på de sidste 25 pkt bolden har været
  // Paddlex og Paddley er positionen af den anden paddle
class PeddleAI
{
  constructor(side, name)
  {
    this.name = name
    this.x = this.selectPosition(side);
    this.w = 20;
    this.h = 100;
    this.y = 200//height;
    this.vy = random([-2,2]);  
  }

  selectPosition(side)
  {
    if(side==="Left") return 10
    if(side==="Right") return 390
  }

  update()
  {
    if(this.y>=height-50 || this.y<=50)
    {
      this.vy *=-1;
    }
  }
  change_dir(y)
  {
    this.vy = y;
  }

  
  move(ballx,bally,ballxspeed, ballyspeed, history,Paddlex,Paddley) 
  {
    //The chaser
     
    if(bally>this.y){
      this.vy = 2
      this.y = this.y+this.vy
    }
    else if(bally<this.y){
      this.vy = -2
      this.y = this.y + this.vy
    }
    
    //this.y +=this.vy; bare køre op og ned 
  }



  show()
  {
    rect(this.x,this.y,this.w,this.h);
  }
  
}
```

Efterfølgende er her sketch.js som samler de andre klasser:

``` {.javascript}
let r_p;  // right paddle
let l_p;  // left paddle
let ball;
let prev_x = 0;

let score1 = 0;
let score2 = 0;
const SPEED_UP = 1.02;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  l_p= new Peddle("Left","The Runner");
  r_p = new PeddleAI("Right","The Chaser");
  ball = new Ball();
}

function moveHuman() //left side can be moved manually using arrows
{
    l_p.vy = 0
    if(keyIsDown(UP_ARROW))
    {
      if(l_p.y<=50)
      {
        l_p.vy *=-1;
      }
      else {
        l_p.y-=2
      }
      
    }      
    if(keyIsDown(DOWN_ARROW))
    {
      if(l_p.y>=height-50)
      {
        l_p.vy *=-1;
      }
      else {
        l_p.y+=2
      }
    }
    
}
function draw() {
  background(0);
  textSize(20);
  text(l_p.name,30,50)
  text(score1,45,25);
  
  text(r_p.name,290,50)
  text(score2,340,25);

  //moveHuman()   //uncomment to move left side manually
  
  l_p.move(ball.x,ball.y, ball.vx, ball.vy, ball.history,r_p.x,r_p.y);   //changes the y value using velocity
  r_p.move(ball.x,ball.y, ball.vx, ball.vy, ball.history,l_p.x,l_p.y); //AI movement
  r_p.update(); //checks if paddle is outside border
  l_p.update(); //checks if paddle is outside border
  l_p.show();  //show the paddle
  r_p.show();   //show the paddle
  
  ball.move();
  ball.show(); 
  ball.update();
  
  //if ball goes outside
  if (ball.x>=width)
  {
    score1++
    ball.reset();
  }
  if (ball.x<=0)
  {
    score2++;
    ball.reset();
    
  }

  //detect collision
  /*
  if(ball.x>=380 && ball.y<=(r_p.y+50) && ball.y>=(r_p.y-50))
  {
    ball.vx *=-1;
    ball.vx *= SPEED_UP;
    ball.vy *= SPEED_UP;
  }
  
  if(ball.x>=20 && ball.y<=(l_p.y+50) && ball.y>=(l_p.y-50))
  {
    ball.vx *=-1;
    ball.vx *= SPEED_UP;
    ball.vy *= SPEED_UP;
  }
  */
  let dy = 50;
  
  //detect collision
  if(ball.x >= 380 && prev_x < 380 && ball.y<=(r_p.y+dy) && ball.y>=(r_p.y-dy)) {
    ball.vx *=-1;
    ball.vx *= SPEED_UP;
    ball.vy *= SPEED_UP;
  }
  
  if(ball.x <= 20 && prev_x > 20 && ball.y<=(l_p.y+dy) && ball.y>=(l_p.y-dy)) {
    ball.vx *=-1;
    ball.vx *= SPEED_UP;
    ball.vy *= SPEED_UP;
  }
  prev_x = ball.x
  
}
```

Til sidst et udsnit af html-filen. Forudsætter javascript filerne ligger
samme sted som index.html:

``` {.html}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
    <script src="peddle.js"></script>
    <script src="peddleAI.js"></script>
    <script src="ball.js"></script>
  
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

# 9. Strenge

Vi har tidligere kort introduceret strenge eller strengvariabler som
variable, der indeholder tekst, tal eller andre symboler. De spiller en
central rolle i programmering til at opbevare og operere på data,
hvorfor vi har dedikeret nærværende kapitel til at gå i flere detaljer
med dem.

## Strenge som primitive variable og objekter

Vi kan erklære streng-variable på to forskellige måder herunder både som
primitive variable og som objekter.\
Herunder eksempler på primitive streng variable ved brug af var og let:

``` {.javascript}
var string1 = "Hej med dig"
let string2 = "Hvordan har du det?"
```

Herunder eksempler på erklæring af streng variable ved brug af var og
let men hvor de konstrueres som et string objekt:

``` {.javascript}
var string1 = new String("Hej med dig");
let string2 = new String("Hvordan har du det?");
```

Den overordnede syntaks er altså:

``` {.javascript}
var val1 = new String(string);
let val2 = new String(string);
```

Bemærk der her er tale om en konstruktør til String klassen og at det
String skrives med stort S.

Javascript konverterer automatisk mellem primitive strenge og strenge
som objekter, så i praksis kan man reelt undlade at bekymre sig om det.
Men det at strenge faktisk er objekter giver mulighed for at bruge
metoder til at tilgå og operere på ens strenge.

Javascript tilbyder en lang række metoder til at operere og tilgå
strenge. Vi vil i det følgende gennemgå nogle af de vigtigste.

## Tæl antal karakterer i en streng

Ofte er det nødvendigt at finde antallet af elementer i en streng. Det
kunne eksempelvis være at undersøge om en streng, der skal udgøre et
password, har tilpas mange karakterer/tegn. Ethvert strengobjekt har en
egenskab kaldet length, så antallet af elementer kan tilgås således:

``` {.javascript}
let string1 = new String("Er du der?");
console.log("Antallet af elementer i strengen er ", string1.length)
```

Her fås $10$ som output i konsollen, da der med mellemrum og
spørgsmålstegn er ti karakterer i alt.

## Tilgå karakterne i en streng

I nogle tilfælde er det relevant at undersøge enkelte tegn i en given
streng. Hvor man i andre sprog kan betragte strenge som arrays, så er
det ikke på samme måde tilfældet i Javascript. Flere metoder eksisterer
dog til at gøre det let at tilgå enkelt elementer i en streng.

Herunder nogle metoder samt eksempler på anvendelser af dem på strengen
fra fra før:

``` {.javascript}
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

Typiske opgaver med strenge handler om at sammenkæde en eller flere
strenge. Det kaldes også med et fint ord for konkatinering. Herunder et
eksempel:

``` {.javascript}
//string1.concat(string2)
string1.concat(" Ja, jeg er her!") //returnerer 'Er du her? Ja, jeg er her!
```

## Store og små bogstaver

I visse sammenhænge kan det være relevant at konvertere strenge til
enten store eller små bogstaver. Det kan let gøres ved følgende
instruktioner:

``` {.javascript}
//string.toLowerCase() returnerer en streng der kun består af små bogstaver
string1.toLowerCase() //returner 'er du der?'
//string.toUpperCase() //returnerer en streng der kun består af store bogstaver
string1.toUpperCase() //returnerer 'ER DU DER?'
```

## Indlæse filer med tekst

Ofte er det nødvendigt at hente data ind fra et andet sted end selve
programmet. Det kunne eksempelvis være fra en tekstfil. Det gøres med
funktionen

``` {.javascript}
loadStrings(sti til tekstfilen)
```

Metoden returnerer et array af string hvor hvert element er en linje i
tekstfilen. Vær obs på at stien til tekstfilen er korrekt. Hvis
tekstfilen ligger samme sted som script-filen, så kan du reelt nøjes med
at angive hele filnavnet med efternavnet såsom ".txt" eller ".csv"
(komma seperaret fil).

Ofte er vi interesseret i at indlæse inden `setup` eller `draw`
afvikles. Det kan vi gøre ved at indsætte det i funktionen `preload()`,
som sikrer at koden afvikles inden de to andre kører.

Herunder et eksempel på hvorledes det kan gøres:

``` {.javascript}
let lines;
function preload() {
  lines = loadStrings('test.txt');
}

function setup() {
  background(200);
  text(random(lines), 30, 30, 100, 100);
}
```

Metoden `random` udvælger tilfældige elementer i et array. Dvs.
tilfældige linjer, som printes på kanvas.

Hvis man læser en "csv" fil (dvs. en kommaseperaret fil) kan det være en
fordel at bruge `loadTable()`. Herunder en forsimplet definition i den
forstand, at funktionen kan tage flere parametre, men følgende er nok de
mest typiske:

``` {.javascript}
loadTable(sti_til_fil, filtype, 'header');
```

Vi bemærker, at `header` kan undværes hvis tekstfilens kommaseperaret
kolonner ikke har nogen titel.

Herunder et eksempel der indlæser en liste af navne og id'er

``` {.javascript}
// id,navn
// 0,Martin
// 1,Michella
// 2,Michael
//...

let table;
function preload() {
  //da filen er kommaseperaret og af typen csv:
  table = loadTable('navne.csv', 'csv', 'header');
}

function setup() {
  //tæl antallet af rækker og kolonner
  print(table.getRowCount() + ' antal rækker');
  print(table.getColumnCount() + ' antal kolonner');
  print(table.getColumn('name'));
  //["Martin", "Michella", "Michael"]

  //itererer gennem tabellen
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }

}
```

## Øvelser

Herunder en række øvelser. Som minimum bør du lave 1.-4., 7.-9. samt et
af projekterne.

1.  Følgende øvelser skal træne dig i at manipulere med og operere på
    tekststrenge.
    1.  Skriv et program der konstruerer 3 tekst variabler, som rummer
        teksterne "Der var engang", " en mand som" og "boede i en spand.
        Spanden var af ler".
    2.  Sammenkæd de tre tekststrenge via variablerne
    3.  Bestem længden af hver af dem.
    4.  Undersøg det andet bogstav i hver af dem
    5.  Undersøg om to af variablerne er det samme
    6.  Skriv hele teksten som versaler
    7.  Lav en ny variable der er en delstreng af en af variablerne.
    8.  Sammenflet de tre variabler så det første bog stav er fra den
        første variable, den anden fra den anden osv.
    9.  Undersøg hvor mange forekomster af "e" der er i teksten.
2.  Herunder en række små delopgaver, hvor strenge skal undersøges og
    manipuleres:
    1.  Skriv et program, der finder alle de store bogstaver og små
        bogstaver i en streng.
    2.  Skriv et program, der finder alle mellemrum
    3.  Skriv et program, der undersøger hvor mange forskellige
        bogstaver to strenge har.
    4.  Skriv et program, der erstatter alle bogstaver "i" med "k" i en
        streng.
    5.  Skriv et program, der undersøger om en given delstreng er
        indeholdt i en anden streng
3.  Skriv et program, der tager en tekststreng indlæst i en variable.
    Teksten skal bestå af mindst 100 ord og split ordene op i en liste
    ved brug af split-funktionen.
    1.  Tæl antallet af kommaer og punktummer
    2.  Find det ord der forekommer flest gange
    3.  Lav en liste der viser hvor mange gange hvert ord forekommmer
4.  Lav en knap der genererer et 'sikkert' password. Ved sikkert
    forstås, at det skal være minimum 8 bogstaver langt samt indeholde
    både et stort og lille bogstav samt et tal. Udvid selv med et
    relevant kriterie.\
5.  Lav et tekst input felt hvor det forventes, at man indtaster et
    sikkert password. Giv brugeren besked hvis det er tilfældet eller
    ej. Ved sikkert forstås definitionen fra forrige opgave.
6.  Skriv et program, der givet en tekststreng med 10 cifre undersøger
    strengen udgør et validt CPR-NR. Bemærk valid betyder bare, at den
    overholder dag, måned og år format samt at alle 10 tegn er tal.
7.  Skriv et program, der oplister alle CPR-numre i konsollen. Du
    behøver ikke rent faktisk at printe dem alle, men skrive et program,
    der systematisk kan printe dem allesammen, hvis det fik tid nok.
8.  Skriv et program, der genererer lotto-tallene og tegner dem på
    kanvas.\
9.  Lav en bogstavsky ud fra et tekst inputfelt. Dvs. brugeren indtaster
    nogle ord/bogstaver og på baggrund heraf genereres en sky af
    bogstaverne. Jo flere gange et bogstav forekommer jo større bliver
    det vist.
10. Lav et tekstfelt og undersøg om input fra brugeren er et palindrom.
    Dvs. hvorvidt der ordet læses ens forfra og bagfra. Bemærk at det
    kan gøres ret kort ved at bruge rekursion.
11. Lav et 'Hang-man' spil eller 'gæt et bogstav', hvor et ords
    bogstaver er markeret med stjerner og ved at gætte bogstaver via et
    inputfelt, erstattes stjerne med de faktiske bogstaver. For hver
    gang der gættes forkert tegnes dele af en hængt mand. Man er også
    velkommen til at lave sin egen illustration.
12. Konstruer et array af sætninger gerne således at brugeren selv kan
    tilføje input til arrayet. På baggrund heraf skal konstrueres et
    Haiku-digt. Et Haiku-digt består af 17 stavelser fordelt på 5-7-5 i
    de tre linjer.
13. Lav to tekstfelter hvor brugeren kan indtaste tekst, der skal
    krypteres hhv tekst der skal dekrypteres. Implementer en selvvalgt
    kryptering. Det kan eksempelvis være at bytte om på rækkefølgen af
    bogstaver.
14. Lav igen to tekstfelter. Overvej og implementer en selvvalgt metode,
    der rapporterer hvor sammenlignelige de to strenge er. Dvs. en form
    for plagiatkontrol.
15. Lav to tekstfelter. Den ene bruges som kilde til at søge i efter den
    anden. Rapporter alle de steder hvor den søgte tekststreng
    forekommer i kilden. Giv mulighed for at man kan erstatte den søgte
    streng med en anden streng.
16. Lav et tekstfelt hvor brugeren kan skrive en sætning. Prøv at lav en
    simpel analyse af sætningens sentiment og rapporter hvorvidt
    sætningen er positivt eller negativt ladet.
17. Zipfs lov for forkortelser er en empirisk lov/princip, der
    foreskriver, at jo oftere et ord bruges i en tekst, jo kortere er
    ordet. Og omvendt. Jo sjældnere et ord bruges, jo længere er det
    typisk. Lav et program, der analyserer og visualiserer de 10 mest
    forekomne ord og de 10 mindst forekomne ord. Visualiser antallet af
    ord. Du vælger selv teksten men den skal indlæses fra en fil vha af
    `loadString()` metoden.
18. Brug metoden `loadTable()` til at indlæse en tabel fra en selvvalgt
    csv fil. Det kan eksempelvis være fra Danmarks Statistik eller
    lignende. Kravet er at tabellen skal have nogle kolonner med data.
    Prøv at udføre nogle beregninger på kolonnerne/rækkerne. Det kunne
    eksempelvis være fra deskriptiv statistik såsom gennemsnittet,
    hyppighed, medianen, øvre og nedre kvartiler. Det afgørende er at
    træne din forståelse af at bruge tabeller.

## Projekt: Lix-tallet

Lixtallet er et udtryk for en teksts læsbarhed. Formlen til at beregne
LIX-tallet er givet ved

$$LIX = \frac{O}{P}+ \frac{L*100}{O}, $$ hvor $O$ er antal ord i
teksten, $P$ er antal punktummer i teksten og $L$ antal lange ord (over
6 bogstaver lange).

Formlen kan altså forstås som antal ord per mellem hvert punktum lagt
sammen med procentdelen af de lange ord i teksten. Man har så følgende
skala til at vurdere LIX-tallet med:

$LIX\geq 55$: Meget svær, faglitteratur på akademisk niveau, lovtekster.

$45\leq LIX \geq 55$: Svær, f.eks. saglige bøger, populærvidenskabelige
værker, akademiske udgivelser.

$35\leq LIX \geq 45$: Middel, f.eks. dagblade og tidsskrifter.

$25\leq LIX \geq 35$: Let for øvede læsere, f.eks. ugebladslitteratur og
skønlitteratur for voksne.

$LIX < 25$: Let tekst for alle læsere, f.eks. børnelitteratur.

Lav et program, der bestemmer Lix-tallet af en tekststreng. Programmet
skal fortælle hvilket niveau teksten ligger på. Antag at du får teksten
i en string-variable.

Benyt din LIX-beregner på en selvvalgt tekst, som du indlæser. Giver
resultatet mening?

## Projekt: Blindskrift Tester

I dette projekt skal du udvikle et simpelt system til at teste hvor
hurtig man er til at skrive blindskrift. Dvs. en tekst skal rulle
henover skærmen mens man skriver og programmet skal registrere hvor
mange ord man når at taste samt hvor mange fejl, der er, indenfor et
givent tidsrum. Udvid systemet så man kan vælge forskellige typer tekst
at indtaste ud fra tekstens lixtal.

## Projekt: Benfords lov

Benfords lov (eller måske mere præcist princip) fortæller noget om
hvilke cifre, der hyppigst vil forekomme f.eks. fra lister dagligdagen,
såsom husnumre, priser, indbyggertal, længder på floder, aktiekurser
etc. Formlen er givet ved: $$P(d)=log(d+1)-log(d)$$ hvor `P` er
sandsynligheden for at det ledende tal er `d` og `log` er 10-tals
logaritmen. Herunder en illustration af Benfords lov:

![Benfords lov](../kap9/images/benford.png) Eksempelvis så siger loven,
at `1` vil forekomme seks gange så ofte som `8`.

Skriv et program der kan teste Benfords lov for forskellige data. Prøv
den af på forskellige datasæt f.eks. fra Danmarks Statistik eller data i
medierne på nettet. Du må meget gerne læse data ind via eksempelvis
`loadTable()`metoden.

## Projekt: ELIZA Chatbot - Kan Turing-testen bestås?

Chatbots er blevet enormt populære og vi møder dem alle steder, når vi
eksempelvis chatter med webshops, banker og forsikringsselskaber, så er
det første vi er i kontakt med typisk en chatbot. Chatbots kan typiske
svare på de mest almindelige spørgsmål også sende folk videre hvis det
er nødvendigt. I det følgende skal vi lave en simpel chatbot, Eliza, som
blev udviklet tilbage i 60'erne på MIT Artificial Intelligence
Laboratory af Joseph Weizenbaum.

ELIZA simulerede en samtale ved at bruge grundlæggende
mønstergenkendelse og erstatning af ord, som gav brugeren en oplevelse
af at blive forstået af maskinen, til trods for at programmet
overhovedet ikke havde nogen forståelsesramme for miljø og hændelser.

I sin helt enkle form fungerer ELIZA på følgende måde: 1. Konstruer en
prioriteret liste af nøgleord, som benyttes overfor input. 2. Anvend det
nøgleord som har højest prioritet og som eksisterer i brugerens sætning
Eksempler på nøgleord kunne være: 1. "kan jeg" → svarene 1-7 kan
anvendes 2. "kan vi" → svarene 8-11 kan anvendes 3. "du er" → svarene
12-15 kan anvendes 4. ... 5. (ikke fundet) → svarene kan 106-112
anvendes 3. Vælg tilfældigt blandt de mulige svar i 2. 3. Vi kan
efterfølgende komplicere svaret ved at indsætte den del, som kommer
efter nøgleordet. 4. Ydermere så vendes svaret således, at 1. person
(jeg, mig) erstattes af 2. person (du, dig) og omvendt.

Projektet hander nu om at implementere ELIZA i sin mest enkle form.
Implementer desuden en simpel brugergrænseflade i P5. Udvid gerne
chatbotten så meget som du nu lyster. F.eks. kan det undgås, at samme
svar for det enkelte nøgleord anvendes flere gange i træk, og der kan
indarbejdes en særlig håndtering af korte svar fra brugeren. Man kan
også inddrage andre heuristikker, såsom at chatbotten udvælger respons
fra et valg af predefineret svar. Prøv den af i praksis. Gerne på nogle
andre. Overvej om den mon kunne består Turing-testen, som handler om
hvorvidt en tredje person, der blot kigger på chatten, mon kan afgøre om
der er tale om en computer/AI eller et menneske.

# 10. Objektorienteret principper

Objekter, repræsenteret ved en klasse bestående af metoder og variable,
spiller en helt central rolle i moderne softwareudvikling. De hjælper
med at skabe struktur og systematik i nogle ofte kompliceret problemer
og processer.

I det følgende vil vi se på nogle af de centrale ideer eller principper,
der er med til at retfærdiggøre brugen af objekter i det hele taget. Vi
kigger på principperne enkeltvis, men vi gør samtidig opmærksom på, at
de skal ses i en sammenhæng. Det ene princip er i vis forstand afhængig
af, at vi benytter de andre principper.

## Indkapsling

Indkapslingsprincippet betoner, at principielt set bør mest mulig unødig
kompleksitet skjules for andre klasser. Som standard så skjuler de
fleste objekt-orienteret sprog ikke nødvendigvis data. Herunder et
eksempel på, at variabler implementeret i klasser umiddelbart let kan
tilgås andre steder i programmet:

``` {.javascript}
class Car {
  constructor(speed) {
    this.speed = speed;
  }
  setSpeed(amount)
  {
    this.speed += amount
  }
  getSpeed()
  {
    return this.speed
  }
}

function setup() {
  createCanvas(400, 400);
  const c = new Car(20)
  console.log(c.getSpeed())
  c.speed = 140
  console.log(c.getSpeed())
}
```

Indkapslingsprincippet, bruges nærmest overalt i den virkelige verden,
uden at man nødvendigvis kaldet det for indkapsling. Tænk på et produkt
af en vis kompleksitet. Det kunne være en bil, en støvsuger eller
mobiltelefon. Her bekymrer vi os ikke om hvordan bilen eller nogle af de
nævnte produkter fungerer nedenunder, men tilgår i stedet blot den
komplekse teknologi nedenunder ved brug af en simpel
(bruger)grænseflade.

Ved at skjule unødig kompleksitet undgår man bl.a. at andre klasser
ændrer eller læser data, som de ikke bør have adgang til. Man opfordres
også derved til implicit at være bevidst om de data, som er essentielle
for klassen og som bør være private for klassen. Man fordres med andre
ord til at kode op mode veldefineret grænseflader for en klasse, der
består af metoder og attributter, som er tilgængelige for andre klasser.

Herved sikres, at bruger af delsystemet ikke behøver at bekymre sig om
hvordan delsystemet rent faktisk er implementeret neden under. Vi undgår
samtidig i højere grad, at den samme kode gentages flere steder ud fra
devicen om, at hvis det er vigtigt, at to stykker ens kode holdes ens,
så bør der i praksis ikke være en kopi. I praksis gør indkapsling det
samtidig muligt, at vi i højere grad kan uddeligere det egentlige
udviklingsarbejde op til flere programmører og at vi i visse tilfælde i
højere grad kan parallellisere vores programmer til afvikling på flere
processorer/tråde for at optimere køretiden.

I praksis implementeres indkapsling ved at kontrustere metoder i
klassen, som andre klasser skal kalde for at tilgå disse komponenter.

I langt de fleste sprog implementeres indkapsling ved brug af et keyword
såsom private, som man sætter foran erklæringen af sin variable. I
Javascript bruges hashtag, `#`. Herunder et eksempel:

``` {.javascript}
class Car {
  #speed; // privat variable for klassen Car
  constructor(speed) {
    this.#speed = speed;
  }
  setSpeed(amount)
  {
    this.#speed += amount
  }
  getSpeed()
  {
    return this.#speed
  }
}

function setup() {
  createCanvas(400, 400);
  const c = new Car(20)
  console.log(c.getSpeed())
  c.setSpeed(30)
  console.log(c.getSpeed())
  console.log(c.#speed) //fejl
  c.#speed = 130 //fejl
}
```

Bemærk at de sidste to linjer i setup giver fejl. Vi kan ikke direkte
tilgå variablen \#speed. Havde vi undladt hashtag var det muligt at læse
og skrive speed variablen direkte, hvilket vi ikke ønsker er muligt. I
stedet konstrueres metoderne getSpeed hhv. setSpeed, som også kaldes for
en accessor- hhv. mutator-metode. Det er her vi implementerer muligheden
for at tilgå eller ændre variablen.

## Nedarvning

Lidt ligesom et barn arver egenskaber fra sine forældre, så handler
nedarvningsprincippet om, at klasser (kaldet børn) kan arve data og
metoder fra en forældreklasse (kaldet super).\
På den måde kan konstrueres børneklasser, som udvider de grundlæggende
egenskaber og funktionalitet fra superklassen uden at man skal kode de
samme ting flere gange.

I Javascript implementeres nedarvning ved brug af nøgleordet `extends`.
Herunder et generisk eksempel:

``` {.javascript}
class Father {
}

class Son extends Father {
}
```

Alle metoder og variable der er implementeret i `Father` er tilgængelige
i `Son`. Hvis sønnen en dag får et barn kan barnet tilsvarende og så
nedarve fra sønnen og herigennem arve fra `Father` . Man kalder også
`Father`for superklassen eller forældreklassen, mens `Son`kaldes for
børneklassen. I visse sprog kan børn arve fra multiple forældre. Dette
er dog ikke muligt i JavaScript. Ønsker man derfor at en klasse skal
arve for begge forældre er det måske bedre at samle de fælles egenskaber
i en forældreklasse.

Herunder et eksempel på hvorledes `Car`-klassen kan udvides:

``` {.javascript}
class Van extends Car {
  constructor(speed) {
    super(speed) // vi kalder forældrens konstruktør   
  }
  setSpeed(amount)
  {
    if((this.#speed+amount) > 90) 
    {
      console.log("A van is not allowed to drive faster then 90 km/h")
    }
    else{
      this.#speed += amount
    }
  }
}
function setup() {
  createCanvas(400, 400);
  const v = new Van(10)
  v.setSpeed(120) //not allowed when its a van
  v.getSpeed() //writes 10
}
```

Klassen `Van` er et barn af forældren eller superklassen `Car` hvilkes
ses ved, at den udvider (se nøgleordet extends) klassen. I konstruktøren
kaldes `super()` for at initialisere barnet ud fra superklassen. Ved at
kalde `super()` kaldes altså forældrens konstruktør.

I metoden `setSpeed()` har vi valgt at undersøge hvorvidt hastigheden
bliver mere end 120, da vi i dette eksempel forestiller os, at det ikke
er lovligt for en `Van`. Vi har med andre ord overskrevet metoden
`setSpeed()` i børneklassen, så den implementerer sin egen adfærd
forskelligt fra forældren(e).

Ydermere ser vi, at vi uden videre kan kalde eksisterende metoder fra
superklassen jf. vores kald til getSpeed. Vi kan også konstruere helt
nye metoder eller variable. Det gøres fuldstændig på samme måde som hvis
vi havde gjort det i superklassen.

Hvis vi ønsker, at vores børneklasse skal have nogle attributter knyttet
til sig, som ikke allerede er tilgængelige i forældreklassen, bør vi
kalde forældreklassens konstruktør og tilføje nye attributter
efterfølgende i konstruktøren. I praksis gøres det ved brug af `super()`
i konstruktøren af børneklassen, som i eksemplet ovenfor. Herundet et
eksempel, hvor vi udvider med en ekstra attribut i et barn af `Car`. Det
er en børneklasse som skal repræsentere en lastbil (kaldet `Truck`):

``` {.javascript}
class Truck extends Car { 
  #weight;    
  constructor(speed,weight) {
    super(speed) //kalder forældreklassens konstruktør
    this.#weight = weight  //udvider med en ny privat attribut
  }
}
```

I eksemplet ovenfor udvider i børneklassen med en attribut `weight`, der
kunne bruges til at beskrive hvor meget vægt lastbilen måtte bære. Som i
tilfældet med `Van` kaldes først forældreklassens konstruktør. Det er
ikke nødvendigt at initialisere speed, da den allerede er kendt af
forældreklassen.

## Polymorfi

Polymorfi består af to ord, "poly" og "morf", som betyder hhv. "mange"
og "former". Underforstået så handler polymorfi om, at objekter kan
antage forskellige former, men vi kan stadig behandle dem på en ensartet
måde. Det betyder i praksis mere kompakt læsbar kode med forhåbentlig
færre fejl, som også i højere grad kan justeres og skaleres. Det er en
af de mere komplekse dele af den objektorienteret programmering, som kan
tage noget tid at blive vant til, men det er omvendt også et særdeles
kraftfuldt værktøj.

Når vi skriver, at vi kan behandle forskellige former ens, så betyder
det mere konkret, at man kan justere på børneklassers nedarvede metoder
så de ikke afvikler de præcis samme instruktioner som forældreklassen,
men at vi kan tilpasse dem den konkrete kontekst i børneklassen.

I praksis er der grundlæggende to forskelige måder at opnå denne form
for polymorfisme. Den ene kaldes "overskrivning" og den anden
"overloading". I det følgende vil vi illustere hvorledes disse to
metoder fungerer.

### Overskrivning

Vi kan forestille os, at vores `Car`-klasse skal repræsentere både en
varevogn og en lastvogn, og at vi vælger at samle de ting de har til
fælles i `Car`, og de ting der adskiller dem i deres respektive
børneklasser. Herunder et eksempel:

``` {.javascript}
class Truck extends Car {
  #weight;    
  constructor(speed,weight) {
    super(speed) //kalder forældreklassens konstruktør
    this.#weight = weight  //udvider med en ny privat attribut
  }
  setSpeed(amount)
  {
    if((this.#speed+amount) > 80) 
    {
      console.log("A truck is not allowed to drive faster then 80 km/h")
    }
    else{
      this.#speed += amount
    }
  }
}
class Van extends Car {
  setSpeed(amount)
  {
    if((this.#speed+amount) > 110) 
    {
      console.log("A van is not allowed to drive faster then 90 km/s")
    }
    else{
      this.#speed += amount
    }
  }
}
function setup() {
  createCanvas(400, 400);
  const v = new Van(10)
  v.setSpeed(120) //not allowed when its a van
  v.getSpeed() //writes 10
}
```

Vi bemærker her, at begge børneklasser overskriver den oprindelige
setSpeed metode.

### Overloading

Vi kan sågar udvide metoderne i børneklassen så de tager flere
argumenter. F.eks. kunne man forestille sig, at man udvider Van med en
type/model og afhængig af hvilken type Van var kunne man tillade, at
bestemte typer Vans kørte hurtigere end andre. Dette kaldes også for at
overloade metoder. Javascript understøtter ikke overloading men kan
implementeres på forskellige måder. Herunder et eksempel der illustrerer
hvordan vi kan tjekke argumenterne til setSpeed:

``` {.javascript}
setSpeed(p1, p2, p3)
{
  var s = p1;
  if(typeof p2 !== "undefined") {s += p2;}
  if(typeof p3 !== "undefined") {s += p3;}
  return s;
};

setSpeed("one");        // result = one
setSpeed("one",2);      // result = one2
setSpeed("one",2,true); // result = one2true
```

## Komposition

Komposition er et særdels vigtigt koncept indenfor objekt-orienteret
programmering, der ofte ikke er prioriteret nært så højt i litteraturen
som de fire principper introduceret ovenfor. I praksis er komposition
dog særdeles nyttig og kan ofte være mindst ligeså nyttig som
nedarvning.

Både nedarvning og komposition benyttes til at etablere associationer og
relationer mellem forskellige klasser, men hvor nedarvning har fokus på
skabe relationer ved at børneklasser udleder data og metoder fra
forældre, så handler komposition populært sagt om at definere klasser ud
fra summen af eksisterende klasser.

Det lyder måske lidt mystisk, så lad os forsøge at tydeliggøre det med
nogle eksempler. Komposition indikerer at en klasse er en del af en
anden klasse eller at et objekt har en . Det kunne eksempelvis være:

-   En katteejer har en kat
-   En kat har et hoved, en krop og en hale
-   En trekant har tre linjesegmenter
-   Et linjesegment har to punkter
-   En læge har en patient
-   Et patient har en lever

Der eksisterer to former for komposition, aggregation og association.
Begge beskriver relationer mellem klasser.

## Øvelser

Herunder følger en række øvelser. Det anbefales, at man som minimum
laver øvelse 1.-10. samt projektet.

1.  I det følgende ses kode for en klasse `Car`. Omskriv koden så den
    bruger private variabler. Forklar desuden hvad metoderne gør.

``` {.javascript}
class Car {
  constructor(PosX, PosY, Width, Length, Speed, Color, Brand) {
    this.x = PosX;
    this.y = PosY;
    this.width = Width;
    this.length = Length;
    this.speed = Speed;
    this.c = color(Color);
    this.brand = Brand;
    this.finished = false;
  }

  move() {
    this.x += this.speed;
  }

  display() {
    fill(this.c);
    rect(this.x, this.y, this.width, this.length);
  }

  finish() {
    if (this.x >= 1000 && !this.finished) {
    this.finished = true;
    console.log(this.brand + " hit the finish-line!");
    }
  }
}
```

2.  Afprøv din nye klasse ved at konstruere tre biler, en Tesla, en
    Mercedes og en BMW. Brug metoderne display til at lave et simpelt
    racerløb, hvor bilerne kører venstre mod højre side. Herunder noget
    kode der illustrerer ideen:

``` {.javascript}
let tesla;
let volvo;
let audi;

function setup() {
  createCanvas(1000, 400);
  //new car(posX, posY, width, height, speed, color, name)
  tesla = new Car(0, 20, 90, 50, 4, "blue", "Tesla");
  volvo = new Car(0, 100, 50, 50, 2, "yellow", "Volvo");
  audi = new Car(0, 200, 90, 80, 3, "green", "Audi");
}

function draw() {
  background(220);
  tesla.move();
  tesla.display();
  tesla.finish(); 
}   
```

3.  Udvid klassen med to attributter. En, der repræsenterer
    accellerationen, en anden der repræsenterer hvor mange km bilen kan
    køre på en tank. Udvid metoden move så den inddrager accellerationen
    og trækker en fra hver gang bil har kørt 20 pixels. Når bilen rammer
    0 skal bilen stoppe og man skal have besked i konsollen om, at bilen
    skal tanke benzin.

4.  Vi forestiller os nu, at I vi udvider med to nye klasser, der
    nedarver fra Car. Den ene skal håndtere elektriske biler (kaldet
    EVCar) og den anden skal håndtere ikke elektrisk biler (kaldet
    NonEVCar). Begge klasser har fælles egenskaber, som angivet I den
    oprindelige Car klasse. Men de har forskellige egenskaber som skal
    implementeres i de respektive klasser. Opret de to respektive
    klasser og implementer, at en elektrisk bil skal bruge tid på at
    lade op (vha en særlig attribut) og at den ikke elektriske version
    hurtigt kan tanke benzin. Dvs. metoden move skal overskrives.

5.  En dyrehandler har brug for et visuelt aquarium til sin butik, hvor
    børn kan simulere et aquarium og lave sjov med forskellige fisk. Der
    skal udvikles et visuelt simuleret aquarium som en bruger kan
    interagere med. Herunder skeletkode, der simulerer et simpelt
    akvarium.

``` {.javascript}
// The Fish class defines fish objects, that move around on the
// screen and change direction when they bump into the walls.
class Fish {
  // Constructor function for a new fish.
  // Requires x, y position where the fish is to be created.
  constructor(x, y){
    // Record the x and y position inside 'this'
    this.x = x;
    this.y = y;

    // Pick a random starting velocity
    this.xVel = random(-1, 1);
    this.yVel = random(-1, 1);
  }

  // Function to display the fish on the canvas.
  show(){
    // push matrix to save previous state
    push();

    // Translate to the x, y position of the fish.
    translate(this.x, this.y);

    // Draw a triangle to represent the fish
    triangle(20, 0, -10, -10, -10, 10);

    pop();
  }
  
  // Update the position of the fish depending on its velocity.
  update(){
    this.x += this.xVel;
    this.y += this.yVel;

    // Check whether the fish has gone off the left or right
    if (this.x < 0 || this.x > width){
      // If it has, reverse direction and move back
      this.xVel = -this.xVel;
      this.x += this.xVel;
    }

    // Check whether the fish has gone off the top or bottom
    if (this.y < 0 || this.y > height){
      // If it has, reverse direction and move back
      this.yVel = -this.yVel;
      this.y += this.yVel;
    }
  }  
}
```

6.  Udvid klassen, så den har farve, størrelse og hastighed med til at
    beskrive fisken.

7.  Brugeren af systemet skal kunne interagere med fiskene. Eksempler på
    interaktioner kunne være at give mad til fisk, fjerne fisk, farve
    fisk, sætte forskellige fisk i aquarium, trykke på fisk så de bliver
    bange og svømmer væk, indsætte planter og andre ting i akvariet,
    give fisk mulighed for at få finner og haler. Udvælg selv nogle
    interaktioner og prøv at implementere disse. Prøv dem af i praksis.

8.  Det skal være muligt at indsætte piratfisk, der æder de andre hvis
    de kolliderer. De skal være større og se farlige ud. Herunder ses
    skelet kode for et barn af Fish. Udvid denne klasse så piratfisk
    svømmer hurtigere, er større og hvis de kolliderer med en af de
    andre fisk, spiser de dem.

``` {.javascript}
class PiratFish extends Fish
{
    constructor(x, y){
    super();  
    // Record the x and y position inside 'this'
    this.x = x;
    this.y = y;

    // Pick a random starting velocity
    this.xVel = random(-10, 10);
    this.yVel = random(-10, 10);
  } 
}
```

9.  Du er systemudvikler og skal udvikle et nyt system til at simulere
    dyr i nationalparken Serengenti, der kan håndtere forskellige typer
    af dyr. Lav en forældre klasse, der hedder Animal. Den skal rumme
    attributter, som er fælles for alle dyr, såsom alder, køn, hvorvidt
    de er sultne, er rovdyr eller pattedyr.

10. Udvid nu med tre børneklasser af Animal, der repræsenterer hhv. dyr
    der lever i vandet, på landet og i luften. Giv dem passende navne og
    implementer en metode draw for hver af de tre børn, der tegner
    forskellige figurer som repræsenterer disse typer dyr.

11. Udvid så dyrene kan bevæge sig rundt på skærmen ved brug af en
    metode kaldet move, men at dyrene kun kan bevæge sige ind for et
    bestemt område i form af en firkant eller cirkel af skærmen angivet
    ved et x og y som peger på punktet i venstre hjørne samt en længde
    og bredde eller radius. Afprøv din kode.

12. Konstruer en scene, der konstruerer nationalparken Serengenti. Om
    man ser parken fra siden eller fra fugleperspektiv, bestemmer du.
    Parken skal dog inddeles i et vandområde, et område for dyr der kan
    flyve og for nogle består af illustrerer bestående. Indsæt
    respektive dyr i de forskellige områder, som bevæger sig rundt i
    området. Initialiser tilfældigt hvorvidt dyrene er rovdyr eller
    pattedyr.

13. Udvid nu klasserne, så hvis rovdyrene er sultne og kolliderer med
    pattedyr, så spises pattedyr. Hvis de ikke er sultne, så får
    pattedyrene lov at slippe. Afprøv koden i praksis.

## Projekt: Scene-generator

I det følgende projekt er det endelige produkt en automatisk
konstruktion af en scene sat sammen af forskellige geometriske figurer.
Scenen kan eksempelvis forestille huse med træer, mennesker, blomster,
skyer eller lignende. Man kan forestille sig, at denne scene generator
kan bruges i spil, kunst eller til at simulere forskellige fysiske
fænomener. En scene kunne eksempelvis bestå af et hus, der består af en
trekant ovenpå en firkant, nogle skyer bestående af overlappende cirkler
osv. Til at starte med skal konstrueres en GeometricFigure, der rummer
nogle grundlæggende egenskaber ved en geometrisk figur. Det kunne være
farve, form, koordinater m.m. Som børn til GeometricFigure oprettes
forskellige primitive geometriske figurer såsom cirkler, linjestykker,
trekanter, firkanter, polygoner... Endelig oprettes klasser til at
repræsentere huse, mennesker, skyer m.m. Disse klasser skal benytte de
nævnte geometriske figurer til at konstruere huse m.m.

## Projekt: Flyradar (ikke færdig)

I nærværende projekt skal du simulere software for en flyradar hvor du
skal implementere forskellige flytyper og lufthavne vha af klasser og
objektorienteret principper.

Radaraen holder øje med forskelige og sørger for at de ikke er på
kollisons kurs med andre fly samt at der plads til at lande i lufthavnen
(må ikke overstige kapaciteten). Lufthavnene kan håndtere tre slags fly,
der kan flyve med forskellige hastigheder, farver og passagerer: \*
PassagerFly (100 km/t) med farven blå og kan have 200 passagerer. \*
JetFly(200 km/t) med farven rød og kan have 2 passagerer \* PropelFly(50
km/t) med farven grøn og kan have 10 passager

Lufthavne har forskellige kapaciteter og typer. Typen afgør hvilke fly,
som lufthavnen kan håndtere. Typen er en liste af maksimalt tre
elementer bestående af de typer af fly, som lufthavnen tillader.

Opgaven er: 1. Implementér de forskellige typer lufthavne, så de ser
forskellige ud, kan starte og tage imod fly fra andre lufthavne samt
sikre, at kapaciteten ikke overskrides eller de modtager forkerte
flytyper. Hvis det er tilfældet skal flyene sendes videre til en anden
lufthavn. 2. Implementér de forskellige fly, så de ser forskellige ud,
flyver med forskellig hastighed, samt at de sendes i en anden retning,
hvis de er på kollisonskurs. Registrer hvor mange fly der lander
undervejs.

Brug gerne objektorienteret principper i udviklingen af systemet.

Herunder et skelet for for en Lufthavn:

``` {.javascript}
class Lufthavn
{
  constructor(x,y,name,capacity,type)
  {     
    this.x = x 
    this.y = y
    this.name = name
    this.capacity = capacity
    this.type = type // liste
  }

  display(){
    // Display airport at x position
    text(this.name,this.x,this.y)
    stroke(0);
    fill(175);
    rect(this.x, this.y, 25,25);
  }
}
```

Herunder et skelet for for en overordnet flyklasse:

``` {.javascript}
class Fly
{
  constructor(startLufthavn,slutLufthavn, model, type)
  {
    this.startLufthavn= startLufthavn
    this.slutLufthavn = slutLufthavn 
    this.model = model //enten PassagerFly, JetFly eller PropelFly   
  }

  update() {
    //updates the position
  }

  display() {
    //displays the plane
  }
  setDirection(x,y)
  {
    //sets the direction
  }

}
```

Afslutningsvis kommer her et setup, som initialiserer en række
lufthavne:

``` {.javascript}
function setup() {
  createCanvas(800, 800);
  L=[] //rummer lufthavne
  L.push(new Lufthavn(200,200,"Københavns Lufthavn", 50,["PassagerFly"]))
  L.push(new Lufthavn(500,50,"Stockholms Lufthavn", 15,["PropelFly","PassagerFly"]))
  L.push(new Lufthavn(100,500,"Madrids Lufthavn", 30,["PropelFly","PassagerFly"]))
  L.push(new Lufthavn(10,20,"Londons Lufthavn", 1000,["PropelFly","PassagerFly"]))
  L.push(new Lufthavn(700,600,"Dubais Lufthavn", 40,["PropelFly","PassagerFly"]))
  L.push(new Lufthavn(200,400,"Roms Lufthavn", 90,["PropelFly","PassagerFly"]))
  L.push(new Lufthavn(700,300,"Moska Lufthavn", 10,["JetFly"]))
  L.push(new Lufthavn(300,750,"Alaska Lufthavn", 400,["JetFly"]))
  
  let i = 0;
  while(i<L.length){
    L[i].display()
    i++
  }  
}
```

# 16. Vektorer

Vektorer betegner en entitet, som består af en længde og en retning. Man
kan tænke på dem som pile, der kan beskrive bevægelser, kræfter og meget
mere.

Vektorer, spiller en helt central rolle i forhold til at beskrive,
undersøge og simulere fænomener i naturen og fysikkens verden.

I det følgende startes med at implementere et basalt vektorbibliotek,
der kan konstruere og operere på vektorer, ved brug af principperne fra
OOP.

Dernæst motiveres brugen af biblioteket ved at kode en simulering af et
mikro økosystem i form af et akvarium med forskellige typer fisk. Ved
brug af vores vektorbibliotek og objekter vil vi bl.a. simulere et
naturfæonomen nemlig visse dyr (og i tilfældet her fisks) flokadfærd.
Umiddelbart kunne dyrs flokmentalitet tyde på en højere og dybere
intelligens, men som vi skal se, kan vi denne adfærd faktisk reduceres
til nogle simple regler.

## Et bibliotek af vektorer

P5 har på forhånd stillet et vektorbibliotek til rådighed, så man kan
måske undre sig over hvorfor vi ikke bare benytter dette. Det er der
mange grunde til. For det første giver det en langt bedre forståelse at
implementere ting fra bunden ikke mindst vektorer, som er en central
datastruktur i programmering og som bruges intensivt i mange
sammenhænge. Bl.a. når programmering skal facilitere og undersøge et
emne indenfor eksempelvis fysiki forhold til at simulere naturfænomener.
For det andet er implementationen af et vektorbibliotek en god øvelse i
at bruge grundlæggende objektorienteret tankegang, hvor vi får trænet
brugen af konstruktion af objekter og metoder knyttet hertil. Det
såkaldte indkapslingsprincip.\
Endelig vil vi også gerne opfordre enhver programmør til at designe og
implementere generiske løsninger, der kan sættes i spil i andre
sammenhænge end det konkrete projekt, som de netop arbejder på.

### Konstruktion af en vektor: Indkapslingsprincippet i praksis

Indkapslingsprincippet, som er en af grundprincipperne indenfor OOP,
betoner, at vi pakker data og metoder, som opererer på disse data, i en
og samme enhed (læs: klasse). Vektorer er et godt eksempel på en sådan
enhed. En vektor kan betragtes som en afstand mellem to punkter eller en
transformation fra et sted i koordinatsystemet til et andet. Herunder et
eksempel på en vektor skrevet med vektornotation:
$$\overrightarrow{a}=(2,3).$$

Det betyder i praksis, at står vi i et vilkårligt punkt i planen, så vil
vektoren $\overrightarrow{a}$ transformere os til et nyt punkt ved at gå
2 skridt i x-aksens retning (til højre) og 3 skridt i y-aksens retning
(opad). Vi får mao mulighed for at beskrive objekters bevægelse ved brug
af vektorer. Det skal vi vende tilbage til. Først skal vi konstruere en
simpel vektorklasse i P5 til at håndtere vektorer i to dimensioner. Vi
gør opmærksom på, at vektorer let kan generaliseres til både og tre og
n-dimensioner. Det bliver en af øvelserne for læseren. Herunder en hel
basal vektorklasse med en konstruktør, der tager et x og y:

``` {.javascript}
class Vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
```

Reelt set er vores vektorklasse nu bare en container eller et punkt, der
opbevarer et koordinatsæt. Man kan tænke på vores nuværende vektor, som
en såkaldt `stedvektor`, der starter i origo (dvs. $(0,0)$) og peger på
et punkt $(x,y)$. Men det er vigtigt at understrege, at vi kan
abstrahere fra dette og placerer vores vektor et vilkårligt sted i
planen.

Herunder benytter vi klassen til at tegne cirkel ud fra vores vektor:

``` {.javascript}
let vec
function setup() {
  createCanvas(400, 400);
  vec = new Vector(200,300)
}

function draw() {
  circle(vec.x,vec.y,50)
}
```

Som det fremgår af koden, kan vi uden videre tilgå vores attributter x
og y. Ifølge indkapslingsprincippet er det god designpraksis at skjule
så megen unødig kompleksitet og information for brugeren som muligt. I
javascript kan det gøres ved brug af hashtag, som nedenfor:

``` {.javascript}
class Vector{
  constructor(x,y){
    this.#x = x;
    this.#y = y;
  }
}
```

På den måde kan vi ikke længere tilgå attributterne x og y, men må i
stedet implementere accessor og mutator-metoder, som kan ændre og hente
værdierne:

``` {.javascript}
class Vector{ 

  constructor(x,y){ 
    this.#x = x; //private attribut ved brug af # 
    this.#y = y; 
  } 
  setX(x){ 
    this.x = x 
  } 
  setY(y){ 
    this.y = y 
  } 
  getX(){ 
    return this.x 
  } 
  getY(){ 
    return this.y 
  } 
} 
```

Vi overlade det som en øvelse til læseren at implementere disse metoder
for de enkelte attributter. Herunder en accessor-metoder til at hente
længden af vektoren ud fra Pythagoras læresætning:

``` {.javascript}
    getLength()
    {
      return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
    }
```

## Animere ved brug af vektoraddition

Hvis vi ønsker at animere vores vektor har vi brug for at ændre
vektorens koordinater, hvorfor vi indfører begrebet `hastighed` (eller
`velocity` på engelsk) i form af to nye variable kaldet `xspeed` hhv.
`yspeed`, som vi ønsker at addere til vores vektors koordinater:

``` {.javascript}
x = x + xspeed
y = y + yspeed
```

Fra matematik kender vi det som vektoraddition. Givet
$\overrightarrow{a}=(a_1,a_2)$ og $\overrightarrow{b}=(b_1,b_2)$, så er
additionen givet ved
$$\overrightarrow{a}+\overrightarrow{b}=(a_1+b_1,a_2+b_2).$$ I praksis
svarer addition af vektorer til, at vi starter i punktet for den første
vektor, bevæger os til enden af den og bevæger os fra det endepunkt til
enden af den anden vektor. I praksis svarer det til at summe vektorerne
koordinatvis, hvilket let kan implementere i praksis:

``` {.javascript}
  add(v){
    this.x += v.x
    this.y += v.y
  } 
```

Vi kan nu let sætte vores cirkel i bevægelse:

``` {.javascript}
let place
let velocity
function setup(){
  createCanvas(400, 400);
  place = new Vector(200,300)
  velocity = new Vector(5,-4)
}

function draw(){
  background(255);
  place.add(velocity);
  if ((place.x > width) || (place.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((place.y > height) || (place.y < 0)) {
    velocity.y = velocity.y * -1;
  }
  fill(130);
  circle(place.x,place.y,50);
}
```

I `draw` sikres at vores cirkel bouncer af på skærmen hvis vi, når en af
kanterne.

### Andre vigtige metoder til vores vektorbibliotek

Hvis vi havde nok i bare at kunne addere vektorer, så var der næsten
ingen grund til at lave et vektorbibliotek. Herunder gennemgår vi kort
en række metoder, som vores vektorbibliotek kan eller skal have
implementeret. Vi overlader det til læseren at implementere disse
metoder vis navne står i firkantede parenteser med deres parametre i
parenteser:

-   Skalering \[`scalar(k)`\]: En vektor kan skaleres i længde værdien
    $k$. Det sker ved at multiplicere $k$ på både x og y. Metoden skal
    returnere ændre vektoren og returnere den skaleret vektor.
-   Tegne vektor \[`drawVector(xstart=0,ystart=0)`\]: Skal tegne
    vektoren fra startpunktet $(xstart,ystart)$. Hvis ingen argumenter
    angives, tegnes stedvektoren.
-   Til streng \[`toString()`\]: Skal returnere en streng, der består af
    koordinaterne og vektorens længde.
-   Prikproduktet \[`dotProduct(v)`\]: Beregner prikproduktet med en
    anden vektor `v`. Det er summen af koordinaterne multipliceret
    koordinatvis.
-   Normalisering \[`normalize()`\]: Vi kan konstruere en såkaldt
    enhedsvektor med samme retning som vores oprindelige vektor, men med
    længden $1$ ved at skalere med $\frac{1}{Længden af vektoren}$.
-   Ens retning \[`isParallel(v)`\]: Hvis vi normaliserer vores
    vektorer, beregner prikproduktet og det giver 1, så betyder det, at
    vektorerne er ens eller parallelle. Metoden skal returnere sand
    eller fask.
-   Modsat retning \[`isOpposite(v)`\]: Hvis vi normaliserer vores
    vektorer, beregner prikproduktet og det giver -1, så betyder det, at
    vektorerne står vinkelret på hinandnen. Metoden skal returnere sand
    eller fask.
-   Vinkelret \[`isPerpendicular(v)`\]: Hvis vi normaliserer vores
    vektorer, beregner prikproduktet og det giver nul, så betyder det,
    at vektorerne står vinkelret på hinandnen. Metoden skal returnere
    sand eller fask.
-   Negering af vektor \[`negate()`\]: Hvis vi ønsker en vektor i modsat
    retning kan vi "negere" den oprindelige vektor ved at skalere med
    -1. Metoden skal returnere den negeret vektor.

Vi beder læseren om at implementere disse i øvelserne.\
Som et eksempel på hvorledes det kan gøres har vi i det følgende
implementeret en metode \[`getAngleBetween(v)`\], som finder vinklen
mellem to vektorer og returnerer resultatet i grader:

``` {.javascript}
class Vector{
  //...
  getAngleBetween(v) {
    let vrad = Math.acos(this.dotProduct(other) / (this.getLength() * v.getLength()))
    return ((vrad*180)/Math.PI)
  }
}
const v1 = new Vector(0, 2)
const v2 = new Vector(1, 0)
console.log(v1.getAngleBetween(v2))
```

### Hvad med flere dimensioner?

Vektorer behøver ikke kun være knyttet til 2-dimensioner, men kan
generaliseres til både tre og et vilkårligt antal dimensioner. I
tilfældet med 3 dimensioner kan vi benytte javascripts notation for
standardværdier. Herunder et eksempel:

``` {.javascript}
class Vector{
  constructor(x,y,z=0){
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
```

Hvis ikke andet angives sættes z til 0. Alle metoderne nævnt ovenfor
lader sig let generalisere ved reelt bare at inddrage z i udregningen.
Vi overlader det som en øvelse til læseren, at udvide bibliotektet, så
det kan håndtere 3-dimensioner.

Såfremt man ønsker at udvide med flere dimensioner, hvilket kan være
særdeles relevant når man skal arbejde med kunstig intelligens og
datavidenskab, så vil det formentlig være bedre at give et array af tal,
som argument til konstruktøren. Alternativt kan man hente listen af
argumenter fra en metode ud vha af `arguments`. Herunder et eksempel der
blot printer koordinaterne i konsollen:

``` {.javascript}
class Vector{
    constructor() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
}

v1 = new Vector(1,2)
v2 = new Vector(3,4,5)
```

I øvelserne opfordres du til at implementere et mere generisk
vektorbibliotek, der kan håndtere vilkårligt mange dimensioner.

### Hvad med dokumentationen?

En central del af det at udvikle et bibliotek eller API ("Application
Programmer Interface") er at dokumentere hvorledes det bruges. I
Javascript benyttes typisk formatet JSDoc. Kræver installation af `npm`
og kørsel af følgende linje i kommandoprompt `npm install -g jsdoc`.
Fordelene ved at brug JSDoc er bl.a. at sikre en ensartet måde at
dokumentere kode på og at brugere af ens bibliotekt får mulighed for at
få automatiseret forslag i sit udviklingsmiljø til hvorledes biblioteket
bruges. Herunder et eksempel på dokumentation af vores vektorklasse:

``` {.javascript}
/** Class representing a Vector. */
class Vector {
    /**
     * Create a Vector.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Scales a vector
     * @param {float} float - The scalar a real number.
     * @return {Vector} A scaled vector.
     */
    scale(flt) {
        // ...
    }
    //...
}
```

Vi overlader det som en øvelse til læseren at dokumentere metoderne.

## Vektorbiblioteket i praksis: Simulering af et økosystem

I denne del vil vi gøre brug af vores vektorbibliotek til at simulere et
akvarium med fisk, som et eksempel på et simpelt økosystem.

### En fiske-klasse

Til at starte med konstrueres en klasse, der skal stå for at
repræsentere en fisk. Vi benytter vektorer til at beskrives dens
lokation og hastighed, og vi implementerer to metoder, der opdatere
fiskens position samt tegner den:

``` {.javascript}
class Fish{
    constructor(location,velocity)
    {
        this.location = location
        this.velocity = velocity
        this.size = 50
    }

    update()
    {
        this.location.add(this.velocity);
    }

    draw()
    {        
        if ((this.location.x > width) || (this.location.x < 0)) {
          this.velocity.x = this.velocity.x * -1;
        }
        if ((this.location.y > height) || (this.location.y < 0)) {
          this.velocity.y = this.velocity.y * -1;
        }
        fill(130);
        circle(this.location.x,this.location.y,this.size);
    }
}
```

Vi kan nu med ganske få linjers kode konstruere nogle fisk:

``` {.javascript}
function setup(){
  createCanvas(400, 400);
  fish1 = new Fish(new Vector(200,300),new Vector(5,-4))
  fish2 = new Fish(new Vector(100,100),new Vector(-3,7))
}

function draw(){
  background(255)
  fish1.update()
  fish1.draw()
  fish2.update()
  fish2.draw()
}
```

Selvom koden er blevet meget pænere og mere let læselig ved brug af
klasser, kan det stadig bliver omfangsrigt, når vi begynder at få mange
fisk. Vi sætter derfor fiskene ind i en liste og løber den igennem med
en løkke. Herunder genereres $n$ fisk tilfældige steder på skærmen:

``` {.javascript}
let n = 10
let fishes =[]
function setup(){
  createCanvas(400, 400); 
  for(let i = 0;i <n;i++){
    fishes.push(new Fish(new Vector(random(0,width),random(0,height)),new Vector(random(-10,10),random(-10,10))))
  }
}

function draw(){
  background(255)
  for(let i = 0;i <n;i++){
    fishes[i].update()
    fishes[i].draw()
  }
}
```

### Forskellige typer af fisk: Nedarvningsprincippet

Vi ønsker at vores system skal have to forskellige typer af fisk: - En
"bytte" fisk som svømmer rundt vilkårligt efter mad - En "jager" eller
"pirat" fisk, der jager byttefiskene.

På trods af at de to umiddelbart virker forskellige, så er de også meget
ens. Fremfor at implementere to forskellige klasser af fisk, så kan vi
gøre brug af nedarvningsprincippet. Her samler vi de egenskaber og
metoder, der er til fælles, i den oprindelige fiskeklasse, og ved at
udlede børneklasser, der på den ene side arver fælles egenskaber og på
anden side divergerer på attributter og metoder, sikres, at vi kan
genbruge store dele af koden og at vi senere kan behandle de forskellige
typer fisk på en ensartet måde. Det fører igen til mere elegant og
læsbar kode, som også i højere grad lader sig skalere og udvide.

I praksis kan vi i Javascript udvide med nøgleordet `extends`:

``` {.javascript}
class BytteFisk extends Fisk{
  //...
}
class PiratFisk extends Fisk{
  //...
}
```

### Flok intelligens: Beskeder mellem objekter

Det simple økosystem i form af akvariet kan udvides på mange måder. Et
sted at starte kunne være at få fiskene til at opføre sig mere
naturligt. Eksempelvis ved vi, at visse fiskearter har tilbøjelighed til
at svømme i flokke (lidt ligesom fugle, myrer, mennesker og mange andre
dyr).

![Fisk bevæger sig ofte i blokke ligesom mange andre
dyr](../kap16/images/fishflock.jpg)

Det er spændende at undersøge af mange grunde. Bl.a. fordi naturens
indbyggede flok-intelligens viser sig, at være anvedelig i en lang række
eksempel såsom kurering af kræft, optimering af processer, simulering af
individulles adfærd i grupper etc. Men desuden stiller implementeringen
af flok-intelligens krav om, at vores fiske-objekter udveklser
informationer mellem hinanden, så de ved hvor hinanden er. Dvs. for
programmører er implementationen af flok-intelligens et godt eksempel
på, hvordan objekter kan kommunikere med hinanden.

I det følgende gennemgås nogle simple regler for hvorledes
flok-mentaliteten, som vi efterfølgende kan implementeres i praksis ved
brug af interagerende objekter og attributter knyttet til disse.

-   Seperation: En fisk vil forsøge at svømme væk fra andre fisk, der er
    tæt på den. Men ligesom naturen vil ingen fisk have viden om alle
    fisk i flokken. Til at holde styr på antallet af synlige naboer
    indføres en variable kaldet `neighboring_boids`.
-   Justering: En fisk vil forsøge at efterleve hastigheden af andre
    fisk i nærheden. Vi indfører vektoren `xvel_avg` og `yvel_avg`.
-   Samhørighed: En fisk vil forsøge at svømme mod centrum af flokken.
    Vi indfører variablerne `xpos_avg` og `ypos_avg`.

Udover de nævnte vil det også være relvant at prædefinere en
minimumshastighed og maksimumshastighed for vores fisk.

Vi er nu klar til at formulere en meget højniveau pseudokode version af
den overordnede algoritme:

``` {.javascript}
Indlæs positioner for alle fisk
for hver fisk F
  Tegn fisken F
  Opdater position for F
```

Fiskene indlæses på tilfældige positioner. Når fiskene tegnes menes, at
fiskene tegnes en frame ad gangen. Hvorefter deres position opdateres.

Som udgangspunkt er fiskens klasse konstrueret ud fra to centrale
attributter (positionen og farten) hvor begge er repræsenteret som
vektorer:

``` {.javascript}
class Fish{
    constructor(position,velocity)
    {
        //..
        this.position = position //(x,y) peger på fiskens placering
        this.velocity = velocity // (xvel,yvel) peger på fiskens hastighed i de to retninger
        //...
    }
}
```

Den centrale del handler om at opdatere deres position i forhold til de
tre regler. Heldigvis kan det gøres både ret let og elegant ved brug af
vektorer, som resulterer i tre fartvektorer, der kan summes til den
samlede fart:

``` {.javascript}
Vector v1,v2,v3
for hver fisk F:
  v1 = F.seperation()  //kaldt seperation på dansk
  v2 = F.alignment()   //kaldt justering på dansk
  v3 = F.cohesion()    //kaldt samhørighed på dansk 
  F.velocity += v1 + v2 + v3
  F.position += F.velocity
```

Bemærk at de tre metoder implementeres i fiskeklassen, der hver især
repræsenterer en af de tre regler. Fartvektoren opdateres og udfra det
opdateres positionen (bemærk `+=` i de sidste to linjer). Som det
inddirekte fremgår af pseudokoden, så kommer vi ikke uden om at skulle
have en løkke i en løkke, da vi er nødsaget til for hvert fiskeobjekt at
kommunikere med alle andre fiskeobjekter om deres placering og fart. Vi
inddeler desuden ovenstående pseudokode i nogle mindre metoder for at
gøre det mere overskueligt.

I det følgende gennemgås i detaljer hvorledes de tre regler kan
implementeres.

#### Samhørighed: Fisk søger mod centrum af naboerne

Givet $N$ fisk, $F_1,...,F_n$, med hver deres positionsvektor,
$pos_1,...,pos_n$, da kan konstrueres en vektor, kaldet $F_{center}$,
som betegner et centrum, hvor hver fisk vægtes ligeligt, ved at bruge
addition og skalering med ($1/N$):
$$F_{center} = \frac{(F_1.pos_1+...+F_n.pos_N)}{N}.$$ Man kan diskutere
eller overveje om det er hensigtsmæssigt, at fisken egen position
inkluderes i beregningen. Herunder pseudokode for metoden:

``` {.javascript}
F.cohesion():
  Vektor pCenter 
  for hver fisk G:
    Hvis F !=G:
      pCenter += G.position
  pCenter = pCenter / N-1
  returner (pCenter - F.position) / 100
```

Divisionen med 100 er for at sikre, at den ikke bevæger sig for hurtigt
mod centrum. Ved at dividere med 100 svarer det til at den bevæger sig 1
procent tættere på centeret. Ydermere kunne det overvejes hvor stor $N$
bør være. I øvelserne opfordres til at der indføres skydere, som
justerer på disse parametre.

#### Seperation: Fiskene søger væk nærmeste naboer

Givet en fisk F kigges herpå en hver anden fisk G. Målet er at undersøge
om G er inden for en prædefineret afstand, $D$. I såfald flyttes F så
væk. I praksis ved at trække fra en vektor c forskydningen af ​​alle
fisk G, som er i nærheden. Til at starte med sættes c til nul, da den
resulterende vektor skal flytte fisken fra den nuværende position og væk
fra de omkringliggende. Herunder pseudokode:

``` {.javascript}
F.seperation():
  Vektor pCenter= 0 //nul vektoren 
  for hver fisk G:
    Hvis F !=G:
      Hvis |G.position - F.position| < D :
    pCenter = pCenter - (G.position - F.position)
  returner pCenter 
```

#### Justering: Fiskene søger samme gennemsnitshastighed som nærmeste naboer

Denne regel minder en del om reglen om seperation. I stedet for at regne
vægtene af positionen udregnes den gennemsnitlige fart.

Der indføres endnu en parameter, $chgVelocity$ til at justere hvor meget
fiskens fart i praksis ændres ud fra den beregnet gennemsnitsfart. Igen
kan det være godt at indføre en skyder og variere $chgVelocity$:

``` {.javascript}
F.alignment():
  Vektor pVelocity;
  for hver fisk G:
    Hvis F !=G:
    pVelocity +=  G.velocity 
  pVelocity = pVelocity/N-1
  returner (pVelocity-G.velocity)/chgVelocity 
```

## Øvelser

I afsnittet er øvelserne inddelt i hvorvidt de knytter sig til vektorer
eller eksemplet. Til at starte med arbejdes i to dimensioner. Senere i
øvelserne skal alle resultaterne generaliseres til n-dimensioner. Det er
dog en god ide at starte i 2-dimensioner. Generelt opfordres til, at man
i alle øvelserne starter med at justere klassediagrammet, udvide med en
skeletmetode og herefter test den. Endelig bør man teste og dokumentere
alle udvidelser.

### A. Øvelser om vektorer

1.  Modeller vektorklassen ved at konstruere et klassediagram, hvor du
    tilføjer relevante attributter til at starte med. Blandt de
    relevante attributter x- og y-koordinater, vektorens farve, tykkelse
    og navn. Indiker typerne i diagrammet.
2.  Udvid med en klasse, der initialiserer de indførte attributter.
3.  Overvej hvilke attributter som bør være private. Juster
    klassediagrammet.
4.  Indfør relevante mutator-metoder (getters og setters) for alle dine
    attributter og tilføj metoderne til klassediagrammet. Prøv metoderne
    af og se om de virker.
5.  Udvid klassediagrammet med metoder `scalar(k)`,
    `drawVector(xstart=0,ystart=0)`, `toString()`,
    `dotProduct(v)`,`normalize()`, `isParallel(v)`, `isOpposite(v)`,
    `isPerpendicular(v)` og `negate()`.
6.  Udarbej skeletmetoder for hver af metoderne hvor du tilføjer
    kommentaren `//pass` til alle metoderne, og prøv herefter at
    implementer de relevante metoder.
7.  Prøv alle metoderne af og se om de giver det ønskede resultat.
8.  Dokumenter alle metoder ved brug af JsDoc formatet.
9.  Udvid med en metode, der undersøger om en vektor er lig med eller
    forskellig fra en anden vektor. Dvs. hvorvidt koordinaterne er ens.
10. Tilføj en metode der giver mulighed for at lave elementvis
    multiplikation og division mellem to vektorer. Husk at teste og
    dokumentere dem.\
11. Udvid vektorklasen med nedenstående statiske sammenligningsmetoder
    (ved at skrive `static` i erklæringen af metoderne). Vær opmærksom
    på, at ved at erklære metoderne for `static` kan de kaldes uden, at
    man behøver at instantiere dem. Husk at teste og dokumentere dem.
    -   `lessThan(a,b)`: Undersøger om hvert koordinat i vektor a er
        skarpt mindre end tilsvarende koordinat i vektor b. Returner
        sand hvis det er tilfældet ellers falsk.
    -   `lessThanOrEqualTo(a,b)`: Undersøger om hvert koordinat i vektor
        a er mindre end eller lig tilsvarende koordinat i vektor b.
        Returner sand hvis det er tilfældet ellers falsk.
    -   `greaterThan(a,b)`: Undersøger om hvert koordinat i vektor a er
        skarpt større end tilsvarende koordinat i vektor b. Returner
        sand hvis det er tilfældet ellers falsk.
    -   `greaterThanOrEqualTo(a,b)`: Undersøger om hvert koordinat i
        vektor a er større end eller lig tilsvarende koordinat i
        vektor b. Returner sand hvis det er tilfældet ellers falsk.
12. Udvid nu med selvvalgte statiske metoder `max(a,b)` og `min(a,b)`,
    der finder det hhv. største og mindste koordinat i to vektorer, a
    og b.
13. Udvid biblioteket med følgende statiske metoder:
    -   `abs(v)`: Returnerer en ny vektor med koordinater som vektor v,
        men hvor den absolutte/numeriske værdi er taget på hver af
        koordinaterne.
    -   `floor(v)`: Returnerer det største hele tal mindre end eller lig
        med hvert koordinat i vektoren.
    -   `ceil(v)`: Returnerer det mindste hele tal større end eller lig
        med hvert koordinat i vektoren.
14. Udvid biblioteket med følgende statiske metoder:
    -   `power(vec,n)`: Metoden opløfter hvert element i heltallet `n`.
    -   `power(a,b)`: Metoden opløfter hvert element i vektor a med
        tilhørende element i vektor b.
15. Generaliser vektorbiblioteket så det kan håndtere og operere på
    vektorer i n-dimensioner.
16. Generaliser alle metoderne, som du har implementeret i 2d til
    n-dimensioner. F.eks. bør getters og setters tage parametre, der
    indikerer hvilke koordinat i form af et heltal fra 0 til n-1, der
    indikerer hvilket koordinat man ønsker at hente eller sætte. Overvej
    desuden hvilken datastrukturer, der skal bruges til at håndtere
    data.
17. I det følgende skal anvendes en såkaldt højere ordens funktion ved
    navn `map`. Funktionen `map` tager en funktion og lader den virke på
    hvert element i et array. Herunder et eksempel, som skal prøves af:

``` {.javascript}
const lstNumbers = [1, 2, 3, 4];
const sqrNumbers = numbers.map(mySquareFunction)

function mySquareFunction(num) {
  return num * num;
}
```

Givet et array ved navn A og en funktion f kan
```` map´ altså kaldes ved:   ```javascript   A.map(f)   ``` 1.  Udvid vektorbiblioteket, så det inkluderer en ````map(f)`funktion, der lader funktionen f virke på alle koordinater i vektoren. Prøv map af i praksis med forskellige funktioner. Bemærk at`f\`
skal være en funktion som tager et reelt tal og returnerer et reelt tal.

### B. Øvelser om animationer af fisk

Herunder følger en række øvelser, som udvide økosystemet eller akvariet
med ny funktionalitet. Igen bør man løbende opdatere klassediagrammet
med nye metoder og attributter samt teste og dokumentere sin kode.\
1. Konstruer klassediagrammer med metoder og attributter for de to slags
fisk. 2. Implementer klassen fisk, så fisken tegnes som en trekant og at
de bevæger sig rundt på skærmen. 3. Sørg for at fiskene "bouncer" af på
kanterne af skærmen i en tilpas afstand f.eks. med en margin på 100
pixels. 4. Overskriv måden fiskene tegnes på i de to børn, så
jægerfiskene og byttefiskene ser forskellige ud i fht form og farve.\
5. Udvid byttefiskenes måde at svømme på så de svømmer væk fra
jægerfisk. 6. Udvid jægerfiskene så de forsøger at fange byttefisk. 7.
Hvis jægerfisk kolliderer med byttefisk så spises byttefisk. Dvs. den
forsvinder og jægerfisk bliver en lille smule større i næste frame. 8.
Udvid så jægerfiskene undervejs og helt tilfældigt holder nogle små
pauser, hvor de "står stille" i vandet. 9. Udvid med en ny klasse
"Food", som dumper ned for oven og lander i bunden. Der må max ligge 5
stykker mad på bunden til et givent tidspunkt. 10. Hvis byttefiskene
kolliderer med maden svarer det til at de har spist maden. Spiser de
noget mad skal de tegnes en lille smule større i næste frame. 11. Udvid
byttefiskenes svømmemønster så ud over at undgå jægerfisk forsøger de
også at fange maden. Lad afstanden bestemme hvilket mål de prioriterer.

### C. Øvelser om implementering af flokadfærd hos fisk

Herunder følger en række øvelser, der skal udvide akvariet så særligt
byttefiskene har tendens til at svømme i flok. Igen bør man løbende
opdatere klassediagrammet med nye metoder og attributter samt teste og
dokumentere sin kode.

1.  Udvid fiskeklassen med en metode, så den kan håndtere seperation.
    Inddrag gerne relevante parametre så det er muligt at justere på
    graden af seperation.
2.  Udvid fiskeklassen med en metode, så den kan håndtere samhørighed.
    Dvs. den svømmer mod centrum af flokken. Inddrag gerne relevante
    parametre så det er muligt at justere på graden af samhørighed.
3.  Udvid fiskeklassen med en metode, så den kan håndtere justering.
    Dvs. hver fisk forsøger at svømme med samme hastighed som resten af
    flokken. Inddrag gerne relevante parametre så det er muligt at
    justere på graden af samhørighed.
4.  Indfør skydere der kan justere på de parametre og prøv at finde en
    fornuftig balance mellem de valgte parametre, så det ser mere
    realistisk ud.
5.  Udvid fiskenes adfærd, så når de nærmer sig bunden, holder de en
    kortere pause før de svømmer hen til flokken igen. Igen kan man
    indføre skydere, der justerer på hvor mange, hvor ofte de gør det og
    hvor længe ad gangen.
6.  Udvid adfærden så grupper af fisk opfører sig biased ift. hele
    gruppen. Det kan eksempelvis være, at en bestemt andel af fiskene
    kender til et område, hvor der ligger mad eller lignende og derfor
    foretrækker de at opholde sig dér.
7.  Udvid så fiskene som flok bevæger sig mod et bestemt punkt eller --
    omvendt - flygter fra et bestemt punkt. Eksempelvis en fjendtlig
    fisk.\
8.  Udvid En vektor beskriver strømninger i vandet der påvirker fiskenes
    hastighed
9.  Modeller en ny klasse, der kaldes for "Flock". Klassen skal håndtere
    flokkke af fisk, der opfører sig ens, og samle alle parametre som
    kan bruges til at justere flokken. Overvej hvilken relation der er
    mellem "Flock" og "Fish".
10. Implementer klassen "Flock", så man kan oprette en flok bestående af
    N fisk.

# 12. Dokumentation og kravspecifikation

Dokumentation af ens kode og programmer består typisk af skreven tekst
og illustrationer knyttet til koden, og spiller en central rolle i
softwareudvikling i forhold til at kommunikere med andre udviklere,
slutbrugerne af programmerne, andre aktører eller dig selv. Du vil blive
overrasket over hvor hurtigt man glemmer hvad man egentlig tænkte, da
man skrev koden for uger eller bare dage siden.

Målene med dokumentation kan bl.a. være at forklare:

-   Kravspecifikation: Hvilke krav stilles til systemet/brugeren m.m.
-   Programmets opbygning: Hvordan er programmet overordnet opbygget
    (arkitekturen bag) og hvorledes fungerer enkeltdelene herunder
    funktioner, klasser, algoritmer osv.
-   Slutbrugermanual: Hvordan bruges programmet.

I det følgende vil vi gennemgå hvorledes disse tre punkter kan
dokumenteres og indføre nogle værktøjer/modeller, som kan være relevante
at bruge i formidlingen.

Ligesom dokumentationen er væsentlig er det mindst ligeså essentielt at
få udformet en ordentlig kravspecifikation inden man starter
udviklingen. Det er kravspecifikationen der sætter de overordnede rammer
og mål for projektet. Man kan være nok så dygtig en programmør, der kan
skrive tusindvis af linjers kode i løbet af ingen tid, men hvis målene
ikke er klare, kan det hurtigt ende galt. Som den indisiske politiker
Gandhi formulerede det, så uanset hvor hurtigt du skrider frem, når du
ikke din destination, hvis du ikke går i den rigtige retning. Vi
dedikerer derfor sidste del af dette kapitel til at folde arbejdet med
kravspecifikationen lidt ud og beskrive nogle gode værktøjer, som er
relevante at inddrage i processen.

## Programmets opbygning

I det følgende kigger vi på hvorledes man kan dokumentere og formidle
sin kode på et kodenært niveau.

### Indlejret kommentarer til kildekoden

Et vigtigt værktøj til at dokumentere sin kode er ved brug af inline
kommentarer. De kan bruges efter behov og er særligt relevante ved mere
komplekse instruktioner. Man bør generelt undgå at kommentere alt for
meget, da det også kan forstyrre forståelsen. Ved større funktioner
eller klasser kan man skrive over den overordnede definition af disse,
nogle linjer der i grove træk skitserer hvad disse gør.

Til et hvert større sprog findes guides eller regler for hvorledes god
kode bør skrives og dokumenteres. Det kan være alt fra hvorledes man bør
navngive sine variabler, til indenteringen, til hvor man skifter linje.
Det er vigtigt, at man i den sammenhæng husker at være konsistent og
konsekvent i brugen af de valgte regler. Et vigtigt aspekt ved god kode
er, at det også er læsbar kode.

Pas med andre ord på kommentarer, der bruger mange linjer på at forklare
hvad koden gør. Hvis koden er så uklar, at den skal uddybes for meget så
er det måske et tegn på, at den bør omskrives. Undgå altså gerne
kommentarer såsom følgende:

``` {.javascript}
// Denne kode vil gøre det her (....) og det her (....)
// og hvem ved hvad den ellers gør
//...
```

Prøv i stedet at give en høj niveau beskrivelse af kontrolflowet i
forskellige situationer. Herunder et eksempel for en funktion der
udregner summen af to tal:

``` {.javascript}
/**
 * Returnerer summen af to tal x og y.
 *
 * @param {number} x Den første operand skal være et reelt tal.
 * @param {number} x Den anden operand skal være et reelt tal.
 * @return {number} x Udregner summen af x og y.
 */
function plus(x, y) {
  ...
}
```

Ved at gøre brug af denne notation kan man gøre brug af markup-sproget
JSDoc se <https://jsdoc.app/>, som giver mulighed for let at
autogenerere dokumentation via html-sider. Har man installeret JS Doc
kan man reelt bare skrive

``` {.javascript}
jsdoc navn_på_fil.js
```

Hvor "navn_på_fil.js" skal erstattes af den konkrete javascript-fil, så
genereres automatisk en html side med dokumentation i samme bibliotek.
Ydermere understøtter de fleste udviklingsmiljøer (herunder VS code)
JSDocs notation, så man kan få autogenereret kode fremover ved at
benytte JSDoc. Øvelserne vil gå mere i dybden med brugen af JSDoc.

Når man bruger JSDoc bør man også overveje, hvilket sprog man skriver
sine kommentarer i om det eksempelvis skal være dansk eller engelsk.
Generelt er det en god ide at skrive på engelsk, da nøgleordene også er
på engelsk og en langt større grupppe af udviklere forstår engelsk
fremfor dansk. Vi varierer lidt i denne tekst, da der er tale om en
lærebog og at understrege, at det grundlæggende også er ok, at bruge
dansk. Man skal bare være opmærksom på det og passe på med at blande
engelsk og dansk i kommentarer eller kode.

Herunder et lidt større eksempler hvor der indgår klasser og metoder i
dokumentationen ved brug af JS Doc.

``` {.javascript}
/** Class that represents a circle. */
class Circle {
    /**
     * Constructs a circle
     * @param {number} x - Circles x coordinate.
     * @param {number} y - Circles y coordinate.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Gets x-value.
     * @return {number} x-value.
     */
    getX() {
        // ...
    }

    /**
     * Get y værdien.
     * @return {number} y-value.
     */
    getY() {
        // ...
    }

}
```

Herunder et eksempel på nedarvning fra ovenstående klasse:

``` {.javascript}
/**
 * Class that represents point
 * @extends Cirkel
 */
class Point extends Circle {
    /**
     * Creates a point (circle (without radius)).
     * @param {number} x - value.
     * @param {number} y - value
     * @param {number} c - value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Gets color of point.
     * @return {number} color of point in colorcode.
     */
    getColor() {
        // ...
    }
}
```

### Refaktorisering

Som det blev nævnt tidligere, så er god kode ofte kendetegnet ved at
være relativt selvforklarende og lettere tilgængeligt. Derved bliver
dokumentationsbehovet reduceret. Med andre ord fremfor at skrive en
masse kommentarer kan man nogle gange også lave en såkaldt
refaktorisering af sin kode for at gøre den mere læsbar.
`Refaktorisering` betegner den proces hvorved man omskriver kode, så den
er mere enkel og lettere at forstå.\
Herunder et eksempel på kode, hvor man kan reducere behovet for
dokumentation ved at refaktorisere. Først den oprindelige version:

``` {.javascript}
//Version 1:
function listPrimes(N) {
  for (let i = 2; i < N; i++) {
    // checks if the integer i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i)
  }
}
```

Løkker inde i løkker kan ofte være svære for nogle at forstå og kan
gøres mere læsbare og forståelige, hvis man deler det op i mindre bider.
Eksempelvis kan man sætte den inderste løkke ind i en funktion:

``` {.javascript}
function listPrimes(N) {
  for (let i = 2; i < N; i++) {
    if (!isPrime(i)) continue;
    console.log(i)
  }
}

function isPrime(N) {
  for (let i = 2; i < N; i++) {
    if (N % i == 0) return false;
  }
  return true;
}
```

Her har vi sat den inderste løkke, der tjekker om tallet `N` er et
primtal.

Et andet eksempel kunne være hvor vi har løkker efterfulgt af hinanden.
Her kan det ofte være hensigtsmæssigt refaktorisere løkkerne til
funktioner.

``` {.javascript}
let Lx= []
let Ly= []
let n = 20
for(let i=0;i<n;i++)
{
    let x = random(i,i+5)
    Lx.push(x)
    let y = random(i,i+5)
    Ly.push(y)
}

beginShape(LINES);
    for(let i=0;i<n;i++)
    {
        vertex(Lx[i],Ly[i])
    }
endShape();
```

I sådanne tilfælde kan det være bedre at konstruere nogle funktioner der
erstatter løkkerne:

``` {.javascript}
function generatePoints(n)
{
    for(let i=0;i<n;i++)
    {
        let x = random(i,i+5)
        Lx.push(x)
        let y = random(i,i+5)
        Ly.push(y)
    }
}

function drawLines(n)
{
    beginShape(LINES);
        for(let i=0;i<n;i++)
        {
            vertex(Lx[i],Ly[i])
        }
    endShape();
}
```

### Pseudokode

Pseudokode betyder frit oversat "ikke ægte kode". Det er formuleret i
almindeligt engelsk, dansk eller et tredje sprog, og udgør en mere
abstrakt højniveau beskrivelse af koden, som er lettere tilgængelig end
den egentlige kode. Det er kendetegnende for pseudokode, at det typisk
er formuleret, så det er uafhængig af programmeringssprog. Pseudokoder
bliver brugt i stor stil i videnskabelige tekster og lærebøger til at
kommunikere og formidle centrale ideer og hvorledes de kan omsættes til
kode. Pseudokode bruges ofte til at formidle mere komplekse stykker
kode, der løser et mere generisk problem. Et godt eksempel herpå er
algoritmer, som er en afsluttet sekvens af instruktioner, der løser et
problem eller udfører en konkret opgave. Herunder et eksempel på
pseudokode for en algoritme der ligger to tal sammen:

1.  Indlæs to tal
2.  Adder tallene
3.  Print resultatet

Eller algoritmen for at lave te: 1. Tag 1 tepose og placer den i en kop
2. Hæld kogende vand ned i koppen 3. Lad den trække i 5 minutter 4. Tag
teposen op af vandet og smid den ud

Endelig også et højniveau eksempel på hvorledes vi kunne konstruere
Fibonacci-talfølgen, som er langt fra egentlig kode:

1.  Givet tal N:
2.  Indlæs tallene 0 og 1
3.  Konstruer en talfølge, hvor næste element er summen af de to
    foregående.
4.  Stop når vi har summet op til N elementer.

Disse stumper pseudokode er særdeles højniveau og ligger langt fra den
mere programmeringsnære variant af pseudokoden, som vi skal se senere.
Skulle disse tre linjer implementeres i praksis ville de fylde
betydeligt mere. Den gode pseudokode er typisk kendetegnet ved en
fornuftig balance mellem kompleksiteten af den løsning man for søger at
beskrive med deltaljegraden af pseudokoden i forhold til den målgruppe,
som man skriver til.

Pseudokode minder om rigtig kode i den forstand, at den inddrager
typiske nøgleord fra programmering såsom `if-else`, `while`, `for` m.m.
og dermed induceres mere eller mere direkte en struktur for programmet
men man abstraherer for en række væsentlige detaljer såsom valg af
datastruktur etc. Det gøres med henblik på at gøre det nemmere at
kommunikere det overordnede dataflow i ens program/algoritme.

Man kan tænke på pseudokode som et skelet for rigtig kode, der kan
oversættes til maskinekode uden at gøre noget. God pseudokode skal gerne
gøre det nemmere og hurtigere at implementere den givne algoritme i ægte
kode.

Herunder et eksempel på pseudokode for fibonacci-funktionen, hvor vi i
højere grad begynder at nærmere os egentlige kode. Vi klassificerer
derfor koden som værende på et mellemniveau.

``` {.javascript}
// Version 2: Mellemniveau pseudokode for Fibonacci 
Fibonacci (n):
    loop mellem 0 og n
        sum de to tidligere fibonacci tal
        når vi når n, returneres værdien
```

Vi er stadig et stykke fra rigtig kode, men vi begynder at se strukturen
af et egentligt program. Der er en række uklarheder såsom at summe de to
tidligere fibonacci tal.

Herunder et endnu mere kodenært eksempel, hvor vi tydeliggøre nogle af
uklarhederne. Da vi er meget nær rigtig kode kaldes denne version for
lavniveau:

``` {.javascript}
// Version 3: Lavniveau pseudokode for Fibonacci 
function Fibonacci(n):
    if n er 0 eller 1, return 1

    // indlæs de første to fibonacci tal
    f1 = 1
    f2 = 1

    loop fra 2 til n:
        fibi = f1 + f2
        //Opdater tidligere fibonnaci tal
        f2 = f1
        f1 = fibi

   return fibi
```

Udfra denne pseudokode burde det være muligt ret hurtigt at implementere
fibonacci i praksis.

Der findes ingen fast konvention for hvorledes pseudokode skal se ud,
men det er vigtigt, at valget af syntaks er konsekvent og konsistent.

### Tommelfingerregler for god pseudokode

Selvom der ikke findes nogen entydige krav til syntaksreglerne i
pseudokode kommer herunder en række forslag, som kan være gode at følge.
- Undgå generelt at skriv mere end et udsagn pr. linje. Det gør generelt
pseudokode nemmere at læse for de fleste.\
- Sæt evt nøgle ord med store bogstaver eller fed skrift (såsom `READ`,
`WRITE`, `IF`, `WHILE`, `FOR`).

-   Ryk ind eller tabuler for at vise hierarkiet i ens kode. Særligt
    relevant når man eksempelvis har betinget udførsel, løkker eller
    funktioner i sin pseudokode.

-   Afslut flere linjers strukturer. Har man eksempelvis en `IF`
    betinget udførsel er det en god ide at slutte med eksempelvis
    `END IF` eller lignende.

-   Undgå at blande forskellige sprog i sin pseudokode. Dvs. undgå
    eksempelvis at blande dansk og engelsk.

-   Overvej hvem din målgruppe er og hvilken detaljegrad af pseudokoden,
    der er relevant. Skal man kunne implementere pseudokoden selv eller
    er hensigten mere at formidle en ide eller et koncept?

-   Første trin i pseudokode er at finde et navn til sit program. Typisk
    bruges navne der benytter CamelCase, dvs. starter med stort og
    består af to ord. Det andet ord starter også med stort. Eksempel.
    InsertionSort, SelectionSort der beskriver to forskellige
    sorteringsalgoritmer (dvs programmer der sorterer tal i
    stigende/faldende rækkefølge) etc.

-   Når vi designer pseudokode antager vi at koden udføres sekventielt.
    Det gør vi ret ofte, når vi designer algoritmer. Såfremt man skriver
    pseudokode, der kan afvikles parallelt af flere computere bør man
    gøre opmærksom på det i pseudokoden.

-   Pseudokode varierer i stil fra programmør til programmør, men man
    låner typisk i sin syntax fra programmeringssprog såsom Python,
    Java, C++ og lignende. Selvom pseudokode generelt skal være
    sproguafhængig kan det stadig være en god idé at låne den syntax,
    man skal lave selve koden i. Skal man eksempelvis skrive et Python
    program, kan man låne den syntax en smule til sin pseudokode

-   Prøv at (meta-)kommuniker allerede igennem navngivningen af
    metoder/funktioner/algoritmer eller lignende, hvad de gør samtidig
    med, at navnene skal letforståelige og sigende. F.eks. er det helt
    indlysende bedre at give en funktion, der adderer noget sammen
    titlen "sum()" fremfor eksempelvis et tilfældigt navn som "x3j67()".
    Husk på at hele ideen med pseudokode er at gøre koden lettere
    tilgængelig for andre. Hvis et navn er sammensat af mere end et ord,
    kan man starte andet ord med stort eller lave en underscore f.eks.
    "squareRoot()" eller square_root()\"

-   Navngivning og initialisering af variable: Variabler skal også have
    letforståelige og sigende navne f.eks. navn, alder, højde. Hvis
    variablen har mere end et ord kan man starte andet ord med stort
    såsom forNavn eller efterNavn. Erklæring (Initialisering) af
    variabler kan gøres ved brug af eksempelvis nøgleordet Set, hvor man
    gerne må give den en værdi med det samme.Det kunne være Set sum = 0

-   Hvis man skal erklære mange variabler kan det være en god ide at
    gøre det på samme linje, så som:
    `javascript     sum = 0, Set x = 0, Set y = 0, Set z = 0, Set isCube = FALSE`
    En sådan erklæring eksekveres fra venstre til højre.

-   Man kan læse data fra variabler, lister eller lignende ved brug af
    et nøgleord som READ. Herunder eksempler:
    `javascript     Read: Liste af variabler     Read: x     Read: x,y,z`

-   Tilsvarende kan man præciserere output ved brug af eksempelvis
    `Print` eller `Write`. Herunder et eksempel:
    `javascript     Print: Besked eller Variabel     Print: ”Hello World” //Besked     Print: x, y        //Variabler       Write: Besked eller Variabel      Write: ”Hello World”       //Besked     Write: ”Værdien er”, x   //Besked og variabler`

### Prosakode

Prosakode er en mindre kodenær beskrivelse. Der stilles ingen krav til,
at man bruger bestemte keywords eller lignende. Vigtigste er dog, at
prosakoden faciliterer og understøtter en forståelse af hvorledes man
kan skabe en overordnet struktur for programmet. Det er også muligt at
kombinere prosakode og pseudokode. Herunder et eksempel på prosakode for
en funktion, der givet en streng returnerer hvorvidt det er et
palindrome eller ej:

Givet en streng $s$ som input. Vores program gør da følgende: 1. Tjek
først om strengen $s$ består af et eller flere tegn. Hvis den er tom
eller kun består af et tegn returner da sandt. 2. Hvis den består af
flere tegn sammenlign første og sidst element. Hvis de to elementer er
forskellige returnes falsk. Ellers fjern dem fra strengen og start
algoritmen forfra men nu med den reducerede streng som input.

### Flowdiagrammer

Flowdiagrammer eller rutediagrammer kan bruges til at lave en visuel
repræsentation af programmets flow, der grundlæggende er uafhængig af
det valgte sprog, hvilket muliggør at programmører i andre sprog kan
gøre brug af diagrammet.

Det kan være en ide at bruge, når man skal illustrere eller dokumentere
mindre mere komplekse stykker kode til andre programmører. Den klare
ulempe ved flowdiagrammer er, at jo større stykker af kode man forsøgere
at visualisere med flowdiagrammer, jo mere kompleks og til tider
uoverskuelig risikerer flowdiagrammet at blive. Som supplement til
pseudokode og prosakode er flowdiagrammer rigtig gode.

Flowcharts tegnes generelt fra toppen til bunden Alle elementer (æsker)
skal forbindes med pile (Flow kontrol) Alle flowcharts starter med et
Terminal eller Proces element Beslutningselementer har 2 udgange -- en
til sandt/ja (TRUE) og en til falsk/nej (FALSE)

Herunder eksempler på forskellige figurer der indgår i flowdiagrammer og
efterfølgende eksempler på hvorledes de kan sættes sammen til et konkret
stykke kode, der gør noget.

-   Terminal: Indikerer start eller slutning på algoritmen. Vi tegner en
    terminal og skriver "START" inden i den for at indikerer starten af
    flowchartet. På samme måde skriver vi "STOP" inde i den terminal der
    afslutter flowchartet
-   Data eller Input/Output (I/O). Viser at denne instruktion tager et
    input eller viser et output\
-   Proces. Indikerer en intern instruktion som f.eks. Initialisering,
    beregning eller lignende\
-   Beslutning. Bruges til at stille et spørgsmål der enten er sandt
    (TRUE) eller falsk (FALSE). F.eks. Er du online? Svaret er enten ja
    (TRUE) eller nej (FALSE)
-   Forbindelse. Bruges til at forbinde flowcharts der fylder mere end
    én side. Man kan skrive: Til Forbindelse 3 på side 2.\
-   Flow kontrol. Viser retningen I flowet fra en kasse til en anden

![Symboler anvendt i
flowdiagrammer](../kap12/images/flowdiagramsymboler.png)

Herunder nogle eksempler på flowdiagrammer.

I det første eksempel indlæses to tal og vi returnerer det største:

![Det største af to tal](../kap12/images/flowmax2numbers.png)

Herefter et kodenært flowdiagram for Fibonacci-funktionen:

![Fibonacci funktionen](../kap12/images/fibflow.png)

### Brugerhistorier

Brugerhistorier beskriver en afgrænset interaktion mellem brugeren og
systemet og kan være relevante at inddrage i sin dokumentation enten som
en del af koden eller måske prosakoden. Brugerhistorier kan være gode
til at belyse noget af den tavse viden som ofte ligger gemt i de
indledende faser af softwareudvikling. Med tavs viden skal her forstå
viden, som vi først bliver opmærksomme på, når vi først er længere henne
i udviklingsprocessen.

En effektiv brugerhistorie er kendetegnet ved, at den opfylder følgende
to kriterier: - Første kriterie er, at den er skrevet i et naturligt
sprog, idet den skal fungere som kommunikationsmiddel mellem programmets
bruger og udviklingsteamet. - Det andet kriterie er, at den er
evaluerbar. Når brugerhistorien er implementeret, kan brugerhistorien
bruges som udgangspunkt for en test af programmets funktion.

Detaljegraden giver mulighed for at implementere brugerhistorien på en
entydig måde, uden at blive så omstændig, at den hæmmer forståelsen.

Brugerhistorierne nummereres - eller navngives på anden vis - så man kan
henvise til dem på en struktureret og entydig måde.

Herunder et eksempel på en brugerhistorie, der bliver brugt i en online
pizzabutik, når man har valgt en pizza:

-   Brugeren vælger først en pizza udfra listen af pizzaer.
-   Brugeren klikker på knappen "Bestil flere".
-   Programmet viser en dialog, hvor brugeren kan se:
    -   Pizzaens navn og hvilke ingredienser den indeholder
    -   En dropdown box, hvor man kan vælge det antal pizzaer man ønsker
        at bestille. (0-10)
    -   En "OK"-knap
-   Brugeren vælger det ønskede antal pizzaer af den bestemte type og
    klikker "OK".
    -   Hvis antallet er større end 0, oprettes en transaktion, hvor
        pizzaernes samlede pris justeres, og pizzaerne tilføjes til
        kurven.
    -   Hvis antallet er 0 oprettes ingen transaktion, og der sker intet
        med kurven.
-   Programmet lukker dialogen.

Man kan evt. supplere sine brugerhistorier med figurer, men det er ikke
et krav.

## Kravspecifikation

En kravspecifikation er særdeles væsentligt at udarbejde og inddrage i
udviklingen af nye systemer. Det handler helt konkret om at få
formuleret så præcist som muligt hvad skal programmet kunne og mindst
ligeså vigtigt, hvad det ikke skal kunne. Som vi skal se senere, så er
der en lang række forskellige aktører i spil, når et system skal
udvikles, og der kan være stor forskel på de enkeltes perspektiv. Det
forsøger figuren nedenfor på humoristisk vis at illustrere:

![Forskellige perspektiver i
softwareudvikling](../kap12/images/rollersoftware.jpg)

Udformingen af en kravspecifikation er i høj grad en
kommunikationsopgave. Det handler om at være så præcis og skarp i sin
kommunikation, at de mulige aktører får en så ensartet opfattelse af
løsningen. I den sammenhæng er det mao relevant at gå i dialog med
brugeren, kunden eller andre relevante aktører ved brug af eksempelvis
kvantitive undersøgelser såsom spørgeskemaer eller kvalitative
interviews.

Afhængig af systemets kontekst og hvilket fokus en given aktør har, kan
et system bestå af en rækkke forskellige typer krav. Herunder tre
forskellige typer krav, som er væsentlige at have i fokus i udviklingen
af systemet:

-   Forretningskrav danner en rammesætning om det overordende projekt og
    formuleres ud fra nogle høj niveau mål, der ikke nødvendigvis har
    fokus på de tekniske aspekter ved det endelige produkt.\
-   Brugerkrav betegner de krav som brugeren eller en potentiel bruger
    har til systemet. De er typisk udledt af kvalitative og kvantitative
    undersøgelser, såsom spørgeskemaer, interviews og tænke-højt
    forsøg.\
-   Systemkrav betoner de tekniske krav til systemet.

Typisk består kravspecifikationen af følgende faser: 1. Indsamling af
feedback og ønsker fra bruger 2. Analyse af om de foreslået krav er
realistiske i forhold til visionen med systemet. 3. Definering af krav
fra et brugerperspektiv og en detaljeret beskrivelse af de funktionelle
og tekniske krav 4. Prioritisering og planlægning af hvilke krav der
implmenteres hvor og hvornår 5. Validering og vedligeholdelse af
systemet med henblik på at sikre at systemet rent faktisk understøtter
de relevante krav.

Selvom udarbejdelsen af en kravspecifikation ikke nødvendigvis kræver en
særlig teknisk indsigt til det endelige produkt, så er det stadig en god
ide at kende noget til nogle af de aktiviteter og værktøjer, som kan
bruges og inddrages i processen.

I det følgende vil vi gennemgå nogle grundlæggende men centrale
værktøjer og aktiviteter i forhold til at udforme en kravspecifikation.

### Use-case diagrammer

Et use-case diagram er en grafisk illustration af brugerens mulige
interaktioner med et program eller system. Det viser bl.a. den centrale
funktionalitet systemet har, men også hvilke roller eller brugere, der
har adgang til systemet. Diagrammet giver med andre ord en abstrakt,
højniveau beskrivelse af systemet og det brugere, hvor man har skrællet
meget af programmeringsteknikaliteten væk for at give interessenterne en
overordnet forståelse af systemet samt mulighed for at belyse den
overordnede interaktion mellem brugere og systemet. Man behøver med
andre ord ikke et dybere kendskab til kode for at læse og forstå et
diagram, og det kan bidrage til tidlidt i udviklingsfasen at belyse
noget af den såkaldte "tavse" vide og krav, som ofte først erkendes
senere i processen. Med tavs viden og krav skal forstå implicit viden og
krav, der ikke nødvendigvis er i talesat eller skrevet ned i starten og
som man måske ikke engang er bevidst om i den indledende fase, men først
senere i processen (eller måske aldrig) bliver bevidst omkring.

### Nødvendige og mindre nødvendige egenskaber

Ofte kan det være en god ide inden man overhovedet begynder at udvikle
på systemet at gøre sig klart hvad der er essentielle krav til ens
system versus krav, som kunne være rare at have men ikke er absolut
nødvendige. Man taler i den sammenhæng også om det engelske udtryk "Nice
to have and need too have". Det hander reelt set om at få alle aktører i
processen en fælles forståelse af de hvilke elementer, der implementeres
først og hvilke kan vente til senere eller måske slet ikke er nødvendige
at implementere. Alt for mange startups og nystartende projekter
forsinkes eller mislykkedes fordi man eksempelvis ikke har gjort sig
klart, hvad der er essentielt i ens system, men i stedet bruger en masse
ressourser på at implementere krav, som ikke er umiddelbart nødvendige.

"Nice to have og need to have" er del af den så kaldte "MoSCoW"-tilgang,
som står for: - "Must have": Krav til systemet skal implementeres. -
"Should have": Krav til systemet der bør implementeres på sigt. - "Could
have": Krav der kan implementers, når kravene i "Must have" og "Should
Have" er implementeret. - "Will not have": Krav til systemet, som ikke
implementeres.

Herunder en figur, der illustrer hvorledes man kan opstille MoSCoW på en
smart og brugervenlig måde. Det kan være en digital og/eller fysisk
tavle. Man kan evt bruge gule notes fysisk, så man let kan rykke rundt
på de enkelte krav. ![MoSCoW i praksis](../kap12/images/moscow.png)

Fordelene ved MoSCow-metoden er bl.a., at det er en effektiv og simpel
måde at belyse kravspecifikationen samt at få det kommunikeret ud til
programmører, kunder, projektledere med mere. Netop det at den ignorerer
detaljer omkring implementationen, gør det muligt uafhængig af
kodeforståelse at få en fornemmelse for hvad system skal kunne.

Ulempen ved metoden er, at der ikke nødvendigvis er et rationale eller
begrundelse for prioriteringen af de givne beslutninger og at der kun er
fire prioritetsniveauer.

I forhold til at gøre MoSCow-metoden en smule mere kodenær, kan man
vælge at inddrage nøgleord såsom "skal" og "kan" i sine brugerhistorier
til at fortæller vigtigen af noget funktionalitet. Herunder et eksempel
hvor vi kigger på nogle udvalgte brugerhistorier:

-   Brugeren SKAL registrere en ny konto i systemet.
-   Brugeren SKAL logge ind på applikationen med et brugernavn og en
    adgangskode.
-   Brugeren BØR se alle nye enheder i netværket.
-   Brugeren MÅ IKKE kunne se login fra andre brugere.
-   Brugeren SKAL vælge en pizza udfra listen af pizzaer.
-   Brugeren KAN vælge drikkevare udfra listen af pizzaer.
-   Brugeren KAN klikker på knappen "Bestil flere".

## Øvelser

1.  Skriv noget pseudokode for hvordan du vil logge på facebook?
2.  Tegn et flowdiagram, der ligger tallene 30 og 40 sammen.
3.  Lav pseudokode og/eller flowdiagrammer for hver af følgende:
    -   Find summen af 5 tal
    -   Print "Hej Verden" 10 gange
    -   Program, der læser to tal, ganger (multiplicerer) dem og printer
        deres produkt
    -   Program, der gør det følgende: Spørg brugeren om et tal. Hvis
        tallet er mellem 0 og 10, så skriv tallet i blåt. Hvis tallet er
        mellem 10 og 20, så skriv det i rødt. Hvis tallet er mellem 20
        og 30, så skriv det i grønt. Hvis tallet er noget andet så skriv
        det er en forkert farve option.
4.  I det følgende ses noget prosakode på punktform for et program, der
    tager en streng og returner sandt eller falsk. Overvej hvad
    programmet gør og prøv at oversætte prosakoden til mere kodenær
    pseudokode.
    a.  Tjek først om strengen består af et eller flere tegn. Hvis den
        er tom eller kun består af et tegn returner da sandt.
    b.  Hvis den består af flere tegn sammenlign første og sidst
        bogstav. Hvis de to bogstaver er forskellige returner falsk.
        Ellers fjern dem fra strengen og start algoritmen forfra men nu
        med den reducerede streng som input.
5.  Herunder ses kode pseudokode for en søgerutine. Hvad gør koden? Prøv
    at oversætte den til rigtig kode:

``` {.javascript}
procedure linear_search (list, value)
    for each item in the list
        if match item == value
            return the item's location
        end if
    end for
end procedure
```

6.  Skriv pseudokode for et program, der tager en tekststreng og
    returner strengens karakterer i omvendt rækkefølge. Husk at det
    gerne skal være nogenlunde uafhængig af et specifikt sprog og at det
    gerne skal være detaljeret alligevel.
7.  Forklar hvad følgende flowdiagram gør og omskriv det til konkret
    kode. ![Flowdiagram](../kap12/images/flowmax3numbers.png)
8.  Forklar hvad følgende flowdiagram gør og omskriv det til konkret
    kode. ![Flowdiagram](../kap12/images/linearsearch.png)
9.  Forklar hvad følgende flowdiagram gør og omskriv det til konkret
    kode. ![Flowdiagram](../kap12/images/primeflow.png)
10. Skriv højniveau, mellemniveau og meget kodenær pseudokode for
    følgende funktioner (som vi gjorde med Fibonacci ovenfor):
    1.  Skriv en funktion der finder det mindste positive tal af fire
        givne tal som argumenter.
    2.  Skriv en funktion der summer alle tal i en liste.
    3.  Skriv en funktion, der bytter om på rækkefølgen i en given
        liste.
11. I det følgende skal laves flowdiagrammer og/pseudokode for følgende
    funktioner:
    1.  Skriv en funktion, der undersøger om et tal er indenfor et
        givent interval.
    2.  Skriv en funktion, der tager en liste af tal og returnerer en ny
        liste der består af de unikke tal fra den liste.
    3.  Skriv en funktion, der givet en liste kun printer de lige tal.
12. Dokumenter funktionerne ved brug JSDoc formatet. Det er automatisk
    understøttet i de nyeste versioner af VS code. Alternativt kan det
    installeres fra <https://jsdoc.app/>.
13. Prøv nu at implementere et par af funktionerne og importer dem i din
    kode. VS Code skulle gerne tilbyde hjælp (den såkaldte
    "Intellisense") til at genere dele af funktionen.
14. Udvælg et større projekt som du har arbejdet med, hvor du også
    benytter klasser. Brug notationen fra JSDoc til at kommentere din
    kode, som eksemplet med klassen Cirkel i nærværende kapitel.
15. I det følgende skal man ved brug af brugerhistorier, use-case
    diagrammer og MoSCow-metoden overveje, beskrive og argumentere for
    en kravspecifikation til en webshop, der handler med sko.
16. I det følgende skal man ved brug af brugerhistorier og
    MoSCow-metoden overveje, beskrive og argumentere for en
    kravspecifikation til et system, der skal håndtere dyrenes
    spisetider og hvor meget de har fået at spise i en Zoologisk Have.
    \# 13. Softwarearkitektur Systemer har det med tiden at udvikle sig
    i omfang og kompleksitet. Tag eksempelvis fysikmotoren, Unreal
    Engine, der vurderes at fylde et par millioner linjers kode, eller
    styresystemet, Android, som i dag vurderes at være oppe på 13-15
    millioner linjers kode. Begge systemer har hundreder eller tusinder
    af udviklere bag. For at skabe struktur og systematik samt et
    fællessprog til at beskrive systemet overordnede rammer, er der brug
    for at inddrage softwarearkitektur.

Softwarearkitektur definerer en grundlæggende organisering af et system
og dets opførsel herunder hvordan de enkelte komponenter i systemet er
samlet samt deres forhold til hinanden og kommunikationen mellem dem.

Softwarearkitektur er et slags "blueprint" for hvorledes systemet er
opbygget. Den danner derudover udviklingsgrundlaget for programmørerne,
testerne, designerne osv, så de ved hvad der skal laves hvornår og i
overordnet termer hvordan.\
Samtidig inddrager og afbalancerer den projektets forskellige aktørers
behov og ønsker samt hvorledes holdet bag udviklingen organiseres.

Det er med andre ord en ekstremt vigtig del i udviklingen af større og
mere komplekse systemer.

I det følgende gennemgår vi en række forskellige modeller til at
konceptualisere og visualisere systemarkitektur. Det giver et bedre
grundlag til at forstå hvorledes et system bør opbygges og belyser noget
af den tavse viden og kompleksitet, som ligger gemt i systemer af en vis
størrelse.

## Master-slave eller klient-server arkitektur - n-tier model

## Tre-lags-arkitektur

Tre-lags-arkitektur er en ret simpel struktur, der inddeler et system i
tre lag: - Et præsentationslag hvis primære opgave at give brugeren af
programmet en forståelig og tilgængelig grænseflade, som programmet er
opbygget af. - Et applikationslag, der står for at koordinere og
håndtere brugerens interaktion i præsentationslaget med det
underliggende datalag. - Et datalag hvor data knyttet til systemet er
gemt og dets opgave er at bistå applikationslaget i at sende relevante
data og information.

Præsentationslaget kommunikerer med datalaget igennem applikationslaget
og aldrig direkte. Herved separeres programlogik fra data og
brugergrænseflade. Skal der ændres i nogle af lagene kan det i højere
grad gøres uafhængig af de andre lag. Tre-lags-arkitektur kan bruges med
stort set alle tænkelige systemer, som en grundlæggende arkitektur.
Eksempelvis et website, hvor man klikker på en knap, der så kalder noget
kode i applikationslaget, som henter nogle data frem, der så sendes
tilbage til brugergrænsefladen og vises på sitet.

## UML-diagrammer

UML står for Unified Modelling Language og er et diagramsprog til
modellering af ens systemer. Det giver en fælles forståelsesramme og
sprog til at kommunikere funktionalitet og arkitektur ud på tværs af
teknologi og sprog.

UML omfatter mange forskellige diagramtyper og man kunne skrive lange
bøger om UMLs forskellige strukturer. I det følgende vil vi introducere
nogle klassediagrammer, som er centrale i forhold til at visualisere og
illustrere objektorienteret arkitekturer. Det skal understreges, at UML
er ekstremt omfattende og man kunne fylde flere bøger alene om UML, men
her berøres kun hvad der er essentielt i forhold modellering af klasser
og deres overordnede relationer til hinanden.

### Klassediagrammer

Et klassediagram kan betragtes som en visuel repræsentant for et objekt.
Man tegner et rektangel med 3 under-inddelinger bestående af: -Navn:
Klassenavnet -Attributter: De feltvariable som er knyttet til klassen.
-Metoder: De operationer/funktioner som er implementeret i klassen.
Typisk opererere de på attributterne. Herunder et eksempel på et
generisk klassediagram:
![Klassediagram](../kap13/images/klassediagram.png)

Modifikatorer som prefix for attributter og operationer indikerer
synligheden af disse. F.eks. betegner et "+", at metoderne eller
attributterne er offentlige. Dvs. tilgængelig for andre klasser og "-"
betegner at klassen er privat. Man kan også indikerer med en hashtag, at
attributten er beskyttet/protected. Dvs. kun tilgængelig for børn af den
definerende klasse.

Herunder et eksempel på et klassediagram hvor det er illustreret hvordan
man signalere synligheden af attributter og metoder:

![Udvidet klassediagram](../kap13/images/udvidetklassediagram.png)

Generelt kan det variere hvor mange detaljer man ønsker at give sine
klassediagrammer. Man kan typisk skelne mellem tre niveauer:

-   Konceptuelt niveau hvor kun navnet på klassen angives
-   Specifikationsniveau hvor klassens navn, metoder og attributter samt
    deres tilgængelige er inkluderet
-   Implementeringsniveau hvor man også angiver typerne på attributterne
    og typer til parametre for de angivne metoder/operationer. Man
    sætter et ":" hvor typen indikeres.

Det afhænger bl.a. af målgruppen hvilket niveau af detaljeringsgrad man
vælger, men også hvor omfangsrigt projektet er.

Klassediagrammer kan sammensættes og man kan med forskellige relationer
illustrere hvorledes de er forbundet. Herunder et eksempel:

![Klassediagrammer](../kap13/images/udvidetklassediagram.png)

Som det bemærkes kan et klasser have forskellige relationer til
hinanden.

Herunder en oversigt over nogle af vigtigste mulige relationer man kan
sætte mellem klasser. Vi vælger at bruge de engelske betegnelser, så det
er nemmere at slå op. For en fuldstændig oversigt bedes man konfererere
med referencemanualen til UML.

![Relationer mellem
klassediagrammer](../kap13/images/relationerdiagrammer.png)

### Tilstandsdiagrammer

Tilstandsdiagrammer beskriver forskellige tilstande, som programmet kan
være i og hvordan man bevæger sig fra en tilstand til en anden. De kan
bruges til at modellere et system eller en klasses adfærd.

Der findes forskellige variationer over tilstandsdiagrammer og hvordan
de tegnes, men i praksis skelner vi overordnet mellem to slags
tilstandsdiagrammer:

1.  Adfærds-tilstandsdiagram: Som beskriver adfærden af et element i
    systemet. Det kan i princippet også være hele systemet. Det bruges
    til at repræsentere en konkret implementation af et system.
2.  Protokol-tilstandsdiagram: Beskriver adfærden af en protokol, som
    betegner et sæt af regler, der beskriver systemets adfærd. De
    repræsenterer en specifik implementation af et element i systemet.

Herunder to eksempler tilstandsdigrammer. Først et meget simpel et der
beskriver tilstandene for en dør, som kan være åben eller lukket samt
pile, der illustrerer en transition: ![Tilstandsdiagram for en
dør](../kap13/images/statediagram0.png)

I objekt-orienteret forstand kan man tænke på tilstande, som nogle af de
data, der er knyttet til objekt, mens objekets metoder er
transitionerne, der ændre på de mulige tilstande.

Herunder et mere komplekst eksempel på et tilstandsdiagram:
![Tilstandsdiagram for en
opvarmningsproces](../kap13/images/statediagram1.png) Diagrammet
illustrerer, at en tilstand kan have forgrenet tilstande. Her handler
det om at når man vil varme noget op i en ovn eller lignende, så vil man
muligvis først skulle aktivere ovnen for derefter at kategorisere den
som aktiv.

### Use-case-diagrammer

Et use case-diagram illustrerer på et overordnet niveau forholdet mellem
forskellige brugsscenarier, aktører/ og systemer. De fortæller ikke
noget om rækkefølgen som funktioner/sekvenser udføres i.
Use-case-diagram kan illustrere hvorledes bruger og system interagerer
med hinanden, definere og organisere funktionelle krav i systemet samt
angive konteksten og kravene til systemet

Use cases er repræsenteret med en mærket oval form. Pindefigurer
repræsenterer aktører i processen, og aktørens deltagelse i systemet
modelleres med en linje mellem aktør og use case. For at skildre
systemgrænsen skal du tegne en boks rundt om selve use casen. Herunder
er de enkelte komponenter i et use-case-diagram illustreret Herunder et
eksempel på et use-case-diagram: ![Elementer i et
use-case-diagram](../kap13/images/usecasesymbols.png)

Herefter et eksempel på et use-case-diagram, hvor vi benytter figurerne
til at lave et simpelt use-case-diagram: ![Et eksempel på et
use-case-diagram](../kap13/images/usecasediagramexample.png)

### Sekvensdiagrammer

Ulemperne ved use-case-diagrammer er, at de ikke er specielt detaljeret
i fht at modellere logikken i en mere sofistikeret procedure eller
funktion, og de giver heller ikke noget billede af hvilken rækkefølge
objekter interagerer med hinanden. Sekvensdiagrammer har tilformål at
komme disse mangler til livs. De beskriver rækkefølgen og mere
detaljeret hvorledes objekter og komponenter i et sytem interagerer med
hinanden i fht at afslutte en proces. På den måde giver de et mere
detaljeret billede af hvorledes systemet implementeres eller hvorledes
fremtidig funktionalitet bør konstrueres.\
Herunder ses et generisk eksempel på et sekvensdiagram til at beskrive
en generisk interaktion mellem først to efter følgende tre objekter ![Et
generisk eksempel på et sekvensdiagram mellem to
objekter](../kap13/images/sequencediagram0.png) Objekterne er
identificeret ved kassogrammerne for oven. De lodrette søjler markerer
er såkaldte aktiveringsfelter, som indikerer at både "Message Caller" og
"Message Receiver" er aktive. Beskeden, der bliver sendt mellem de to
objekter, er markeret med pilen og en tekst, som beskriver beskedens
indhold. Beskeder kan gå i vilkårlige retninger Man behøver ikke skrive
andet end titlen på beskeden men den samlede signatur er givet ved:
```{=html}
<center>
```
attribute = message_name (arguments): return_type
```{=html}
</center>
```
Et objekt kan sende en returbesked, der signalerer, at modtageren er
færdig med at processere beskeden:

![Asynkron returbesked](../kap13/images/sequencediagram2.png)

Man skelner mellem to typer beskeder. Synkrone (hele pile) og asynkrone
(stiplede pile). Sidstnævnte betyder, at afsenderen ikke venter på, at
høre fra modtageren men at afsenderen godt kan finde på at sende
beskeder til andre objekter. Ved synkrone beskeder ventes på at
modtageren sender signal om at beskeden er modtaget inden processen
fortsættes.

Herunder ses tre objekter, der interagerer med hinanden:

![Et generisk eksempel på et sekvensdiagram mellem tre
objekter](../kap13/images/sequencediagram.jpg)

Herunder eksempler på hvorledes sekvensdiagrammer kan bruges i praksis:

![Et eksempel på anvendelse af
sekvensdiagrammer](../kap13/images/sequencediagramapplied0.jpg)

Bemærk at eksemplet illustrer, at man kan vælge at tegne en
tændstikfigur for en aktør. Det indikerer, at der er knyttet en særlig
use-case til sekvensdiagrammet.

![Endnu et eksempel på anvendelse af
sekvensdiagrammer](../kap13/images/sequencediagramapplied1.jpg)

## C4-model

En mere moderne og forenklet tilgang til beskrivelse og visualisering af
en softwarearkitektur på er ved brug af den såkaldte C4-model, som har
fokus på abstraktioner først. Man kan tænke på C4 lidt som at læse et
kort over et landskab. Man forestiller sig mao at vores system som et
kort over en række delkomponenter som på den eller anden måde
interagerer eller relaterer sig til hinanden.

Ofte når vi navigerer et ukendt sted, så navigerer vi ved at orientere
os ud fra bestemte steder og lidt på samme måde fungerer det når vi skal
forholde os til komplekse softwaresystemer. Vi starter med at forstå en
del og ligesom ringe i vandet udvider vi vores forståelse og horisont.

I C4-modellen starter vi med at placere systemet på et slags
verdenskort, hvor vi kan se hvorledes vores land er placeret i forhold
til andre lande. Tænker vi på landet som vores it-system, så handler det
om at orientere sig mod hvordan det interagerer og relaterer sig til
omkringliggende systemer. Er vi eksempelvis ved at lave et it-system til
skoler, så vil det system typisk interagere med andre offentlige
systemer.

Dernæst zoomer vi ind på landet og kigger på de enkelte regioner og
byer. Vi kan zoome mere og mere ind til vi kommer til det område, som vi
befinder os i.

Herefter kan vi vælge at zoome endnu mere ind og se hvordan de enkelte
byer eller komponenter er konstrueret.

C4-modellen består, som navnet antyder, af fire lag, der alle er
navngivet med `C` som første bogstav. Vi tillader os dog at nævne de
danske oversættelser i parenteser: Context (kontekst), Container
(container), Component (komponent) og Code (kode).

### C4 eksemplificeret

Herunder eksemplificeres C4-modellen fire niveau ved at præsentere et
internet bank-system. Det er vigtigt at understrege, at der findes ikke
en entydig optimal løsning. Forskellige personer vil designe systemet
vidt forskelligt. Men ideen med C4 handler i lige så høj grad om at give
et fælles (visuelt) sprog mellem softwarearkitekter, programmører og
testere m.fl. til at forstå hvorledes systemet grundlæggende er
opbygget.

#### Niveau 1: Kontekst/context

Niveau 1 giver det overordnede overblik. Menneskefiguren symboliserer
brugeren. De grå felter er nogle af de centrale systemer, som systemet
interagerer. Pilene beskriver flowet i data og hvorledes de enkelte dele
(også kaldet "container" her) interagerer. Hver del kan beskrives med
nogle få linjers tekst. ![C4-model Kontekst-niveau
(1):](../kap13/images/c41.png)

#### Niveau 2: Container

Efterfølgende kan vi zoome ind på de enkelte dele. Til at starte med
zoomer vi ind på en `container`. En container repræsenterer et
system/program eller en database. Den skal køre for at det samlede
system kører. Bemærk de stiplede linjer, som markerer bank-systemet fra
forrige niveau.\
![C4-model container-niveau (2):](../kap13/images/c42.png)

#### Niveau 3: Komponent/Component

Herefter kan vi zooome ind på de enkelte container. Nedenfor er zoomet
ind på containeren ved navn `API Application`. Vi skal tænke på et
komponent som en samling af beslægtet og veldefineret funktionalitet,
der typisk kan kaldes igennem en veldefineret grænseflade. ![C4-model
Komponent-niveau (3):](../kap13/images/c43.png)

#### Niveau 4: Kode/code

Endelig kan vi zoome yderligere ind på de enkelte komponenter og få
visualiseret komponentet ved brug af et klassediagram,
use-case-diagrammer eller noget helt tredje: ![C4-model
Klassediagram-niveau (4):](../kap13/images/c44.png)

Det bemærkes, at I takt med at vi kommer længere og længere ned
C4-modellen, så kommer vi stadig tættere på koden og relationerne bliver
beskrevet mere kodenært.

#### Symboler og figurer brugt i C4

Herunder forslag til hvilke figurer man kan overveje at bruge til at
visualisere og repræsentere de enkelte dele i C4. Det er ikke
nødvendigvis afgørende, at man præcis bruger disse figurer, men
vigtigere at man i teamet bliver enige om hvilke figurer, der
repræsenterer hvilke niveauer og komponenter.

![C4-model Figurer:](../kap13/images/c45.png)

En af de helt klare styrker ved modellen er, at den giver mulighed for
at fortælle forskellige historier afhængig af målgruppen og deres
tekniske indsigt. Samtidig er den visuelt orienteret og det giver for
mange ofte et bedre og mere tilgængeligt overblik over systemets enkelte
del samt hvorledes de er forbundet.

## Øvelser

1.  Konstruer en trelagsmodel for et brætspil. Beskriv i overordnede
    termer hvad de tre lag dækker over.
2.  Konstruer en trelagsmodel for en app, der skal kunne tage billeder
    og gemme det i skyen.
3.  Lav et klassediagram for et DyrePatient til at håndtere dyr i et
    dyrehospital. Identificer mindst 3 attributter og 3 metoder, som
    kunne være relevante at inddrage i en sådan klasse.
4.  Konstruer nu børneklasser som udvider den oprindelig klasse, der
    repræsenterer fordi dyrearter. Det kan eksempelvis være konkrete dyr
    men også dyr eller arter eller hvorvidt de kan flyve, svømme eller
    være på land. Kategoriseringen er op til dig. Identificer mindst 3
    attributter og 3 metoder, som kunne være relevante at inddrage i
    disse klasser, som adskiller sig for de andre.
5.  I det følgende ønske et design for en online bogbutik. Overvej
    relevante klasser herunder metoder og attributter samt deres
    relationer til hinanden. Visualiser disse ved brug af
    klassediagrammer.
6.  Lav klassediagramer over et system, som skal håndtere elever,
    klasser, lærere, administration/IT og klasselokaler. Systemet skal
    håndtere karakterer, skema, timer m.m.
7.  Lav klassediagrammer over et computerspil (eksisterende eller
    fiktivt)
8.  Konstruer de tre øverste lag i C4-modellen over en online pizzabutik
    kaldet MustEat, der skal understøtte muligheden for at kunder kan
    bestille pizzaer fra en menu over nettet.
9.  Konstruer de tre øverste lag i C4-modellen for NetFix, som skal være
    en streamingkanal.
10. Konstruer alle fire lag i en C4-model herunder relevante
    klassediagrammer i kodelaget til en app, der skal facilitere, at man
    kan sende penge til hinanden og betale regninger
11. Konstruer alle fire lag i en C4-model herunder relevante
    klassediagrammer i kodelaget til et nyt social medie. \# 14.
    Testning, debug og fejlhåndtering Et helt central i al
    softwareudvikling og programmering er at teste, at ens system eller
    program rent faktisk fungerer efter hensigten. Ikke desto mindre har
    det historisk set været nedprioriteret og ofte betragtet som en
    adskilt del eller en eftertanke af udviklingsprocessen.

## Testning er vigtigt tidligt i udviklingsfasen

Stadig den dag i dag er det ikke unormalt, at man først helt til sidst i
produktionsfasen tester produktet for fejl med det resultat, at pga et
meget lille vindue til at teste systemet, ender man man med sende
produkter på markedet med mange fejl, fordi testerne ikke har haft tid
nok til at fange alle fejl. Et eksempel herpå er indenfor
spiludviklingsbranchen hvor det nærmest er blevet tradition, at man på
release date eller kort bagefter frigiver store patches, som retter
mange fejl. Det koster måske primært noget frustation hos spillerne mere
end, at det går udover salgene. Et andet eksempel hvor det ikke er
tilfældet er bilindustrien, som i de senere år i stadig højere grad, har
måtte tilbagekalde biler i tusindvis på grund af en softwaredefekt med
airbag eller lignende. Det koster producenterne millioner eller
milliarder af kroner ved ikke at have gode teknikker for testning og
skaber samtidig utilfredse kunder, der kan forstærke et i forvejen
dårligt ry.

Ved at indføre tidlig og kontinuerlig testning kan man også langt bedre
justere ikke kun på ukorrekt eller fejlbehæftet adfærd og
sikkerhedsproblemer, men også justere systemets overordnede arkitektur.
Sidstnævnte kan blive svære jo længere vi når i processen.

## Forskellige former for test

Der findes en lang række forskellige former for afhængig af hvad
formålet er. Herunder gennemgås nogle af de centrale former for test:

-   Accept testning: Virker det overordnede system rent faktisk efter
    hensigten
-   Integration testning: Kan de enkelte komponenter i systemet og
    arkitekturen rent fakiske operere og kommunikere som ønsket
-   Enhedstestning: Virker de enkelt enheder såsom funktioner og klasser
    efter hensigten.
-   Performance test: Hvordan performer systemet under forskellig brug
-   Bagudkompatibilitets test: Fungerer opdateret systemer med tidligere
    versioner
-   Stress test: Hvor meget kan systemet klare inden det stopper med at
    fungere.
-   Brugergrænseflade test: Hvordan tager brugeren af systemet i mod
    systemet og er der en fornuftig interaktion mellem bruger og system

I praksis kan man implementere test i udviklingsprocessen på en lang
række måder. Det kunne eksempelvis være:

-   Manuel testning
-   Automatiseret testning
-   Kontinuerlig testning

I det følgende vil vi gennemgå disse former for test og hvordan de kan
implementeres i praksis.

## Manuel testning

Enhver programmør eller team af programmører udfører manuel testning på
regulær basis. Formålet med manuel testing, som normalt udføres af en
eller flere personer, er at lokalisere fejl og mangler i
koden/produktet. Man kan inddele denne form for testning i tre dele:
\#\#\# Sort boks testning Her testes produktet af software testere, som
ikke nødvendigvis kender den interne struktur af koden eller programmet.
Fokus er på at teste funktionaliteten af systemet. Kan systemet det som
der forventes. Typisk er denne form for test baseret på en
kravspecifikation, hvor der testes for hvorvidt de enkelte krav er
opfyldt. Typisk stilles der ikke krav til hvorvidt testeren kan kode
eller ej. Forestiller man sig eksempelvis, at et login-system med et
brugernavn og password skal testes, så vil man her typisk kunne teste
hvorvidt login fungerer som det skal. Dvs. logger systemet ind når man
skriver korrekte login oplysninger og omvendt giver det korrekte
beskeder, hvis man bruger forkert login? Hvis loginsystemet er blevet
videreudviklet kan man også her teste, hvorvidt systemet stadig fungerer
som det skal.

### Hvid boks testning

Hvid boks testning foretages typisk af softwareudviklere hvor testeren
har viden om programmets interne struktur. Man tester her programmet på
kodeniveau, hvor de enkelte funktioner og programstumper logisk testes
for hvorvidt de gør som de skal. Forestiller man sig igen et
login-system vil fokus i hvid boks testning være på om flowet i koden er
korrekt. Et login system består typisk af et opslag i et sæt af brugere
og deres respektive passwords (løkke eller forespørgsel i database), et
tjek om det respektive brugernavn og password stemmer overens med det
indtastede (betinget udførsel) og at man videresendes på korrekt vis.
Fokus er mao på at teste hvorvidt opslaget og den betinget udførsel
fungerer korrekt.

### Grå boks testning

Grå boks testning kombinerer hvid boks og sort boks testning i den
forstand, at man her antager, at testeren af systemet har partiel viden
om systemet. Man ser denne form testning anvendt i bl.a.
webapplikationer, hvor testeren kan tilpasse og justere html-koden.
F.eks. kunne man i casen med et login-system lade testeren redigere i
html koden, hvis linket til systemet ikke fungerer optimalt. Herved kan
udviklerne i højere grad koncentere sig om at teste den mere komplekse
del af systemet.

## Automatiseret testning

Til forskel for manuel testning, hvor et menneske står for at teste
systemet, så gør man i automatiseret testning brug af programmer til at
teste ens produkt. Ulempen ved manuel testning er, at det ofte kræver
mange ressourcer både i form af tid og mennesker, hvis hele workflowet i
et system skal testes. Og det koster mange penge.\
Her kommer automatiseret test til rådighed, fordi det kan udføres uden
indblanding fra mennesker og man kan køre det når som helst. Selvom
natten. Man kan genbruge og gentage test lige så ofte, som man finder
det nødvendigt. På den måde faciliteres et mere præcist billede
systemets tilstand i fht fejl og mangler. Ydermere kan manuel testning
være en ret kedelig proces i længden, og herved opstår muligheden for
fejl i højere grad end hvis et system står for processen.\
Eksempelvis kan man forestille sig et system, som skal understøtte flere
sprog. Her vil det hurtigt være en lang, kedelig og næsten triviel
process for et menneske at teste hvorvidt systemet opfører sig ens og
fremstår korrekt i de forskellige sprog.

Typisk bruges automatiseret testning derfor når testning skal gentages
ofte, og at det er kedeligt, svært og tidskrævende at gøre manuelt, men
også når testningen involverer en kritisk del af systemet. Kritiske
systemer kan være alt fra sundhedsplatforme, banksystemer til systemer,
der håndterer hardware eller robotter. Et eksempel på hvor man i den
grad kunne have gjort brug af automatiseret test var NASAs og firmaet
Lockheed Martins satelit, som blev sendt afsted i 1998 for at gå i
kredsløb omkring Mars. Den kostede flere milliarder at få sendt afsted
og over et år i rejsetid før satelitten etablerede kredsløbet omkring
Mars. Få minutter efter bragede satelitten ind i Mars. Det viste sig
efterfølgende, at fejlen lå i, at to af systemerne udviklet af hhv Nasa
og Lockheed Martin brugte forskellige afsandsmetrikker.

I det følgende skal vi se nogle eksempler på forskellige typser
automatiseret testning.

### Unit testning

Unit test eller modultest er en særdeles anvendt metode til at teste og
validere enkeltkomponenter i koden. Det kan være funktioner, klasser,
etc. I det følgende skal vi se et eksempel på hvorledes man kan bruge
Unit tests i P5. Til øvelsen kræves, at man har installeret Node JS, som
er et software miljø, der kører på en server og faciliterer afvikling af
webapplikationer. Man behøver ikke videre mere om det umiddelbart. Det
skal bruges til at installere et test-systemt kaldet Jest. Dvs. starte
med at hente og installere pakkesystemet npm via
"https://nodejs.org/en/download/". Fra kommandoprompt installeres Jest
med følgende kommando: npm install --save-dev jest Kommandoprompt kan
tilgås i Windows fra windowstasten og så skriv de første bogstaver af
kommandoprompt.

Vi er nu klar til at skrive vores første unit-test cases i Jest.
Konstruer en funktion kaldet multiply i et sketch.js P5-projekt, som du
har lavet til formålet:

``` {.javascript}
function multiply(a, b) {
  return a * b;
}
module.exports = product;
```

Opret nu en ny fil kaldet sketch.test.js, som skal rumme den aktuelle
test: const sum = require('./sum');

``` {.javascript}
test('multiply 4 * 6 to equal 24', () => {
  expect(multiply(4, 6)).toBe(24);
});
```

Tilføj herefter følgende til en fil kaldet "package.json":

``` {.javascript}
{
  "scripts": {
    "test": "jest"
  }
}
```

Prøv nu fra kommandoprompt at skrive npm test fra samme bibliotek som
filerne ligger. Du kan i kommandoprompt skifte mellem gå ud af et
bibliotek med

``` {.javascript}
cd .. // Bevæger sig ud af børnebibliotektet
cd child_directory // Hopper ind i børne biblioteket
C: //skifter til drev C
```

Det kan være en fordel at øve sig i brugen af et såkaldt CLI-miljø
(Command-Line-Enviroment), fordi det til tider er mere effektivt at
arbejde fra en kommandoprompt, når man tester og afvikler applikationer.

I det følgende ser vi et eksempel på, hvorledes man kan validere
hvorvidt to objekter er af samme type. Her bruges metoden toEqual:

``` {.javascript}
test('Objekt validering', () => {
  const data = {en: 1};
  data['to'] = 2;
  expect(data).toEqual({en: 1, to: 2});
});
```

Tilsvarende findes en lang række andre metoder til eksplicit at teste og
matche udtryk og værdier mod hinanden:

-   toBeNull: matcher kun null
-   toBeUndefined: matcher kun undefined
-   toBeDefined: det modsatte af toBeUndefined
-   toBeTruthy matcher alt som if- sætning benhandler som sand
-   toBeFalsy: matcher alt som if- sætning benhandler som falsk

## Kontinuerlig testning

I kontinuerlig testning bygger oven på den automatiseret testning, så
testning ikke bare udføres automatisk men at det rent faktisk også
bliver gjort regelmæssigt og struktureret. På den måde kan
udviklingsprocessen accelleres betydeligt og kodekvaliteten på papiret
forhøjes.

Det handler mao om at teste ofte, så meget som muligt og at automatisere
processen. Man bevæger sig mao kontinuerligt fra udvikling til testning
til produktion. Et gennemløb af disse faser kaldes en iteration. For
nogle projekter kan et software projekt gennemløbe mange iterationer i
løbet af bare en dag. I processen bruges speciel software, som sikrer,
at den produceret software (også kaldet "build") via unit test tester
hvorvidt ændringer lever op til testkrav. Hvis det ikke er tilfældet kan
koden ikke sættes i produktion. Hvis det er tilfældet kan
funktionaliteten testes igen.

Kontinuerlig testning er en testmetode, der typisk anvendes indenfor
såkaldt agil udvikling, hvor man løbende itererer over krav og løsninger
gennem samarbejde mellem mindre selv-organiserende tværfaglige og
tværfunktionelle hold. Agil udvikling er en vigtig del af fokus for det
næste kapitel.

## Debug

Debugging betegner den proces hvorved man finder fejl eller såkaldte
bugs i sin kode. Debug er en væsentlig del af hvidbox testning, hvor
programmører tester koden og leder efter fejl.

Det kan være en frustrerende og tidskrævende proces at finde fejl af
flere grunde. Fejl kan eksempelvis forudsagde fejl, som er svære at
relatere til kilden i problemet. En anden årsag er, at I nogle tilfælde
manifisterer fejl sig kun en ud af hundrede gange, når eksempelvis en
variabler, der tildeles tilfældige værdier, har præcis en værdi.

Enhver, der har programmeret længe nok har oplevet, at bruge enorme
mængder af tid på at finde en fejl, så det er en vigtig men også mindre
sjove dele af programmering. Man kan udvikle forskellige teknikker og
udnytte ens udviklingsmiljø til reducere omfanget af debugging.

-   Læs koden linje for linje. Dobbeltcheck at koden, som du skrev, rent
    faktisk var det du mente. Tjek for stavefejl, forskel på store og
    små bogstaver.
-   Brug gerne dit IDE/udviklingsmiljø til at inspicere variable eller
    gennemgå koden linje for linje. I de fleste IDE'er kan du indsætte
    breakpoints i koden og herefter afvikle den linje for linje. Se mere
    om det i et af de næste kapitler.
-   Brug evt papir og blyant til at håndtere og observere deres værdier.
-   Tænk før du koder. Jo hurtigere at du starter med at kode jo længere
    tid tager det ofte.
-   Skriv kommentarer/pseudokode eller lignende før du skriver koden.
    Ved at skrive kommentarer udkrystalliseres ofte ens tanker, så
    løsningen på problemet fremstår mere klar.
-   Giv meningsfulde variable navne og konstruer funktioner, der står
    for at implementere noget af det gentagende opgaver.
-   Undgå for store funktioner og for store filer af kode. Opdel koden i
    flere filer
-   Tænk over hvordan du vil teste før du skriver koden
-   Tilføj kun en ny funktionalitet ad gangen
-   Hold tingene simpelt, så simpelt som muligt, men hellere ikke
    simplere
-   Test ofte og regelmæssigt
-   Hvis du er i tvivl om hvordan noget kode fungerer/problem løses så
    undgå at starte med at integrere denne kode/løsning i selve
    programmet. Skriv derfor hellere noget eksempelkode som er isoleret
    for resten af programmet og prøv det af indtil du forstår koden til
    bunds
-   Læs din kode efter du har skrevet den
-   Pas på globale variable, da de ofte kan ændres mange steder og
    dermed være svære at finde fejl
-   Sæt Compiler warnings til sand når du afvikler kompilerer din kode.
    Det kan give et godt indblik i mulige fejl.
-   Print evt vigtige variabler ud undervejs i afviklingen. Det kan dog
    godt blive rodet på sigt. Brug gerne en global boolsk variable til
    at afgøre hvorvidt denne printning udføres i praksis
-   Husk at tage pauser
-   Prøv at forklare dit problem til en anden. Vedkommende behøver
    egentlig ikke at vide noget om kode eller dit problem. Ofte giver
    det et nyt perspektiv på tingene.\
-   Brug nettet til at finde hjælp. Typisk er du sjældent den første der
    har siddet med et givent problem, så brug fora m.m. til at få hjælp.

### Typer af fejl

Det er en god ide, at være bevidst om at der findes forskellige typer af
fejl. Herunder gennemgår vi kort nogle af de typiske fejl:

-   Syntaksfejl. Syntaks betegner de ord og symboler som indgår i et
    givent programmeringssprog. Hvis du kun bruger de ord og symboler,
    som sproget og dets regler tillader, så kan der ikke umiddelbart
    opstå syntaksfejl. Men hvis du bruger et ord, som computeren ikke
    genkender, så vil computeren give en syntaksfejl. Herunder et
    simpelt eksempel på syntaksfejl. Kan du finde fejlen?

``` {.javascript}
function setup() {
  createCanvas(400, 600);
}

function draw {
  background(200);
} 
```

Selvom det ikke er meget kode, så ligger fejlen i, at der mangler
parenteser efter draw, da det er en funktion. Heldigvis får du også
nogenlunde klar besked i konsollen. Hvis du kigger, så står der noget i
retning af følgende:

Uncaught SyntaxError: Unexpected token '{' (sketch: line 5)

Nogenlunde klar fordi en nybegynder kunne måske tro, at det handlede om
at der var noget galt med krølparentesen.

Jo mere man øver sig, jo bedre bliver man til at spotte den her type
fejl hurtigt. Og man hjælpes meget på vej af et godt udviklingsmiljø,
som typisk opdager mange af disse fejl allerede inden man forsøger at
køre sit program.

-   Kørtetidsfejl. Selv hvis din kode er korrekt skrevet og overholder
    alle regler, så kan der stadig opstå masser af fejl. Køretidsfejl
    opstår typisk, når computeren ikke forstår hvad din kode prøver at
    gøre. Herunder et eksempel:

``` {.javascript}
let xPos;
let yPos;

function setup() {
  xPos = width ;
  yPos = height ;
  createCanvas(400, 600);
  text("Hej " + name)
}
```

Her er problemet, at name ikke er defineret nogle steder. Der meldes om
følgende fejl: Uncaught ReferenceError: name is not defined (sketch:
line 3).

Her er det nok at erklære en variable name med en værdi. Ikke alle
køretidsfejl er så nemme at rette.

-   Logiske fejl. Ved denne type fejl afvikles programmet, men det giver
    ikke det ønskede input. Der er mao. tale om en fejl i logikken i
    koden, hvor man måske gør en antagelse om at noget kode virker på en
    bestemt måde, men ikke gør i praksis. Det er en meget almindelig
    fejl og enhver programmør på alle niveauer kommer til at lave den
    type fejl nærmest dagligt. Det kan være tidskrævende fejl at finde.
    I sidste ende er det op til programmøren, at ens kode fortæller
    computeren præcis hvad man ønsker den skal gøre.

Her er et eksempel på kode, hvor vi ønsker at skrive "Hej" midt på
kanvas. Kan du se fejlen?

``` {.javascript}
let xPos;
let yPos;

function setup() {
  xPos = width/2 ;
  yPos = height/2 ;
  createCanvas(300, 300);  
}

function draw() {
  text("Hej", xPos,yPos)
}
```

Fejlen skyldes, at vi initialisere xPos og yPos før kanvasset
initialiseres. Havde vi i stedet initialiseret xPos og yPos efter
createCanvas, så står det rigtigt.

## Fejlhåndtering

Når en funktion ikke afvikles normalt eller efter hensigten, kan det
være relevant at overveje at hoppe til et sted i koden, hvor vi ved
hvordan problemet skal håndteres. Fejlhåndtering handler om at man i sin
kode implementerer en mekanisme som aktiveres hvis vi løber ind i
problemer. Dette kaldes også i fagsprog for at rejse eller kaste en
exception eller undtagelse. En undtagelse håndteres i javascript ved
brug af nøgleordene try, catch og finally:

``` {.javascript}
try {
  //Kode, der forsøges udført. 
  //I koden kan inddrages throw 
}
catch(err) {
  // Kode, der håndterer fejl kaldet err
}
finally {
  //Blok af kode som udføres uanset resultatet  try / catch 
}
```

Ved brug af throw under try-strukturen kan man kaste en undtagelse, som
gribes i catch. I finally kan vi afvikle kode som vi udfører uafhængig
af om der gribes en fejl. Det lyder måske mere kompliceret end det
faktisk er i praksis, så herunder et eksempel:

``` {.javascript}
function myFunction(x) {
  try {
    if(x == "") throw "tom streng";
    if(isNaN(x)) throw "ikke et tal";
    x = Number(x);
    if(x > 12) throw "for stort";
    if(x < 3) throw "for lille";
  }
  catch(err) {
    console.log("Fejl: " + err + ".");
  }
  finally {
    console.log("Slut.");
  }
}
```

Funktionen herover tjekker et input x for hvilken type og hvor stor
værdi det rummer. Her repræsenterer err den tekststreng som kastes under
try. Det kan anbefales at eksperimentere med koden i praksis for at få
en bedre forståelse af håndtering af undtagelser.

Herunder et andet eksempel, der håndterer forskellige typer af
undtagelser, som er indbygget i javascript. I koden antages det, at
myFunction kaster tre forskellige typer af undtagelser TypeError,
RangeError, EvalError, som vi kort gennemgår efter eksemplet.

``` {.javascript}
try {
  myFunction(); // antag den kaste tre typer af undtagelser
} catch (e) {
  if (err instanceof TypeError) {
    // Kode der skal håndtere type fejl
  } else if (err instanceof RangeError) {
    // Kode der skal håndtere fejl med intervaller
  } else if (err instanceof SyntaxError) {
    // Kode der skal håndtere fejl i syntaksen
  } else {
    // Kode, der håndterer fejl som ikke er knyttet til de tre fejltyper
  }
}
```

Herunder gennemgår vi nogle af de mest almindelige typer fejl, som kan
kastes:

-   RangeError: Opstår når en numerisk værdi er udenfor et specificeret
    interval
-   ReferenceError: Opstår når en variable ikke er deklareret. Typisk
    pga. stavefejl eller glemt at tage højde for store og små bogstaver
-   Syntax Error: Når reglerne for Javascript sprogets struktur er brudt
    .
-   TypeError: Opstår når der forventes en type men i praksis er det en
    anden.

## Øvelser

1.  Find flere eksempler fra den virkelige verden, hvor systemer har
    haft betydelige fejl og hvilke konsekvenser det har haft for
    udviklerne og systemet samt brugerne heraf. Kunne fejlene mon være
    undgået ved at teste mere og bedre?
2.  Overvej fordele og ulemper ved brug af manuel testning, automatisk
    testning og kontinuerlig testning med udgangspunkt i, at man enten
    arbejder i en mindre startup virksomhed kontra et større og mere
    veletableret softwarevirksomhed?
3.  I det følgende skal du skrive et program, som tager heltal som input
    svarende til længderne af siderne i en trekant. Programmet skal
    returnere hvorvidt, der er tale om en ligesidet trekant, en
    retvinklet trekant eller en vilkårlig trekant. Overvej hvorledes du
    vil teste programmet for fejl. Brug jest-biblioteket til at teste
    hvorvidt input og output er korrekt.
4.  Lav en BMI-beregner, der tager vægt, højde og navn, og hvor du
    bruger Jest til at sikre at du får en korrekt type af input på dine
    data.
5.  Overvej hvordan du vil lave sort boks testning på din BMI beregner
6.  Prøv at finde fejlene i følgende kode? Hvilken type fejl er der tale
    om?

``` {.javascript}
function setup() {
  createCanvas(300 300);
  noFill();
  stroke(255);
  strokeWeight(8);
}

function draw( {
  background(32);
  // top, bund
  /  venstre, højre
  circle(150, 0, 300);
  circle(150, 300, 300);
  Circle(0, 150, 300);
  circle(300, 150 300);
}
```

7.  Prøv at finde fejlene i følgende kode? Hvilken type fejl er der tale
    om?

``` {.javascript}
let circleY;
let circleX;
let circleZ;
let r
function setup() {
  createCanvas(800, 300);
  circleX = 60;
}

function draw() {
    background(180);
    ellipse(12, circleY, r, 60);
    ellipse(circleX, circleZ, 60, 60);
    ellipse(20, circleY, 60, 60);
    ellipse(40, circleY, 60, 60);
    circle(circleY, circleX, r);
  
}
```

8.  Prøv at finde fejlene i følgende kode? Vi ønsker at printe tallene
    fra 1 til 20. Hvilken type fejl er der tale om?

``` {.javascript}
function setup() {
  let n = 20
  let i = 0
  while(i>20)
  {
    if(i=10) console.log("Vi er halvvejs")
    console.log(i)
  }
}
```

9.  Skriv en funktion $f$, der tager tre argumenter $a,b$ og $c$ ved
    brug af exceptions håndterer mulige fejl i fht input:
    $$f(a,b,c)= \sqrt{\frac{a+b}{b-1} - c}$$

10. Skriv en funktion myFunction, der som minimum kaster TypeError,
    RangeError, SyntaxError. Afprøv den efterfølgende sammen med koden i
    eksemplet. \# 15. Udviklingsprocesser Softwaresystemer komplekse af
    natur. De kan tage år at udvikle (af flere hundrede eller tusind
    udviklere), bestå af millioner af linjers kode og koste mange penge
    at lave og vedligeholde. Eksempelvis blev det estimeret, at det nu
    forældet styresystem Microsoft Windows 98 tog i omegnen af 200
    programmører, 16 år, dag og nat at udvikle. Og på trods af de
    massive mængder ressourcer, der blev sat af, så fejlede systemet
    alligevel da Microsofts Bill Gates skulle præsentere det live med
    blå skærm.

Udviklingen af softwaresystemer af en vis størrelse er mao en
kompliceret proces, hvor der i de er behov for planlægning og en klar
proces for udviklinge af systemet for at sikre den nødvendige struktur
og at systemet fungerer hensigtsmæssigt. Hvis man ikke planlægger, så
planlægger man at fejle.

Helt grundlæggende kan softwaresystems livscyklus fra ide til færdigt
produkt beskrives i fire overordnede trin:

Trin 1: Planlægning Trin 2: Implementering Trin 3: Test Trin 4:
Implementering og vedligeholdelse

I de senere år er der forsket i og udviklet en lang række forskellige
metoder til at skabe systemer og . I det følgende vil vi gennemgå nogle
af de vigtigste metodologier. Det er i den sammenhæng vigtigt at
understrege, at der ikke findes en tilgang, der passer til alle. Valg af
metodologi til udviklingsprocessen afhænger af mange ting såsom projekts
omfang, antal udviklere, kontekst osv.

## Vandfaldsmodel

Vandfaldsmodellen er en af de ældste og mest traditionelle modellering
af udviklingsprocessen. Som et vandfald, der pga tyngdeloven falder og
falder, så er udgangspunktet for denne model, at man udfører en række
skridt inden man bevæger sig videre til næste skridt. I praksis er der
dog typisk nogle små overlap mellem de enkelte faser/skridt. Modellen
blev oprindeligt brugt dengang hvor man udviklede til større mainframe
systemer. Selvom den måske ikke bruges umiddelbart så meget i dag, er
den stadig særdeles vigtig at kende til fordi den strukturerer mange af
de overvejelser, som udviklingen af ethvert system bør inddrage.
Vandfaldsmodellen kan være god at bruge når mål og krav med systemet
står meget klar, og teknologi-stakken er veldefineret og velkendt. Mao.
hvor man ikke forventer større, radikale ændringer undervejs i
processen. Det kunne eksempelvis være i større organisationer, såsom i
udviklingen af offentlige it-systemer. En klar ulempe ved modellen er,
at den mangler grundlæggende fleksibilitet. Hvis du f.eks. udvikler et
mindre system eller en prototype, der skal formes eller tilpasses
markant undervejs - måske udfra feedback fra brugere/testere - så er
vandfaldsmodellen formentlig ikke hensigtsmæssig at bruge.

## Skridtvis forfining

I skridtvis forfining udvikles systemet i en række iterationer eller
skridt, hvor man i hvert skridt transformerer abstrakte
programbeskrivelser til konkrete forfininger af et program, så der ikke
ændres på programmets grundlæggende funktionalitet og adfærd.
Del-og-hersk princippet, som handler om at dele problemer, der er svære
at løse, ind i mindre delproblemer, som måske lettere kan løses. Ved at
løse delproblemerne kan man måske løse det mere generelle problem.
Skridtvis forfiningen har nogle klare fordele. Ved at inddele problemet
i mindre dele får man en god forståelse af det overordnede problem og
delproblemerne kan typisk løses af forskellige (hold af) programmører og
gør det nemt at administrere. Endelig er det også muligt i høj grad at
træffe design beslutninger undervejs i udviklingen, hvilket gør det
noget hurtigere at ændre i stedet for efter programmeringen, som det
eksempelvis er tilfældet med vandfaldsmodellen. Skridtvis forfinings
grundlæggende antagelse er, at man på forhånd kender alle krav til
programmet for at kunne foretage de nødvendige forbedringer, hvilket gør
metoden mindre effektiv, når man udvikler systemer hvor krav og
funktionaliteten af systemet ændres undervejs.

## Skridtvis forbedring

Skridtvis forbedring også kaldet inkrementel udvikling betoner, at
systemer udvikles løbende i skridt eller iterationer, hvor hver
iteration består af følgende faser:\
\* En kravanalyse fase hvor krav og specifikationer til systemet
indsamles og klassificeres \* En design fase hvor systemets funktioner
designet \* En kode fase hvor designet implementeres ved brug af
programmering \* En test fase hvor den nye funktionalitet testes.

Hver ny iteration tilfører ny funktionalitet til systemet og systemet
sættes i produktion, når den første iteration er fuldført.

Til forskel fra skridtvis forfining, så er skridtvis forbedring i højere
grad en eksplorativ proces, hvor man bevæger sig imellem at udvikle,
omstrukturere og forfine kode

I første iteration udvikles typisk den grundlæggende funktionalitet af
produktet, så kernen af produktet er på plads. Supplerende
funktionalitet tilføjes typisk i de efterfølgende iterationer.

Man kunne eksempelvis forestille sig, at man ønske at udvikle et
transportmiddel. Til at starte med udvikles måske et skateboard i første
iteration. Man bliver bevidst om, at det måske er for upraktisk og der
er brug for mere fart, så man viderudvikler til en cykel og i den
efterfølgende iteration til en bil.

Inkrementel udvikling kan være god at bruge, når kravene til ens system
er veldefineret og klare.

En konkret procedure for implementering af skridtvis forbedring ved brug
af objekter kan være den såkaldte STREAM metode, som forløber i følgende
skridt. 1. Skeletklasser konstrueres. Skeletklasser også kaldet stubs er
reelt klasser der kun består af metoder. STREAM forudsætter altså, at
man på forhånd har et kendskab til hvorledes systemet skal sammensættes
af de enkelte klasser. Hvis metoderne returnerer en værdi består metoden
af et simpelt kald ved brug af return og den respektive værdi. Hvis ikke
det er tanken, at metoden skal returnere noget, så er metoden bare tom.
2. Test skeletklasserne. Det sker i praksis ved at man implementere en
række unit tests, som typisk vil fejle til at starte med men
forhåbentlig på sigt vil sikre, at klasserne opfører sig som de skal. 3.
Repræsentationer genovervejs. Her overvejes det om klasserne igennem
deres tilknyttede attributter kan repræsenteres på en anden måde. Mindst
to mulige repræsentationer bør inddrages hvor svære de er at
implementere i praksis. 4. Evaluering af repræsentationer. De
forskellige repræsentationer fra punkt 3 evalueres ud fra hvor svære de
er at implementere. 5. Attributter inddrages og implementeres i fht til
den valgte repræsentation. Mulighed for at kommentere i koden på
attributtens mulige værdier og betydning. Klassens konstruktør
implementeres så attributterne initialiseres. 6. Metode implementering.
Så længe der er ufærdige metoder, vælges en ny metode, som
implementeres, og så længe en metode er ufærdig bør den forbedres og
efterfølgende testes. Ved forbedres forstå, at man udvider, forfiner
eller omstrukturer.

## Den iterative udviklingsmetode

Iterativ udviklingsmetode har vundet indpas i den seneste årrække.
Metoden er modsat vandfandsmodellen af en cyklisk natur, hvor man på
baggrund af en ide, starter med at samle og analysere på data relateret
til systemet man ønskere at udvikle. Herefter konstruerer typisk nogle
få enkle krav til systemet, der planlægges implementeret. Efterfølgende
tilpasses og justeres disse krav i takt med at systemet tager form og
man får feedback fra bruger eller anden ny information. Den
bagvedliggende tanke er, at man ikke nødvendigvis på forhånd kender det
optimale system og krav til et system, da disse i høj grad kan ændres
undervejs. Man bliver mao i stedet i takt med udviklingen af systemet
stadig klogere på den bedste løsning og de respektive krav. Den
iterative model giver altså mulighed for at tilpasse disse krav til en
dynamisk verden og kontekst.

Hvor inkrementel udvikling i høj grad handler om at få en system ud så
hurtigt som muligt og så i de efterfølgende iterationer udvide systemet,
har den iterative proces i højere grad fokus på at inddrage feedback fra
brugere og testfasen. På den måde skulle projektet gerne blive bedre i
takt med, at man itererer over løsningen.

I metoden itererer man efterfølgende over eller gentager følgende faser
indtil man når sine ønskede mål med systemet/produktet, hvorefter
systemet kan frigives til brugeren. Det er en projektmanager/leder, der
koordinerer og er ansvarlig for hver iteration: \* Design: I denne fase
forberedes systemet til at opfylde de fornødne krav for designet, der
kan være et nyt eller en udvidelse af en tidligere version. \*
Implementation og test: I denne fase er man optaget af implementere
eller programmere de nødvendige krav. Undervejs testes systemet
regelmæssigt og systematisk. \* Evaluering: I denne fase evalueres
systemet i fht de aktuelle krav. Man overvejer og reflekterer over den
nuværende løsning og man diskuterer muligheden for nye mulige krav i den
næste iteration/opdatering.

I en verden hvor teknologien og kravene ændres stort set hele tiden kan
modellen være rigtig god at bruge fremfor eksempelvis vandfaldsmodellen.
Når kravene og nødvendighederne til systemet ikke nødvendigvis er
veldefineret men kan forstås og klassificeres, så kan modellen være god
at bruge til over tid at udvikle en fornuftig løsning.

Hvis der er behov for at udvikle eller opdatere eksisterende systemer
til eksempelvis at integrere den seneste teknologi, kan metoden også
bruges, fordi man kan udvikle inkrementelt og opdatere systemet løbende
modsat eksempelvis vandfaldsmodellen, hvor man i højere grad tvinges til
at starte forfra.

Men den iterative udviklingsmetode kan i højere grad end
vandfaldsmodellen give mulighed for at identificere høj-risiko problemer
eller udfordringer, som kan have stor betydning for den endelige
løsning, ved at tilbyde mulighed for justering for disse udfordringer
undervejs. Herved opnår man i højere grad at skulle forholde sig til
lav-risiko beslutninger, der i mindre grad påvirker det samlede system.
I vandfaldsmodellen ender man i højere grad tvunget til at tage
høj-risiko beslutninger i starten og slutningen af processen.

## Agil udvikling og SCRUM

Agil, betegner noget der let, hurtigt og smidigt. Med andre ord
tilpasningsparat. Agil udvikling og agile metoder er en tilgang til
projektstyring, der kombinerer både iterativ og inkremental udvikling
med henblik på at skabe en tilpasningsparat udviklingsproces. I sidste
ende handler det om at øge tilfredsheden hos kunden og slutbrugeren ved
hurtigt at kunne frigive et produkt.

Modsat vandfaldsmodellen handler agil udvikling om at være
tilpasningsparat i en dynamisk verden, hvor alting hurtigt kan ændre sig
om det er feedback fra brugere, ændringer i konteksten,
kravmodifikationer eller lignende. Den agile udvikling har modsat
vandfaldsmodellen overlappende faser og systemet udvikles af små
selvorganiserende og samarbejdende teams, som i kontinuerte cykluser
også kaldet sprints udvider systemer. Det sker i tæt samarbejde med
kunden, der er involveret i processen fra start til slut.

Den agile udviklingsmetode er beskrevet i et manifest, der består af
fire vigtige værdier og tolv principper, der fungerer som en guide for
den agile tilgang. De fire vigtige værdier, som den agile metode tager
udgangspunkt i, kan kort sagt opsummeres således:

1.  Hellere samarbejde og mennesker end processer og værktøjer
2.  Hellere et velfungerende system end omfattende dokumentation
3.  Hellere dialog og samarbejde med kunden end forhandling af kontrakt
4.  Hellere muliggøre håndtering af forandringer end ensidigt fokus på
    fastholdelse af en plan.

Disse værdier skal i et vist omfang ses som prioriteringer. Dvs. i den
agile udviklingsmetodologi sættes stadig stor pris på punkterne der står
til sidst. Men man værdsætter bare de andre værdier til venstre endnu
højere.

Med udgangspunkt i værdisættet har man i manifestet formuleret følgende
principper:

1.  Kundens tilfredshed er af højeste prioritet. Det sker gennem tidlige
    og løbende afleveringer af værdifuld systemet.
2.  Ændringer i krav imødekommes også sent i udviklingen af systemet. De
    agile ændringer sikrer, at ændringerne er til kundens fordel i
    sidste ende.
3.  Løbende evaluering og test af systemet. Jo oftere, jo bedre.
4.  Udviklere og repræsentanter for forretningsdelen skal samarbejde
    dagligt.
5.  Opbyg projekter omkring motiverede folk. Giv dem de rette omgivelser
    og relevant støtte. Stol på dem.
6.  Den mest effektive form for kommunikation er ansigt til ansigt.
7.  Fremdrift måles på hvor velfungerende systemet er.
8.  Agil udvikling fremmer bæredygtig udvikling. Udviklere og brugere
    bør altid kunne holde et bestemt tempo i udviklingen.
9.  Agil udvikling fremmes ved godt design og ekspertise
10. Hold det enkelt (KISS - Keep It Simple and Straight) og tænk i
    løsninger der er så simple som mulige og kun kan det de skal.
11. Selvorganiserede teams der langt hen ad vejen leder sig selv. Det er
    karakteristisk at når alle i gruppen tager ansvar og respekterer
    hinanden, så følger ofte gode resultater.
12. Reflekterende praksis hvor der løbende kigges tilbage på hvad der er
    gået godt og hvad der er gået mindre godt. Hvorledes kan kunden
    inddrages undervejs i processen.

I figuren er det illustreret hvorledes agil udvikling fungerer. ![Agil
udvikling](images/agileprojekt.jpg)

Som det også er illustreret i figuren, så inddeles produktet i mindre
inkrementale komponenter. Heraf den inkrementelle udviklingstilgang.

I næste afsnit kigger vi på en konkret implementering af de agile
tankegang, som kaldes for SCRUM.

### Agil vs iterativ udvikling

Iterativ udvikling i høj grad er fokuseret på softwarens struktur og
hvorledes man kan anvende sine ressourcer bedst muligt til at udvikle og
udvide systemet med mindre komponenter, så det på sigt giver systemet ny
værdi for brugeren, men ikke nødvendigvis i den nuværende iteration.
Agil udvikling adskiller sig fra iterativ udvikling i den forstand, at
ved hver ny iteration bør der skabes ny værdi for brugeren ellers har
iterationen fejlet.

### Agil udvikling i praksis: SCRUM

Et eksempel på meget anvendt og anerkendt agil udviklingsmetode er
SCRUM, som er taget fra rugby og betyder noget i retning af
"skærmydsler".

Man starter typisk en SCRUM proces i forberedelses fasen med at
formulere følgende: \* Produkt vision. Her beskrives de overordnede mål
for udviklingen af systemet. \* Produkt roadmap. Her beskrives ved brug
af milepæle en overordnet plan for hvornår de vigtigste nøglefunktioer
eller features er klar til levering. \* Release plan. Her inddeles road
map i punkt 2 i indtil flere releases, hvor første release betegner et
såkaldt "minimum viable project" eller minimum levedygtigt produkt. Dvs.
de funktioner/features, som er essentielle for produktet.

I SCRUM arbejdes med tre forskellige roller: \* Product owner, som er
ansvarlig for at planlægge leveringer til kunden og at der er styr på
kravene til produktet. Den pågældende er mao den egentlige ansvarlige
for produktet. \* Scrum master, som sikrer at de enkelte iterationer -
de såkaldte sprints - gennemføres og at det kommunikeres ud og
synliggøres for Product owner. \* Scrum teamet, som er en mindre grupper
af mennesker der står for at udføre de enkelte sprints.

Grundlaget for ethvert SCRUM projekt består af følgende såkaldte
artefakter eller materialer:

-   Produkt Backlog er en samling af alle krav til systemet og
    projektet, som administreres af Product owner. De enkelte krav
    prioriteres og jo højere prioritering, jo mere præcis skal kravene
    være beskrevet.
-   Sprint Backlog indikerer hvilke dele af Product Backlog altså hvilke
    krav, som implementeres i den kommende sprint.
-   Burndown Chart er et visuelt diagram af fremdriften i en iteration.
    Hvor iterationer (typisk målt i dage) er ud af x-aksen men systemets
    backlog er opad y-aksen. Den kan også måles i tid eller antal
    opgaver. Se figuren for et eksempel på et sådan plot.

Et sprint forløber i fire ceremonier hvor hele teamet mødes og det er
SCRUM masterens opgave at facilitere og koordinere møderne.. \*
Planlægning af sprint hvor det enkelt sprint koordineres i fht de
enkelte medlemmer i teamet \* Dagligt Stand Up hvor hvert medlem af
teamet fortæller om hvad de har lavet, hvad de skal i dag og hvorvidt de
har nogle problemer eller ting som kan blokere for at opnå dagens
program \* Sprint review hvor sprintets leveringer gennemgås og
godkendes

Efterfølgende foretages også en retrospektiv proces som har fokus på
hvorledes samarbejdet forløber og hvad der kan gøres bedre til næste
sprint.

### Agil udvikling i praksis: Kanban

Kanban betyder tegnetavle og stammer fra Japan. Det er udviklet med
henblik på just in time produktion, hvor der ligges vægt på at være klar
over hvad, hvornår og hvor meget der produceres. Alt fra supermarkeder
til bilfirmaet Toyota, har blandt gjort brug af Kanban til bl.a. at
optimere og forbedre sin produktionscyklus. Målet er at skabe et flow
mellem efterspørgslen og produktionen, således, at man undgår at have
for meget på lager, men omvendt stadig kan garantere at et produkt
kunden ønsker, stadig er tilgængelig. Teknikken var så succesfuld, at
mange af de samme principper blev adopteret i softwareudviklingen. Det
skyldes ikke mindst, at softwareudviklere kan begynde at gøre brug af
principperne, så snart de forstår dem, modsat eksempelvis Toytas
fabrikker, fordi det stillede højere krav til de fysiske processer og
materialer.

Softwareudviklere kræver blot en tavle og nogle kort, som i øvrigt også
kan være virtuelt. Ofte foretrækkes faktisk virtuelle tavler, da det er
nemmere at synkronisere og samarbejde på tværs af virksomheden, som
fysisk kan være placeret forskellige steder i verdenen.

Al arbejde i et Kanban team omhandler den såkalde Kanban tavle. Den
bruges som et værktøj til at visualisere og optimere arbejdet mellem de
enkelte udviklere og hold. En kanban tavle har typisk tre kolonner, som
rummer en eller flere aktiviteter/opgaver også kaldet Kanban kort.
Kanban kort rummer grundlæggende og kritisk information om de enkelte
opgaver. Det kan være den ansvarlige person, hvornår opgaverne er løst,
et billede af løsningen osv. En typisk tavle vil have følgende tre
kolonner af kanban kort: - To do: Liste af kanban kort, der skal løses.
Typisk prioriteret i lav, middel og høj. - In Progress: Liste af kanban
kort, der er i gang med at blive løst med angivelse i procent hvor tæt
vi er på målet - Done: Liste med færdiggjorte kanban kort og en
angivelse af hvornår.

Typisk opdateres tavlen af en produktejer.

Kolonnerne kan ændres afhængig af den konkrete kontekst og man kan sågar
udvide med flere kolonner, hvis det giver mening for teamet. Eksempelvis
kan tilføjes en code review kolonne, der skal håndtere at kode tjekkes
grundigt igennem for fejl og mangler.

Der er en række fordele ved Kanban-metoden. Bl.a. et øget fokus på hvad
der rent faktisk er aktivt i udviklingsfasen/processen. Ydermere får man
som kunde mere værdi for pengene, fordi det helt naturligt vil være de
vigtigste ting for kunden, som er aktive og i fokus på tavlen, og man
har som både kunde og udvikler et bedre overblik over hvor langt vi er i
processen. Flaskehalsproblemer reduceres og de der er nemmere at
identificere og dermed løses hurtigere. En væsentlig pointe med kanban
metoden er, at multitaskning ikke nødvendigvis altid er en god ting. I
softwareudvikling har det tilbøjelighed til at øge udviklingstiden,
fordi teamet af udviklere bruger tid på at kontekstskifte. For at undgå
dette indføres en såkaldt WIP grænsværdi for hver af kolonnerne på
tavlen. WIP betegner Work-In-Progress grænse. Dvs. et maksimalt antal
opgaver, som et team arbejder på i daværende øjeblik. Det kunne
eksempelvis måske være en god ide at have en lav WIP for kolonnen code
review, fordi man som udikler derved fordres til at rette og teste
fremfor at udvikle ny kode, hvilket de fleste udviklere typisk
foretrækker.

## Øvelser

1.  Overvej styrker og svagheder ved vandfaldsmodellen. Hvornår er det
    er en fordel at bruge vandfaldsmodellen fremfor eksempelvis iterativ
    udvikling?
2.  Sammenlign skridtvis forfining, inkrementel udvikling og iterativ
    udvikling. Hvilke ligheder er der og hvordan adskiller de sig?
3.  Undersøg tre forskellige større IT-projekter, der har fejlet eller
    været forsinket i udviklingem. Hvad synes årsagen at være? Kan den
    relateres til udviklingsmetoden?
4.  I det følgende skal du beskrive i ord og figurer hvorledes man ved
    brug af skridtvis forfining kan udvikle et simpelt kryds og bolle
    spil mod en kunstig intelligent spiller. Det er ikke et krav at
    skrive egentlig kode blot at man beskriver de enkelte trin i
    processen. De enkelte trin skal dog være så tæt på rigtig kode, at
    man let kan implementere spillet i praksis.
5.  I det følgende skal konstrueres et system til at holde styr på
    klokken ved brug af STREAM \# 16. Computationel tænkning og
    designmønstre (ikke skrevet endnu)

Computationel (eller datalogisk) tænkning dækker over en række
praksisser og færdigheder, der regelmæssigt benyttes, når man
eksempelvis løser komplekse problemer indenfor programmering, men som
desuden er essentielle for at tilegne sig viden indenfor det man kunne
kalde den digitale eller computationelle verden. Det er essentielle
færdigheder i forhold til at facilitere mulig kommunikation mellem
menneske og maskine.

Designmønstre betoner kodenære løsninger på problemer, der ofte opstår
indenfor design og udvikling af software. Man kan betragte dem som en
form for kodeskabeloner, der kan tilpasses til langt de fleste
kontekster.

Fælles for begreberne "computationel tænkning" og "designmønstre" er, at
de handler om at beskrive og formalisere den måde man arbejder på, når
man løser problemer indenfor programmering. I næste afsnit gives en mere
detaljeret gennemgang af nogle af de vigtigste principper, der knytter
sig til computationel tænkning. Herefter et afsnit om nogle af de mest
anvendte designmønstre.

## Computationel tænkning

Computationel tænkning er et paraplybegreb, som dækker over en række
færdigheder og metoder man typisk gør brug af i arbejdet med at udvikle
løsninger på problemer indenfor programmering og datalogi.

For forskere og udviklere såsom dataloger og programmører giver brugen
af computationel tænkning mulighed for bedre at forstå hvordan systemer
funger og skabe nye computatinelle modeller og algoritmer.

For studerende er computationel tænkning et effektivt værktøj til at
hjælpe med udvikle strategier i forhold til at løse diverse problemer.
Et oplagt eksempel på anvendelse computationel tænkning er i
konstruktionen af de algoritmer, som implementeres, når man udvikler et
nyt system. Men computationel tænkning bruges i den grad også udenfor
programmering. Eksempelvis når man skal bage en kage eller når man skal
instrueres i at bygge et fysisk produkt såsom et legetøj fra Lego eller
et møbel fra Ikea.

Netop fordi den digitaliseret verden bliver stadig mere nærværende har
der i de senere år været et stadig stigende fokus på at træne og udvikle
computationel tænkning fra grundskolen til gymnasiet og det gælder i
øvrigt på tværs af lande. Det hænger desuden sammen med, at stort set
alle fag og aspekter af samfundet har fået øjenene op for, at den
computationelle tankegang er relevant og nødvendig i mange sammenhænge i
forhold til at kommunikere med computeren og løse problemer.

Herunder gennemgår vi fire af de vigtigste principper indenfor
computationel tænkning kaldet dekomposition, abstraktion,
mønstergenkendelse og algoritme design. Det er i den sammenhæng vigtigt
at understrege, at computationel tænkning ikke kan reduceres til disse
fire principper men dækker over et langt mere omfattende teori og
begrebsapparat, men at disse principper er centrale for forståelsen og
anvendelsen af computationel tænkning indenfor programmering.

I gennemgangen af de fire principper tages udgangspunkt i udviklingen af
et simpelt kryds og bolle spil.

### Dekomposition

Dekomposition minder ret meget om princippet "del og hersk", men der er
dog forskelle. Førstnævnte har rod i problemløsning, hvor det handler om
at løse et problem i mindre dele, som både mennesket og computeren har
nemmere ved at forstå og samtidig finde en løsning på. Dekomposition er
mao. en ret kodenær strategi, som gør det muligt at indele koden i
mindre dele og efterfølgende gør det nemmere at teste og fejlrette. Del
og hersk har rødder i algoritmikken, som en teknik til at dele problemer
ind i mindre similære problemer indtil de kan løses, hvilket rekursive
algoritmer er et godt eksempel på.

I forhold til at bruge dekomposition i udviklinge af kryds og bolle
kunne man eksempelvis oprette funktioner, der har forskellige opgaver.
Det kunne eksempelvis være at tage imod input fra brugeren, tjekke
brættet for mulige vinderkombinationer eller tegne brættet.

### Abstraktion

Abstraktion eller generalisering handler om at kigge på sit problem
eller domæne fra et helikopterperspektiv. Når vi kigger på tingene fra
en helikopter fokuserer vi på de vigtigste informationer og elementer i
det eller de problemer, som vi forsøger at løse, og vi ignorer nogle af
de unødige detaljer. Dermed ikke sagt at detaljen på et tidspunkt ikke
er vigtig, men abstraktion sker typisk i designfasen af ens problem.

I forhold til kryds og bolle kunne man eksempelvis betragte de to mulige
spillere `X` og `O`. Selvom de på papiret ser forskellige ud så har de
også meget til fælles. De skal begge tegnes i en celle, tre på stribe
giver sejr osv. Man kan med andre ord forestille sig, at man i praksis
koder kun en enkelt spiller og blot ændre måden denne spiller tegnes på
ud fra hvis tur det er. På denne måde bliver logikken adskilt fra den
grafiske repræsentationen, hvilket muliggør, at man kan ændre de to dele
for sig uden at skulle ændre på den anden.

Abstraktion kan også bruges i forhold til at gøre sig overvejelser
omkring repræsentation af brættet i den faktiske kode. I praksis kunne
de 3\*3 felter repræsenteres af hver deres variable, men i den
sammenhæng indses det ret hurtigt, at det nok er bedre at bruge et array
eller en liste.

``` {.javascript}
function createBoard() {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board[i] = "-";
  }
  return board;
}
```

Her initialiseres de ni celler med en bindestreg blot for at illustrere,
at cellerne er tomme.

En anden mere lidt mere skalerbar repræsentation af brættet ville være
ved brug af et to-dimensionelt array. Herunder en skitsering af funktion
til at konstruere brættets repræsentation:

``` {.javascript}
function createBoard(rows,cols) {
  let board = [];
  for (let r = 0; r < rows; r++) {
    board[r] = [];
    for (let c = 0; c < cols; c++) {
      board[r][c] = "";
    }
  }
  return board;
}
```

Funktionen tager to parametre svarende til antallet af rækker og
kolonner. Igen et eksempel på hvorledes abstraktion skaber langt mere
elegant kode, hvis man senere ønsker at generalisere brættet til
vilkårlige størrelser.

Endelig kunne man også forestille sig at indlejre selve spillet i en
klasse, der indeholder metoder til at håndtere spillets tilstand, om der
er en vinder eller visualiseringen af brættet.

### Mønstergenkendelse

Man kunne bruge mønstergenkendelse til at identificere de mulige
vinderkombinationer enten ved brug af en kombination af strenge eller
ved brug af løkker/betinget udførsel til at tjekke om brættet opfylder
en vinderkombination.

Hvis brættet var repræsenteret ved et en-dimensionelt array, så ville
vinderkombinationerne se således ud, hvor tallene refererer til index i
arrayet og plus refererer til en sammenkædning af de enkelte felter:

-   Første række: 0+1+2
-   Anden række: 3+4+5
-   Tredje række: 6+7+8
-   Første kolonne: 0+3+6
-   Anden koloonne: 1+4+7
-   Tredje kolonne: 2+5+8
-   Første diagonal: 0+4+8
-   Anden diagonal: 2+4+6

Hvis repræsentationen af brættet er et to-dimensionelt array jf. figuren
herunder, vil vindermønstrene bestå af en sammenkædning af følgende
celler:

-   Første række: (0,0)+(1,0)+(2,0)
-   Anden række: (0,1)+(1,1)+(1,2)
-   Tredje række: (0,2)+(1,2)+(2,2)\
-   Første kolonne: (0,0)+(0,1)+(0,2)
-   Anden koloonne: (1,0)+(1,1)+(1,2)
-   Tredje kolonne: (2,0)+(1,2)+(2,2)
-   Første diagonal: (0,0)+(1,1)+(2,2)
-   Anden diagonal: (2,0)+(1,1)+(0,2)

![Kryds og bolle](../kap16/images/tictactoe.png)

Da brættet er relativt småt er det næsten nemmere at finde disse mønstre
ved brug af sammensatte strenge. Gør vi brættet større eller udvider det
til fire-på-stribe kunne man passende benytte en løkkekonstruktion til
at indhente de givne mønstre.

## Algoritme design

I denne fase formuleres en skridt for skridt procedure eller algoritme,
som løser den konkrete opgave såsom at tjekke hvorvidt en spiller har
vundet. Herunder en funktion, der tjekker for nogle af de mulige
vinderkombinationer fundet tidligere.

Herunder en version der tjekker for vinderkombinationer, hvor brættet er
repræsenteret ved et 1-dimensionelt array:

``` {.javascript}
function checkWinnerCombo(board){
  let winnerCombos = []
  winnerCombos.push(board[0]+board[1]+board[2])
  winnerCombos.push(board[3]+board[4]+board[5])
  winnerCombos.push(board[6]+board[7]+board[8])
  winnerCombos.push(board[0]+board[3]+board[6])
  winnerCombos.push(board[1]+board[4]+board[7])
  winnerCombos.push(board[2]+board[5]+board[8])
  winnerCombos.push(board[0]+board[4]+board[8])
  winnerCombos.push(board[2]+board[4]+board[6])
  if(winnerCombos.contain("xxx")){
    return "X"
  }
  if (winnerCombos.contain("ooo")){
    return "O"
  }
  return "-"
}
```

Alle de mulige vinderkombinationer tilføjes som streng-elementer i en
liste. Til sidst tjekkes om nogle af disse indeholder tre ens symboler
("x" hhv "o").

Herunder en tilsvarende funktion for det 2-dimensionelle bræt:

``` {.javascript}
function checkWinnerCombo(board){
  let winnerCombos = [board[0][1]+board[1][0]+board[2][0],
                      board[1][3]+board[1][4]+board[1][5],
                      board[2][6]+board[2][7]+board[2][8]]
  if(winnerCombos.contain("xxx")){
    return "X"
  }
  if (winnerCombos.contain("ooo")){
    return "O"
  }
  return "-"
}
```

Arrayet `winnerCombos`samler strenge af krydser og boller for at
identficere om der findes en celle med enten "xxx" eller "ooo".
Funktionen returner enten "X","O" eller "-" afhængig af om der er en
vinder og i såfald hvem.

Et andet eksempel på algoritme design ved kryds og bolle er at udvide
spillet med en simpel AI. Da der er et begrænset antal mulige valg kan
man diskutere hvor avanceret implementering af en AI man ønsker. Men en
mulighed kunne være at bruge en såkaldt `minmax` algoritme. Som
udgangspunkt forventer algoritmen altid, at modstanderen vælger det
bedst mulige træk, så den vælger ud fra det hvad det bedst mulige træk
er for den. Groft skitseret vil den følge følgende trin: 1. Evaluer
brættets tilstand og tildel point til hver tom celle på brættet 2.
Generer en liste af mulige træk, som kan tages ud fra spillets nuværende
tilstand 3. For hvert træk simuleres modstanderens mulige svar 4. Der
tildeles en score i forhold til den resulterende tilstand af brættet 5.
AI vælger det træk der resulterer i den højeste score for den selv.

## Designmønstre

Har man kodet længe nok oplever man nok, at man løber ind i mange af de
samme problemer og udfordringer uafhængig af hvilket system man
udvikler, hvilken kontekst/domæne man arbejder indenfor eller hvilket
sprog man koder i. Kigges eksempelvis på mobile webapplikationer er der
megen af den samme funktionalitet og mange af de samme problemer
uafhængig af om der udvikles et nyt socialt medie, en webshop eller
lignende. Designmønstre (kaldet "design patterns" på engelsk) er et
forsøg på at komme disse typiske problemer til livs ved at tilbyde
generiske løsninger og generelle koncepter, som kan sættes i spil.
Modsat algoritmer, der ligesom en madopskrift typisk definerer et meget
præcist sæt af instruktioner, som løser en konkret opgave, så er
designmønstre mere generiske konceptuelle skabeloner på løsninger, der
kan justeres til den konkrete kontekst og system.

I det følgende gives først et overblik over de forskellige typer af
designmønstre og gennemgår vi i flere detaljer med konkrete
kodeeksempler, en række af de vigtigste designmønstre.

### Tre forskellige typer designmønstre

Designmønstre kan inddeles i fire overordnede typer: -
Konstruktionsmønstre (på engelsk: "creational patterns"): Beskriver
forskellige måder eller mekanismer til at konstruere eller kreaere
objekter på. - Strukturelle mønstre (på engelsk: "structural patterns"):
Beskriver hvorledes objekter kan samles i større strukturer, som stadig
er fleksibel, skalerbar og effektiv. - Adfærdsmønstre (på engelsk
"behavioral patterns"): Beskriver hvorledes ansvar fordeles mellem
forskellige objekter og hvorledes algoritmer kan integreres.

### Konstruktionsmønstre

Herunder gennemgås kort eksempler på tre af de mest typiske
konstruktionsmønstre, fabriksmønsteret, byggemønsteret og
prototypemønsteret.

#### Fabrik mønsteret ("Factory design pattern")

Factory design mønsteret giver mulighed for at konstruere objekter uden
at præcisere hvilken klasse de er instantieret fra. I stedet konstrueres
en fabrik, som har ansvaret for at oprette objekterne.

Et eksempel i p5.js kan være en fabrik, der opretter forskellige former
for trekanter. Fabrikken kan have en metode, der tager en parameter som
indikerer typen af trekanten. Eksempelvis kunne man forestille sig en
med runde hjørner, stump eller spids trekant. Fabrikken returnerer
derfor et objekt af den ønskede type.

``` {.javascript}
class TriangleFactory {
  create(type) {
    if (type === 'normal') {
      return new NormalTriangle(); // normal trekant
    } else if (type === 'Obtuse') {
      return new ObtuseTriangle(); // stump trekant
    } else if (type === 'Pointed') {
      return new PointedTriangle(); // spids trekant
    }
  }
}

const factory = new TriangleFactory();
const triangle1 = factory.create('normal');
const triangle2 = factory.create('obtuse');
const triangle3 = factory.create('pointed');
triangle1.draw()
triangle2.draw()
triangle3.draw()
```

Metoden `create()` tager en parameter på baggrund heraf returneres en
instans af den tilsvarende klasse.

De enkelte klasser, der repræsenterer de tre typer trekanter skal stadig
konstrueres. Typisk kunne det gøres ved brug af nedarvning, hvor de tre
trekantklasser arver fra en fælles forældreklasse:

``` {.javascript}
class Triangle {
  //...
  draw() {
    console.log("Drawing from Triangle")
  }

}
class NormalTriangle extends Triangle {
  //...
  draw() {
    console.log("Drawing from NormalTriangle")
  }
}
//...
```

Mønsteret er relevante at bruge, når vi har en forældreklasse med flere
børn, og baseret på input skal vi returnere en af børneklasserne. Ved at
bruge mønsteret fratages ansvaret for instansieringen af ​​en klasse og
tildeles i stedet fabriksklassen. Herved centraliseres koden og gør det
nemmere at ændre og justere hvis eksempelvis man udvider med flere
børneklasser senere.

#### Byggemønsteret ("Builder pattern")

Builder design pattern er en måde at opbygge komplekse objekter ved at
adskille objektets konstruktion fra dens representation. Det gør det
nemmere at skifte mellem forskellige måder at opbygge et objekt på, uden
at ændre selve objektet. Mønsteren kan bruges til at bygge mere
komplekse objekter ved at give brugeren mulighed for at specificere hvad
der er knyttet til klassen fremfor en kompleks konstruktør i klassen,
som tager en lang række parametre, kan man i stedet lade brugeren vælge
og tilføje hvad der skal være inkluderet i det endelige objekt.

Et eksempel i p5.js kan være en klasse, der repræsenterer en skitse, der
består af flere figurer. I stedet for at have en konstruktør, der tager
en række parametre for at oprette skitsen, kan man bruge en
builder-klasse til at bygge skitsen op.

``` {.javascript}
class SceneBuilder {
  constructor() {
    this.scene = [];
  }

  addCircle(x, y, r) {
    this.scene.push(new Circle(x, y, r));
  }

  addTriangle(x1,y1,x2,y2,x3,y3)
  {
    this.scene.push(new triangle(x1,y1,x2,y2,x3,y3))
  }

  addRectangle(x, y, w, h) {
    this.scene.push(new Rectangle(x, y, w, h));
  }

  getSketch() {
    return this.scene;
  }
}

const builder = new SceneBuilder();
builder.addCircle(10, 30, 55);
builder.addTriangle(5, 5, 60,60,700,700);
builder.addRectangle(30, 30, 40, 40);
const mySketch = builder.getSketch();
```

I eksemplet ovenfor tilføjes en cirkel, en trekant og et rektangel til
en scene, der reelt bare er et tomt array. Ved at bruge
builder-mønsteret kan man nemt tilføje eller fjerne figurer i scenen,
uden at skulle ændre i selve scenen. Ligesom man også nemt kan skifte
mellem forskellige måder at opbygge scenen på ved at have flere
forskellige scenebyggere.

#### Prototypemønsteret

Prototypemønsteret bruges til at oprette nye objekter ved at klone
eksisterende objekter i stedet for at oprette dem fra bunden. Det gør
det nemmere at oprette flere objekter, som minder meget om hinanden men
stadig er unikke.

Nedenfor konstrueres en prototype-klasse kaldet `Circle`, som klones ved
at kalde `Object.create`. Dernæst ændres værdierne for klonen.

``` {.javascript}
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  draw() {
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}

function setup() {
  const prototypeCircle = new Circle(50, 50, 30);
  const newCircle = Object.create(prototypeCircle);
  newCircle.x = 100;
  newCircle.y = 100;
  prototypeCircle.draw();
  newCircle.draw();
}
```

#### Singletonmønsteret

Singleton pattern er en design pattern, der sørger for, at der kun kan
oprettes én instans af en klasse i koden, hvilket muliggør at dele
objekter mellem forskellige dele af programmet, da man altid ved, at der
kun er én instans af objektet.

I p5.js kan man bruge Singleton pattern til at sikre, at der kun er én
instans af en klasse, der styrer adgangen til en bestemt ressource. Det
kunne eksempelvis være en klasse `Config`, som opbevarede nogle data,
der beskrev konfigurationen af et system. Dvs. nogle globale værdier,
som skal kunnes ændres og tilgås fra forskellige steder i programmet.

Herunder er et eksempel:

``` {.javascript}
class Config {
  constructor() {
    if (!Config.instance) { //her tjekkes hvorvidt klassen allerede er instantieret
      this.data = [];
      Config.instance = this;
    }
    return Config.instance;
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

const config1 = new config();
const config2 = new config();
console.log(config1 === config2); // returner sand

config1.addData("Et tal");
console.log(config2.getData()); // returner ["Et tal"]
```

Ved at tjekke i instanstieringen af klassen hvorvidt klassen allerede er
oprettet. Hvis det er tilfældes returnes den eksisterende instans og
ellers oprettes den for første gang. Således kan forskellige instanser
af klassen arbejde på de samme data.

### Strukturelle mønstre

Herunder gennemgås tre af de mest anvendte strukturelle mønstre,
adapter-mønsteret, facade-mønsteret og komposit-mønsteret.

#### Adapter-mønsteret

Adapter-mønsteret er et designmønster, der gør det muligt for to
funktioner/klasser/biblioteker med forskellige grænseflader at arbejde
sammen ved at tilpasse den ene grænseflade til den anden. I p5.js bruges
Adapter-mønsteret ofte til at tilpasse JavaScript-objekter eller
biblioteker til at kommunikere med biblioteket p5.

Herunder et eksempel. Fra P5 ved vi, at der eksisterer en metode til at
tegne en cirkel, der tager tre parametre: x,y og radius.

Vi kunne forestille os, at vi ville gøre brug af den i et andet program
lave en grænseflade til denne metode, så vi kan gøre brug af den heri.
Det kunne eksempelvis gøres ved at lave en funktion, hvor vi sikrer, at
cirklen stadig får radius og ikke diameteren.

``` {.javascript}
function DrawCircleAdapter(x,y,d)
{
    circle(x,y,d/2)
}
```

#### Facade-mønsteret

Facade-mønsteret giver en simpel grænseflade til en kompleks system. På
den måde tilbydes et abstraktionslag mellem klienten og det komplekse
system, hvilket gør det nemmere at bruge og forstå. I p5.js kan
facade-mønsteret bruges til at skjule kompleksiteten i at bruge flere
forskellige biblioteker eller funktioner i en enkel grænseflade. På
denne måde kan man f.eks. opbygge et komplekst program med mange
forskellige funktioner og stadig gøre det nemt at bruge og forstå for en
bruger.

Herunder et eksempel:

``` {.javascript}
class P5SketchFacade {
  constructor() {
    this.graphics = new p5(); // her instantieres et p5 objekt, som normalt håndtere scenen
    this.sound = new p5.sound(); //her instantieres lyd til p5
  }
  drawCircle(x, y, r) {
    this.graphics.ellipse(x, y, r);
  }
  createButton(lblName, x, y) {
    this.dom.createButton(lblName).position(x, y);
  }
  playSound(file) {
    this.sound.play(file);
  }

}
```

Herunder bruges facade-mønsteret i praksis:

``` {.javascript}
let sketch = new P5SketchFacade();
sketch.createButton("Spil", 50, 40);
sketch.playSound("lyd.mp3");
sketch.drawCircle(100, 100, 50);
```

#### Komposit-mønsteret

Komposit-mønsteret muliggør at arbejde med en samling af objekter på en
ensartet måde. Samlingen af objekter kan behandles som var det et enkelt
objekt. Det giver mere overskuelig og elegant kode, og nemmere at
organisere og manipulere komplekse hierarkier af objekter.

Et godt eksempel i p5 kunne være at opbygge mere komplekse animationer
eller scener ved at sammensætte simple objekter til mere komplekse
objekter, som knyttes til en scene. Herunder et eksempel hvor vi igen
kan tilføje forskellige geometriske figurer til scenen.

``` {.javascript}
class Scene {
    constructor() {
        this.shapes = [];
    }
    add(shape) {
        this.shapes.push(shape);
    }
    remove(shape) {
        let index = this.shapes.indexOf(shape);
        if(index !== -1) {
            this.shapes.splice(index, 1);
        }
    }
    draw() {
        for (let shape of this.shapes) {
            shape.draw();
        }
    }
}
```

Mønsteret minder om byggemønsteret men adskiller sig ved, at vi
abstraherer fra hvilken slags geometrisk form, som vi ønsker at tilføje
til scenen.

Eksempelvis kunne vi bruge mønsteret på at tilføje forskellige figurer
på en elegant måde og efterfølgende tegne den:

``` {.javascript}
let myScene = new Scene();
let square = new Square(100, 100, 30);
let circle = new Circle(200, 300, 40);
let triangle = new Triangle(300, 490, 70);
myScene.add(square);
myScene.add(circle);
myScene.add(triangle);
myScene.draw()
```

### Adfærdsmønstre

Herunder gennemgås tre af de vigste adfærdsmønstre,
ansvarskæden-mønsteret, kommando-mønsteret og iterator-mønsteret.

#### Ansvarskæde-mønsteret ("Chain of responsibility")

Ansvarskæde muliggør at sende et objekt gennem en kæde af objekter til
det når et objekt, der kan operere på det. Det giver en fleksibel måde
at håndtere begivenheder eller anmodninger i et system. Eksempelvis
kunne det være relevant ved håndteringen forskellige typer input fra
brugeren:

``` {.javascript}
class ClickHandler {
    constructor() {
        this.next = null;
    }
    handleClick(x, y) {
        if (this.next) {
            this.next.handleClick(x, y);
        }
    }
}
class CircleHandler extends ClickHandler {
    handleClick(x, y) {
        if (insideCircle(x, y)) {
            console.log("Vi har klikket på en cirkel");
        } else {
            super.handleClick(x, y);
        }
    }
}
class SquareHandler extends ClickHandler {
    handleClick(x, y) {
        if (insideSquare(x, y)) {
            console.log("Vi har klikket på et kvadrat");
        } else {
            super.handleClick(x, y);
        }
    }
}
```

Her tjekker metoderne `insideCircle` og `insideSquare` hvorvidt vi har
klikket indenfor en cirkel hhv. et kvadrat. Metoderne er ikke
implementeret, hvilket overlades til læseren. De skal havde adgang til
hvor cirklerne og kvadraterne er placeret. Her kunne man eksempelvis gør
brug af eksempelvis singletonmønsteret.

Herunder anvendes mønsteret til at håndtere forskellige kliks:

``` {.javascript}
let circle = new CircleHandler();
let square = new SquareHandler();
circle.next = square;

function mouseClicked() {
    circle.handleClick(mouseX, mouseY);
}
```

#### Kommandomønsteret

Command-mønsteret er et designmønster, der adskiller en anmodning om at
udføre en handling fra selve handlingen. Det giver en fleksibel måde at
håndtere handlinger eller kommandoer i et system. I p5.js kan
Command-mønsteret bruges til at håndtere input eller interaktioner fra
brugeren.

For eksempel, hvis man ønsker at opbygge en interaktiv scene med flere
forskellige interaktionsmuligheder, kan man oprette et Command-objekt
for hver handling, der skal udføres.

Man kunne forestille sig, at der bygges en scene hvor brugeren kan
skifte baggrundsfarve ved at trykke på en knap.

I din forbindelse oprettes en Command-klasse med en eksekveringsmetode
kaldet `execute()`. Ved at skifte baggrundsfarve kan repræsenteres som
en ny instans af Command-klassen med sin specifikke implementering af
execute()-metoden.

``` {.javascript}
class Command {
    constructor() {
        this.execute = function(){};
    }
}

class changeBGColor extends Command {
    constructor(color) {
        super();
        this.color = color;
        this.execute = function() {
            background(color);
        };
    }
}
```

I scenen kan nu oprettes en ny instans af `changeBGColor`, når brugeren
trykker på knappen, og kalder `execute()`:

``` {.javascript}
function setup() {
    let button = createButton("Ændre baggrundsfarven");
    button.mousePressed(changeBackground);
}
function changeBackground() {
    let cmd = new changeBGColor("yellow");
    cmd.execute();
}
```

## Øvelser

1.  Udvælg et relevant problem og prøv at anvende computationel tænkning
    til at løse det. Beskriv løsningen ud fra hvorledes du anvender de
    fire principper, abstraktion, dekomposition, mønstergenkendelse og
    algoritme design.
2.  Færdiggør implementationen af kryds og bolle spillet som beskrevet i
    starten af kapitlet. Udvid gerne med en simpel AI-modstander.
3.  Anvend computationel tænkning til at lave et fire-på-stribe spil.
    Beskriv løsningen ud fra hvorledes du anvender de fire principper,
    abstraktion, dekomposition, mønstergenkendelse og algoritme design.
    Du behøver ikke at implementere den faktiske kode. Men pseudokoden
    skal være så kodenær, at det er let at gøre.
4.  I det følgende skal udvikles fabriksmønstre til at oprette
    forskellige typer figurer på scenen og forskellige animationer
    (såsom hoppende bolde eller svævende trekanter).
5.  Overvej forskellige eksempler hvor det kan være relevant at bruge
    fabriksmønsteret.
6.  Implementer et byggemønster, der kan konstruere forskellige typer af
    to-dimensionelle huse set fra siden. De må gerne tegnes ud fra
    simple geometriske primitiver.
7.  Beskriv hvorledes byggemønsteret er brugt herunder og hvad det gør:

``` {.javascript}
  class ColorBuilder {
    constructor() {
      this.grey = 0;
    }
    
    withGrey(grey) {
      this.grey = grey;
      return this;
    }
    
    build() {
      return color(this.grey);
    }
  }
```

8.  Udvid forrige opgave ved brug af byggemønsteret så den kan
    konstruere en RGB-farve.

# 17. Udviklingsmiljø og versioneringskontrol

Et godt udviklingsmiljø er helt centralt, hvis man skal blive en god og
produktiv programmør på sigt. Det giver bl.a. mulighed for at finde fejl
hurtigere pga muligheden for debugning og syntaks highlightning (giver
koden farve efter dens struktur), teste nemmere, forslag til kode og
mulighed for at arbejde med andre udviklere på samme projekt. Det er
essentielt at kende sit udviklingsmijø godt. Man kan måske sammenligne
det lidt med en forfatter, der måske nok kan vælge at skrive sin bog på
en gammel skrivemaskine, men som med de moderne tekstbehandlingssystemer
til rådighed meget nemmere kan rette fejl, slå op i synonym ordbog osv.

I det følgende vil vi gennemgå i detaljer hvorledes man

-   skriver kode via editoren på p5js.org og deler den med andre
-   installere og bruger editoren VS kode
-   installere og bruger versioneringssystemet Github.

Versioneringssystemer spiller en central rolle i moderne udvikling, da
det giver mulighed for at arbejde sammen på projekter og i det hele
taget holde styr på udviklingen af ens kode. Det gør det nemt at gå
tilbage til en tidligere version af ens kode.

## Brug af editoren på p5js.org

For at starte op med at kode skal du ind på p5js.org og trykke på
"Editor":`<br>`{=html}

![P5JS.org Editor](../kap18/images/p5editorstart.png)

Det vil kun være muligt at gemme, hvis du opretter en konto og/eller
logger ind. Det kan gøres ret nemt med en gmail/github konto eller man
kan oprette en konto på en anden mail. Alle filer bliver gemt i skyen.
Du kan selvfølgelig hente dine programmer ned, hvis du er interesseret i
det.

Herefter kommer du ind i en menu, der ser således ud:

![P5JS.org brugergrænsefladen](../kap18/images/p5hovedmenu.png)

Til venstre ses feltet hvor du skriver koden. Til højre resultatet af
din kode, hvis du har trykket "Play" på den røde knap med trekanten.
Konsollen ses nederst i venstre hjørne. Den kan eksempelvis være god at
bruge, når du f.eks. vil udskrive nogle variablers værdier for at tjekke
om de rent faktisk er det du tror de er. Du kan lave nye filer under,
dele projekter og se andres projekter oppe i menuen: ![Ny
sketch/program](../kap18/images/sketches.png)

Kollektioner er en mulighed for at samle filer og dele dem med andre:

![Kollektioner](../kap18/images/collections.png)

![Dele kollektioner](../kap18/images/sharecollection.png)

Når du ønsker at sprede din kode udover flere filer, så kan det også ret
let lade sig gøre ved at gå op i hovedmenuen og trykke på "Sketch"
efterfulgt af menupunktet "Add file". Her giver du filen et navn. Husk
at hvis det skal være javascript kode skal den have efternavnet js til
sidst. I det følgende har vi lavet en ny fil som vi har kaldt for
sketch2.js. Tryk på vinklen ude til venstre for at danne dig et overblik
over din kode:

![Tilføj fil](../kap18/images/p5newfile.png)

For at du kan bruge filen er det nødvendigt at inkludere den i din html
kode. Vær her særligt opmærksom på rækkefølgen af de filer du
inkluderer. Hvis en fil y er afhængig af en anden fil x, så bør x
inkluderes før y.

![Inkluder filen i html](../kap18/images/p5includeinhtml.png)

Generelt er det en god ide tidligt at lave en fornuftig filstruktur for
dine projekter. Det bliver essentielt når man begynder at lave større
projekter, der måske spreder sig over mange forskellige kodefiler og som
inkluderer måske, både lyd, billeder og video. En mulig overordnet
struktur kunne være noget ala følgende:

![Inkluder filen i html](../kap18/images/p5filestruct.png)

Mapperne kan du lave op under Sketch-\>Add folder. - src rummer alle
javascript filerne - videos rummer alle videoer - images rummer alle
billeder

Ud fra hver folder kan du tilføjer nye filer eller uploade filer til
mappen.

Vær dog opmærksom på at inkludere de rigtige stier i din html fil. Her
er et eksempel på hvorledes man kunne inkludere en fil kaldet sketch.js,
som ligger i src:

![Inkluder filen i html](../kap18/images/p5includefromsrc.png)

Bemærk tilføjelsen af "src/" i linje 13.

Det afslutter vores korte gennemgang af de vigtigste funktioner i online
editoren. Endelig vil vi også gøre opmærksom på, at kigger man på html
koden har man måske bemærket følgende linjer i head-tag:

``` {.javascript}
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/addons/p5.sound.min.js">
```

Disse linjer sørger for at inkludere p5-biblioteket. Det er alt hvad der
skal til. Med mindre at du skal afspille lyd kan du faktisk også slette
inklusionen af det sidste script.

## Visual Studio Code

Visual Studio Code er udviklet af Microsoft og et af de mest populære
udviklingsmiljøer netop nu.

Den er gratis, bygget på open source, og kan afvikles på stort set alle
tænkelige systemer og platforme. Den har et hav af af pakker og et stort
samfund af udviklere bag sig, og den lader sig i høj grad tilpasse til
udviklerens behov og krav.

Til sammenligning med den fulde pakke, Visual Studio, så er Code en
letvægtseditor i den forstand, at den fylder markant mindre og den
afvikles langt hurtigere på de fleste systemer.

Download den nyeste stabile version af [Visual Studio
Code](https://code.visualstudio.com/) og kør den ekskverbare
installationsfil.

### Overblik over menuen

Herunder ses hovedmenuen når man starter VS code. Bemærk først og
fremmest, at systemet nok ser lidt anderledes ud hos læseren. Det
skyldes bl.a. at ikke alle menupunkter er installeret ved en
nyinstalleret version af miljøet.

![Opstart i VS Code](../kap18/images/vscodehovedmenu.png)

I venstre side ses nogle af de centrale menupunkter og dem vil vi kort
dvæle ved:

![Genveje i hovedmenuen i VS Code](../kap18/images/vscodehovedmenu.png)

Filosofien bag VS code er i høj grad, at man bør bruge tastaturet så
meget som muligt fremfor at bruge musen. Det betyder, at der er en lang
række genveje som er gode at kende. Illustrationen ovenfor viser nogle
af de centrale genveje, som er gode at øve sig i at bruge. Man er
selvfølgelig altid velkommen til at bruge musen, hvis man har glemt en
genvej.

For rigtig at komme i gang med miljøet bør man starte med at udvælge en
mappe på ens computer, hvor man har tænkt sig at lægge sine projekter
som undermapper. Dvs.:

1.  Opret en folder på din computer
2.  Start VS Code
3.  Gå ind under menuen File og vælg \"Add Folder to Workspace
4.  Vælg mappen som du har oprettet

Når du nu bruger stifinderen (Ctrl/Command+Shift+E), så vil du få en
menu frem i venstre side, der viser dine mapper i dit workspace.

![Explorer/stifinder i VS Code](../kap18/images/explorervscode.png)

### Installation af P5

Til at afvikle applikationer i P5 har vi brug nogle få plugins.

-   Live Server: Giver mulighed for at afvikle en lokal webserver, som
    vores programmer kan køre på
-   P5 Project Creator: Giver mulighed for nemt at starte et nyt projekt
-   p5js Snippets: En række generiske kodestumper som automatisere en
    del af arbejdet med at skrive koden.

Et andet godt plugin som kan være godt at kende er Live Share, som giver
mulighed for at arbejde flere sammen på samme tid i samme dokument.

### Starte dit første projekt

Når disse tre plugins er installeret, så bør VS code genstartes.
Herefter burde du være klar til at gå i gang.

1.  Find i menuen under View-\> Command Palette eller brug genvejen
    Ctrl/Command+Shift+P.
2.  Nu skulle du gerne have en prompt, hvor du skriver "create p5.js
    project". Typisk så foreslår VS code den ønskede, når du har skrevet
    nogle få tegn, så du bare kan vælge den med piltasterne
3.  Herefter bliver du bedt om at lave en folder til dit projekt. Der
    vælger du en folder i dit workspace. Navngiv projektet så det har et
    sigende navn for det du vil lave.

Når processen er færdig skulle du meget gerne i dit workspace have en
filstruktur:

![P5 projekt i VScode](../kap18/images/createp5vscode.png)

Når du så vil starte dit projekt, går du ind i html filen og trykker på
knappen som vist i figuren:

![Start af webserveren](../kap18/images/webservervscode.png)

Du behøver kun at starte din webserver engang. Når du gemmer ændringer i
din kode i VS code genstartes din P5 applikation automatisk.

## Versioneringskontrol med Github og git

Github, som egentlig bare er en grænseflade til det såkaldte git, er et
versionkontrolsystem. Man kan populært sagt tænke på det som en
tidsmaskine over ændringer i kodebasen. Fordelene ved versionskontrol er
bl.a.:

-   Mange udviklere kan arbejde på samme kodebase
-   Kodebasen ændringshistorik gemmes
-   Ældre versioner af kodebasen kan rekonstrueres

Et helt central begreb indenfor versioneringssystemer er "repository".
Et repository kan populært sagt betragtes som en form for server, hvor
man samler alle projektets filer samt hver fils revisionshistorie. På
Github kan man faktisk ydermere håndtere og diskutere projektets indhold
og arbejde i projektets repository.

Man kan skelne mellem to slags versioneringssystemer: \* Centraliseret
versioneringssystemer er der kun en server eller såkaldt repository. \*
Decentraliseret versioneringssystemer er der flere servere/repositories.

Figuren nedenfor illustrerer de to forskellige versioneringssystemer:

![Versioneringssystemer](../kap18/images/versioneringssystemer.png)

Git, som Github er en frontend til, er et decentraliseret (distributivt)
versionskontrolsystem. Git er open source, har fokus på hastighed og
benyttes i mange store og små software-projekter.

Et eksempel på et større system som bruger git til at vedligeholde er
Linux: \* Android-systemet til mobiltelefoner er bygget på Linux. \*
Koden i linux-kernen vedligeholdes vha. git. Sidste år var der 4000
udviklere og 440 forskellige virksomheder, der bidrog med kode til
linux-kernen.

Hver dag sker nogenlunde følgende med linux-koden: \* 10800 kodelinier
tilføjes \* 5300 kodelinier fjerne \* 1875 kodelinier kode ændres
Konklusion: 8 ændringer per sekund i gennemsnit!

En af de centrale udviklere bag git er i øvrigt Linus Thorvalds, som er
grundlæggeren af Linux.

## Git kommandoer

Vi har tænkt os at bruge Githubs brugergrænseflade til at interagere med
Git, så selvom vi ikke kommer til at kalde git-kommandoer direkte, er
det en god ide at have en fornemmelse for nogle af de grundlæggende
processer i git, så man bedre forstår hvad der sker, når man trykker på
de forskellige knapper i Github.

Herunder nogle helt centrale begreber:

*Init: Ved oprettelse af et nyt og tomt repository *Clone: Når et
repository hentes for første gang *Commit: Når man tilføjer (commit)
permanente ændringer til kodebasen *Push/pull: Når man skubber
(push)/henter (pull) commits til/fra et andet repository *Branch: En
branch er en udgave af kodebasen. Som udgangspunkt arbejdes på en branch
ved navn master. *Merge: Når en udvikler committer ændringer, som ændrer
i en anden udviklers ændringer, så skal den anden bruger sammenflette
(merge) disse i sin kode før vedkommende kan committe.

Vi bemærker samtidig, at en fil kan være i en af følgende tre tilstande:
\* Committed: Filen og alle ændringer i denne er gemt i dit lokale
repository \* Modified: Filen indeholder ændringer som ikke er gemt i
dit lokale repository \* Staged: Filen indeholder ændringer, som ikke er
gemt i dit lokale repository, men som vil blive tilføjet ved næste
commit.

I det følgende vil vi prøve at gennemgå, hvorledes man først bruger
git-kommandoerne.

Start med at åbne VS Code og gå ind i terminalen. Du kan starte en ny
terminal fra menuen Terminal-\>New Terminal eller genvejen
Ctrl/Command+Shift+æ:

![Terminal i VS code](../kap18/images/terminalvs.png)

Man bemærker at der står en sti til venstre, som gerne skulle pege på
ens workspace. Når man er i terminalen, er der tre gode kommandoer at
kende:

-   "cd navn_på_bibliotek": Man skifter placering, så man står i
    underbiblioteket med det skrevne navn. Ved at skrive "cd .." går man
    et skridt tilbage til forældremappen i biblioteksstrukturen
-   "mkdir navn_på_bibliotek_der_skal_oprettes": Man opretter
    biblioteket i den nuværende folder med det ønskede navn.
-   "dir": Giver en liste over alle biblioteker i den nuværende mappe

Nu er vi klar til at oprette et repository.

Skridt 1: Opret et tomt bibliotek: mkdir test_en_hest og skift til
biblioteket med cd test_en_hest Initialiser et tomt repository i dit
nyoprettede bibliotek med følgende to kommandoer

``` {.git}
git
git init
```

Skridt 2: Opret en tekst-fil tekst.txt og tilføj noget tekst til filen.
Kør kommandoen nedenfor for at få et status billede af dit repository:

``` {.git}
git status
```

Skridt 3: Tilføj nu din fil til git, så den observerer hvorvidt der sker
ændringer i fht til dit repository. Det gøres med kommandoen "add". Kør
status igen:

``` {.git}
git add test.txt
git status
```

Skridt 4: Nu er vi klar til at publicere vores ændringer i fil vores til
lokale repository:

``` {.git}
Commit dine ændringer til dit lokale repository:
git commit -m ’Mit første commit’
git status
```

Ved at bruge "-m ..." kan vi tilføje en kommentar vores commit. Det kan
være rart for andre udviklere at får en kort beskrivelse af ændringerne.

Skridt 5: Nu vil vi ændre indholdet i tekst-filen igen og tjekke status.
Kør kommandoen:

``` {.git}
git diff tekst.txt
```

Herefter underrettes git om ændringerne igen med

``` {.git}
git add tekst.txt
```

Og vi afrunder med at opdatere vores repository

``` {.git}
git commit -m ’Min 2. commit’
```

Skridt 6: Få et overblik over dine commits med kommandoen:

``` {.git}
git log -10
```

10 markerer de seneste 10 commits.

Ovenstående var en ganske kort introduktion over nogle af de vigtigste
git-kommandoer. Man bør vide, at der er meget mere til git end det
ovenfor beskrevne, og der er skrevet store tykke bøger om brugen af git
i større og mere komplekse systemer.

## Github i praksis

Github er som nævnt en mere brugervenlig tilgang til git. Reelt er
Github en form for brugergrænseflade til git. I det følgende vil vi
gennemgå nogle af de vigtigste handlinger som man kan foretage. Figuren
nedenfor illustrer hvorledes de enkelte git-kommandoer illustreret i
forrige afsnit fungerer i fht Github:

![Github og git - et
overblik](../kap18/images/gitcommandillustrated.png)

Herunder ses et billede af Githubs brugergrænseflade: ![Github
brugergrænseflade](../kap18/images/githuboverblik.png) I venstre side
har vi listen over repositories og i højre side vises hvorvidt Github
har regitreret ændring om der skal handles på det.

### Oprette et nyt repository i Github

For at oprette et nyt repository, så tryk Ctrl/Command+N og vælg "New
Repository". Herefter kommer du til følgende menu: ![Github
Opret](../kap18/images/githubcreaterepo.png)

Her udfyldes navnet på dit repository, en kort beskrivelse, stien til
den lokale version på din computer, hvorvidt du repo skal initialiseres
med readme (introduktionstekst til brugeren), filer git skal ignorere og
licens for dit projekt.

Når du trykker på "Create Repository" oprette et lokalt repository, som
du kan publicere på Github. ![Publicer
repository](../kap18/images/publishgit.png)

Hvis du ellers har oprettet en konto og er logget ind bør du få følgende
dialogboks eller noget der minder om den: ![Publicer
repository](../kap18/images/publishgit.png)

Du kan vælge mellem den gratis udgave (Github.com) eller Github
Enterprise, som koster penge. På den gratis udgave kan du stadig godt
holde koden privat, men kun med op til tre andre udviklere. I den
kommercielle udgave er der ikke den begrænsning. Hvis du er en del af en
organisation kan du tilføje det.

Prøv for en god ordens skyld at tjekke, at du kan se det repository på
github.com under din profil. Er den privat skal du selvfølgelig være
logget ind.

### Tilføje/ændre en fil i repository

Github og git holder nu øje med biblioteket om der sker ændringer. Når
du eksempelvis opretter en fil i biblioteket (det kunne passende gøres i
VS code), så gør Github dig opmærksom på, at en ny fil er oprettet eller
ændret. Herunder et eksempel, hvor vi ønsker at opdatere vores
repository med ændringer og billedet. Generelt er det en god ide at
starte med at hente den nyeste version fra Github ved at trykke på
knappen "Fetch origin" i højre hjørne.

![Commit ændringer til repository](../kap18/images/commitgithub.png)

Bemærk det grønne felt med plus-tegnet ud for filen. Det betyder, at der
er tale om en ny fil. Den gule cirkel med plet i marker, at git har
registreret ændringer i en eksiterende fil. Som nævnt tidligere er det
altid en god ide kort at opsummere ændringerne inden du trykker på den
blå knap i venstre side "Commit to main".

Når du trykker på knappen melder Github tilbage med anbefalinger til
hvad du så bør gøre. Typisk ønsker du bare at trykke på "Push origin",
hvilket betyder at dine ændringer bliver tilføjet til dit repository på
github.

![Push til dit repository](../kap18/images/commitgithub.png).

### Tjek i historikken

Det kan være godt at holde lidt øje med udviklingen på ens projekt eller
et projekt man er er den af. Det kan man gøre ved at trykke på knappen
"History":

![Historien](../kap18/images/historygithub.png)

Her kan man bl.a. se hvem der har ændret på hvad og hvornår.

### Opdatere lokalt repository med nyeste version

En typisk situation der opstår ret ofte er når du ikke længere har den
nyeste version af en fil i de lokale i repository sammenlignet det
repository, der ligger på Github. Når du bruger "Fetch Origin" knappen
op i højre hjørne af menuen så henter du en status på om der er nogle
nye opdateringer eller forslag til opdateringer på dit lokale
repository. Disse opdateringer kaldes også for "Pull requests".
Brugergrænsefladen i Github gør efter en "fetch" automatisk opmærksom
på, at du kan hente disse pull requests ved at trykke på "Pull origin":

![Pull request efter en fetch](../kap18/images/pullgithub.png)

## Øvelser

Herunder en række øvelser der hver især involverer brugen af editoren på
P5-siden, VS code og Github

a)  Lav et nyt projekt på P5JS.org, hvor du laver en mappe til kilde
    kode kaldet "src". Kræver du er logget ind. Prøv nu at oprette en
    javascript fil, kaldet konstanter.js, i mappen, som du vil bruge til
    at opbevare variable, der er konstante. Lad sketch.js blive hvor den
    er altså i roden. Husk at opdatere din index.html, så den inkluderer
    "konstanter.js".\
    I "konstanter.js" erklæres en variable:

``` {.javascript}
const PI = 3.141592653589793;
const XCENTER = 100
const YCENTER = 100
const RADIUS = 75
```

Prøv nu at bruge disse værdier i sketch.js til at tegne en cirkel samt
printe arealet af cirklen i konsollen. . Installer VS code og de
nødvendige plugins. Find et workspace og lav nu et lille program, der
konstruerer tre forskellige geometriske former. Koden skal være fordelt
på tre forskellige filer.
