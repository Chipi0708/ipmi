//función con parametros que NO retorna un valor
void dibujarcelda(int i, int j) { //   (solo minisculas)
  if ((i + j) % 2 == 0) {
    fill(color1);
  } else {
    fill(color2);
  }
  rect(i * TamCelda + 400, j * 10, TamCelda, 10);
}
