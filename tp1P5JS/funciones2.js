function verificarmousedentrodecelda(i, j, TamCelda2, EspacioY) {
  return (mouseX > i * TamCelda2 + 480 && mouseX < i * TamCelda2 + 480 + 10 &&
          mouseY > j * EspacioY + 90 && mouseY < j * EspacioY + 90 + 40);
}
