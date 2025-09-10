function grilla1() {
  // i = x
  // j = y
  let color1 = color(255);
let color2 = color(0);

  for (let j = 0; j < CantidadCelda; j++) {
    for (let i = 0; i < CantidadCelda; i++) {

      // Animación mouse sobre celda
      if (mouseX > i * TamCelda + 400 && mouseX < i * TamCelda + 400 + TamCelda &&
        mouseY > j * 10 && mouseY < j * 10 + 10) {
        fill(color2);  // Celda negra si el mouse está encima
        rect(i * TamCelda + 400, j * 10, TamCelda, 10);
        
        //Grilla base byn

      } else {
        dibujarcelda(i, j); // funciones1
      }
    }
  }
} //final void
