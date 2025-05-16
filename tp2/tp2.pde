int mivariable;
int mivariable2;
int mivariable3;
int mivariable4;
int mivariable5=700;
int pantalla;
int mitiempo;
PImage miImagen1;
PImage miImagen2;
PImage miImagen3;
PImage miImagen4;
PImage miImagen5;
PImage miImagen6;
PFont miTexto;
PFont miTexto2;

void setup (){
  size (640,480);
  background (255);
  mivariable=0;
  mivariable2=0;
  mivariable3=0;
  mivariable4=0;
  pantalla=0;
  mitiempo=0;
  miImagen1= loadImage ("ciclope.jpg");
  miImagen2= loadImage ("eolo.jpg");
  miImagen3= loadImage ("circe.jpg");
  miImagen4= loadImage ("vaca.jpg");
  miImagen5= loadImage ("calipso.jpg");
  miImagen6= loadImage ("penelope.jpg");
  miTexto= loadFont ("Consolas-48.vlw");
  miTexto2= loadFont ("AgencyFB-Bold-48.vlw");
}



void draw (){
  
 
  mitiempo=mitiempo+1;
  
  if (mitiempo>0 && mitiempo<400){ pantalla=0;}
  else if (mitiempo>400 && mitiempo<800){ pantalla=1;}
  else if (mitiempo>800 && mitiempo<1100){ pantalla=2;}
  else if (mitiempo>1100 && mitiempo<1700){ pantalla=3;}
  else if (mitiempo>1700 && mitiempo<2300){ pantalla=4;}
  else if (mitiempo>2300 && mitiempo<3200){ pantalla=5;}
  
  mivariable=mivariable+1;
 
  
  if(pantalla==0) { background (0); image(miImagen1,0,0,640,480);
  textFont (miTexto2);
  textSize(30);
  fill(255);
  text("Cíclope Polifemo\nUlises lo ciega para escapar,\n pero el cíclope pide venganza a su padre Poseidón.",200,mivariable,400,200);
  }
  
  
  else if (pantalla==1){ background (255,0,0); image(miImagen2, 0, 0, 640, 480);
textFont (miTexto);
  textSize(20);
  fill(255);
  mivariable=0;
  mivariable=mivariable+1;
  mivariable2=mivariable2+1;
text("Eolo le da un saco con los vientos,\n pero sus hombres lo abren por error\n y se alejan de Ítaca, el reino de Ulises.",mivariable2,mivariable2,200,200);}
  
  
  else if (pantalla==2){ background (0,255,0); image(miImagen3, 0, 0, 640, 480);
textFont (miTexto2);
  textSize(25);
  fill(255);
  text("Circe convierte a sus hombres en cerdos;\n luego los ayuda tras un año de estancia.",200,mivariable,400,200);}
  
  
  else if (pantalla==3){ background (0,255,0); image(miImagen4, 0, 0, 640, 480);
textFont (miTexto);
  textSize(25);
  fill(255,0,0);
  mivariable3=mivariable3-1;

  text("En la Isla de Helios,\n sus hombres matan vacas sagradas \ny Zeus destruye su barco con \ntodos sus tripulantes adentro.",mivariable3+640,mivariable3+480,350,350);}
  
  
  else if (pantalla==4){ background (0,255,0); image(miImagen5, 0, 0, 640, 480);
textFont (miTexto2);
  textSize(35);
  fill(250,0,0);
  mivariable4=mivariable4-1;
  text("Calipso lo retiene como amante durante 7 años hasta\n que los dioses ordenan su liberación.\n Después de sobrevivir a una gran tormenta,\n Ulises regresa a su reino.",70,mivariable4+480,600,400);}
  
  
  else if (pantalla==5){ background (0,255,0); image(miImagen6, 0, 0, 640, 480);
textFont (miTexto);
  textSize(25);
  fill(0,0,50);
  mivariable5=mivariable5-1;
  text("Penélope propone un concurso para elegir \n un nuevo esposo entre los numerosos\n pretendientes que ocupan el palacio.\n El reto consiste en encordar el gran arco\n de Ulises y disparar una flecha a través\n doce hachas alineadas,\n algo que solo Ulises podía hacer.",mivariable5,50,400,400);}
  if (mivariable5<100){
    mivariable5=100;
  rect(0,430,80,50);
  textFont (miTexto2);
  textSize(25);
  fill(255);
  text("Reiniciar",0,440,80,50);
}
 
 
}

void mousePressed (){
  if (pantalla==5) {
  if (mouseX>0  && mouseX<80 && mouseY> 430 && mouseY < 480) {
    pantalla=0;
    mitiempo=0;
  mivariable=0;
  mivariable2=0;
  mivariable3=0;
  mivariable4=0;
  mivariable5=700;
}
    }
    }
