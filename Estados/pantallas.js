class pantallas {
constructor (){
  this.PantallaInstrucciones;
 this.PantallaDerrota;
  this.PantallaVictoria;
    this.PantallaCreditos;
}
PantallaDerrota(){
  background(200)
 fill(255, 0, 0, 200);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("¡GAME OVER!", width/2, height/2 - 20);
    textSize(20);
    text("Presiona R para jugar de nuevo", width/2, height/2 + 30);
    textAlign(LEFT);
}

PantallaVictoria(){
 fill(0, 255, 0);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("¡VICTORIA!", width/2, height/2 - 20);
    textSize(20);
    text("Presiona R para jugar de nuevo", width/2, height/2 + 30);
    textAlign(LEFT);

}

PantallaInstrucciones(){
  background(200)
 fill(255, 0, 0, 200);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Como jugar", width/2, height/2 - 20);
    textSize(20);
    text("Presiona K para comenzar", width/2, height/2 + 30);
    textAlign(LEFT);
}




}//Final
