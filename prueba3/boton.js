function mousePressed (){ 
  //ramifacaciones
 if (click (posX, posY, tam)) {PasarPantalla (Pantalla,Pantalla++);}
else if (click (posXD, posYD, tam, tam)) {PasarPantalla (Pantalla,7); FinalMalo.play();}
else if (click (posXD2, posYD2, tam, tam)) {PasarPantalla (Pantalla,6);}
else if (click (posXR, posYR, tam, tam)) {PasarPantalla (Pantalla,0);}
//no se por qué la última no funciona
}
