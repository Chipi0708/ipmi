class Juego {
  constructor () {
    this.Jugador = new Jugador ();
    this.ObstaculosQuietos;
    this.ObstaculosMoviendose = [];
    this.CantidadObstaculosMoviendose = 100; //CANTIDAD
    this.Pista;
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
    this.dibujarPista();
    this.dibujarVidas();
    this.dibujarObstaculosMoviendose();
    this.Jugador.dibujar();
    //this. COLISION();
  }//final dibujar
  dibujarObstaculosMoviendose() {
    for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
      this.ObstaculosMoviendose[i].dibujar();
    }
  }

  dibujarPista() {
    // tu código acá
  }

  dibujarVidas() {
    // tu código acá
  }

  teclaPresionada() {
    this.Jugador.teclaPresionada();
  }
}//final
