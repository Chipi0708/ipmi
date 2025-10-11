function mousePressed (){ 
  //ramifacaciones
 if (click (posX, posY, tam)) 
 {PasarPantalla (Pantalla,Pantalla++);}
else if (click (posXD, posYD, tam, tam))
{PasarPantalla (Pantalla,12); FinalMalo.play();}
else if (click (posXD2, posYD2, tam, tam)) 
{PasarPantalla (Pantalla,5);}
else if (click (posXR, posYR, tam, tam)) 
{PasarPantalla (Pantalla,0);}
//no se por qué la última no funciona
 if (Pantalla === 12 || Pantalla === 13 || Pantalla === 14) {
    if (click(posXR, posYR, tam, tam)) {
      PasarPantalla(Pantalla, 0);
    }
  }
}
