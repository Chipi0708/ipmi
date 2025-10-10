function mousePressed (){ 
  //ramifacaciones
 if (click (posX, posY, tam)) {PasarPantalla (Pantalla,Pantalla++);}
else if (click (posXD, posYD, tam, tam)) {PasarPantalla (Pantalla,5); miSonido.play();}
else if (click (posXD2, posYD2, tam, tam)) {PasarPantalla (Pantalla,6);}

}
