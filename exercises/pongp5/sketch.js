let r_p;  // right paddle
let l_p;  // left paddle
let ball;

let score1 = 0;
let score2 = 0;

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
  background(30);
  textSize(20);
  text(l_p.name,30,50)
  text(score1,45,25);
  
  text(r_p.name,290,50)
  text(score2,340,25);

  //moveHuman()   //uncomment to move left side manually
  
  l_p.move(ball.x,ball.y, ball.vx, ball.vy, history,r_p.x,r_p.y);   //changes the y value using velocity
  r_p.move(ball.x,ball.y, ball.vx, ball.vy, history,l_p.x,l_p.y); //AI movement
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
  ball.vy += 0.001
  //detect collision
  if(ball.x>=380 && ball.y<=(r_p.y+50) && ball.y>=(r_p.y-50))
  {
    ball.vx *=-1;
  }
  
  if(ball.x<=20 && ball.y<=(l_p.y+50) && ball.y>=(l_p.y-50))
  {
    ball.vx *=-1;
  }
  
}