class ObstaculosMoviendose{
  constructor (){
    this.Color = color(0,250,0);
    //this.Tamaño;
    this.posX= random (-1000,-100);
    //poner posicion, de izquierda a derecha. la posicion en X negativas y random
    this.posY= floor (random (0,4))* 50; 
    //4 filas por ejm, 50,100,1550. Podriamos hacer un random, entre 1-4. floor, redeondar al mas cercano
    this.Velocidad=10;
  }
  
  dibujar () {
    fill (this.Color);
    rect (this.posX, this.posY, 30, 50);
    this.posX= this.posX + this.Velocidad;
    //reciclar autos
  }
  
  MoverX (){
  }
}
