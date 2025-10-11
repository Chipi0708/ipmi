let Pantalla = 0;
  let texto=["Los tres cerdos deciden independizarse y cada uno construye su casa", "El primer cerdito construye su casa de paja","El segundo cerdito construye su casa de madera", 
  "Y el tercer cerdito construye su casa de ladrillos",
  "De repente, el lobo se presenta en la casa de paja del primer cerdito", "El cerdito intenta negociar con el lobo",
  "El lobo no le importa lo que diga y se lo come.","El cerdito escapa hacia la casa de su hermanito"];
let MiArreglo;
let miImagen =[]
  let tam=80
let pantallaActual;
let pantallaProx;
let posY = 420
let posX = 550
let posXD = 400
let posYD = 420
let posYD2 = 420
let posXD2 = 100
let posYR = 20 //reinicio
let posXR = 550 //reinicio
let flecha;
function preload () {
  for (let i =0; i <18; i++) {
    miImagen [i]= loadImage("data/pantalla"+i+".jpeg");
  }
  miSonido= loadSound("data/reliable-safe-327618.mp3");
  FinalMalo= loadSound("data/no-luck-too-bad-disappointing-sound-effect-112943.mp3");
  FinalBueno= loadSound("data/piglevelwin2mp3-14800.mp3");
  flecha= loadImage("data/flecha.png");
  flechaD= loadImage("data/flechaarriba.png");
  reinicio= loadImage("data/reiniciar.png");
}//final preload

function setup() {
  createCanvas(640, 480);
  background (200);
   
}


function draw(){
  dibujarPantalla(Pantalla);
  dibujarBotones();
 
}
