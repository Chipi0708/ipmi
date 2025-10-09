function dibujarPantalla (estado) { //funcion con parametros
  image(miImagen[estado], 0, 0, 640, 480);
  fill(0)
    textSize(16)
    text(texto[estado], 10, 10);

  if (Pantalla===4||Pantalla===9||Pantalla===14) {
    rect(posXD, posYD, tam, tam)
      rect(posXD2, posYD2, tam, tam)
  } else {//dibujar rectangulo o boton
    rect(posX, posY, tam, tam)
  }
}
