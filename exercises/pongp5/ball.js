class Ball
{
  constructor()
  {
    this.x = 200;
    this.y = 100;
    this.w = 20;
    this.vx = random(1,1.5)
    this.vy = random(2,2.5)
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
    this.history.push(v)
    if(this.history.length>25)
    {
      this.history.slice(0,1)
    }

  }
  reset()
  {
    this.history = []
    this.x = 200;
    this.y = 100;
  }
  show()
  {
    fill(255);
    noStroke();
    ellipse(this.x,this.y,this.w);
  }
}