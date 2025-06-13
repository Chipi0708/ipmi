void grilla1(){
  
  
  // i = x
 // j = y
 
 
for (int j = 0; j < CantidadCelda; j++) {
    for (int i = 0; i < CantidadCelda; i++) {

      

      // Animación mouse sobre celda
      if (mouseX > i * TamCelda + 400 && mouseX < i * TamCelda + 400 + TamCelda &&
          mouseY > j * 10 && mouseY < j * 10 + 10) {
        fill(color2);  // Celda negra si el mouse está encima
        
        
        

// Grilla base byn

      } else {
        if ((i + j) % 2 == 0) {
          fill(color1);
        } else {
          fill(color2);
        }
      }

      rect(i * TamCelda + 400, j * 10, TamCelda, 10);
      
    }
  }



}//final del void
