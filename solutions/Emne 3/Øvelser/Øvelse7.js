function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) { 
  if ((key == 'a') || (key == 'A')) { 
    line(30, 90, 60, 30); 
    line(90, 90, 60, 30); 
    line(45, 60, 75, 60); 
  } 
  if ((key == 'v') || (key == 'V')) { 
    line(30, 30, 60, 90); 
    line(90, 30, 60, 90); 
  } 
 } 
} 