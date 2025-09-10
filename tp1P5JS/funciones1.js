//función con parametros que NO retorna un valor
function dibujarcelda(i, j) {
  
    let color1 = color(255);
let color2 = color(0);

  if ((i + j) % 2 == 0) {
    fill(color2);   // negro
  } else {
    fill(color1); // blanco
  }
  rect(i * TamCelda + 400, j * 10, TamCelda, 10);
}
