# 1. Intro til P5 og Javascript

Et program består af en række instruktioner, som en maskine (computer, telefon, bil, køleskab etc)  forstår. Programmering betegner den proces hvor man ud fra nogle formelle regler konstruerer programmet.

Vi kan tænke på det at programmere som at lave en tegning, hvor den endelige tegning udgør programmet. I det følgende skal vi arbejde med at konstruere simple geometriske former som kan blive til en form for automatiseret tegninger. Dvs. programmer.


## Koordinatsystemer og geometriske former i P5.JS

Et koordinatsystem i P5 ser således ud: 



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


Vi konstruere punkter, linjer, rektangler, ellipser og cirkler på følgende måde: 


```
function setup(){
  	createCanvas(100, 100);
}
function draw(){
 point(40, 50); // point(x, y)
 line(10, 20, 50, 20); // line(x1, y1, x2, y2)
 rect(10, 20, 40, 30); // rect(x, y, width, height)
 ellipse(30, 30, 40, 60); // ellipse(x, y, width, height)
 ellipse(30, 30, 40, 40); // ellipse(x, y, width, height)
}
```


Sidstnævnte bliver til en cirkel. Hvorfor mon?

I `setup `iniitialiseres programmet og `draw`  skrives den kode, som tegner figurerne. De to skråstreger indikerer at der er tale om kommentarer, som ikke fortolkes af computeren. Den opfatter det som kommentarer. Krølparenteser markerer start og slut på de to såkaldte metoder, `setup` og `draw`. 

Alternativt kan rektangler og ellipser konstrueres ud fra deres hjørner:


```
function setup(){
 createCanvas(100, 100);
 rectMode(CORNERS);
 ellipseMode(CORNERS);
}
function draw(){
 rect(30, 20, 40, 20); // rect(x, y, width, height)
 ellipse(30, 30, 40, 60); // ellipse(x, y, width, height)
}
```


Man kan ændre tykkelsen af streger på følgende måde:


```
strokeWeight(1); // Standard
line(20, 20, 80, 20);
strokeWeight(4); // Tykkere
line(20, 40, 80, 40);
strokeWeight(10); // Fed
line(20, 70, 80, 70);
```


Man kan lave en form bestående af mange punkter der forbindes ved brug af linjer ved at bruge shape. Herunder tegnes en pil:


```
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

Man kan skrive kommentarer i sin kode ved at skrive to skråstreger // eller /* og så vil alt være kommentarer indtil man igen skriver */. Herunder et par eksempler.


## Farver

Vi skal være præcise når vi vil farvelægge former. For sort til hvid og nuancer herimellem gælder følgende farveskema:



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


Herunder ses hvordan man ændrer farven på baggrund og et rektangel:


```
background(255);  // hvid baggrund
stroke(0);        // farve til sort
fill(150);        // indre form grå
rect(50,50,75,100); // tegner rektangel
```


Vil vi have farver så skal vi bruge RGB (Red, Green, Blue):


<table>
  <tr>
   <td>

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image3.png" width="" alt="alt_text" title="image_tooltip">

   </td>
   <td>Rød + grøn =gul
<p>
Red + blå = lilla
<p>
Grøn og blå = blå-grøn
<p>
Rød + grøn + blå = hvid
<p>
Ingen farver = sort
   </td>
  </tr>
</table>


Nuancen af rød, grøn og blå angives med tallene 0 til 255 for alle tre farver. Herunder et eksempel


```
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


Metoden draw opdateres normalt 30 gange i sekundet. Det kaldes også 30 FPS - Frames Per Second. Du sætter antallet af frames i setup ved brug af kommandoen


```
frameRate(x); //x er antallet af frames
```



## Tilfældige tal ved brug af random

Man kan generere tilfældige farver ved at bruge en den indbyggede tilfældighedsgenerator, som vi også kalder for random, der bl.a. kan generere tilfældige heltal på følgende måde:


```
random(50); // giver et tilfældigt tal mellem 0 og 50
random(-50,50); //giver et tilfældigt tal mellem -50 og 50
```


Funktionen viser sig at være ekstremt nyttig i mange sammenhænge, men til at starte med kan den eksempelvis bruges til at tildele en geometrisk form en vilkårlig farv eller placering:


```
fill(random(250),random(250),random(250)); //en tilfældig RGB-farve
ellipse(random(75),random(75),50,50); //en tilfældig position for en cirkel
```



## Skrive til konsollen

Man har mulighed for at skrive til konsolen, som man tilgår via Ctrl+Shift+J i de fleste browsere.


