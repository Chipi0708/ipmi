void grilla2(){

 // i = x
 // j = y
  

   
    for (int j = 0; j < CantidadCelda3; j++) {
    for (int i = 0; i < CantidadCelda2; i++) {
      
 // // Animación con dist, manteniendo apretado el mouse

      if (mousePressed) {
        float d = dist(mouseX, mouseY, i * TamCelda2 + 480,  j * EspacioY + 90);
        float mezcla = map(d, 0, 300, 0, 1);  
   

        color combinado = lerpColor(color1, color2, mezcla);  /*En palabras de processing:
        "Calcula un color o colores entre dos colores en un incremento específico"
        En mis palabras: una función que da como resultado un color combinado entre color1 y color2. 
        Lo uso en la función dist donde aparece cómo "color gris" y para que funcione en el random
        */

        fill(combinado);


// Animación al pasar el mouse (funciones2)


      } else if 
        (verificarmousedentrodecelda ( i,  j,  TamCelda2,  EspacioY)){
      fill (color1);
      
 // Grilla baseByN    
          
        } else {
          if ((i + j) % 2 == 0) {
            fill(color2); ///negro
          } else {
            fill(color1); ///blanco
          }
        }
      

        noStroke();
      rect(i*TamCelda2+480, j*EspacioY+90, 10,40);//Grilla baseByN
    }
  }
 
  
  
  }//final void
