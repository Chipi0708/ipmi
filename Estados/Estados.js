let juego;
//let pantalla;
function setup() {
  createCanvas(640, 480);
  juego = new Juego ();
 // pantalla = new Pantalla();
  juego.iniciar();
}


function draw() {
  background (200);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
  juego.iniciar();
}
