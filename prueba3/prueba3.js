let Pantalla = [];
  let texto=["Los tres cerdos deciden independizarse y cada uno construye su casa", "El primer cerdito construye su casa de paja","El segundo cerdito construye su casa de madera", 
  "Y el tercer cerdito construye su casa de ladrillos",
  "De repente, el lobo se presenta en la casa de paja del primer cerdito", "El cerdito intenta negociar con el lobo",
  "El lobo no le importa lo que diga y se lo come.","El cerdito escapa hacia la casa de su hermanito"];
let MiArreglo;
let miImagen =[]
  let tam=50
let pantallaActual;
let pantallaProx;


function preload () {
  for (let i =0; i <18; i++) {
    miImagen [i]= loadImage("data/pantalla"+i+".jpeg");
  }
}//final preload

function setup() {
  createCanvas(640, 480);
  background (200);
   
}


function draw()
//cambio de estados
{
  if (Pantalla===0) {
    image(miImagen[0], 0, 0, 640, 480);
  } else if (Pantalla===1) {
    image(miImagen[1], 0, 0, 640, 480);
  }
  image(miImagen[2], 0, 0, 640, 480);
  image(miImagen[4], 0, 0, 640, 480);
  image(miImagen[5], 0, 0, 640, 480);
  image(miImagen[6], 0, 0, 640, 480);
  image(miImagen[7], 0, 0, 640, 480);
  image(miImagen[8], 0, 0, 640, 480);
  image(miImagen[9], 0, 0, 640, 480);
  image(miImagen[10], 0, 0, 640, 480);
  image(miImagen[11], 0, 0, 640, 480);
  image(miImagen[12], 0, 0, 640, 480);
  image(miImagen[13], 0, 0, 640, 480);
  image(miImagen[14], 0, 0, 640, 480);
  image(miImagen[15], 0, 0, 640, 480);
  image(miImagen[16], 0, 0, 640, 480);
  image(miImagen[17], 0, 0, 640, 480);
  text(texto[0], 10, 10);
  //text(texto[1], 10, 10);
  //text(texto[2], 10, 10);
  //text(texto[3], 10, 10);
  //text(texto[4], 10, 10);
  //text(texto[5], 10, 10);
}//final del draw
