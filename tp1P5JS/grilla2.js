function grilla2() {
    let color1 = color(255);
let color2 = color(0);
  
  for (let j = 0; j < CantidadCelda3; j++) {
    for (let i = 0; i < CantidadCelda2; i++) {
      
      // // Animación con dist, manteniendo apretado el mouse

      if (mouseIsPressed) {  
        let d = dist(mouseX, mouseY, i * TamCelda2 + 480, j * EspacioY + 90);
        let mezcla = map(d, 0, 300, 0, 1);  //float map

        
        let combinado = lerpColor(color1, color2, mezcla); 
        fill(combinado);

// Animación al pasar el mouse (funciones2)

      } else if (verificarmousedentrodecelda(i, j, TamCelda2, EspacioY)) {
        fill(color1);
        
 // Grilla baseByN 

      } else {
        if ((i + j) % 2 === 0) {
          fill(color2); 
        } else {
          fill(color1);
        }
      }

      noStroke();
      rect(i * TamCelda2 + 480, j * EspacioY + 90, 10, 40);
    }
  }
} 
//final void
