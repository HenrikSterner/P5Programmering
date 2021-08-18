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