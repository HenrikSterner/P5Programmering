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
  // Det er her i peddleAI.js=> move at I skal skrive noget kode der får jeres AI til at rykke sig
  // ballx, bally er boldens nuværende postition
  // ballxspeed, ballyspeed boldens velocity 
  // history er en liste af vektorer der pejer på de sidste 25 pkt bolden har været
  // Paddlex og Paddley er positionen af den anden paddle
  
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