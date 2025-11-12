class Juego {
  constructor () {
    this.Jugador = new Jugador ();
    this.ObstaculosQuietos;
    this.ObstaculosMoviendose = [];
    this.CantidadObstaculosMoviendose = 100; //CANTIDAD, como hago para que la cantidad sea infinita?
    this.Pista= new Pista ();
    this.PantallaDerrota;
  }

  iniciar () {
    for (let i=0; i<this.CantidadObstaculosMoviendose; i++) {
     this.ObstaculosMoviendose[i]= new ObstaculosMoviendose();
    
    }
   
  }
  reiniciar () {
  }
  dibujar () {
    if (this.Jugador.Vidas ===0) {background (250,0,0)} else {
    this.dibujarPista();
    this.dibujarVidas();
    this.dibujarObstaculosMoviendose();
    this.Jugador.dibujar();
    this.controlColision();
    }
  }//final dibujar
  
  
    
  dibujarPista() {
    this.Pista.Calle();
      this.Pista.ZonaSegura();
      this.Pista.Destino();
  }
   dibujarVidas() {
   fill(255);
   text("Vidas:" + this.Jugador.Vidas,30,30);
  }
  dibujarObstaculosMoviendose() {
    for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
      this.ObstaculosMoviendose[i].dibujar();
    }
  }
   controlColision() {
    for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
      if (dist(this.ObstaculosMoviendose[i].posX, this.ObstaculosMoviendose[i].posY,this.Jugador.Cerdito.posX,this.Jugador.Cerdito.posY)<20){
      this.Jugador.QuitarVida ();
    this.iniciar ();
  this.Jugador.iniciarCerdito();
 this.PantallaDerrota();}
    }
  }
 
PantallaDerrota() {
if (this.Jugador.Vidas ===0) {background (250,0,0)}
}
  teclaPresionada() {
    this.Jugador.teclaPresionada();
  }
  
 
}//final
