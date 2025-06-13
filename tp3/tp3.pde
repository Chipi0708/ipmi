//https://youtu.be/Cs5XNxElZNE

PImage miImagen;
int CantidadCelda=50;//en realidad,40
int TamCelda=40;
color color1,color2;
int i=0;
int j=0;
  //cuadrado del medio
  int EspacioY=40;
  int CantidadCelda2=24;
  int TamCelda2=10;
int CantidadCelda3=6; //6 en y


void setup(){
  size(800,400);
  background(200);
  miImagen = loadImage("MIIMAGEN.jpg");
  color1= color(255);
 color2= color(0);
}
 
 void draw(){
 background(200);
  image(miImagen, 0, 0, 400, 400);
grilla1();
grilla2();



// Colores random
 if (mousePressed&&(mouseButton==RIGHT)) {
      color1 = color(random(255), random(255), random(255));
      color2 = color(random(255), random(255), random(255));
    }

  
   
  

 }//fin draw
 
 //Resetear

  void keyPressed (){

  color1= color(255);
 color2= color(0);
} 
   
