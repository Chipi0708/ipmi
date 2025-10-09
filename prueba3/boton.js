function mousePressed (){ 
  //ramifacaciones
 if (click (posX, posY, tam)) {PasarPantalla (Pantalla,Pantalla++);}
else if (click (posXD, posYD, tam)) {PasarPantalla (Pantalla,5); miSonido.play();}
else if (click (posXD2, posYD2, tam)) {PasarPantalla (Pantalla,6);}

}
