let juego;
//let pantalla;
function setup() {
  createCanvas(400, 400);
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
}
