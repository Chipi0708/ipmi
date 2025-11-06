class Cerdito{
  constructor (){
    this.Color= color(255,0,0);
    //this.Tamaño=20;
    this.posX = width/2;
    this.posY = 300;
    
  }
  
   dibujar (){
    fill (this.color);
    rect (this.posX, this.posY,30,50);
  }
  
  
  //Mover 
  teclaPresionada(){
    if (keyCode === LEFT_ARROW){
     this.posX=  this.posX -10; 
    } else if (keyCode === RIGHT_ARROW){
    this.posX=  this.posX +10; 
    }
  }
  
}
