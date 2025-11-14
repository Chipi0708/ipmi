class Juego {
  constructor () {
    this.Jugador = new Jugador ();
    this.ObstaculosQuietos;
    this.ObstaculosMoviendose = [];
    this.CantidadObstaculosMoviendose = 100; //CANTIDAD, como hago para que la cantidad sea infinita?
    this.Pista= new Pista ();
    this.pantallas = new pantallas();
    this.mostrarInstrucciones = true;
  }

 iniciar() {

  if (this.mostrarInstrucciones) {
    this.pantallas.PantallaInstrucciones();

    if (key === 'k') {    
      this.mostrarInstrucciones = false;

      // Ahora sí creo los obstáculos
      for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
        this.ObstaculosMoviendose[i] = new ObstaculosMoviendose();
      }
    }

    return; // <<< MUY IMPORTANTE ► detiene el dibujo del juego hasta que se apriete "k"
  }

  // Si ya no estamos en instrucciones → el juego puede iniciar normal
}

  reiniciar () {
  }
  
  
  dibujar () {
      if (this.mostrarInstrucciones) {
    this.pantallas.PantallaInstrucciones();
    return;
  }
    //if (this.pantallas.PantallaInstrucciones) {background (250,0,0)} else {
    this.dibujarPista();
    this.dibujarVidas();
    this.dibujarObstaculosMoviendose();
    this.Jugador.dibujar();
    this.controlColision();
    this.PantallaDerrota();
    this.PantallaVictoria();
  
    
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
  if (this.Jugador.Vidas === 0) {
    this.pantallas.PantallaDerrota();
  }
}

PantallaVictoria(){
  if (this.Jugador.Cerdito.posX >= 150 && this.Jugador.Cerdito.posX <= 210 &&
        this.Jugador.Cerdito.posY <= 50) {
     this.pantallas.PantallaVictoria();
}
}
teclaPresionada() {
  let ganar = (
    this.Jugador.Cerdito.posX >= 150 &&
    this.Jugador.Cerdito.posX <= 210 &&
    this.Jugador.Cerdito.posY <= 50
  );

  // Si NO ganó → permite mover
  if (!ganar) {
    this.Jugador.teclaPresionada();
  }
}



 /* teclaPresionada() {
    this.Jugador.teclaPresionada();
  }*/
  
 
}//final
