let miImagen;
let CantidadCelda=50;
let TamCelda=40;
let color1;
let color2;
let i=0;
let j=0;
let EspacioY=40;
let CantidadCelda2=24
let TamCelda2=10;
let CantidadCelda3=6;




function preload() {
  miImagen = loadImage("data/MIIMAGEN.jpg"); 
}//final preload



function setup() {
  createCanvas(800, 400);
  background(200);
  let color1 = color(255);
let color2 = color(0);
  
  
}//final setup



function draw() {
  image(miImagen, 0, 0, 400, 400);
  //Celda grilla 1 fondo
    for (let j = 0; j < CantidadCelda; j++) {
    for (let i = 0; i < CantidadCelda; i++) {
      dibujarcelda(i, j); // función en otra pestaña
      
      //Celda grilla 2 cuadrado del medio
         }
  }
        grilla1();
        grilla2();
        
  //Colores random

  
} //final draw

/*function mousePressed() {
  if (mouseButton === RIGHT) {
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
  }
}*/
