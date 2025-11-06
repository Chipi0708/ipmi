class Juego{
  constructor (){
    this.Jugador = new Jugador ();
    this.ObstaculosQuietos;
     this.ObstaculosMoviendose = [];
     this.CantidadObstaculosMoviendose = 100;
      this.Pista;
      this.PantallaDerrota;
      }
      
  iniciar (){
    for (let i=0; i<this.CantidadObstaculosMoviendose;i++){
    this.ObstaculosMoviendose[i]= new ObstaculosMoviendose();
      }
      
  }
  reiniciar (){
  }
  dibujar (){
    this.dibujarPista();
    this.dibujarVidas();
    this.dibujarObstaculosMoviendose();
    this.Jugador.dibujar();
    
    
  }//final dibujar
  dibujarObstaculosMoviendose() {
  for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
    this.ObstaculosMoviendose[i] = new ObstaculosMoviendose();
  }
}

dibujarPista() {
  // tu código acá
}

dibujarVidas() {
  // tu código acá
}

teclaPresionada(){
  this.Jugador.teclaPresionada();
}
}//final
