let Pantalla = 0;
  let texto=["Los tres cerdos deciden independizarse y cada uno construye su casa", "El primer cerdito construye su casa de paja","El segundo cerdito construye su casa de madera", 
  "Y el tercer cerdito construye su casa de ladrillos",
  "De repente, el lobo se presenta en la casa de paja del primer cerdito", "El cerdito intenta negociar con el lobo",
  "El lobo no le importa lo que diga y se lo come.","El cerdito escapa hacia la casa de su hermanito"];
let MiArreglo;
let miImagen =[]
  let tam=50
let pantallaActual;
let pantallaProx;
let posY = 300
let posX = 240
let posXD = 100
let posYD = 300
let posYD2 = 300
let posXD2 = 300
let flecha;
function preload () {
  for (let i =0; i <18; i++) {
    miImagen [i]= loadImage("data/pantalla"+i+".jpeg");
  }
  miSonido= loadSound("data/reliable-safe-327618.mp3");
  flecha= loadImage("data/flecha.png");
}//final preload

function setup() {
  createCanvas(640, 480);
  background (200);
   
}


function draw(){
  dibujarPantalla(Pantalla);
  dibujarBotones ();
}
