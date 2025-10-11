function dibujarBotones() {
  //DESICIONES
  if (Pantalla === 4 || Pantalla === 8 || Pantalla === 14) {
    image(flechaD, posXD, posYD, tam-30, tam-30);
    image(flechaD, posXD2, posYD2, tam-30, tam-30);
 
 //FINALES MALOS
    }if (Pantalla === 7 || Pantalla === 11 || Pantalla === 16) {
    image(reinicio, posXR, posYR, tam, tam);
    
  } else {
    image(flecha, posX, posY, tam, tam);
  }
}