```
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


Her opretter vi en heltalsvariable (en såkaldt tællevariable), som vi inkrementerer  i metoderne i `draw `og printer i både `draw ` og `setup`. Førstnævnte kaldes 30 gange i sekundet, mens setup kun kører en gang. Bemærk vi kan sagtens skrive kode uden for de to metoder og vi kan sågar lave vores egne metoder. Men det vender vi tilbage til senere.


## Afvikling på egen computer

Indtil nu har vi afviklet applikationer på vores p5’s hjemmeside. Vi skal nu til at installere et udviklingsmiljø eller editor på vores egen computer, så vi kan kode uden at være på p5’s hjemmeside. Det er praktisk af mange grunde men bl.a. vi i et udviklingsmiljø får lettere ved at skrive større mængder kode fordelt på flere filer og vi samtidig får en række værktøjer til at skrive kode hurtigere og med færre fejl. 

Vi vælger at bruge Visual Studio Code, som er open source og gratis. Den kan hentes på [https://code.visualstudio.com/](https://code.visualstudio.com/) til stort set alle platforme (herunder Windows, Mac og linux).

Visual Studio Code (VSC) er en slags Word for programmører og vi skriver fremover al vores kode heri. I VSC skal du installere tre plugins:



* Live Server
* P5 JS snippets
* p5.vscode

Når du har installeret disse kan du nøjes med at trykke Ctrl + Shift + p og skrive Create. Herefter kommer der en valgmulighed, som hedder Create P5 JS project. Vælg den og vælg en mappe hvor dine filer skal ligge. I mappen kommer der en række filer og et enkelt bibliotek:

<span style="text-decoration:underline;">Libraries</span>: Mappen med p5.js filer. Den skal du ikke røre ved.

<span style="text-decoration:underline;">Index.html</span>: Hjemmesiden hvor du linker til din javascript kode og style sheet. Ser herunder.

<span style="text-decoration:underline;">Script.src</span>: Her er funktionerne setup og draw. Det er her du skal skrive din kode indtil videre.

<span style="text-decoration:underline;">Style.css</span>: Her kan du skrive style sheets der ændrer på hjemmesidens udseende. Undlad at kigge på den nu.


## Øvelser 



1. Tegn de forskellige geometriske former i forskellige farver 
2. Gør baggrunden mørkeblå. Tegn to linjer der krydser diagonalt i en hvid farve. 
3. Tegn OL-logoet i farver
4. Tegn et hus. Farvelæg det.
5. Tegn et dyr eller et rumvæsen. Farvelæg det.
6. Konstruér en stjerne. To gode funktioner at kende er translate(x,y), som bliver omdrejningspunktet og rotate(vinkel i radianer) roterer de efterfølgende objekter i radianer med uret.
7. Konstruér en blomst ved brug af cirkler og ellipser.
8. Konstruer din egen figur ved hjælp af beginShape og endShape.
9. Du er ved at starte din egen virksomhed og har brug for at kunne autogenerere dit firmas logo. Skriv et program der konstruerer dit logo.
10. Installér Visual Studio Code og følgende plugins:
    1. Live Server til at afvikle en lokal webserver
    2. P5 Project Creator
    3. P5js Snippets


## Projekt: Algoritmisk flag konstruktion

Du har startet en virksomhed op som producerer flag automatisk og digitalt i P5. Flere lande har allerede efterspurgt om deres flag kan blive konstrueret i P5 og en beskrivelse (dvs. en algoritme), der skridt for skridt fortæller hvordan flaget konstrueres vha computeren. Det drejer sig om følgende lande:


<table>
  <tr>
   <td>

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image4.png" width="" alt="alt_text" title="image_tooltip">

<p>
Japan
   </td>
   <td>

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image5.png" width="" alt="alt_text" title="image_tooltip">

<p>
Frankrig
   </td>
   <td>

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image6.png" width="" alt="alt_text" title="image_tooltip">

<p>
Indonesien
   </td>
   <td>

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image7.png" width="" alt="alt_text" title="image_tooltip">

<p>
Benin
   </td>
  </tr>
  <tr>
   <td>

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image8.png" width="" alt="alt_text" title="image_tooltip">

<p>
Kuwait
   </td>
   <td>

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image9.png" width="" alt="alt_text" title="image_tooltip">

<p>
Tjekkiet
   </td>
   <td>

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image10.png" width="" alt="alt_text" title="image_tooltip">

<p>
Maldiverne
   </td>
   <td>

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image11.png" width="" alt="alt_text" title="image_tooltip">

<p>
Israel
   </td>
  </tr>
  <tr>
   <td>

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image12.png" width="" alt="alt_text" title="image_tooltip">

<p>
Syd Afrika
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>


