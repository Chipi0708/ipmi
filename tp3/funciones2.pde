//funcion con parametros que SI retorna un valor

boolean verificarmousedentrodecelda(int i, int j, int TamCelda2, int EspacioY) {
  return (mouseX > i * TamCelda2 + 480 && mouseX < i * TamCelda2 + 480 + 10 &&
          mouseY > j * EspacioY + 90 && mouseY < j * EspacioY + 90 + 40);
}
