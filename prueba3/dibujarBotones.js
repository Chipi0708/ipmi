function dibujarBotones() {
  if (Pantalla === 4 || Pantalla === 6 || Pantalla === 9) {
    image(boton, posXD, posYD, tam + 100, tam);
    image(boton, posXD2, posYD, tam + 100, tam);

    fill(250);
    textSize(16);
    textAlign(LEFT, TOP);

    if (Pantalla === 4) {
      text('Huir a casa de madera', posXD2 + 10, posYD2 +20);
      text('Intentar negociar', posXD + 10, posYD + 20);
    } else if (Pantalla === 6) {
      text('Enfrentarse al Lobo', posXD2 + 10, posYD +20);
      text('Huir a casa de ladrillo', posXD + 10, posYD +20);
    } else if (Pantalla === 9) {
      text('Huir', posXD2 + 10, posYD +20);
      text('Colocar agua hirviendo', posXD + 10, posYD +20);
    }
  }
  else if (Pantalla === 12 || Pantalla === 13 || Pantalla === 14) {
    image(reinicio, posXR, posYR, tam, tam);
  }
  else {
    image(flecha, posX, posY, tam, tam);
  }
}
