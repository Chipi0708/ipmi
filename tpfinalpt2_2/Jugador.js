class Jugador{
  constructor (){
    this.Vidas = 3;
    this.Cerdito= new Cerdito();
  }
  
  dibujar (){
    this.Cerdito.dibujar();
  }
  /*MoverCerdito (){
    this.Cerdito.mover();
  }*/
  QuitarVida (){
    this.Vidas = this.Vidas -1;
  }
  
  teclaPresionada(){
  this.Cerdito.teclaPresionada ();
}
} //final
