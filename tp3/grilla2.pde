void grilla2(){

 // i = x
 // j = y
  

   
    for (int j = 0; j < CantidadCelda3; j++) {
    for (int i = 0; i < CantidadCelda2; i++) {
      
 // // Animación con dist, manteniendo apretado el mouse

      if (mousePressed) {
        float d = dist(mouseX, mouseY, i * TamCelda2 + 480,  j * EspacioY + 90);
        float mezcla = map(d, 0, 300, 0, 1);  
   

        color combinado = lerpColor(color1, color2, mezcla);  // una mezcla de color1 y color2
        fill(combinado);


// Animación al pasar el mouse


      } else {
        if (mouseX > i * TamCelda2 + 480 && mouseX < i * TamCelda2 + 480 + 10 &&
            mouseY > j * EspacioY + 90 && mouseY < j * EspacioY + 90 + 40) {
          fill(color1); ///blanco
          
          
 // Grilla baseByN    
          
        } else {
          if ((i + j) % 2 == 0) {
            fill(color2); ///negro
          } else {
            fill(color1); ///blanco
          }
        }
      }

        noStroke();
      rect(i*TamCelda2+480, j*EspacioY+90, 10,40);//Grilla baseByN
    }
  }
 
  
  
  }//final void
