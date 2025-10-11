let Pantalla = 0;
  let texto=[];
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
let opcion1;
function preload () {
  for (let i =0; i <15; i++) {
    miImagen [i]= loadImage("data/pantalla"+i+".jpeg");
    texto [i]= loadStrings("data/texto"+i+".txt");
  }
  miSonido= loadSound("data/reliable-safe-327618.mp3");
  FinalMalo= loadSound("data/no-luck-too-bad-disappointing-sound-effect-112943.mp3");
  FinalBueno= loadSound("data/piglevelwin2mp3-14800.mp3");
  flecha= loadImage("data/flecha.png");
  flechaD= loadImage("data/flechaarriba.png");
  reinicio= loadImage("data/reiniciar.png");
  opcion1= loadStrings("data/opcion1.txt");
}//final preload

function setup() {
  createCanvas(640, 480);
  background (200);
   
}


function draw(){
  dibujarPantalla(Pantalla);
  dibujarBotones();
  //dibujarOpciones();
 
}
